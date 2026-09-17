---
title: "Does an agent replicate the user's cognitive biases?"
type: question
tags: ["ai-agents", "cognitive-bias", "feedback-loops", "personalization"]
by: "Andy Smith"
---

Yes, conditionally. An agent trained to imitate one person's decisions can reproduce systematic errors present in those decisions, and those errors can grow when the agent's outputs change later decisions or become new training evidence. Neither result is automatic: the direct evidence comes from bounded experiments and population datasets, not a long-running autobiographical agent trained on one individual.

## What the agent can copy

Training records contain behavior, not a clean separation between skill and bias. If anchoring, confirmation, framing, overconfidence, or selective attention repeatedly changes a person's choices, labels, explanations, or retained memories, an imitation objective has reason to learn that pattern. Recording only “successful” outcomes does not solve this: success may be judged by the same person, adverse alternatives may never be tried, and rejected actions often have no observed counterfactual outcome.

There is direct evidence for the pieces of this claim, but not yet for the whole personal-agent scenario. [[A foundation model to predict and capture human cognition (nature.com)|Centaur]] was fine-tuned on more than 10 million choices from 60,092 participants and predicted held-out individual choices better than established cognitive models, including in novel tasks. [[Human-like intuitive behavior and reasoning biases emerged in large language models but disappeared in ChatGPT (nature.com)|Experiments with GPT models]] also found human-like intuitive errors on cognitive-reflection tests and semantic illusions. But Centaur learned across many people, and the GPT study tested general models rather than one person's clone. Inferring that a personal agent will inherit a particular user's exact biases is therefore plausible, not directly demonstrated.

Behavioral similarity also does not imply the same inner mechanism. A model can reproduce a choice pattern without possessing the person's beliefs, memories, or psychology.

## When errors snowball

Snowballing requires a feedback path. Three paths matter:

1. **Sequential distribution shift.** In [[A reduction of imitation learning and structured prediction to no-regret online learning (proceedings.mlr.press)|standard behavioral cloning]], an early mistake changes the states the learner later encounters. Ross, Gordon, and Bagnell showed that a classifier with per-step error under expert states can incur as many as $T^2\epsilon$ expected mistakes over a $T$-step rollout. This is a mechanism for compounding errors in sequential imitation, not direct evidence about cognitive bias.
2. **Human–AI influence.** [[Humans inherit artificial intelligence biases (nature.com)|Three experiments]] found that people exposed to a systematically biased AI repeated its errors after assistance ended. More directly, [[How human-AI feedback loops alter human judgements (nature.com)|nine human–AI experiments]] found that an AI trained on slightly biased human judgements amplified the bias and that interacting humans then became more biased over time. The effect appeared in perceptual, emotional, and social judgements and was stronger than human–human influence in the tested settings.
3. **Memory or retraining feedback.** If agent outputs alter what the user does, and those altered decisions are saved as fresh demonstrations, labels, summaries, or preferences, the system can mistake its own influence for independent evidence. Repeated amplification in a personal agent is an inference from the feedback-loop and imitation-learning results; it has not been shown longitudinally for a single-person agent.

A frozen model whose outputs never affect later state, memory, evaluation, or training does not accumulate error merely because time passes. It may repeat a fixed bias, but repetition is not snowballing.

## Direct evidence and limits

The strongest direct demonstration is the human–AI feedback-loop study: 1,401 participants across nine experiments, with bounded tasks and deliberately measurable biases. In one experiment, human labels called 53% of balanced face arrays “more sad”; a CNN trained on those labels classified 65% that way, and human judgements before seeing each new AI answer rose from about 50% at baseline to 61% in the final interaction block. Participants also underestimated the AI's influence.

The evidence does **not** establish that every bias transfers, that amplification continues indefinitely, or that results generalize unchanged to open-ended work. The authors note constrained emotion stimuli and missing direct human-agent controls in some paradigms. The medical classification study used a fictitious task. The reasoning study covered schematic tests and one model family. These studies justify a conditional risk, not inevitability.

## Design implications

A personal agent should not optimize only for resemblance to its user. Safer designs:

- distinguish user demonstrations and preferences from externally verified outcomes;
- retain uncertainty, disagreement, corrections, and failed alternatives rather than compressing them into one confident narrative;
- prevent agent-generated conclusions from re-entering memory or training as independent human evidence without provenance and review;
- evaluate on held-out tasks with ground truth, including longitudinal drift and recurring error classes;
- collect feedback on states the deployed agent actually reaches, while using an independent expert or objective signal where possible—the principle behind dataset aggregation;
- keep consequential decisions reversible and expose evidence so the user can disagree before the output shapes the next training record.

The practical conclusion is not “a personal agent becomes its owner.” It is narrower: faithful imitation can preserve systematic mistakes, and a closed human–agent learning loop can amplify them. Independent truth signals and controlled memory updates break the loop.

## Sources

- [[How human-AI feedback loops alter human judgements (nature.com)|How human–AI feedback loops alter human judgements]]
- [[Humans inherit artificial intelligence biases (nature.com)|Humans inherit artificial intelligence biases]]
- [[A foundation model to predict and capture human cognition (nature.com)|A foundation model to predict and capture human cognition]]
- [[Human-like intuitive behavior and reasoning biases emerged in large language models but disappeared in ChatGPT (nature.com)|Human-like intuitive behavior and reasoning biases emerged in large language models but disappeared in ChatGPT]]
- [[A reduction of imitation learning and structured prediction to no-regret online learning (proceedings.mlr.press)|A reduction of imitation learning and structured prediction to no-regret online learning]]
