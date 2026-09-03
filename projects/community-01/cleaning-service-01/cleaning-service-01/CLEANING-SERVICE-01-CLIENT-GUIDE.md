# Brightside Home Care — Client Guide

This guide explains how to update the website's content and how to run it,
written for someone without a coding background. Technical terms are kept
to a minimum.

---

## 1. What this project is

A 5-page website for Brightside Home Care, a cleaning and home-care
business. It shows your services, service areas, and trust information,
and lets visitors reach you by phone, WhatsApp, email, or a contact form.
There is no online payment, booking system, or customer login — this is a
presentation and lead-generation site, not a store.

**The five pages:**

| Page | Address | Purpose |
|---|---|---|
| Home | `/` | Overview, hero message, featured services, trust stats |
| Services | `/services` | All six services in detail |
| About | `/about` | Company story, standards, team, testimonials |
| Service Areas | `/areas` | List of neighborhoods you serve |
| Contact | `/contact` | Phone, WhatsApp, email, address, hours, enquiry form |

---

## 2. Folder structure (what lives where)

```
cleaning-service-01/
├── public/images/       ← all photos/illustrations (the actual image files)
├── src/
│   ├── data/             ← ALL editable text and content lives here
│   ├── components/       ← small reusable pieces (buttons, cards, header, footer)
│   ├── sections/          ← larger page blocks (hero, testimonials, etc.)
│   ├── pages/             ← the 5 pages, assembled from sections
│   └── styles/            ← colors, fonts, spacing (the design system)
├── index.html
├── package.json
└── CLEANING-SERVICE-01-CLIENT-GUIDE.md   ← this file
```

**You will almost never need to open `components/`, `sections/`, `pages/`,
or `styles/`.** Nearly every day-to-day update happens in `src/data/`.

---

## 3. Files you should edit

All five files live in `src/data/`:

| File | What it controls |
|---|---|
| `site.js` | Company name, phone, WhatsApp, email, address, hours, nav labels, homepage stats, "why choose us" points, the 4-step process |
| `images.js` | Which image file is used where, and its alt text |
| `services.js` | The six services: titles, descriptions, bullet points, coverage labels |
| `areas.js` | The list of service-area neighborhoods |
| `testimonials.js` | Customer quotes, names, roles, locations |

## 4. Files you should NOT touch

Unless you're comfortable with code, avoid editing anything in:
`src/components/`, `src/sections/`, `src/pages/`, `src/styles/`,
`src/app/`, `vite.config.js`, `eslint.config.js`, or `package.json`.
These control layout, behavior, and design — small mistakes here can break
the site. Content changes almost never require touching these.

---

## 5. Where to change specific things

Open `src/data/site.js` for all of these:

- **Company name** — the `companyName` and `shortName` values near the top
- **Phone number** — `phone` (used for the `tel:` link) and `phoneDisplay`
  (the human-readable version shown on the page)
- **Mobile / WhatsApp number** — `mobile` and `whatsapp`. The WhatsApp link
  is generated automatically from `whatsapp`, so you only need to update
  that one value
- **Email** — `email`
- **Address** — the `address` block (`line1`, `line2`, `city`, `region`,
  `postalCode`, and `full`)
- **Opening hours** — the `hours` list
- **Homepage stats** — the `stats` list (e.g. "9+ Years serving local homes")
- **"Why choose us" points** — the `benefits` list
- **4-step process** — the `process` list

For services, areas, and testimonials, open the matching file instead:

- **Services** — `src/data/services.js`. Each service is one block with a
  `title`, `summary`, list of `points`, `coverage` label, and an `image`
  reference (which must match a key in `images.js`)
- **Service areas** — `src/data/areas.js`. Each entry has a `name`,
  `description`, and `coverage` label
- **Testimonials** — `src/data/testimonials.js`. Each entry has a `name`,
  `role`, `location`, and `quote`

When editing any of these files, keep the surrounding punctuation
(commas, quotes, curly braces) exactly as it is — just change the text
between the quote marks.

---

## 6. How images work

