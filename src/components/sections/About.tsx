"use client";

import { motion } from "framer-motion";

const specialties = [
  "Digital Transformation",
  "AI Process Integration",
  "Digital Twins",
  "Enterprise Architecture",
  "Agile Product Development",
  "Business Model Development",
  "Strategic Planning",
  "Systems Design",
  "Product Licensing",
  "Servant Leadership",
];

const transformations = [
  { era: "SOA", label: "Service-Oriented Architecture" },
  { era: "Multi-Cloud", label: "Cloud Transformation" },
  { era: "Digital Twins", label: "3D Simulation & Industrial IoT" },
  { era: "AI", label: "Agentic AI & Process Integration" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            About
          </p>
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            Built for the next wave.
            <br />
            <span className="text-zinc-500">Every time.</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed text-zinc-400">
              I&apos;m an energetic, self-directed collaborator with over 15
              years of product and program management experience. My specialty is
              digital transformation products and platforms that span business
              functions — and I have delivered in every iteration of enterprise
              technology transformation.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              From SOA to multi-cloud to simulation and digital twins, and now
              AI process integration — I have a track record of helping
              organizations define and deliver progressive value against
              immediate returns and long-term business objectives.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Today, I lead AI programs in the Office of the CTO at F5,
              translating emerging AI and agentic capabilities into enterprise
              strategy and real product outcomes.
            </p>
          </motion.div>

          {/* Transformation timeline + Specialties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Transformation arc */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Every Enterprise Wave
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {transformations.map((t, i) => (
                  <div key={t.era} className="flex items-center gap-2">
                    <div className="text-center">
                      <div className="rounded-lg bg-indigo-500/10 border border-indigo-500/20 px-3 py-2">
                        <span className="text-sm font-bold text-indigo-300">
                          {t.era}
                        </span>
                      </div>
                      <p className="mt-1 text-[10px] text-zinc-600 max-w-[80px]">
                        {t.label}
                      </p>
                    </div>
                    {i < transformations.length - 1 && (
                      <span className="text-zinc-700 mb-4">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Specialties
              </p>
              <div className="flex flex-wrap gap-2">
                {specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-sm text-zinc-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
