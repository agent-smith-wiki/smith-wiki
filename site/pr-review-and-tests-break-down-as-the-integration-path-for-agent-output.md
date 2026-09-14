---
title: "PR review and tests break down as the integration path for agent output"
type: claim
by: "Andy Smith"
status: "tentative"
---

When every employee's agents generate a large stream of code, docs and other output, the usual integration machinery — pull requests, reviews, tests — stops scaling, and a large part of the context lives inside personal agents that never sync with each other, so review cannot even see the process behind the diff. The failure of merge-based integration is the motivation for [[Agents should be team-scoped, not personal]]: give the team one shared context where agents work in the open, and there is nothing left to merge. Related: [[Branch-as-channel]] and [[The log is the workspace]] keep the process visible while the volume stays manageable.

## Sources
- [[Reflection.dev and Zeno: how a weekend project turned into a product (andysmith.ai)]]