import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, posts } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return { title: `${post.title} - Osee Masuaku`, description: post.description };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <div className="flex-1 p-6 overflow-auto">
      <article className="max-w-3xl mx-auto space-y-4 px-4 sm:px-6 md:px-0">
        <Link
          href="/blog"
          className="text-sm font-mono text-vscode-muted hover:text-vscode-active"
        >
          ← Back to blog
        </Link>
        <header className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-vscode-text">
            {post.title}
          </h1>
          <time className="text-xs font-mono text-vscode-muted">
            {formatDate(post.date)}
          </time>
        </header>
        {post.content.map((b, i) => {
          if (b.type === "h2")
            return (
              <h2 key={i} className="text-xl font-semibold text-vscode-text font-mono pt-2">
                {b.text}
              </h2>
            );
          if (b.type === "code")
            return (
              <pre
                key={i}
                className="p-4 rounded-lg bg-vscode-sidebar border border-vscode-border/80 overflow-x-auto text-sm font-mono"
              >
                <code>{b.text}</code>
              </pre>
            );
          return (
            <p key={i} className="text-vscode-text leading-relaxed">
              {b.text}
            </p>
          );
        })}
      </article>
    </div>
  );
}
