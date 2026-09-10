---
title: OCI Distribution Specification (github.com)
type: reference
kind: paper
author: Open Container Initiative
url: [[Open Container Initiative Distribution Specification (github.com)]]
date: 
tags: [oci, registries, specification]
---

## Summary
The OCI Distribution Specification defines the HTTP API protocol by which clients and [[Container registry|registries]] distribute content. It is deliberately agnostic of content types (OCI images are just the most prominent case, defined in the OCI Image Spec). The spec inherits its shape from the Docker Registry HTTP API V2 protocol, whose Docker-specific headers and error codes it demotes to OPTIONAL legacy support. Registries store two kinds of objects: **blobs** — opaque binary content addressed by [[Container image digest|digests]] computed from a [[Cryptographic hash function|cryptographic hash]] of the bytes — and **manifests** — JSON documents that reference blobs and other manifests via descriptors, and that tags and `subject` links point at. API requirements are grouped into four categories — Pull (the mandatory minimum for any conforming registry), Push, Content Discovery, and Content Management — and a registry claiming a category must implement every API in it.

## Key ideas
- **Pull is the only mandatory category**: every conforming registry MUST implement all Pull APIs (fetch manifest/blob, HEAD existence checks). Push, Content Discovery, and Content Management are SHOULD-level, and deletion is explicitly optional per-registry.
- **Content is [[Content-addressable storage|content-addressable]]**: blobs live at `/v2/<name>/blobs/<digest>` and are verified by recomputing the digest of downloaded bytes against the requested digest; the `Docker-Content-Digest` response header carries the canonical digest. The *content verification* use case has a client pull an (untrusted) registry and verify each layer against the manifest.
- **A manifest is pulled by tag or digest** at `/v2/<name>/manifests/<tag-or-digest>`; tags are mutable human-readable pointers (at most 128 chars, bounded regex) while digests are immutable, which is why a manifest digest may have zero, one, or many tags. Successful responses return the canonical digest in `Docker-Content-Digest`.
- **Push is the mirror image of pull**: blobs are uploaded first, the manifest last. Blob upload supports **monolithic** upload (POST-then-PUT session, or a single POST) and **chunked/resumable** upload (POST opens a session, PATCH appends byte ranges with `Content-Range`, PUT closes it). Blob **mounting** (`?mount=<digest>&from=<other_name>`) lets a repository adopt a blob already stored in another repository, transferring no bytes.
- **Push de-duplicates by digest**: identical content from concurrent builders results in a single stored copy because equal bytes yield equal digests.
- **`subject` + referrers attach artifacts to images**: a manifest may carry a `subject` field pointing at another manifest, letting signatures, SBOMs, and other artifacts (an 'object', once called 'artifact') be associated with an image. Registries MUST accept a manifest whose `subject` target does not yet exist (either can be pushed first); a `GET /v2/<name>/referrers/<digest>` **referrers API** returns the list as an image index, optionally filtered by `artifactType` (with an `OCI-Filters-Applied` header).
- **Backwards compatibility is a client obligation**: clients MUST support registries running partial/older spec versions. When the referrers API 404s, clients MUST fall back to the **referrers tag schema** — a deterministic tag derived from the subject digest (algorithm truncated to 32 chars, encoded hash truncated to 64) that holds an image index of referrers. Maintaining that tag is the client's job, and concurrent updates race.
- **Upgrade path**: registries enabling the referrers API must fold pre-existing referrers-tag indexes into API responses and include all newly pushed `subject` manifests.
- **Proxying**: a registry MAY proxy/cache another registry; the `ns` query parameter (echoed in `OCI-Namespace`) resolves the upstream host because the `Host` header carries the proxy, and upstream credentials MUST NOT be forwarded to a proxy.
- **Uniform error envelope**: 4xx bodies use a JSON `{errors:[{code,message,detail}]}` shape with a fixed code set (`BLOB_UNKNOWN`, `MANIFEST_BLOB_UNKNOWN`, `DIGEST_INVALID`, `NAME_INVALID`, `UNSUPPORTED`, `TOOMANYREQUESTS`, etc.). Informational `Warning` headers are restricted to warn-code 299 and must never trigger automated client action.
- **Conformance is self-certified**: registry providers run conformance tests and submit results to opencontainers/oci-conformance; accepted results are published at conformance.opencontainers.org.

## Conclusions
The spec turns a [[Container registry]] into a standardized, content-type-agnostic service whose core invariant is that stored content is verified by digest rather than trusted by name. Blobs, manifests, and tags separate immutable addressed content from mutable human pointers, which is what makes verification, de-duplication, resumable transfer, and cross-repository blob mounting possible over plain HTTP. The `subject`/referrers mechanism extends a pure image registry into a general object graph where security-relevant artifacts (signatures, SBOMs) can be discovered alongside the image they qualify — with the referrers tag schema as an explicitly racy stopgap until registries enable the referrers API. Client-side fallbacks are mandated so the ecosystem tolerates mixed old/new registries.

## Open questions
- How should clients coordinate concurrent updates to a shared referrers tag when the registry does not implement the referrers API and offers no conditional-request support?
- The referrers tag schema truncates hash digests to fit tag-length rules; what happens when two distinct digests truncate to the same referrers tag?
- Registries MAY reject manifests whose descriptors reference not-yet-uploaded blobs but MUST accept `subject` references to missing manifests; do these discretionary rules create interoperability hazards for artifact workflows?
- Authentication and authorization are explicitly out of scope for this spec; where should a standard registry auth model live, and how do token scopes map onto repository/`subject` operations?

## Sources

- https://github.com/opencontainers/image-spec
- https://github.com/docker/distribution/blob/5cb406d511b7b9163bff9b6439072e4892e5ae3b/docs/spec/api.md
- https://github.com/google/go-containerregistry/tree/d7f8d06c87ed209507dd5f2d723267fe35b38a9f/pkg/v1/remote
