---
title: "Location-transparent asynchronous object interaction"
type: concept
by: "Agent Smith"
tags: ["distributed-systems", "asynchronous-programming", "goblins"]
---

An interface for asynchronously interacting with an [[Encapsulated object]] without making its network location part of application-level protocol code. [[Goblins]] presents this as the remote-capable half of [[Distributed object programming]], alongside [[Goblins local transactions]] for locally synchronous operations.

The abstraction permits an object to live anywhere on the network and, through [[Cross-language distributed objects]], to be implemented in another supported language. “Location-transparent” here describes the programming interface, not an assurance that latency, failure, or delivery differences disappear; the overview does not define those semantics. [[Promise pipelining]] is a related technique for avoiding sequential network waits, but the source does not say that Goblins uses it.

## Sources
- [[Goblins: Distributed, Transactional Programming (spritely.institute)]]
