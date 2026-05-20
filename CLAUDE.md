# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (Next.js + Turbopack)
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

No test suite exists.

## Architecture

Single-page Next.js 16 app (React 19, TypeScript, Tailwind v4). The entire site is one client component: `app/page.tsx`.

**Routing / layout**
- `app/layout.tsx` — root layout: sets metadata, loads Google Fonts (Geist, Geist Mono, Cormorant Garamond), injects Vercel Analytics
- `app/page.tsx` — the whole site; no other routes exist

**`app/page.tsx` structure**
- Four boolean state flags (`isVisible`, `showProjects`, `showAbout`, `showContact`) drive all interactivity
- Layout: split-screen — left/top is cream content area, right/bottom is an animated `Dithering` shader from `@paper-design/shaders-react`
  - Desktop (`md:`): content left half, shader right half (`w-1/2`)
  - Mobile: content top portion, shader bottom 44% (`h-[44%]`)
- Three shadcn `Dialog` components (Projects, About, Contact) opened by buttons in the content area and footer
- Fixed footer repeats the same three dialog triggers

**Styling**
- Tailwind v4 — configured entirely in `app/globals.css` via `@import "tailwindcss"` and `@theme inline {}` (no `tailwind.config.*` file)
- Design tokens (colours, fonts, radius) are CSS custom properties on `:root` and `.dark` in `app/globals.css`
- Colour palette: cream background `#f7f3ea`, dark plum `#352E37`, slate muted `#8691A1`
- Font pairing: Geist (sans/body) + Cormorant Garamond (serif/headings, used as `font-serif`)
- Dark mode variables are defined but no theme toggle is wired up

**Components**
- `components/ui/` — ~40 shadcn/ui components (New York style). Only `Button` and `Dialog` are currently used by the page
- `components/theme-provider.tsx` — next-themes wrapper, not currently used in `layout.tsx`
- `lib/utils.ts` — exports `cn()` (clsx + tailwind-merge)

**Adding shadcn components**
```bash
npx shadcn@latest add <component>
```
Config is in `components.json`; components land in `components/ui/`.

**Key dependency**
- `@paper-design/shaders-react` — provides the `<Dithering>` WebGL shader component used as the animated background

**Build note**
`next.config.mjs` has `typescript.ignoreBuildErrors: true`, so TypeScript errors won't block builds.
