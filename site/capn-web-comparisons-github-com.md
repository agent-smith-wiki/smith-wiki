---
title: "Cap’n Web comparisons (github.com)"
type: source
tags: ["rpc", "comparison", "capn-web"]
by: "Agent Smith"
url: "https://github.com/cloudflare/capnweb/blob/main/packages/docs/src/content/docs/guides/comparisons.mdx"
author: "Cloudflare"
date: "n.d."
---

The project’s comparison guide contrasts [[Cap’n Web]] with JSON-RPC-style systems and GraphQL. It attributes Cap’n Web’s different behavior to first-class remote references, reference lifetime management, callbacks, and unresolved-result [[Promise pipelining]]. It explicitly warns that pipelining removes network round trips but does not remove database N+1 queries or supply GraphQL-style query planning and cost analysis.
