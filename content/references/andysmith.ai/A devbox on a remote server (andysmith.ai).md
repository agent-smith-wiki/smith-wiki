---
title: A devbox on a remote server (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/2/a-devbox-on-a-remote-server/
date: 2026-09-02
tags: [remote-development, vscode, hetzner, self-hosting, ai-agents]
---

## Summary

Andy Smith does not trust third-party software and [[AI agent]]s he cannot keep close track of, so he keeps his main work laptop to a bare minimum and runs everything else in [[Sandbox|isolated environments]]. His main example is a remote devbox: a cheap Hetzner auction (dedicated) server running Debian (or NixOS), reachable via `code tunnel` signed in through GitHub, then opened through vscode.dev in the browser or through his local VSCode, so he works with the code 'as if it were sitting right here' from any browser-capable device. It works in every way except responsiveness: the server sits on the other side of the world, so round-trip latency is high. For the editor that is fine (lag only shows up when connecting/opening files), but for keystroke-interactive console agents like Claude Code it is 'incredibly annoying' — every keystroke round-trips, and mosh-style tools for speeding up ssh don't work inside the VSCode terminal. Working offline is impossible, which he dismisses because local models aren't yet powerful enough to handle 100% of tasks anyway.

## Key ideas

- **Trust as a design driver**: software he can't closely observe doesn't belong on the main machine; the remedy is [[Sandbox|isolated environments]] for everything else, including the agents he runs on the devbox.
- **[[Remote development]] via cheap dedicated hardware plus tunneling**: a Hetzner auction server running Debian or NixOS, `code tunnel` with GitHub sign-in, opened through vscode.dev or local VSCode — a browser becomes the workstation and gives device-independent access.
- **Latency tolerance is interface-dependent**: editor-style access tolerates a long-RTT link (lag is confined to connect/file-open), whereas keystroke-by-keystroke console agents do not; ssh-latency accelerators (mosh-like) don't apply inside the VSCode terminal.
- **Offline capability is currently moot**: you need to be online anyway because [[local models]] can't yet handle the full range of tasks, so the devbox's offline weakness is not yet a real cost.

## Conclusions

The post argues, by worked example rather than exhortation, that pushing dev work and agents off the main machine onto a remote box is a practical isolation pattern whose only real cost is responsiveness. Its binding constraint is not code editing — which tolerates the WAN round trip — but keystroke-interactive console-agent work, which the author explicitly leaves unsolved. The implicit takeaway: agent interaction is the workload that still demands low-latency proximity, unlike plain remote code editing.

## Open questions

- What would make keystroke-interactive console agents usable on a far-away devbox, given that mosh-style tools don't work inside the VSCode terminal?
- As local models become more capable, will the inability to work offline become the deciding constraint against the remote-devbox setup?
