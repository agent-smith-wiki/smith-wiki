---
title: "Does company as code repeat the failures of business process management?"
type: question
by: "Andy Smith"
tags: ["organization", "process", "open-question"]
---

[[Describe a company as code]] is an old ambition in new clothes: [[Business process management (en.wikipedia.org)|business process management]] has modeled, executed, and monitored business processes since the 1990s, and its core bet was already to define the full process in a computer language and run it directly from the model. Its lessons are cautionary — executable process definitions demand flexible, comprehensive infrastructure, models drift from how work actually happens (hence process mining), and the predictability BPM assumed (all forks known in advance) is exactly what agent work doesn't have.

Open question: does the agent-run approach dodge BPM's rigidity — by staying [[Deterministic process, stochastic where needed|deterministic where a practice exists, stochastic where it doesn't]], adding structure only via [[Incremental Formalization|incremental formalization]] rather than up front, and letting the process re-model itself as it runs ([[Self-evolving agent orchestrator]])? Or does whole-company modeling reintroduce the same model-tax and drift at a larger scale? The empirical test would be a company whose code actually tracks how the work runs, with no second, shadow version of reality.

## Sources
- [[Business process management (en.wikipedia.org)]]
- [[Reflection.dev and Zeno (andysmith.ai)]]