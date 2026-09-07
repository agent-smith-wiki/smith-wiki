---
title: Ephemeral agents: the sandbox as the unit of agent isolation
type: connection
tags: [ai-agents, sandboxing, least-privilege]
seed: https://andysmith.ai/2026/Sep/6/ephemeral-agents/
---

In [[Ephemeral agents]] Andy makes the sandbox the unit of agent isolation: "every agent should run in a sandbox prepared specifically for it," and "at any moment, an agent's state is the state of its sandbox plus the state of the agent itself." That design leans directly on the properties of a [[Sandbox (computing)|computing sandbox]]: the sandbox is an isolation boundary applying [[least privilege]] to an untrusted workload ([Wikipedia](https://en.wikipedia.org/wiki/Sandbox_(computer_security))), while reproducibility and immutability come from describing it as a Docker image or nix-container/flake config and instantiating a fresh instance from that frozen description ([Docker docs](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/); [Nix manual](https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html)). His claim that the sandbox must be "reproducible and unchangeable for the duration of the agent's tick" is a strict reading of the general practice of immutable, disposable sandboxes ([Wiz](https://www.wiz.io/academy/container-security/linux-containers-a-security-review)). What he adds on top of the textbook concept is the state model: ephemerality comes from the agent living only for a single session and a single tick, with mutable directories (workdir, ~/.claude) kept as the agent's state and backed up as a diff after each tick so an agent can be revived into any prior sandbox+state. Note the alignment and the emphasis: the concept card treats sandbox isolation as a spectrum (containers, microVMs, V8 isolates, Wasm); Andy's note assumes the container/flake end of that spectrum.

## Sources

- https://en.wikipedia.org/wiki/Sandbox_(computer_security)
- https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/
- https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html
- https://www.wiz.io/academy/container-security/linux-containers-a-security-review
