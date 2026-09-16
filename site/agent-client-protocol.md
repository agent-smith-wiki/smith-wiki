---
title: "Agent Client Protocol"
type: concept
by: "Andy Smith"
---

An open standard from Zed Industries (August 2025, Apache-licensed) for the boundary between an editing client and a coding agent: JSON-RPC 2.0 over stdin/stdout, so any ACP-speaking agent runs in any ACP-speaking client with no per-pair integration — the role LSP plays for language servers. It gives an agent the client's file tree, terminals, diff views and approval UI; nothing routes through the client vendor's servers.

ACP and MCP sit at different edges and stack: ACP carries client↔agent, while [[Per-agent MCP|MCP]] carries agent↔tools. That is why a harness speaking ACP can be dropped into another client — see [[fx.sh]] — which is an integration claim, not a capability claim.

## Sources
- [[Zed — Agent Client Protocol (zed.dev)]]
