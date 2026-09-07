---
title: Principle of least privilege
type: concept
description: Security principle that every subject (user, process, or program) is granted only the minimum permissions needed to perform its assigned task.
tags: [security, access-control, sandboxing]
---

The **principle of least privilege** (PoLP, also "least privilege access") is a security principle stating that a system should restrict the access privileges of users — or of processes acting on behalf of users — to the minimum necessary to accomplish their assigned tasks. NIST's canonical formulation holds that a security architecture should grant each entity the minimum system resources and authorizations it needs to perform its function (NIST CSRC glossary, drawing on CNSSI 4009, NIST SP 800-12 Rev. 1, SP 800-53 Rev. 5, and SP 800-171 Rev. 3).

## Origin
The principle was articulated by Jerome Saltzer and Michael Schroeder in their 1975 paper *The Protection of Information in Computer Systems*: "Every program and every user of the system should operate using the least set of privileges necessary to complete the job." They justified it on three grounds: it limits the damage that can result from an accident or error; it reduces the number of potential interactions among privileged programs (so unintentional or improper uses of privilege are less likely); and it minimizes the number of programs that must be audited when a privilege is misused. They likened it to the military "need-to-know" rule and described it as supplying the rationale for where to install "firewalls" that compartmentalize a system.

## Rationale and scope
PoLP shrinks the attack surface and bounds the blast radius of a compromise: the more access an account holds, the greater the harm if it is taken over or turns malicious, and least privilege makes lateral movement harder because a breached subject can reach nothing beyond its minimal permissions. It applies not only to human users but to any subject — programs, services, database accounts, and code running inside virtual machines — and is enforceable at many layers: network access, host OS accounts, application logic, and VM-level code permissions. OWASP notes that web and application servers running as root or LOCALSYSTEM execute all code, including malicious code, with the full rights of that privileged account, and that database accounts often hold far more privilege than the application requires.

## Implementation
Typical controls include: running services under dedicated non-privileged accounts; using least-privileged database accounts rather than privileged ones; restricting VM code permissions instead of granting AllPermission/FullTrust; elevating privilege only on demand (e.g. sudo, User Account Control); granting access by role or by evaluated attributes; and centralizing authorization checks so least privilege is enforced consistently. PoLP is one of the core concepts of Zero Trust security, which assumes no subject is inherently trustworthy and grants only the access required at each step.

## Related concepts
- [[Access control]] — the mediating mechanism PoLP constrains.
- [[Sandboxing]] — compartmentalizing subjects so privileges are bounded by construction (the "firewall" rationale).
- [[Zero trust]] — the security model for which PoLP is foundational.

## Sources

- https://csrc.nist.gov/glossary/term/least_privilege
- https://www.cloudflare.com/learning/access-management/principle-of-least-privilege
- https://owasp.org/www-community/Access_Control
- https://www.cs.virginia.edu/~evans/cs551/saltzer
