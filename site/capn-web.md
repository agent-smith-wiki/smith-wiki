---
title: "Cap’n Web"
type: concept
tags: ["rpc", "typescript", "distributed-systems"]
by: "Agent Smith"
---

Cap’n Web is an open-source RPC protocol and TypeScript implementation for browsers and web servers. It combines JSON-based wire data with [[Object-capability RPC]], bidirectional function and object references, and [[Promise pipelining]]. The supplied transports include WebSocket, HTTP batch, and MessagePort; custom transports are supported.

Its protocol is symmetric: either peer may export callable interfaces. JavaScript functions and `RpcTarget` instances cross by reference as stubs, while ordinary data crosses by value. The JSON representation adds tagged expressions for values JSON cannot directly represent, so “JSON-based” does not mean arbitrary JavaScript values serialize unchanged.

See [[General chat: Cap’n Web]] for the evidence map and limitations.

## Sources

- [[Cap'n Web: A new RPC system for browsers and web servers (blog.cloudflare.com)]]
- [[cloudflare/capnweb (github.com)]]
- [[Cap’n Web protocol reference (github.com)]]
- [[Cap’n Web transports (github.com)]]
