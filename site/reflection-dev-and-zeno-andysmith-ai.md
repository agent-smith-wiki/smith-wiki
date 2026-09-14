---
title: "Reflection.dev and Zeno: how a weekend project turned into a product (andysmith.ai)"
type: source
url: "https://andysmith.ai/2026/Sep/14/reflection-dev-and-zeno/"
author: "Andy Smith"
by: "Andy Smith"
date: "2026-09-14"
---

Andy announces [[Reflection.dev]], an infrastructure framework for [[AI-native company|AI-native companies]] built on top of [[Zeno]], from someone who runs NixOS fleets at big companies by day and writes Lisp at night. The motivation is that integrating what individual assistants produce back into the team's shared context is hard: when every employee generates a large stream of code, docs and so on, the usual merge paths — PRs, reviews, tests — start to break down, and a large part of the context lives inside personal agents that don't sync with each other. He calls it as absurd as a car factory where every fitter takes a blank home in the evening and brings back a finished part in the morning: nobody knows how he did it, nobody can judge the quality of the process, hidden defects can't be told from the result, and what happens if he leaves the company?

The answer is to treat the organization as a thing in its own right — a single pipeline with its own context and its own set of agents — and to back that with tooling. Reflection + Zeno lets you describe any company as code: the company-orchestrator can create other agents itself, each agent runs in an isolated sandbox with limited access to shared context determined by its role, and roles can update and extend dynamically on the fly. People steer the system through chat (Zulip/Discourse/Buzz): discussing ideas, assigning tasks to agents, answering their questions. The organization can evolve, but the rules of that evolution are set by a human — expressed as elegantly as Lisp allows.