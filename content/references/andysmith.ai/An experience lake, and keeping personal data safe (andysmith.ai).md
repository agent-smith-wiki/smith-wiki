---
title: An experience lake, and keeping personal data safe (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Aug/19/an-experience-lake-and-keeping-personal-data-safe
date: 2026-08-19
tags: [privacy, data-ownership, encryption, knowledge-graph, ai-training]
---

## Summary
Andy Smith proposes replacing the metaphor of a data lake with an [[Experience lake]]: a graph store of the context of a whole life — every event and every reaction, accumulated over years. The point of the lake is that it can be opened piece-by-piece rather than as a whole: a company training models on how people react to situations is shown only the slice the owner chooses, and between two people (e.g. two anglers who have never discussed fishing) opening a slice of shared experience is how trust and reputation are built. The precondition for collecting anything at all is a leak-proof guarantee — a plain-text file of a whole life is one catastrophic theft, from any host including GitHub — so data must be encrypted and decrypted only on demand with a hardware key, an assurance baked into the architecture. Storage is imagined as a separate, self-running system wired to sources like Apple Health, encrypted, backed up, maybe on a blockchain: owned, safe, and independent of both the owner and their agents.

## Key ideas
- The archive is closer to an 'experience lake' than a 'data lake' — it is everything built up over years, stored as a [[Knowledge graph|graph]] of events and reactions.
- Value comes from [[Selective disclosure]]: an owner opens just one part of their experience to a counterparty, and a model trainer's models 'only learn from what you chose to show'.
- Between people, selective sharing is the mechanism by which trust and reputation form — opening a relevant slice tells another person what you have in common.
- Whole-life capture changes the threat model: 'Steal it and you've stolen a whole life in one go', and it can leak from anywhere (GitHub included), so who leaks matters less than that it is your entire life.
- Safety has to be architectural: data encrypted at rest, decrypted only on request/on demand with a hardware key — 'if you bake it into the architecture, people will trust it a lot more'.
- The [[Data ownership|owned]] store is a separate, self-running system: imports wired from Apple Health and other sources, encrypted, backed up, possibly on a blockchain, running independent of the owner and of their agents, requiring no attention.

## Conclusions
The post argues that a whole-life archive is only worth building once two properties are in place: it can be opened selectively (piece by piece, for model training or for people), and it cannot leak as a blob — hence [[Encryption at rest]] with on-demand hardware-keyed decryption and an agent-independent storage subsystem. Trust in the system is a design consequence, not a policy add-on. The piece is a vision/architecture sketch rather than an implementation, and implicitly continues Smith's series on owning one's own data and collecting reactions/context (see A context/reaction tree as a ZK proof of expertise, Is there any demand for owning your own data?).

## Open questions
- How would an owner recover their experience lake if the hardware key is lost or destroyed?
- Can an owner ever prove to a counterparty that only the disclosed slice of the lake was used by a model trainer?
- What does a blockchain backend add when the actual trust anchor is a hardware key the owner alone holds?
- How should the graph be structured so that slices map to topics or experiences rather than to sources or timestamps?
