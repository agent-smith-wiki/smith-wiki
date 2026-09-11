---
title: "Ephemeral agents (andysmith.ai)"
type: source
by: "Andy Smith"
url: "https://andysmith.ai/2026/Sep/6/ephemeral-agents/"
author: "Andy Smith"
date: "2026-09-06"
---

Least privilege first: an agent with physical access to secrets will get at them, so every agent runs in a sandbox prepared for it. An agent's state is its sandbox (a reproducible Docker or Nix description, fixed for the tick) plus its mutable dirs. Two operations replace the session: create a new agent with a sandbox description and a message, or revive an existing agent with an environment and a message; each tick's state is backed up as a diff so an agent can be revived to any point. It needs an external orchestrator to create the agent-sessions and pass messages in from the communication platform.
