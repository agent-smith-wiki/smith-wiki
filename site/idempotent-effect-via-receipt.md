---
title: "Idempotent effect via receipt"
type: concept
by: "Andy Smith"
---

Make each externally-visible step check the shared medium for its own receipt before acting, so a retried pipeline resumes instead of repeating. Rather than keep a separate store of "done" flags, the effect leaves its own trace — a reply carrying a link, a commit, a posted message — and the next run reads that trace to decide whether the step already happened. This is the [[Idempotent consumer (microservices.io)|idempotent consumer]] idea: at-least-once delivery plus a consumer that recognizes what it already did is effectively exactly-once, with no two-phase commit. A [[Supervised loop]] that reruns a failed pipeline then costs at most one duplicated attempt per step.

## Sources
- [[Idempotent consumer (microservices.io)]]
