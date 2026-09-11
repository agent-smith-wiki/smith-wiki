---
title: "Immutable Agent Environments"
type: concept
by: "Andy Smith"
status: "tentative"
---

Environments defined entirely by a prebuilt [[OCI Image]], so the running system is not mutated ad hoc: any change means rebuilding the image.

Cheap for routine tasks, slower the moment the environment needs iteration. The author of [[Microsandbox: A Computer for Anything, Anywhere (andysmith.ai)|Microsandbox: A Computer for Anything, Anywhere]] treats the rebuild cost as acceptable because rebuilds are infrequent.

Supports [[Per-Task Agent Sandboxing]]; the rebuild latency is the open concern in [[How often do agent environment rebuilds become the bottleneck?]] and the tradeoff weighed in [[Immutable agent images are worth the rebuild tax]].
