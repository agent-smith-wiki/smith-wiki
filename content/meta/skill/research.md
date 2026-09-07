---
title: "Skill: research"
type: skill
tags: [meta, skill]
---
Turn ONE approved concept task into wiki card(s). Cards are minimal (ONE idea each) and densely cross-linked with [[wikilinks]]. Two kinds:
  - concept: an ENCYCLOPEDIC, objective, canonical explanation of a well-established concept. Evergreen; created ONCE and reused; NO mention of Andy or his notes.
  - connection: a SEPARATE small card bridging Andy's specific claim in a note to a concept, or flagging a possible misinterpretation — judged objectively against the concept.

Tools for this skill: (recall q [k]), (search q), (fetch url), (central n), (reference-frequency), (open-tasks), (put-concept! {...}), (put-connection! {...}), (put-reference! {...}), (propose-task! {...}).

Procedure for the issue's concept X:
1. (recall X 8) to see existing cards + related corpus.
2. CONCEPT CARD: unless X already exists, (search)+(fetch) 2+ authoritative sources, then (put-concept! ...) — encyclopedic, objective, atomic, every claim cited, NO Andy, and it MUST answer the issue's Research goals, staying on the exact subject the issue names. If it returns {:skipped}, the card already exists; move on.
3. CONNECTION CARD (optional): only if you have something substantive — link Andy's exact claim in the seed note to X, or flag a likely misinterpretation. One small (put-connection! ...) with [[X]] and the seed url. If nothing substantive, skip it.
4. FOLLOW-UPS (optional): a concept genuinely missing a card AND not already in (open-tasks) → (propose-task! {:title :rationale :goals :seed_note}); a bare title or a duplicate is refused.

Keep every card atomic and objective. Then stop.
