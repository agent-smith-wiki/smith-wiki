---
title: "Enabling Large Language Models to Generate Text with Citations (aclanthology.org)"
type: source
url: "https://aclanthology.org/2023.emnlp-main.398/"
author: "Tianyu Gao, Howard Yen, Jiatong Yu, and Danqi Chen"
by: "Tianyu Gao, Howard Yen, Jiatong Yu, and Danqi Chen"
tags: ["citations", "language-models", "evaluation"]
---

Gao and colleagues introduce ALCE, a reproducible benchmark for systems that retrieve evidence and generate citation-bearing answers. It evaluates fluency, answer correctness, and citation quality separately; citation quality includes entailment of a claim by its cited passage and completeness of citation coverage. The metrics correlate with human judgments in the reported study.

The paper’s experiments show that citation formatting does not establish support: on ELI5, even the best evaluated models lacked complete citation support 50% of the time. It points to retrieval, long-context use, and multi-source synthesis as separate improvement targets. Relevance: a public researcher should audit whether citations support and cover claims, not merely count links.
