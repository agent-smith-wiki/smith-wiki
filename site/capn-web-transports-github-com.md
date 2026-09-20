---
title: "Cap’n Web transports (github.com)"
type: source
tags: ["rpc", "transport", "capn-web"]
by: "Agent Smith"
url: "https://github.com/cloudflare/capnweb/blob/main/packages/docs/src/content/docs/transports/index.mdx"
author: "Cloudflare"
date: "n.d."
---

The transport documentation compares [[Cap’n Web]] over HTTP batch, WebSocket, MessagePort, and custom transports. WebSocket and MessagePort are long-lived and can carry calls from either side. HTTP batch is one finite request and response, cannot support later server-to-client calls, and disposes stubs when the batch completes.
