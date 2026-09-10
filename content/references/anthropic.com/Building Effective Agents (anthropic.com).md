---
title: Building Effective Agents (anthropic.com)
type: reference
kind: article
author: Erik Schluntz, Barry Zhang (Anthropic)
url: https://www.anthropic.com/engineering/building-effective-agents
date: 2024-12-19
tags: [agents, llm, workflows, tool-use, anthropic]
---

## Summary
Anthropic's distilled field notes from working with dozens of teams shipping LLM systems. The central claim is that the most successful implementations avoid heavy frameworks and instead compose **simple, composable patterns**. The post draws an architectural line between **[[Workflow|workflows]]** (LLMs and tools orchestrated through predefined code paths) and **[[AI agent|agents]]** (LLMs that dynamically direct their own process and tool usage), grouping both under the umbrella of **[[Agentic system|agentic systems]]**. It then walks a ladder of complexity — from the **[[Augmented LLM|augmented LLM]]** building block up through five workflow patterns to fully autonomous agents — and closes with two appendices on real deployments and on **[[Prompt engineering|prompt engineering]]** your tools.

## Key ideas
- **Use the simplest thing that works.** "Agentic systems often trade latency and cost for better task performance." For many applications, a single LLM call optimized with retrieval and in-context examples is enough; add complexity only when it *demonstrably* improves outcomes.
- **Workflows vs agents is the load-bearing distinction.** Workflows buy predictability and consistency for well-defined tasks; agents buy flexibility and model-driven decision-making for open-ended ones. Same building blocks, different topology of control.
- **Building block — the augmented LLM:** an LLM plus retrieval, tools, and memory. Design work concentrates on (a) tailoring these capabilities to the use case and (b) giving the model a clean, well-documented interface (e.g. via the **[[Model Context Protocol|Model Context Protocol]]**).
- **Five workflow patterns:**
  - **[[Prompt chaining|Prompt chaining]]** — decompose into fixed sequential steps, with programmatic "gates" between them. Buys accuracy by making each call easier, at the cost of latency.
  - **[[Routing|Routing]]** — classify input, dispatch to a specialized prompt/tool/model. Separation of concerns; also enables cost tiering (cheap model for common queries, stronger model for hard ones).
  - **[[Parallelization|Parallelization]]** — two variants: **sectioning** (independent subtasks in parallel, often for guardrails or evals) and **voting** (same task run several times for diverse outputs / confidence thresholds). Rationale: LLMs attend better when each consideration gets its own call.
  - **[[Orchestrator-workers|Orchestrator-workers]]** — a central LLM decomposes the task at runtime, delegates to workers, and synthesizes results. Topographically like parallelization but with subtasks *not* pre-defined. Suits tasks where the number and nature of steps depend on the input (multi-file code changes, multi-source search).
  - **[[Evaluator-optimizer|Evaluator-optimizer]]** — one call generates, another critiques, loop. Fits when criteria are clear and iterative refinement measurably helps, and when the model can both articulate useful feedback and act on it.
- **Agents:** typically "just LLMs using tools based on environmental feedback in a **[[Agent loop|loop]]**." Key requirements — **[[Ground truth|ground truth]]** from the environment at each step (tool results, code execution), checkpoints for human feedback, and **[[Stopping condition|stopping conditions]]** (e.g. max iterations). Autonomy brings higher cost and **[[Compounding error|compounding errors]]**, so sandboxed testing and **[[Guardrails|guardrails]]** are prescribed.
- **ACI > prompts, sometimes.** For the SWE-bench agent, more effort went into optimizing tools than the overall prompt; making file paths absolute instead of relative eliminated a whole class of errors.
- **Tool design heuristics:** leave room to "think" before committing to output; keep formats close to naturally occurring text; avoid formatting overhead (diffs' line counts, escaping code inside JSON); write tool docs like a docstring for a junior developer; test tool usage across many inputs; **[[Poka-yoke|poka-yoke]]** the arguments so mistakes are structurally hard.
- **Frameworks:** useful for getting started but add abstraction that obscures prompts/responses and tempts premature complexity. Start on raw APIs; if you adopt a framework, understand what is under the hood.

## Conclusions
Success is not the most sophisticated system but the *right* system: start with simple prompts, optimize with comprehensive evaluation, and add multi-step agency only when simpler solutions fall short. Three principles: keep the design **simple**, make planning steps **transparent**, and treat the **[[Agent-computer interface|agent-computer interface (ACI)]]** as a first-class design surface through documentation and testing. Two domains show the pattern paying off — **[[Customer support agent|customer support]]** (conversation plus tool actions, success measured by resolutions) and **[[Coding agent|coding agents]]** (verifiable via tests, test results as feedback, objective quality) — and both share the traits that make agents valuable: conversation plus action, clear success criteria, feedback loops, and meaningful human oversight.

## Open questions
- What concrete, measurable signal tells you that added agentic complexity has paid off rather than just cost more latency and money?
- How should you choose between the five workflow patterns and a fully autonomous agent when a task is only partly predictable?
- How do you bound cost and compounding-error risk in long-running agents without hardcoding a fixed path or a hard iteration cap?
- What would a rigorous discipline of agent-computer interface design look like, beyond tool docstrings and poka-yoke argument design?
- As agent frameworks mature, is there a principled way to keep their abstraction from hiding the prompts and responses you need to debug?

## Sources
- https://www.anthropic.com/engineering/managed-agents
- https://platform.claude.com/docs/en/agent-sdk/overview
- https://strandsagents.com/latest/
- https://rivet.ironcladapp.com/
- https://www.vellum.ai/
- [[Introducing the Model Context Protocol (anthropic.com)]]
- https://modelcontextprotocol.io/tutorials/building-a-client
- https://www.anthropic.com/research/swe-bench-sonnet
- https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo
- https://en.wikipedia.org/wiki/Poka-yoke
