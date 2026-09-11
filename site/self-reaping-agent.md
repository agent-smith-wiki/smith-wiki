---
title: "Self-reaping agent"
type: concept
by: "Andy Smith"
---

A remote agent bounds its own lifetime: with no control channel back to it, an inactivity timer finishes in-flight work, says goodbye, and exits — so nobody has to reap orphaned processes. Its default state is not-running, and it returns under the same identity when needed.

## Sources
- [[Buzz]]
