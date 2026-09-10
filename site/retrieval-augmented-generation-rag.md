---
title: "Retrieval-Augmented Generation (RAG)"
type: source
url: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation"
author: "Wikipedia contributors"
tags: ["retrieval-augmented-generation", "ai-agents"]
---

Retrieval-augmented generation (RAG) combines a parametric language model with a non-parametric external memory accessed by retrieval at inference time — first proposed by Lewis et al. (2020). Documents (or a knowledge base) are converted into embeddings stored in a vector database; given a query, a retriever selects the most relevant documents and they are fed into the LLM prompt alongside the question, so the model responds over both the retrieved context and its training knowledge.

Claimed benefits: grounding responses in domain-specific or up-to-date information without retraining, and citing sources for verification. Documented limitations: RAG reduces but does not eliminate hallucination — models can misinterpret a correctly retrieved source, prioritize retrieved text uncritically ('prompt stuffing'), or merge conflicting sources.

Relevance: RAG is the mechanism that lets an [[Auto-Researcher]] be 'built on a blog' — the author's notes become the retrievable external memory. STORM ([[STORM: Writing Wikipedia-like Articles From Scratch]]) is a RAG-style system applied to writing whole articles.
