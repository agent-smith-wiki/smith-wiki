---
title: "Per-Task Agent Sandboxing"
type: concept
by: "Andy Smith"
---

The pattern of giving each AI agent — or even each individual task — its own disposable machine: build an [[OCI Image]], run the agent inside it, complete the task, kill the machine.

Made practical by [[Microsandbox]] and [[MicroVM]]s booting fast enough to be ephemeral, and by the lifecycle being scriptable as code.

Benefits: strong isolation between tasks and agents, no state bleed, no snowballing environment drift. Cost: the environment must be defined ahead of time, which leads into [[Immutable Agent Environments]].
