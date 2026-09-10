// smith.wiki — 11ty, mirroring the blog. Content = flat discourse-graph Markdown
// pages under site/ (one idea per file), written by meno. No whole-corpus lists
// (they go kilometer-long at scale) — navigation is MoC + per-page [[links]].
// Deployed to GitHub Pages by .github/workflows/deploy.yaml on push to main.
import { readdirSync, readFileSync } from "node:fs";

const slug = (s) =>
  String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// Page type -> emoji, shown at the start of links and titles.
const TYPE_EMOJI = { concept: "💡", source: "📄", question: "❓", claim: "💬", research: "🔬" };

// slug -> type, read from page frontmatter at build time, so [[wikilinks]] can
// prefix the target page's type emoji (see the wikilinks transform below).
const pageType = {};
for (const f of readdirSync("site")) {
  if (!f.endsWith(".md")) continue;
  const src = readFileSync(`site/${f}`, "utf8");
  const title = (src.match(/^title:\s*"?(.*?)"?\s*$/m) || [])[1];
  const type = (src.match(/^type:\s*(.*?)\s*$/m) || [])[1];
  if (title) pageType[slug(title)] = type;
}

export default function (eleventyConfig) {
  eleventyConfig.amendLibrary("md", (md) => md.set({ linkify: true }));
  eleventyConfig.addPassthroughCopy("site/assets");
  eleventyConfig.addPassthroughCopy("site/CNAME"); // GitHub Pages custom domain

  eleventyConfig.addFilter("typeEmoji", (t) => TYPE_EMOJI[t] || "•");

  // Plain-text excerpt from rendered HTML, for meta/OG descriptions.
  eleventyConfig.addFilter("excerpt", (html) =>
    String(html || "")
      .replace(/<h1[\s\S]*?<\/h1>/i, " ")
      .replace(/<p><strong>Source:<\/strong>[\s\S]*?<\/p>/i, " ")
      .replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 155));
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());

  // [[Title]] and [[Title|alias]] -> <a href="/slug/">emoji alias</a>. Runs on
  // rendered HTML (markdown-it leaves [[...]] literal). Slug matches meno's
  // kb/slug. The emoji is the TARGET page's type, so a reader sees what kind of
  // page a link leads to before clicking (no emoji for a not-yet-created page).
  eleventyConfig.addTransform("wikilinks", function (content) {
    const out = this.page && this.page.outputPath;
    if (!out || !out.endsWith(".html")) return content;
    return content.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, t, a) => {
      const s = slug(t);
      const emoji = TYPE_EMOJI[pageType[s]];
      const label = (a || t).trim();
      return `<a href="/${s}/">${emoji ? emoji + " " : ""}${label}</a>`;
    });
  });

  // All KB pages — for the index now, a MoC generator later.
  eleventyConfig.addCollection("kb", (api) =>
    api.getFilteredByGlob("site/*.md")
      .sort((a, b) => (a.data.title || "").localeCompare(b.data.title || "")));

  return {
    dir: { input: "site", includes: "_includes", output: "_site" },
    // agent-written content is never run through the template engine
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
