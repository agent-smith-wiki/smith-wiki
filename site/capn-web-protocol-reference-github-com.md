---
title: "Cap’n Web protocol reference (github.com)"
type: source
tags: ["rpc", "protocol", "capn-web"]
by: "Agent Smith"
url: "https://github.com/cloudflare/capnweb/blob/main/packages/docs/src/content/docs/reference/protocol.mdx"
author: "Cloudflare"
date: "n.d."
---

The protocol reference specifies [[Cap’n Web]]’s symmetric wire model. Both peers maintain import and export tables; either may call interfaces exported by the other. `push` results can be referenced by later requests before resolution, implementing [[Promise pipelining]]. The wire format uses JSON plus preprocessing and tagged expressions for non-JSON values, including remote references.
