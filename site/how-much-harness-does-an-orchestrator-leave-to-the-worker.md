---
title: "How much harness does an orchestrator leave to the worker?"
type: question
by: "Andy Smith"
---

[[fx.sh]] is offered as a small, fast replacement for [[omp]] inside [[Zeno]], and [[Inner and outer harness]] hints at why a small inner harness could be enough: if the outer layer already owns dispatch, secrets, sandboxing and session state, the inner harness is left mainly with the model↔tool loop and context.

Open: which harness duties can actually move outward without cost? The [[Agent harness (en.wikipedia.org)|harness literature]] puts tool dispatch, memory and state, execution environment, context management and guardrails inside the harness; it is not settled which of those are orchestrator concerns versus which must stay next to the model loop, nor whether a smaller inner harness measurably changes task outcomes.

## Sources
- [[fx.sh (andysmith.ai)]]
- [[Agent harness (en.wikipedia.org)]]
