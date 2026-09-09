---
title: UTM (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/4/utm/
date: 2026-09-04
tags: [virtualization, utm, nixos, hyprland, linux]
---

## Summary
A brief progress note in an ongoing [[virtualization]] tinkering arc. Andy reports that [[VirtualBuddy]] handles macOS guests well but would not run Linux for him — no way to install from an ISO, the one Debian image is down, and he does not want to download Ubuntu. His move is to try [[UTM]] (mac.getutm.app) to run [[NixOS]] and [[Hyprland]] instead.

## Key ideas
- VirtualBuddy is praised but effectively restricted to macOS guests in practice; Linux on it is a dead end for this user.
- The blocker is installing a non-macOS guest: no generic ISO-install path, unavailable Debian image, no appetite for the Ubuntu download.
- [[UTM]] is chosen as the alternative hypervisor for running a Linux desktop ([[NixOS]] + [[Hyprland]]) on Apple hardware.

## Conclusions
- For Linux-on-macOS experimentation the author abandons VirtualBuddy in favour of UTM; the post frames UTM as the pragmatic route to a [[NixOS]]/[[Hyprland]] guest.

## Open questions

## Sources
- [[UTM — macOS virtualization and emulation (landing page) (mac.getutm.app)]]
- [[Hyprland (andysmith.ai)]]
