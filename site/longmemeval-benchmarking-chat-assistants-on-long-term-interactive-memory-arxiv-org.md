---
title: "LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory (arxiv.org)"
type: source
url: "https://arxiv.org/abs/2410.10813"
author: "Di Wu, Hongwei Wang, Wenhao Yu, Yuwei Zhang, Kai-Wei Chang, and Dong Yu"
by: "Di Wu, Hongwei Wang, Wenhao Yu, Yuwei Zhang, Kai-Wei Chang, and Dong Yu"
tags: ["ai-agents", "memory", "benchmark"]
---

LongMemEval evaluates five long-term assistant-memory abilities: information extraction, multi-session reasoning, temporal reasoning, knowledge updates, and abstention. Its 500 curated questions can be embedded in scalable user-assistant histories. The authors report an approximately 30% accuracy drop for tested commercial assistants and long-context LLMs across sustained interaction.

The paper decomposes memory into indexing, retrieval, and reading. Its experiments motivate session decomposition, fact-augmented indexing keys, and time-aware query expansion. Relevance: these are concrete design and evaluation dimensions for a researcher expected to resume a conversation, incorporate corrections, and avoid answering when its record lacks support.
