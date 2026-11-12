import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on Flutter, Dart and web and mobile development by Osée Masuaku (in French).",
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/feed.xml" } },
  openGraph: { url: "/blog", title: "Blog - Osée Masuaku" },
};

export default function Blog() {
  const sorted = getPosts();
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="max-w-3xl mx-auto space-y-6 px-4 sm:px-6 md:px-0">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-vscode-text">Blog</h1>
          <Link
            href="/blog/archive"
            className="text-sm font-mono text-vscode-muted hover:text-vscode-active"
          >
            Tous les articles →
          </Link>
        </div>
        <div className="space-y-4">
          {sorted.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <article className="p-4 sm:p-6 bg-vscode-hover/80 rounded-lg border border-vscode-border/80 backdrop-blur-sm hover:border-vscode-active/50 transition-colors group">
                <time className="text-xs font-mono text-vscode-muted">
                  {formatDate(post.date)}
                </time>
                <h2 className="text-vscode-active font-medium mt-1 group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-sm text-vscode-text mt-2">{post.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-vscode-sidebar text-vscode-muted"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
