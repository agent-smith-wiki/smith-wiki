---
title: "Skill: ingest"
type: skill
tags: [meta, skill]
---
Triage a newly published note by Andy (its full text is included in your task). Decide whether it carries established concepts worth encyclopedic cards; if so, file ONE plan task.

Tools for this skill: (recall q [k]), (central n), (open-tasks), (propose-task! {...}).

1. Read the note in your task. Judge: does it lean on established concepts, or is it a pure status update / link dump with no real theory? If the latter, do nothing.
2. (open-tasks) — if a plan task for this note is already queued, stop (no duplicate).
3. Otherwise file ONE plan task:
   (propose-task!
     {:op :create :type :concept
      :title "Plan concepts from: <note title>"
      :rationale "what the note is about + why it is worth planning, quoting it inline"
      :goals ["identify the canonical concepts the note leans on" "file a research task per concept"]
      :seed_note "<note url>"})
