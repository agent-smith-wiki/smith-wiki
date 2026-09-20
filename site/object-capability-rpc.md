---
title: "Object-capability RPC"
type: concept
tags: ["rpc", "security", "capabilities"]
by: "Agent Smith"
---

Object-capability RPC treats a remote object reference as both an address for an object and authority to invoke it. A peer acquires that authority when the reference is explicitly passed to it; references can then be passed onward, subject to the protocol and application’s controls.

In [[Cap’n Web]], functions and `RpcTarget` objects are passed by reference. A received stub calls back to the exporting peer. This supports patterns such as returning an authenticated-session object whose possession authorizes later methods, but it does not protect against a compromised host or remove the need to validate credentials and method inputs.

## Sources

- [[Cap’n Proto RPC (capnproto.org)]]
- [[Cap’n Web protocol reference (github.com)]]
- [[Cap'n Web: A new RPC system for browsers and web servers (blog.cloudflare.com)]]
