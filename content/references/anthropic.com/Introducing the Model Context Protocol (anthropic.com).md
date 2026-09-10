---
title: Introducing the Model Context Protocol (anthropic.com)
type: reference
kind: article
author: Anthropic
url: https://www.anthropic.com/news/model-context-protocol
date: 2024-11-25
tags: [mcp, protocol, agents, context, interoperability]
---

## Summary
Anthropic open-sourced the [[Model Context Protocol|MCP]], an open standard for connecting AI assistants to the systems where data lives — content repositories, business tools, and development environments. The pitch: even the most capable frontier models are constrained by isolation from data, and today every new data source demands its own bespoke connector. MCP replaces N fragmented integrations with a single universal protocol. The release bundles a specification and SDKs, local MCP server support in the Claude Desktop apps, and an open-source repository of reference servers.

## Key ideas
- **The integration problem is a data-isolation problem.** Models advance rapidly on reasoning, but are "trapped behind information silos and legacy systems"; each new source requires custom code, so connected systems don't scale.
- **Two roles, one protocol.** Developers either expose data through an [[MCP server]] or build an AI application (an [[MCP client]]) that connects to servers; the protocol governs a secure, two-way connection between them.
- **Standard instead of per-source connectors.** "Instead of maintaining separate connectors for each data source, developers can now build against a standard protocol." The stated goal is a more sustainable architecture as the ecosystem matures.
- **Ecosystem matters as much as spec.** Pre-built servers ship for Google Drive, Slack, GitHub, Git, Postgres, and Puppeteer; early adopters include Block and Apollo, with tooling companies (Zed, Replit, Codeium, Sourcegraph) integrating MCP.
- **Positioned for [[AI agents]] and coding workflows.** The claimed benefit is agents retrieving relevant context around a task and producing "more nuanced and functional code with fewer attempts" — i.e. MCP as plumbing for [[Context engineering|context]] rather than a model capability.
- **Context portability is the long-run promise.** "AI systems will maintain context as they move between different tools and datasets" — context that travels across tools/datasets, not context stuck in one harness.
- **Open-source and community-governed by intent.** Created at Anthropic by David Soria Parra and Justin Spahr-Summers; framed as a collaborative open-source project with public repos.
- **A distribution story too.** Claude 3.5 Sonnet is presented as adept at writing MCP server implementations, and all Claude.ai plans can connect MCP servers to Claude Desktop; Claude for Work customers can test locally, with remote/production toolkits promised.

## Conclusions
MCP is an attempt to make tool/data connectivity a protocol layer rather than per-vendor glue: define one open client-server interface, ship reference servers and SDKs, and let an ecosystem of adopters standardize on it. The argument is architectural — sustainable, scalable integrations beat bespoke connectors — and strategic — Anthropic supplies the standard and the reference client while the community supplies servers. Whether it wins depends on adoption beyond the launch partners and on unresolved questions of trust, auth, and context semantics.

## Open questions
- How does MCP secure the "two-way connections" it promises — what is the trust and authorization model between an MCP client and an untrusted MCP server?
- Does a single standard protocol actually remove integration cost, or does each connector still require per-source implementation effort behind a common interface?
- What does it mean for an AI system to "maintain context as it moves between different tools and datasets," and how is that context represented and transported?
- Why did an open standard for connecting models to data need a specific model (Claude 3.5 Sonnet) to implement it — is MCP as legible to other models as this implies?
- How will MCP relate to or compete with other integration approaches, and what keeps the standard from fragmenting into dialects?

## Sources
- https://modelcontextprotocol.io/
- https://github.com/modelcontextprotocol
- https://github.com/modelcontextprotocol/servers
- https://modelcontextprotocol.io/quickstart
