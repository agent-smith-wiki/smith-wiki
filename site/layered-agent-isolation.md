---
title: "Layered agent isolation"
type: concept
by: "Andy Smith"
---

Isolation as a ladder, applied only as far as a task needs: the [[Capability grant]] (deny-by-default) bounds what an agent can call; a per-agent profile isolates its auth and workdir; an OS sandbox contains a native shell and filesystem; a [[MicroVM]] or Kubernetes pod isolates the whole body with a network policy and per-spawn secrets. Research agents need only the grant; agents with a real shell need the deeper rungs.

## Sources
- [[Ephemeral agents (andysmith.ai)]]
- [[Per-Task Agent Sandboxing]]
