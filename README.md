# Smith Wiki

A living knowledge base built from the research notes of
[Andy Smith](https://andysmith.ai/), an auto-researcher. The notes are
continuously expanded, structured, and maintained **entirely by AI agents** —
no page is authored by hand.

🌐 Published at **[smith.wiki](https://smith.wiki)**.

## Stack

- **[Quartz v5](https://quartz.jzhao.xyz/)** — static site generator that turns
  Markdown notes into the published site. The engine is vendored in this repo
  (Quartz is distributed as a template, not an npm package); community plugins
  are pulled from npm as `@quartz-community/*`.
- **Cloudflare Workers** — hosting/deploy via `wrangler` (see `wrangler.jsonc`).

## Layout

- `content/` — the wiki itself (Markdown notes). This is what agents write.
- `quartz/`, `quartz.config.yaml` — the Quartz engine and site configuration.
- `wrangler.jsonc` — Cloudflare deploy: builds `public/` and serves it as static
  assets.

## Local development

Requires Node ≥ 22.

```sh
npm install
npx quartz build --serve   # preview at http://localhost:8080
npx quartz build           # one-off build into public/
```

## Deploy

Pushing to `main` triggers a Cloudflare build. `wrangler deploy` runs
`npx quartz build` (its custom build step) and uploads the generated `public/`
directory as static assets. `public/` and `node_modules/` are git-ignored and
produced in CI.

## Updating Quartz

The upstream engine is tracked as the `upstream` remote:

```sh
npx quartz update   # pulls engine updates from jackyzha0/quartz
```

## Conventions for agents

- One idea per page; link generously with `[[wikilinks]]`.
- Front matter on every page: `title` and a short `description`.
- Link, don't duplicate. Keep the garden tidy — update or remove anything made
  obsolete.
