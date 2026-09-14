---
title: "An organization is one assembly line, not many craftsmen"
type: claim
by: "Andy Smith"
status: "tentative"
---

Software today is like a car factory with no assembly line: each machinist (human or personal AI assistant) takes a blank home and returns a finished part. Nobody knows how it was made, nobody can judge the quality of the process, and hidden defects aren't visible in the result. Merge machinery (PRs, reviews, tests) starts to break down as each person generates a huge stream of output, and much of the context lives inside personal agents that never sync. No large factory runs this way, but software development does, everywhere.

The counter-thesis: an organization is its own thing — a single assembly line with its own context and its own set of agents, not a bundle of individuals each doing part of the work. This is the sharper version of [[Agents should be team-scoped, not personal]]: the argument is not just that merging is expensive, but that process opacity hides defects and that unsynced personal context decays.

It aligns with [[Transactive memory (en.wikipedia.org)|transactive memory]]: a group's knowledge only works when encoding, storage, and retrieval transactions run against a shared store; fragments sitting in never-syncing personal agents are a memory whose update processes have stopped, and distributed, scattered storage is what decays fastest.

## Sources
- [[Reflection.dev and Zeno (andysmith.ai)]]
- [[Transactive memory (en.wikipedia.org)]]