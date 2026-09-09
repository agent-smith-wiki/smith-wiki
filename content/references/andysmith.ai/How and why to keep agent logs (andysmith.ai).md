---
title: How and why to keep agent logs (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/3/how-and-why-to-keep-agent-logs/
date: 2026-09-03
tags: [ai-agents, logging, observability, claude-code, self-hosting]
---

## Summary

Andy Smith argues that the conversation logs kept with agents are 'the key artifact of this era' — the future's audit will be an [[audit of thinking]] rather than of results, so a pull request should ship with the log of the agent conversation that produced it. He compares three ways to capture agent work: provider-side LLM interaction logs (LangFuse and the like), agent-written session summaries/digests, and raw agent session logs (Claude Code, his own `omp` harness). He rejects the first two as lossy: LLM logs lack the agents' internal operations and tool-call results (or only have them sanitized), and they duplicate the whole conversation every turn because the harness resends it; summaries filter out material that may turn out to matter for as-yet-unknown future uses. His lean is to keep all raw [[agent logs|session logs]] — including the sessions of the agents his agents talk to — and store them compressed, encrypted, and append-only in R2. This log layer echoes but is distinct from the [[experience lake]]: the lake should hold only *his* experience, and most agents are spawned by other agents rather than by him, so the layer is separate yet should feed the lake.

## Key ideas

- Conversations with agents are the key artifact of this era; logs are raw material for [[self-reflection]] — thinking patterns, mistakes, ideas.
- 'The audit of the future is an audit of thinking, not of results' — a pull request should come with the log of the conversation with the agents. Start saving as early as possible.
- Three capture strategies: (1) LLM-provider interaction logs (LangFuse and the like), (2) agent-written processed material/summaries, (3) raw Claude Code sessions (or equivalents).
- Provider LLM logs are hard to collect: no internal operations or tool-call results (or only sanitized ones) and duplication, since the harness sends the whole conversation each time — cleanup required.
- Digests are the most obvious option but fail on a collect-then-analyze mismatch: when you're collecting you don't know how you'll use the data, so you can't guarantee you've collected everything a later statistic will need.
- A Discourse/Buzz/Zulip communication platform is not enough — only part of the work result makes it into an agent's comment, and what gets filtered out might prove really important later.
- Decision: compress, encrypt, and drop session files into R2; since it is append-only, just keep appending the files that changed since the last write.
- Agents aren't only the author's experience (most are spawned by other agents — [[nested agents|agents spawning agents]]), so this layer is separate from the [[experience lake]] but can (and should) be used to build it.

## Conclusions

- Keep the raw agent session logs, not just provider-side LLM logs or agent-written summaries, and start as early as possible.
- Log recursively: not only the agents the author talks to, but the agents those agents talk to.
- Cheap durable storage suffices: compressed, encrypted, append-only files in R2.
- Treat the raw agent-log layer as substrate *beneath and separate from* the experience lake, which should hold only first-person experience.

## Open questions

- If the experience lake is meant to hold only the author's own experience, how should material from agent sessions be attributed to the self when most of the agents were spawned by other agents, not by him?
- If session files are encrypted at rest in R2, how can they later be searched and analyzed without decrypting the whole archive?
- Do raw harness session logs (Claude Code/omp) actually capture internal reasoning and tool-call results completely, or only the exchanged messages?

## Sources

- https://andysmith.ai/2026/Aug/31/discourse-as-a-platform-for-an-ai-native-company/
- https://andysmith.ai/2026/Sep/1/rethinking-the-vision-for-reflection-castle/
- https://andysmith.ai/2026/Aug/19/an-experience-lake-and-keeping-personal-data-safe/
