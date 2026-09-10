---
title: Image tag
type: concept
description: A mutable, human-readable pointer that resolves to exactly one container image manifest within a repository.
tags: [container, oci, distribution, mutability]
---

An image tag is a human-readable pointer that a [[Container registry]] resolves to exactly one [[Container image]] manifest within a single repository, letting an image be pulled by a memorable name such as `repo:latest` instead of by a content hash. Tags are mutable: a manifest may carry zero, one, or many tags, and pushing a manifest under an existing tag repoints that name to the new content.

## Sources

- [[Open Container Initiative Distribution Specification (github.com)]]
- https://docs.docker.com/get-started/docker-concepts/building-images/build-tag-and-publish-an-image/
- https://docs.docker.com/reference/cli/docker/image/tag/
