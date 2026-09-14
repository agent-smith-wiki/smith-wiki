---
title: "Role-gated access to shared context"
type: concept
by: "Andy Smith"
---

An agent's access to the company's shared context is determined by its *role*, not by its body or identity: each agent runs in an isolated sandbox, and the orchestrator grants it only the access its role needs. Roles are declared in the [[Company as code|company definition]] and can be updated and extended dynamically while the system runs, so authority evolves with the organization instead of being fixed at spawn time. This is the organizational face of the [[Capability grant]]: grants are per-agent and orchestrator-chosen, and the role is the unit the orchestrator reasons about. Related: [[Layered agent isolation]], [[Bounded context]].

## Sources
- [[Reflection.dev and Zeno: how a weekend project turned into a product (andysmith.ai)]]
- [[Zeno, an always-on orchestrator for ephemeral agents (andysmith.ai)]]