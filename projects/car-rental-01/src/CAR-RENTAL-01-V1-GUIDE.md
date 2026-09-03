car-rental-01 — Auric Motors

Production-quality marketing website for a premium car-rental / mobility brand.

Tech: React + Vite + CSS/SCSS
Pages: 5
Scope: Frontend-only V1
Status: V1 frozen

Purpose

Auric Motors is presented as a premium vehicle-rental brand focused on a polished booking-enquiry experience.

The website is a showcase and lead-generation experience.

It does not include a real booking engine, payment flow, authentication, database, customer accounts, or rental-management backend.

Routes

Route

Page

/

Home

/fleet

Fleet

/about

About

/locations

Locations

/contact

Contact

All routes must work on desktop, tablet, mobile, small phones, and narrow phone widths.

Getting Started

npm install
npm run dev
npm run lint
npm run build
npm run preview

Commands

Command

Purpose

npm run dev

Start Vite development server

npm run lint

Run Oxlint

npm run build

Create production build

npm run preview

Preview the production build

Client-Editable Content

Business content should remain centralized in src/data/.

src/data/site.js

Controls the main company information, including where supported:

Company name

Short name

Navigation

Phone

Phone display text

Email

WhatsApp

WhatsApp display text

Header CTA

Other site-wide business copy

src/data/fleet.js

Controls vehicle names, categories, descriptions, specifications, pricing/demo information where present, and vehicle images.

src/data/locations.js

Controls cities, states, location codes, addresses, and location-specific information.

src/data/images.js

Controls the central image registry.

When business information changes, update the appropriate data file instead of duplicating values throughout JSX.

Images

Physical images live in:

public/images/

Registered image references live in:

src/data/images.js

Image Rules

Keep one physical file for each registered image.

Reuse existing image references.

Replace an existing file using the same filename when practical.

Keep appropriate alt text.

Avoid duplicate copies of the same photo.

Preserve the aspect ratio expected by the component when replacing photos.

Header / Mobile Navigation

The mobile navigation uses an animated right-side off-canvas drawer.

Open

Clicking the hamburger slides the drawer:

RIGHT → LEFT

Close

Clicking the X, hamburger, backdrop, navigation link, or pressing Escape reverses the animation:

LEFT → RIGHT

Requirements

The main page must not slide horizontally.

The drawer must not create horizontal overflow.

The backdrop must cover the entire viewport.

The drawer must appear above the backdrop.

The hamburger should animate into an X and back.

Body scrolling should be locked while the menu is open.

Closing the menu should restore normal scrolling.

Navigation actions should close the mobile menu.

The drawer/backdrop should be isolated from the header stacking context so the overlay covers the complete page reliably.

Header CTA

The mobile Reserve Now CTA must route to:

/contact

and close the mobile navigation at the same time.

The desktop CTA should also point to /contact.

Do not hard-code environment-specific localhost URLs.

Fleet Search V1 Behavior

The fleet search UI accepts:

Pickup location

Drop-off location

Pickup date

Return date

Vehicle type

The Search availability action takes the user to the Fleet experience.

V1 Decision

The vehicle type selection is intentionally treated as a search-entry / showcase interaction, not as a real availability engine.

For V1, selecting Electric, SUV, or another type does not need to dynamically filter the Fleet page. The Fleet page may continue to show the complete vehicle inventory.

This is intentional because there is no real availability backend, reservation database, date/inventory matching, or live fleet API.

The V1 website must not imply that it has real-time vehicle availability when it does not.

A future V2 may carry the selected filters into the Fleet page and implement genuine filtering and availability logic.

Contact / Reservation Enquiry

The Contact page provides a frontend-only reservation enquiry form.

Fields include:

Full name

Phone number

Pickup location

Pickup date

Return date

Additional message

The enquiry is not stored in a backend.

Send by Email

The site opens Gmail compose with:

Recipient pre-filled

Subject pre-filled

Reservation information pre-filled in the message body

The visitor reviews the message and presses Send.

The site must not claim that the enquiry has already been received.

Send by WhatsApp

The site opens WhatsApp with the reservation enquiry pre-filled.

The visitor reviews the message and presses Send.

The WhatsApp number should come from the centralized site configuration.

Quick Contact Actions

Call

Uses the tel: scheme for direct calling. On compatible mobile devices this should open the device calling flow.

Email

Uses a browser-based Gmail compose URL rather than mailto: so the V1 provides a predictable pre-filled email experience without relying on the operating system mail application.

