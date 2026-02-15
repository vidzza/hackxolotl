"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Shield, Bot, Network, FileCode } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Threat Detection",
    description: "Machine learning system that analyzes network traffic patterns to detect anomalies and potential threats in real-time using deep learning models.",
    tags: ["Python", "PyTorch", "Scapy", "ELK Stack", "Docker"],
    icon: Shield,
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Multi-Agent Security Automation",
    description: "Framework of autonomous AI agents that collaborate to perform security assessments, vulnerability scanning, and automated reporting.",
    tags: ["Python", "LangChain", "CrewAI", "OpenAI API", "FastAPI"],
    icon: Bot,
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Cloud Security Scanner",
    description: "Automated tool for auditing AWS infrastructure, identifying misconfigurations in IAM, S3, and EC2 with compliance reporting.",
    tags: ["Python", "Boto3", "AWS SDK", "React", "PostgreSQL"],
    icon: Network,
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "AV Evasion Framework",
    description: "Research project on modern antivirus evasion techniques, including payload obfuscation, process injection, and behavioral analysis bypass.",
    tags: ["C++", "Windows API", "Assembly", "Python"],
    icon: FileCode,
    github: "#",
    demo: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-emerald-500 font-mono text-sm">03.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">Featured Projects</h2>
            <div className="flex-1 h-px bg-zinc-800 max-w-xs" />
          </div>
          <p className="text-zinc-400 max-w-2xl">
            Some of my recent work in cybersecurity, AI, and automation. These projects demonstrate 
            my ability to build practical solutions for real security challenges.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`terminal-window p-6 group hover:border-emerald-500/30 transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <project.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="flex items-center gap-3">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-emerald-400 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-emerald-400 transition-colors"
                      aria-label="View Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-zinc-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono text-emerald-400/80 bg-emerald-500/5 border border-emerald-500/20 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/vidzza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/10 transition-all"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
