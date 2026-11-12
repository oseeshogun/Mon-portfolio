import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // yyyy-mm-dd
  tags: string[];
  cover?: string;
  html: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

// Minimal frontmatter parser: `key: value` lines, values may be quoted,
// and `[a, b]` is parsed as a list.
function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {} as Record<string, string | string[]>, body: raw };
  const data: Record<string, string | string[]> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      continue;
    }
    if (/^(".*"|'.*')$/.test(value)) value = value.slice(1, -1);
    data[key] = value;
  }
  return { data, body: match[2] };
}

function readPost(file: string): Post {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, body } = parseFrontmatter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? data.tags : [],
    cover: data.cover ? String(data.cover) : undefined,
    html: marked.parse(body, { async: false }) as string,
  };
}

export function getPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  return getPosts().find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
