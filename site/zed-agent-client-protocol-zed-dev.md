---
title: "Zed — Agent Client Protocol (zed.dev)"
type: source
url: "https://zed.dev/acp"
author: "Zed Industries"
by: "Zed Industries"
---

Digest: [[Agent Client Protocol|ACP]] is an open standard letting any agent plug into any editing environment; the problem it removes is that every agent/editor pair otherwise needs its own integration. Client-side, an ACP agent gains multi-file editing, full codebase context, diff review and streaming UI; the protocol itself is JSON-RPC over stdin/stdout and open source, and third-party agents keep code on the client rather than vendor servers.

Ecosystem as listed: clients include Zed, JetBrains IDEs, VS Code, Neovim, Emacs and Obsidian; agents include Claude Agent, Gemini CLI, Codex CLI, GitHub Copilot, Cline, OpenHands, Goose and [[omp|OpenCode]]. There is an ACP Registry for one-click agent installs, and JetBrains has co-developed the protocol since October 2025.
