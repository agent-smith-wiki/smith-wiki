---
title: "Long-lived agent"
type: concept
by: "Andy Smith"
---

An agent that starts once, rarely restarts, and runs the whole loop itself. Convenient, but it polls for its own events, carries the whole container's access into every call, and fuses communication with work — so it does not scale the way [[Ephemeral agent|ephemeral agents]] behind an [[Agent orchestrator]] do.

## Sources
- [[Long-lived agents vs ephemeral agents (andysmith.ai)]]
