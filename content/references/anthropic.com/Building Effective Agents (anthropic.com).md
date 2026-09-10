---
title: Building Effective Agents (anthropic.com)
type: reference
kind: article
author: Erik Schluntz and Barry Zhang
url: https://www.anthropic.com/engineering/building-effective-agents
date: 2024-12-19
tags: [agents, workflows, LLM, patterns, tool-design]
---

## Summary
Anthropic's engineering team distills lessons from working with dozens of teams building [[AI agent|LLM agents]]. Their central finding: the most successful production systems use simple, composable patterns rather than heavy frameworks. They separate **agentic systems** into two architectural classes — [[Workflow|workflows]], where LLMs and tools run through predefined code paths, and [[AI agent|agents]], where the LLM dynamically directs its own process and tool use. The post walks from a single [[Augmented LLM|augmented LLM]] up through five workflow patterns to fully autonomous agents, and closes with two appendices on real applications and tool design.

## Key ideas
- **Define the terms.** *Workflows* orchestrate LLMs/tools via predefined code paths; *agents* let the LLM control its own process and tool usage. Both are "agentic systems."
- **Start simple.** Find the simplest solution; only add complexity when it demonstrably improves outcomes. For many apps a single LLM call with retrieval and in-context examples suffices. Agentic systems trade latency and cost for task performance.
- **Workflows vs agents by fit.** Workflows give predictability for well-defined tasks; agents are better where flexibility and model-driven decisions are needed at scale.
- **Be skeptical of frameworks.** Frameworks (Claude Agent SDK, Strands, Rivet, Vellum) ease starts but add abstraction layers that obscure prompts/responses and tempt needless complexity. Prefer calling LLM APIs directly; if using a framework, understand the underlying code.
- **The building block is the [[Augmented LLM|augmented LLM]]** — an LLM with retrieval, tools, and memory, which can generate its own search queries, pick tools, and decide what to retain. [[Model Context Protocol|MCP]] is one way to plug in tools.
- **Five workflow patterns**, each with stated "when to use" criteria:
  - [[Prompt chaining|Prompt chaining]] — decompose into a fixed sequence of calls, with programmatic "gates" between steps; trades latency for accuracy.
  - [[Routing|Routing]] — classify input and dispatch to a specialized follow-up (e.g. cheap vs capable models); separation of concerns.
  - [[Parallelization|Parallelization]] — two variants: *sectioning* (independent subtasks) and *voting* (same task run multiple times). Separate LLM calls per consideration generally outperform a single overloaded call.
  - [[Orchestrator-workers|Orchestrator-workers]] — a central LLM dynamically decomposes tasks, delegates to workers, and synthesizes results; differs from parallelization in that subtasks aren't pre-defined.
  - [[Evaluator-optimizer|Evaluator-optimizer]] — one LLM generates, another critiques in a loop; effective when evaluation criteria are clear and feedback measurably improves output.
- **Agents in practice** are "LLMs using tools based on environmental feedback in a loop." They need ground truth from the environment at each step, checkpoints for human feedback, and stopping conditions (e.g. max iterations). Autonomy brings higher cost and compounding-error risk — sandbox and guardrail.
- **When to use agents:** open-ended problems where the number of steps can't be predicted or hardcoded, and you can trust the model's decision-making over many turns.
- **Three core principles:** maintain **simplicity** in design; prioritize **transparency** by showing planning steps; carefully craft the [[Agent-computer interface|ACI]] through thorough tool documentation and testing.
- **Prompt-engineering tools.** Invest as much in the agent-computer interface as in HCI. Give models tokens to think, keep formats close to naturally occurring text, avoid formatting overhead (escaping, line counts). Put yourself in the model's shoes; write tool docs like a docstring for a junior dev; test tool use and iterate; [[Poka-yoke|poka-yoke]] arguments against mistakes. In their SWE-bench agent they optimized tools more than the prompt — switching to absolute filepaths eliminated a common error.

## Conclusions
The article argues success with LLMs "isn't about building the most sophisticated system," but the *right* system: start with simple prompts, optimize with evaluation, and add multi-step agentic machinery only when simpler solutions fall short. Composable patterns (augmented LLM, the five workflows, the autonomous agent loop) beat frameworks and gratuitous complexity. Reliability comes from simple, transparent designs and a painstakingly engineered agent-computer interface.

## Open questions
- How should a team decide the crossover point where a workflow's predictability should be abandoned for an agent's flexibility?
- What concrete evaluation methodology best justifies adding a more complex agentic pattern over a single augmented LLM call?
- How can transparency into an agent's planning steps be maintained in production without leaking sensitive information or overwhelming users?
- When autonomy and compounding-error risk grow, what guardrail and sandbox conventions should be treated as standard?

## Sources
- https://platform.claude.com/cookbook/patterns-agents-basic-workflows
- https://www.anthropic.com/news/model-context-protocol
- https://www.anthropic.com/research/swe-bench-sonnet
- https://www.anthropic.com/engineering/managed-agents
- https://platform.claude.com/docs/en/agent-sdk/overview
- https://strandsagents.com/latest/