WhatsApp

Uses the WhatsApp web/app URL with enquiry text pre-filled.

CTA / Navigation Rules

Internal links should use the application's routing system.

Examples:

Browse the fleet → /fleet
Reserve Now → /contact
Contact → /contact

The Browse the fleet CTA has special V1 behavior:

From another page → navigate to /fleet.

When already on /fleet → smoothly scroll to the top instead of performing redundant navigation.

Contact Page Responsive Requirements

Prevent:

Form overflow

Long email clipping

Long phone/address overflow

Broken grids

Button overflow

Horizontal scrolling

Use content-safe grid sizing and allow long text to wrap naturally.

On smaller screens, contact cards stack, form rows collapse to one column, and email/WhatsApp actions remain usable.

Visual Direction

The visual language should remain:

Premium

Modern

Clean

Confident

Automotive

Editorial

Accessible

Preserve the established Auric Motors design language:

Dark ink

Warm brass/gold accent

Light neutral surfaces

Generous whitespace

Large typography

Restrained borders

Soft shadows

Strong vehicle imagery

Avoid turning V1 into a generic booking dashboard.

V1 Scope

Included

React

Vite

React Router

Responsive five-page website

Reusable components

Centralized site/fleet/location data

Responsive header

Animated right-side mobile drawer

Full-screen backdrop

Fleet showcase

Locations

Reservation enquiry form

Email enquiry flow

WhatsApp enquiry flow

Direct phone calling

Responsive CTA behavior

Not Included

Real-time fleet availability

Booking database

Reservation persistence

Payment processing

Authentication

Customer accounts

Admin panel

CRM integration

Vehicle inventory API

Rental-management system

Server-side enquiry storage

Real-time date-based availability

Do not add backend infrastructure merely to simulate these features.

Quality Rules

Keep business content centralized.

Reuse existing components.

Avoid unnecessary dependencies.

Do not hard-code localhost URLs.

Do not duplicate physical images.

Do not create fake booking confirmations.

Do not claim real-time availability without real availability data.

Keep responsive CSS content-safe.

Avoid arbitrary fixed widths that break on small screens.

Keep mobile navigation isolated from the main page layout.

Do not introduce uncertain or nonexistent Sass variables/mixins.

QA / Definition of Done

Run:

npm run lint
npm run build

Both must complete successfully.

Routes

Verify:

/
/fleet
/about
/locations
/contact

Header

Verify:

Desktop navigation

Mobile hamburger

Right-side drawer animation

Drawer close animation

Hamburger → X animation

X → hamburger animation

Full-page backdrop

Escape close

Backdrop close

Navigation-link close

Reserve Now → Contact

Call action

Fleet

Verify:

Search UI renders correctly.

Pickup location works.

Drop-off location works.

Same-as-pickup control works.

Date controls work.

Vehicle type selection works as a form control.

Search availability takes the user to the Fleet experience.

V1 does not falsely claim filtered real-time availability.

CTA

Verify:

Browse the fleet works from other pages.

Browse the fleet on /fleet smoothly scrolls to the top.

Call CTA opens the calling flow.

Reserve Now opens /contact.

Contact

Verify:

Form fields accept input.

Email action opens Gmail compose with pre-filled details.

WhatsApp action opens a pre-filled enquiry.

Phone action works.

No fake server-success state is shown.

Long contact text does not overflow.

Responsive

Check:

Desktop

Tablet

390px mobile

375px mobile

Narrow phone widths

Confirm:

No horizontal page scrolling.

No clipped text.

No broken buttons.

No card collisions.

No menu layout shift.

No broken images.

V1 Freeze Criteria

car-rental-01 is V1-frozen when:

All five routes work.

Desktop navigation works.

Mobile navigation works.

Drawer animation works in both directions.

Backdrop covers the complete viewport.

The main page never slides because of the drawer.

Reserve Now correctly opens Contact and closes the menu.

Browse the fleet behaves correctly.

Contact Email flow works.

Contact WhatsApp flow works.

Contact Call flow works.

Fleet search UI works as a V1 showcase interaction.

Responsive QA is clean.

npm run lint passes.

npm run build passes.

Runtime smoke testing is complete.

Final Git

After QA:

git status
npm run lint
npm run build
git add .
git commit -m "feat(car-rental-01): finalize V1 car rental website"
git push origin main

Verify the push completed successfully.

Final Status

car-rental-01 = V1 frozen

Next project:

construction-01