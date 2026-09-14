---
title: "Infrastructure as code (en.wikipedia.org)"
type: source
url: "https://en.wikipedia.org/wiki/Infrastructure_as_code"
author: "Wikipedia contributors"
by: "Wikipedia contributors"
tags: ["devops", "automation", "organization"]
---

Infrastructure as code (IaC) is managing and provisioning computer data-center resources through machine-readable definition files held in version control, rather than by manual configuration or interactive tools. Treating configuration as software — stored, reviewed, and deployed automatically — reduces manual error and lets environments be reproduced reliably and at scale. Lineage runs from CFEngine (Mark Burgess, 1993) through Puppet/Chef to modern declarative IaC frameworks (CloudFormation, Terraform-style tools).

Two recurring distinctions: **declarative vs imperative** (the target state vs the steps to reach it — IaC mostly prefers declarative desired state) and **push vs pull** application of configuration.

The known cost side: IaC does not eliminate risk — around 200,000 potential vulnerabilities were identified in IaC templates in the 2020 Unit 42 cloud threat report — and configuration can drift from the deployed reality unless continuously reconciled.

Relevance to [[Describe a company as code]]: the claim is IaC's logic extended beyond machines — the whole organization (processes, context, roles, agents) as versioned, reviewable, reproducible code. It inherits both the promise (consistency, auditable change) and the pitfalls (drift, misconfig-as-vulnerability) of making an organization executable.