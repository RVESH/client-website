accounting-ca-01 — Ledgeworth & Co.

Production-quality marketing website for a premium chartered-accountant /
financial advisory firm. React + Vite + SCSS, five pages, frontend-only V1.

Purpose

Ledgeworth & Co. is presented as an established, discreet, premium accounting
and financial-advisory practice. The site is a showcase and lead-generation
experience, not a transactional application.

Getting started

npm install
npm run dev       # local dev server
npm run lint      # oxlint
npm run build     # production build → dist/
npm run preview   # preview the production build locally

Routes

/ — Home

/services — Services

/about — About

/team — Team

/contact — Contact

All routes must work on desktop, tablet, small phones, and narrow phone widths.

Editing content (no code changes required)

All client-facing copy and structured content lives in src/data/:

File

Controls

src/data/site.js

Firm name, navigation, contact details, hours, hero copy, home-page copy, about-page copy

src/data/services.js

Four service categories and their “what’s included” lists

src/data/team.js

Advisor roster — name, role, specialisation, experience, photo

src/data/testimonials.js

Client quotes

src/data/images.js

Central image registry

When client details change, update these data files rather than duplicating
business details inside JSX components.

Editing images

Every image used by the site lives in public/images/ and is registered once
in src/data/images.js.

To replace an existing image:

Keep the same filename whenever practical.

Replace the physical file in public/images/.

Keep the corresponding registry entry and appropriate alt text.

The team portraits currently shipped are brand-styled monogram placeholders
(initials on the firm's forest/brass palette), because no real photography was
provided. Real advisor portraits can replace public/images/team-*.jpg using
the same filenames and an approximately 4:5 composition.

Never create duplicate physical files for an image that already has a registry
entry. Maintain one physical file per image.

Project structure

src/
├── app/          Application root, routing and layout — src/app/index.jsx
├── components/   Reusable UI: Header, Footer, Button, cards
├── data/         Client-editable structured content
├── pages/        Home, Services, About, Team, Contact
├── sections/     Reusable page sections (Hero, Stats, Industries, CTA, …)
└── styles/       Global styles, design tokens and reusable styling helpers

Core contact behavior

Primary conversion actions are:

Book a consultation

Call the firm

WhatsApp the firm

Email the firm

Internal consultation CTAs should route to /contact; they should not depend on
an environment-specific localhost URL.

Phone, WhatsApp, email, address, and office hours should come from site.js
where supported by the existing implementation.

Contact form

The V1 contact form is frontend-only. It does not store enquiries in a
backend/database and must not show a fake success state claiming that the firm
received an enquiry.

The current V1 flow prepares the submitted enquiry for WhatsApp, including:

Name

Email

Phone

Selected service

Message

The visitor should be clearly told that the message is prepared in WhatsApp and
must still be reviewed and sent manually.

Homepage slider

The Industries served slider supports:

Touch/swipe

Previous/next arrow controls

Keyboard arrow navigation

Autoplay

Autoplay pause on hover/focus

Keep the interaction accessible and avoid layout shifts while the slider changes.

Responsive and interaction requirements

The header/mobile navigation is a critical UI element.

On mobile:

Hamburger opens the navigation without shifting the page layout.

Selecting a navigation item closes the menu.

Escape closes the menu.

Clicking the backdrop/outside closes the menu when applicable.

Opening the menu must not create permanent body-width changes or horizontal overflow.

Also check for collisions caused by long advisor specialisations, card content,
buttons, form labels, and contact information.

Styling guidance

The visual language should remain premium, calm, editorial, trustworthy, and
professional rather than looking like a generic SaaS dashboard.

The existing forest/brass design language, refined typography, generous spacing,
and restrained borders/shadows should be preserved unless a deliberate design
change is required.

SCSS should remain maintainable. Do not introduce guessed or nonexistent Sass
variables/mixins. When shared tokens are not necessary, plain SCSS/CSS is safer
than adding an uncertain dependency on another stylesheet.

V1 scope

Included

React + Vite

React Router

SCSS/CSS

Responsive five-page website

Reusable components and sections

Centralized client/demo content

Responsive navigation

Homepage industries slider

Contact form → WhatsApp message preparation

Direct phone, WhatsApp, and email actions

Not included

Authentication

Database

CMS

Client portal

Payments

Appointment-booking backend

CRM integration

Accounting-software integration

Admin dashboard

Persistent enquiry storage

Do not add backend infrastructure merely to simulate these features.

QA / Definition of Done

Before freezing V1, run:

npm run lint
npm run build

Both commands should finish cleanly.

Then perform a runtime smoke test:

Open every route.

Test desktop navigation.

Test mobile navigation, including Escape and outside/backdrop close.

Check the Industries slider controls, swipe behavior, keyboard support, and autoplay pause.

Test the Contact form and verify the generated WhatsApp message.

Test phone, WhatsApp, and email actions.

Check desktop, tablet, small-phone, and narrow-phone layouts.

Confirm there is no accidental horizontal scrolling.

Check for broken images and console-blocking runtime errors.

Freeze rule

Consider the project V1-frozen only when all required routes and interactions
work, responsive QA is clean, and both Oxlint and the production build pass.

Git

Recommended final commit:

git add .
git commit -m "feat(accounting-ca-01): finalize V1 accounting firm website"
git push origin main

After the push succeeds, move to the next project.