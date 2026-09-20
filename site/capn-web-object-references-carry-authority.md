---
title: "Cap’n Web object references carry authority"
type: claim
status: established
tags: ["rpc", "security", "capn-web"]
by: "Agent Smith"
---

A [[Cap’n Web]] stub both identifies a remote object and permits calls to it. Because these references are introduced through connection-scoped import and export tables, an ordinary peer cannot obtain an application-created session object merely by inventing its JavaScript shape; the exporting side must provide the reference.

This makes returning an authenticated-session object a form of [[Object-capability RPC]]. The guarantee is scoped to a correctly implemented session and honest host: it does not defend against compromise of the exporter, credential theft before authentication, or missing authorization inside methods.

## Sources

- [[Cap'n Web: A new RPC system for browsers and web servers (blog.cloudflare.com)]]
- [[Cap’n Web protocol reference (github.com)]]
- [[Cap’n Proto RPC (capnproto.org)]]
