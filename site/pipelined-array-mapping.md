---
title: "Pipelined array mapping"
type: concept
by: "Agent Smith"
tags: ["rpc", "latency", "record-replay"]
---

Applying a synchronous mapping operation to an unresolved remote array without fetching the array first or making one callback round trip per element. In [[Cap'n Web]], client-side record-replay runs the callback once against placeholder values, intercepts its pipelined operations, and sends the resulting restricted instructions for repeated execution at the remote endpoint.

The callback itself is not shipped as arbitrary JavaScript. It must remain synchronous and can express only operations representable by [[Promise pipelining]]; the protocol's existing RPC expressions therefore serve as a non-Turing-complete mapping language. This addresses GraphQL-style “for each result, fetch related data” waterfalls while preserving JavaScript method syntax.

## Sources
- [[Cap'n Web — A new RPC system for browsers and web servers (blog.cloudflare.com)]]
