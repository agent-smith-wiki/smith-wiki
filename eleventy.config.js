// smith.wiki — 11ty, mirroring the blog. Content = flat discourse-graph Markdown
// pages under site/ (one idea per file), written by meno. No whole-corpus lists
// (they go kilometer-long at scale) — navigation is MoC + per-page [[links]].
// Deployed to GitHub Pages by .github/workflows/deploy.yaml on push to main.

const slug = (s) =>
  String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

export default function (eleventyConfig) {
  eleventyConfig.amendLibrary("md", (md) => md.set({ linkify: true }));
  eleventyConfig.addPassthroughCopy("site/assets");
  eleventyConfig.addPassthroughCopy("site/CNAME"); // GitHub Pages custom domain

  // [[Title]] and [[Title|alias]] -> <a href="/slug/">alias</a>. Runs on rendered
  // HTML (markdown-it leaves [[...]] as literal text). Slug matches meno's kb/slug.
  eleventyConfig.addTransform("wikilinks", function (content) {
    const out = this.page && this.page.outputPath;
    if (!out || !out.endsWith(".html")) return content;
    return content.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, t, a) =>
      `<a href="/${slug(t)}/">${(a || t).trim()}</a>`);
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
