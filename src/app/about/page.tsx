"use client";
import { DiPython, DiJavascript, DiReact } from "react-icons/di";
import { SiFlutter } from "react-icons/si";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-vscode-text mb-4">About Me</h1>
          <p className="text-vscode-text text-lg leading-relaxed">
            I&apos;m a passionate full-stack mobile and web developer with over
            5 years experience. With expertise covering every stage of development,
            from initial design to production deployment, I&apos;m committed to
            delivering technology solutions that combine innovation and ease of
            use. My journey in tech has been driven by a constant desire to
            learn and create impactful solutions.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-vscode-text font-mono">
            {"// Experience"}
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-vscode-hover/80 rounded-lg border border-vscode-border/80 backdrop-blur-sm">
              <h3 className="text-vscode-active font-medium mb-2">
                <a href="https://schoolap.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Mobile Developer @ Schoolap</a>
              </h3>
              <p className="text-sm text-vscode-text mb-4">March 2023 - Present</p>
              <ul className="list-disc list-inside text-vscode-text space-y-2">
                <li>Developed Schoolap Tab tablet application using Flutter</li>
                <li>Built a robust and clean architecture for a school management ERP mobile application</li>
              </ul>
            </div>

            <div className="p-6 bg-vscode-hover/80 rounded-lg border border-vscode-border/80 backdrop-blur-sm">
              <h3 className="text-vscode-active font-medium mb-2">
                <a href="https://kadea.co/" target="_blank" rel="noopener noreferrer" className="hover:underline">Full-Stack Developer @ Kinshasa Digital</a>
              </h3>
              <p className="text-sm text-vscode-text mb-4">January 2023 - March 2023</p>
              <ul className="list-disc list-inside text-vscode-text space-y-2">
                <li>Implemented Machine Learning functionality for time-series data prediction using Python</li>
                <li>Developed WordPress solutions using the Timber framework</li>
              </ul>
            </div>

            <div className="p-6 bg-vscode-hover/80 rounded-lg border border-vscode-border/80 backdrop-blur-sm">
              <h3 className="text-vscode-active font-medium mb-2">
                <a href="https://faithful-tech.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Web & Mobile Developer @ Faithful SARL</a>
              </h3>
              <p className="text-sm text-vscode-text mb-4">July 2021 - April 2022</p>
              <ul className="list-disc list-inside text-vscode-text space-y-2">
                <li>Developed Newmed, an enrollment software for UNIKIN Medical School</li>
                <li>Built ExpressApp, an iOS and Android app for telecom operator services</li>
                <li>Created a web-based project management application using earned value methodology</li>
              </ul>
            </div>

            <div className="p-6 bg-vscode-hover/80 rounded-lg border border-vscode-border/80 backdrop-blur-sm">
              <h3 className="text-vscode-active font-medium mb-2">
                <a href="https://www.etidlabs.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Mobile & Web Developer @ Etidlabs</a>
              </h3>
              <p className="text-sm text-vscode-text mb-4">February 2021 - July 2021</p>
              <ul className="list-disc list-inside text-vscode-text space-y-2">
                <li>Developed Masolo, an instant messaging mobile app using Flutter and Swift for iOS, with ExpressJS backend</li>
                <li>Achieved over 10,000 downloads on PlayStore</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-vscode-text font-mono">
            {"// Core Skills"}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-vscode-hover/80 rounded-lg border border-vscode-border/80 backdrop-blur-sm flex items-center space-x-3">
              <DiJavascript className="w-8 h-8 text-yellow-400" />
              <div>
                <h3 className="font-medium text-vscode-active">JavaScript</h3>
                <p className="text-sm text-vscode-text">Advanced</p>
              </div>
            </div>
            <div className="p-4 bg-vscode-hover/80 rounded-lg border border-vscode-border/80 backdrop-blur-sm flex items-center space-x-3">
              <DiPython className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="font-medium text-vscode-active">Python</h3>
                <p className="text-sm text-vscode-text">Advanced</p>
              </div>
            </div>
            <div className="p-4 bg-vscode-hover/80 rounded-lg border border-vscode-border/80 backdrop-blur-sm flex items-center space-x-3">
              <DiReact className="w-8 h-8 text-blue-500" />
              <div>
                <h3 className="font-medium text-vscode-active">React</h3>
                <p className="text-sm text-vscode-text">Expert</p>
              </div>
            </div>
            <div className="p-4 bg-vscode-hover/80 rounded-lg border border-vscode-border/80 backdrop-blur-sm flex items-center space-x-3">
              <SiFlutter className="w-8 h-8 text-cyan-400" />
              <div>
                <h3 className="font-medium text-vscode-active">Flutter</h3>
                <p className="text-sm text-vscode-text">Advanced</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Link
            href="/"
            className="px-6 py-2 bg-vscode-active text-white rounded-lg hover:bg-opacity-90 transition-colors font-mono"
          >
            {"<- Back to Home"}
          </Link>
        </div>
      </div>
    </div>
  );
}
