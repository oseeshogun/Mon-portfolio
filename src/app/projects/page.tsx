"use client";
import { SiGithub, SiVercel, SiGoogleplay } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Agora Mall",
    description: "E-commerce online mall platform with stores and articles management. Built with a modern tech stack for optimal performance and user experience.",
    technologies: ["Next.js", "Django", "Python", "PostgreSQL"],
    image: "/images/projects/agora-mall.png",
    demo: "https://www.agoramall.shop",
  },
  {
    title: "Code du Travail RDC",
    description: "Open source Android application for accessing and understanding Congo's labor code. Achieved over 20,000 downloads on Play Store.",
    technologies: ["Kotlin", "Jetpack Compose", "Android"],
    image: "https://play-lh.googleusercontent.com/g1irMu4dwkIvYpqK275HcUVnZBBaKrrceWryF19G2BfamTqmiIvzgT23Yv-wJrfFOVHC=w480-h960-rw",
    github: "https://github.com/oseeshogun/work_code",
    demo: "https://play.google.com/store/apps/details?id=com.oseemasuaku.codedutravail",
  },
  {
    title: "Mituna",
    description: "Interactive quiz application focused on Congo Kinshasa history, helping users learn about their country's rich heritage.",
    technologies: ["Android", "Mobile Development", "Kotlin"],
    image: "https://play-lh.googleusercontent.com/zS127qaLkhgNbEXRDMnVtFd_brM7K1xNUShAk01coTYdgc49ZJU1sQQ8XQPQKT8Ing=w480-h960-rw",
    demo: "https://play.google.com/store/apps/details?id=deepcolt.com.mituna",
    github: "https://github.com/oseeshogun/mituna",
  },
];

export default function Projects() {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-vscode-text mb-4 font-mono">Featured Projects</h1>
          <p className="text-vscode-text text-lg leading-relaxed">
            Here are some of my notable projects. Each one represents a unique challenge and demonstrates my expertise in different technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-vscode-hover/80 rounded-lg border border-vscode-border/80 overflow-hidden backdrop-blur-sm hover:border-vscode-active transition-all duration-300 hover:shadow-lg hover:shadow-vscode-active/10"
            >
              <div className="relative h-56 w-full overflow-hidden">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-medium text-vscode-active font-mono group-hover:text-vscode-text transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-vscode-text leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-mono bg-vscode-bg/40 rounded-full text-vscode-text border border-vscode-border/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-vscode-text hover:text-vscode-active transition-colors group/link"
                    >
                      <SiGithub className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                      <span className="text-sm font-mono">Source</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-vscode-text hover:text-vscode-active transition-colors group/link"
                    >
                      {project.demo.includes('play.google.com') ? (
                        <>
                          <SiGoogleplay className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                          <span className="text-sm font-mono">Play Store</span>
                        </>
                      ) : (
                        <>
                          <SiVercel className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                          <span className="text-sm font-mono">Demo</span>
                        </>
                      )}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Link 
            href="/"
            className="px-6 py-2 bg-vscode-active text-white rounded-lg hover:bg-opacity-90 transition-colors font-mono group flex items-center space-x-2"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
