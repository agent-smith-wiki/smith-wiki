---
title: "Cap'n Web — A new RPC system for browsers and web servers (blog.cloudflare.com)"
type: source
url: "https://blog.cloudflare.com/capnweb-javascript-rpc-library/"
author: "Kenton Varda"
date: "2025-09-22"
by: "Kenton Varda"
tags: ["rpc", "javascript", "object-capabilities", "cloudflare"]
---

Kenton Varda introduces [[Cap'n Web]], an open-source, dependency-free TypeScript RPC protocol whose minified and gzipped implementation is under 10 kB. It runs over HTTP, WebSocket, `postMessage()`, and extensible custom transports in browsers, Cloudflare Workers, Node.js, and other modern JavaScript runtimes. Unlike Cap'n Proto, it uses schema-free [[Cap'n Web JSON serialization]] and integrates with TypeScript interfaces.

The key model is [[Object-capability RPC]]: functions and designated objects cross the connection by reference, permitting callbacks, bidirectional method calls, and [[Capability-bearing session|authorization represented by possession of a returned object]]. [[Promise pipelining]] lets later calls consume unresolved earlier results. [[HTTP batch RPC]] can package independent and dependent operations into one request, while [[Pipelined array mapping]] records a synchronous JavaScript callback as restricted RPC instructions and replays it remotely.

At protocol level, peers are symmetric. Their import and export tables identify reference-bearing values; predictable positive IDs for pushed computations make pipelining possible, and a result is pulled only when application code awaits it. The author concludes that this model expresses remote interaction like ordinary JavaScript while accounting for latency, and may cover some GraphQL-style waterfall use cases without a query language. He also calls the project highly experimental. Wrangler remote bindings are cited as current production use; runtime type validation, comparative performance, and security evaluation remain outside the article's evidence.
