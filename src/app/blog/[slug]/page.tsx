import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, getPosts } from "@/lib/posts";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      locale: "fr_FR",
      publishedTime: post.date,
      authors: [SITE_NAME],
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <div className="flex-1 p-6 overflow-auto">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: "fr",
          keywords: post.tags.join(", "),
          mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
          url: absoluteUrl(`/blog/${post.slug}`),
          image: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
          author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
          publisher: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
        }}
      />
      <article lang="fr" className="max-w-3xl mx-auto space-y-4 pb-10 px-4 sm:px-6 md:px-0">
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
          <time dateTime={post.date} className="text-xs font-mono text-vscode-muted">
            {formatDate(post.date)}
          </time>
        </header>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </div>
  );
}
