---
title: Container registry
type: concept
description: A network service that stores and distributes container images and related OCI artifacts so builders, runtimes, and orchestrators can share them.
tags: [container, oci, distribution]
---

A container registry is a network service that stores and distributes [[Container image]] and related OCI artifacts so that builders, runtimes, and [[Orchestrator]] can share them. It is the standard delivery mechanism of the container ecosystem: builders *push* finished images to a registry, while runtimes and orchestrators *pull* them by name when a workload must run. A registry organizes images into repositories, each referenced by mutable tags or by immutable [[Container image digest]].

## Sources

- https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-registry
- https://www.redhat.com/en/topics/cloud-native-apps/what-is-a-container-registry
- https://github.com/opencontainers/distribution-spec
