---
title: "Immutable agent images are worth the rebuild tax"
type: claim
---

Position: for [[Per-Task Agent Sandboxing]], a frozen image ([[Immutable Agent Environments]]) is worth the rebuild cost. Reproducibility and isolation are the whole point; the rebuild is slow only when it happens, and within a settled workflow it happens rarely.

Source of the tradeoff framing: [[Microsandbox: A Computer for Anything, Anywhere]].

Counter-pressure: exploratory or rapidly shifting work inverts the calculus, because the environment churns faster than it can be rebuilt.
