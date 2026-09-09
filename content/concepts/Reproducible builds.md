---
title: Reproducible builds
type: concept
description: Build practices that always yield bit-for-bit identical artifacts from a given source, making binary-to-source correspondence independently verifiable.
tags: [concept, software-engineering, supply-chain]
---

**Reproducible builds** are a set of software development practices that ensure building a designated version of source code, together with its full toolchain and build dependencies, always yields bit-for-bit identical binary artifacts no matter the environment in which the build runs. Because any party can rebuild the software and obtain identical bytes, reproducible builds make the claim that a distributed binary corresponds to its published source independently verifiable rather than a matter of trust in the vendor — extending [[Deterministic builds]] into a property third parties can check and record as [[Software provenance]].

## Sources

- https://arxiv.org/html/2104.06020v1
- [[Reproducible builds (reproducible-builds.org)]]
- https://en.wikipedia.org/wiki/Reproducible_builds
