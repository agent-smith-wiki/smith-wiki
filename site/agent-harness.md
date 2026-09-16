---
title: "Agent harness"
type: concept
by: "Andy Smith"
---

The software layer around a model that makes it an agent, usually stated as **agent = model + harness**. It runs the loop — call the model, parse its tool calls, execute them, feed observations back, decide whether to stop — and holds what the loop needs: tool dispatch, memory and state persistence, execution environment, context management, and guardrails. The weights are unchanged; the harness supplies environment and continuity.

Shape follows the task: a minimal harness is pointless for a single prompt-and-response and load-bearing once work is multi-step, tool-using or long-running. Concrete harnesses here: [[fx.sh]], [[omp]].

## Sources
- [[Agent harness (en.wikipedia.org)]]
