"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 h-[300px] w-[300px] rounded-full bg-indigo-800/8 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-5xl w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              AI Center of Excellence · F5 Networks · Office of the CTO
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 text-6xl font-bold tracking-tight text-zinc-50 sm:text-7xl"
            >
              TJ Bush
            </motion.h1>

            {/* Value prop */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-8 text-xl leading-relaxed text-zinc-400"
            >
              I&apos;ve driven enterprise transformation at every inflection point —
              cloud, digital twins, now AI.{" "}
              <span className="text-zinc-200">
                I don&apos;t just follow the wave. I help organizations catch it
                before it breaks.
              </span>
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-full bg-indigo-600 px-8 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
              >
                Let&apos;s talk
              </a>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
              {/* Glow behind photo */}
              <div className="absolute inset-4 rounded-full bg-indigo-500/15 blur-2xl" />
              {/* Photo */}
              <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-white/10">
                <Image
                  src="/headshot.png"
                  alt="TJ Bush"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-zinc-600"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-5 w-px bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
