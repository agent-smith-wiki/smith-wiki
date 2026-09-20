---
title: "Cap'n Web JSON serialization"
type: concept
by: "Agent Smith"
tags: ["serialization", "json", "rpc"]
---

A human-readable, schema-free encoding that preprocesses values unsupported by plain JSON. Arrays act as escape forms: a type tag followed by parameters can represent a supported special value such as a `Date`, while wrapping a literal array inside a one-element array distinguishes ordinary arrays from tagged values.

[[Cap'n Web]] limits special values mainly to structured-clone-compatible types and RPC stubs. This avoids a separate schema language and wire-format compiler, but TypeScript annotations remain compile-time only; applications exposed to hostile callers still need runtime validation.

## Sources
- [[Cap'n Web — A new RPC system for browsers and web servers (blog.cloudflare.com)]]
