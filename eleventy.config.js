// smith.wiki — 11ty, mirroring the blog. Content = flat discourse-graph Markdown
// pages under site/ (one idea per file), written by meno. No whole-corpus lists
// (they go kilometer-long at scale) — the home page is Maps of Content (🗺️) plus
// any page not yet linked from a MoC; navigation is MoC + per-page [[links]].
// Deployed to GitHub Pages by .github/workflows/deploy.yaml on push to main.
import { readdirSync, readFileSync } from "node:fs";

const slug = (s) =>
  String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// Page type -> emoji. A :claim's marker is instead its epistemic-status dot — a
// claim is the only node with a truth-status — so claims show 🟢/🟡/🔴, not 💬.
const TYPE_EMOJI = { concept: "💡", source: "📄", question: "❓", claim: "💬", research: "🔬", tool: "🔧", moc: "🗺️" };
const STATUS_DOT = { established: "🟢", tentative: "🟡", speculative: "🔴" };
// Marker before a title/link: a claim shows its status dot; everything else its type emoji.
const mark = (type, status) =>
  type === "claim" ? (STATUS_DOT[status] || STATUS_DOT.tentative) : (TYPE_EMOJI[type] || "•");

// slug -> {type, status} from frontmatter at build time, so [[wikilinks]] can show
// the target's marker before you click. Also collect every slug a :moc page links,
// so the home page can list what is not yet mapped into any MoC.
const pageMeta = {};
const mocLinked = new Set();
for (const f of readdirSync("site")) {
  if (!f.endsWith(".md")) continue;
  const src = readFileSync(`site/${f}`, "utf8");
  const title = (src.match(/^title:\s*"?(.*?)"?\s*$/m) || [])[1];
  const type = (src.match(/^type:\s*"?(.*?)"?\s*$/m) || [])[1];
  const status = (src.match(/^status:\s*"?(.*?)"?\s*$/m) || [])[1];
  if (title) pageMeta[slug(title)] = { type, status };
  if (type === "moc") {
    const body = src.replace(/^---[\s\S]*?\n---\n?/, "");
    for (const m of body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) mocLinked.add(slug(m[1]));
  }
}

export default function (eleventyConfig) {
  // linkify OFF: it autolinks bare domains inside [[wikilinks]] (source titles now
  // carry a domain), corrupting the slug the wikilinks transform computes below.
  eleventyConfig.amendLibrary("md", (md) => md.set({ linkify: false }));
  eleventyConfig.addPassthroughCopy("site/assets");
  eleventyConfig.addPassthroughCopy("site/CNAME"); // GitHub Pages custom domain

  eleventyConfig.addFilter("mark", (type, status) => mark(type, status));

  // Plain-text excerpt from rendered HTML, for meta/OG descriptions.
  eleventyConfig.addFilter("excerpt", (html) =>
    String(html || "")
      .replace(/<h1[\s\S]*?<\/h1>/i, " ")
      .replace(/<p><strong>Source:<\/strong>[\s\S]*?<\/p>/i, " ")
      .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, t, a) => a || t)
      .replace(/[\[\]]/g, " ")
      .replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 155));
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());

  // [[Title]] and [[Title|alias]] -> <a href="/slug/">emoji alias</a>. Runs on
  // rendered HTML (markdown-it leaves [[...]] literal). Slug matches meno's
  // kb/slug. The emoji is the TARGET page's type, so a reader sees what kind of
  // page a link leads to before clicking (no emoji for a not-yet-created page).
  eleventyConfig.addTransform("wikilinks", function (content) {
    const out = this.page && this.page.outputPath;
    if (!out || !out.endsWith(".html")) return content;
    const cut = content.indexOf("</head>");
    const head = cut >= 0 ? content.slice(0, cut) : "";
    const body = cut >= 0 ? content.slice(cut) : content;
    const linked = body.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, t, a) => {
      const s = slug(t);
      const m = pageMeta[s];
      const emoji = m ? mark(m.type, m.status) : "";
      const label = (a || t).trim();
      return `<a class="wl" href="/${s}/">${emoji ? emoji + "\u202f" : ""}${label}</a>`;
    });
    // External (http/https) links open in a new tab; internal wiki links don't.
    return head + linked.replace(/<a href="(https?:\/\/[^"]*)"/g,
      '<a target="_blank" rel="noopener" href="$1"');
  });

  // Home page = Maps of Content, then any idea/tool not yet linked from a MoC.
  // Sources are provenance (reached via the pages that cite them), not navigation,
  // so they never appear on the home page.
  eleventyConfig.addCollection("mocs", (api) =>
    api.getFilteredByGlob("site/*.md")
      .filter((p) => p.data.type === "moc")
      .sort((a, b) => (a.data.title || "").localeCompare(b.data.title || "")));
  eleventyConfig.addCollection("unmapped", (api) =>
    api.getFilteredByGlob("site/*.md")
      .filter((p) => p.data.type !== "moc" && p.data.type !== "source"
        && !mocLinked.has(slug(p.data.title || "")))
      .sort((a, b) => (a.data.title || "").localeCompare(b.data.title || "")));

  return {
    dir: { input: "site", includes: "_includes", output: "_site" },
    // agent-written content is never run through the template engine
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
