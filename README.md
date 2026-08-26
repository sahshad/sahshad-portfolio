# Sahshad Portfolio

A personal portfolio site for Muhammed Sahshad, Full-Stack Developer — built with Next.js and Tailwind CSS, featuring animated UI, light/dark theming, and a fully responsive layout.

## Tech Stack

| Category | Technology |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | [Motion](https://motion.dev/) (Framer Motion) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) — light/dark mode with system-preference default |
| Icons | [Lucide](https://lucide.dev/) |
| Fonts | Montserrat, Open Sans, Playfair Display (`next/font/google`) |

## Prerequisites

- Node.js 18.18 or later
- npm

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server (Turbopack) |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/            Root layout, global styles, and routes
├── components/
│   ├── home/       Navbar, hero section, skills highlight
│   ├── about/      About section (bio, journey, tech stack, approach)
│   ├── projects/   Projects section
│   ├── contact/    Contact section
│   ├── layout/     Footer
│   ├── theme/      Theme provider and toggle
│   ├── ui/         Shared UI primitives (buttons, cards, BorderGlow, etc.)
│   └── animate-ui/ Text and animation components
├── data/           Content for each section (projects, skills, timeline, site info, etc.)
└── lib/            Hooks and helper utilities
```

## Content

Section content (projects, skills, timeline, tech stack, site info) is kept in typed data files under `src/data/`, separate from the components that render it — update the data there without touching component code.

## Assets

Static assets — hero image, logos, and résumé — are served from `public/`.

## License

This project is personal and not licensed for reuse.
