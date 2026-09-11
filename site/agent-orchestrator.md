---
title: "Agent orchestrator"
type: concept
by: "Andy Smith"
---

A long-lived process that holds a company's secrets and process logic and spawns [[Ephemeral agent|ephemeral agents]] to do the work. It talks to the outside world and decides which agent to run, with what environment and [[Capability grant|grant]]; the agents are boxed and disposable, while the orchestrator is the durable core.

## Sources
- [[Zeno, an always-on orchestrator for ephemeral agents (andysmith.ai)]]
- [[Zeno]]
