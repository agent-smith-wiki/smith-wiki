---
title: Software provenance
type: concept
description: Verifiable metadata recording where a software artifact came from and how it was produced — its chain of custody from source to shipped binary.
tags: [supply-chain-security, metadata, attestation]
---

Software provenance is the verifiable metadata recording the origins and production history of a software artifact: where, when, how, and by whom it was built. It traces a shipped binary or package back through its build process and dependencies to the source that produced it, giving consumers evidence about an artifact's chain of custody rather than forcing them to trust the artifact's own description. The term extends the art-historical notion of provenance — the documented chain of ownership that authenticates an object — to code. Software lacking such a record is of unknown origin, leaving tampering, substituted dependencies, and misattributed authorship undetectable, which is why provenance is a linchpin of trust decisions across the [[Software supply chain]].

## Sources

- https://slsa.dev/provenance
- https://slsa.dev/spec/v1.2/build-provenance
- https://www.cisa.gov/resources-tools/resources/secure-demand-guide
