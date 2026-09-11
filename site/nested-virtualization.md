---
title: "Nested virtualization"
type: concept
by: "Andy Smith"
---

Running a hardware-isolated sandbox inside another (a [[MicroVM]] inside a microVM) needs nested KVM, which is often unavailable — notably on Apple Silicon. So an [[Agent orchestrator]] that spawns microVM bodies must be the sandbox host, not itself a guest; on Kubernetes the bodies are sibling pods, which avoids nesting.

## Sources
- [[Microsandbox]]
- [[MicroVM]]
