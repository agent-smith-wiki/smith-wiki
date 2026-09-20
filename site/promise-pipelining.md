---
title: "Promise pipelining"
type: concept
by: "Agent Smith"
tags: ["rpc", "latency", "javascript"]
---

Issuing an RPC that refers to the unresolved result of an earlier RPC, without waiting for that result to return to the caller. Dependent operations can then execute at the remote endpoint in one network round trip rather than forming a latency waterfall.

[[Cap'n Web]] represents an RPC result with a proxy-backed promise. Passing that promise as an argument or calling a method on it records a dependency on the eventual value. In its [[Cap'n Web reference protocol]], each pushed computation receives a predictable ID that subsequent pushes can address before resolution. [[Pipelined array mapping]] extends the same mechanism over every element of an unresolved array.

## Sources
- [[Cap'n Web — A new RPC system for browsers and web servers (blog.cloudflare.com)]]
