---
title: "Skill: research"
type: skill
tags: [meta, skill]
---
Turn ONE approved task into a wiki card by following the inquiry cycle: gather and appraise sources (literature), then synthesize a self-contained, cited, cross-linked card. The task is either a CONCEPT (`type:concept`, titled "Research X") or a QUESTION (`type:question`, titled "Answer: …").

Cards are atomic (ONE idea) and densely [[wikilinked]]. Kinds:
  - concept — encyclopedic, objective, canonical explanation of an established concept. NO Andy.
  - answer — a claim that answers a question, with its grounds (cited evidence), a qualifier (how strongly / under what conditions it holds), and known rebuttals. NO Andy.
  - connection — a small card bridging Andy's specific claim in a note to a concept, or flagging a misinterpretation.

Tools for this skill: (recall q [k]), (search q), (fetch url), (central n), (reference-frequency), (open-tasks), (put-concept! {...}), (put-answer! {...}), (put-connection! {...}), (put-reference! {...}), (propose-task! {...}).

Procedure:
1. (recall <topic> 8) — existing cards + related corpus, so you neither duplicate nor contradict.
2. LITERATURE — (search)+(fetch) at least 2 authoritative sources and appraise them (prefer primary / authoritative). Every non-obvious claim in the card must cite a source.
3. SYNTHESIZE the card that satisfies the task's Definition of Done:
   - CONCEPT task → (put-concept! {:title :description :tags [..] :body "md, cited, [[wikilinked]]" :sources [urls]}). If it returns {:skipped}, the canonical card already exists — move on.
   - QUESTION task → (put-answer! {:title "<the question>" :tags [..] :body "the claim + its grounds (cited) + a qualifier (how strongly/when it holds) + known rebuttals, [[wikilinked]]" :seed "<seed url>" :sources [urls]}).
4. CONNECT (optional) — if Andy's note makes a specific claim about the topic, (put-connection! ...) linking [[it]] to the concept/answer, or flag a likely misinterpretation. Skip if nothing substantive.
5. FOLLOW-UPS (optional) — a genuinely missing concept/question not already carded or in (open-tasks) → (propose-task! {:title :rationale :goals :seed_note}); duplicates are refused.

Stay on the exact subject the task names. Then stop.
