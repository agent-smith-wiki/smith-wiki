---
title: "WebGPT: Browser-assisted question-answering with human feedback (arxiv.org)"
type: source
url: "https://arxiv.org/abs/2112.09332"
author: "Reiichiro Nakano, Jacob Hilton, Suchir Balaji, Jeff Wu, Long Ouyang, Christina Kim, Christopher Hesse, Shantanu Jain, Vineet Kosaraju, William Saunders, Xu Jiang, Karl Cobbe, Tyna Eloundou, Gretchen Krueger, Kevin Button, Matthew Knight, Benjamin Chess, John Schulman"
date: "2022"
tags: ["language-models", "research", "citations", "question-answering"]
by: "Reiichiro Nakano, Jacob Hilton, Suchir Balaji, Jeff Wu, Long Ouyang, Christina Kim, Christopher Hesse, Shantanu Jain, Vineet Kosaraju, William Saunders, Xu Jiang, Karl Cobbe, Tyna Eloundou, Gretchen Krueger, Kevin Button, Matthew Knight, Benjamin Chess, John Schulman"
---

WebGPT combines GPT-3 with a text browser and requires the system to collect quoted passages as references before composing an answer. The paper's central design argument is that references make factual accuracy easier for human evaluators to judge. During browsing, the environment carries a written summary of state; the authors note that this summary is the model's only memory of previous browsing steps.

On ELI5, the best model's answers were preferred to human demonstrators' answers 56% of the time and to the highest-voted Reddit answers 69% of the time. Those are preference comparisons, not proof of universal factual accuracy. The discussion reports remaining failures from unreliable sources and mistaken paraphrase or synthesis, so the evidence supports reference-assisted verification while also showing that citations do not eliminate falsehoods.
