---
title: "Scanning a Network for Modbus Devices (Without Breaking Them)"
date: 2026-03-07
draft: false
tags: ["modbus", "python", "concurrency", "iot"]
summary: "Modbus TCP has no discovery protocol. Here's how to build a fast, universal device scanner — and why naive concurrency will give you wrong results."
math: true
---

You need to find every solar inverter on a local network. Automatically. No config files, no manual IP entry — just scan, identify, and start reading data.

The catch? The protocol these devices speak was designed in 1979, and it has no concept of network discovery.

## The problem with Modbus

Modbus TCP is request-response over a raw TCP socket. No service advertisement, no mDNS, no broadcast. A device sitting on port 502 will never announce itself. The only way to find it is to connect, ask a question, and see if the answer makes sense.

Modbus *does* define a device identification mechanism — Function Code 43 / MEI Type 14 (Read Device Identification), specified in [section 6.21 of the Modbus Application Protocol V1.1b](https://www.support.aceautomation.eu/wp-content/uploads/Modbus_Application_Protocol_V1_1b.pdf). It can return objects like vendor name, product code, and revision. But for a universal scanner, it's not something you can depend on:

- **Devices aren't required to implement it.** The spec's own state diagram (Figure 30) shows that a device may respond to FC 43 with exception code 01 (Illegal Function) — meaning it simply doesn't support the function. In practice, many inverters and IoT gateways don't.
- **The strings are free-form.** One device returns `"HUAWEI"`, another `"Huawei Technologies"` — there's no standardized vocabulary, so you'd need fuzzy matching against every possible variation.
- **It doesn't give you a register map.** Even if you identify the vendor, you still need to know *which registers to read* for that specific model. The identification response alone doesn't tell you that.

So in practice, the most reliable approach is to skip FC 43 entirely and go straight to probing known registers — which doubles as both identification *and* validation that you can actually communicate with the device.

```
  Scanner                    Device (port 502)
     |                            |
     |--- TCP connect ----------->|
     |<-- connected --------------|
     |                            |
     |--- read register 30000 --->|   "Are you a Huawei?"
     |<-- error ------------------|   "Nope."
     |                            |
     |--- read register 40070 --->|   "Are you an SMA?"
     |<-- 0x534D4100 -------------|   "Yes!"
     |                            |
```

Identification means trying combinations of two things:

- **Profiles** — a register map fingerprint for a specific brand (Huawei, SMA, Fronius, SolarEdge, ...)
- **Slave IDs** — Modbus unit addresses, typically in the range 0–2, but varies per manufacturer

For each combination you open a TCP connection, attempt a register read, and check if the response is valid. First match wins.

The math is simple. Given $H$ hosts on a network, $P$ known profiles, and $S$ slave IDs to try per profile — the search space is:

$$H \cdot P \cdot S$$

With $H = 10$, $P = 8$, $S = 3$, that's 240 connection attempts, each carrying a timeout $t$.

## Why you can't just parallelize everything

The instinct is to throw all 240 attempts into a thread pool and be done in $O(t)$. On paper, it's the fastest possible approach. In practice, it produces wrong results.

Here's why: **not all Modbus devices support multiple concurrent TCP clients.**

Some inverters handle concurrent connections just fine. Others — and there's no way to know in advance — only accept a single client at a time. A second connection gets refused or, worse, silently corrupts the response.

```
  Thread 1                       Device
     |--- TCP connect ----------->|
     |<-- connected --------------|
     |                            |
  Thread 2                        |
     |--- TCP connect ----------->|
     |<-- REFUSED / garbage ------|   single-client only
```

If you're building a scanner for a known device model, you can optimize for its behavior. But a **universal scanner** — one that has to work with any device on any network — must design for the lowest common denominator.

The constraint is clear: **one connection at a time per device.**

## Three strategies, compared

### 1. Fully sequential — $O(H \cdot P \cdot S \cdot t)$

```
H1:P1:S0 -> H1:P1:S1 -> H1:P1:S2 -> H1:P2:S0 -> ... -> H10:P8:S2
|_________________________ 240 * t seconds ________________________|
```

Correct but painful. At $t = 1s$, a scan takes up to **4 minutes**.

### 2. Fully parallel — $O(t)$

```
H1:P1:S0  --|
H1:P1:S1  --|
H1:P2:S0  --|-- all at once, ~1s
H2:P1:S0  --|
...       --|
```

Fast, but **unreliable**. False negatives on single-client devices make the results untrustable. A scanner that misses devices is worse than a slow one.

### 3. Parallel across hosts, sequential per host — $O(P \cdot S \cdot t)$

```
Thread 1 (H1)             Thread 2 (H2)             Thread 3 (H3)
  |                         |                         |
  |-- P1:S0                 |-- P1:S0                 |-- P1:S0
  |-- P1:S1                 |-- P1:S1                 |-- P1:S1
  |-- P1:S2                 |-- P1:S2                 |-- P1:S2
  |-- P2:S0                 |-- P2:S0                 |-- P2:S0
  |-- ...                   |-- ...                   |-- ...
  |                         |                         |
  |______________________ P * S * t seconds ________________________|
```

The $H$ factor disappears. Hosts are independent physical devices — testing them concurrently is always safe. Within a single host, we respect the single-client constraint by going one attempt at a time.

Worst case drops from $O(240s)$ to $O(24s)$.

## Implementation

A `ThreadPoolExecutor` with one worker per host gives us the host-level parallelism:

```python
with ThreadPoolExecutor(max_workers=min(32, len(hosts))) as executor:
    future_to_host = {
        executor.submit(identify_device, host, profiles): host
        for host in hosts
    }
```

Inside each worker thread, the profile testing is strictly sequential:

```python
def try_profile(host, profile):
    for slave_id in range(3):
        device = ModbusTCP(ip=host.ip, port=host.port, slave_id=slave_id, ...)
        if device.connect():
            device.disconnect()
            return device
    return None
```

Note that a fresh TCP socket is created per attempt. This might look wasteful — but it's not the bottleneck. Since attempts must be sequential anyway (single-client constraint), socket overhead is negligible compared to the Modbus round-trip time.

## Pruning the search space with MAC lookups

The approach above still tests every profile against every host. We can do better.

Every network device has a MAC address, and the first three bytes (the OUI) identify the manufacturer. A quick lookup before probing lets us narrow down which profiles to try:

```
  Host: 192.168.1.50
  MAC:  48:46:C1:xx:xx:xx
                |
                v
       OUI lookup table
                |
                v
       Manufacturer: "HUAWEI"
                |
                v
       ┌──────────────────────────────────┐
       │  All profiles:                   │
       │  ├── Huawei    <-- match         │──> test this
       │  ├── SMA                         │
       │  ├── Fronius                     │    skip
       │  ├── SolarEdge                   │    skip
       │  └── ...                         │    skip
       └──────────────────────────────────┘
```

This reduces $P$ from the full list to typically 1 or 2 matching profiles. The per-host complexity drops from $O(P \cdot S \cdot t)$ to effectively $O(S \cdot t)$.

With MAC filtering, total scan time becomes:

$$O(S \cdot t) \approx 3s$$

Independent of both the number of hosts *and* the number of supported profiles. That's the kind of scaling you want.

## Summary

| Strategy | Time complexity | Reliable? |
|---|---|---|
| Fully sequential | $O(H \cdot P \cdot S \cdot t)$ | Yes |
| Fully parallel | $O(t)$ | No |
| Parallel hosts + sequential per host | $O(P \cdot S \cdot t)$ | Yes |
| + MAC-based profile pruning | $O(S \cdot t)$ | Yes |

The takeaway isn't specific to Modbus. Whenever you're parallelizing I/O, the right question isn't *"what can I make concurrent?"* — it's *"what are the actual concurrency guarantees of the thing on the other end?"*

Some devices handle it. Some don't. Design for the ones that don't, optimize from there.
