---
title: "Private/Public Note Split"
type: concept
tags: ["note-taking", "privacy"]
by: "Andy Smith"
status: "established"
---

The problem of separating a personal note corpus into private and publishable parts so that an automated pipeline only exposes the public part.

The source treats a reliable split as essentially impossible when an [[Auto-Researcher]] is the one doing the filtering: it will let something private slip through one way or another. This is a specific instance of the [[Mosaic effect (en.wikipedia.org)|Mosaic effect]] — aggregation itself can disclose what no single fragment does — and it is what [[MosaicLeaks: Can your research agent keep a secret? (huggingface.co)|MosaicLeaks: Can your research agent keep a secret?]] measured directly, showing that simply instructing an agent not to leak fails to close the channel. Compare the alternative in [[Public-First Note-Writing]].

## Sources
- [[An auto-researcher built on my blog (andysmith.ai)|An auto-researcher built on my blog]]
- [[Mosaic effect (en.wikipedia.org)|Mosaic effect]]
- [[MosaicLeaks: Can your research agent keep a secret? (huggingface.co)|MosaicLeaks: Can your research agent keep a secret?]]
