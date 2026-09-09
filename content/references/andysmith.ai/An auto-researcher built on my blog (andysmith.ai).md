---
title: An auto-researcher built on my blog (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/6/an-auto-researcher-built-on-my-blog/
date: 2026-09-06
tags: [ai-agents, research, note-taking, privacy]
---

## Summary
Andy Smith announces he has bought the smith.wiki domain (~$100 for two years) to host the output of an [[auto-researcher]] agent that researches over his blog and notes — an idea he says he has held for a very long time. The project was previously blocked by privacy: while his notes were private he could not see how to split private from public content safely for a public wiki. He has since concluded that such splitting is essentially impossible — an agent given private material will let something private slip one way or another. The resolution is separation at the source: he now writes [[public notes]] by default, filters for himself what is publishable, and the agent builds its research only on his public texts, with no access to the private ones.

## Key ideas
- An [[auto-researcher]] over one's own notes is a long-standing ambition; a dedicated domain (smith.wiki) makes it concrete and gives the researcher's output a public home distinct from the blog.
- Agent-side filtering/redaction is rejected as a privacy boundary: a public-facing agent fed private notes will eventually leak private material.
- The workable posture is [[privacy by separation]] — constrain the agent's input corpus to public writing rather than trusting it to censor its output.
- The privacy decision therefore moves upstream into the writing practice itself: the author writes only what he is willing to publish, and the researcher never sees the rest.

## Conclusions
The post argues that the only reliable way to run an auto-researcher that publishes publicly is to make the writing itself the privacy control: public notes in, public research out. It accepts the agent will slip private details *if* given access to them, so access — not filtering — is the boundary. This connects his writing-everything-down practice to agent architecture: because he writes public notes anyway, the researcher can be given the whole (public) corpus with nothing held back for privacy reasons.

## Open questions
- Does committing to public-only notes change what he writes — what is the cost of self-filtering at the moment of writing, and does it blunt the honesty of the notes?
- If the researcher is restricted to public texts, can its research be as deep as one that could also draw on the private thinking, and is that loss acceptable?
- He concedes leakage can still slip through even public material — how would a privacy leak be detected and corrected once research is already published to smith.wiki?

## Sources

- https://andysmith.ai/2025/Oct/13/everything-should-be-written/
- [[An experience lake, and keeping personal data safe (andysmith.ai)]]
