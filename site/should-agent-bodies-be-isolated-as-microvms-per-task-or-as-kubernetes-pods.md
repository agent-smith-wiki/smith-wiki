---
title: "Should agent bodies be isolated as microVMs per task or as Kubernetes pods?"
type: question
by: "Andy Smith"
---

Both give hardware-grade isolation; microVMs (via a tool like [[Microsandbox]]) are per-task and simple, while [[Nested virtualization]] pushes toward Kubernetes pods once the orchestrator itself is sandboxed. Which is the right default for [[Layered agent isolation]] at scale?
