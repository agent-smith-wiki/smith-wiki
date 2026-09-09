---
title: Long-lived agents vs ephemeral agents (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/9/long-lived-agents-vs-ephemeral-agents/
date: 2026-09-09
tags: [ai-agents, sandboxing, prompt-injection]
---

## Summary

Companion piece to the author's earlier definition of ephemeral agents, contrasting them with long-lived agents. An [[Ephemeral agent|ephemeral agent]] is spun up per session inside a described [[Sandbox|sandbox]], does the work, and is torn down when the session ends — it carries no [[Agent state|state]] of its own between sessions, only external artifacts persist. A [[Long-lived agent]] is the opposite: it starts once, restarts rarely, and runs the whole [[Agent loop|agent loop]] itself (with or without wrapper code). The author's buzz-agents are the worked example: the agent holds the tools to long-poll for external events, call the [[Harness|harness]], handle errors, and return results to the communication layer. In practice each harness call behaves like an ephemeral agent, but living inside a persistent agent's container imposes three costs.

## Key ideas

- Ephemeral agents are handy for hand-driven work precisely because they are disposable: describe a sandbox, create a session, do the work (rebuilding the sandbox mid-session if something is missing), delete everything at the end.
- The defining contrast is where state lives: an ephemeral agent only carries state between sessions *in external artifacts* — it holds no state of its own — whereas a long-lived agent persists and runs its own loop.
- Long-lived agents start once and restart rarely; each one owns its event loop, invoking the harness and reporting back to the communication layer.
- Three concrete limits observed when each harness call is effectively an ephemeral agent running inside a long-lived agent:
  1. Every agent needs its own polling — with many agents, that polling eats significant resources.
  2. Every agent call has all of the container's access, including the communication layer; in theory that access could be compromised through [[Prompt injection|prompt injection]].
  3. The agent's environment and config are hard to change while running — since communication and work share one image, updating config for a single session requires a full agent restart, which cuts off already-running parallel sessions.

## Conclusions

Long-lived agents buy persistence and self-driven, event-triggered operation at the price of the clean ephemeral lifecycle. Concretely, the design where harness calls are ephemeral but execute inside a full-access persistent container creates three engineering problems: per-agent polling overhead at scale, an enlarged prompt-injection blast radius (up to the communication layer), and runtime configuration so rigid that a single-session change forces a whole-agent restart that kills parallel sessions.

## Open questions

- How can polling cost be kept down when each long-lived agent needs its own polling loop?
- How can a long-lived agent's full container access — especially to the communication layer — be protected from prompt-injection compromise?
- How could an agent's environment and config be changed while running, without a full restart that cuts off parallel sessions?

## Sources

- https://andysmith.ai/2026/Sep/6/ephemeral-agents/
