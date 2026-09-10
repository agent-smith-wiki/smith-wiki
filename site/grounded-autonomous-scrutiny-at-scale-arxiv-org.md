---
title: "Grounded autonomous scrutiny at scale (arxiv.org)"
type: source
url: "https://arxiv.org/abs/2604.12198"
author: "Haonan Huang"
date: "2026"
tags: ["ai-agents", "research"]
---

arXiv paper (2026; camera-ready accepted at the ICML 2026 AI for Science Workshop). It asks whether an autonomous LLM agent can perform *grounded scrutiny* of published computational physics: read a paper, reproduce it from scratch, and surface methodological concerns from execution. The premise is that real computational physics differs from machine-learning sandboxes because experiments are first-principles calculations against re-runnable physical ground truth, and meaningful new work almost always builds on a key existing paper.

Setup: a single Claude Opus 4.6 configuration at two complementary scopes — at *scale*, across 111 open-access Quantum ESPRESSO papers, an autonomous agent runs a read-plan-compute-compare loop; at *depth*, a fresh agent inheriting a verified reproduction pipeline works on one Nature Communications paper on multiscale 2D-material MOSFET simulation.

Findings (from the abstract):
- Although never asked to critique, the agent raised substantive methodological concerns on ~42% of papers.
- 85 of 88 of these critiques (96.6%) surfaced only after the agent actually ran a calculation, with a reading-only ceiling of 1.8%. "Critique emerges from reproduction, not from reading."
- At depth, the agent autonomously produced a 14-concern physics inventory and a complete, submission-form six-page Comment revising the paper's L_G = 5 nm headline; two of its headline-challenging attacks (a source-degeneration contact-resistance bound and a Sb-doping degradation ratio) were absent from the published 21-reviewer peer review.

Relevance: a contemporary, corpus-grounded autonomous research agent — the read-plan-compute-compare loop over a fixed document corpus is the [[Auto-Researcher]] pattern made concrete, extending STORM's article writing ([[STORM: Writing Wikipedia-like Articles From Scratch (arxiv.org)|STORM: Writing Wikipedia-like Articles From Scratch]]) by grounding in executable ground truth. By contrast with an auto-researcher whose only action is reading an author's notes, its headline result locates the value in *executing and comparing*, not reading.
