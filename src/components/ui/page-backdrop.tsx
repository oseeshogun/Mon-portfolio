"use client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Wraps the page content over the background image; blurs it more on blog pages
// so long-form text stays readable.
const PageBackdrop = ({ children }: { children: React.ReactNode }) => {
  const isBlog = usePathname().startsWith("/blog");
  return (
    <div
      className={cn(
        "relative z-10 flex flex-col min-h-screen bg-gradient-to-b from-vscode-bg/95 to-vscode-bg/90 transition-[backdrop-filter] duration-300",
        isBlog ? "backdrop-blur-xl" : "backdrop-blur-[2px]"
      )}
    >
      {children}
    </div>
  );
};

export default PageBackdrop;
