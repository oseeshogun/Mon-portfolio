"use client";
import { useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFlutter,
  SiDart,
  SiTailwindcss,
} from "react-icons/si";
import type { IconType } from "react-icons";

const techs: { name: string; Icon: IconType; color: string }[] = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Python",     Icon: SiPython,     color: "#3776AB" },
  { name: "React",      Icon: SiReact,      color: "#61DAFB" },
  { name: "Next.js",    Icon: SiNextdotjs,  color: "#FFFFFF" },
  { name: "Node.js",    Icon: SiNodedotjs,  color: "#5FA04E" },
  { name: "Flutter",    Icon: SiFlutter,    color: "#54C5F8" },
  { name: "Dart",       Icon: SiDart,       color: "#0175C2" },
  { name: "TailwindCSS",Icon: SiTailwindcss,color: "#06B6D4" },
];

function TechCard({ name, Icon, color }: { name: string; Icon: IconType; color: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="px-4 py-3 rounded-lg text-sm font-mono flex items-center space-x-3 cursor-default select-none"
      style={{
        backgroundColor: hovered ? "#2d2d2d" : "#2d2d2dcc",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: hovered ? `${color}70` : "#42424280",
        transform: hovered ? "translateY(-3px) scale(1.03)" : "translateY(0) scale(1)",
        boxShadow: hovered ? `0 8px 24px ${color}20, 0 0 0 1px ${color}18` : "none",
        transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon
        style={{
          fontSize: "1.25rem",
          flexShrink: 0,
          color: hovered ? color : "#808080",
          transform: hovered ? "scale(1.25) rotate(6deg)" : "scale(1) rotate(0deg)",
          transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          filter: hovered ? `drop-shadow(0 0 6px ${color}80)` : "none",
        }}
      />
      <span
        style={{
          color: hovered ? "#d4d4d4" : "#808080",
          transition: "color 0.25s ease",
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
      {techs.map((tech) => (
        <TechCard key={tech.name} {...tech} />
      ))}
    </div>
  );
}