**Every image on the site currently is an original illustration (an
`.svg` file), not a stock photo.** This was a deliberate choice for this
version: it keeps a single consistent, on-brand visual style everywhere
and avoids generic stock photography. You can replace any of them with
real photography whenever you're ready — the steps are the same either
way.

**The flow:**

```
public/images/  (the physical file)
      ↓
src/data/images.js  (registers the file + its alt text)
      ↓
src/data/services.js, site.js, etc.  (reference the registered image)
      ↓
components / pages  (display it)
```

### Replacing an existing image (safest method)

1. Prepare your new photo.
2. Rename it to match the file it's replacing exactly — for example, if
   you're replacing the hero image, name your new file `hero01.jpg` (or
   keep `hero01.svg` if you're keeping it as an illustration).
3. Put it in `public/images/`, replacing the old file.
4. If your new file uses a different extension (e.g. you're switching
   `hero01.svg` to a photo named `hero01.jpg`), open `src/data/images.js`
   and update that one line to point to the new filename.

Because everything is referenced through `images.js`, replacing the file
(with the same name) means you don't have to touch any other file at all.

### Adding a brand-new image

1. Put the file in `public/images/`.
2. Open `src/data/images.js` and add a new entry with a short key name, a
   `src` pointing to the file, and descriptive `alt` text.
3. Reference that new key from wherever you want it to appear (e.g. in
   `services.js` for a new service's image).

### Image naming rules

- Use lowercase, no spaces: `service07.jpg`, not `Service 07.jpg`.
- One physical photo = one file. Don't save the same photo under two
  different names.
- Keep descriptive alt text — it's read aloud by screen readers and
  helps search engines understand the image.

---

## 7. Running the site locally

You'll need [Node.js](https://nodejs.org) installed (version 18 or newer).

Open a terminal in the `cleaning-service-01` folder and run:

```bash
npm install
```

This downloads the project's dependencies (only needed once, or after
the dependency list changes).

To preview the site on your own computer:

```bash
npm run dev
```

This starts a local server, usually at `http://localhost:5173`.

To preview it on your phone or another device on the same Wi-Fi network:

```bash
npm run dev -- --host 0.0.0.0
```

Then visit the "Network" address it prints (something like
`http://192.168.1.23:5173`) from your other device.

---

## 8. Checking and building

**Lint** (checks the code for common mistakes):

```bash
npm run lint
```

**Build** (creates the final, optimized version of the site for
publishing):

```bash
npm run build
```

This produces a `dist/` folder containing the finished site. That `dist/`
folder is what you upload to your web host.

---

## 9. Deployment basics

Once you run `npm run build`, the `dist/` folder contains plain HTML, CSS,
JavaScript, and image files — it can be hosted anywhere that serves static
files (Netlify, Vercel, Cloudflare Pages, a standard web host, etc.).
Because this uses client-side routing, your host should be configured to
redirect unknown paths back to `index.html` (most static hosts have a
simple setting for this, sometimes called an "SPA fallback" or "rewrite
rule").

## 10. HTTPS basics

Local development (`npm run dev`) uses plain HTTP, which is normal and
expected — no certificate setup is needed on your computer. When you
deploy the `dist/` folder to a real host, that host almost always
provides HTTPS automatically (Netlify, Vercel, and Cloudflare Pages all
do this for free). You shouldn't need to configure certificates yourself.

---

## 11. Final QA checklist

Before publishing changes, it's worth quickly checking:

- [ ] Home page hero image and both call-to-action buttons work
- [ ] Featured services, "why choose us," process, and testimonials all
      display correctly
- [ ] Services page shows all six services with images and enquiry buttons
- [ ] About page story, standards, team section, and stats look right
- [ ] Areas page lists all service areas correctly
- [ ] Contact page phone, email, WhatsApp, address, and hours are correct
      and the enquiry form opens your email app correctly
- [ ] Desktop navigation and mobile menu both work, with no overlapping
      text
- [ ] No broken images (check the browser console for red errors)
- [ ] Site looks correct at a few sizes: a wide desktop window, a tablet
      width, and a phone width

---

Questions about anything in this guide can go to whoever set up the
project for you — most day-to-day updates should only ever require
editing the five files in `src/data/`.
