"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {

  return (
    <section id="contact" className="py-24 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-emerald-500 font-mono text-sm">06.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">Get In Touch</h2>
            <span className="text-emerald-500 font-mono text-sm">06.</span>
          </div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            I&apos;m currently open for opportunities in cybersecurity, AI/ML, and software engineering. 
            Whether you have a question, want to collaborate, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="terminal-window p-6">
              <h3 className="text-xl font-semibold text-zinc-100 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Email</p>
                    <a 
                      href="mailto:contact@hackxolotl.com" 
                      className="text-zinc-100 hover:text-emerald-400 transition-colors"
                    >
                      contact@hackxolotl.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Location</p>
                    <p className="text-zinc-100">El Paso, Texas, USA</p>
                    <p className="text-sm text-zinc-500 mt-1">Open to remote & relocation</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <p className="text-sm text-zinc-500 mb-4">Connect with me:</p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/vidzza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alex-rodriguezz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* 
              FORMSPREE SETUP:
              1. Go to https://formspree.io/register
              2. Create account and verify email
              3. Click "New Project" → "Create Form"
              4. Copy the form endpoint URL (looks like: https://formspree.io/f/xnqkvnyp)
              5. Replace YOUR_FORMSPREE_ENDPOINT below with your actual endpoint
              6. Optional: Add ?_next=https://hackxolotl.com/?thanks=true for custom redirect
            */}
            <form 
              action="https://formspree.io/f/mjgewapq" 
              method="POST"
              className="terminal-window p-6 space-y-6"
            >
              {/* Optional: Redirect back to your site after submission */}
              <input type="hidden" name="_next" value="https://hackxolotl.com/#contact" />
              
              {/* Optional: Subject line for email */}
              <input type="hidden" name="_subject" value="New contact from hackxolotl.com" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all hover:scale-[1.02] glow"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
              
              <p className="text-xs text-zinc-500 text-center">
                Powered by Formspree
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
