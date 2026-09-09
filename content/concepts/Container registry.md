---
title: Container registry
type: concept
description: A networked service that stores and distributes container images, letting clients push and pull them over HTTP.
tags: [container, oci, distribution]
---

A container registry is a networked HTTP service that stores and distributes [[Container image]]s: clients push images into it and pull them back out for use elsewhere. A registry hosts one or more repositories, each a collection of related images for a given project or application, and keeps each image's layers, manifests, and config as [[Content-addressable storage]] blobs retrievable by digest. Within a repository, images are referenced by a mutable [[Image tag]] or directly by an immutable [[Container image digest]].

## Sources

- https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-registry
- [[OCI Distribution Specification (github.com)]]
