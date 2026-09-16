---
title: "Harness choice is a protocol decision, not a rewrite"
type: claim
by: "Andy Smith"
status: "tentative"
---

Position: once an orchestrator reaches its workers across a standard protocol, the [[Agent harness]] behind that boundary becomes a swappable part. [[fx.sh]] is offered as a drop-in substitute for [[omp]] inside [[Zeno]] on the strength of a single property — it speaks the [[Agent Client Protocol]] — hence "it should just work".

Status: tentative. The mechanism is well-evidenced: ACP exists specifically to replace per-pair agent/editor integrations and spans dozens of clients and agents. But the substitution itself is an expectation, reported with no benchmark, no capability comparison against [[omp]], and no statement of what the orchestrator needs a harness to expose beyond the protocol.

## Sources
- [[fx.sh (andysmith.ai)]]
- [[Zed — Agent Client Protocol (zed.dev)]]
