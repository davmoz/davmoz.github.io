---
title: "Measured, Not Assumed: Testing a Battery Against Sweden's Grid Markets"
date: 2026-06-17T01:00:00+02:00
draft: false
tags: ["energy", "grid", "ancillary-services", "batteries", "frequency-regulation", "svenska-kraftnät"]
summary: "Before a battery can earn money balancing the power grid, it has to prove — with measured data — that it meets the operator's technical requirements, down to the millisecond and the kilowatt-hour. Here's how we built Blixt to test that automatically, and what 'passing' actually means for each market."
math: true
---

The power grid runs at 50 Hz. Keep it there and the lights stay on; let it drift and protection trips, machines stress, and in the worst case the grid splits apart. Holding that balance, second by second, is the job of the transmission system operator — in Sweden, Svenska kraftnät (SvK).

They can't do it alone, so they buy **ancillary services** from anyone who can inject or absorb power on command: batteries, industrial loads, hydro, EV fleets. But you don't just sign up and start earning. First the resource has to **prequalify** — prove, with measured data, that it meets the technical requirements for that specific market.

And the requirements are exacting: react within a fraction of a second, hold a power level within a few percent, deliver the right *energy* over a 15-minute window. So the question we set out to answer with **Blixt**, our gateway, was a simple one:

> Can this resource actually do what the market demands — measured, not assumed?

## A spectrum, not a menu

SvK runs several frequency markets, and they aren't variations on a theme. They sit on a spectrum from *"react instantly, briefly"* to *"sustain for half an hour"*:

| Market | What it asks | Timescale |
|---|---|---|
| **FFR** — Fast Frequency Reserve | Full power almost instantly when frequency dips | sub-second |
| **FCR-D** — disturbance reserve | Fast proportional response to large deviations | seconds |
| **FCR-N** — normal reserve | Continuous symmetric regulation around 50 Hz | continuous |
| **aFRR** | Automatic setpoint following | minutes |
| **mFRR** | Manual dispatch, sustained delivery | 15–30 min |

The fast end (FFR, FCR-D) is about **power** — can you hit full output in time? The slow end (aFRR, mFRR) is about **energy and endurance** — can you *hold* it, and deliver the right amount over time?

That distinction isn't academic. It's exactly why battery sizing decides which markets you can play. A 1C battery (full power for one hour) has plenty of punch for FFR but can run dry mid-delivery on mFRR; doubling the energy to 0.5C buys the duration the slow markets demand. Power is cheap; *endurance* is what the energy-heavy markets pay for.

## What Blixt does

Blixt drives the resource through SvK's published test program for a market, commands the activation the way the grid operator would, and **measures the response at the point of interconnection** — the grid meter — not at the inverter's own, potentially optimistic, reporting.

That last point matters. The thing under test is the *delivered* power where the grid actually sees it. The inverter might claim it's putting out 10 kW; the meter at the connection point tells you what really crossed the boundary, house loads and conversion losses included.

The fast tests sample at up to 10 Hz. Blixt scores every requirement automatically and emits the result as graphs and CSV in SvK's own reporting format — the same artifacts a prequalification submission needs.

## The fast end: sub-second proof

FFR has the tightest deadline of them all: depending on the activation tier, full power must arrive within roughly 0.7–1.3 seconds of the frequency crossing its trigger. FCR-D wants at least 86 % of the response within 7.5 seconds.

On a real 10 kW battery inverter on the bench, measured at the grid meter:

- **FFR** — full power in **0.34 s** (requirement: under 0.7–1.3 s)
- **FCR-D** — full power in **0.42 s** (requirement: 86 % within 7.5 s)

These are sub-second events, so the graph zooms into the first seconds and annotates the activation delay. At 10 Hz you can actually *see* the ramp — the setpoint stepping, the measured power chasing it, the grid meter confirming it a few tens of milliseconds later.

![FFR activation measured on a real battery inverter — full power in 0.34 s](/img/blixt/ffr-activation.png)
*FFR: the setpoint steps (orange), the inverter follows (green), and the grid meter confirms (blue) — full discharge in 0.34 s. The lower panel is deactivation.*

![FCR-D dynamic response — full power in 0.42 s](/img/blixt/fcr-d-dynamic.png)
*FCR-D dynamic response: full power in 0.42 s, comfortably inside the 86 %-within-7.5 s requirement.*

## The interesting one: mFRR and the "standard product"

