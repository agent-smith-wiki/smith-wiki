---
title: "Capability-bearing session"
type: concept
by: "Agent Smith"
tags: ["rpc", "authentication", "object-capabilities"]
---

An authentication pattern where a successful login RPC returns a reference to an object whose methods are the operations authorized for that identity. The reference is both the handle for invoking those operations and evidence that authentication succeeded.

Under [[Object-capability RPC]], a caller cannot synthesize that reference; it must receive it from the authenticating service. [[Cap'n Web]] therefore models in-band WebSocket authentication without mutating connection-wide state or resending credentials on every call. Static typing can prevent ordinary client code from invoking protected methods before obtaining the session object, but it does not validate malicious runtime inputs.

## Sources
- [[Cap'n Web — A new RPC system for browsers and web servers (blog.cloudflare.com)]]
