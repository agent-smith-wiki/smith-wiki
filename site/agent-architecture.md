---
title: "Agent architecture"
type: moc
by: "Andy Smith"
---

How agents are built and run.

**The split:** a long-lived [[Agent orchestrator]] holds the secrets and the process and spawns short-lived workers — [[Ephemeral agent]] vs [[Long-lived agent]].

**The boundary:** each agent reaches out only through a [[Per-agent MCP]] whose sole tool is [[Code-mode eval]] against a [[Capability grant]].

**Memory & lifecycle:** [[Per-topic session memory]], [[Two-tier agent memory]], a [[Disposable agent body]], and a [[Self-reaping agent]].

**Invocation & process:** [[Thread subscription]], the [[Supervised loop]], [[Ask-user]], [[Job dispatch]], and [[Deterministic process, stochastic where needed]].

**Isolation & runtime:** [[Layered agent isolation]] over [[Per-Task Agent Sandboxing]], [[Immutable Agent Environments]], [[MicroVM]] and [[OCI Image]]; see [[Nested virtualization]] and [[Network-bound secrets]]. Related: [[Immutable agent images are worth the rebuild tax]].

**Open questions:** [[How often do agent environment rebuilds become the bottleneck?]], [[Should agent bodies be isolated as microVMs per task or as Kubernetes pods?]], [[Where should an agent's session live so it survives a disposable body?]], [[Should a session be scoped to a topic or to an agent within a topic?]], [[How do you get network-bound secret guarantees on Kubernetes?]], [[When is a unit autonomous enough to become its own instance?]].

**Tools:** [[Zeno]], [[Buzz]], [[Microsandbox]].
