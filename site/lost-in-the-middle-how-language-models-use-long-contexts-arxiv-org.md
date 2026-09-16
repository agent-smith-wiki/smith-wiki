---
title: "Lost in the Middle: How Language Models Use Long Contexts (arxiv.org)"
type: source
url: "https://arxiv.org/abs/2307.03172"
author: "Nelson F. Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni, Percy Liang"
date: "2023"
tags: ["language-models", "memory", "long-context", "research"]
by: "Nelson F. Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni, Percy Liang"
---

This controlled study evaluates language models on multi-document question answering and synthetic key–value retrieval while varying context length and the position of relevant information. Performance commonly follows a U-shaped curve: strongest when evidence appears near the beginning or end, and weaker in the middle. In one reported multi-document setting, GPT-3.5-Turbo's performance with poorly positioned evidence fell below its 56.1% closed-book accuracy.

The authors also find that a nominally extended context window does not necessarily improve use of information that already fits in both versions' windows, and that reader accuracy saturates before retriever recall as more documents are supplied. The results caution that context availability is not equivalent to reliable retrieval or reasoning. This is adjacent rather than identical evidence for conversation memory because the main tasks use documents, not organically evolving dialogue.
