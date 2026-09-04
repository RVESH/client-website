# construction-01 — Strata Build Co.

Production-quality marketing website for a premium construction and
engineering company. React + Vite + SCSS, five pages, no backend.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run lint      # oxlint
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Editing content (no code changes required)

All copy, contact details and structured content live in `src/data/`:

| File | Controls |
|---|---|
| `src/data/site.js` | Company name, nav, contact details, hours, hero copy, home-page section copy, about-page copy |
| `src/data/projects.js` | Portfolio — one entry per project, with `category` used by the Projects page filter (`commercial`, `residential`, `infrastructure`, `renovation`, `engineering`) |
| `src/data/services.js` | The five service capabilities and their scope lists |
| `src/data/team.js` | Leadership roster — name, role, focus, experience, photo |
| `src/data/testimonials.js` | Client quotes |
| `src/data/images.js` | Central image registry (see below) |

To add a new project, add an entry to `src/data/projects.js` with a
`category` matching one of the ids in the `categories` array at the top of
that file — the Projects page filter picks it up automatically.

## Editing images

Every image lives in `public/images/` and is registered once in
`src/data/images.js`. To swap an image, **replace the file in
`public/images/` keeping the exact same filename** — no code change needed.

The project photos and team portraits currently shipped are brand-styled
illustrated placeholders (line-art diagrams and initials tiles in the
charcoal/amber palette), since no real project photography or headshots
were provided. Swap in real photos at the same filenames whenever available:
- `public/images/proj-*.jpg` — 4:3 ratio
- `public/images/team-*.jpg` — 4:5 ratio

Never add a new image file for content that already has a registered image —
reuse the existing entry so there's always exactly one physical file per
image.

## Structure

```
src/
├── app/          Application root (routes, layout) — src/app/index.jsx
├── components/   Reusable UI: Header, Footer, Button, cards
├── data/         All editable content (see table above)
├── pages/        One file per route: Home, Projects, Services, About, Contact
├── sections/     Composable page sections (Hero, Stats, Testimonials, …)
└── styles/       Design tokens (_variables.scss), mixins, global styles
```

Routes: `/`, `/projects`, `/services`, `/about`, `/contact`.

## Notes

- The Projects page filter is client-side and instant — no backend needed.
- No database, login, payments, or CRM — enquiries go through a client-side
  form (wire up an endpoint or form service when ready) plus direct Call /
  WhatsApp / Email links sourced from `site.js`.
- The mobile menu supports Escape, backdrop-click, and close-on-navigate,
  and locks background scroll while open.
