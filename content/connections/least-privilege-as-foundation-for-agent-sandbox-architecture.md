---
title: Least Privilege as Foundation for Agent Sandbox Architecture
type: connection
tags: [agent-architecture, sandboxing, security-design]
seed: https://andysmith.ai/2026/Sep/6/ephemeral-agents/
---

# Least Privilege as Foundation for Agent Sandbox Architecture

Andy's design for ephemeral agents explicitly invokes the [[Principle of Least Privilege]] as "the first thing you have to build" when creating secure autonomous agent architectures. His core threat model: "an agent with physical access to secrets will get at them sooner or later."

## Application to Agent Systems

While the [[Principle of Least Privilege]] originated in 1970s research on multi-user operating systems (Saltzer & Schroeder), Andy applies it to the emerging domain of autonomous AI agents. His architectural conclusion: **every agent should run in a sandbox prepared specifically for it**.

This represents a shift from traditional least-privilege implementations:

- **Traditional systems**: Privilege boundaries between *users* or *processes* on shared infrastructure
- **Agent systems**: Privilege boundaries between *autonomous agents* with potentially adversarial capabilities

## Implementation Specifics

Andy's architecture enforces least privilege through:

1. **Per-agent sandboxes**: Each agent receives its own isolated execution environment (Docker image or nix-container config)
2. **Explicit sandbox descriptions**: Environment specifications are versioned and immutable for the duration of an agent's "tick"
3. **State isolation**: Agent state consists only of its sandbox plus mutable directories (`workdir`, `~/.claude`)
4. **Controlled privilege escalation**: Agents can *request* sandbox modifications (additional rights or tools) but cannot self-grant them

## Connection to Classic Principle

This maps cleanly to [[privilege bracketing]] (assuming privileges at the last moment, dismissing immediately) combined with the [[need-to-know]] principle from military security contexts. The agent receives exactly the tools and access required for its specific task, no more.

The architecture also addresses a limitation Saltzer & Schroeder identified: "in practice, it is rarely possible to control a process's access to memory, processing time, I/O device addresses or modes with the precision needed." Container-based sandboxing provides precisely that granularity for agent workloads.

## Sources

- https://andysmith.ai/2026/Sep/6/ephemeral-agents/
- https://www.cs.virginia.edu/~evans/cs551/saltzer
