---
title: "Company-as-code wants a homoiconic language"
type: claim
by: "Andy Smith"
status: "speculative"
---

Reflection describes [[Company as code|a company in Lisp]], and the post names elegance and fun as the reason. The property that arguably matters more for a self-evolving organization is that Lisp code is data: a company definition written in a homoiconic language can itself be generated, inspected and rewritten by the agents the orchestrator spawns — closing the loop behind [[The orchestrator can create agents itself]] "based on what other agents produce", where what other agents produce is literally new company logic. A fixed external definition format would need a separate tool to edit; the Lisp definition is just a Lisp program the runtime already evaluates. Speculative: the post states the Lisp choice, but the code-is-data mechanism is an extrapolation, not something it claims.

## Sources
- [[Reflection.dev and Zeno: how a weekend project turned into a product (andysmith.ai)]]
- [[Zeno, an always-on orchestrator for ephemeral agents (andysmith.ai)]]