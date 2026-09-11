---
title: "Network-bound secrets"
type: concept
by: "Andy Smith"
---

A secret delivered to an agent only toward specific allowed hosts and never written to its disk, paired with a default-deny egress allowlist — so a malicious fetched page cannot exfiltrate a token even with broad outbound access. On Kubernetes the analogue is a per-spawn in-memory secret plus a NetworkPolicy.

## Sources
- [[Microsandbox]]
