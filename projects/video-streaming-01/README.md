# Aperture (video-streaming-01)

A frontend-only, production-quality streaming platform experience — original
cinematic design, curated catalogue, full detail pages, and a real,
functional custom video player. Built with React + Vite + SCSS. **There is
no backend, authentication, payments, or real streaming infrastructure** —
see [V1 Limitations](#v1-limitations) below.

---

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run lint      # oxlint
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Routes

| Path | Page |
|---|---|
| `/` | Home — hero, continue watching, trending, popular, new releases, recommended, top rated, coming soon, genres, collections, journal, testimonials, newsletter |
| `/browse` | Search, filter, sort and paginate the full catalogue; Movies/Series/Watchlist tabs |
| `/movie/:id` | Movie or series detail page — cast, crew, episodes, related titles |
| `/watch/:id` | The video player (`?ep=<episodeId>` selects a specific episode) |
| `/genres` | Full genre index |
| `/collections/:id` | A single curated collection |
| `/journal` | Editorial articles |
| `/contact` | Contact details and enquiry form |

---

## Architecture

```
src/
├── app/            Application root, routing, and two small React
│                    Contexts: WatchlistContext and ProgressContext
│                    (both persist to localStorage; see below)
├── components/      Reusable UI — one folder per component, each with
│                    its own .jsx and .scss
├── data/            ALL editable content (see next section)
├── pages/           One folder per route
├── styles/          Design tokens (_variables.scss), mixins, global.scss
└── utils/           format.js (runtime/date formatting) and
                     titles.js (lookup/relationship helpers — finding a
                     title, its related titles, its genre label, and
                     resolving a collection's member titles)
public/
├── images/          All poster/backdrop/thumbnail/journal/avatar images
└── video/           Demo video clips (see V1 Limitations)
```

---

## Client-editable files (`src/data/`)

You can change almost everything about the site by editing these files —
**no component code needs to change**.

| File | Controls |
|---|---|
| `site.js` | Brand name, tagline, nav links, contact details & hours, homepage section headings, newsletter copy |
| `videos.js` | The entire catalogue — every movie and series, including each series' seasons and episodes |
| `genres.js` | The 12 genres, their descriptions, and the two-color gradient used on their genre cards |
| `collections.js` | Curated rows (Staff Picks, Award Season, etc.) |
| `journal.js` | Editorial articles |
| `testimonials.js` | Member quotes shown on the homepage |
| `images.js` | The central image registry (see below) |

### How to add or edit a movie

Open `src/data/videos.js` and add a new object to the `videos` array with
`type: "movie"`. Required fields: `id` (unique, kebab-case), `title`,
`type`, `year`, `duration` (minutes), `rating`, `maturity`, `genres` (array
of ids from `genres.js`), `language`, `subtitles`, `shortDescription`,
`description`, `cast`, `director`, `writers`, the boolean flags
(`featured`, `trending`, `newRelease`, `topRated`, `comingSoon`), and
`poster` / `backdrop` / `trailer` / `video`. For `poster` and `backdrop`,
reference an entry from `images.js` — don't inline a raw path.

### How to add a series, season, or episode

Same as a movie, but set `type: "series"`, use `creator` instead of
`director`, and add a `seasons` array. Each season needs `season` (number),
`year`, and an `episodes` array. Each episode needs `id` (unique — used in
`/watch/:id?ep=<episodeId>` URLs), `number`, `title`, `duration`,
`description`, `thumbnail` (from `images.js`), and `video` (a path under
`public/video/`).

To add a new season to an existing series, just push a new object onto that
title's `seasons` array — the season selector on the detail page and the
episode queue on the watch page both pick it up automatically.

### How to edit genres, collections, or journal

- **Genres** (`genres.js`): each entry needs `id`, `label`, `description`,
  and an `accent` — a two-color array used for that genre's card gradient.
- **Collections** (`collections.js`): either list explicit `titleIds`, or
  set `auto` to a boolean field name from `videos.js` (e.g. `"trending"`)
  to have membership derived automatically and always stay in sync.
- **Journal** (`journal.js`): each entry needs `id`, `title`, `excerpt`,
  `body`, `date`, `author`, and an `image` from `images.js`.

### How to replace or add images

Every image is registered once in `src/data/images.js` and referenced from
there — never as a raw string path inside a component or inside
`videos.js`. **To swap an image, replace the file in `public/images/`
keeping the exact filename** — no code change needed anywhere.

To add a brand-new image (e.g. a new title's poster), add the physical file
to `public/images/` following the existing naming convention
(`<slug>-poster.jpg`, `<slug>-backdrop.jpg`, `<episode-id>-thumb.jpg`), then
add one entry to `images.js` pointing to it, then reference that entry from
`videos.js`. Never duplicate a physical file — reuse the existing registry
entry if the same image is needed in more than one place.

---

## What NOT to edit

- Don't put raw `/images/...` or `/video/...` path strings directly inside
  component files or `videos.js` — always go through `images.js` for
  images. Video files are referenced by direct relative path under
  `public/video/` (they're intentionally not routed through the image
  registry, since there are relatively few of them and they're never
  reused across titles).
- Don't rename the boolean flags on a title (`featured`, `trending`,
  `newRelease`, `topRated`, `comingSoon`) — several homepage rows and the
  `auto`-derived collections in `collections.js` key off these exact names.
- Don't remove a genre `id` that's still referenced by a title's `genres`
  array or a collection.
- `src/app/WatchlistContext.jsx` and `ProgressContext.jsx` are
  infrastructure, not content — there's nothing here a client should need
  to touch.

---

## V1 Limitations

This is a **frontend-only showcase**. Specifically:

- **No backend.** There is no database, authentication, payment,
  subscription, or admin system. Nothing described below is a real network
  service.
- **The watchlist and "continue watching" progress** are stored in the
  browser's `localStorage` only (keys `aperture:watchlist` and
  `aperture:progress`). They persist across reloads on the same browser/
  device, but are not synced anywhere and will be lost if the user clears
  site data.
- **The video files are demo placeholders**, not real film/episode
  content — generated short clips (title card + color gradient) that exist
  so the player has something real to play, seek, and control. The player
  itself (play/pause, seek, volume, speed, skip ±10s, fullscreen,
  picture-in-picture, next-episode, keyboard shortcuts) is fully
  functional against these real `<video>` elements.
- **Captions and quality selection are UI-only.** The captions toggle
  displays a labeled demo line rather than a real synced `.vtt` track;
  there is no multi-bitrate source to select between, so a quality
  selector was intentionally left out rather than faked.
- **The newsletter and contact forms don't submit to a server.** They open
  a pre-filled Gmail compose window or WhatsApp chat for the user to review
  and send themselves — nothing is silently captured or stored.
- All images are original illustrated/abstract artwork generated for this
  project, not licensed photography or film stills.

## QA / deployment workflow

Before shipping any content change:

1. `npm run lint` — must report 0 errors.
2. `npm run build` — must complete without errors.
3. `npm run preview` and manually click through: homepage rows, Browse
   search/filters/sort/tabs, a movie detail page, a series detail page
   (season switch + episode list), the watch page (play, seek, skip,
   volume, speed, fullscreen, next episode), Genres, a Collection, Journal,
   and Contact.
4. Resize the browser (or use device toolbar) through at least 360px,
   768px, and 1440px, and confirm no horizontal scrollbar appears on any
   page.
5. Check the browser console for errors on each route.

`dist/` is a static build — deploy it to any static host (Netlify, Vercel,
S3 + CloudFront, etc.) with no server-side requirements.
