"use client";
import { useState } from "react";
import { SiGithub, SiGoogleplay, SiFlutter, SiDart } from "react-icons/si";
import {
  Bot,
  CreditCard,
  Target,
  Wallet,
  Globe,
  Cloud,
  Lock,
  ExternalLink,
  Download,
  Star,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Category = "all" | "mobile" | "web";

interface Feature {
  icon: React.ReactNode;
  label: string;
}

interface Project {
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  accent: string;
  categories: Category[];
  tags: string[];
  github?: string;
  playStore?: string;
  website?: string;
  stats?: string;
  featured?: boolean;
  features?: Feature[];
  image?: string;
}

const projects: Project[] = [
  {
    title: "Nzimbu",
    subtitle: "Personal Budget App",
    description:
      "Take control of your finances with smart tracking, AI-powered transaction logging, multi-currency support, and savings goals — all in one elegant mobile app.",
    technologies: ["Flutter", "Dart"],
    accent: "#10b981",
    categories: ["mobile"],
    tags: ["Finance", "AI", "Cross-platform"],
    featured: true,
    features: [
      { icon: <Bot className="w-3.5 h-3.5" />, label: "AI Assistant" },
      { icon: <CreditCard className="w-3.5 h-3.5" />, label: "Transactions" },
      { icon: <Target className="w-3.5 h-3.5" />, label: "Savings Goals" },
      { icon: <Wallet className="w-3.5 h-3.5" />, label: "Debt Tracking" },
      { icon: <Globe className="w-3.5 h-3.5" />, label: "Multi-Currency" },
      { icon: <Cloud className="w-3.5 h-3.5" />, label: "Drive Backup" },
      { icon: <Lock className="w-3.5 h-3.5" />, label: "App Lock" },
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.oseemasuaku.nzimbu",
    website: "https://nzimbu.oseemasuaku.com",
  },
  {
    title: "Code du Travail RDC",
    description:
      "Open source Android app for accessing and understanding Congo's labor code. Achieved over 20,000 downloads on Play Store.",
    technologies: ["Flutter", "Dart"],
    accent: "#3b82f6",
    categories: ["mobile"],
    tags: ["Open Source", "Legal"],
    stats: "20K+ downloads",
    image:
      "https://play-lh.googleusercontent.com/g1irMu4dwkIvYpqK275HcUVnZBBaKrrceWryF19G2BfamTqmiIvzgT23Yv-wJrfFOVHC=w480-h960-rw",
    github: "https://github.com/oseeshogun/work_code",
    playStore:
      "https://play.google.com/store/apps/details?id=com.oseemasuaku.codedutravail",
  },
  {
    title: "Mituna",
    description:
      "Interactive quiz app focused on Congo Kinshasa history, helping users explore their country's rich heritage.",
    technologies: ["Flutter", "Dart"],
    accent: "#f59e0b",
    categories: ["mobile"],
    tags: ["Education", "Quiz"],
    image:
      "https://play-lh.googleusercontent.com/zS127qaLkhgNbEXRDMnVtFd_brM7K1xNUShAk01coTYdgc49ZJU1sQQ8XQPQKT8Ing=w480-h960-rw",
    github: "https://github.com/oseeshogun/mituna",
    playStore: "https://play.google.com/store/apps/details?id=deepcolt.com.mituna",
  },
];

const FILTERS: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Mobile", value: "mobile" },
];

function TechChip({ name }: { name: string }) {
  const icon =
    name === "Flutter" ? <SiFlutter className="w-3 h-3" /> :
    name === "Dart"    ? <SiDart className="w-3 h-3" /> :
    null;

  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md font-mono"
      style={{ color: "#d4d4d4", background: "#252526", border: "1px solid #42424270" }}
    >
      {icon}
      {name}
    </span>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const { accent } = project;

  return (
    <div
      className="relative rounded-xl overflow-hidden col-span-full"
      style={{
        background: "#1e1e1e",
        border: `1px solid ${hovered ? accent + "55" : "#42424270"}`,
        boxShadow: hovered
          ? `0 0 60px ${accent}14, 0 20px 60px rgba(0,0,0,0.5)`
          : "0 4px 24px rgba(0,0,0,0.35)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent gradient bar */}
      <div
        className="h-[2px] w-full"
        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}50, transparent 70%)` }}
      />

      {/* Ambient corner glow */}
      <div
        className="absolute top-0 left-0 w-80 h-80 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${accent}10, transparent 65%)`,
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.5s ease",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-60 h-60 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at bottom right, ${accent}08, transparent 65%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />

      <div className="relative p-7 sm:p-9 grid lg:grid-cols-5 gap-8 lg:gap-14 items-center">
        {/* Left — content */}
        <div className="lg:col-span-3 space-y-5">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
              style={{
                color: accent,
                background: `${accent}15`,
                border: `1px solid ${accent}35`,
              }}
            >
              <Star className="w-3 h-3" fill="currentColor" />
              Featured
            </span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-1 rounded-full font-mono"
                style={{ color: "#606060", background: "#252526", border: "1px solid #42424255" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <div>
            <h3
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-1.5"
              style={{
                color: hovered ? accent : "#e0e0e0",
                transition: "color 0.35s ease",
                textShadow: hovered ? `0 0 40px ${accent}40` : "none",
              }}
            >
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm font-mono" style={{ color: accent + "bb" }}>
                {project.subtitle}
              </p>
            )}
          </div>

          <p className="text-[#808080] leading-relaxed max-w-lg">{project.description}</p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <TechChip key={t} name={t} />
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-1">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
                style={{ background: accent, color: "#000" }}
              >
                <ExternalLink className="w-4 h-4" />
                Visit Website
              </a>
            )}
            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all"
                style={{
                  border: `1px solid ${accent}50`,
                  color: accent,
                  background: `${accent}0c`,
                }}
              >
                <SiGoogleplay className="w-4 h-4" />
                Play Store
              </a>
            )}
          </div>
        </div>

        {/* Right — features grid */}
        <div className="lg:col-span-2">
          <p
            className="text-[10px] font-mono uppercase tracking-widest mb-4"
            style={{ color: "#505050" }}
          >
            {"// Key features"}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {project.features?.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-mono"
                style={{
                  background: `${accent}0a`,
                  border: `1px solid ${accent}20`,
                  color: "#c0c0c0",
                  transition: "border-color 0.3s ease, background 0.3s ease",
                }}
              >
                <span style={{ color: accent, flexShrink: 0 }}>{f.icon}</span>
                {f.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const { accent } = project;

  return (
    <div
      className="relative rounded-xl overflow-hidden flex flex-col"
      style={{
        background: "#1e1e1e",
        border: `1px solid ${hovered ? accent + "65" : "#42424270"}`,
        boxShadow: hovered ? `0 8px 36px ${accent}16` : "0 2px 12px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent bar */}
      <div
        className="h-[2px] flex-shrink-0"
        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}40, transparent 80%)` }}
      />

      {/* Image area */}
      {project.image && (
        <div className="relative h-52 overflow-hidden flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            style={{
              transform: hovered ? "scale(1.08)" : "scale(1)",
              transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, transparent 35%, #1e1e1e 100%)`,
            }}
          />
          {/* Corner ambient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at top right, ${accent}18, transparent 60%)`,
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
          {project.stats && (
            <div
              className="absolute top-3 right-3 inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-full"
              style={{
                background: `${accent}22`,
                border: `1px solid ${accent}55`,
                color: accent,
                backdropFilter: "blur(10px)",
              }}
            >
              <Download className="w-3 h-3" />
              {project.stats}
            </div>
          )}
        </div>
      )}

      <div className="p-5 flex flex-col flex-1 gap-3.5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full font-mono uppercase tracking-wider"
              style={{ color: "#555", background: "#252526", border: "1px solid #42424248" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className="text-lg font-bold font-mono"
          style={{
            color: hovered ? accent : "#d4d4d4",
            transition: "color 0.3s ease",
          }}
        >
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed flex-1" style={{ color: "#707070" }}>
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <TechChip key={t} name={t} />
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5 pt-0.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-mono"
              style={{
                color: hovered ? accent : "#606060",
                transition: "color 0.3s ease",
              }}
            >
              <SiGithub className="w-4 h-4" />
              Source
            </a>
          )}
          {project.playStore && (
            <a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-mono"
              style={{
                color: hovered ? accent : "#606060",
                transition: "color 0.3s ease",
              }}
            >
              <SiGoogleplay className="w-4 h-4" />
              Play Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = projects.filter(
    (p) => activeCategory === "all" || p.categories.includes(activeCategory)
  );

  const countFor = (v: Category) =>
    v === "all" ? projects.length : projects.filter((p) => p.categories.includes(v)).length;

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="max-w-5xl mx-auto space-y-8 px-4 sm:px-6 md:px-0">
        {/* Header */}
        <div className="space-y-1.5">
          <p className="text-xs font-mono" style={{ color: "#505050" }}>
            ~/projects
          </p>
          <h1 className="text-3xl font-bold text-vscode-text font-mono">Side Projects</h1>
          <p className="text-vscode-text leading-relaxed max-w-2xl">
            Personal projects and open source work. Each one represents a unique challenge and
            demonstrates my expertise across mobile and web.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="inline-flex items-center gap-1 p-1 rounded-xl"
          style={{ background: "#252526", border: "1px solid #42424260" }}
        >
          {FILTERS.map(({ label, value }) => {
            const active = activeCategory === value;
            return (
              <button
                key={value}
                onClick={() => setActiveCategory(value)}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-mono transition-all duration-200 cursor-pointer"
                style={{
                  background: active ? "#007acc" : "transparent",
                  color: active ? "#fff" : "#707070",
                }}
              >
                {label}
                <span
                  className="text-[11px] px-1.5 py-0.5 rounded-full font-bold tabular-nums"
                  style={{
                    background: active ? "rgba(255,255,255,0.18)" : "#33333380",
                    color: active ? "#ffffffcc" : "#505050",
                  }}
                >
                  {countFor(value)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filtered.map((project) =>
            project.featured ? (
              <FeaturedCard key={project.title} project={project} />
            ) : (
              <ProjectCard key={project.title} project={project} />
            )
          )}
        </div>

        {/* Back */}
        <div className="flex justify-center pt-8">
          <Link
            href="/"
            className="px-6 py-2 bg-vscode-active text-white rounded-lg hover:bg-opacity-90 transition-colors font-mono group flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
