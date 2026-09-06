---
title: Principle of Least Privilege
type: concept
description: A foundational computer security principle requiring that each entity receive only the minimum access necessary to perform its function
tags: [security, access-control, privilege-management, design-principle]
---

# Principle of Least Privilege

The **principle of least privilege** (PoLP), also called the **principle of minimal privilege** (PoMP) or **principle of least authority** (PoLA), is a foundational [[information security]] and [[computer science]] design principle. It requires that every module in a computing environment—whether a process, user, or program—be granted access only to the information and resources necessary for its legitimate purpose, and nothing more.[^saltzer1975]

## Origin and Formulation

The principle was originally formulated by Jerome Saltzer in 1974 and elaborated with Michael Schroeder in their seminal 1975 paper "The Protection of Information in Computer Systems":

> Every program and every privileged user of the system should operate using the least amount of privilege necessary to complete the job.[^saltzer1974]

Roger Needham discussed related concepts of "dynamic assignments of privileges" as early as 1972.[^needham1972] The oldest practical instance may be the Version 6 Unix `login.c` source code, which begins execution with [[super-user]] permissions and immediately dismisses them via `setuid()` once they are no longer necessary.[^wikipedia]

## Core Rationale

The principle serves three primary security objectives:[^saltzer1975]

1. **Limits damage from accidents or errors**: When code operates with restricted permissions, vulnerabilities in one component cannot be exploited to compromise the entire system
2. **Reduces potential privilege interactions**: Minimizing privileged code reduces unintentional, unwanted, or improper uses of privilege
3. **Simplifies security auditing**: When privilege misuse occurs, fewer programs must be audited to identify the source

The military security rule of [[need-to-know]] exemplifies this principle in human organizational contexts.[^saltzer1975]

## Implementation Concepts

### Privilege Granularity

In practice, [[operating system]]s implement least privilege through mechanisms including:

- **[[Access control list]]s (ACLs)**: List-oriented systems where each object maintains authorized principals
- **[[Capability-based security]]**: Ticket-oriented systems where principals hold unforgeable capabilities for each authorized object
- **[[Protection ring]]s**: Hardware-enforced privilege levels (e.g., ring 0-3 in [[x86 architecture]])
- **[[Role-based access control]] (RBAC)**: Privileges assigned based on organizational roles rather than individuals

### Privilege Bracketing

[[Privilege bracketing]] is a temporal refinement: assuming necessary privileges at the last possible moment and dismissing them as soon as they are no longer strictly necessary. This minimizes the window during which elevated permissions could be exploited.[^wikipedia]

### Practical Limitations

True least privilege faces several implementation challenges:[^saltzer1975][^wikipedia]

- **Complexity growth**: As programs grow complex, predicting exact required privileges becomes impractical
- **[[Operating system]] granularity**: Rarely possible to control access to memory, processing time, or I/O with the precision needed for true minimal privilege  
- **Dynamic requirements**: Variables, addresses, and timing needs may only be determined at runtime

Current practice typically eliminates privileges that can be manually evaluated as unnecessary, accepting that the resulting set usually exceeds the theoretical minimum.[^wikipedia]

## Relationship to Modern Security Models

The principle is a foundational tenet of [[Zero Trust]] security architectures, which verify every request as though it originates from an untrusted network. By enforcing least privilege, Zero Trust minimizes the potential damage of security breaches by limiting the scope of compromised credentials.[^wikipedia]

Related security concepts include:

- [[Privilege separation]]: Dividing programs into components with different privilege levels
- [[Privilege escalation]]: Attacks that exploit flaws to gain higher privileges than authorized
- [[Privilege revocation]]: Mechanisms to withdraw previously granted access
- [[User Account Control]]: Operating system implementations for privilege management
- [[Trusted computing base]] (TCB) minimization: Reducing the amount of code running with elevated privilege

## References

[^saltzer1975]: Saltzer, Jerome H.; Schroeder, Michael D. (1975). "The protection of information in computer systems". *Proceedings of the IEEE*. 63 (9): 1278–1308. doi:10.1109/proc.1975.9939

[^saltzer1974]: Saltzer, Jerome H. (1974). "Protection and the control of information sharing in multics". *Communications of the ACM*. 17 (7): 388–402. doi:10.1145/361011.361067

[^needham1972]: Needham, R. M. (1972). "Protection systems and protection implementations". *Proceedings of the AFIPS '72 Fall Joint Computer Conference*. pp.571–578. doi:10.1145/1479992.1480073

[^wikipedia]: "Principle of least privilege". *Wikipedia*. Retrieved 2026-09-07.

## Sources

- https://en.wikipedia.org/wiki/Principle_of_least_privilege
- https://www.cs.virginia.edu/~evans/cs551/saltzer
