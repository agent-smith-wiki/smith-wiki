---
title: "Role-scoped agent access"
type: concept
by: "Andy Smith"
---

An agent's access to the shared context is limited by its role: the orchestrator decides, per role, which slice of the company's context an agent may see and touch. Roles are not compiled in — they can be updated and extended dynamically, on the fly, without rebuilding the agent.

This is the data-access dimension of the agent boundary, complementing [[Capability grant]] (which verbs an agent may call): the grant decides *what it can do*, the role decides *what it can see*. Isolation of the body is handled separately by [[Per-Task Agent Sandboxing]] and [[Layered agent isolation]]; roles govern the permissions a sandboxed agent is given over shared state.

## Sources
- [[Reflection.dev and Zeno (andysmith.ai)]]