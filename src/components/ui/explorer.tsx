import Link from "next/link";
import { DiMarkdown, DiReact } from "react-icons/di";

const Explorer = () => {
  return (
    <div className="hidden md:block w-48 bg-vscode-sidebar border-r border-vscode-border p-2">
      <div className="text-sm uppercase text-vscode-muted mb-2 font-medium">
        Explorer
      </div>
      <div className="space-y-1">
        <Link
          href="/"
          className="w-full flex items-center text-left px-2 py-1 hover:bg-vscode-hover rounded transition-colors font-mono text-sm"
        >
          <DiMarkdown className="mr-2" /> README.md
        </Link>
        <Link
          href="/about"
          className="w-full flex items-center text-left px-2 py-1 hover:bg-vscode-hover rounded transition-colors font-mono text-sm"
        >
          <DiReact className="mr-2" /> about.tsx
        </Link>
        <Link
          href="/projects"
          className="w-full flex items-center text-left px-2 py-1 hover:bg-vscode-hover rounded transition-colors font-mono text-sm"
        >
          <DiReact className="mr-2" /> projects.tsx
        </Link>
      </div>
    </div>
  );
};

export default Explorer;
