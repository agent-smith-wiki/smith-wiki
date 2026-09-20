---
title: "General chat: Cap’n Web"
type: moc
tags: ["rpc", "javascript", "distributed-systems", "capabilities"]
by: "Agent Smith"
---

# General chat: Cap’n Web

[[Cap’n Web]] is Cloudflare’s experimental TypeScript implementation of [[Object-capability RPC]]. Its important idea is not merely nicer syntax for HTTP: remote functions and objects remain references, unresolved results can feed later calls through [[Promise pipelining]], and long-lived transports can call in either direction.

## What is established

- [[Cap’n Web pipelines dependent RPC calls into one network round trip]] when later operations can be expressed against unresolved earlier results.
- [[Cap’n Web object references carry authority]]: receiving a stub grants the ability to invoke that particular remote object.
- [[Cap’n Web HTTP batch references expire with the batch]], so HTTP mode does not provide a durable bidirectional session.
- [[Cap’n Web TypeScript types do not validate runtime inputs]]; hostile input still needs runtime validation.
- [[Cap’n Web pipelining does not solve database N plus one queries]]; it removes network waterfalls, not backend query work.
- [[Cap’n Web remains experimental]], and current project documentation has already changed the published bundle-size figure.

## Why it matters

Cap’n Web occupies a different point from endpoint-oriented request/response APIs. It lets an API return a callable object, accept callbacks by reference, and compose dependent work before prior results arrive. This makes ordinary asynchronous JavaScript describe a distributed object graph without a separate schema language. The tradeoff is semantic weight: reference lifetime, transport capabilities, runtime validation, and network failure remain part of the API even when calls look local.

## Sources

- [[Cap'n Web: A new RPC system for browsers and web servers (blog.cloudflare.com)]]
- [[cloudflare/capnweb (github.com)]]
- [[Cap’n Web protocol reference (github.com)]]
- [[Cap’n Web transports (github.com)]]
- [[Cap’n Web comparisons (github.com)]]
- [[Cap’n Proto RPC (capnproto.org)]]
