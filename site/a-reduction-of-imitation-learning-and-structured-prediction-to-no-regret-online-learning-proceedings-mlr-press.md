---
title: "A reduction of imitation learning and structured prediction to no-regret online learning (proceedings.mlr.press)"
type: source
url: "https://proceedings.mlr.press/v15/ross11a.html"
author: "Stéphane Ross, Geoffrey Gordon, and Drew Bagnell"
by: "Stéphane Ross, Geoffrey Gordon, and Drew Bagnell"
tags: ["imitation-learning", "distribution-shift", "machine-learning"]
---

Ross, Gordon, and Bagnell show why ordinary supervised imitation can fail in sequential deployment: a learner's mistakes change its future state distribution. A classifier with error $\epsilon$ on expert-visited states can make as many as $T^2\epsilon$ expected mistakes over a $T$-step rollout. Their DAgger algorithm instead aggregates expert labels on states reached by the learner, obtaining guarantees under the learner-induced distribution and improving performance in driving, game-playing, and sequence-labeling tasks.

This is direct evidence for compounding sequential imitation error, not for inheritance of cognitive bias. Applying the mechanism to a personal agent is an analogy unless the agent's actions actually change later states or training data.
