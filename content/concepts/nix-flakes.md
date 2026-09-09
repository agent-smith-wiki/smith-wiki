---
title: Nix flakes
type: concept
description: A flake is a directory packaging Nix code whose inputs are pinned by a lockfile and evaluated purely, so the same artifacts build everywhere.
tags: [nix, reproducibility, package-management]
---

**Nix flakes** are a standard, reproducible way to package [[Nix (package manager)|Nix]] code: a flake is a directory whose `flake.nix` file declares its dependencies (`inputs`) and a pure function (`outputs`) that maps those inputs to buildable artifacts such as packages, development shells, and checks. Nix generates a [[Lockfile|flake.lock]] pinning each input to an exact git revision and [[Content-addressable storage|content hash]], and flakes evaluate in a restricted pure mode that forbids reading the host environment, so a flake resolves to the same dependency tree and builds the same artifacts on every machine.

## Sources

- https://aige.eu/posts/reproducible-development-environments-with-nix-flakes
- https://nix.dev/concepts/flakes.html
- https://wiki.nixos.org/wiki/Flakes
