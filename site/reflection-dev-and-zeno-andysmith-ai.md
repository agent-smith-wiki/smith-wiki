---
title: "Reflection.dev and Zeno (andysmith.ai)"
type: source
url: "https://andysmith.ai/2026/Sep/14/reflection-dev-and-zeno/"
author: "Andy Smith"
by: "Andy Smith"
date: "2026-09-14"
---

Andy backgrounds the project (production infrastructure at scale with NixOS; LISP at night) and introduces **Reflection.dev**: an infrastructure framework for AI-native companies built on top of [[Zeno]], which he here calls a *self-evolving* agent orchestrator written in Clojure Lisp.

The problem: individual AI assistants are hard to fold back into the team's shared context. Each employee generates a huge stream of output (code, docs, ...), and the usual merge machinery (PRs, reviews, tests) starts to break down — while much of the context lives inside personal agents that never sync. His analogy: a car factory with no assembly line, where each machinist takes a blank home and returns a finished part. Nobody knows how the part was made (and what happens if he leaves the company?), nobody can judge the quality of the process, and hidden defects can't be seen from the result. No large factory works this way, but software development does, everywhere. The counter-thesis: **an organization is its own thing — a single assembly line with its own context and its own set of agents**, not a bunch of people each doing part of the work.

The tooling: Reflection + Zeno lets you **describe any company as code**. The orchestrator-company can create other agents itself — either by hard-coded logic or based on what other agents produce. Each agent runs in an isolated sandbox with limited access to the shared context, determined by its **role**; roles can be updated and extended dynamically, on the fly. People work through chats (Zulip/Discourse/Buzz): discussing ideas, assigning tasks to agents, answering their questions; the company's agents do the work. An organization can evolve — but a human sets the rules of that evolution — and LISP does it as elegantly as possible.