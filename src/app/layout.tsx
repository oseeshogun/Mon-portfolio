import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Explorer from "@/components/ui/explorer";
import OpenTabs from "@/components/ui/open-tabs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Osee Masuaku - Developer Portfolio",
  description: "Full-stack developer portfolio in VS Code style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1e1e1e] text-[#d4d4d4] min-h-screen`}
      >
        <div className="flex h-screen overflow-hidden">
          <nav className="w-12 bg-[#333333] flex flex-col items-center py-4 border-r border-[#424242] max-lg:hidden">
            <div className="flex flex-col gap-4">
              <button className="p-2 hover:bg-[#424242] rounded">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </button>
              <Link href="/" className="p-2 hover:bg-[#424242] rounded">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </Link>
              <button className="p-2 hover:bg-[#424242] rounded">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19h16" />
                  <path d="M4 14h16" />
                  <path d="M4 9h16" />
                  <path d="M4 4h16" />
                </svg>
              </button>
            </div>
          </nav>
          <div className="flex-1 flex flex-col">
            <main className="flex flex-col min-h-screen font-sans relative">
              <div
                className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-black/80"
                style={{
                  backgroundImage:
                    'url("/demon_slayer_tanjiro_kamado_standing_in_forest_with_background_of_moon_blue_sky_and_trees_hd_anime-1280x720.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="relative z-10 flex flex-col min-h-screen bg-gradient-to-b from-vscode-bg/95 to-vscode-bg/90 backdrop-blur-[2px]">
                <div className="flex items-center h-9 bg-vscode-sidebar border-b border-vscode-border px-2 sm:px-4 overflow-x-auto">
                  <OpenTabs />
                </div>

                <div className="flex flex-1 overflow-hidden">
                  <Explorer />

                  {children}
                </div>

                <div className="h-6 bg-vscode-active text-white text-xs flex items-center px-4 font-mono">
                  <Link
                    href="https://www.linkedin.com/in/osee-masuaku/"
                    target="_blank"
                    className="flex items-center space-x-4"
                  >
                    <span>🌟 Ready to collaborate</span>
                    <span>TypeScript</span>
                    <span>UTF-8</span>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
