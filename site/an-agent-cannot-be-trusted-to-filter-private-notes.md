---
title: "An agent cannot be trusted to filter private notes"
type: claim
tags: ["privacy", "ai-agents"]
by: "Andy Smith"
status: "established"
---

Position: do not rely on an agent to decide which notes are private. Per [[An auto-researcher built on my blog (andysmith.ai)|An auto-researcher built on my blog]], a [[Private/Public Note Split]] enforced by the agent is 'pretty much impossible' — something private will leak eventually.

Consequence: privacy must be structural, not a filter. Keep private material out of the agent's corpus entirely, via [[Public-First Note-Writing]].

External support and sharpening: [[MosaicLeaks: Can your research agent keep a secret? (huggingface.co)|MosaicLeaks: Can your research agent keep a secret?]] shows the mechanism (the [[Mosaic effect (en.wikipedia.org)|Mosaic effect]] across an agent's web-query log) and that even explicit instructions not to leak do not fix it — see [[You can't prompt privacy into a research agent]]. It also shows the alternative is imperfect: training reduces leakage but does not reach zero, leaving open [[Can a research agent be trained to be private, or must the corpus be public?]].

## Sources
- [[An auto-researcher built on my blog (andysmith.ai)|An auto-researcher built on my blog]]
- [[MosaicLeaks: Can your research agent keep a secret? (huggingface.co)|MosaicLeaks: Can your research agent keep a secret?]]
- [[Mosaic effect (en.wikipedia.org)|Mosaic effect]]
