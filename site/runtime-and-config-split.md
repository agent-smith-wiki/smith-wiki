---
title: "Runtime and config split"
type: concept
by: "Andy Smith"
---

A runtime is a general engine; an instance is a config it loads and runs, not a program baked into it. It is the same split as a shell and its rc file, a browser and a profile, an editor and its init: the engine stays reusable and versioned while each deployment is just data the engine reads at start. The engine should even start when its config is missing or broken — reporting the error and dropping you to a working prompt rather than refusing to boot. [[Zeno]] is the runtime; your [[Agent orchestrator]] instance is the config it loads.

## Sources
- [[Zeno, an always-on orchestrator for ephemeral agents (andysmith.ai)]]
