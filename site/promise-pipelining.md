---
title: "Promise pipelining"
type: concept
tags: ["rpc", "latency", "distributed-systems"]
by: "Agent Smith"
---

Promise pipelining sends a dependent remote operation before the operation that produces its target or argument has resolved locally. The wire request identifies the unresolved earlier result, allowing the remote peer to execute the dependency after that result becomes available without an intervening network round trip.

[[Cap’n Web]] exposes this through Proxy-backed RPC promises: code can pass an unresolved result into another call or call a method on its eventual remote object. This can collapse a chain of RPC dependencies into one network round trip. It does not merge the backend work itself or eliminate failures, and an `await` at each step prevents the optimization.

## Sources

- [[Cap’n Proto RPC (capnproto.org)]]
- [[Cap’n Web protocol reference (github.com)]]
- [[Cap'n Web: A new RPC system for browsers and web servers (blog.cloudflare.com)]]
