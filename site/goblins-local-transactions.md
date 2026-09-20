---
title: "Goblins local transactions"
type: concept
by: "Agent Smith"
tags: ["distributed-systems", "transactions", "goblins"]
---

Automatic transactions that [[Goblins]] applies to locally synchronous operations. They occupy the local half of its [[Distributed object programming]] model; interaction with an [[Encapsulated object]] that may live across the network instead uses [[Location-transparent asynchronous object interaction|an asynchronous interface]].

The project overview states this boundary but does not specify commit, rollback, isolation, nesting, or failure semantics. Those properties therefore cannot be inferred from the word “transaction” alone.

## Sources
- [[Goblins: Distributed, Transactional Programming (spritely.institute)]]
