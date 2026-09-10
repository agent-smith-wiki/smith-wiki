---
title: Secrets management
type: concept
description: The security discipline of storing, distributing, controlling access to, and auditing the digital credentials that applications and automated systems use to authenticate with one another.
tags: [security, credentials, devops, infrastructure]
---

Secrets management is the security discipline of storing, distributing, controlling access to, and auditing the digital credentials that applications, services, and automated pipelines use to authenticate with one another — API keys, database passwords, tokens, private keys, and certificates. It exists because programmatic consumers must obtain and use such credentials without human intervention, and it is organised around a [[Secret lifecycle]] and a [[Secret store]] that hands credentials to workloads at runtime.

## Sources

- https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
- https://kubernetes.io/docs/concepts/configuration/secret/
- https://developer.hashicorp.com/vault/docs/what-is-vault
