---
title: "Reflective programming (en.wikipedia.org)"
type: source
url: "https://en.wikipedia.org/wiki/Reflective_programming"
author: "Wikipedia contributors"
by: "Wikipedia contributors"
tags: ["lisp", "metaprogramming", "self-modification"]
---

Reflective programming (reflection) is the ability of a process to examine, introspect, and modify its own structure and behavior. Brian Cantwell Smith's 1982 dissertation introduced computational reflection for procedural languages and the meta-circular interpreter embodied in 3-Lisp. Early assembly languages were inherently reflective (instructions as data, self-modifying code); high-level languages mostly lost this until reflection was built back into type systems.

The article's notes on practice: effective reflection "almost always requires a plan" — a design framework or encoding to reflect against; languages like Common Lisp support runtime reflection by carrying a compiler or interpreter in the runtime; and reflection has a security record (unsafe Java reflection has been the most common Java vulnerability and has escaped sandboxes) plus a runtime-performance cost that compiler optimizations can't fully recover.

Relevance to [[Self-evolving agent orchestrator]] and the naming of [[Reflection.dev]]: "an orchestrator that creates its own agents" is computational reflection lifted to the organizational level — a system inspecting and modifying its own structure (its roster, roles, and processes) at runtime. LISP is the classic host for exactly this, and the same warnings apply: reflection without a plan (here, human-set rules of evolution) is how systems escape their own sandboxes.