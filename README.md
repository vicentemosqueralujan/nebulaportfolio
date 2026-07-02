# NebulaPortfolio

Ultra-premium open-source portfolio template. Apple-inspired SaaS Studio aesthetic. Dual-theme ambient radials, centered inline socials, config-driven content engine.

**Created by [Vicente Mosquera Luján](https://github.com/vicentemosqueralujan)**

---

## Features

- **Apple-inspired SaaS Studio design** — centralized typography, `#f5f5f7` / `#1d1d1f` backgrounds, system font stack, balanced negative space
- **Dual-theme ambient radial glow** — physics-aware halo gradients shift between light and dark modes
- **Dual accent color system** — `accentColorLight` / `accentColorDark` propagated via `--accent-color` CSS custom property; zero component edits needed
- **Centralized Data Engine** — all content, colors, labels, links, and layout flags flow exclusively from `src/config.ts`
- **Engineering Pages system** — `/pages` index + `/pages/[slug]` detail routes with scroll-tracked ToC sidebar
- **Clean markdown processing** — bold-prefixed list items and sub-descriptions flow as continuous inline text, no stray line wraps
- **Responsive single-column project layout** — one project per row at every breakpoint, with left-aligned conditional "View source" / "Read page" links and unified purple-pill tech badges
- **Inline centered socials** — streamlined hero social links, no sidebar clutter
- **Config-driven contact form** — mailto handler with subject/body templates driven by `src/config.ts`
- **Responsive navigation** — hamburger mobile menu, dual-position theme toggle (desktop nav + mobile drawer)
- **Custom cursor** — accent-linked dot cursor on desktop
- **IntersectionObserver scroll animations** — elements fade in on viewport entry
- **FOUC prevention** — inline script in `layout.tsx` applies `.dark` to `<html>` before first paint

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript 5 |
| Deployment | Vercel / Netlify / Cloudflare Pages |

---

## Quick Start

### 1. Clone

```bash
git clone https://github.com/vicentemosqueralujan/nebulaportfolio.git
cd nebulaportfolio
```

### 2. Install

```bash
npm install
```

### 3. Configure your content

Open `src/config.ts` — the **Centralized Data Engine** and single source of truth for all content and theme settings.

| Field | Controls |
|---|---|
| `siteConfig.name` | Full name — nav, hero, footer |
| `siteConfig.title` | Professional title below name |
| `siteConfig.tagline` | Hero one-liner |
| `siteConfig.social` | Email, GitHub, LinkedIn URLs |
| `siteConfig.about.body` | Bio paragraph |
| `siteConfig.about.skills` | Skill badge list |
| `siteConfig.projects` | Project cards grid |
| `siteConfig.experience` | Work history timeline |
| `siteConfig.education` | Education cards |
| `accentColorLight` | `--accent-color` in light mode |
| `accentColorDark` | `--accent-color` in dark mode |

### 4. Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Build for production

```bash
npm run build
npm run start
```

### 6. Deploy

- **Vercel** — push to GitHub, import at vercel.com. Zero config.
- **Netlify** — connect repo; build command `npm run build`, publish dir `.next`.
- **Cloudflare Pages** — use `@cloudflare/next-on-pages` adapter.

---

## Centralized Data Engine

`src/config.ts` is the **only file** that controls content, theme, and layout behavior. No component edits required for any content or color change.

```ts
// Theme — propagates via --accent-color CSS custom property
accentColorLight: "#6366f1",
accentColorDark:  "#a855f7",
```

---

## Engineering Pages

Add entries to `pages` array in `src/config.ts`:

```ts
{
  id: "my-project",
  title: "My Project",
  subtitle: "One-line description shown on the index card.",
  slug: "my-project",          // URL: /pages/my-project
  markdownContent: `
## Overview
Content here. Supports **bold**, \`code\`, ## headings, - lists.
  `,
}
```

Link a project card to its page via `pageSlug` in `projects.items`.

---

## Project Structure

```
src/
  config.ts                    ← Centralized Data Engine. Edit this first.
  app/
    layout.tsx                 ← Root layout: FOUC script, accent CSS var injection
    page.tsx                   ← Home (assembles all sections)
    globals.css                ← Base styles, animations, prose utilities
    pages/
      page.tsx                 ← /pages index
      [slug]/page.tsx          ← /pages/[slug] detail with ToC
  components/
    Nav.tsx                    ← Fixed header: hamburger + dual-position theme toggle
    Hero.tsx                   ← Full-screen hero with centered inline socials
    About.tsx                  ← Bio + skill badges
    Projects.tsx               ← Project cards grid with optional deep-dive links
    Experience.tsx             ← Work history timeline
    Education.tsx              ← Education cards
    Contact.tsx                ← mailto contact form + info card
    Footer.tsx                 ← Responsive footer
    Cursor.tsx                 ← Custom cursor (client)
    ScrollReveal.tsx           ← Scroll animations (client)
    TocNav.tsx                 ← Scroll-tracked ToC (client)
```

---

## Attribution

Template created by **Vicente Mosquera Luján** (https://github.com/vicentemosqueralujan).
Per the [LICENSE](./LICENSE), retain the footer attribution when deploying publicly.

## License

MIT with Mandatory Attribution — see [LICENSE](./LICENSE).
