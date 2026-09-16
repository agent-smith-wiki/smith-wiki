---
title: "Enabling Large Language Models to Generate Text with Citations (ACL Anthology)"
type: source
url: "https://aclanthology.org/2023.emnlp-main.398/"
author: "Tianyu Gao, Howard Yen, Jiatong Yu, Danqi Chen"
date: "2023"
tags: ["language-models", "citations", "research", "evaluation"]
by: "Tianyu Gao, Howard Yen, Jiatong Yu, Danqi Chen"
---

This EMNLP 2023 paper introduces ALCE, a reproducible benchmark for end-to-end retrieval and generation of answers with citations. It separates answer quality from citation quality and evaluates citation *correctness* (whether cited evidence supports a claim) and *completeness* (whether externally verifiable claims receive support), alongside fluency and correctness metrics that the authors report correlate with human judgments.

Its experiments show that visible citations alone are insufficient: on the ELI5 dataset, even the strongest evaluated systems lacked complete citation support 50% of the time. The authors identify retrieval quality, long-context use, and multi-source synthesis as continuing bottlenecks. For public research, ALCE supports auditing claim–evidence alignment rather than treating a bibliography as proof of grounding.
