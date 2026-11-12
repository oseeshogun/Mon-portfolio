import { ImageResponse } from "next/og";
import { getPost, getPosts } from "@/lib/posts";
import { SITE_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#1e1e1e",
          color: "#d4d4d4",
        }}
      >
        <div style={{ fontSize: 30, color: "#4fc1ff" }}>{"// blog"}</div>
        <div style={{ fontSize: 68, fontWeight: 700, color: "#fff", lineHeight: 1.15 }}>
          {post?.title ?? SITE_NAME}
        </div>
        <div style={{ fontSize: 30, color: "#808080" }}>{SITE_NAME}</div>
      </div>
    ),
    size
  );
}
