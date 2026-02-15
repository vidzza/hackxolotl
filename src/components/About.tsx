"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Terminal, Shield, Brain } from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    title: "MS Computer Science",
    org: "University of Texas at El Paso",
    period: "2023 - Present",
    description: "Focusing on cybersecurity, AI/ML applications in security, and multi-agent systems.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Research",
    org: "UTEP Research Lab",
    period: "2023 - Present",
    description: "Developing tools for threat detection, network security analysis, and offensive security research.",
  },
  {
    icon: Brain,
    title: "AI/ML Engineering",
    org: "Independent Projects",
    period: "2022 - Present",
    description: "Building AI agents, automation systems, and ML models for security applications.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
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
            <span className="text-emerald-500 font-mono text-sm">01.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">About Me</h2>
            <div className="flex-1 h-px bg-zinc-800 max-w-xs" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="terminal-window p-6">
              <div className="flex items-center gap-2 mb-4 text-zinc-500 font-mono text-sm">
                <Terminal className="w-4 h-4" />
                <span>about.txt</span>
              </div>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  I&apos;m a graduate student at{" "}
                  <span className="text-emerald-400">UTEP</span> pursuing my Master&apos;s in Computer Science, 
                  with a focus on the intersection of cybersecurity and artificial intelligence.
                </p>
                <p>
                  My work spans from building offensive security tools and C2 frameworks to developing 
                  AI agents for automated threat detection and response. I&apos;m passionate about solving 
                  real-world security challenges in networks, cloud infrastructure (AWS/IAM/S3), and endpoint protection.
                </p>
                <p>
                  Currently, I&apos;m exploring multi-agent systems for security automation and researching 
                  evasion techniques against modern antivirus solutions.
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-zinc-400">
              <MapPin className="w-5 h-5 text-emerald-500" />
              <span>El Paso, Texas, USA</span>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-zinc-100 mb-6">Experience & Education</h3>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex gap-4 p-4 rounded-lg hover:bg-zinc-900/50 transition-colors group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                    <exp.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-100">{exp.title}</h4>
                  <p className="text-emerald-400 text-sm">{exp.org}</p>
                  <p className="text-zinc-500 text-sm mb-2">{exp.period}</p>
                  <p className="text-zinc-400 text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
