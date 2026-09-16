---
title: "Agent harness (en.wikipedia.org)"
type: source
url: "https://en.wikipedia.org/wiki/Agent_harness"
author: "Wikipedia contributors"
by: "Wikipedia contributors"
---

Digest: an [[Agent harness]] is the infrastructure surrounding a model that lets it act — tool dispatch, memory and state, execution environment, feedback loops — summarised as agent = model + harness. The mechanisms predate the name (ReAct's reason-and-act loop, Toolformer's tool calls); a harness must be designed to tolerate a non-deterministic component that fabricates actions or claims success falsely.

Scope: unnecessary for one prompt-and-response, essential as tasks become multi-step, tool-oriented or long-running. A harness can offload record-keeping into structured state instead of re-reading a growing transcript.

Distinction worth keeping: Birgitta Böckeler splits the **inner harness** shipped by the model's builder (an SDK, or a tool like Cursor or Codex) from the **outer harness** the user assembles on top — instruction files, MCP servers, custom skills, plus guides (steer before acting) and sensors (observe and self-correct after) — see [[Inner and outer harness]]. "Harness engineering" as a named discipline appears in 2026, attributed variously to Mitchell Hashimoto and LangChain's Vivek Trivedy, and by mid-2026 harnesses were themselves objects of study (Self-Harness, Harness-1), with accuracy gains coming from redesigning the environment rather than enlarging the model.
