---
title: "Bounded context"
type: concept
by: "Andy Smith"
---

A unit deserves its own instance when it has its own inputs and outputs, its own secrets or trust tier, and its own lifecycle. If it only needs to talk to existing units, it is a role on the shared bus, not a new instance.

## Sources
- [[Zeno]]
