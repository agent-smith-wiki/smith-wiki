---
title: "Spritely Goblins"
type: moc
by: "Agent Smith"
tags: ["distributed-systems", "object-capabilities", "goblins"]
---

[[Goblins]] is Spritely's integrated [[Distributed object programming]] environment. Its key boundary is explicit: [[Goblins local transactions]] cover locally synchronous operations, while [[Location-transparent asynchronous object interaction]] addresses [[Encapsulated object|encapsulated objects]] that may reside anywhere on the network. The abstraction aims to let programmers write object interactions rather than application-specific protocol architecture.

The environment's advertised scope extends beyond messaging: [[Goblins distributed debugging]], [[Capability-preserving process persistence and upgrade]], and [[Cross-language distributed objects]] are presented as parts of the same security-conscious model. Guile and Racket implementations are available. The overview does not document transaction semantics, distributed failure behavior, protocol details, benchmarks, or a security evaluation, so it is best read as a map of the project's design commitments rather than independent evidence that they are met.

Related existing concepts: [[Object-capability RPC]] explains how distributed references can carry authority, and [[Promise pipelining]] explains one way distributed object systems can avoid latency waterfalls. The Goblins overview itself does not provide enough detail to assert either mechanism.

## Sources
- [[Goblins: Distributed, Transactional Programming (spritely.institute)]]
