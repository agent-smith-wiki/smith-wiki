---
title: Sandbox (computing)
type: concept
description: A security mechanism that confines an untrusted program to a tightly controlled set of resources, isolating it from the host operating system and from other programs.
tags: [security, isolation, containers, virtualization, least-privilege, sandboxing]
---

In computing, a **sandbox** is a security mechanism for separating running programs from one another and from the host machine, usually to stop system failures and software [[vulnerability]]s from spreading. The name borrows the metaphor of a child's sandbox: a contained play area where building, breaking, and experimenting cause no real-world damage. A sandbox gives its guest a tightly controlled set of resources (e.g. storage and memory scratch space) and typically denies or heavily restricts network access, inspection of the host system, and access to input devices ([Wikipedia](https://en.wikipedia.org/wiki/Sandbox_(computer_security))). It is implemented by executing the software inside a restricted operating-system environment that controls the resources a process may use — file descriptors, memory, filesystem space, and so on ([Wikipedia](https://en.wikipedia.org/wiki/Sandbox_(computer_security))).

## Isolation mechanisms

Sandboxes are realized through isolation layers of varying strength, often combined in depth:

- **OS primitives on a shared kernel.** Linux application sandboxing is built on three kernel features: [[seccomp]] (secure-computing mode, which filters which system calls a process may make), [[cgroups]] (control groups, which limit CPU, memory, and I/O), and [[Linux namespaces]] (which partition what a process can see: process IDs, network interfaces, user IDs, mounts) ([Wikipedia](https://en.wikipedia.org/wiki/Sandbox_(computer_security)); [Wiz](https://www.wiz.io/academy/container-security/linux-containers-a-security-review)). This stack underpins systemd, Chrome, Firefox, Firejail, Bubblewrap, and Landlock. Android gives each app its own Linux user ID; Apple's App Sandbox (Seatbelt) is required for App Store apps ([Wikipedia](https://en.wikipedia.org/wiki/Sandbox_(computer_security))).
- **Namespaces and cgroups are not enough by themselves.** Namespaces only *hide* resources and cgroups only *meter* them; neither restricts which of the kernel's roughly 450 system calls a process may invoke, so a syscall filter ([[seccomp]]) and MAC frameworks (AppArmor, SELinux) are needed to block dangerous syscalls outright ([Wiz](https://www.wiz.io/academy/container-security/linux-containers-a-security-review); [safeguard.sh](https://safeguard.sh/resources/blog/container-isolation-with-namespaces-cgroups-and-seccomp)).
- **Containers / OS-level virtualization (jails).** A [[container]] is a process (or set of processes) wrapped in namespaces, cgroups, seccomp, and capability restrictions, sharing the host kernel. Because the kernel is shared, a kernel exploit can compromise every container on a host — unlike a virtual machine, where an attacker must additionally breach the hypervisor ([Wiz](https://www.wiz.io/academy/container-security/linux-containers-a-security-review)).
- **Virtual machines.** A [[virtual machine]] boots its own guest kernel on virtualized hardware, isolated from the host by a hypervisor; the guest is sandboxed in the sense that it can only reach host resources through the virtualization boundary ([Wikipedia](https://en.wikipedia.org/wiki/Sandbox_(computer_security))). Lightweight VMs such as Firecracker (used by AWS Lambda) give each sandbox its own kernel with hardware isolation at ~100–150 ms cold-start cost ([microsandbox](https://microsandbox.dev/); [Cosmonic](https://cosmonic.com/blog/ai-sandbox-guide)).
- **Language- and runtime-level sandboxes** restrict untrusted code inside an interpreter or VM rather than at the OS boundary: the JVM sandbox for applets, .NET Code Access Security, the HTML5 `sandbox` attribute for iframes, WebAssembly's memory-isolated linear memory, and V8 isolates ([Wikipedia](https://en.wikipedia.org/wiki/Sandbox_(computer_security)); [Cosmonic](https://cosmonic.com/blog/ai-sandbox-guide)).

A sandbox therefore goes beyond mere *process isolation*. Ordinary process isolation keeps well-behaved programs from interfering with each other; a sandbox is a security boundary for code that is untested or untrusted, applying the [[least privilege]] principle by denying access by default and granting only what the guest was explicitly given ([Wikipedia](https://en.wikipedia.org/wiki/Sandbox_(computer_security)); [Cosmonic](https://cosmonic.com/blog/ai-sandbox-guide)).

## Reproducibility and immutability

For a sandbox to be trustworthy and re-hydratable from a description, the description must be immutable and versioned, and instantiating it must yield the same environment every time:

- **Container images are immutable and layered.** "Once an image is created, it can't be modified. You can only make a new image or add changes on top of it." A running container is a fresh instance derived from that frozen, content-addressed image ([Docker docs](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/)).
- **Images enable ephemeral, disposable infrastructure.** Containers are intended to be immutable and short-lived: if one is compromised it is replaced with a fresh instance from the original image, and reusing preconfigured base images prevents configuration drift ([Wiz](https://www.wiz.io/academy/container-security/linux-containers-a-security-review)).
- **Flakes pin every input.** A [[Nix flakes|Nix flake]] records every transitive dependency in a `flake.lock` file, locking each input to an exact revision and content hash so the described environment is reproducible across machines and over time ([Nix manual](https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html)).

Because a sandbox is cheap to rebuild from its description, it can be treated as ephemeral state: create it for a work period, keep the mutable parts separate from the immutable description, and tear it down (or roll it back to a recorded state) when the work ends.

## Sandboxes for AI agents

AI agents that can execute code, run shell commands, read files, or call tools concentrate risk: model output is probabilistic, tool calls may be hallucinated or poisoned, and [[prompt injection]] can turn an agent into a confused deputy that uses its own legitimate authority destructively ([Cosmonic](https://cosmonic.com/blog/ai-sandbox-guide)). The root cause is *ambient authority* — the agent process inherits all background permissions of its execution environment — so the standard remedy is a sandbox that applies [[least privilege]] to agent execution ([Cosmonic](https://cosmonic.com/blog/ai-sandbox-guide)).

A **coding-agent sandbox** is an isolated, ephemeral execution environment purpose-built for AI agents that write and run code, designed around the threat model that the executed code was not written by a human, cannot be fully reviewed before running, and may attempt destructive or resource-exhausting actions ([Bunnyshell](https://www.bunnyshell.com/guides/coding-agent-sandbox)). A production-grade agent sandbox provides an isolated filesystem, network policies (block egress by default, whitelist endpoints), resource limits, and an ephemeral lifecycle that auto-destroys the environment when the task completes ([Bunnyshell](https://www.bunnyshell.com/guides/coding-agent-sandbox)). Note the term is used in two senses: containing *agents* versus an "AI sandbox" playground where humans experiment with models; these are distinct ([Cosmonic](https://cosmonic.com/blog/ai-sandbox-guide)).

The isolation spectrum for agent workloads mirrors the general one: shared-kernel [[container]]s (optionally under gVisor's user-space kernel), microVMs with per-guest kernels (Firecracker), language-level isolates (V8 / Cloudflare Workers), and WebAssembly with its deny-by-default capability model. Choice trades cold-start latency, isolation strength, environment fidelity, and how finely capabilities can be scoped ([Cosmonic](https://cosmonic.com/blog/ai-sandbox-guide)). Major coding agents differ: Claude Code ships with Bubblewrap/Seatbelt (off by default), Gemini CLI with Docker/Podman (opt-in), and OpenAI Codex enables Landlock + seccomp sandboxing by default ([Bunnyshell](https://www.bunnyshell.com/guides/coding-agent-sandbox)).

Two caveats recur in agent sandboxing: (1) shared-kernel containers may be too weak a boundary for fully untrusted agent code, since container-escape exploits reach the host kernel, which motivates microVM boundaries "so an agent escape hits a hardware boundary before it reaches the host" ([microsandbox](https://microsandbox.dev/); [Bunnyshell](https://www.bunnyshell.com/guides/coding-agent-sandbox)); and (2) isolation does not protect secrets passed as environment variables — they must be scrubbed or egress-restricted explicitly, since a sandbox is an isolation boundary, not a complete permissions model ([Bunnyshell](https://www.bunnyshell.com/guides/coding-agent-sandbox); [Cosmonic](https://cosmonic.com/blog/ai-sandbox-guide)).

## Sources

- https://en.wikipedia.org/wiki/Sandbox_(computer_security)
- https://www.wiz.io/academy/container-security/linux-containers-a-security-review
- https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/
- https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html
- https://cosmonic.com/blog/ai-sandbox-guide
- https://www.bunnyshell.com/guides/coding-agent-sandbox
- https://microsandbox.dev/
- https://safeguard.sh/resources/blog/container-isolation-with-namespaces-cgroups-and-seccomp
