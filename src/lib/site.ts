// Canonical production host: the apex domain redirects (308) to www on Vercel.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.oseemasuaku.com"
).replace(/\/$/, "");

export const SITE_NAME = "Osée Masuaku";
export const SITE_TITLE = "Osée Masuaku - Mobile & Web Developer";
export const SITE_DESCRIPTION =
  "Portfolio of Osée Masuaku, full-stack mobile and web developer working with Flutter, React, Next.js and TypeScript. Projects, experience and a blog on Flutter.";

export const SOCIALS = [
  "https://www.linkedin.com/in/osee-masuaku/",
  "https://github.com/oseeshogun",
  "https://omasuaku.medium.com/",
];

export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
