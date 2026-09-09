---
title: Onboarding agents (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/1/onboarding-agents/
date: 2026-09-01
tags: [ai-agents, onboarding, access-control, automation]
---

An addition to the [[Castle architecture]] series. The agent layer is a repo that manages [[AI agents]], but agents need access and each needs different access.

## Summary

Smith walks through what onboarding a new agent actually requires in his setup: issuing a model token, registering the agent's identity (name/bio) and stashing its API key in the chat systems (Discourse/Buzz/Zulip), assigning Discourse roles, issuing per-repo tokens, and sometimes extra access (ssh, logs). He flirted with describing all of this declaratively so that deploying an agent auto-creates its own secrets on first run, then decided that is a mistake: onboarding an agent is **operator work** that needs a manual check, especially when it grants rights to irreversible actions. For now he creates agents by hand via a script in the agents repo; later he might give an agent an "hr role" able to automate the simple, non-destructive cases.

## Key ideas

- The hard part of running an agent fleet is not spawning agents but granting each one the *right* slice of access — a classic [[Access control]] problem.
- A realistic onboarding checklist spans many systems at once: model-provider tokens, chat/forum identity and stored credentials, roles, repo tokens, and infra access (ssh, logs).
- **Declarative provisioning** (onboarding happens on first run, secrets self-issued) is tempting but wrong here: it removes the human from the moment of grant.
- Granting access to irreversible actions is the line that forces a manual operator check — full automation there is unacceptable.
- A middle path: keep a deterministic script in the agents repo but run it by hand, reserving future automation for a dedicated agent with an "hr" role limited to non-destructive onboarding steps.

## Conclusions

- Agent onboarding should remain deliberate, operator-supervised work, not a side effect of deployment.
- [[Least privilege]] and reversibility structure the decision: what can be delegated to an automation is bounded by how destructive the granted right is.
- The open design question is *when* an agent is trustworthy enough to hold an "hr role" that onboards other agents.

## Open questions

- When is an agent trustworthy enough to hold an "hr" role that onboards other agents, and what guardrails should bound its authority?
- How should a human operator audit an agent-issued grant after the fact if delegation of non-destructive onboarding does happen?

## Sources

- [[Castle architecture (andysmith.ai)]]
