---
title: "Learning to Generate Answers with Citations via Factual Consistency Models (aclanthology.org)"
type: source
url: "https://aclanthology.org/2024.acl-long.641/"
author: "Rami Aly, Zhiqiang Tang, Samson Tan, and George Karypis"
by: "Rami Aly, Zhiqiang Tang, Samson Tan, and George Karypis"
tags: ["citations", "factual-consistency", "language-models"]
---

Aly and colleagues train citation generation using factual-consistency models to filter weakly supervised examples and focus learning on factual units. On the ALCE few-shot benchmark, the authors report average citation-F1 gains of 34.1 points over in-context learning, 15.5 over ordinary supervised fine-tuning, and 10.5 over then-state-of-the-art methods, plus the lowest factual error rate among their baselines. They also report transfer to unseen datasets.

Relevance: citation faithfulness is a capability that can be optimized and measured independently, not an automatic consequence of asking a model to provide sources. The results are benchmark-specific and do not prove universal reliability.
