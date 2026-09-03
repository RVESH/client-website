# Vantage Motor Co. — Client Guide
### automotive-dealer-01

This document explains how to update your dealership website's content
without touching any code. It's written for a non-technical reader.

---

## 1. What this website is

A five-page showroom website:

| Page | Address (URL) | Purpose |
|---|---|---|
| Home | `/` | First impression, featured vehicles, trust signals |
| Vehicles | `/vehicles` | Full inventory with category filtering |
| Vehicle Detail | `/vehicles/:id` | One page per vehicle, generated automatically |
| About | `/about` | Dealership story, team, credibility |
| Contact | `/contact` | Phone, email, WhatsApp, address, hours |

This is a **showcase and lead-generation** site — visitors browse, then
reach out by phone, email, or WhatsApp. There is no shopping cart, no
online checkout, and no customer login, by design.

---

## 2. Folder structure (what's where)

```
automotive-dealer-01/
├── public/
│   └── images/          ← every real image file lives here
├── src/
│   ├── data/             ← ✅ YOU EDIT THESE FILES
│   │   ├── site.js         (dealership name, contact info, hours)
│   │   ├── images.js        (image registry — links files to pages)
│   │   ├── vehicles.js      (your inventory)
│   │   ├── services.js      (dealer services list)
│   │   └── team.js          (staff bios)
│   ├── components/       ← 🚫 developer-only
│   ├── sections/         ← 🚫 developer-only
│   ├── pages/            ← 🚫 developer-only
│   └── styles/           ← 🚫 developer-only
```

**You should mainly edit files inside `src/data/`.**
Everything else (components, pages, sections, styles) controls layout and
design — changing those requires a developer.

---

## 3. Common edits

### Change the dealership name, tagline, or description
Open `src/data/site.js`, edit the `name`, `tagline`, and `description`
fields near the top.

### Change the phone number
In `src/data/site.js`, find:
```js
phone: '+1 (312) 555-0148',
phoneDisplay: '+1 312 555 0148',
```
Update both — `phone` is used for the tappable "Call" links (keep the `+`
and digits clean), `phoneDisplay` is what visitors read on screen.

### Change the email address
In `src/data/site.js`, edit:
```js
email: 'sales@vantagemotorco.com',
```

### Change the WhatsApp number
In `src/data/site.js`, edit:
```js
whatsapp: '13125550148',
```
Use the full international number with no `+`, spaces, or dashes.

### Change the address
In `src/data/site.js`, edit the `address` block (`line1`, `line2`,
`country`).

### Change opening hours
In `src/data/site.js`, edit the `hours` array. Add or remove rows as
needed — each row is `{ days: '...', time: '...' }`.

### Add, remove, or edit a vehicle
Open `src/data/vehicles.js`. Each vehicle is one block starting with
`{ id: '...'` and ending with `},`. Copy an existing block to add a new
vehicle, or edit the fields (`brand`, `model`, `year`, `price`, `mileage`,
`fuel`, `transmission`, `power`, `status`, `summary`, `description`,
`specs`) to update one. The `status` field controls the badge shown —
use exactly `Available`, `Reserved`, or `Sold`.

**Important:** the `cover` and `detail` fields point to images through
the image registry (see Section 4) — don't type a file path directly
here.

### Add or edit a service
Open `src/data/services.js` and edit or copy a block the same way.

### Add or edit a team member
Open `src/data/team.js` and edit or copy a block. Each member needs a
`photo` — see Section 4 for how to connect a photo.

---

## 4. How images work (read this before replacing photos)

All real image files live in one place:

```
public/images/
```

Every page and component reads images through a single file:

```
src/data/images.js
```

The flow is:

```
public/images/your-photo.jpg
        ↓
src/data/images.js   (gives it a name + alt text)
        ↓
src/data/vehicles.js / team.js / site references
        ↓
appears on the website
```

### Replacing an existing photo (safest method)
1. Find the current file in `public/images/` (e.g. `vehicle01.jpg`).
2. Replace that file with your new photo, **keeping the exact same
   filename**.
3. Do nothing else — the website will pick up the new photo
   automatically.

This is the easiest and safest way to swap a photo, because no code
changes are needed.

### Adding a brand-new image
1. Add the new file to `public/images/` with a clear, descriptive name
   (e.g. `vehicle09.jpg`) — lowercase, no spaces.
2. Open `src/data/images.js` and add an entry following the existing
   pattern:
   ```js
   vehicle09: {
     cover: { src: path('vehicle09.jpg'), alt: 'Describe the vehicle here' },
   },
   ```
3. Reference `images.vehicle09.cover` from `vehicles.js` the same way
   existing vehicles do.

### Image naming rules
- One physical photograph = one file. Never save the same photo under
  two different filenames.
- Use lowercase, descriptive names: `vehicle09.jpg`, `about02.jpg`.
- Avoid spaces — use hyphens if needed.

### Alt text
Every image entry in `images.js` includes an `alt` field — a short,
literal description of what's in the photo (for screen readers and
accessibility). Update this whenever you replace a photo with a
different subject.

---

## 5. What you should NOT edit

Unless you have a developer helping you, avoid changing:

- `src/components/` — reusable building blocks (buttons, cards, header, footer)
- `src/sections/` — page sections (hero, featured vehicles, etc.)
- `src/pages/` — page layouts
- `src/styles/` — colors, fonts, spacing system
- `main.jsx`, `vite.config.js`, `package.json`, `eslint.config.js`

Editing these can break the layout or the build. All day-to-day content
changes are possible through `src/data/` alone.

---

## 6. Running the site locally (for your developer)

```bash
npm install        # one-time setup, installs dependencies
npm run dev        # starts local dev server at http://localhost:5173
```

### Testing on another device on the same WiFi (LAN testing)
```bash
npm run dev -- --host 0.0.0.0
```
Then open the "Network" URL shown in the terminal on a phone or tablet
connected to the same WiFi network.

### Checking for code errors
```bash
npm run lint
```

### Building for production (creates the deployable files)
```bash
npm run build
```
This produces a `dist/` folder — that folder is what gets uploaded to
your web host.

---

## 7. Deployment basics

The `dist/` folder produced by `npm run build` is a set of static files
(HTML, CSS, JS, images) that can be hosted on any static hosting
provider (e.g. Netlify, Vercel, Cloudflare Pages, or a standard web
host's `public_html` folder). There is no database or server-side code
to configure — upload the contents of `dist/` and the site will run.

### A note on HTTPS
Production hosting providers (Netlify, Vercel, Cloudflare Pages, etc.)
issue HTTPS certificates automatically when you connect a domain — no
manual certificate setup is required on your end. Local development
(`npm run dev`) intentionally runs over plain HTTP; this is normal and
does not affect the live, deployed site.

---

## 8. Final QA checklist

Before publishing changes, confirm:

- [ ] Home page loads and the hero image displays
- [ ] Featured vehicles on the Home page link correctly
- [ ] Vehicles page shows all vehicles and the category filter works
- [ ] Every vehicle's "View details" link opens the correct detail page
- [ ] Vehicle detail pages show the correct photo, price, and specs
- [ ] An invalid vehicle link shows "Vehicle not found" instead of an error
- [ ] WhatsApp, phone, and email buttons open correctly on both mobile and desktop
- [ ] About page content and photos display correctly
- [ ] Contact page shows the correct address, phone, email, and hours
- [ ] Mobile menu opens, closes, and every link works
- [ ] No layout breaks at narrow phone widths (test at 360px if possible)

---

*This guide covers day-to-day content editing. For layout, design, or
structural changes, please contact your developer.*
