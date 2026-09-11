---
title: "MosaicLeaks: Can your research agent keep a secret? (huggingface.co)"
type: source
url: "https://huggingface.co/blog/ServiceNow/mosaicleaks"
author: "Alexander Gurung, Spandana Gella, Alexandre Drouin, Issam H. Laradji, Perouz Taslakian, Rafael Pardinas"
date: "2026-06-18"
tags: ["privacy", "ai-agents", "research", "retrieval-augmented-generation"]
by: "Alexander Gurung, Spandana Gella, Alexandre Drouin, Issam H. Laradji, Perouz Taslakian, Rafael Pardinas"
status: "tentative"
---

MosaicLeaks studies a privacy risk specific to deep-research agents: when an agent combines private local documents with external tools such as web retrieval, its outward queries can leak the private material. The leakage channel is the cumulative web-query log — the adversary never sees the documents or the reasoning. This is the [[Mosaic effect (en.wikipedia.org)|Mosaic effect]]: individually benign queries become revealing in aggregate.

Three leakage measures, in increasing severity: intent (infer the agent's private research questions), answer (answer private questions from the query log), full-information (state verifiably true private claims without being told what to look for). The benchmark is 1,001 multi-hop chains interleaving local enterprise documents with a controlled web corpus, built so that each answer becomes the bridge entity for the next query.

Key findings:
- Prompting the agent not to leak helps only slightly and inconsistently, and often hurts task performance (Qwen3-4B: leakage 34.0% to 25.5%, strict chain success 48.7% to 44.5%); the main behavioral change is fewer web queries, not safer ones.
- Training only for task success made leakage worse (34.0% to 51.7%): a more informative query is better for retrieval and worse for privacy.
- Privacy-Aware Deep Research (PA-DR), a learned privacy reward combined with situational task rewards, raised strict chain success from 48.7% to 58.7% while cutting answer/full-information leakage from 34.0% to 9.9% — below the untrained base model. The agent issues more queries but drops the revealing details.

Takeaway: 'You can't prompt privacy in. You have to train it in.' Caveat: a controlled, synthetic benchmark, one harness, multi-hop QA rather than open-ended research.
