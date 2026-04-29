# Case Study Page — Style Guide

Reference: `src/pages/CaseStudy.tsx`
Inspired by: `https://www.sarahbroussard.com/work-avenue#/atlassian-jira-align/`

This guide documents the editorial design system used on the case study detail page so additional case studies stay visually consistent.

---

## 1. Layout

| Token | Value |
|---|---|
| Page background | `#fcfcfc` (off-white) |
| Article max-width | `max-w-4xl` (~896px) |
| Horizontal padding | `px-5` mobile · `sm:px-10` tablet+ |
| Vertical padding | `py-12` mobile · `sm:py-20` tablet+ |
| Section spacing | `py-14` per section, separated by `border-t border-zinc-200` |
| Header bottom margin | `mb-12` |
| Hero image bottom margin | `mb-24` |

> The container forces `text-left` to override the global `#root { text-align: center }` rule defined in `src/index.css`.

---

## 2. Typography

### Fonts (loaded in `index.html`)

| Role | Font | Fallback | Notes |
|---|---|---|---|
| Display / headings | **Jost** | `'Inter', sans-serif` | Geometric sans, replaces Adobe `futura-pt` |
| Body | **Manrope** | `'Inter', sans-serif` | Humanist sans, replaces Adobe `proxima-nova` |
| Numbers (stats) | Jost (light weight) | — | `font-light` for editorial feel |

### Hierarchy

| Element | Classes | Style |
|---|---|---|
| Eyebrow (above H1) | `text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500` | Jost |
| H1 (page title) | `text-4xl sm:text-6xl font-light uppercase tracking-[0.02em] text-zinc-900` | Jost |
| Subtitle | `text-base leading-[1.7] text-zinc-600 max-w-2xl` | Manrope |
| Section label | `text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500` | Jost |
| H2 (section title) | `text-2xl sm:text-3xl font-light uppercase tracking-[0.04em] text-zinc-900` | Jost |
| Body copy | `text-[15px] leading-[1.75] text-zinc-700 whitespace-pre-line` | Manrope |
| Strong / bold inline | `font-semibold text-zinc-900` | inherits |
| Stat number | `text-5xl sm:text-6xl font-light tracking-tight text-zinc-900` | Jost |
| Stat label | `text-sm leading-relaxed text-zinc-600 max-w-xs` | Manrope |
| Meta (role · year) | `text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500` | Jost |
| Accordion title | `text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-700` | Jost |
| Step title | `text-[13px] font-medium uppercase tracking-[0.14em] text-zinc-900` | Jost |

### Rules

- **Headings are uppercase.** Use `tracking-[0.02em]` to `tracking-[0.04em]` for letter-spacing.
- **Headings are light weight** (`font-light` or `font-medium`)—never bold.
- **Body copy is left-aligned** by default. Only the Impact stats section centers its heading and grid.
- **Body uses `whitespace-pre-line`** so `\n\n` in data renders as paragraph breaks.
- **Bold via `**…**`** is converted to `<strong>` by the `BodyText` component.

---

## 3. Color Palette

| Role | Token |
|---|---|
| Page background | `#fcfcfc` |
| Heading text | `text-zinc-900` |
| Body text | `text-zinc-700` |
| Muted / labels | `text-zinc-500` / `text-zinc-600` |
| Dividers | `border-zinc-200` |
| Active state | `bg-zinc-900 text-white` |
| Reading progress bar | `bg-zinc-900` |

No accent colors. The page is intentionally neutral; emojis in section titles provide the only chromatic accent.

---

## 4. Components

### `StatCounter`
Animated number that counts up when scrolled into view.
- Layout: vertical stack, centered text
- Number: large light Jost, `5xl` → `6xl`
- Label: short Manrope caption underneath
- Animation: cubic ease-out over 1.5s, IntersectionObserver-triggered

### `FeatureAccordion`
Collapsible list separated by `border-t border-zinc-200`.
- Trigger row: `+` icon (rotates to `×` when open) + uppercase Jost title
- Open body: `text-[17px] leading-[1.7] text-zinc-600`, indented `pl-11`

### `StepsSection`
Two-column step explorer.
- Left: clickable cards with numbered chip
- Active card: `border-zinc-900` + soft shadow + black numbered chip
- Right: image of the active step inside `rounded-2xl bg-zinc-100`
- Toggle "− Hide / + Show" link to collapse the entire section

### `CanvasPreview`
Mural / iframe embed inside a faux-browser chrome.
- Browser bar with traffic-light dots
- Hover-triggered title strip
- Zoom toolbar (− / % / +) with pan controls when zoomed in
- 3D tilt on cursor when not zoomed

### `BodyText`
Renders a string with `**bold**` → `<strong>` and preserves newlines.

---

## 5. Section Patterns

Each section in `caseStudies.ts` is a `CaseStudySection` rendered with these rules:

| Section type | Detected by | Layout |
|---|---|---|
| **Impact stats** | `stats` present, no `features` | Heading **centered**, stats grid **centered** |
| **Feature accordion** | `features` present | Heading left, optional body, accordion list |
| **Stepped process** | `steps` present | `StepsSection` (two-column) |
| **Image + body** | `image` present | Heading left, body left, image full-width below |
| **Embed** | `embedUrl` present | `CanvasPreview` after body |
| **Default body** | only `body` | Heading left, body left |

Sections are separated by `border-t border-zinc-200` with `py-14` spacing. The first section omits the top border (`first:border-t-0 first:pt-0`).

---

## 6. Animation

All in-view animations use Framer Motion with:
- `initial={{ opacity: 0, y: 16-24 }}`
- `whileInView={{ opacity: 1, y: 0 }}`
- `viewport={{ once: true, margin: '-8% 0px' }}`
- `transition={{ duration: 0.6-0.7, ease: [0.16, 1, 0.3, 1] }}` (gentle ease-out cubic)

Reading progress bar uses `useScroll` and a transformed `scaleX` on a fixed top strip.

---

## 7. Imagery

- Hero image: `rounded-3xl` with deep shadow `shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)]`
- Inline images: full-width, no border, no shadow (Squarespace-style flat editorial)
- Step images: `rounded-2xl bg-zinc-100` placeholder background
- All images use `object-cover` and lazy loading

---

## 8. Iconography

Section emojis are part of the section `title` string in data—not separate icons. They render inline at the heading's font size:

- 📈 Impact / metrics
- 📋 Project overview
- ⁇ / ❓ Problem
- 🥅 Goal
- 🌱 Opportunities
- 🔍 Research / Discovery
- 🧠 Strategy
- 🤓 Learnings
- 🔑 Key features
- 🛣️ User journey
- 📊 Outcomes
- 🌟 Strategic fit

Keep emojis at the start of titles to maintain the editorial Squarespace voice.

---

## 9. Adding a New Case Study

1. Add a new `CaseStudy` entry to `src/data/caseStudies.ts` with:
   - `slug`, `title`, `subtitle`, `tags`, `year`, `role`, `heroImage`
   - An array of `sections` using the patterns above
2. Use `label` (eyebrow) sparingly—usually for high-level phase labels (Problem, Goal, Research, Solution).
3. For stats, write values with a unit suffix (e.g. `"75%"`, `"20% YoY"`, `"168 hrs"`)—the counter parses the leading number and animates it.
4. Use `**bold**` inside `body` strings for inline emphasis.
5. Provide `image` URLs at full resolution; the layout handles the rest.

No styling changes are required—the renderer in `CaseStudy.tsx` will pick up the new data automatically.
