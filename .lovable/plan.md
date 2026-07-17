# Redesign: Structural Sophistication

Full visual overhaul of the portfolio. All existing content stays intact — only the design system, layout, and section compositions change.

## Design tokens (locked)
- **Palette (Navy Trust)**: `--navy-deep #0f1b3d`, `--navy #1e3a5f`, `--steel #3b6fa0`, `--paper #e8edf3`, white
- **Fonts**: Sora (700/600) for headings, Manrope (400/500/700) for body — loaded via `<link>` in `src/routes/__root.tsx`
- **Layout**: split-screen hero (paper-left / navy-right), authoritative and engineered

## Files to edit

### 1. `src/routes/__root.tsx`
- Add Google Fonts `<link>` preconnects and stylesheet for Sora + Manrope.

### 2. `src/styles.css`
- Redefine core semantic tokens in `oklch`:
  - `--background`, `--foreground`, `--primary` (steel), `--primary-glow`, `--secondary`, `--accent`, `--muted`, `--border`, `--card` — all in Navy Trust range
  - Both `:root` (light: paper bg, navy text) and `.dark` (deep navy bg, paper text)
- Update `--gradient-primary` (navy→steel), `--gradient-subtle` (paper tints), `--shadow-elegant` (navy-tinted)
- Set `--font-sans: "Manrope"`, `--font-display: "Sora"` in `@theme`
- Utility class `.text-gradient` reworked for steel→paper
- `.glass` background retuned to navy/paper

### 3. Section components — recomposed to prototype
- **`navbar.tsx`** — dark navy fixed bar, `S.KHADKA` monogram + Sora, steel hover, pill "Resume/Hire" CTA in steel
- **`hero.tsx`** — split-screen: left paper panel with `CIVIL ENGINEER` eyebrow + massive Sora name + two square CTAs; right navy panel with radial-glow + portrait card (grayscale→color on hover)
- **`about.tsx`** — 12-col grid: 7 cols bio, 5 cols stat cards (Years / Projects / Master's callout) using paper / navy / deep-navy card stack with border-b steel accent
- **`experience.tsx`** — dark navy band, single vertical timeline with steel dots + navy connector, period label + role + org + description per entry (keeps all 4 roles)
- **`research.tsx`** — light paper band with steel-bordered feature card and technical DOI-style meta line
- **`skills.tsx`** — paper band, 2-col spec sheet with uppercase category labels + horizontal bar meters in steel / navy (keeps all existing skill entries and percentages)
- **`education.tsx`** — 3 cards on paper, uniform navy header + steel percent chip
- **`gallery.tsx`** — restyle frames only (thin steel border, hover lift), keep existing images
- **`contact.tsx`** — one giant rounded-3xl split panel: deep-navy left with contact chips + socials, white right with form; Send button in deep navy → steel hover
- **`footer.tsx`** — deep-navy strip, paper text, steel social links
- **`floating-actions.tsx`** — swap gradient to solid steel for scroll-top; keep WhatsApp green

## Content preservation
All names, dates, bullets, research paper, skill labels/percentages, education entries, gallery images, and the `khadkasuman89@gmail.com` email are copied verbatim from current files. No copy is rewritten.

## Technical notes
- No new packages. Sora + Manrope come from Google Fonts via root head `<link>` (never `@import` remote URLs in `styles.css`).
- Keep `nitro: true` in `vite.config.ts` untouched.
- Semantic tokens only — no hardcoded `bg-[#0f1b3d]` in components; new palette added to `styles.css` under `:root` and referenced via `bg-primary`, `bg-navy-deep`, etc. via `@theme` custom color tokens (e.g. `--color-navy-deep`, `--color-steel`, `--color-paper`).
- All sections keep their existing `id="…"` anchors so nav links keep working.
- Route `head()` metadata unchanged.

## Out of scope
- No content edits, no new sections, no new features, no MCP changes, no backend work.
