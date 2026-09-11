---
title: "Agent architecture"
type: moc
by: "Andy Smith"
---

How agents are built and run.

**The split:** a long-lived [[Agent orchestrator]] holds the secrets and the process and spawns short-lived workers — [[Ephemeral agent]] vs [[Long-lived agent]].

**The boundary:** each agent reaches out only through a [[Per-agent MCP]] whose sole tool is [[Code-mode eval]] against a [[Capability grant]].

**Memory & lifecycle:** [[Per-topic session memory]], [[Two-tier agent memory]], a [[Disposable agent body]], and a [[Self-reaping agent]].

**Invocation & process:** [[Thread subscription]], the [[Supervised loop]], [[Ask-user]], and [[Job dispatch]].

**Isolation & runtime:** [[Layered agent isolation]] over [[Per-Task Agent Sandboxing]], [[Immutable Agent Environments]], [[MicroVM]] and [[OCI Image]]; see [[Nested virtualization]] and [[Network-bound secrets]]. Related: [[Immutable agent images are worth the rebuild tax]], [[How often do agent environment rebuilds become the bottleneck?]].

**Tools:** [[Zeno]], [[Buzz]], [[Microsandbox]].
