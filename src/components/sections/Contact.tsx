"use client";

import { motion } from "framer-motion";

const engagements = [
  {
    label: "AI Strategy & Advisory",
    description:
      "Enterprise AI program design, agentic system evaluation, and translating AI capabilities into product and business outcomes.",
  },
  {
    label: "Speaking",
    description:
      "Executive and practitioner audiences on AI program management, enterprise AI adoption, and leading transformation at inflection points.",
  },
  {
    label: "Board & Executive Conversations",
    description:
      "Strategic counsel on AI readiness, technology positioning, and building the organizational capability to execute on AI.",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Contact
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            Start a conversation.
          </h2>
          <p className="mb-12 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            I take limited conversations on AI strategy, enterprise transformation, and board
            advisory. If you&apos;re building something serious at the intersection of AI and
            the enterprise — I&apos;d like to hear from you.
          </p>
        </motion.div>

        {/* Engagement modes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 sm:grid-cols-3 mb-12"
        >
          {engagements.map((e) => (
            <div
              key={e.label}
              className="rounded-xl border border-white/8 bg-white/[0.03] p-5"
            >
              <p className="text-sm font-semibold text-zinc-200 mb-2">{e.label}</p>
              <p className="text-sm text-zinc-500 leading-relaxed">{e.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-start gap-4 sm:flex-row"
        >
          <a
            href="https://www.linkedin.com/in/tjbush/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-indigo-600 px-8 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
          <a
            href="mailto:tjbush117@gmail.com"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-zinc-700 px-8 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Send an email
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center gap-2 text-center text-sm text-zinc-700"
        >
          <p>© {new Date().getFullYear()} TJ Bush. Built with Next.js & deployed on Vercel.</p>
        </motion.div>
      </div>
    </section>
  );
}
