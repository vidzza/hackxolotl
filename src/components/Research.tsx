"use client";

import { motion } from "framer-motion";
import { FileText, BookOpen, Award, GraduationCap } from "lucide-react";

const publications = [
  {
    title: "Machine Learning Approaches for Network Intrusion Detection: A Comparative Study",
    authors: "Rodriguez, A., et al.",
    venue: "IEEE Conference on Cybersecurity and Privacy (CSP)",
    year: "2024",
    status: "Under Review",
    link: "#",
  },
  {
    title: "Multi-Agent Systems for Automated Penetration Testing",
    authors: "Rodriguez, A., Smith, J.",
    venue: "ACM Workshop on AI for Security",
    year: "2024",
    status: "In Progress",
    link: "#",
  },
];

const researchAreas = [
  {
    icon: Shield,
    title: "AI-Driven Threat Detection",
    description: "Developing ML models for real-time anomaly detection in network traffic and system behavior.",
  },
  {
    icon: Bot,
    title: "Autonomous Security Agents",
    description: "Building multi-agent systems that can perform coordinated security assessments and incident response.",
  },
  {
    icon: FileCode,
    title: "Evasion Techniques",
    description: "Researching modern AV/EDR evasion methods to improve defensive strategies.",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 bg-zinc-950/50">
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
            <span className="text-emerald-500 font-mono text-sm">04.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">Research</h2>
            <div className="flex-1 h-px bg-zinc-800 max-w-xs" />
          </div>
          <p className="text-zinc-400 max-w-2xl">
            My academic research focuses on applying artificial intelligence to cybersecurity challenges.
          </p>
        </motion.div>

        {/* Research Areas */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="terminal-window p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <area.icon className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">{area.title}</h3>
              <p className="text-zinc-400 text-sm">{area.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-zinc-100 mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-500" />
            Publications
          </h3>

          <div className="space-y-4">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="terminal-window p-6 hover:border-emerald-500/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-zinc-100 mb-2 hover:text-emerald-400 transition-colors">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        {pub.title}
                      </a>
                    </h4>
                    <p className="text-zinc-400 text-sm mb-1">{pub.authors}</p>
                    <p className="text-zinc-500 text-sm">
                      <span className="italic">{pub.venue}</span> • {pub.year}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      pub.status === "Published" 
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" 
                        : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30"
                    }`}>
                      {pub.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
          >
            <GraduationCap className="w-5 h-5" />
            Google Scholar
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
          >
            <Award className="w-5 h-5" />
            ORCID
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { Shield, Bot, FileCode } from "lucide-react";
