---
title: "Reflection.dev"
type: tool
by: "Andy Smith"
---

Reflection.dev is an infrastructure framework for AI-native companies, built on top of [[Zeno]]. Its core move is [[Describe a company as code]]: the company's processes, shared context, roles, and agent roster are expressed in Lisp and executed by the [[Agent orchestrator]], which can spawn agents itself (see [[Self-evolving agent orchestrator]]).

Each agent runs in an isolated sandbox with [[Role-scoped agent access|role-limited access]] to the shared context; roles can be updated and extended dynamically at runtime. Humans interact through chat ([[Zulip]], [[Buzz]]): discussing ideas, assigning tasks to agents, answering their questions, while the company's agents do the work. The thesis it implements: [[An organization is one assembly line, not many craftsmen]].

See the announcement post [[Reflection.dev and Zeno (andysmith.ai)]] for the framing.