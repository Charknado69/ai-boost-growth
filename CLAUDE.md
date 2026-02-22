# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Vyzora.ai** — A single-page marketing website for a B2B AEO (Answer Engine Optimization) / GEO (Generative Engine Optimization) agency. The primary conversion goal is getting visitors to submit their email for a free AI visibility audit. Built with Lovable (AI app builder) using React + Vite + TypeScript + Tailwind + shadcn/ui.

**GitHub:** `Charknado69/ai-boost-growth`
**Deploy:** Lovable auto-deploys on every push to `main`.

## Commands

```bash
npm run dev        # Local dev server at localhost:8080
npm run build      # Production build
npm run lint       # ESLint
npm run test       # Vitest (run once)
npm run test:watch # Vitest (watch mode)
npm run preview    # Preview production build locally
```

## Pushing Changes to Lovable

Lovable syncs from GitHub. To deploy any changes:

```bash
cd /tmp/ai-boost-growth
git add <specific-files>
git commit -m "Your message"
GIT_TERMINAL_PROMPT=0 git push https://<TOKEN>@github.com/Charknado69/ai-boost-growth.git main
```

The user provides a GitHub Personal Access Token when pushing. Do not store tokens in files.

## Architecture

### File Structure

```
src/
├── pages/
│   └── Index.tsx              # Page composition — imports and orders all sections
├── components/
│   ├── EmailCapture.tsx        # Reusable email + CTA form (used in every section)
│   ├── GlitchButtonText.tsx    # Glitch text animation on buttons
│   ├── MatrixRain.tsx          # Canvas matrix rain background (hero only)
│   ├── Navbar.tsx              # Sticky nav with mobile hamburger
│   ├── NavLink.tsx             # Anchor scroll nav links
│   └── sections/              # One file per page section
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── ServicesSection.tsx
│       ├── QuotesSection.tsx      # Verified research stats (NOT testimonials)
│       ├── AuditPreviewClean.tsx  # LIVE: Conversion-focused audit preview (Version B)
│       ├── AuditPreviewSection.tsx # ARCHIVED: Terminal-style audit preview (Version A)
│       ├── WhyNowSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── TestimonialsSection.tsx # PLACEHOLDER — not yet wired into Index.tsx
│       ├── FinalCTASection.tsx
│       └── Footer.tsx
└── index.css                  # CSS variables, custom classes, grain + scanline overlays
```

### Page Composition

`Index.tsx` is the only real page (single-page app). Sections are imported and ordered here. To add, remove, or reorder a section, edit `Index.tsx` only — don't edit section files.

### Data Pattern

Each section component defines its own data as a hardcoded array near the top of the file, then maps over it in JSX. There is no CMS, API, or shared data store. To update copy, find the data array in the relevant section file.

## Design System

### Fonts (tailwind.config.ts)
- `font-display` → Playfair Display (headings)
- `font-mono` → JetBrains Mono (terminal/code labels, stats, CTAs)
- `font-sans` → Inter (body)

### Color Palette (index.css CSS variables)
Dark theme only. All values are HSL:
- `--background`: Deep dark green-tinted black (`150 15% 4%`)
- `--primary`: Electric green (`142 70% 45%`) — the signature accent
- `--foreground`: Near-white (`0 0% 93%`)
- `--muted-foreground`: Dim green-grey for secondary text

### Custom CSS Classes (index.css)
- `crt-glow` — Multi-layer green text-shadow; use on `font-mono` labels and accent spans
- `matrix-heading-glow` — Radial gradient aura behind h2 headings; use on `<h2>` elements
- `terminal-border` — Subtle green box-shadow border; use on card/input containers
- `terminal-text` — Green mono text with glow; for inline code-style labels

### Animation Pattern
All scroll-triggered animations use Framer Motion with this standard pattern:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, delay: i * 0.1 }}
>
```
Stagger children by passing `i * 0.1` as the delay.

### Section Layout Convention
Every section follows: `<section className="py-32 px-6">` → `<div className="container max-w-5xl mx-auto">`. Max widths vary by section (4xl, 5xl, 6xl).

## Key Components

### EmailCapture
The primary conversion component. Used in every section's CTA.
```tsx
<EmailCapture buttonText=">>> Get My Free Audit" />
```
Currently shows a toast on submit. **No backend integration yet** — form submissions go nowhere. Wire up to a real email service (Resend, ConvertKit, etc.) via `handleSubmit` in `EmailCapture.tsx`.

### GlitchButtonText
Wraps button text in a glitch animation. Used inside `EmailCapture` and `Navbar`. Pass the button label as `text` prop.

## Content Guidelines

### Stats (ProblemSection, QuotesSection)
All statistics must be sourced and conservative. The current stats have verified citations:
- "1 in 3" Google searches shows AI Overview (not "40%")
- "–34%" CTR drop from Ahrefs study (not "–50%")
- "64%" purchase intent from Omnisend 2025 survey

Never round up or use unverified figures. When adding new stats, include the source in a comment.

### Testimonials
`TestimonialsSection.tsx` contains placeholder clients (CloudSync Solutions, Meridian Financial, etc.) — **these are fictional and must not go live**. The file is not currently imported in `Index.tsx`. Replace with real client quotes before enabling.

### AI Platform Names
Always list: ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews. Never shorten to just "ChatGPT" alone.
