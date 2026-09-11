---
title: "OCI Image"
type: concept
by: "Andy Smith"
status: "tentative"
---

The standardized container image format (Open Container Initiative).

[[Microsandbox]] reuses OCI images as the root filesystem of a [[MicroVM]], so an environment can be built with a Dockerfile or Nix and then run without Docker. Reusing the format decouples *how an environment is defined* from *how it is executed*.

This is what lets [[Immutable Agent Environments]] be portable across the runtimes a team already uses.
