---
title: Castle architecture (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/1/castle-architecture/
date: 2026-09-01
tags: [castle, kubernetes, ai-agents, self-hosting]
---

## Summary
A progress note in Andy Smith's ongoing redesign of [[Castle|Reflection Castle]]. He is shaping it as a product a team can deploy itself, or one he can stand up inside a company and keep maintaining. A three-layer architecture is taking shape: (1) Kubernetes infra, deliberately left to the client because it is too hard to standardize; (2) Citadel, the layer where agents keep their data — a communication layer plus repo storage, either self-hosted (Discourse/Buzz/Zulip + Forgejo) or SaaS (GitHub + Slack); (3) the team of agents, each described declaratively in one place (infra, secrets, access), deployed to the cluster or to [[microsandbox|microsandbox (msb)]]. A first real deployment for a hardware-constrained team is expected to reveal which parts generalize versus which stay client-specific — and therefore what to open-source.

## Key ideas
- [[Castle|Castle]] should be self-deployable, or at least installable-and-maintainable by him for a client; this shapes the architecture.
- The layers are decoupled: Kubernetes infra (client-owned; minikube/k3s/GKE) is a prerequisite but "optional, see below" — the optional path is never elaborated in this post.
- [[Citadel]] is a pluggable middle layer: agent communication + repos, independent of the infra choice and of whether anything is self-hosted at all.
- The agent layer is a set of [[declarative agent configuration|declaratively described agents]] (likely one repo) — each agent's infra, secrets, and access declared in one place, deploying by default to the cluster, alternatively to msb.
- A minimal NixOS config for a minimal run may appear, but he expects every client to end up with its own setup.
- The open-source vs closed/client-specific split is deferred until the real deployment makes the common core visible.

## Conclusions
The post argues for (a) keeping [[Kubernetes]] outside Castle's scope as a client-supplied prerequisite, (b) making the data/communication layer (Citadel) interchangeable rather than baked in, and (c) describing agents as declarative code so the whole agent team is reproducible and deployable across infra. What is shared versus bespoke — and hence what gets [[open source|open-sourced]] versus kept closed — can only be decided empirically, from deploying Castle for a real team alongside the author's own single-user setup.

## Open questions
- What does the "optional" non-Kubernetes deployment path for Castle actually look like?
- What should the team-of-agents layer be called?
- Which parts of the architecture will generalize across clients, and which will remain client-specific setups?
- How will the decision about what to open-source versus keep closed be made after the first real deployments?
- Does the choice of Citadel backend (self-hosted vs GitHub + Slack) force the agents themselves to be written differently?

## Sources

- https://andysmith.ai/2026/Sep/1/rethinking-the-vision-for-reflection-castle/
- https://andysmith.ai/
