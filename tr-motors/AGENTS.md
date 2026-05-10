# tr-motors

Single Next.js App Router landing page for a detailing shop (Montevideo, Uruguay).

## Setup

```bash
npm install        # install deps (package-lock.json present)
npm run dev        # dev server at http://localhost:3000
npm run build      # production build
npm run lint       # ESLint (eslint.config.mjs)
```

## Stack

- Next.js 16.2.6 / React 19.2.4 / TypeScript 5 (strict)
- Tailwind CSS 4 via `@import "tailwindcss"` in `globals.css` (no legacy `@tailwind` directives)
- PostCSS with `@tailwindcss/postcss` plugin
- Inline styles + CSS custom properties throughout (no CSS modules, no CSS-in-JS)
- framer-motion 12 + lucide-react for animations/icons
- `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`

## Project structure

```
app/
  layout.tsx           # root layout (metadata: es lang)
  page.tsx             # single-page entrypoint
  globals.css          # global styles, Tailwind import, CSS vars
  components/
    layout/            # Navbar, Footer
    sections/          # Hero, Services, Process, Gallery, Booking, Contact
public/                # boilerplate SVGs (from create-next-app)
```

## Conventions

- `@/*` path alias maps to `tr-motors/` root (e.g., `@/app/components/...`)
- Interactive components use `'use client'` directive
- No test framework or tests exist
- No CI workflows, no Docker, no Vercel config
- `.env*` files are gitignored — create `.env.local` for env vars
- Package manager is npm (lockfile: `package-lock.json`)
