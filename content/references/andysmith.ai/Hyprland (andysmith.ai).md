---
title: Hyprland (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/4/hyprland/
date: 2026-09-04
tags: [hyprland, nixos, tiling-window-manager, omarchy, linux]
---

A short note in which Andy Smith flags [[Hyprland]] — a [[Tiling window manager|tiling window manager]] that ships with his own [[Omarchy]] NixOS configuration — as something he wants to try. He says he misses this kind of window management on the Mac, and recalls that the only tiling WMs that ever stuck with him were [[StumpWM]] and [[EXWM]], each chosen for the language/environment it lets you configure it in. He is planning to build a [[NixOS]] work machine, and will move to Hyprland only if the interface's speed, smoothness, and responsiveness hold up — while predicting that is exactly where it will fall short.

## Summary
Smith bookmarks Hyprland as the desktop candidate for an upcoming NixOS work machine, motivated by missing tiling-window-manager ergonomics on macOS. His past adoptions (StumpWM, EXWM) were driven by their configuration ecosystems rather than the WMs themselves. He is sceptical about Hyprland's interactive performance but notes the stakes are low because his GUI use is minimal.

## Key ideas
- [[Hyprland]] is a tiling window manager that ships with [[Omarchy]], Smith's own NixOS configuration.
- Prior tiling WMs that stuck: [[StumpWM]] and [[EXWM]] — the pattern is picking a WM by its extension/configuration language, not by default behaviour.
- The acceptance bar for Hyprland is speed, smoothness, and responsiveness of the interface — and he suspects it will fail there.
- His GUI footprint is tiny: calls, a handful of browser-only tools with no terminal alternative (e.g. Hetzner's server-purchase flow), and everything else through the terminal.
- He prefers work VMs on Linux over macOS VMs because they are smaller, more predictable, and easier to manage with a real NixOS underneath.

## Conclusions
The post is a bookmark plus a statement of intent rather than an evaluation: Hyprland gets a trial on the planned NixOS machine, contingent on the interface holding up interactively. It reinforces Smith's terminal-first, low-GUI workflow and his preference for NixOS-backed Linux VMs for work.

## Open questions
- Does Hyprland's speed, smoothness, and responsiveness actually hold up in practice, or does it fall short as Smith predicts?
- StumpWM is conventionally written in Common Lisp, not Haskell — is the note's 'because of Haskell' a conflation with xmonad, or does Smith use 'Haskell' loosely to mean a functional configuration language?
- Is there genuinely no way to buy Hetzner servers without a GUI, as Smith claims?

## Sources
- Omarchy: https://andysmith.ai/2026/Sep/4/omarchy/
- Hyprland: https://hypr.land/
