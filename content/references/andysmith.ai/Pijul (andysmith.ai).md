---
title: Pijul (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/1/pijul/
date: 2026-09-01
tags: [pijul, version-control, git]
---

## Summary
A short note on [[Pijul]], a [[Version control|version control]] system positioned as an alternative to [[Git]]. Smith evaluated it as a possible place to host the [[Experience lake]], but it didn't fit. He judges it a no-go as a production replacement for git because adoption and the ecosystem are too small, while remaining interested in it purely academically as a fresh take on version control. The core difference: Pijul works with changes ([[Patch (version control)|patches]]) rather than states the way git does, which makes [[Merge (version control)|merging]] a simpler operation than in git — a claim he wants to verify by trying it.

## Key ideas
- Pijul is a version control system offered as an alternative to git (project site: https://pijul.org/).
- It was considered as a storage/backend candidate for the experience lake, but did not fit that use case.
- As a production replacement for git: a no-go — the adoption base and ecosystem are simply too small.
- The author's interest is academic: a fresh conceptual take on version control.
- Architectural contrast: Pijul is patch-oriented (operates on changes), whereas git is snapshot/state-oriented. Because of this, merging is a simpler operation in Pijul than in git.
- The claim about easier merging is asserted, not yet personally validated in everyday work.

## Conclusions
Pijul is interesting as an alternative mental model for version control — changes as first-class objects rather than states — and this patch model is what makes merging simpler. But it is not a practical git replacement today: ecosystem and adoption are the deciding factors, not the underlying design. The author flags an intention to try it hands-on to see how the patch-based model behaves in daily use.

## Open questions
- How does Pijul's patch-based merging actually play out in everyday work compared to git's state-based model?
- What specifically made Pijul a poor fit for storing the experience lake?
- Is a small adoption base and ecosystem actually disqualifying, or is the barrier social rather than technical?
- Are there other domains where a patch/change-based model is a better fit than git's state-based one?

## Sources
- Pijul project: https://pijul.org/
- Experience lake context: https://andysmith.ai/2026/Aug/16/context-as-a-separate-stream-of-events/
