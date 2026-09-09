---
title: Reproducible Development Environments with Nix Flakes (aige.eu)
type: reference
kind: blog
author: 
url: https://aige.eu/posts/reproducible-development-environments-with-nix-flakes
date: 2022-05-12
---

## Summary
A developer-experience (DX) argument for capturing project dev environments as code with [[Nix flakes|Nix Flakes]], pitched against the standard tooling (README instructions, [[Homebrew]], version managers like pyenv/nvm, and [[Docker]]). The author (working mainly on macOS) argues that onboarding and long-lived, infrequently-touched codebases suffer most from dev environments that cannot be reproduced exactly, and that Nix Flakes — with a `flake.nix` describing the environment and a `flake.lock` pinning every input to a commit — lets a team version-control the environment end to end and roll it back like any dependency.

## Key ideas
- Documented setup (README/Makefile/Brewfile) breaks down silently: a dependency can be added to `requirements.txt` without updating the docs, and infrequently-changed projects drift as macOS or package versions move on.
- [[Homebrew]] cannot pin the state of the package tree, so `brew install`/`brew bundle` today ≠ tomorrow; even with autoupdate off a fresh machine resolves a different tree.
- pyenv/nvm build toolchains against locally-installed libraries (e.g. OpenSSL); when `brew upgrade` removes an old lib the linking breaks and engineers must rebuild the whole toolchain for reasons that are hard to diagnose.
- Docker has two failure modes: pinned base images (`FROM python:3.9-slim`) still drift on rebuild, and published images are architecture-bound (x86 vs ARM), hard to extend, and changed outside version control. Containers also add volume/port/VM overhead on macOS, so the author prefers them only for throwaway services (Redis, PostgreSQL), not hot-reload app code.
- [[Nix flakes|Nix Flakes]] (experimental in Nix 2.4, Nov 2021) express inputs, executables and tests in `flake.nix`; `flake.lock` pins inputs like `package-lock.json`, e.g. [[nixpkgs]] to a specific `rev`, so every developer gets the identical dependency set.
- Anatomy: `inputs` declare sources (e.g. `nixpkgs.url = "github:nixos/nixpkgs/nixos-21.11"`); `outputs` return shells/packages/checks per system; `devShells.<system>.default = pkgs.mkShell { buildInputs = [...]; }` defines what `nix develop` puts on PATH. Every shell must be a [[Nix derivation]]; `mkShell` is the helper.
- The patch version of Python is *not* in `flake.nix` — it comes from the pinned nixpkgs commit recorded in `flake.lock`, which is what makes the environment reproducible.
- `nix flake update` bumps inputs, so dependency changes are version-controlled and rollback-able; [[Direnv]] (`use flake` in `.envrc`, direnv ≥ 2.24) auto-activates the shell on entering the directory.
- Multi-architecture support is explicit: iterate `genAttrs` over a `supportedSystems` list (`aarch64-darwin`, `x86_64-darwin`, `x86_64-linux`); nixpkgs has a platform support-tier RFC, and flake-utils exists to avoid copying this boilerplate.

## Conclusions
[[Reproducible environment|Reproducibility]] is achieved by pinning the exact input state (a locked nixpkgs commit) rather than by writing better install instructions: the whole environment becomes code in version control, which removes the forgetting-dependencies and environment-drift failure modes and makes onboarding deterministic. Against the alternatives, Homebrew/version-managers can't freeze state, and Docker freezes state poorly or ships binary blobs that don't travel across architectures.

## Open questions
- Does relying on a locked nixpkgs commit mean the toolchain (e.g. Python) stops receiving security fixes until a developer runs `nix flake update`, and how should teams balance pinning against patching?
- As Nix Flakes were still experimental at the time of writing, what does requiring `experimental-features` configuration and per-architecture declarations cost in team adoption friction?

## Sources
- https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html
- https://discourse.nixos.org/t/nix-2-4-released/15822
- https://github.com/NixOS/nixpkgs
- https://nixos.org/manual/nix/stable/expressions/derivations.html
- https://nixos.org/manual/nixpkgs/stable/#sec-pkgs-mkShell
- https://github.com/NixOS/rfcs/blob/master/rfcs/0046-platform-support-tiers.md
- https://github.com/numtide/flake-utils
- https://direnv.net/
- https://github.com/Homebrew/homebrew-bundle
- https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json
