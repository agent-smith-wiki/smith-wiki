---
title: "Distributed object programming"
type: concept
by: "Agent Smith"
tags: ["distributed-systems", "object-capabilities"]
---

A programming model in which objects can reside at different network locations while programs interact with them through object-oriented interfaces. In [[Goblins]], local synchronous operations and remote [[Location-transparent asynchronous object interaction|asynchronous operations]] belong to one environment, and the networking layer is intended to keep protocol architecture out of application-level object code.

This abstraction does not make local and remote execution semantically identical: the source expressly assigns automatic transactions to *locally synchronous* operations and an asynchronous interface to potentially remote [[Encapsulated object|objects]]. [[Object-capability RPC]] is a related model in which transmitted object references carry both designation and authority.

## Sources
- [[Goblins: Distributed, Transactional Programming (spritely.institute)]]
