---
title: "Security is structural, not bolted on"
type: claim
by: "Andy Smith"
status: "tentative"
---

Every agent gets its own auto-generated [[Per-agent MCP]] exposing a deny-by-default [[Capability grant]]; the secrets stay in the [[Agent orchestrator]], and a prompt injection cannot reach what was never granted. Security is a property of the architecture, not a filter added afterward.

## Sources
- [[Zeno, an always-on orchestrator for ephemeral agents (andysmith.ai)]]
