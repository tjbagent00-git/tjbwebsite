"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "$2B+", label: "Revenue transformation driven" },
  { value: "350%", label: "Y/Y software revenue growth" },
  { value: "0→1", label: "New product category launched" },
  { value: "15+", label: "Years enterprise leadership" },
];

const employers = ["F5 Networks", "Unity Technologies", "Liberty Mutual Group"];

export default function Metrics() {
  return (
    <section className="border-y border-white/5 py-16 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Stats row */}
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-4 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-zinc-50 tracking-tight leading-none">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-zinc-500 leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Employer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-700">
            Career at
          </span>
          {employers.map((name, i) => (
            <span key={name} className="flex items-center gap-3">
              {i > 0 && <span className="text-zinc-800">·</span>}
              <span className="text-sm font-medium text-zinc-500">{name}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
