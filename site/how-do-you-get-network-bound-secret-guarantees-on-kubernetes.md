---
title: "How do you get network-bound secret guarantees on Kubernetes?"
type: question
by: "Andy Smith"
---

[[Network-bound secrets]] — never written to disk, delivered only toward allowed hosts — are a microVM feature. On Kubernetes the nearest equivalent is a per-spawn in-memory secret plus a strict NetworkPolicy. Is that enough?
