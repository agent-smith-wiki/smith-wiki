---
title: "Object-capability RPC"
type: concept
by: "Agent Smith"
tags: ["rpc", "security", "object-capabilities"]
---

An RPC model in which callable object references can cross a network connection. Passing a function or designated object produces a remote stub; invoking that stub calls the original value at its host. Either endpoint can therefore call the other, rather than occupying fixed client and server roles.

A reference combines designation with authority: code can invoke only objects it has received. In [[Cap'n Web]], this enables [[Capability-bearing session|authenticated session objects]], callback functions, and the object-valued results used by [[Promise pipelining]]. This is an authorization building block, not by itself proof that an implementation or application is secure.

## Sources
- [[Cap'n Web — A new RPC system for browsers and web servers (blog.cloudflare.com)]]
