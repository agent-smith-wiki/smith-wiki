---
title: "Skill: research"
type: skill
tags: [meta, skill]
---
Turn ONE approved task into a wiki card by following the inquiry cycle: gather and appraise sources, then synthesize a small, cited, cross-linked card and REVIEW it before writing. The task is either a CONCEPT (`type:concept`, titled "Research X") or a QUESTION (`type:question`, titled "Answer: …").

Card kinds:
  - concept — a SHORT, simple encyclopedic note that just explains what the concept IS: its definition and essence. A few sentences to a short paragraph. Objective, NO Andy. NOTHING beyond the plain definition.
  - answer — a claim that answers a question, with its grounds (cited evidence), a qualifier (how strongly / under what conditions it holds), and known rebuttals. NO Andy.
  - connection — a small card bridging Andy's specific claim in a note to a concept, or flagging a misinterpretation.

ATOMICITY — the core Zettelkasten rule, enforce it hard:
  - A concept card is a SHORT definition, ONE idea. Everything beyond the plain definition — mechanisms, internals, variants, trade-offs, comparisons, applications, history, implications — is NOT card content. Each is an interesting QUESTION to study separately, filed as its own `type:question` task. Never inline it; never make it a sub-concept card. A kilometre-long card is a defect.

LINKING:
  - `[[wikilinks]]` point ONLY to OTHER CARDS IN THIS WIKI (concepts/answers/connections).
  - Andy's notes live on his BLOG (a different site), NOT in this wiki. NEVER `[[wikilink]]` a blog note — cite it as a Markdown link to its URL, e.g. `[Ephemeral agents](https://andysmith.ai/2026/Sep/6/ephemeral-agents/)` (the task's Seed URL). External sources are Markdown links / entries under `## Sources`.

Tools for this skill: (recall q [k]), (search q), (fetch url), (central n), (reference-frequency), (open-tasks), (check-zettel {...}), (put-concept! {...}), (put-answer! {...}), (put-connection! {...}), (put-reference! {...}), (propose-task! {...}).

Procedure:
1. (recall <topic> 8) — existing cards + related corpus, so you neither duplicate nor contradict.
2. LITERATURE — (search)+(fetch) at least 2 authoritative sources and appraise them (prefer primary / authoritative). Cite what the card asserts.
3. DRAFT + REVIEW — draft the small card, then (check-zettel {:type <:concept|:answer> :title "…" :body "…"}). This recursively runs a Zettelkasten editor over your draft. If it is not `OK`, revise (usually: shorten, move depth into question tasks, fix links) and re-check until OK.
4. WRITE:
   - CONCEPT task → (put-concept! {:title :description :tags [..] :body "a short encyclopedic definition; only [[wikilinks]] to other cards" :sources [urls]}). If it returns {:skipped}, the canonical card already exists — move on.
   - QUESTION task → (put-answer! {:title "<the question>" :tags [..] :body "the claim + grounds (cited) + qualifier + known rebuttals" :seed "<seed url>" :sources [urls]}).
5. FRONTIER — the depth lives here: for each interesting question the concept opens up (how it works, variants, trade-offs, comparisons, applications), file a SEPARATE task:
     (propose-task! {:op :create :type :question
        :title "Answer: <the question>"
        :rationale "why it's worth studying, referencing the concept"
        :goals ["what a good answer must establish" "what evidence would settle it"]
        :seed_note "<seed url>"})
   Several are expected; they sit in Backlog for the human to prioritise.
6. CONNECT (optional) — if Andy's note makes a specific claim about the topic, (put-connection! {:title :tags [..] :body "…" :seed "<seed url>" :sources [urls]}): `[[wikilink]]` the CONCEPT card and link Andy's note by URL. Skip if nothing substantive.

Keep the card small; push the depth into questions. Then stop.
