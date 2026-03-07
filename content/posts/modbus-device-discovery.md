---
title: "Scanning a Network for Modbus Devices (Without Breaking Them)"
date: 2026-03-07
draft: false
tags: ["modbus", "python", "concurrency", "iot"]
summary: "Building a Modbus TCP device scanner that's both fast and universal — and why you can't just parallelize everything."
---

Imagine you need to automatically find every solar inverter on a local network, identify its brand and model, and start reading data from it. No manual setup, no config files — just plug in and go.

Sounds straightforward until you realize what you're working with.

## Modbus wasn't built for discovery

Modbus TCP is a simple request-response protocol from the '70s. There's no broadcast, no mDNS, no service advertisement. A Modbus device will never announce itself. If you want to find one, you have to knock on its door and hope it answers.

```
  Scanner                    Inverter (port 502)
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

To identify a device you try combinations of:

- **Profiles** — known register maps for specific brands (Huawei, SMA, Fronius, etc.)
- **Slave IDs** — Modbus unit addressing, typically 0-2 but varies by manufacturer

With 10 hosts on the network, 8 device profiles, and 3 slave IDs each, that's up to 240 connection attempts. Each with a timeout.

## The concurrency trap

The obvious move is to parallelize everything. Fire all 240 attempts at once, collect results. Done in seconds.

Except it doesn't work.

Some inverters support multiple concurrent Modbus TCP clients. Others only allow a single connection at a time. Hit them with a second connection and they'll refuse it or return corrupted data.

```
  Scanner Thread 1               Inverter
     |--- TCP connect ----------->|
     |<-- connected --------------|
     |                            |
  Scanner Thread 2               |
     |--- TCP connect ----------->|
     |<-- REFUSED ----------------|   single-client device
     |                            |
```

A scanner that only needs to work with one specific model can optimize for that model's capabilities. But a *universal* scanner has to assume the worst case: single client only.

This constraint shapes the entire design.

## Three approaches

Let's say `H` = hosts, `P` = profiles, `S` = slave IDs per profile, and each attempt takes ~1 second.

### 1. Fully sequential

```
Host1:Profile1:Slave0 -> Host1:Profile1:Slave1 -> ... -> Host2:Profile1:Slave0 -> ...
|____________________________ H * P * S seconds ____________________________|
```

Safe and correct, but brutally slow. 10 hosts, 8 profiles, 3 slave IDs = up to 150 seconds.

### 2. Fully parallel

```
Host1:Profile1:Slave0 --|
Host1:Profile1:Slave1 --|
Host1:Profile2:Slave0 --|-- all at once, ~1 second
Host2:Profile1:Slave0 --|
Host2:Profile1:Slave1 --|
```

Fast on paper. Breaks single-client devices. You get false negatives — not because a device doesn't exist, but because your connection got refused. Speed is meaningless if your results are wrong.

### 3. Parallel across hosts, sequential per host

```
Thread 1 (Host1)          Thread 2 (Host2)          Thread 3 (Host3)
  |                         |                         |
  |- Profile1:Slave0        |- Profile1:Slave0        |- Profile1:Slave0
  |- Profile1:Slave1        |- Profile1:Slave1        |- Profile1:Slave1
  |- Profile2:Slave0        |- Profile2:Slave0        |- Profile2:Slave0
  |- Profile2:Slave1        |- ...                    |- ...
  |- ...                    |                         |
  |                         |                         |
  |_______________________ P * S seconds _________________________|
```

Different hosts are different physical devices — testing them concurrently is always safe. Within a single host, you test profiles and slave IDs one at a time, respecting the single-client constraint. Wall-clock time drops from `H * P * S` to just `P * S`.

This is the sweet spot.

## Making it work in practice

A thread pool with one thread per host handles the parallelism:

```python
with ThreadPoolExecutor(max_workers=min(32, len(hosts))) as executor:
    future_to_host = {
        executor.submit(identify_device, host, profiles): host
        for host in hosts
    }
```

Within each thread, profile testing is sequential:

```python
def try_profile(host, profile):
    for slave_id in range(3):
        device = ModbusTCP(ip=host.ip, port=host.port, slave_id=slave_id, ...)
        if device.connect():
            device.disconnect()
            return device
    return None
```

A new TCP socket is created for every slave ID attempt. This looks wasteful, but it's not really the bottleneck — the attempts are sequential anyway because of the single-client constraint, so socket setup/teardown is negligible compared to the Modbus round-trip itself.

### Narrowing the search with MAC lookups

Before testing profiles, you can look up each host's MAC address to identify the manufacturer. If the OUI maps to Huawei, only test Huawei profiles.

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
    ┌─────────────────────────────┐
    │  All profiles (8)           │
    │  ├── Huawei  <-- match      │──> test this one
    │  ├── SMA                    │
    │  ├── Fronius                │    skip the rest
    │  ├── SolarEdge              │
    │  └── ...                    │
    └─────────────────────────────┘
```

This often reduces `P` from the full profile list down to 1 or 2. When each test is a sequential connection attempt, fewer profiles means a much faster scan.

## The takeaway

The temptation with any I/O-heavy task is to throw threads at everything. With Modbus device discovery, the hardware sets hard limits on what you can parallelize. Some devices handle concurrency fine, some don't — and a scanner that only works on the forgiving ones isn't a scanner you can ship.

The key is knowing where the boundary is: across devices, go fast. Within a single device, go carefully.