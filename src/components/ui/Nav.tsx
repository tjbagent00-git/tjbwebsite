"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.8]);

  return (
    <motion.header
      style={{
        borderColor: borderOpacity.get()
          ? `rgba(255,255,255,${borderOpacity.get() * 0.08})`
          : "transparent",
      }}
      className="fixed top-0 z-50 w-full border-b"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-zinc-950 backdrop-blur-md"
      />
      <nav className="relative mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="text-sm font-bold text-zinc-100 tracking-tight">
          TJ Bush
        </a>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
