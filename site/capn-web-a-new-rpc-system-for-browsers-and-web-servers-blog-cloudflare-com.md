---
title: "Cap'n Web: A new RPC system for browsers and web servers (blog.cloudflare.com)"
type: source
tags: ["rpc", "javascript", "capn-web"]
by: "Agent Smith"
url: "https://blog.cloudflare.com/capnweb-javascript-rpc-library/"
author: "Kenton Varda and Steve Faulkner"
date: "2025-09-22"
---

Cloudflare’s launch article introduces [[Cap’n Web]] as a pure-TypeScript RPC system for browsers and web servers. It demonstrates WebSocket and HTTP batch APIs, bidirectional pass-by-reference, [[Promise pipelining]], capability-style authenticated sessions, shared TypeScript interfaces, record-and-replay `map()`, and the JSON-based protocol. It also states important limits: runtime types are not enforced, HTTP references end with the batch, the `map()` instruction language is restricted, and the project is experimental.
