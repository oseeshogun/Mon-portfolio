import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Tous les articles",
  description: "Archive de tous les articles du blog d'Osée Masuaku, classés par année.",
  alternates: { canonical: "/blog/archive" },
  openGraph: { url: "/blog/archive", title: "Tous les articles - Osée Masuaku" },
};

export default function Archive() {
  const posts = getPosts();
  const byYear = new Map<string, typeof posts>();
  for (const p of posts) {
    const y = p.date.slice(0, 4);
    byYear.set(y, [...(byYear.get(y) ?? []), p]);
  }

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="max-w-3xl mx-auto space-y-6 px-4 sm:px-6 md:px-0">
        <Link
          href="/blog"
          className="text-sm font-mono text-vscode-muted hover:text-vscode-active"
        >
          ← Back to blog
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-vscode-text">
          Tous les articles{" "}
          <span className="text-vscode-muted text-lg font-mono">
            ({posts.length})
          </span>
        </h1>
        {[...byYear].map(([year, items]) => (
          <section key={year} className="space-y-2">
            <h2 className="text-xl font-semibold text-vscode-text font-mono">
              {`// ${year}`}
            </h2>
            <ul className="divide-y divide-vscode-border/60 rounded-lg border border-vscode-border/80 bg-vscode-hover/80 backdrop-blur-sm">
              {items.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 px-4 py-3 hover:text-vscode-active transition-colors"
                  >
                    <span className="text-vscode-text">{p.title}</span>
                    <time className="text-xs font-mono text-vscode-muted shrink-0">
                      {formatDate(p.date)}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
