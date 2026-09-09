---
title: Ephemeral agents (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/6/ephemeral-agents/
date: 2026-09-06
tags: [ai-agents, sandboxing, least-privilege, nix, orchestration]
---

## Summary

Andy Smith argues that the fix for the "automod agent" problem — agents wandering into secrets they shouldn't touch — is to stop treating agents as long-lived sessions and instead make each one a short-lived, disposable process running in a purpose-built, immutable sandbox. An agent's entire state is its [[Sandbox]] plus its own mutable state, and each work period ("tick") is snapshotted as a diff from launch so the agent can be revived or rolled back.

## Key ideas

- An agent with physical access to secrets will get at them sooner or later, so [[Principle of least privilege]] is the first thing you have to build.
- Every agent should run in a [[Sandbox]] prepared specifically for it; the sandbox must be a [[Reproducible environment]] — unchangeable for the duration of the agent's tick — described as a Docker image or (better) a nix-container config / nix-flake.
- [[Agent state]] at any moment is the state of its sandbox plus the state of the agent itself (its mutable directories: workdir, ~/.claude, and so on).
- Ephemeral agents get their ephemerality from two things: existing within a single session, and living only while actually working (its tick). This drops the notion of a session as we know it.
- Two operations replace sessions: create a new agent with a sandbox_description_id and a message, or revive an agent_id with an environment and a message. A new "session" is a new agent with a full, independent copy of the tooling, killing races from parallel edits.
- After each tick, state is backed up as a diff from the initial launch state, enabling revival to any state (rollback is usually a bad idea since the world may have moved on via later tool calls).
- An [[Orchestrator]] — external to the agents — creates agent-sessions and passes messages in from the communication platform; until one exists, run agents manually while keeping the sandbox-description and backup rules.

## Conclusions

Least privilege plus per-agent immutable sandboxes are the foundation for safely autonomous agents; ephemerality is engineered via create/revive operations and diff-based state snapshots, with an external orchestrator driving the message flow.

## Open questions

- What can the MCP sandbox-change tool request, and how is it kept least-privilege? (the post breaks off: "Thanks to")
- How does revival behave when the world's state has changed through later tool calls?
- What does the orchestrator look like concretely?

## Sources

- https://andysmith.ai/2026/Sep/6/ephemeral-agents/
