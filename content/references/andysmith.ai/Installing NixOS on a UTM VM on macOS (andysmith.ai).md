---
title: Installing NixOS on a UTM VM on macOS (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/4/installing-nixos-on-a-utm-vm-on-macos/
date: 2026-09-04
tags: [nixos, nix, utm, virtualization, macos]
---

## Summary

Hands-on walkthrough of installing [[NixOS]] inside a [[UTM]] VM on an Apple Silicon MacBook Pro (macOS Tahoe 26.6.2). Andy downloads UTM and the NixOS 26.05 aarch64 minimal ISO, creates a Linux VM using the **QEMU** backend rather than Apple's [[Apple Virtualization framework|VZ]] (on folk wisdom that QEMU glitches less and has better graphics on Linux guests), boots the minimal installer, SSHes in from the host, partitions with [[disko]], writes a [[Hyprland]]-based configuration, and runs `nixos-install`. The verdict is lukewarm: the Linux guest's graphics are close to unusable compared with macOS guests, so he leans toward staying with macOS guests (possibly moving from VirtualBuddy to UTM). A later, more polished variant appears in his other Sep 4 posts on [[UTM]] and [[Hyprland]].

## Key ideas

- The path of least resistance on Apple Silicon: download UTM from the official site, grab the `nixos-26.05` aarch64 minimal ISO, boot with QEMU (not Apple VZ), and from the bare installer terminal run `ip ad sh` and `passwd`, then ssh in from the Mac.
- **Don't panic about ping failing inside the VM** — that is an Apple network restriction on the host, not a broken install.
- Disk setup is declarative via [[disko]], run straight from the flake with no repo needed: `sudo nix --experimental-features "nix-command flakes" run github:nix-community/disko/latest -- --mode destroy,format,mount /tmp/disko.nix` against a minimal GPT/ESP+ext4 config on `/dev/vda`.
- Remaining install steps are stock [[NixOS]]: `nixos-generate-config --root /mnt`, hand-written `configuration.nix` (systemd-boot, NetworkManager, openssh, a normal user, Hyprland via greetd/tuigreet), `system.stateVersion` from `nixos-version`, then `nixos-install`.
- Three VM-rendering workarounds for [[Wayland]]/Hyprland in a VM: `WLR_NO_HARDWARE_CURSORS=1` (cursor invisible otherwise), `WLR_RENDERER_ALLOW_SOFTWARE=1`, and `LIBGL_ALWAYS_SOFTWARE=1` only if still a black screen (slow CPU path).
- He already runs **nix-darwin** on the host but has no ready-made NixOS flake/repo yet, so this install is done by hand — explicitly to enable repo-driven setups later.
- 32 GB disk for a throwaway test guest; 64 GB if the experiment earns a real VM. No shared folders on a test VM — transfer over ssh.

## Conclusions

- [[NixOS]] genuinely runs in [[UTM]] on Apple Silicon, and the declarative install (disko + `nixos-install`) is smooth once you're over ssh.
- The blocker is graphical quality: a Hyprland desktop in a QEMU-backed Linux guest renders far worse than a macOS guest, and Andy is not convinced a config tweak rescues it — so macOS guests stay his default, possibly migrated from VirtualBuddy to UTM.
- He prefers the manual/declarative install over a graphical installer so the whole flow can later be driven from ready-made NixOS repos.

## Open questions

- What configuration, if any, makes Linux-guest graphics under UTM's QEMU backend on Apple Silicon actually usable?
- Does the Apple Virtualization framework (VZ) backend render a NixOS/Hyprland guest better than QEMU does, or does it just trade glitches for different ones?

## Sources

- https://mac.getutm.app/
- https://channels.nixos.org/nixos-26.05/latest-nixos-minimal-aarch64-linux.iso
- https://github.com/nix-community/disko
