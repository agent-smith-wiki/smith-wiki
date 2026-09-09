---
title: Cryptographic hash function
type: concept
description: A deterministic, one-way algorithm mapping arbitrary-length input to a fixed-size digest; foundational primitive for content-derived addressing and integrity.
tags: [cryptography, hashing]
---

A **cryptographic hash function** is a deterministic algorithm that maps an input of arbitrary length to a fixed-size output — the *digest* or *hash value* — that is fast to compute yet practically impossible to invert (a one-way function). An approved cryptographic hash is expected to satisfy three security properties: preimage resistance (an input cannot be recovered from its digest), second-preimage resistance (given one input, a different input with the same digest cannot be found), and [[Collision resistance|collision resistance]] (no two distinct inputs with the same digest can be found at all).

## Sources

- https://csrc.nist.gov/projects/hash-functions
- https://en.wikipedia.org/wiki/Cryptographic_hash_function
- https://csrc.nist.gov/news/2022/nist-transitioning-away-from-sha-1-for-all-apps
- https://en.wikipedia.org/wiki/Content-addressable_storage
