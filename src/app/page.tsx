import * as React from "react";
import { SiLinkedin, SiGithub, SiMedium } from "react-icons/si";
import Link from "next/link";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="flex-1 p-6 overflow-y-auto -mr-2 pr-8">
      <div className="max-w-3xl mx-auto space-y-6 relative px-4 sm:px-6 md:px-0">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-vscode-text">
            👋 Hi, I am Osée Masuaku
          </h1>
          <h2 className="text-xl sm:text-2xl text-vscode-active font-mono">
            DEVELOPER
          </h2>
          <p className="text-vscode-text text-lg leading-relaxed">
            I am a software engineer specializing in building (and occasionally
            designing) exceptional web and mobile applications.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Link href="/projects" className="block">
              <div className="p-6 bg-vscode-hover/80 rounded-lg hover:bg-vscode-hover/60 transition-colors border border-vscode-border/80 group cursor-pointer backdrop-blur-sm hover:backdrop-blur-md">
                <h3 className="text-vscode-active font-medium font-mono flex items-center">
                  <span className="mr-2">📂</span> Projects
                </h3>
                <p className="text-sm text-vscode-text mt-3 group-hover:text-vscode-active transition-colors">
                  Explore my latest work and open-source contributions
                </p>
              </div>
            </Link>
            <Link href="/about" className="block">
              <div className="p-6 bg-vscode-hover/80 rounded-lg hover:bg-vscode-hover/60 transition-colors border border-vscode-border/80 group cursor-pointer backdrop-blur-sm hover:backdrop-blur-md">
                <h3 className="text-vscode-active font-medium font-mono flex items-center">
                  <span className="mr-2">👨‍💻</span> About Me
                </h3>
                <p className="text-sm text-vscode-text mt-3 group-hover:text-vscode-active transition-colors">
                  Learn about my journey and expertise
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6 text-vscode-text font-mono">
            {"// Tech Stack"}
          </h2>
          <TechStack />
        </div>
      </div>
    </div>
  );
}
