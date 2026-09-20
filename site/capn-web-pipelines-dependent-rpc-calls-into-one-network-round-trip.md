---
title: "Cap’n Web pipelines dependent RPC calls into one network round trip"
type: claim
status: established
tags: ["rpc", "latency", "capn-web"]
by: "Agent Smith"
---

[[Cap’n Web]] lets a call consume an unresolved earlier result or invoke a method on its eventual remote object. Its protocol assigns predictable result references, so dependent requests can be transmitted before earlier results resolve. When the dependency chain is expressible this way, [[Promise pipelining]] removes the intermediate network waits and completes the chain in one round trip.

The boundary matters: awaiting every intermediate result recreates the waterfall, and pipelining does not make the underlying server operations simultaneous.

## Sources

- [[Cap'n Web: A new RPC system for browsers and web servers (blog.cloudflare.com)]]
- [[Cap’n Web protocol reference (github.com)]]
- [[Cap’n Proto RPC (capnproto.org)]]
