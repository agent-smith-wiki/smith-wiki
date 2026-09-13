---
title: "Controllers (kubernetes.io)"
type: source
url: "https://kubernetes.io/docs/concepts/architecture/controller/"
author: "The Kubernetes Authors"
by: "The Kubernetes Authors"
---

A Kubernetes controller runs a reconciliation loop: observe the actual state of the cluster, compare it against a declared desired state, and act to close the gap — continuously, so the system self-heals and the declaration (your manifests in git) stays the source of truth. It is declarative, not imperative: you say what you want, the controller works out how to get there and keeps it there. The canonical prior art for [[Reconcile identities from a declaration]].
