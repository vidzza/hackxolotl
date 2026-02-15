"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X } from "lucide-react";

interface Command {
  input: string;
  output: string | React.ReactNode;
}

const AVAILABLE_COMMANDS = {
  help: "Show available commands",
  about: "Display information about me",
  skills: "List technical skills",
  projects: "Show featured projects",
  contact: "Display contact information",
  resume: "Download my resume",
  clear: "Clear the terminal",
  exit: "Close the terminal",
};

export default function TerminalEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Open terminal with 't' key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "t" && e.ctrlKey && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  const handleCommand = (input: string) => {
    const command = input.toLowerCase().trim();
    let output: string | React.ReactNode = "";

    switch (command) {
      case "help":
        output = (
          <div className="space-y-1">
            <p className="text-emerald-400">Available commands:</p>
            {Object.entries(AVAILABLE_COMMANDS).map(([cmd, desc]) => (
              <div key={cmd} className="flex gap-4">
                <span className="text-cyan-400 w-20">{cmd}</span>
                <span className="text-zinc-400">- {desc}</span>
              </div>
            ))}
          </div>
        );
        break;
      case "about":
        output = (
          <div className="space-y-2">
            <p className="text-emerald-400">Alejandro Rodriguez</p>
            <p className="text-zinc-300">Cybersecurity Researcher & AI Engineer</p>
            <p className="text-zinc-400">MS Computer Science @ UTEP</p>
            <p className="text-zinc-500">El Paso, Texas, USA</p>
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="space-y-2">
            <p className="text-emerald-400 mb-2">Technical Skills:</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-cyan-400">Languages:</p>
                <p className="text-zinc-400">Python, C/C++, Bash, PowerShell</p>
              </div>
              <div>
                <p className="text-cyan-400">Security:</p>
                <p className="text-zinc-400">Sliver, Havoc, Metasploit, Kali</p>
              </div>
              <div>
                <p className="text-cyan-400">Cloud:</p>
                <p className="text-zinc-400">AWS (IAM/S3/EC2), Docker</p>
              </div>
              <div>
                <p className="text-cyan-400">AI/ML:</p>
                <p className="text-zinc-400">PyTorch, TensorFlow, LangChain</p>
              </div>
            </div>
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="space-y-2">
            <p className="text-emerald-400 mb-2">Featured Projects:</p>
            <ul className="space-y-1 text-zinc-300">
              <li>• AI-Powered Threat Detection System</li>
              <li>• Multi-Agent Security Automation</li>
              <li>• Cloud Security Scanner (AWS)</li>
              <li>• AV Evasion Framework</li>
            </ul>
          </div>
        );
        break;
      case "contact":
        output = (
          <div className="space-y-2">
            <p className="text-emerald-400">Contact Information:</p>
            <p className="text-zinc-300">Email: contact@hackxolotl.com</p>
            <p className="text-zinc-300">GitHub: github.com/vidzza</p>
            <p className="text-zinc-300">LinkedIn: linkedin.com/in/alex-rodriguezz</p>
            <p className="text-zinc-400 mt-2">Open to opportunities!</p>
          </div>
        );
        break;
      case "resume":
        output = (
          <div>
            <p className="text-emerald-400">Downloading resume...</p>
            <p className="text-zinc-400">In a real implementation, this would trigger a download.</p>
          </div>
        );
        break;
      case "clear":
        setCommands([]);
        return;
      case "exit":
        setIsOpen(false);
        return;
      case "":
        output = "";
        break;
      default:
        output = (
          <span className="text-red-400">
            Command not found: {command}. Type &apos;help&apos; for available commands.
          </span>
        );
    }

    setCommands([...commands, { input, output }]);
    setCommandHistory([...commandHistory, input]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      handleCommand(currentInput);
      setCurrentInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput("");
      }
    }
  };

  return (
    <>
      {/* Terminal Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-emerald-400 hover:bg-zinc-800 hover:border-emerald-500/50 transition-all shadow-lg"
        title="Press Ctrl+T to open terminal"
      >
        <Terminal className="w-6 h-6" />
      </motion.button>

      {/* Terminal Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl terminal-window overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="terminal-header">
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
                <span className="ml-4 text-sm text-zinc-500 font-mono">hackxolotl@terminal:~</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="ml-auto text-zinc-500 hover:text-zinc-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Terminal Content */}
              <div
                ref={terminalRef}
                className="h-96 p-4 font-mono text-sm overflow-y-auto bg-[#0d1117]"
              >
                {/* Welcome Message */}
                {commands.length === 0 && (
                  <div className="mb-4 text-zinc-400">
                    <p className="text-emerald-400">Welcome to my interactive terminal!</p>
                    <p>Type &apos;help&apos; to see available commands.</p>
                    <p className="text-zinc-600 mt-2">Tip: Use Ctrl+T to toggle this terminal from anywhere.</p>
                  </div>
                )}

                {/* Command History */}
                {commands.map((cmd, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <span className="text-emerald-500">➜</span>
                      <span className="text-cyan-500">~</span>
                      <span className="text-zinc-300">{cmd.input}</span>
                    </div>
                    {cmd.output && (
                      <div className="mt-2 ml-4 text-zinc-300">{cmd.output}</div>
                    )}
                  </div>
                ))}

                {/* Input Line */}
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-cyan-500">~</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-zinc-300 font-mono"
                    autoComplete="off"
                    spellCheck={false}
                  />
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
