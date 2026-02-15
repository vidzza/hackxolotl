"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building security tools, AI agents, and automation systems at the intersection of cybersecurity and machine learning.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-wider">
            HELLO, I&apos;M
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
        >
          <span className="text-zinc-100">Alejandro</span>{" "}
          <span className="gradient-text">Rodriguez</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-zinc-400 font-light">
            Cybersecurity Researcher & AI Engineer
          </h2>
          <p className="mt-2 text-zinc-500 font-mono text-sm">
            MS Computer Science Student @ UTEP
          </p>
        </motion.div>

        {/* Terminal-style description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="terminal-window text-left p-6 font-mono text-sm sm:text-base">
            <div className="flex items-center gap-2 mb-4 text-zinc-500">
              <span className="text-emerald-500">➜</span>
              <span className="text-cyan-500">~</span>
              <span className="text-zinc-400">whoami</span>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              {typedText}
              <span className="inline-block w-2 h-5 bg-emerald-500 ml-1 cursor-blink align-middle" />
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all hover:scale-105 glow flex items-center gap-2"
          >
            View My Work
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-zinc-700 text-zinc-300 font-semibold rounded-lg hover:border-emerald-500 hover:text-emerald-400 transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/vidzza", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/alex-rodriguezz/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:contact@hackxolotl.com", label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800/50 rounded-lg transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-6 h-6 text-zinc-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
