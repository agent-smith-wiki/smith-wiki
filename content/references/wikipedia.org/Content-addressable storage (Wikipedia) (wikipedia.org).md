---
title: Content-addressable storage (Wikipedia) (wikipedia.org)
type: reference
kind: article
author: Wikipedia contributors
url: https://wikipedia.org/wiki/Content-addressable_storage
date: 2006-02-14 (page published; revised since)
tags: [storage, hash, distributed-systems]
---

## Summary

Wikipedia's survey of [[Content-addressable storage]] (CAS): a storage model in which data is retrieved by a key derived from the content itself — a [[Cryptographic hash function|cryptographic hash]] — rather than by a filename or physical location. It explains the mechanics of hashing content into an address, the contrast with location-addressed file systems and URLs, the historical arc from 1970s search-on-disk hardware (ICL's CAFS) through the Sarbanes–Oxley compliance market of the 2000s (FilePool → EMC Centera) to the decline of dedicated CAS hardware after ~2018, and its persistence as a design principle inside modern distributed systems: peer-to-peer sharing, Git, cryptocurrencies, and container/image ecosystems.

## Key ideas

- Definition: storing information so it is retrieved based on its content, not its name or location; the same content always maps to the same address. Distinct from [[Content-addressable memory]] (CAM), a hardware associative-memory technique.
- Mechanism: content is passed through a cryptographic hash function to produce a key / "fingerprint"; the directory maps keys to physical pointers. Storing a duplicate is detected by the already-present key (automatic [[Deduplication]]); on read, the hash is recomputed and verified, giving integrity assurance.
- Contrast with location-addressed systems: file paths and URLs name a place, so identical content at two names/locations is stored twice, and moved or renamed content breaks — the [[Link rot]] problem. ISBN is offered as a pre-digital analogue of a content identifier: many locations, one work.
- Trade-off: CAS suits largely static "fixed content" (archives, [[Write Once Read Many|WORM]] compliance, regulatory records); any edit yields a new key and a new immutable object, so it is inefficient for frequently changed data. Deletion is therefore often restricted or automatic-after-a-legal-period.
- Because hash keys are unreadable, a second, user-facing directory layer carries metadata — filename, ISBN/ISSN, keywords, timestamps, full-text search indexes — so discovery happens there and retrieval by key afterwards.
- Location independence is a core benefit: physical moves across devices or media only update one internal key→location mapping, never the user-visible address.
- In distributed settings content addressability abstracts away changing network topology; hashes enable cheap change detection and bandwidth-efficient propagation among peers, which suits peer-to-peer systems that lack a central authority.
- History: ICL Content Addressable File Store (CAFS) used by British Telecom in the early 1970s; the term CAS coined by Paul Carpentier and Jan van Riel at FilePool in the late 1990s; EMC bought FilePool (2001) and shipped Centera (2002) just as the 2002 Sarbanes–Oxley Act created a compliance-archiving market; SNIA led standardization (XAM interface, mid-2000s); Dell/EMC stopped Centera sales in 2018 as [[cloud storage|elastic cloud storage]] (S3 etc.) displaced dedicated appliances.
- The ideas live on in software: Git ([[Merkle tree|Merkle trees]] for integrity and multi-version efficiency), BitTorrent, Bitcoin and other cryptocurrencies, IPFS, key servers, and the container ecosystem where an image is identified by its digest — cf. the Google Cloud 'about container image digests' note.
- Representative systems listed: Venti (early Plan 9 archival store), Tahoe-LAFS, git-annex, Perkeep, Irmin, casync, Snix (Nix-like), Bazel remote-execution CAS, IBM Tivoli Storage Manager/DR550 (HSM-based, supports WORM tape migration), iTernity iCAS (immutable hash-addressed containers of fixed-content documents).

## Conclusions

- Content addressing decouples retrieval from location and name, buying three properties at once: automatic deduplication, tamper-evident integrity, and location independence — exactly the properties needed for long-term archives and for distributed, authority-free systems.
- Legacy CAS *appliances* largely disappeared (~2018) as ordinary file systems and elastic cloud storage caught up, but the *principle* did not fade: it now underlies version control, peer-to-peer protocols, blockchains, and content-addressed artifact distribution (container digests, Nix-style stores).
- Location-based storage remains the better fit for mutable data; CAS's immutable-object model is the price paid for its guarantees.

## Open questions

- How can content-addressable storage be made practical for frequently edited data, given that every change creates a new immutable object and old versions must be reconciled or reclaimed?
- Given the pigeonhole principle, what protection against hash collisions is warranted when content addresses are relied on for long-term archival or authenticity-critical records, and do systems like Venti or container registries actually provide it?
- Why did the dedicated CAS hardware market collapse around 2018 rather than earlier, and what exactly did general-purpose file systems and object stores gain that made them competitive?

## Sources

- https://flyingzumwalt.gitbooks.io/decentralized-web-primer/content/avenues-for-access/lessons/power-of-content-addressing.html
- https://doc.cat-v.org/plan_9/4th_edition/papers/venti/
- https://www.computerworld.com/article/2570282/fixed-content-storage-grabs-users--attention.html
- https://www.usenix.org/events/usenix03/tech/tolia.html
- https://github.com/bazelbuild/remote-apis
