---
title: Container image
type: concept
description: A static, immutable, content-addressed bundle of application code, dependencies, and runtime configuration.
tags: [container, oci, immutability, reproducibility]
---

A container image is a static, immutable bundle of application code, dependencies, and runtime configuration, distributed through a [[Container registry]] as [[Content-addressable storage|content-addressed]] filesystem layers. Once built, an image cannot be modified in place: any change yields a new image with a new digest.

## Sources

- https://www.opensourcerers.org/2020/11/16/container-images-multi-architecture-manifests-ids-digests-whats-behind
- [[About container image digests (docs.cloud.google.com)]]
- https://www.cloudbees.com/blog/container-image-immutability-power-metadata
