---
title: Container image digest
type: concept
description: A content-derived, immutable identifier for a container image, computed as a cryptographic hash of its manifest or image index.
tags: [container, oci, immutability, content-addressing]
---

A container image digest is a content-derived identifier for a [[Container image|container image]]: the result of applying a collision-resistant [[Cryptographic hash function|hash function]] to the bytes of the image's manifest or [[Image index|image index]], written as `algorithm:encoded` — typically `sha256:<64 hex chars>`. Because the value is fixed by the hashed document alone, any change to the manifest produces a different digest, so a digest names exactly one image revision permanently. This lets a client pull `repo/image@sha256:…` from an untrusted [[Container registry|registry]] and verify the retrieved content by recomputing the hash, an immutable alternative to the mutable [[Image tag|tag]].

## Sources

- https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-container-images
- https://raw.githubusercontent.com/opencontainers/image-spec/main/descriptor.md
- https://raw.githubusercontent.com/opencontainers/distribution-spec/main/spec.md
