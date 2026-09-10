---
title: Container image digest
type: concept
description: A content-derived identifier for a container image that permanently designates exactly one image revision.
tags: [container, oci, immutability, content-addressing]
---

A container image digest is a content-derived identifier for a [[Container image]], derived from a hash of the image's manifest or [[Image index]], that permanently designates exactly one image revision: any change to the image yields a different digest.

## Sources

- [[About container image digests (docs.cloud.google.com)]]
- https://raw.githubusercontent.com/opencontainers/image-spec/main/descriptor.md
- https://raw.githubusercontent.com/opencontainers/distribution-spec/main/spec.md
