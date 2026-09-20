---
title: "Cap’n Web pipelining does not solve database N plus one queries"
type: claim
status: established
tags: ["rpc", "databases", "performance", "capn-web"]
by: "Agent Smith"
---

[[Promise pipelining]] in [[Cap’n Web]] removes waits between dependent network calls by sending their dependency graph before earlier results resolve. It does not combine or optimize database queries executed behind those calls. A pipelined `map()` may avoid many client-server round trips while still causing one backend query per element.

This separates transport latency from backend execution cost: solving one does not establish that the other is efficient.

## Sources

- [[Cap’n Web comparisons (github.com)]]
