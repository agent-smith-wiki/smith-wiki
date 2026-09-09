---
title: About container image digests (docs.cloud.google.com)
type: reference
kind: article
author: Google Cloud
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-container-images
tags: [containers, kubernetes, oci, reproducibility, registry]
---

## Summary
GKE reference page explaining [[Container image digest|container image digests]] and why Kubernetes deployments should reference [[Container image|container images]] by digest rather than by mutable [[Image tag|tags]]. It walks through the OCI structure of an image — [[Image manifest|manifest]], configuration object, ordered [[Image layer|filesystem layers]], optional [[Image index|image index]] — and shows how digests make every component retrievable through [[Content-addressable storage]]. The second half catalogs tooling for finding digests (gcloud, Docker, crane/gcrane, Cloud Native Buildpacks) and enforcing digest-only deployment with OPA Gatekeeper / Policy Controller.

## Key ideas
- A digest is the result of a [[Cryptographic hash function|collision-resistant hash]] (default SHA-256) over the image index or image manifest JSON — it *uniquely and immutably* identifies an image. Reference form: `registry/repo@sha256:...`.
- [[Image tag|Tags]] are mutable pointers: publishing a new image under an existing tag silently redirects it. Consequences in Kubernetes: Pods created from an unchanged Deployment can land on the old *or* new image; image-scan results are valid only for the exact image scanned; Binary Authorization forbids tag-based deploys because the exact image is unknowable at Pod creation time.
- OCI structure (per the image manifest): a config object (architecture, entrypoint, ports, env) plus an ordered array of file-system layers shipped as gzip-compressed tar files, each referenced by its own digest; an optional image index ("manifest list") groups per-platform manifests so one tag/index can serve amd64, arm64, s390x, etc.
- Digests + [[Content-addressable storage]]: manifests, indexes, config objects and layers are all fetched directly by digest from a [[Container registry|registry]]; local Docker images carry a digest only after a pull/push from a registry.
- Enforcement: OPA Gatekeeper / Policy Controller (a Kubernetes validating admission webhook plus constraint-template/constraint CRDs) runs a Rego policy whose regex is derived from the OCI digest format, rejecting any image reference without a digest.

## Conclusions
Deploy by digest so what runs in the cluster is exactly what was built and scanned; treat tags as ergonomic, human-readable labels — not identity. Digest-based referencing plus content-addressable retrieval in registries is the mechanism that makes pinning safe, and it is the practical substrate for verifiable (supply-chain / reproducible) container deployments.

## Open questions
- Since tags are just mutable conveniences that any push with write access can silently re-point, what keeps a tag→digest mapping trustworthy in shared registries?
- The configuration object embeds build timestamps and history (visible in the example JSON), so rebuilding identical content still yields a different config object and digest — do reproducible builds therefore ever converge on a single digest for the same inputs?
- The `Docker-Content-Digest` response header is not mandated by the OCI distribution spec, so which registries omit it and what is the portable way to discover a digest without pulling?

## Sources
- https://github.com/opencontainers/image-spec/blob/main/descriptor.md#digests
- https://github.com/opencontainers/image-spec/blob/main/manifest.md#oci-image-manifest-specification
- https://github.com/opencontainers/image-spec/blob/main/image-index.md#oci-image-index-specification
- https://github.com/opencontainers/image-spec/blob/main/config.md#properties
- https://github.com/opencontainers/distribution-spec/blob/main/spec.md
- [[Content-addressable storage (Wikipedia) (wikipedia.org)]]
- https://docs.docker.com/registry/spec/manifest-v2-2/#manifest-list
- https://open-policy-agent.github.io/gatekeeper/website/
- https://github.com/open-policy-agent/gatekeeper-library/tree/master/library/general/imagedigests
- https://github.com/containerd/containerd/blob/main/docs/content-flow.md#image-format
