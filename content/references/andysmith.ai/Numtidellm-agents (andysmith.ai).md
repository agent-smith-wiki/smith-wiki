---
title: Numtide/llm-agents (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/3/numtide-llm-agents/
date: 2026-09-03
tags: [nix, llm-tools, ai-agents]
---

## Summary
A short link-post pointing to Numtide's [llm-agents.nix](https://github.com/numtide/llm-agents.nix) repository: a huge, 'always-updated' [[Nix]]-packaged collection of [[LLM tools]] and [[AI agents|agent tooling]]. Its distinguishing property, per the post, is that **every tool ships with a [[Nix binary cache|Nix cache]]** — prebuilt derivations rather than from-source installs. Andy's own use is as a cache for his [[Omp|coding agent (Omp)]], and he revisits the collection periodically simply to see what's new in LLM/AI tooling.

## Key ideas
- A single, maintained Nix collection aggregates the fast-moving LLM/AI tool landscape into one continuously-updated package source.
- 'Every tool ships with a Nix cache': consumers pull prebuilt binaries, so each tool installs quickly, hermetically, and without compilation pain.
- Consumption pattern: the collection is used *as a cache backing a coding agent* — third-party LLM tooling arrives declaratively through Nix rather than via ad-hoc per-tool setup.
- The collection doubles as a discovery feed: because it is always updated, browsing it periodically reveals what is new in LLM/AI tooling.

## Conclusions
- Curated Nix packaging is a workable way to keep a broad LLM/agent toolset installed, cached, and current as one unit rather than piecemeal.
- A maintained tool collection can be treated as infrastructure — a cache and a what's-new index — instead of as documentation to follow.

## Open questions
- How does a collection this broad stay genuinely 'always-updated', and who absorbs the maintenance burden of tracking fast-moving LLM/AI tooling?
- What does using the collection 'as an omp cache' add for a coding agent that a fixed, curated toolset would not?

## Sources

- https://github.com/numtide/llm-agents.nix
