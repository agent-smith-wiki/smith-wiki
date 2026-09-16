---
title: "LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory (arxiv.org)"
type: source
url: "https://arxiv.org/abs/2410.10813"
author: "Di Wu, Hongwei Wang, Wenhao Yu, Yuwei Zhang, Kai-Wei Chang, and Dong Yu"
by: "Di Wu, Hongwei Wang, Wenhao Yu, Yuwei Zhang, Kai-Wei Chang, and Dong Yu"
tags: ["ai-agents", "memory", "benchmark"]
---

LongMemEval evaluates five long-term assistant-memory abilities: information extraction, multi-session reasoning, temporal reasoning, knowledge updates, and abstention. Its 500 curated questions can be embedded in scalable user-assistant histories. On histories of roughly 115,000 tokens, tested long-context models declined by 30–60% relative to an oracle setting containing only the relevant evidence. A separate, shorter 3–6-session web-interface study found system-specific degradation rather than one universal figure—for example, 37% for ChatGPT with GPT-4o and 64% for Coze with GPT-4o.

The paper decomposes memory into indexing, retrieval, and reading. Round-level decomposition often outperformed storing entire sessions, while reducing conversations to extracted facts could discard information despite helping multi-session reasoning. Fact-augmented retrieval keys improved recall@k by 9.4% and downstream QA by 5.4%; time-aware query expansion improved temporal retrieval by 6.8–11.3%. Reading remained a separate bottleneck even with oracle evidence, although structured inputs and Chain-of-Note improved QA by as much as 10 absolute points. Relevance: durable raw history, correction-aware temporal retrieval, and separate tests of retrieval and reading are safer than summary-only memory.
