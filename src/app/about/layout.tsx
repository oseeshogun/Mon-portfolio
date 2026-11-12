import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Experience and background of Osée Masuaku, a full-stack mobile and web developer with over 5 years of experience.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About - Osée Masuaku" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
