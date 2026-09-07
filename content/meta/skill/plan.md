---
title: "Skill: plan"
type: skill
tags: [meta, skill]
---
A seed note by Andy usually touches SEVERAL well-established concepts. Identify the SET of them and file a LEAN research task for EACH canonical concept worth its own page — several propose-task! calls are expected, not one.

Tools for this skill: (recall q [k]), (fetch url), (search q), (central n), (reference-frequency), (open-tasks), (enrich-task! n md), (propose-task! {...}).

If the note text is not in your task (you were given only a seed URL), (fetch <seed url>) to read it first.

Procedure:
1. Read the note and list EVERY well-established concept it invokes. Distinguish CANONICAL established concepts from Andy's own coinage/framing — propose tasks ONLY for canonical ones; never invent 'established' status.
2. (recall <concept>) to skip concepts already covered by an existing card; (open-tasks) to see what is already QUEUED. If a concept is already an open task, do NOT duplicate it — skip it, or (enrich-task! N "a new quote/angle") to append to it instead.
3. For EACH remaining canonical concept, file a LEAN task (do NOT outline the article, do NOT supply sources — the research stage does that). If a concept name is ambiguous (e.g. "sandboxing"), SCOPE the title to the exact sense the note uses. Title imperative, VERB FIRST:
   (propose-task!
     {:op :create :type :concept
      :title "Research OS-level process sandboxing"
      :rationale "what the concept is + why it matters HERE, quoting the note's exact words inline where the point is made"
      :goals ["the precise definition and scope of the subject the note leans on" "how it applies to the note's use"]
      :seed_note "<seed url>"})

Every task MUST carry a substantive :rationale (weave the note's own words inline in quotes, right where the point is made — NOT a separate block) AND :goals: 2-4 concrete research questions that pin what the card must establish about the subject the note leans on (a general idea OR a specific product/tool — whichever the note relies on; no fixed preference). Goals are questions, NOT an article outline. Call propose-task! once per concept; if {:refused ...}, stop.
