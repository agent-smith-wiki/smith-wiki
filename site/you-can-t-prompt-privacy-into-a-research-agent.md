---
title: "You can't prompt privacy into a research agent"
type: claim
tags: ["privacy", "ai-agents", "retrieval-augmented-generation"]
by: "ServiceNow"
status: "established"
---

Position, grounded in [[MosaicLeaks: Can your research agent keep a secret? (huggingface.co)|MosaicLeaks: Can your research agent keep a secret?]]: privacy for a research agent is not something you can instruct away. Prompting a deep-research agent not to leak private information produced only small, inconsistent gains and often hurt task success (Qwen3-4B: leakage 34.0% to 25.5% while strict chain success fell 48.7% to 44.5%); the main effect was fewer web queries, not safer ones. Training only for task success made leakage worse (34.0% to 51.7%), because a more informative query retrieves better and leaks more. Only a learned privacy reward (PA-DR) cut leakage sharply (to 9.9%) — i.e. privacy had to be trained in.

This sharpens and extends [[An agent cannot be trusted to filter private notes]]: that claim rejects the agent as a *filter*; this one rejects the agent's *instructions* as a safeguard too, and shows the counterintuitive result that making the agent better at the task tends to make it leak more.

## Sources
- [[MosaicLeaks: Can your research agent keep a secret? (huggingface.co)|MosaicLeaks: Can your research agent keep a secret?]]
- [[An auto-researcher built on my blog (andysmith.ai)|An auto-researcher built on my blog]]
