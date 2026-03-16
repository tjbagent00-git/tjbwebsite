"use client";

import { motion } from "framer-motion";

interface FeaturedRole {
  title: string;
  company: string;
  period: string;
  current?: boolean;
  narrative: string;
  metric?: { value: string; label: string };
}

interface EarlierRole {
  title: string;
  company: string;
  period: string;
}

const featuredRoles: FeaturedRole[] = [
  {
    title: "Sr. Product Manager — AI Center of Excellence",
    company: "F5 Networks, Office of the CTO",
    period: "2023 — Present",
    current: true,
    narrative:
      "Building the operational infrastructure for enterprise AI adoption in the Office of the CTO — data telemetry pipelines, the AI Data Fabric platform, AI governance and compliance requirements, and prototype-to-product integration paths. Responsible for the organizational charter, quarterly planning across engineering teams, and creating the operational systems that move AI from research to deployable product.",
  },
  {
    title: "Sr. Product Manager — Digital Twins & Spatial Co-simulation",
    company: "Unity Technologies",
    period: "2021 — 2023",
    narrative:
      "Shipped a 0-to-1 product that bridged Unity's game engine into industrial simulation — creating a new product category for testing spatial navigation software in digital twin environments. Defined the market strategy, customer experience, and go-to-market from the ground up alongside early enterprise customers.",
    metric: { value: "0→1", label: "New product category" },
  },
  {
    title: "Sr. Product Manager — Product Licensing & GTM Systems",
    company: "F5 Networks",
    period: "2018 — 2021",
    narrative:
      "Drove the business model transformation of a $2B company from perpetual to subscription — 350% year-over-year software revenue growth, 30% of total revenue converted to subscription. Cut new SKU creation time from 120 days to 5 hours. Defined the licensing platform architecture and led integration across sales, finance, legal, operations, and the full product portfolio.",
    metric: { value: "350%", label: "Y/Y software revenue growth" },
  },
];

const earlierRoles: EarlierRole[] = [
  { title: "Product Manager — Licensing", company: "F5 Networks", period: "2016–2018" },
  { title: "Marketing Program Manager", company: "F5 Networks", period: "2014–2016" },
  { title: "IT Project Manager III", company: "F5 Networks", period: "2013–2014" },
  { title: "IT Project Lead", company: "Liberty Mutual Group", period: "2009–2013" },
  { title: "Sr. IT Business Systems Analyst", company: "Safeco Insurance", period: "2006–2009" },
];

const education = [
  {
    degree: "Master of Business Administration",
    school: "University of Washington",
    year: "2016",
    detail: "GPA 3.8 · Organizational Leadership & Global Business Strategy · Consulting engagements in Shanghai, Buenos Aires, and Santiago",
  },
  {
    degree: "BA Information Systems · BA Marketing",
    school: "University of Idaho",
    year: "2004",
    detail: "Dual degree",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Experience
          </p>
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            Signature work.
          </h2>
        </motion.div>

        {/* Featured roles */}
        <div className="flex flex-col gap-6 mb-16">
          {featuredRoles.map((role, i) => (
            <motion.div
              key={`${role.company}-${role.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-xl border p-6 sm:p-8 ${
                role.current
                  ? "border-indigo-500/30 bg-indigo-500/5"
                  : "border-white/8 bg-white/[0.03]"
              }`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-zinc-100 leading-snug">
                      {role.title}
                    </h3>
                    {role.current && (
                      <span className="rounded-full bg-indigo-500/20 border border-indigo-500/30 px-2 py-0.5 text-xs font-medium text-indigo-300">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-indigo-300 mb-1">{role.company}</p>
                  <p className="text-sm text-zinc-600 mb-4">{role.period}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{role.narrative}</p>
                </div>
                {role.metric && (
                  <div className="sm:text-right sm:ml-8 sm:shrink-0">
                    <p className="text-4xl font-bold text-zinc-100 leading-none">
                      {role.metric.value}
                    </p>
                    <p className="mt-1 text-xs text-zinc-600 sm:max-w-[120px] sm:ml-auto leading-snug">
                      {role.metric.label}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Earlier career */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            Earlier career
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {earlierRoles.map((role) => (
              <div
                key={`${role.title}-${role.period}`}
                className="flex items-baseline justify-between gap-4 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-zinc-300 truncate">{role.title}</p>
                  <p className="text-xs text-zinc-600 mt-0.5">{role.company}</p>
                </div>
                <span className="text-xs text-zinc-700 shrink-0">{role.period}</span>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <a
              href="https://www.linkedin.com/in/tjbush/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Full career history on LinkedIn →
            </a>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            Education
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((e) => (
              <div
                key={e.degree}
                className="rounded-xl border border-white/8 bg-white/[0.03] p-5"
              >
                <p className="text-sm font-semibold text-zinc-200">{e.degree}</p>
                <p className="text-sm text-indigo-300 mt-0.5">
                  {e.school} · {e.year}
                </p>
                <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{e.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
