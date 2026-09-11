---
title: "Zeno, an always-on orchestrator for ephemeral agents (andysmith.ai)"
type: source
by: "Andy Smith"
url: "https://andysmith.ai/2026/Sep/9/zeno-an-always-on-orchestrator-for-ephemeral-agents/"
author: "Andy Smith"
date: "2026-09-09"
---

Andy pulls the orchestrator out into its own long-lived layer that handles the communication layer and the processing logic, while agents stay ephemeral and spawn either in their own environment or next to the orchestrator. Every company process is described in Lisp: deterministic where a worked-out practice exists, an LLM or agent only in the stochastic gaps. Each agent gets its own [[Per-agent MCP]] (Lisp CodeAct evaluated in the main process) as its only channel out, with as much or as little access as the orchestrator decides. [[Ask-user]] separates communication from work: the agent is interrupted and resumes when the answer arrives, regardless of channel.
