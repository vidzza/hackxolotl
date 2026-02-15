"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "Building AI Agents for Security Automation",
    excerpt: "How I built a multi-agent system that autonomously performs vulnerability assessments and generates reports using LangChain and CrewAI.",
    date: "Jan 10, 2025",
    readTime: "8 min read",
    category: "AI/ML",
    slug: "ai-agents-security-automation",
  },
  {
    title: "Modern AV Evasion Techniques: A Deep Dive",
    excerpt: "Exploring current methods for bypassing antivirus solutions, from process injection to AMSI bypass and behavioral analysis evasion.",
    date: "Dec 15, 2024",
    readTime: "12 min read",
    category: "Security Research",
    slug: "av-evasion-techniques",
  },
  {
    title: "Cloud Security Misconfigurations in AWS",
    excerpt: "Common IAM, S3, and EC2 misconfigurations I encounter during assessments and how to fix them with Infrastructure as Code.",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    category: "Cloud Security",
    slug: "aws-security-misconfigurations",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#0a0a0a]">
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
            <span className="text-emerald-500 font-mono text-sm">05.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">Latest Articles</h2>
            <div className="flex-1 h-px bg-zinc-800 max-w-xs" />
          </div>
          <p className="text-zinc-400 max-w-2xl">
            Thoughts on cybersecurity, AI/ML, and software engineering. I write about what I&apos;m learning 
            and building.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="terminal-window p-6 group hover:border-emerald-500/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4 text-sm">
                <span className="px-3 py-1 text-xs font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 rounded">
                  {post.category}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                <a href={`/blog/${post.slug}`}>
                  {post.title}
                </a>
              </h3>

              <p className="text-zinc-400 text-sm mb-4 line-clamp-3 flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-3 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <a
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Read
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/10 transition-all"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
