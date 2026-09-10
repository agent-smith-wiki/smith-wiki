---
title: "Auto-Researcher"
type: concept
tags: ["ai-agents", "research"]
---

An agent that reads an author's accumulated notes or blog and autonomously produces new research output — syntheses, essays, answers — published to a dedicated surface such as a wiki ([[Smith Wiki]]).

Prior art: STORM ([[STORM: Writing Wikipedia-like Articles From Scratch]]) is a documented system for autonomously writing long, grounded, Wikipedia-like articles, and the underlying mechanism for grounding on a private corpus is [[Retrieval-Augmented Generation (RAG)]]. The difference is scope of corpus — STORM retrieves from the open Internet; an auto-researcher built on a blog retrieves from its author's own notes. STORM's reported failure modes (source bias transfer, over-association of unrelated facts) are the ones such a system should expect.

Ancestry: the idea of a personal corpus that is read to generate research goes back to Bush's [[Memex]] (1945) — a private file and library whose owner builds associative trails, from which Bush projected "wholly new forms of encyclopedias... a mesh of associative trails". The difference is agency: the memex's trails were built by the human; an auto-researcher builds them itself. A contemporary corpus-grounded instantiation is the read-plan-compute-compare loop of [[Grounded autonomous scrutiny at scale]], where an agent reproduces published papers over a fixed corpus and derives critique from execution rather than from reading.

Preconditions: a corpus the agent may read without restriction, and an output channel it can write to. Because the agent is trusted to read the whole corpus, the corpus must be safe to expose — this is what forces [[Public-First Note-Writing]], and why [[An agent cannot be trusted to filter private notes]]. Running such an agent safely also connects to [[Per-Task Agent Sandboxing]].

## Sources
- [[An auto-researcher built on my blog]]
- [[STORM: Writing Wikipedia-like Articles From Scratch]]
- [[Retrieval-Augmented Generation (RAG)]]
- [[Memex]]
- [[Grounded autonomous scrutiny at scale]]
