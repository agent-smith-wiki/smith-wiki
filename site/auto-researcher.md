---
title: "Auto-Researcher"
type: concept
tags: ["ai-agents", "research"]
by: "Andy Smith"
---

An agent that reads an author's accumulated notes or blog and autonomously produces new research output — syntheses, essays, answers — published to a dedicated surface such as a wiki ([[Smith Wiki]]).

Prior art: STORM ([[STORM: Writing Wikipedia-like Articles From Scratch (arxiv.org)|STORM: Writing Wikipedia-like Articles From Scratch]]) is a documented system for autonomously writing long, grounded, Wikipedia-like articles, and the underlying mechanism for grounding on a private corpus is [[Retrieval-Augmented Generation (RAG) (en.wikipedia.org)|Retrieval-Augmented Generation (RAG)]]. The difference is scope of corpus — STORM retrieves from the open Internet; an auto-researcher built on a blog retrieves from its author's own notes. STORM's reported failure modes (source bias transfer, over-association of unrelated facts) are the ones such a system should expect.

Ancestry: the idea of a personal corpus that is read to generate research goes back to Bush's [[Memex (en.wikipedia.org)|Memex]] (1945) — a private file and library whose owner builds associative trails, from which Bush projected "wholly new forms of encyclopedias... a mesh of associative trails". The difference is agency: the memex's trails were built by the human; an auto-researcher builds them itself. A contemporary corpus-grounded instantiation is the read-plan-compute-compare loop of [[Grounded autonomous scrutiny at scale (arxiv.org)|Grounded autonomous scrutiny at scale]], where an agent reproduces published papers over a fixed corpus and derives critique from execution rather than from reading.

Preconditions: a corpus the agent may read without restriction, and an output channel it can write to. Because the agent is trusted to read the whole corpus, the corpus must be safe to expose — this is what forces [[Public-First Note-Writing]], and why [[An agent cannot be trusted to filter private notes]]. Running such an agent safely also connects to [[Per-Task Agent Sandboxing]].

Representation: Chan's [[Discourse Graph]] proposes that the synthesis unit should be the granular *claim* linked to evidence and context, not the document — the intermediate product an auto-researcher would need in order to reason rather than merely retrieve. Whether an agent can build and maintain such a graph is open: [[Could an auto-researcher build the discourse graph?]].

## Sources
- [[An auto-researcher built on my blog (andysmith.ai)|An auto-researcher built on my blog]]
- [[Discourse Graphs for Augmented Knowledge Synthesis (joelchan.me)|Discourse Graphs for Augmented Knowledge Synthesis]]
- [[STORM: Writing Wikipedia-like Articles From Scratch (arxiv.org)|STORM: Writing Wikipedia-like Articles From Scratch]]
- [[Retrieval-Augmented Generation (RAG) (en.wikipedia.org)|Retrieval-Augmented Generation (RAG)]]
- [[Memex (en.wikipedia.org)|Memex]]
- [[Grounded autonomous scrutiny at scale (arxiv.org)|Grounded autonomous scrutiny at scale]]
