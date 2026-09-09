---
title: NixOS
type: concept
description: A Linux distribution whose entire operating system is declared in a single Nix specification and built reproducibly by the Nix package manager.
tags: [linux, nix, package-management, reproducibility]
---

NixOS is a [[Linux distribution]] built around the [[Nix]] purely functional package manager, in which the entire operating system — kernel, system services, applications, and configuration files — is declared in a single specification (traditionally `/etc/nixos/configuration.nix`) and built by Nix rather than assembled through imperative configuration, making whole machines reproducible from that description alone.

## Sources
- https://nixos.org/guides/how-nix-works
- https://en.wikipedia.org/wiki/NixOS
