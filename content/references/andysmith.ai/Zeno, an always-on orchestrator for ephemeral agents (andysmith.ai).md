---
title: Zeno, an always-on orchestrator for ephemeral agents (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/9/zeno-an-always-on-orchestrator-for-ephemeral-agents/
date: 2026-09-09
tags: [ai-agents, orchestration, lisp, mcp, zeno]
---

## Summary
Following the critique of [[Long-lived agents]] in [[[Long-lived agents vs ephemeral agents (andysmith.ai)]]](the companion post), Andy Smith introduces Zeno: an always-on [[Orchestrator]] pulled out into its own layer, supervising disposable [[Ephemeral agents]]. Every business process is described in Lisp and is deterministic wherever a practice is known; where the practice is not yet worked out, the process is stochastic and an agent is invoked. Agents spawn on demand, run in their own environment or beside the orchestrator, and reach the outside world only through a per-agent MCP — implemented as Lisp CodeAct inside the main process's [[SCI]], so an agent's external calls are just Lisp function calls against interfaces the orchestrator controls. Zeno is being dog-tested in the author's auto-researcher; its sources will be published once core and application-specific parts are separated.

## Key ideas
- The fix for long-lived-agent problems is to *pull the orchestrator out into its own layer*: it owns the communication layer and the processing logic, while agents stay ephemeral.
- Every process in a company is described in Lisp with no size limit; one Zeno instance can serve a team, a department, a whole company, or a group of companies — the architecture scales with how autonomous the unit is and how complex its processes are.
- A process is *deterministic except at stochastic points* — places with no established practice are exactly where an LLM or agent is needed; code (deterministically or with agent help) decides which agent it needs, with which environment and permissions, then creates it, calls it, and accepts its work.
- Agents get deliberately limited access to process data, and each gets its own [[MCP]] as its only route outside — e.g. a cheap-model agent might get read access to errors/GitHub checks while a more complex one can open a pull request or ask for more permissions.
- The MCP is *Lisp CodeAct running in the SCI of the main process* — easy to describe interfaces and to fence an agent's access to the whole process's data; agent calls are just Lisp function calls, e.g. `(ask-user "question")`.
- `ask-user` abstracts over whatever communication channel the company uses (buzz, GitHub issues, email): the agent is interrupted and resumes when the answer arrives — separating communication from the actual work as cleanly as possible.
- Currently exercised by the auto-researcher itself; [[Lisp as an interface]] is a recurring theme in how interfaces and permissions are expressed.

## Conclusions
Zeno argues for a hybrid architecture: a persistent, deterministic Lisp-described process as the backbone, with stochastic gaps filled by short-lived agents that the process creates and controls. Uniform interfaces (CodeAct-in-SCI), per-agent MCP scoping, and capability/communication abstraction are what make ephemeral agents safe and practical at scale. The success criterion is being able to express whole-company processes in one coherent deterministic language that calls agents only where genuinely needed.

## Open questions
- Once the author splits Zeno into core and application-specific parts for publication, which pieces turn out to be genuinely reusable infrastructure and which are artifacts of the auto-researcher?
- How should one decide the granularity of a single Zeno instance (team vs department vs company vs group of companies) against the trade-off between unit autonomy and process complexity?
- How does the deterministic/agent boundary behave over time as an initially stochastic step becomes a worked-out deterministic practice — does the process migrate that step out of agent control?

## Sources

- [[Long-lived agents vs ephemeral agents (andysmith.ai)]]
