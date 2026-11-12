export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "code"; lang?: string; text: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  tags: string[];
  content: PostBlock[];
};

// Add new posts at the top of this array. The slug becomes the URL: /blog/<slug>.
export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello, World: Why I Started This Blog",
    description:
      "A short note on why I'm writing, and what to expect in upcoming posts.",
    date: "2026-11-12",
    tags: ["meta"],
    content: [
      {
        type: "p",
        text: "I build web and mobile applications, and I learn a lot by solving problems along the way. This blog is where I'll write those lessons down.",
      },
      { type: "h2", text: "What to expect" },
      {
        type: "p",
        text: "Practical posts on Flutter, React and Next.js, backend work, and the occasional design detail. Short, concrete, and based on real projects.",
      },
      {
        type: "code",
        lang: "ts",
        text: 'const post = { status: "more coming soon" };',
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
