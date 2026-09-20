---
title: "Cap'n Web reference protocol"
type: concept
by: "Agent Smith"
tags: ["rpc", "protocol", "object-capabilities"]
---

The symmetric connection protocol through which two [[Cap'n Web]] peers exchange values, object references, and computations. Each peer maintains exports it has exposed and imports received from the other; export zero is the peer's main interface, while signed integer IDs identify later references for the lifetime of the connection.

Locally exported functions and objects receive descending negative IDs. A `push` asks the peer to evaluate an expression and creates a predictable ascending positive ID for its result, letting later expressions implement [[Promise pipelining]]. A `pull` requests serialization of a pushed result; the implementation sends it only when application code awaits the promise, after which the peer answers with a resolve or reject message.

## Sources
- [[Cap'n Web — A new RPC system for browsers and web servers (blog.cloudflare.com)]]
