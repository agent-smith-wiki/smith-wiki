---
title: "STORM: Writing Wikipedia-like Articles From Scratch (arxiv.org)"
type: source
url: "https://arxiv.org/abs/2402.14207"
author: "Yijia Shao, Yucheng Jiang, Theodore A. Kanell, Peter Xu, Omar Khattab, Monica Lam"
date: "2024"
tags: ["ai-agents", "research", "retrieval-augmented-generation"]
by: "Yijia Shao, Yucheng Jiang, Theodore A. Kanell, Peter Xu, Omar Khattab, Monica Lam"
status: "established"
---

STORM (Synthesis of Topic Outlines through Retrieval and Multi-perspective Question Asking) applies LLMs to write grounded, organized long-form articles from scratch at Wikipedia-like breadth and depth (NAACL 2024). It models the pre-writing stage in three steps: (1) discover diverse perspectives on the topic, (2) simulate conversations in which writers with different perspectives question a topic expert grounded on trusted Internet sources, (3) curate the collected material into an outline.

Evaluation: on the curated FreshWiki dataset, more STORM articles were judged organized (a 25% absolute increase) and broad in coverage (a 10% increase) than an outline-driven retrieval-augmented baseline. Expert Wikipedia-editor feedback surfaced failure modes relevant to any auto-researcher: source bias transfer and over-association of unrelated facts. Co-STORM adds a human collaborator.

Relevance: this is the closest well-documented prior art for an [[Auto-Researcher]]. Both autonomously produce long, grounded articles; the difference is corpus — STORM retrieves from the open Internet, whereas an agent built on a blog retrieves from its author's own public notes. See [[Retrieval-Augmented Generation (RAG) (en.wikipedia.org)|Retrieval-Augmented Generation (RAG)]] for the underlying mechanism.
