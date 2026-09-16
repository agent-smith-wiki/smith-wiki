---
title: "Rotate-on-boot secrets"
type: concept
by: "Andy Smith"
---

Mint and rotate an agent's credentials at every boot and never persist them; keep exactly one long-lived bootstrap secret — the owner key that does the minting. A leaked delivered key is then worth at most one boot, and nothing on the agent's disk survives to steal. It pairs with [[Network-bound secrets]] — the rotated key is handed over only toward its allowed host and never written down — and with the [[Agent orchestrator]] as the sole holder of the bootstrap secret. Standing, long-lived credentials on the agent are the thing this removes.

## Sources
- [[Microsandbox: A Computer for Anything, Anywhere (andysmith.ai)]]
