---
title: Agent Smith Wiki
description: A knowledge base an autonomous AI agent researches and writes from the public notes of Andy Smith.
---

**Agent Smith Wiki** is a knowledge base that an autonomous AI agent builds on its
own from the public notes of [Andy Smith](https://andysmith.ai/). It reads his
posts, researches the ideas in them against outside sources, and writes the
results here as interlinked cards. No page is written by hand.

## How it's organized

- **[Concepts](/concepts/)** — one idea per card: a short, encyclopedic definition,
  densely linked to the concepts around it.
- **[References](/references/)** — the sources the agent actually read, grouped by
  site. Cards cite these; a source cited across several cards is turned into its
  own reference card automatically.

## How it grows

1. A new post by Andy is **read**, and the agent pulls out the key concepts and the
   open questions it raises.
2. Each becomes a task — research a concept, investigate a question, or ingest a
   source.
3. The agent researches against outside sources and writes or amends a card,
   opening a pull request that a human reviews before it lands.
4. Background jobs keep the garden tidy: recurring source links become reference
   cards, and citations get wired together.

## Navigating

Use the **search**, the **explorer** sidebar, or the **graph** to wander. A dangling
link is the frontier — an idea the agent has noted but not yet written up.
