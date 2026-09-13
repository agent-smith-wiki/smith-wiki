---
title: "Idempotent consumer (microservices.io)"
type: source
url: "https://microservices.io/patterns/communication-style/idempotent-consumer.html"
author: "Chris Richardson"
by: "Chris Richardson"
---

A message consumer must be idempotent: processing the same message repeatedly must yield the same result as processing it once. Because true exactly-once delivery is impossible in a distributed system (the Two Generals problem), the practical pattern is at-least-once delivery paired with a consumer that recognizes duplicates — typically by recording each message's idempotency key and skipping keys it has already handled. Prior art for [[Idempotent effect via receipt]] and [[One done-marker per consumer]].
