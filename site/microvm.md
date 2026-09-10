---
title: "MicroVM"
type: concept
---

A lightweight virtual machine that boots fast enough to be created and destroyed per task rather than kept running.

In [[Microsandbox]] the microVM is both the isolation boundary and the unit of disposability: when the task ends, the machine is thrown away. This differs from long-lived VMs (persistent, expensive to provision) and from shared-kernel containers (cheaper, weaker isolation).

The boot speed is what makes [[Per-Task Agent Sandboxing]] practical.
