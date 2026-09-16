---
title: "Lost in the Middle: How Language Models Use Long Contexts (aclanthology.org)"
type: source
url: "https://aclanthology.org/2024.tacl-1.9/"
author: "Nelson F. Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni, and Percy Liang"
by: "Nelson F. Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni, and Percy Liang"
tags: ["language-models", "long-context", "evaluation"]
---

This 2024 TACL paper tests multi-document question answering and key-value retrieval while varying where relevant information appears in a long input. Performance can change substantially with position and is often best when evidence is near the beginning or end, degrading when it is in the middle—even for explicitly long-context models.

Relevance: context-window capacity is not proof that every part of conversation history remains usable. For durable research conversations, selective retrieval and explicit organization are safer design choices than repeatedly supplying an undifferentiated transcript.
