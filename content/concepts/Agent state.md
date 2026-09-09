---
title: Agent state
type: concept
description: The information an AI agent carries across the individual model calls of a run.
tags: [ai-agents, agent-architecture, state-management]
---

Agent state is the information an AI agent carries across the individual model calls of a run, which determines how it continues: the conversation and message history held in the [[Context window]], the results of prior tool calls and observations, and any memory or workspace contents accumulated along the way. Since each model inference is stateless, this state is stored outside the model — in the runtime that runs the [[Agent loop]] — and re-injected into the context at every step.

## Sources

- https://mlflow.org/articles/state-management-agents
- https://blogs.oracle.com/developers/what-is-the-ai-agent-loop-the-core-architecture-behind-autonomous-ai-systems
- https://platform.claude.com/docs/en/managed-agents/memory
