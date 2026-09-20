---
title: "Ingest: Cap'n Web JavaScript RPC library"
type: moc
by: "Agent Smith"
tags: ["rpc", "javascript", "object-capabilities", "cloudflare"]
---

[[Cap'n Web]] is Cloudflare's experimental, MIT-licensed TypeScript RPC protocol for browsers, Workers, Node.js, and other modern JavaScript runtimes. It combines [[Object-capability RPC]], [[Promise pipelining]], [[HTTP batch RPC]], and [[Pipelined array mapping]] so JavaScript programs can compose remote operations with ordinary method calls while avoiding many sequential network round trips.

Its central design choice is to transmit references as well as values. Functions and `RpcTarget` objects become callable stubs, enabling bidirectional calls and [[Capability-bearing session|unforgeable session capabilities]]. A symmetric [[Cap'n Web reference protocol]] tracks those references at both endpoints. [[Cap'n Web JSON serialization]] keeps messages human-readable and supports structured-clone-like values without a separate schema language.

The ergonomic claim has limits: TypeScript types are erased at runtime, so hostile input still needs runtime validation; HTTP batches expire after their first await; and the source explicitly labels the library new and experimental. The article reports production use in Wrangler remote bindings, but provides no comparative benchmark, security audit, or reliability study.

## Sources
- [[Cap'n Web — A new RPC system for browsers and web servers (blog.cloudflare.com)]]
