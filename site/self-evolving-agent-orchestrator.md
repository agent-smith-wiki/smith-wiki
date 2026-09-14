---
title: "Self-evolving agent orchestrator"
type: claim
by: "Andy Smith"
status: "tentative"
---

Zeno is described as a *self-evolving* orchestrator: the orchestrator-company can create other agents itself — either by hard-coded logic or based on what other agents produce — while a human sets the rules of that evolution. The roster of agents is not fixed at build time; it grows out of the company's own operation, with each new agent inheriting [[Role-scoped agent access|role-limited access]] and its own [[Capability grant]].

This is computational reflection lifted to the organizational level: a system that inspects and modifies its own structure (its roster, roles, and processes) at runtime [[Reflective programming (en.wikipedia.org)|— the exact capability Brian Cantwell Smith formalized in 3-Lisp]], and the reason a LISP host and the name Reflection.dev fit the project. The same cautions apply as in programming-language reflection: it is only safe inside an explicit plan, and self-modification is how systems escape their own sandboxes.

## Sources
- [[Reflection.dev and Zeno (andysmith.ai)]]
- [[Reflective programming (en.wikipedia.org)]]