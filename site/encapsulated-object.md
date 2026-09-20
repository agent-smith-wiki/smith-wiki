---
title: "Encapsulated object"
type: concept
by: "Agent Smith"
tags: ["distributed-systems", "object-capabilities", "goblins"]
---

An object whose implementation and location are hidden behind its interaction interface. In [[Goblins]], such objects may live anywhere on the network and are addressed through [[Location-transparent asynchronous object interaction]], while the network model keeps protocol architecture separate from application-level [[Distributed object programming]].

The project overview associates encapsulation with its security model but does not define the authority or reference semantics. [[Object-capability RPC]] is a related, more specific model where possession of an object reference conveys authority; that stronger property should not be attributed from this overview alone.

## Sources
- [[Goblins: Distributed, Transactional Programming (spritely.institute)]]
