"use client";

import { Github, Linkedin, Mail, Terminal, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors">
            <Terminal className="w-4 h-4" />
            <span className="font-mono text-sm">hackxolotl.com</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-zinc-500 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by Alejandro Rodriguez • {currentYear}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vidzza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/alex-rodriguezz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@hackxolotl.com"
              className="text-zinc-500 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
