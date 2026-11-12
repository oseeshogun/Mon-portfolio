import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = "Osée Masuaku - Mobile & Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#1e1e1e",
          color: "#d4d4d4",
        }}
      >
        <div style={{ fontSize: 30, color: "#4fc1ff" }}>{"// portfolio"}</div>
        <div style={{ fontSize: 84, fontWeight: 700, color: "#fff", marginTop: 16 }}>
          {SITE_NAME}
        </div>
        <div style={{ fontSize: 40, marginTop: 12 }}>Mobile & Web Developer</div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#808080" }}>
          Flutter · React · Next.js · TypeScript
        </div>
      </div>
    ),
    size
  );
}
