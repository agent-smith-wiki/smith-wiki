---
title: vLLM (andysmith.ai)
type: reference
kind: blog
author: Andy Smith
url: https://andysmith.ai/2026/Sep/3/vllm/
date: 2026-09-03
tags: [vllm, llm, model-serving, mlx]
---

## Summary
A terse link note (Sep 3, 2026) pointing at the [[vLLM]] project and describing it as "a toolkit for deploying LLM models to production." The post's one added fact beyond the homepage is that vLLM "even does Apple MLX" — support arriving via a separate project, the vllm-metal repo under the vllm-project org.

## Key ideas
- [[vLLM]] is framed as a *deployment* toolkit (serve/scale models in production) rather than merely an inference engine — a mainstream option in the [[model serving]] space.
- The notable claim: vLLM has gained an Apple [[MLX]]/Metal backend (https://github.com/vllm-project/vllm-metal), i.e. the CUDA-centric serving stack is reaching Apple-Silicon hardware rather than leaving local Apple runs to lighter-weight runners.

## Conclusions
- vLLM is worth tracking as a production [[model serving]] choice.
- Its move onto [[MLX]] is the development the author chooses to single out — relevant to anyone running LLMs on Apple hardware.

## Open questions
- How mature and performant is vLLM's Apple [[MLX]]/Metal backend relative to its primary CUDA path?

## Sources
- https://vllm.ai/
- https://github.com/vllm-project/vllm-metal
