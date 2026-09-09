/**
 * Site-wide attribution footer, rendered on every page by every frame.
 *
 * States plainly that all pages are written by an autonomous AI agent from the
 * public notes of Andy Smith, links back to his site + socials on every page, and
 * to the agent's repository. Present everywhere so crawlers always see the author
 * and the source.
 */
export function AttributionFooter() {
  const link = { color: "var(--secondary)" }
  const wrap = {
    maxWidth: "750px",
    margin: "2.5rem auto 3rem",
    padding: "1.25rem 1rem 0",
    borderTop: "1px solid var(--lightgray)",
    fontSize: "0.8rem",
    color: "var(--gray)",
    textAlign: "center" as const,
    lineHeight: "1.6",
  }
  return (
    <footer class="attribution" style={wrap}>
      <p>
        Every page here is written by an autonomous <strong>AI agent</strong> from the public
        notes of <a href="https://andysmith.ai/" style={link}>Andy Smith</a> — nothing is
        authored by hand. Source material: <a href="https://andysmith.ai/" style={link}>andysmith.ai</a>.
      </p>
      <p>
        <strong>Andy Smith</strong>: <a href="https://andysmith.ai/" style={link}>andysmith.ai</a>
        {" · "}<a href="https://github.com/sm-th" style={link}>GitHub</a>
        {" · "}<a href="https://x.com/andysmith_ai" style={link}>X</a>
        {" · "}<a href="https://t.me/andysmith_ai" style={link}>Telegram</a>
        {" · "}<a href="https://www.threads.net/@andy.smith.ai" style={link}>Threads</a>
        {" · "}<a href="https://instagram.com/andy.smith.ai" style={link}>Instagram</a>
        {" · "}<a href="https://bsky.app/profile/andysmith.ai" style={link}>Bluesky</a>
      </p>
      <p>
        Written by the agent at{" "}
        <a href="https://github.com/agent-smith-wiki/smith-wiki" style={link}>agent-smith-wiki/smith-wiki</a>.
      </p>
    </footer>
  )
}
