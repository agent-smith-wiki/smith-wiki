---
title: UTM — macOS virtualization and emulation (landing page) (mac.getutm.app)
type: reference
kind: article
author: UTM Project (utmapp)
url: https://mac.getutm.app
date: 2025-04-14
---

## Summary
Landing page for UTM, a free and open-source Mac app that virtualizes and emulates operating systems on Apple platforms. It frames UTM as a friendly front-end over [[QEMU]] (and optionally Apple's native [[Apple Virtualization|Virtualization framework]]) that hides the raw command-line configuration QEMU normally demands. On Apple Silicon it uses Apple's Hypervisor framework to run ARM64 OSes at near-native speed, with software [[emulation]] for x86/x64 and many other architectures; on Intel Macs the roles reverse. It also supports virtualizing macOS itself on Apple Silicon.

## Key ideas
- UTM is macOS-only by design — a native Big Sur-era Mac app, not a cross-platform port, with GUI configuration, snapshots and Mac-style privacy/security expectations.
- Two backends: [[QEMU]] (decades-old FOSS emulation) and [[Apple Virtualization|Apple Virtualization framework]]; UTM's value prop is giving QEMU's flexibility without its learning curve.
- Native [[virtualization]] via Apple's hypervisor reaches near-native speeds for same-architecture guests (ARM64 on Apple Silicon, x86/x64 on Intel); everything else falls back to slower [[emulation]].
- Beyond x86/ARM64, UTM can emulate ARM32, MIPS, PPC and RISC-V "for developers and enthusiasts", and classic OSes (e.g. PowerPC, SPARC, x86_64) via its gallery.
- Multiple macOS guests are supported on Apple Silicon (Monterey or newer) — pitched at developers and security-conscious users.
- macOS VM support limited to ARM Macs running macOS Monterey+.
- App Store and free versions are identical — the paid route only adds automatic updates and funds development; no features withheld.
- No GPU emulation/virtualization on Windows: no OpenGL/DirectX 3D acceleration, only software rendering for older games; experimental hardware-accelerated OpenGL on Linux guests exists via Virgl.

## Conclusions
The page argues UTM's niche is turning QEMU (and Apple's native virtualization) into an approachable, Mac-native GUI so that "your Mac can now truly run anything." The deliberate limits — macOS-only, no GPU acceleration for Windows guests — are framed as honest trade-offs rather than defects, and the free/identical App Store model is an explicit sustainability argument for FOSS development.

## Open questions
- The page does not explain when a user should pick the QEMU backend versus Apple's Virtualization framework — the trade-offs are left entirely to the user.
- UTM's roadmap for GPU virtualization on Windows guests (the single biggest capability gap) is not addressed at all.

## Sources
- https://www.qemu.org/
- https://developer.apple.com/documentation/virtualization
- https://github.com/utmapp/UTM
- https://virgil3d.github.io/
- https://mac.getutm.app/gallery/
