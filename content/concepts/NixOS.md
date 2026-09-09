---
title: NixOS
type: concept
description: A Linux distribution that builds the entire operating system declaratively from Nix expressions.
tags: [linux, nix, declarative, reproducible]
---

NixOS is a [[Linux]] distribution that uses the purely functional [[Nix]] package manager to build the entire operating system declaratively from Nix expressions, instead of mutating a running system imperatively. Users define the desired machine as configuration as code in a file such as /etc/nixos/configuration.nix, and the system is rebuilt from that declaration and from modules and packages in the Nixpkgs collection, enabling reproducible deployments, atomic upgrades and rollback between system generations (https://en.wikipedia.org/wiki/NixOS).

## Sources

- https://en.wikipedia.org/wiki/NixOS
- https://nixos.org/manual/nixos/stable/
- https://nixos.org/
