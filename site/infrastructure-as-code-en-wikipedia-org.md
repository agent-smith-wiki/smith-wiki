---
title: "Infrastructure as code (en.wikipedia.org)"
type: source
url: "https://en.wikipedia.org/wiki/Infrastructure_as_code"
author: "Wikipedia contributors"
by: "Wikipedia contributors"
---

Infrastructure as code (IaC) is the practice of managing and provisioning computing resources through machine-readable definition files rather than manual, hands-on processes. Definitions state the *desired state* declaratively, and applying them is idempotent — re-running converges drift back into line. Because the definitions are code, they live under version control, giving every change a commit, author and timestamp: systems become reproducible, disposable and consistent (Kief Morris's book is the canonical treatment).

Relevance: the established practice [[Company as code]] generalizes. The post's claim is that an organization's agents, roles and process rules can be described with the same declarative, versioned discipline IaC applies to servers — with [[The orchestrator can create agents itself|the orchestrator]] as the desired-state controller for the company.