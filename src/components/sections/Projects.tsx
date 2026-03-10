"use client";

import { motion } from "framer-motion";

const upcomingProjects = [
  {
    icon: "🤖",
    title: "Enterprise AI Readiness Agent",
    description:
      "An agentic system that evaluates an organization's AI readiness across people, process, and technology — and generates a prioritized roadmap.",
  },
  {
    icon: "🔄",
    title: "Agentic Workflow Automation",
    description:
      "Multi-agent orchestration for enterprise business processes — demonstrating real tool use, handoffs, and failure handling at production scale.",
  },
  {
    icon: "📊",
    title: "AI Product Strategy Assistant",
    description:
      "An AI-powered tool that helps product teams frame business cases for AI investments using market data, competitive signals, and outcome modeling.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            AI Projects
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            What I&apos;m building.
          </h2>
          <p className="mb-12 text-lg text-zinc-400 max-w-2xl">
            Each project is grounded in a real business problem — built with
            production thinking, not just proof-of-concept demos.
          </p>
        </motion.div>

        {/* Upcoming projects grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {upcomingProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-dashed border-zinc-700 bg-zinc-900/30 p-6"
            >
              <div className="mb-3 inline-flex rounded-lg bg-indigo-500/10 border border-indigo-500/20 p-2">
                <span className="text-lg">{project.icon}</span>
              </div>
              <h3 className="text-sm font-semibold text-zinc-200 mb-1">{project.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{project.description}</p>
              <span className="mt-3 inline-block rounded-full bg-zinc-800 border border-zinc-700 px-2.5 py-0.5 text-xs text-zinc-500">
                In progress
              </span>
            </motion.div>
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="https://github.com/tjbagent00-git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Follow along on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
