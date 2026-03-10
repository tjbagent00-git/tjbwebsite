# TJ Bush Portfolio — Claude Code Instructions

## Project Overview
Personal portfolio and AI projects showcase site for TJ Bush — Senior TPM in the AI Center of Excellence, Office of the CTO at F5 Networks.

## Stack
- **Next.js 16** (App Router, `/src/app` directory)
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4**
- **Framer Motion** (for subtle animations — hover states, scroll reveals only)
- **Deployment:** Vercel

## Project Structure
```
src/
  app/
    layout.tsx       # Root layout, fonts, metadata
    page.tsx         # Home page (all sections)
    globals.css      # Global styles, Tailwind base
  components/
    sections/        # Page sections (Hero, About, Experience, Projects, Contact)
    ui/              # Reusable UI primitives (Button, Card, Badge, etc.)
```

## Design System
- **Theme:** Dark by default. Background: `#0a0a0a` or `zinc-950`. Text: `zinc-100`.
- **Accent:** Single accent color — use `indigo-400` / `indigo-500` for highlights.
- **Typography:** Clean, high-contrast. Use `font-sans` (Inter or system). Large bold headings.
- **Glass cards:** `bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl`
- **Subtle animations only:** No heavy parallax, no preloaders, no full-page transitions.
- **Spacing:** Generous whitespace. Sections separated by at least `py-24`.

## Next.js 16 API Notes
IMPORTANT: Prefer retrieval-led reasoning. Next.js 16 introduces APIs not in older training data:
- `'use cache'` directive — replaces `fetch` cache options for caching in Server Components
- `connection()` — explicitly marks dynamic rendering boundary
- `forbidden()` / `unauthorized()` — new response helpers
- `after()` — run code after response is sent
- `cacheLife()` / `cacheTag()` / `revalidateTag()` — cache control
- `cookies()` / `headers()` are now async in Next.js 15+
- Server Actions use `'use server'` directive
- Client Components use `'use client'` directive
- App Router: layouts, pages, loading, error are all in `/src/app/`
- Metadata: export `metadata` or `generateMetadata` from page/layout files
- Images: use `next/image` with `fill` or explicit `width`/`height`
- Fonts: use `next/font/google`

## Content & Sections
The site has these sections (all on the home page, single scroll):
1. **Hero** — Name, title, value proposition, CTA
2. **About** — 1-paragraph narrative, the transformation story (SOA → cloud → digital twins → AI)
3. **Experience** — Career timeline, key achievements
4. **AI Projects** — Portfolio grid (starts empty/placeholder, grows over time)
5. **Contact** — LinkedIn + email

## TJ's Career (source of truth for content)
- **Current:** Technical Program Manager, AI CoE & AI Program, Office of the CTO — F5 Networks (2023–present)
- **Unity Technologies** (2021–2023): Sr. PM — 3D Spatial Co-simulation & Operational Digital Twins
- **F5 Networks** (2018–2021): Sr. PM — Product Licensing & GTM Systems. Drove $2B subscription transition → 350% y/y software revenue growth.
- **F5 Networks** (2016–2018): PM — Licensing
- **F5 Networks** (2014–2016): Marketing Program Manager
- **F5 Networks** (2013–2014): IT Project Manager III
- **Liberty Mutual Group** (2009–2013): IT Project Lead
- **Safeco Insurance** (2006–2009): Sr. IT Business Systems Analyst
- **Education:** MBA, University of Washington (2016, GPA 3.8) | BA Information Systems + BA Marketing, University of Idaho (2004)

## Code Conventions
- Functional components only, no class components
- Named exports for components, default exports for pages
- TypeScript interfaces over `type` aliases for props
- Tailwind for all styling — no CSS modules, no inline styles
- `cn()` utility (clsx + tailwind-merge) for conditional classes
- No `any` types
- Server Components by default; add `'use client'` only when needed (event handlers, hooks, browser APIs)
