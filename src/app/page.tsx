import * as React from "react";
import { SiLinkedin, SiGithub, SiMedium } from "react-icons/si";
import { DiJavascript, DiReact, DiPython, DiMarkdown } from "react-icons/di";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen font-sans relative">
      <div
        className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-black/94"
        style={{
          backgroundImage:
            'url("/demon_slayer_tanjiro_kamado_standing_in_forest_with_background_of_moon_blue_sky_and_trees_hd_anime-1280x720.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10 flex flex-col h-full bg-gradient-to-b from-vscode-bg/95 to-vscode-bg/90 backdrop-blur-[2px]">
        <div className="flex items-center h-9 bg-vscode-sidebar border-b border-vscode-border px-4">
          <div className="flex space-x-2">
            <div className="flex items-center space-x-2 px-3 py-1 bg-vscode-bg border-t border-vscode-active">
              <span className="text-sm font-mono">README.md</span>
              <button className="text-vscode-muted hover:text-vscode-text transition-colors">
                ×
              </button>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1 hover:bg-vscode-hover transition-colors">
              <span className="text-sm font-mono">about.tsx</span>
              <button className="text-vscode-muted hover:text-vscode-text transition-colors">
                ×
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-1">
          <div className="w-48 bg-vscode-sidebar border-r border-vscode-border p-2">
            <div className="text-sm uppercase text-vscode-muted mb-2 font-medium">
              Explorer
            </div>
            <div className="space-y-1">
              <button className="w-full flex items-center text-left px-2 py-1 hover:bg-vscode-hover rounded transition-colors font-mono text-sm">
                <DiMarkdown className="mr-2" /> README.md
              </button>
              <button className="w-full flex items-center text-left px-2 py-1 hover:bg-vscode-hover rounded transition-colors font-mono text-sm">
                <DiReact className="mr-2" /> about.tsx
              </button>
              <button className="w-full flex items-center text-left px-2 py-1 hover:bg-vscode-hover rounded transition-colors font-mono text-sm">
                <DiReact className="mr-2" /> projects.tsx
              </button>
              <button className="w-full flex items-center text-left px-2 py-1 hover:bg-vscode-hover rounded transition-colors font-mono text-sm">
                <DiReact className="mr-2" /> contact.tsx
              </button>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-auto">
            <div className="max-w-3xl mx-auto space-y-6 relative">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-vscode-text">
                  👋 Hi, I am Osée Masuaku
                </h1>
                <h2 className="text-2xl text-vscode-active font-mono">
                  DEVELOPER
                </h2>
                <p className="text-vscode-text text-lg leading-relaxed">
                  I am a software engineer specializing in building (and
                  occasionally designing) exceptional web and mobile
                  applications.
                </p>
                <div className="flex space-x-4 pt-4">
                  <a
                    href="https://www.linkedin.com/in/osee-masuaku/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-vscode-text hover:text-vscode-active transition-colors"
                  >
                    <SiLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/oseeshogun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-vscode-text hover:text-vscode-active transition-colors"
                  >
                    <SiGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://omasuaku.medium.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-vscode-text hover:text-vscode-active transition-colors"
                  >
                    <SiMedium className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-xl font-semibold mb-6 text-vscode-text font-mono">
                  {"// Quick Links"}
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-vscode-hover/80 rounded-lg hover:bg-vscode-hover/60 transition-colors border border-vscode-border/80 group cursor-pointer backdrop-blur-sm hover:backdrop-blur-md">
                    <h3 className="text-vscode-active font-medium font-mono flex items-center">
                      <span className="mr-2">📂</span> Projects
                    </h3>
                    <p className="text-sm text-vscode-text mt-3 group-hover:text-vscode-active transition-colors">
                      Explore my latest work and open-source contributions
                    </p>
                  </div>
                  <div className="p-6 bg-vscode-hover/80 rounded-lg hover:bg-vscode-hover/60 transition-colors border border-vscode-border/80 group cursor-pointer backdrop-blur-sm hover:backdrop-blur-md">
                    <h3 className="text-vscode-active font-medium font-mono flex items-center">
                      <span className="mr-2">👨‍💻</span> About Me
                    </h3>
                    <p className="text-sm text-vscode-text mt-3 group-hover:text-vscode-active transition-colors">
                      Learn about my journey and expertise
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-xl font-semibold mb-6 text-vscode-text font-mono">
                  {"// Tech Stack"}
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "JavaScript", icon: <DiJavascript /> },
                    { name: "Python", icon: <DiPython /> },
                    {
                      name: "Flutter",
                      icon: (
                        <Image
                          src="/flutter-svgrepo-com.svg"
                          alt="Flutter"
                          width={24}
                          height={24}
                        />
                      ),
                    },
                    { name: "TypeScript", icon: "🔷" },
                    { name: "React", icon: "⚛️" },
                    { name: "Node.js", icon: "🟩" },
                    { name: "Next.js", icon: "⚡" },
                    { name: "TailwindCSS", icon: "🎨" },
                  ].map((tech) => (
                    <div
                      key={tech.name}
                      className="px-4 py-3 bg-vscode-hover/80 rounded-lg text-sm text-vscode-text border border-vscode-border/80 font-mono flex items-center space-x-2 hover:border-vscode-active transition-colors backdrop-blur-sm hover:backdrop-blur-md"
                    >
                      <span>{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
  );
}
