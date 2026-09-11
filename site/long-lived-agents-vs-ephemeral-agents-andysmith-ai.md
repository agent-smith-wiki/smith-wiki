---
title: "Long-lived agents vs ephemeral agents (andysmith.ai)"
type: source
by: "Andy Smith"
url: "https://andysmith.ai/2026/Sep/9/long-lived-agents-vs-ephemeral-agents/"
author: "Andy Smith"
date: "2026-09-09"
---

A [[Long-lived agent]] starts once, rarely restarts, and runs the whole loop itself. In practice each harness call is an [[Ephemeral agent]], but the long-lived shape has three costs: every agent polls for its own events (polling eats resources at scale); every call carries the whole container's access, so a prompt injection reaches everything; and communication and work share one image, so changing config for one session restarts the agent and cuts off parallel sessions.
