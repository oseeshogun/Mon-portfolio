import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Side projects and open-source work by Osée Masuaku: Flutter, React and Next.js apps.",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects", title: "Projects - Osée Masuaku" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
