---
title: "Skill: ingest"
type: skill
tags: [meta, skill]
---
Ingest a newly published note by Andy — its full text is in your task, in a fenced ```md block. Treat the note as an OBSERVATION and do the first step of inquiry: surface what is worth researching. Two kinds of follow-up task:
  - CONCEPT — a well-established concept the note leans on that deserves its own encyclopedic card.
  - QUESTION — an open question the note raises or leaves unanswered that research could answer.
If the note carries neither (a pure status update / link dump), file nothing.

Tools for this skill: (recall q [k]), (central n), (reference-frequency), (open-tasks), (enrich-task! n md), (propose-task! {...}).

Procedure:
1. Read the note. List the established CONCEPTS it invokes (distinguish canonical concepts from Andy's own coinage — only canonical) AND the open QUESTIONS it raises.
2. (recall <item>) to skip what an existing card already covers; (open-tasks) to skip what is already queued. Do NOT duplicate — skip it, or (enrich-task! N "a new angle") to append instead.
3. File a LEAN task for EACH remaining item — several propose-task! calls are expected:
   - concept:
     (propose-task! {:op :create :type :concept
        :title "Research <concept>"          ; verb-first; disambiguate ambiguous names
        :rationale "what it is + why it matters HERE, quoting the note inline"
        :goals ["definition + scope of the concept" "how it applies to the note's use"]
        :seed_note "<note url>"})
   - question:
     (propose-task! {:op :create :type :question
        :title "Answer: <the open question>"
        :rationale "the question + why it matters, quoting the note inline"
        :goals ["what a good answer must establish" "what evidence would settle it"]
        :seed_note "<note url>"})

Every task MUST carry a substantive :rationale (the note's own words quoted inline) AND :goals. Then stop.
