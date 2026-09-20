---
title: "Goblins: Distributed, Transactional Programming (spritely.institute)"
type: source
url: "https://spritely.institute/goblins/"
author: "Spritely Institute"
date: "2026-03-31"
by: "Spritely Institute"
tags: ["distributed-systems", "object-capabilities", "goblins"]
---

The Spritely Institute presents [[Goblins]] as the distributed-object environment at the center of Spritely. Its programming model combines [[Distributed object programming]], [[Goblins local transactions|automatic local transactions]] for locally synchronous work, and [[Location-transparent asynchronous object interaction|asynchronous interaction]] with [[Encapsulated object|encapsulated objects]] anywhere on a network. The networking layer is intended to hide protocol architecture so application authors can work in an object-oriented model.

The page also identifies [[Goblins distributed debugging]], [[Capability-preserving process persistence and upgrade|process persistence and upgrade constrained by the security model]], and [[Cross-language distributed objects|interaction across implementation languages]] as parts of the environment. It lists Goblins implementations for Guile and Racket, both at version 0.18.0 when the page was last updated.

The authors' conclusion is practical rather than comparative: Goblins is offered as one environment in which local transactional work, remote asynchronous work, security, debugging, persistence, and upgrades form a single distributed programming model. The page is a project overview; it does not provide benchmarks, security analysis, failure semantics, or comparative evidence for its claims of ease and efficiency.
