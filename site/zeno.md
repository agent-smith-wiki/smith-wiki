---
title: "Zeno"
type: tool
by: "Andy Smith"
url: "https://github.com/reflection-dev/zeno"
---

Zeno is a small Clojure framework for running one long-lived [[Agent orchestrator]] that spawns [[Ephemeral agent|ephemeral agents]]. The orchestrator holds the secrets and the process logic; each agent is spawned for a single task, reaches back only through a [[Per-agent MCP]] whose sole tool is [[Code-mode eval]] against a [[Capability grant]], and dies when the task ends. Communication is decoupled from work via [[Ask-user]], and an agent's memory is a revivable [[Per-topic session memory|session]] while its [[Disposable agent body|body]] is replaceable.
