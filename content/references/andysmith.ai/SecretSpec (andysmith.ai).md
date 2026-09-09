---
title: SecretSpec (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/4/secretspec/
date: 2026-09-04
tags: [secretspec, secrets-management, nix, cachix, devenv]
---

## Summary
Andy Smith reviews SecretSpec, a Cachix tool he is moving his projects onto. SecretSpec lets a developer *declare* the secrets an application needs in a spec kept with the code, while the actual secret *values* live outside the repo in any of 30+ providers — locally 1Password or the system keychain, in production HashiCorp Vault or Google Secrets. He positions it as replacing both ".env.example" and ".env" in one file. It is integrated into [[devenv]] but not yet into [[NixOS]], so he cannot yet swap it in for sops-nix at deployment time.

## Key ideas
- **Separate declaration from storage**: the spec of what secrets an app needs sits in the repo; the values never do.
- **One file replaces both `.env.example` and `.env`** — the "what is needed" documentation and the actual values no longer drift apart.
- **Expressive schema**: an app's environment-secret requirements can be described flexibly, including alternatives — e.g. either a `DATABASE_URI` or its components passed separately.
- **Provider abstraction**: 30+ backends behind one declared spec; local dev and production can use different providers without changing the spec.
- **[[devenv]] integration** is SecretSpec's current on-ramp for development environments.
- **The deployment gap**: SecretSpec is not yet integrated into [[NixOS]], so for OS/server-level secret deployment sops-nix is still required.

## Conclusions
The argument is that declarative secret *specification* should be separated from secret *storage*, giving one source of truth that spans local development and production. For application-level [[Secrets management]], SecretSpec mostly closes the loop; the remaining frontier is [[Declarative configuration]] of secrets at the NixOS/deployment layer, where sops-nix still holds.

## Open questions
- Will SecretSpec gain NixOS module integration so server secrets can be described the same way app secrets are today, replacing sops-nix for deployment?

## Sources
- https://secretspec.dev
- https://github.com/cachix
- https://github.com/mic92/sops-nix
