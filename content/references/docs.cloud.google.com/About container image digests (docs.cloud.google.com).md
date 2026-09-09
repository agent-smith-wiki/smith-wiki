---
title: About container image digests (docs.cloud.google.com)
type: reference
kind: article
author: Google Cloud
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-container-images
---

## Summary
A Google Kubernetes Engine reference page on container image digests: what they are, how to find them with registry/build tooling, and how to enforce their use in Kubernetes deployments. It frames the digest as the immutable, content-addressed identifier of an image and contrasts it with mutable [[Image tag|image tags]], then walks through the OCI structure of an image (manifest, config, layers, optional image index) to show why content hashes can serve as addresses for every component.

## Key ideas
- A [[Container image digest|container image digest]] uniquely and immutably identifies an image; it is a collision-resistant cryptographic hash (typically SHA-256) of the image index or image-manifest JSON document.
- [[Image tag|Image tags]] are mutable references: republishing an image under an existing tag silently repoints it. Consequences: a Deployment/StatefulSet/DaemonSet/ReplicaSet/Job referencing `v1.0.1` can spin up Pods running either the old or new image with no spec change; results of scan/analysis tools only hold for the exact image scanned; GKE Binary Authorization disallows tag-based deployment because the exact image at Pod creation cannot be determined.
- OCI image structure: an image manifest (JSON referencing the config object and each file-system layer via its `digest`), a configuration object (CPU architecture, entrypoint, exposed ports, env), file-system layers distributed as tar files (usually gzip), and an optional image index (manifest list) pointing at platform-specific manifests (e.g. amd64 vs arm64).
- Because manifests, indexes, configs, and layers all carry digest attributes, every object is addressable by its content hash: this is [[Content-addressable storage]], and digests let you retrieve objects directly (registry GET on a digest) without trusting a mutable name.
- Registries (Artifact Registry, Container Registry) commonly echo the digest in the `Docker-Content-Digest` header on HEAD requests, though the OCI distribution spec does not mandate it.
- Digest discovery is tool-agnostic: gcloud artifacts/container/builds describe, pack with --quiet, docker manifest inspect and docker inspect RepoDigests, crane/gcrane digest, or plain curl + shasum; filtering an image index by platform mimics how runtimes (e.g. containerd) select a manifest.
- Enforcing digest use: Policy Controller (built from OPA Gatekeeper) plus Gatekeeper provide a validating admission webhook; constraint templates in Rego validate that image references match the OCI digest format, applied via constraints scoped by kind/namespace.

## Conclusions
Deploy by digest, not by tag: pinning the immutable content hash removes the ambiguity of mutable references so that what you scanned, signed, or admitted is what actually runs. Tags remain a human convenience layered on top of an artifact graph whose authoritative identity and addressing come from cryptographic digests under [[Content-addressable storage]]. The [[Container registry|registry]] is the service that maps tag-or-digest references to those content-addressed blobs, backed by a [[Cryptographic hash function|cryptographic hash function]] for identity.

## Open questions
- If tags are purely advisory and silently movable, what non-digest mechanism protects against a same-tag republish being trusted where only admission-time string checks are applied?
- Since the Docker-Content-Digest header is not mandated by the OCI distribution spec, what can an operator rely on to confirm a registry serves content under a digest rather than under a mutable alias?

## Sources
https://github.com/opencontainers/image-spec/blob/main/descriptor.md#digests
https://github.com/opencontainers/image-spec/blob/main/manifest.md
https://github.com/opencontainers/image-spec/blob/main/image-index.md
[[OCI Distribution Specification (github.com)]]
https://docs.docker.com/registry/spec/manifest-v2-2/#manifest-list
[[Content-addressable storage (Wikipedia) (wikipedia.org)]]
https://wikipedia.org/wiki/Collision_resistance
https://github.com/open-policy-agent/gatekeeper-library/tree/master/library/general/imagedigests
https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/
