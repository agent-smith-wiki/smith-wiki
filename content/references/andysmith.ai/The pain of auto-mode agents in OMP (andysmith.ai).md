---
title: The pain of auto-mode agents in OMP (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/5/the-pain-of-auto-mode-agents-in-omp/
date: 2026-09-05
tags: [ai-agents, agent-security, sandboxing, omp, claude-code]
---

## Summary

A first-person field note on what broke when the author moved his [[Auto-mode agents|auto-mode]] agent workflow from Claude Code to OMP (omp.sh). Trust in agents grew in stages: manual approval of every action → rubber-stamping Enter because rejections got rare → Claude Code auto-mode, where a classifier model judges whether each external operation is legitimate and only pulls the human in when the automatic check blocks something. OMP lacks that blocking classifier: it ships only an advisor that can intervene *after* a command has already run, which is too late once a secret has leaked or a destructive command has executed on a reachable server. Sandboxing is only a partial fix, since the full range of legitimate operations can't be known up front and sometimes the agent genuinely needs the secrets or the server login. The response is to hand-roll an OMP extension that does pre-execution LLM classification of external calls, Claude Code-style.

## Key ideas

- Trust progression: manual per-action approval → autopilot Enter (low rejection rate) → classifier-gated auto-mode where the human is interrupted only when the automatic check blocks something.
- Claude Code's pattern: a classifier model decides whether an external operation is legit *before* it runs — the gate is pre-execution, so harm is prevented rather than reported.
- OMP's gap: no built-in LLM classifier, only an [[Advisor-based guardrails|advisor]]; it cannot block a request, only cut it off after the fact, once the damage is done.
- Concrete failure modes: an agent reads secrets that are available in the same environment it runs in, or runs a destructive command on a server it can reach over SSH — both invisible to post-hoc intervention.
- The sandbox problem: you cannot know up front everything the agent will need, so you cannot grant the right [[Sandboxing|sandbox]] permissions ahead of time; blanket denial fails because legitimate tasks sometimes really do require the secrets and the server.
- The proposed fix: an OMP extension that performs LLM classification of external calls (mirroring Claude Code's auto-mode), validated against the author's own tasks and shared if it works.

## Conclusions

Blocking decisions must happen before execution: post-hoc advisor cut-offs are worthless against irreversible actions like [[Secret exfiltration|secret leakage]] or destructive remote commands. Pre-authorization sandboxes are structurally insufficient when legitimate operations cannot be enumerated in advance — the hard case sits at the boundary where the *same* operation (reading a secret, SSH-ing to a server) is sometimes required and sometimes exactly the abuse to prevent. Claude Code's LLM-classifier gate is treated as the reference architecture, and the author argues OMP needs the equivalent — built as an extension because nothing ready-made exists.

## Open questions

- Can any sandbox be pre-configured correctly when the full set of legitimate operations an agent will need is unknowable up front?
- Does an advisor that can only intervene after a command has run offer any real protection once secrets have already been read or commands already executed?
- Will a pre-execution LLM permission classifier be accurate and fast enough to be strictly better than manual approval rather than just a false sense of safety?
- Is "legitimate vs illegitimate operation" even a stable classification when the same external call is sometimes necessary and sometimes precisely the abuse the guardrail exists to stop?

## Sources

- omp.sh — https://omp.sh/
- Claude Code — https://www.anthropic.com/claude-code
- Background on OMP by the same author — https://andysmith.ai/2026/Aug/21/omp-a-coding-agent-with-the-ide-wired-in/
