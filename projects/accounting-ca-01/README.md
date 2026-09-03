# accounting-ca-01 — Ledgeworth & Co.

Production-quality marketing website for a premium chartered-accountant /
financial advisory firm. React + Vite + SCSS, five pages, no backend.

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
| `src/data/site.js` | Firm name, nav, contact details, hours, hero copy, home-page section copy, about-page copy |
| `src/data/services.js` | The four service categories and their "what's included" lists |
| `src/data/team.js` | Advisor roster — name, role, specialisation, experience, photo |
| `src/data/testimonials.js` | Client quotes |
| `src/data/images.js` | Central image registry (see below) |

## Editing images

Every image the site uses lives in `public/images/` and is registered once
in `src/data/images.js`. To swap a photo, **replace the file in
`public/images/` keeping the exact same filename** — no code change needed.

The team portraits currently shipped are brand-styled monogram placeholders
(initials on the firm's forest/brass palette), since no real photography was
provided. Swap in real advisor photos at `public/images/team-*.jpg` (same
filenames) whenever they're available — the aspect ratio is 4:5.

Never add a new image file for content that already has a registered image —
reuse the existing entry so there's always exactly one physical file per
image.

## Structure

```
src/
├── app/          Application root (routes, layout) — src/app/index.jsx
├── components/   Reusable UI: Header, Footer, Button, cards
├── data/         All editable content (see table above)
├── pages/        One file per route: Home, Services, About, Team, Contact
├── sections/     Composable page sections (Hero, Stats, Industries, …)
└── styles/       Design tokens (_variables.scss), mixins, global styles
```

Routes: `/`, `/services`, `/about`, `/team`, `/contact`.

## Notes

- The one slider on the site (Industries served, on the homepage) supports
  swipe, arrow buttons, keyboard arrows, and autoplay that pauses on
  hover/focus.
- No backend, database, login, payments, or CRM — enquiries go through a
  client-side form (wire up an endpoint or form service when ready) plus
  direct Call / WhatsApp / Email links sourced from `site.js`.
