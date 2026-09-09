---
title: Reproducible Development Environments with Nix Flakes (aige.eu)
type: reference
kind: blog
author: aige.eu (anonymous)
url: https://aige.eu/posts/reproducible-development-environments-with-nix-flakes
date: 2022-05-12
tags: [nix, reproducibility, developer-experience, developer-tooling]
---

## Summary
A practical, DX-motivated argument for capturing a software project's whole [[Reproducible environment|development environment]] in [[Nix flakes|Nix Flakes]] instead of READMEs/Makefiles, Homebrew, language version managers, or Docker. Using a worked Python 3.9 shell as its demo, it explains how `flake.nix` + `flake.lock` pin the nixpkgs dependency tree to an exact commit so every developer gets the same toolchain, shows multi-architecture [[Dev shell|dev shells]] via a `forAllSystems`/`flake-utils` pattern, and closes with `direnv` auto-activation. MacOS-focused, Linux principles.

## Key ideas
- The problem is *capturing* a working environment: docs drift when a developer adds a dependency and forgets the README/Makefile, and infrequently-changed projects break silently (e.g. a macOS upgrade swapping the Python version) because nobody keeps muscle memory.
- Homebrew fails reproducibility because the state of its package tree cannot be pinned — `brew install`/`brew bundle` today differs from tomorrow and on a fresh machine (Brewfile does not fix this).
- Version managers (pyenv, nvm) build toolchains against system libraries such as OpenSSL; a `brew upgrade` that removes the old library silently breaks the linked toolchain and forces opaque recompiles.
- Docker only shifts the problem: a `Dockerfile` with a pinned base image is still nondeterministic (tags move), while published binary images break on mixed x86/ARM teams and push environment changes outside version control; volume/port mapping adds overhead, worst on macOS where the daemon runs in a VM. The author keeps containers for throwaway deps (Redis, Postgres), not hot-reload dev apps.
- Flakes (experimental in Nix 2.4, Nov 2021) restructure the environment as `inputs` (declared dependency sources, e.g. the ~80k-package nixpkgs repo) and `outputs` (`devShells`, packages, apps, checks). `flake.lock` is then the [[Lockfile|lockfile]] that pins the exact input commit like `package-lock.json` — the reproducibility anchor; even the demo's Python *patch* version is fixed by the locked nixpkgs rev, not by `flake.nix`.
- `devShells.<system>.default` is a Nix derivation created with `mkShell`; `buildInputs`/`nativeBuildInputs` name what `nix develop` exposes; multiple named [[Dev shell|dev shells]] are possible per system.
- `nix flake update` bumps inputs and, since `flake.nix`/`flake.lock` live in version control, dependency changes are reviewable and rollbackable end-to-end. Flake *outputs* can further capture executables and CI-style checks like the `scripts` field of package.json.
- Flakes force you to declare every supported architecture; nixpkgs tiers + `genAttrs`/`supportedSystems` (or flake-utils) generalise one shell across Intel/Apple-silicon Macs and x86 Linux; `nix flake show` lists them. `direnv` ≥2.24 (`use flake`) auto-activates the shell on `cd`.

## Conclusions
Reproducible dev environments are a team/DX concern, not just a build concern. The reliable shape is declarative: pin the entire toolchain graph (flake.lock as the analogue of the JS/Python ecosystem's lockfiles) and version it in the repo, so onboarding and migrations stop depending on docs, muscle memory, or whatever a package tree happens to contain on a given day. Each rejected alternative fails in a characteristic way: unpinnable package state (Homebrew), toolchains linked to mutable system libs (pyenv/nvm), floating base images and binary-arch mismatch (Docker).

## Open questions
- Does a shared `flake.lock` reproduce an environment across operating systems, or only within one platform, given a nixpkgs commit resolves differently per system (the post demos only `aarch64-darwin`)?
- Where is the boundary between what Flakes should own (system toolchains via `mkShell`) and what the ecosystem package managers (requirements.txt, Poetry, npm) should keep owning — and does that division actually survive team practice?
- What parts of a dev environment does `nix develop` still not capture (per-developer caches, environment variables, running services), leaving reproducibility incomplete?

## Sources
- https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html
- https://nixos.org/manual/nixpkgs/stable/#sec-pkgs-mkShell
- https://github.com/NixOS/nixpkgs
- https://github.com/Homebrew/homebrew-bundle
- https://github.com/numtide/flake-utils
- https://direnv.net/
- https://python-poetry.org/
