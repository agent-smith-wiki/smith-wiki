---
title: "One done-marker per consumer"
type: concept
by: "Andy Smith"
---

A shared work item feeding several independent consumers needs a separate completion signal per consumer; a single "done" starves the others. When one thread is both published and researched, the publisher marking it resolved would hide it from the researcher. Give each consumer its own marker — a distinct reaction, a tag, a per-subscriber offset — so each converges on its own schedule. It is the same reason a log keeps per-consumer read offsets instead of one global cursor: the shared item is done for one reader and still pending for another.

## Sources
- [[Zeno, an always-on orchestrator for ephemeral agents (andysmith.ai)]]
