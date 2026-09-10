---
title: Open Container Initiative Distribution Specification (github.com)
type: reference
kind: paper
author: Open Container Initiative (OCI)
url: https://github.com/opencontainers/distribution-spec/blob/main/spec.md
date: 2026 (main branch, v1.1+)
tags: [oci, container-registry, distribution, specification, content-addressable]
---

## Summary
The OCI Distribution Spec defines the HTTP API protocol by which clients pull, push, discover and manage content in an [[Container registry|OCI registry]]. It is content-type agnostic in principle, but its concrete vocabulary is drawn from the [[OCI image format|OCI Image Spec]]: registries store [[Blob|blobs]] addressed by [[Content digest|digest]] and [[Manifest|manifests]] (JSON documents referencing other manifests and blobs via [[Descriptor|descriptors]]). The spec is a normative document: requirements are stated with RFC 2119 keywords, and conformance is per-category rather than all-or-nothing.

## Key ideas
- **Everything is either a blob or a manifest.** A [[Blob|blob]] is binary content addressable by [[Content digest|digest]]; a [[Manifest]] is a JSON document referencing blobs/manifests through [[Descriptor|descriptors]]. An [[OCI image index]] is a manifest listing other manifests (multi-platform).
- **Registry/repository/client model.** A registry exposes APIs scoped to a [[Repository namespace|repository]] (`<name>`); a [[Tag (container image)|tag]] is a mutable, human-readable pointer to a manifest digest, and one digest may carry many tags.
- **Endpoints under `/v2/`.** `GET /v2/` determines spec support (200 OK). Pull: `GET /v2/<name>/manifests/<tag-or-digest>` and `GET /v2/<name>/blobs/<digest>`, both returning `Docker-Content-Digest`. Push manifests via `PUT /v2/<name>/manifests/<tag-or-digest>`; push blobs via session (`POST` upload URL → `PATCH` chunks → `PUT ?digest=`) or monolithic single `POST`.
- **Pull is the mandatory floor.** All conforming registries MUST implement the Pull category; Push, Content Discovery and Content Management are SHOULD, but claiming a category means implementing all of its APIs.
- **Verification is client-side.** The spec's own first use case is [[Content verification|content verification]] against an *untrusted* registry: the engine downloads a manifest then verifies each layer's [[Content digest|digest]] against the manifest. The registry is trusted only to serve bytes that hash correctly.
- **Resumability and de-duplication.** [[Range requests]] and chunked `PATCH` uploads make transfers resumable; because [[Content-addressable storage|content addressing]] makes identical layers identical digests, a registry can recognise an already-known blob and accept it without re-transfer (`?mount=<digest>&from=<other_name>` for cross-repository mounts).
- **Referrers: attaching artifacts to images.** A manifest may carry a `subject` field associating it with another manifest — the mechanism behind [[OCI artifact|OCI artifacts]] such as signatures and SBOMs. The [[Referrers API]] lists manifests whose `subject` points at a digest, filterable by `artifactType`.
- **Backwards compatibility is a client obligation.** Clients MUST support older/partial registries. When the [[Referrers API]] returns 404, clients fall back to the [[Referrers tag schema|referrers tag schema]] — a synthetic tag (`<truncated-algorithm>-<truncated-encoded>`) whose [[OCI image index|image index]] lists the referrers.
- **Registry proxying.** A registry MAY proxy or cache another registry's pulls; the `ns` query parameter carries the client's source host, and credentials for the upstream SHOULD NOT be forwarded to the proxy.

## Conclusions
The spec's real argument is that image distribution should be a **content-addressed, content-type-agnostic HTTP protocol** in which integrity is guaranteed by digests rather than by trusting the transport or the registry. Mutable [[Tag (container image)|tags]] are a convenience layer over an immutable, digest-addressed substrate. The awkward parts — referrers fallback, optional categories, legacy Docker headers — are acknowledged as migration debt, and the design consistently pushes compatibility burden onto clients.

## Open questions
- What must a client do when the digest returned in the `Docker-Content-Digest` header differs from the requested digest because a different hashing algorithm was used?
- Is conditional HTTP push (ETag) enough to prevent lost updates when several clients maintain the referrers tag schema concurrently?
- How should a proxy registry scope and authenticate proxied requests when the source host in a repository name differs from the `Host` header?
- Since tags are mutable pointers to digests, what convention prevents a tag reference from silently changing the artifact a deployment runs?

## Sources
- https://github.com/opencontainers/image-spec
- https://github.com/docker/distribution/blob/5cb406d511b7b9163bff9b6439072e4892e5ae3b/docs/spec/api.md
- https://conformance.opencontainers.org/
- https://www.rfc-editor.org/rfc/rfc2119
- https://www.rfc-editor.org/rfc/rfc9110
- https://www.rfc-editor.org/rfc/rfc7231
- https://www.backblaze.com/blog/design-thinking-b2-apis-the-hidden-costs-of-s3-compatibility/
