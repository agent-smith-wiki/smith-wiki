---
title: "Skill: ingest"
type: skill
tags: [meta, skill]
---
Ingest a newly published note by Andy — its full text is in your task, in a fenced ```md block. Treat the note as an OBSERVATION and do the first step of inquiry: surface what is worth researching, as SEEDS for the research stage. A seed is anything researchable the note raises:
  - a CLAIM / thesis Andy makes that could be connected to established theory (agreement, tension, misinterpretation);
  - an open QUESTION the note raises or leaves unanswered.
Do NOT file bare "concepts" to define — a concept earns a card only when a claim or answer links to it, and that [[link]] is researched automatically later. If the note is a pure status update / link dump, file nothing.

Tools: (recall q [k]), (central n), (reference-frequency), (open-tasks), (enrich-task! n md), (propose-task! {...}).

Procedure:
1. Read the note. List the CLAIMS it makes and the open QUESTIONS it raises.
2. (recall <item>) to skip what an existing card already covers; (open-tasks) to skip what is already queued. Do NOT duplicate — skip it, or (enrich-task! N "a new angle") to append instead.
3. File a LEAN seed for EACH remaining item — several propose-task! calls are expected:
   (propose-task! {:op :create :type :question    ; question, or :claim for a thesis of Andy's
      :title "<the claim or question, verb-first>"
      :rationale "what it is + why it is worth researching, quoting the note inline"
      :goals ["what a good result must establish" "what evidence would settle it"]
      :seed_note "<note url>"})

Every seed MUST carry a substantive :rationale (the note's own words quoted inline) AND :goals. Then stop.
