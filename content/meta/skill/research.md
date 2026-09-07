---
title: "Skill: research"
type: skill
tags: [meta, skill]
---
Turn ONE approved task into a wiki card by following the inquiry cycle: gather and appraise sources (literature), then synthesize a self-contained, cited, cross-linked card. The task is either a CONCEPT (`type:concept`, titled "Research X") or a QUESTION (`type:question`, titled "Answer: …").

Cards are ATOMIC and densely linked. Kinds:
  - concept — encyclopedic, objective, canonical explanation of an established concept. NO Andy.
  - answer — a claim that answers a question, with its grounds (cited evidence), a qualifier (how strongly / under what conditions it holds), and known rebuttals. NO Andy.
  - connection — a small card bridging Andy's specific claim in a note to a concept, or flagging a misinterpretation.

ATOMICITY — the core Zettelkasten rule, enforce it hard:
  - A card states ONE idea and is SHORT — a few tight paragraphs, NOT a multi-section encyclopedia article. If you catch yourself writing several `##` sections for distinct sub-topics, STOP: each sub-topic is its OWN card.
  - Write ONLY the essence card for the task's concept (its definition + why it matters, atomically). For each notable sub-concept it decomposes into, DO NOT inline it — (propose-task!) a follow-up research task for it (it waits in Backlog for the human to prioritise) and `[[wikilink]]` it from your card so the link resolves once that card exists.
  - Prefer "short card + [[links]] + follow-up tasks" over one long card, every time. A kilometre-long card is a defect.

LINKING:
  - `[[wikilinks]]` point ONLY to OTHER CARDS IN THIS WIKI (concepts/answers/connections). Use them to weave cards together and to point at sub-concepts you spun off as tasks.
  - Andy's notes live on his BLOG (a different site), NOT in this wiki. NEVER `[[wikilink]]` a blog note. Cite it as an ordinary Markdown link to its URL, e.g. `[Ephemeral agents](https://andysmith.ai/2026/Sep/6/ephemeral-agents/)` (the task's Seed URL).
  - External sources are ordinary Markdown links / entries under `## Sources`.

Tools for this skill: (recall q [k]), (search q), (fetch url), (central n), (reference-frequency), (open-tasks), (put-concept! {...}), (put-answer! {...}), (put-connection! {...}), (put-reference! {...}), (propose-task! {...}).

Procedure:
1. (recall <topic> 8) — existing cards + related corpus, so you neither duplicate nor contradict.
2. LITERATURE — (search)+(fetch) at least 2 authoritative sources and appraise them (prefer primary / authoritative). Every non-obvious claim in the card must cite a source.
3. SYNTHESIZE the ONE atomic card that satisfies the task's Definition of Done — keep it tight:
   - CONCEPT task → (put-concept! {:title :description :tags [..] :body "a few tight paragraphs; only [[wikilinks]] to other cards" :sources [urls]}). If it returns {:skipped}, the canonical card already exists — move on.
   - QUESTION task → (put-answer! {:title "<the question>" :tags [..] :body "the claim + its grounds (cited) + a qualifier + known rebuttals" :seed "<seed url>" :sources [urls]}).
4. SPLIT — for each notable sub-concept your card mentions but should not contain, (propose-task! {:op :create :type :concept :title "Research <sub-concept>" :rationale "…, quoting your card's need for it" :goals [..] :seed_note "<seed url>"}). These are lower-priority; they sit in Backlog.
5. CONNECT (optional) — if Andy's note makes a specific claim about the topic, (put-connection! {:title :tags [..] :body "…" :seed "<seed url>" :sources [urls]}): `[[wikilink]]` the CONCEPT card and link Andy's note by URL. Skip if nothing substantive.

Stay on the exact subject the task names, atomically. Then stop.
