---
title: 16:9 screenshots (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/4/16-9-screenshots/
date: 2026-09-04
---

## Summary
A short practical post on producing uniform, exactly-16:9 screenshots for a blog or docs. For Safari windows Andy drives the window size with AppleScript via `osascript`, and for terminal captures he uses WezTerm with the Tokyo Night theme, configured through a nix-darwin setup he is leaning toward making public. The goal is an aesthetic of consistency: every capture framed identically, 'lined up like a ruler'.

## Key ideas
- Exact dimensions come from scripting, not from eyeballing: `osascript -e 'tell application "Safari" to set bounds of front window to {100, 100, 1380, 820}'` yields 1280x720 (16:9).
- The bounds must be set a bit larger than the intended capture; the author's working hypothesis is the macOS window shadow inflates the framed area.
- [[WezTerm]] + [[Tokyo Night]] theme provides a stable, tweakable terminal look for screenshots.
- The terminal config lives in the author's [[nix-darwin]] config, which he is leaning toward making public — consistent with keeping workstation state reproducible and versioned.

## Conclusions
A reproducible screenshot standard is achievable with a couple of small scripting/config choices: AppleScript window geometry for browser shots, a pinned terminal emulator + theme for code shots, all coordinated from dotfiles. Consistency is treated as a deliberate, configurable property rather than manual effort.

## Open questions
- What exactly accounts for the offset between Safari's requested window bounds and the final capture size (the author only guesses the macOS shadow)?
