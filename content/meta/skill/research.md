---
title: "Skill: research"
type: skill
tags: [meta, skill]
---
Research ONE seed and produce ONE card for it — plus its links. A seed is anything worth researching: a question, a claim, a concept, a thesis. It may be a task from the board, or a request to materialize a missing card that other cards already link to ([[like this]]). Writing a card is the RECORD of research, not the point — the research is the inquiry: synthesising an answer, or connecting Andy's claim to established theory.

ONE card per run — keep the PR small and reviewable:
  - seed is a QUESTION → write an ANSWER card: a claim with its grounds (cited evidence), a qualifier (how strongly / under what conditions it holds), and known rebuttals. NO Andy.
  - seed is a CONCEPT / topic → write a lean CONCEPT anchor: a SHORT encyclopedic definition, ONE idea, objective, NO Andy, NOTHING beyond the plain definition. If Andy's note makes a specific claim about it, ALSO write the CONNECTION card bridging his claim to the concept — that is the same page's link, so keep them in ONE PR.
  - seed is a CLAIM / thesis of Andy's → write the CONNECTION card: how his claim relates to established theory (agreement, tension, or a misinterpretation), grounded in sources.

Do NOT write other cards in this run. Every topic the card opens up becomes its OWN future card:
  - leave a [[wikilink]] to it — a link with no card yet is researched automatically later, one at a time;
  - and/or file a framed QUESTION as a new seed (propose-task!) when it needs human priority.

ATOMICITY — enforce hard: a concept card is a SHORT definition, ONE idea. Mechanisms, internals, variants, trade-offs, comparisons, applications, history — NOT card content. Each is a [[link]] or a new seed. A kilometre-long card is a defect.

LINKING:
  - [[wikilinks]] point ONLY to OTHER CARDS IN THIS WIKI. A [[link]] to a card that does not exist yet is not an error — it is a research request that gets picked up later.
  - Andy's notes live on his BLOG, NOT in this wiki. NEVER [[wikilink]] a blog note — cite it as a Markdown link to its URL (the seed's Seed URL). External sources are Markdown links / entries under ## Sources.

Tools: (recall q [k]), (search q), (fetch url), (central n), (reference-frequency), (open-tasks), (check-zettel {...}), (put-concept! {...}), (put-answer! {...}), (put-connection! {...}), (put-reference! {...}), (propose-task! {...}).

Procedure:
1. (recall <subject> 8) — existing cards + related corpus, so you neither duplicate nor contradict. If the seed says which cards reference it, read how they use it and fit your card to them.
2. LITERATURE — (search)+(fetch) at least 2 authoritative sources; appraise (prefer primary). Cite what the card asserts.
3. DRAFT + REVIEW — draft the ONE card, then (check-zettel {:type <:concept|:answer|:connection> :title "…" :body "…"}). Revise until OK (usually: shorten, move depth into [[links]]/seeds, fix links).
4. WRITE the card (put-answer! / put-concept! / put-connection!). If put-concept! returns {:skipped}, the canonical card already exists — you are done.
5. FRONTIER — the depth lives OUTSIDE this card. Leave [[links]] for sub-topics; file framed open questions as new seeds:
     (propose-task! {:op :create :type :question :title "Answer: <question>" :rationale "why it is worth studying, quoting the seed" :goals ["what a good answer must establish" "what would settle it"] :seed_note "<seed url>"})
Then stop.
