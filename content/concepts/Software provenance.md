---
title: Software provenance
type: concept
description: Verifiable metadata recording where a software artifact came from and how it was produced — its chain of custody from source to shipped binary.
tags: [supply-chain-security, metadata, attestation]
---

**Software provenance** is verifiable metadata recording where, when, and how a software artifact was produced — a chain of custody linking a shipped binary back through its build process and resolved dependencies to the source it came from, and hence a core record of the [[Software supply chain]]. It lets a consumer verify an artifact's origins against expectations rather than trust the artifact's own description, and it is typically conveyed as a signed [[Attestation]].

## Sources

- https://slsa.dev/provenance
- https://slsa.dev/spec/v1.2/build-provenance
- https://github.com/in-toto/attestation
