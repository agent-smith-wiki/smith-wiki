---
title: Reproducible environment
type: concept
description: A computing environment whose complete specification is captured in a versioned, immutable artifact so it can be rebuilt identically.
tags: [reproducibility, nix, containers, sandboxing]
---

A **reproducible environment** is a computing environment whose complete specification — operating system, toolchain, libraries, and configuration — is captured in a single versioned, immutable artifact, so that it can be rebuilt identically at any later time and on any machine. The artifact is typically a pinned [[Container image]] or a [[Nix flakes|Nix flake]] whose inputs are locked to exact revisions.

## Sources
- [reproducible-builds.org](https://reproducible-builds.org/) — reproducibility as verifiable, deterministic output
- [Reproducible Development Environments with Nix Flakes](https://aige.eu/posts/reproducible-development-environments-with-nix-flakes) — locked, immutable environments rebuilt identically

## Sources

- https://reproducible-builds.org/
- https://aige.eu/posts/reproducible-development-environments-with-nix-flakes
