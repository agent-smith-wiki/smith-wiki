---
title: Omarchy (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/4/omarchy/
date: 2026-09-04
tags: [omarchy, linux, ai-agents, nixos]
---

## Summary
A short note on **Omarchy** — the polished Linux distribution "from the guy behind Ruby on Rails" (DHH). The pitch that spooks Andy immediately: it is built for [[Agent-run operating systems|agents and run entirely by agents]], and agents "love to go read your secrets" — it is not clear how Omarchy deals with that. People are reportedly installing it on old Intel MacBook Pros and finding it faster than macOS. Andy hasn't tried it: it is x86_64-only and he no longer keeps that hardware around; QEMU emulation "just sounds slow and pointless." He flags Asahi (the experimental Apple-Silicon Linux, old Macs only) and a community NixOS port (omarchy-nix) that redoes the same ideas/tools on [[NixOS]] and therefore has a shot at running on ARM — though some packages may be missing there. His plan: skip the distro itself, install "the set of software that comes with it" (installable anywhere), and report back.

## Key ideas
- An OS whose operator is an agent is the central claim; the immediate failure mode is [[Agents accessing secrets|agents reading your secrets]] with no stated mitigation.
- Observed performance: on old Intel MacBook Pros Omarchy reportedly runs faster than macOS.
- Distribution constraint: x86_64-only; the Apple-Silicon route is experimental Asahi Linux or slow emulation — ARM viability depends on package availability, not distro support.
- The NixOS port implies the differentiating value lives in an installable software set, not the bespoke distro itself.
- Pragmatic stance: evaluate the bundled software on a system you already run rather than adopting the OS.

## Conclusions
Worth tracking but not adopting yet: agent-run systems owe a credible answer on secret access; x86_64-only support excludes the author's hardware; the concrete next step is to try the bundled tooling as OS-agnostic software.

## Open questions
- How does Omarchy prevent the agents that operate the OS from reading your secrets?
- Can the software set that ships with Omarchy be installed cleanly on non-Omarchy systems such as macOS or another Linux?
- Will the community NixOS port actually run on ARM, or are key packages unavailable for that architecture?

## Sources
- https://omarchy.org
- https://asahi-alarm.org
- https://github.com/henrysipp/omarchy-nix
