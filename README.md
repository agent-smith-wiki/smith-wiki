# smith.wiki

An auto-grown research wiki — atomic, densely `[[wikilinked]]` pages, written entirely
by an agent ([meno](https://github.com/sm-th/meno)) from public notes. Built with
[Eleventy](https://www.11ty.dev/), deployed to GitHub Pages.

- `site/` — the pages (flat Markdown, one idea per file) + layout + assets.
- `eleventy.config.js` — build config: `[[wikilink]]` resolution, water.css, CNAME.
- **Deploy:** push to `main` → `.github/workflows/deploy.yaml` builds (Eleventy) and
  publishes to GitHub Pages.