mFRR is where it gets conceptually rich, because it isn't simply "hit the target." SvK is piloting **new technical requirements** for mFRR (still a draft — the numbers below can change after the pilot), and they introduce a **standard product**: the exact power-vs-time *shape* the operator expects when it dispatches you.

![The mFRR standard product: 2.5 min preparation, 10 min ramp, hold, deactivation ramp — with the FAT window, the 95–115 % stable band, and the activation/deactivation quarter-energy areas](/img/blixt/mfrr-standard-product-explainer.png)
*The standard product, annotated: preparation → ramp → hold → deactivation ramp. The blue and purple areas are the per-quarter energy the symmetry rule measures (activation and deactivation judged separately, each within ±20 %).*

When SvK calls you, you don't slam to full power, and you don't get there however you like. You follow this curve: 2.5 minutes of preparation, a 10-minute linear ramp to full, then hold. Three things are then checked:

1. **Full activation time (FAT)** ≤ 12.5 min (preparation + ramp).
2. **Stable delivery** — during the hold, delivered power within **95–115 %** of the called volume. Note the band is asymmetric (−5 / +15): under-delivery hurts the grid more than a little over-delivery, so it's stricter on the low side.
3. **Symmetry** — and this is the subtle, clever one.

### Energy is the area under the curve

The symmetry requirement isn't about power at all. It's about **energy** — power integrated over time, the *area* under the curve:

$$E = \int P \, dt$$

The grid settles in 15-minute blocks (one *quarter*, or MTU). The rule: the energy you deliver in a quarter must not differ by more than **±20 %** from the energy the standard product would have delivered in that same quarter.

Concretely, for a 10 kW resource, the standard product's energy in the activation quarter works out to 1.25 kWh — so your delivered energy has to land between 1.00 and 1.50 kWh. Ramp up too early or too fast and you overshoot the area (> +20 %); ramp too late or too slowly and you fall short (< −20 %).

And the activation ramp and the deactivation ramp are judged **separately**. You can't cheat by over-delivering on the way up and under-delivering on the way down so it averages out — that's two imbalances, not zero. Each side, each quarter, on its own.

It's a smart requirement, because it captures what the grid actually cares about: not that you eventually reached 10 kW, but that the *right amount of energy* showed up in the *right 15 minutes*.

### Direct vs scheduled

There are two ways you get dispatched. **Scheduled** activation is planned ahead — the message arrives 7.5 minutes before the delivery quarter, and you deliver for roughly one quarter. **Direct** activation is the grid reacting to a sudden imbalance in real time; the delivery stretches across *two* consecutive quarters (17.5–31 minutes of steady output). Direct is the energy-hungry, dimensioning case — which is exactly why it's the harder test, and why battery duration matters.

## What "real hardware" looks like

Running the mFRR-pilot standard product (scheduled, up-regulation) on the real inverter, measured at the grid meter:

| Metric | Measured | Requirement |
|---|---|---|
| Full activation time | 745 s | ≤ 750 s (12.5 min) |
| Stable delivery | 96.8 % | 95–115 % |
| Symmetry (activation) | 95 % | ±20 % |
| Symmetry (deactivation) | 97 % | ±20 % |

![mFRR-pilot standard product measured on a real inverter, with per-quarter delivered-vs-expected energy](/img/blixt/mfrr-pilot-standard-product.png)
*The mFRR-pilot standard product on real hardware: commanded shape (dashed) vs delivered (solid), wall-clock on the x-axis. Each quarter is annotated with delivered-vs-expected energy — the area, not just the peak — against the ±20 % symmetry band. Here the quarter shift was timed to land on a real 15-minute boundary (20:00).*

Notice the numbers aren't a perfect 100 %. **That's the point.** The inverter's real slew rate makes the activation a hair slower than a simulator's would be; the building's ~290 W house load pulls the metered delivery slightly below the commanded 10 kW. A simulation hands you flawless numbers; real hardware hands you *honest* ones — and they all land inside spec, which is what prequalification is about.

## Measured, not assumed

That phrase is the whole philosophy. It's easy to claim a battery "supports FCR-D" — the datasheet says so, the inverter firmware says so. It's another thing to drive it through the actual test program, watch the response cross the grid meter at 10 Hz, integrate the delivered energy quarter by quarter, and compare it against the operator's published thresholds — then hand over the graphs and CSV that prove it.

The grid doesn't run on datasheets. It runs on what actually shows up at the meter. So that's what we measure.

*(SvK's mFRR pilot requirements referenced here are a draft and may change; the FFR / FCR-D figures are against the current test programs.)*
