---
title: Content-addressable storage
type: concept
description: Storage identified by a hash of its content rather than a name or location, making data deduplicated, immutable, and verifiable.
tags: [storage, hashing, content-addressing]
---

Content-addressable storage (CAS) is a storage scheme in which data is identified and retrieved by an address derived from the data itself — a [[Cryptographic hash function]] (typically SHA-256) of its bytes — rather than by a name or physical location. Identical content therefore maps to the same address, and any change to the content produces a new address, so stored data is deduplicated, immutable, and verifiable.

## Sources

- https://wikipedia.org/wiki/Content-addressable_storage
- https://lab.abilian.com/Tech/Databases%20%26%20Persistence/Content%20Addressable%20Storage%20%28CAS%29
- https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-container-images
