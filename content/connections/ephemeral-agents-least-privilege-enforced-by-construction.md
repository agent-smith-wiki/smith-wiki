---
title: Ephemeral agents: least privilege enforced by construction
type: connection
tags: [ai-agents, sandboxing, security]
seed: https://andysmith.ai/2026/Sep/6/ephemeral-agents/
---

In "Ephemeral agents" Andy Smith argues that "an agent with physical access to secrets will get at them sooner or later. So least privilege is the first thing you have to build here." This reads the [[Principle of least privilege]] not as a permission policy an agent is trusted to obey, but as a property to be enforced by construction: every agent runs in a per-agent sandbox (a reproducible, immutable-for-the-tick Docker image or nix-container) containing only the tooling and repos its task needs. That matches the principle's original Saltzer-Schroeder rationale — bound the damage of error or compromise by minimizing what a subject can reach, with compartmentalization acting as the "firewall". Two details align with standard least-privilege practice: the agent may request rights via an MCP tool to modify its sandbox (on-demand elevation, in the spirit of sudo), and ephemerality itself (agent exists only for a session's tick) keeps privileges short-lived rather than standing.

## Sources

- https://andysmith.ai/2026/Sep/6/ephemeral-agents/
