"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const OpenTabs = () => {
  const pathname = usePathname();
  return (
    <div className="flex space-x-2">
      <Link
        href="/"
        className={cn(
          "flex items-center space-x-2 px-3 py-1",
          pathname === "/" ? "border-t border-vscode-active" : ""
        )}
      >
        <span className="text-sm font-mono">README.md</span>
        <button className="text-vscode-muted hover:text-vscode-text transition-colors">
          ×
        </button>
      </Link>
      <Link
        href="/about"
        className={cn(
          "flex items-center space-x-2 px-3 py-1",
          pathname === "/about" ? "border-t border-vscode-active" : ""
        )}
      >
        <span className="text-sm font-mono">about.tsx</span>
        <button className="text-vscode-muted hover:text-vscode-text transition-colors">
          ×
        </button>
      </Link>
      <Link
        href="/projects"
        className={cn(
          "flex items-center space-x-2 px-3 py-1",
          pathname === "/projects" ? "border-t border-vscode-active" : ""
        )}
      >
        <span className="text-sm font-mono">projects.tsx</span>
        <button className="text-vscode-muted hover:text-vscode-text transition-colors">
          ×
        </button>
      </Link>
    </div>
  );
};

export default OpenTabs;
