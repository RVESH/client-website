# Aurelia Dental Studio — dental-01

A premium dental clinic website built with React + Vite. Frontend/showcase only —
no backend, authentication, payments, or database.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Stack

- React 18 + React Router 6
- Vite 5
- Plain CSS with CSS Modules (no UI framework/dependency) — design tokens live in `src/index.css`
- No extra packages beyond `react`, `react-dom`, `react-router-dom` are required

## Structure

```
src/
  components/
    layout/     Header, Footer, Layout (shared shell)
    ui/         Button, Icon, Container, SectionHeading, PageHero (reusable primitives)
    home/       Sections used on the Home page
    treatments/ TreatmentCard
    doctors/    DoctorCard
    contact/    ContactForm, ContactInfo
  data/         Centralized content — edit these files to update copy, treatments,
                doctors, testimonials, and clinic info without touching components
  pages/        Home, Treatments, Doctors, About, Contact
```

## Notes

- The contact form is client-side only; submitting shows a success state but does not
  send data anywhere. Wire it up to your backend/email provider of choice for production use.
- The map on the Contact page uses a keyless Google Maps embed based on the address in
  `src/data/clinicInfo.js`. Update that address to match your real location.
- Doctor and clinic photography are sourced from Unsplash for demo purposes — replace
  the URLs in `src/data/doctors.js` and the hero/about sections with real clinic photography
  before going live.
