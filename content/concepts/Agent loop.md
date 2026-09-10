---
title: Agent loop
type: concept
description: The iterative model-call/act/observe cycle that drives an AI agent until it exits or a stopping condition fires.
tags: [AI agents, agents]
---

An **agent loop** is the iterative execution cycle that runs an [[AI agents]]: a runtime repeatedly calls a large language model, executes the action the model requests — typically a [[Tool calling]] — feeds the observed result back into the model's context, and repeats until the model returns a final answer or a stopping condition halts the run. The model decides on each turn which action to take and when to stop; the loop itself is plain code in the surrounding runtime.

## Sources

- [[Building Effective Agents (anthropic.com)]]
- [[What Is the AI Agent Loop? The Core Architecture Behind Autonomous AI Systems (blogs.oracle.com)]]
