---
title: Bitnami/sealed-secrets (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/2/bitnami-sealed-secrets/
date: 2026-09-02
---

## Summary
A short, high-signal note on Andy Smith's secrets pipeline. He uses [[sealed-secrets|Bitnami sealed-secrets]] to push [[sops]]-encrypted secrets into [[Kubernetes]], deliberately so that a *single* sops flow serves both his [[NixOS]] host secrets and his cluster secrets — everything encrypted with [[age]]. The real point of the post is a migration signal: he is now evaluating [[secretspec|secretspec.dev]] as a replacement because it also supports sops as one of its backends, so the switch should be low-friction.

## Key ideas
- Design goal is a **uniform [[secrets management]] flow** across environments: one sops pipeline (encrypt-with-age) covers NixOS machine secrets and k8s secrets alike, instead of per-platform secret tooling.
- [[sealed-secrets]] is the current deploy adapter: it turns a sops/age-encrypted file into a Kubernetes Secret in-cluster.
- Tool choice is downstream of the pipeline principle — [[secretspec]] is interesting only because sops is one of its backends, meaning the secret format survives the migration and only the deploy adapter changes.

## Conclusions
- Prefer one consistent secret-encryption workflow (sops + age) across every environment over best-of-breed per platform.
- sealed-secrets is being treated as replaceable; secretspec.dev is the leading candidate because its sops backend keeps migration cheap.
- The actual secret material stays portable; the switching cost lives in the Kubernetes deploy adapter, not the encrypted format.

## Open questions
- What concrete limitation of sealed-secrets is pushing Andy toward secretspec.dev?
- What does his end-to-end sops + age flow spanning both NixOS and Kubernetes look like in practice?
- Does secretspec.dev replace only the Kubernetes deploy side, or also the NixOS-side secret handling?

## Sources
- https://github.com/bitnami/sealed-secrets
- https://secretspec.dev
