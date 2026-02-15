"use client";

import { motion } from "framer-motion";
import { Code, Shield, Cloud, Database, Terminal, Cpu } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "C/C++", level: 85 },
      { name: "Bash/Shell", level: 90 },
      { name: "PowerShell", level: 80 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    icon: Shield,
    title: "Security",
    skills: [
      { name: "Sliver C2", level: 90 },
      { name: "Havoc C2", level: 85 },
      { name: "Metasploit", level: 90 },
      { name: "Nmap/Netcat", level: 95 },
      { name: "Kali Linux", level: 95 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (IAM/S3/EC2)", level: 85 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 75 },
      { name: "Terraform", level: 70 },
      { name: "Kubernetes", level: 65 },
    ],
  },
  {
    icon: Cpu,
    title: "AI/ML",
    skills: [
      { name: "PyTorch", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "Scikit-learn", level: 90 },
      { name: "LangChain", level: 85 },
      { name: "Hugging Face", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950/50">
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
            <span className="text-emerald-500 font-mono text-sm">02.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">Technical Skills</h2>
            <div className="flex-1 h-px bg-zinc-800 max-w-xs" />
          </div>
          <p className="text-zinc-400 max-w-2xl">
            Technologies and tools I use to build security solutions and AI systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="terminal-window p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-100">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-zinc-300">{skill.name}</span>
                      <span className="text-sm text-zinc-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 * index + catIndex * 0.2 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-400 mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Wireshark",
              "Burp Suite",
              "Ghidra",
              "IDA Pro",
              "YARA",
              "Sigma",
              "Splunk",
              "ELK Stack",
              "Git",
              "Linux",
              "Windows Internals",
              "Malware Analysis",
              "Reverse Engineering",
              "OSINT",
              "Social Engineering",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-full hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
