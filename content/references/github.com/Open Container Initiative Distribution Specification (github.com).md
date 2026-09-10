---
title: Open Container Initiative Distribution Specification (github.com)
type: reference
kind: spec
author: Open Container Initiative (OCI)
url: https://github.com/opencontainers/distribution-spec/blob/main/spec.md
date: 2026
tags: [containers, registries, oci, specification, content-addressable-storage]
---

## Summary
The OCI Distribution Spec defines an HTTP API protocol for standardizing how content is distributed — pushed to and pulled from — a [[Container registry|registry]]. It is deliberately content-type agnostic, but its dominant use is [[Container image|container images]], whose formats are defined separately by the OCI Image Spec. The protocol descends directly from the Docker Registry HTTP API V2, so it inherits legacy Docker headers and error codes that clients may encounter but SHOULD NOT depend on. Requirements are phrased in RFC 2119 terms (MUST/SHOULD/MAY), and conformance is grouped into four capability categories.

## Key ideas
- **Four API categories.** *Pull*, *Push*, *Content Discovery*, and *Content Management*. A conforming registry MUST implement at minimum all of Pull; it SHOULD also support the others, and claiming a category means implementing every API in it.
- **Pull** centers on two artifacts: the manifest and the blobs. `GET /v2/<name>/manifests/<tag-or-digest>` and `GET /v2/<name>/blobs/<digest>` return `200 OK` with a `Docker-Content-Digest` header. Clients SHOULD verify the returned body matches the requested [[Container image digest|digest]], which is the basis of [[Content verification|content verification]] of an untrusted registry. `HEAD` on the same URLs checks existence and MUST return `Content-Length`; [[Range requests|Range]] is used for resumable pulls.
- **Push** runs in reverse order: blobs first, manifest last. Blobs upload either **monolithically** (POST then PUT to a returned `<blob-push-location>`, or a single POST) or **in chunks** (POST for a session, `PATCH` per chunk with `Content-Range`, `PUT` to close). Registries MUST support concurrent uploads.
- **Deduplication is native to [[Content-addressable storage|content addressing]].** A registry can indicate an upload is already known, and the cross-repository mount endpoint (`?mount=<digest>&from=<other_name>`) reuses an existing blob without transferring bytes. Identical content hashes to one digest, so the registry may store a single copy.
- **Content discovery** covers tag listing (`/v2/<name>/tags/list`, paginated via `n` and `last`) and the [[Referrers API|referrers API]] (`/v2/<name>/referrers/<digest>`), which lists manifests linked to a digest by a `subject` field — the mechanism that attaches signatures and SBOMs to an image. The response is an image index and can be filtered by `artifactType`.
- **Referrers fallback / backwards compatibility.** Where the referrers API is unavailable (404), clients MUST fall back to the [[Referrers tag schema|referrers tag schema]]: a tag derived by truncating the subject digest's algorithm (32 chars) and encoded value (64 chars), joined by `-`. Maintaining that tag is the client's responsibility, and concurrent updates risk race conditions.
- **Content management** is optional: registries MAY disable deletion. Deleting a tag or manifest returns `202` / `404`, with `400` or `405` when disabled.
- **Errors are standardized** as JSON `{"errors":[{"code","message","detail"}]}` with a fixed code vocabulary (`BLOB_UNKNOWN`, `DIGEST_INVALID`, `MANIFEST_BLOB_UNKNOWN`, `UNAUTHORIZED`, `TOOMANYREQUESTS`, …). Informational `Warning` headers (warn-code `299`) MUST NOT trigger automated client action.
- **Support detection** is `GET /v2/`: `200 OK` means the registry implements the spec.
- **Registry proxying** is explicitly anticipated: a proxy may front another registry or implement a [[Pull-through cache|pull-through cache]], using an optional `ns` query parameter to name the client's source host.

## Conclusions
The spec's real argument is that distribution should be a **thin, content-addressed, content-type-agnostic protocol layered over plain HTTP**: identity comes from digests, not from registry trust or from human-readable tags. Everything else follows — pull verifies digests, push dedupes by digest, discovery enumerates by digest, and signatures/SBOMs attach via a `subject` relation rather than a special API. It also treats the ecosystem as heterogeneous and versioned: clients must implement fallbacks for older registries, and new APIs must be introduced through explicit upgrade procedures.

## Open questions
- How can a client safely avoid race conditions and data loss when multiple clients update the referrers tag schema simultaneously on a registry that lacks the referrers API?
- If a client verifies a layer digest but the manifest itself was fetched from an untrusted registry, what prevents a valid-but-malicious manifest from being served?
- Why does the spec allow a registry to accept a manifest referencing blobs that do not yet exist, and what are the failure modes of that lazy validation?
- How should authorization credentials for an upstream registry be delegated to a registry proxy without leaking them?
- What are the practical trade-offs between monolithic and chunked blob upload for large images on unreliable networks?

## Sources
- https://github.com/opencontainers/image-spec
- https://github.com/docker/distribution/blob/5cb406d511b7b9163bff9b6439072e4892e5ae3b/docs/spec/api.md
- https://www.rfc-editor.org/rfc/rfc2119
- https://conformance.opencontainers.org/
