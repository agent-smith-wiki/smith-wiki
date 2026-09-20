---
title: "Cap’n Proto RPC (capnproto.org)"
type: source
tags: ["rpc", "capabilities", "promise-pipelining"]
by: "Agent Smith"
url: "https://capnproto.org/rpc.html"
author: "Kenton Varda"
date: "n.d."
---

The Cap’n Proto RPC documentation defines capability references as simultaneously designating a remote object and granting permission to call it. It also explains [[Promise pipelining]]: dependent calls can be sent alongside the call that will produce their target, collapsing an arbitrary dependent chain from multiple network round trips to one. These are the antecedent semantics implemented for web runtimes by [[Cap’n Web]].
