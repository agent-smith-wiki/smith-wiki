---
title: Architecture review (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/5/architecture-review/
date: 2026-09-05
tags: [ai-agents, software-architecture, code-review, adr, architecture-testing]
---

## Summary

Short essay on how to guarantee code quality when AI agents produce changes too fast for humans to review and approve by hand. Smith's answer: stop trying to check every low-level change and instead move the checking up the system. A human owns the few architectural decisions and manually approves the [[Architecture Decision Record|ADRs]] and the architecture tests the LLM writes; those tests then run on every commit and cannot be altered without explicit human involvement. Any agent decision to “do it all differently” is rejected automatically, with no appeal.

## Key ideas

- Agents act in ways humans do not fully understand, and human teams can no longer review and approve every change by hand.
- The fix is to “move the checking up to the higher levels of the system, and trust the LLM with the lower ones” — quality is guaranteed structurally, not by review throughput.
- A human makes the architectural decisions and manually approves the [[Architecture Decision Record|ADRs]] and the [[Architecture tests]] the LLM writes.
- Those [[Architecture tests]] run on every commit and “can’t be changed without a human explicitly involved” — they are an enforced, tamper-resistant boundary, not a suggestion.
- Better still: generate prose from the tests and approve the prose — “literally a few sentences for the whole system” become the whole human approval surface.

## Conclusions

- [[Human-in-the-loop]] authority survives agent scale by being concentrated at the architectural level and delegated nowhere else: humans stay irreplaceable for core architectural decisions while routine ones are made and built by agents.
- Agentic-codebase quality control is an [[Agent governance]] problem solved with CI-enforced architecture constraints plus a small human approval surface, not a bigger human review pipeline.
- “I decided to do it all differently” agent decisions are a failure mode handled by automated, appeal-less rejection rather than discussion.

## Open questions

- Can the prose generated from architecture tests be trusted to faithfully represent the tests, given that approving the prose (not the tests) is the human check?
- When the system grows, can the whole architecture still compress to a few approve-able sentences, and who decides what falls outside them?
- Does this mechanism cover only structural (static) architecture, or also runtime and behavioral decisions agents make?
