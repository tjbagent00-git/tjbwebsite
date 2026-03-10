"use client";

import { motion } from "framer-motion";

interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  current?: boolean;
}

const roles: Role[] = [
  {
    title: "Technical Program Manager — AI CoE & AI Program",
    company: "F5 Networks",
    location: "Seattle, WA",
    period: "2023 — Present",
    current: true,
    highlights: [
      "Leading AI programs in the Office of the CTO, coordinating enterprise AI strategy and execution across F5.",
      "Driving adoption of agentic AI and process integration initiatives across product and engineering organizations.",
    ],
  },
  {
    title: "Sr. Product Manager — 3D Spatial Co-simulation & Operational Digital Twins",
    company: "Unity Technologies",
    location: "Seattle, WA",
    period: "2021 — 2023",
    highlights: [
      "Defined customer experience, value proposition, and market strategy to bridge Unity's game engine into an industrial co-simulation product for testing spatial navigation software in 3D environments.",
      "Led 0-to-1 product release working directly with early customers and Unity dev teams to develop and ship the alpha product.",
      "Developed technology and market analysis around digital twins, real-time 3D content production, and enterprise operational process integrations that informed product strategy.",
      "Drove go-to-market motions across sales, marketing, customer commercial experience, and pricing & packaging.",
    ],
  },
  {
    title: "Sr. Product Manager — Product Licensing & Go-to-Market Systems",
    company: "F5 Networks",
    location: "Seattle, WA",
    period: "2018 — 2021",
    highlights: [
      "Drove the business model definition and architectural change of a $2B company in its transition to subscription and utility-based software — directly attributed to 350% y/y growth in software subscription revenue and 30% of company revenues becoming subscription-based.",
      "Defined and developed cloud-based licensing & device management platform architecture and its integration with the full product portfolio (software, hardware, SaaS, services).",
      "Defined and delivered 3+ new licensing programs and the business architecture necessary to bring them to market.",
      "Led enterprise-wide technical solution design & delivery through product and enterprise architects across sales, product, IT, legal, finance, services, and channel partners.",
    ],
  },
  {
    title: "Product Manager — Licensing",
    company: "F5 Networks",
    location: "Seattle, WA",
    period: "2016 — 2018",
    highlights: [
      "Developed new consumption-based software licensing business models and built the business and technical capabilities necessary to transact that business.",
    ],
  },
  {
    title: "Marketing Program Manager",
    company: "F5 Networks",
    location: "Seattle, WA",
    period: "2014 — 2016",
    highlights: [
      "Delivered multiple product go-to-market launches and marketing programs supporting over $1B in annual revenue.",
      "Provided market trend analysis around hybrid cloud services and bi-modal IT operational shifts that drove corporate strategy and product roadmap planning.",
      "Developed Marketing department program & portfolio management methodology for all marketing efforts, content production, and resource capacity planning.",
    ],
  },
  {
    title: "IT Project Manager III",
    company: "F5 Networks",
    location: "Seattle, WA",
    period: "2013 — 2014",
    highlights: [
      "Led multiple concurrent projects across Sales Operations, HR, Product Development, and Information Security.",
      "Led system design and application selection for a new sales CPQ tool that cut time-to-market and sales quoting time in half.",
      "Led the corporate-wide effort to define global customer data information security risk, working with legal counsel and system architects to design a scalable data privacy solution.",
    ],
  },
  {
    title: "IT Project Lead",
    company: "Liberty Mutual Group",
    location: "Seattle, WA",
    period: "2009 — 2013",
    highlights: [
      "Led global cross-functional project teams of 10–25 people across multi-million dollar programs including data migrations, application architectural designs, and business process automations.",
      "Merged three Project Management Offices and methodologies into one uniform System Development Lifecycle.",
      "Led a team of architects in developing a technical roadmap to migrate critical customer information from legacy to target systems without impacting business operations.",
    ],
  },
  {
    title: "Sr. IT Business Systems Analyst",
    company: "Safeco Insurance",
    location: "Seattle, WA",
    period: "2006 — 2009",
    highlights: [
      "Worked with CIO to launch the first IT Project Management Office for a $60M transformational IT program.",
      "Led initiative to remove personally identifiable information stored in insecure environments across infrastructure systems.",
    ],
  },
];

const education = [
  {
    degree: "Master of Business Administration",
    school: "University of Washington",
    location: "Seattle, WA",
    year: "2016",
    detail: "GPA 3.8 · Organizational Leadership & Global Business Strategy · MBA consulting engagements in Shanghai, Buenos Aires, and Santiago",
  },
  {
    degree: "BA Information Systems · BA Marketing",
    school: "University of Idaho",
    location: "Moscow, ID",
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
            15+ years delivering
            <br />
            <span className="text-zinc-500">enterprise transformation.</span>
          </h2>
        </motion.div>

        {/* Roles */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-indigo-500/50 via-zinc-700/50 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {roles.map((role, i) => (
              <motion.div
                key={`${role.company}-${role.period}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="md:pl-8 relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[-4.5px] top-1.5 hidden md:block h-2.5 w-2.5 rounded-full border-2 ${
                    role.current
                      ? "border-indigo-400 bg-indigo-500"
                      : "border-zinc-600 bg-zinc-900"
                  }`}
                />

                <div
                  className={`rounded-xl border p-6 transition-colors ${
                    role.current
                      ? "border-indigo-500/30 bg-indigo-500/5"
                      : "border-white/8 bg-white/[0.03] hover:bg-white/5"
                  }`}
                >
                  <div className="flex flex-col gap-1 mb-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold text-zinc-100 leading-snug">
                          {role.title}
                        </h3>
                        {role.current && (
                          <span className="rounded-full bg-indigo-500/20 border border-indigo-500/30 px-2 py-0.5 text-xs font-medium text-indigo-300">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-indigo-300 mt-0.5">
                        {role.company} · {role.location}
                      </p>
                    </div>
                    <span className="text-sm text-zinc-500 shrink-0 mt-1 sm:mt-0">
                      {role.period}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {role.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2 text-sm text-zinc-400 leading-relaxed">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-500">
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
