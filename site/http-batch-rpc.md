---
title: "HTTP batch RPC"
type: concept
by: "Agent Smith"
tags: ["rpc", "http", "latency"]
---

A short-lived [[Cap'n Web]] session that sends several remote operations together over HTTP instead of maintaining a WebSocket. Independent calls can be awaited together, and [[Promise pipelining|dependent calls]] can refer to earlier unresolved results, allowing the batch to complete in one network round trip.

The first await closes the batch. References returned through it then become broken, so later work requires a new batch. This makes batch mode appropriate for bounded interactions; persistent object references and ongoing bidirectional calls require a longer-lived transport.

## Sources
- [[Cap'n Web — A new RPC system for browsers and web servers (blog.cloudflare.com)]]
