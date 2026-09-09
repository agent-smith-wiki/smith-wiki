---
title: Deterministic builds
type: concept
tags: [reproducibility, builds, determinism]
---

A **deterministic build** produces bit-for-bit identical artifacts whenever it is given the same source code, [[Build environment|build environment]], and build instructions. Determinism is a property of the build *process*: with identical inputs the outputs cannot differ. It is a prerequisite of [[Reproducible builds]].

## Sources

- https://reproducible-builds.org/docs/definition/
- https://reproducible-builds.org/docs/deterministic-build-systems
- https://blog.llvm.org/2019/11/deterministic-builds-with-clang-and-lld.html
