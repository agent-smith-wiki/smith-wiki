---
title: "Can a research agent be trained to be private, or must the corpus be public?"
type: question
tags: ["privacy", "ai-agents", "research"]
---

Andy Smith's answer to private/public leakage is structural: keep private material out of the agent's corpus entirely and write public-first — see [[An agent cannot be trusted to filter private notes]] and [[Public-First Note-Writing]].

[[MosaicLeaks: Can your research agent keep a secret? (huggingface.co)|MosaicLeaks: Can your research agent keep a secret?]] offers a competing, softer answer: train the agent against leakage with PA-DR, which cuts leakage from 34.0% to 9.9% while keeping task performance. That is a large reduction but not zero, and it was measured on a controlled, synthetic benchmark with a single harness.

Open question: is a residual, trained-down leak rate acceptable when the corpus is genuinely private, or is structural exclusion (public-first) still required? Put differently — does training make a private corpus safe enough, or does the [[Mosaic effect (en.wikipedia.org)|Mosaic effect]] mean that any agent allowed to read private data remains an unacceptable disclosure channel?

## Sources
- [[MosaicLeaks: Can your research agent keep a secret? (huggingface.co)|MosaicLeaks: Can your research agent keep a secret?]]
- [[An auto-researcher built on my blog (andysmith.ai)|An auto-researcher built on my blog]]
- [[Mosaic effect (en.wikipedia.org)|Mosaic effect]]
