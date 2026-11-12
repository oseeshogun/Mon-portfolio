import { getPosts } from "@/lib/posts";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = getPosts()
    .map((p) => {
      const url = absoluteUrl(`/blog/${p.slug}`);
      // Make relative image/link URLs absolute for feed readers.
      const body = p.html.replace(/(src|href)="\//g, `$1="${SITE_URL}/`).replace(/]]>/g, "]]&gt;");
      return `<item>
<title>${esc(p.title)}</title>
<link>${url}</link>
<guid isPermaLink="true">${url}</guid>
<pubDate>${new Date(p.date).toUTCString()}</pubDate>
<description>${esc(p.description)}</description>
${p.tags.map((t) => `<category>${esc(t)}</category>`).join("\n")}
<content:encoded><![CDATA[${body}]]></content:encoded>
</item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
<title>${esc(SITE_NAME)} - Blog</title>
<link>${absoluteUrl("/blog")}</link>
<description>${esc(SITE_DESCRIPTION)}</description>
<language>fr</language>
<atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
