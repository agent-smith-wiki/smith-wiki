---
title: "Reconcile identities from a declaration"
type: concept
by: "Andy Smith"
---

Declare the fleet of agents and the identities they need, then let a reconcile step create what is missing and converge the rest — instead of wiring each account by hand. The declaration is the single source of truth: edit it, re-run, and it settles. This is the desired-state [[Controllers (kubernetes.io)|control loop]] Kubernetes uses for pods, applied to agent identities: for an [[Agent orchestrator]] each machine's chat persona and keys are provisioned from one file — create-if-missing, then rotate. See [[Agent identity is a keypair]].

## Sources
- [[Controllers (kubernetes.io)]]
