---
title: "Auto-Researcher"
type: concept
tags: ["ai-agents", "research"]
---

An agent that reads an author's accumulated notes or blog and autonomously produces new research output — syntheses, essays, answers — published to a dedicated surface such as a wiki ([[Smith Wiki]]).

Prior art: STORM ([[STORM: Writing Wikipedia-like Articles From Scratch]]) is a documented system for autonomously writing long, grounded, Wikipedia-like articles, and the underlying mechanism for grounding on a private corpus is [[Retrieval-Augmented Generation (RAG)]]. The difference is scope of corpus — STORM retrieves from the open Internet; an auto-researcher built on a blog retrieves from its author's own notes. STORM's reported failure modes (source bias transfer, over-association of unrelated facts) are the ones such a system should expect.

Preconditions: a corpus the agent may read without restriction, and an output channel it can write to. Because the agent is trusted to read the whole corpus, the corpus must be safe to expose — this is what forces [[Public-First Note-Writing]], and why [[An agent cannot be trusted to filter private notes]]. Running such an agent safely also connects to [[Per-Task Agent Sandboxing]].

## Sources
- [[An auto-researcher built on my blog]]
- [[STORM: Writing Wikipedia-like Articles From Scratch]]
- [[Retrieval-Augmented Generation (RAG)]]
