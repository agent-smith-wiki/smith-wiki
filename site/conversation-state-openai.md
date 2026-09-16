---
title: "Conversation state (OpenAI)"
type: source
url: "https://developers.openai.com/api/docs/guides/conversation-state"
author: "OpenAI"
date: "2026"
tags: ["ai-agents", "memory", "conversation"]
by: "OpenAI"
---

OpenAI's official guide states that individual text-generation requests are independent and stateless. Multi-turn continuity must be constructed by sending the earlier user and assistant messages with the next request, appending the prior response output, chaining with a previous response identifier, or using a durable conversation object.

The guide is evidence about an integration mechanism, not evidence that a model will correctly use every supplied detail. It also notes that replaying complete output matters for preserving reasoning items and assistant phase values. For a public researcher, the relevant implication is that conversation persistence is explicit application state and should be testable as such.
