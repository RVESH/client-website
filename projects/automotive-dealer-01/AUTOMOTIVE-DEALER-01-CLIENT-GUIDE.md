Vantage Motor Co. — Client Guide

automotive-dealer-01

This guide explains how to update the dealership website's content without changing the layout or writing new code.

The main day-to-day edits are kept inside src/data/.

1. What this website is

automotive-dealer-01 is a five-page premium vehicle showroom website for Vantage Motor Co.

Page

URL

Purpose

Home

/

First impression, featured vehicles and trust signals

Vehicles

/vehicles

Vehicle inventory and category filtering

Vehicle Detail

/vehicles/:id

Individual vehicle details

About

/about

Dealership story, team and credibility

Contact

/contact

Phone, email, WhatsApp, address and hours

This is a showcase and lead-generation website.

Visitors can browse vehicles and contact the dealership. There is intentionally no shopping cart, online checkout, customer login, database, or real booking engine.

2. Folder structure

automotive-dealer-01/
├── public/
│   └── images/
│
├── src/
│   ├── data/
│   │   ├── site.js
│   │   ├── images.js
│   │   ├── vehicles.js
│   │   ├── services.js
│   │   └── team.js
│   │
│   ├── components/
│   ├── sections/
│   ├── pages/
│   └── styles/
│
├── index.html
├── package.json
└── vite.config.js

For normal client updates, start with src/data/.

Main editable files

File

Used for

src/data/site.js

Dealership name, contact details, address and hours

src/data/images.js

Central image registry

src/data/vehicles.js

Vehicle inventory

src/data/services.js

Dealer services

src/data/team.js

Team/staff information

public/images/

Physical image files

3. Change dealership information

Open:

src/data/site.js

Dealership name, tagline and description

Update the existing name, tagline and description values.

Phone

Typical values:

phone: '+1 (312) 555-0148',
phoneDisplay: '+1 312 555 0148',

Update both.

phone is used by clickable phone links.

phoneDisplay is what visitors see.

Email

Update:

email: 'sales@vantagemotorco.com',

For example:

email: 'owner@abcautos.com',

The Contact page's visible email and Send an Email action use this centralized value.

Email behavior

The Contact page opens Gmail with:

the dealership email already in the To field

a prepared subject

a prepared enquiry message

The visitor reviews the email and presses Send in Gmail.

The website itself does not send the email and does not store the enquiry.

WhatsApp

Update the WhatsApp number in site.js.

Where the existing data structure expects a WhatsApp value, use the full international number without +, spaces or dashes.

Example:

whatsapp: '13125550148',

Address

Update the existing:

address.line1
address.line2
address.country

Opening hours

Update the hours array.

Each row follows the existing pattern:

{
  days: 'Monday — Friday',
  time: '09:00 — 19:00',
}

4. Vehicle inventory

Open:

src/data/vehicles.js

Each vehicle is a data object.

Typical fields include:

id
brand
model
year
price
mileage
fuel
transmission
power
status
summary
description
specs
cover
detail

Add a vehicle

Copy an existing vehicle object and update its values.

Every vehicle must have a unique id.

Edit a vehicle

Update the fields in its existing object.

Remove a vehicle

Remove its complete object from vehicles.js.

Vehicle status

Use the status values supported by this project:

Available
Reserved
Sold

Important

Keep image references consistent with src/data/images.js. Do not bypass the existing image registry by inventing a different path format.

5. Vehicle detail pages

Vehicle details use the vehicle ID:

/vehicles/:id

Example:

/vehicles/vantage-gt

The matching vehicle data drives the detail page.

Every vehicle therefore needs a unique and stable id.

An invalid vehicle ID should show the project's Vehicle not found state.

6. Services and team

Services

Edit:

src/data/services.js

Add, remove or update service entries there.

Team

Edit:

src/data/team.js

Update team members and their profile information. Team photos should use the existing image registry.

7. Images

Physical image files live in:

public/images/

The central registry is:

src/data/images.js

The normal flow is:

public/images/
      ↓
src/data/images.js
      ↓
vehicles.js / team.js / page data
      ↓
website

Safest image replacement

Find the existing image in public/images/.

Replace it with the new image.

Keep the same filename.

Update alt text in src/data/images.js when the subject changes.

Adding an image

Put the file in public/images/.

Use a lowercase descriptive filename.

Add it to src/data/images.js.

Reference the registry entry from the relevant data file.

Example naming:

vehicle09.jpg
showroom-front.jpg
team-sales.jpg

Image rules

One physical photograph = one file.

Do not duplicate the same photograph under different filenames.

Avoid spaces.

Use descriptive names.

Keep filenames stable when replacing existing assets.

Alt text

Alt text should describe what is actually visible in the image.

8. Contact actions

The Contact page provides three direct contact paths:

WhatsApp

Opens a WhatsApp conversation using the configured WhatsApp number.

Phone

Uses the configured phone number and opens the device calling interface where supported.

Email

The visible email and Send an Email button open Gmail with the dealership email, subject and enquiry text prepared.

The destination email is controlled from:

src/data/site.js

Example:

email: 'owner@abcautos.com',

No Contact page code change is required just to change the dealership email.

9. What not to edit casually

Avoid changing these files for normal content updates:

src/components/
src/sections/
src/pages/
src/styles/
src/main.jsx
vite.config.js
package.json

These control UI structure, styling, routing and build configuration.

The project uses Oxlint:

npm run lint

Do not add an ESLint configuration simply for normal content editing.

10. Local development

From the project root:

npm install
npm run dev

The configured development server uses:

http://localhost:5173/

Because Vite is configured for LAN access, the terminal may also show a Network URL such as:

http://192.168.0.100:5173/

A phone or tablet on the same Wi-Fi can use that Network URL for responsive testing.

Port already in use

Only one process can use port 5173 at a time.

Stop the previous Vite server with:

Ctrl + C

or temporarily use another port:

npm run dev -- --port 5174

11. Lint and production build

Check code quality:

npm run lint

A clean result should report:

Found 0 warnings and 0 errors.

Create the production build:

npm run build

The output is generated in:

dist/

Preview the production build locally:

npm run preview

12. Production deployment

This V1 is a static frontend.

After:

npm run build

deploy the generated dist/ output to a compatible static host.

Examples:

Netlify

Vercel

Cloudflare Pages

Standard static web hosting

No database or server-side application is required for this V1.

HTTPS

Local development intentionally uses HTTP.

Production hosting normally provides HTTPS when the domain is connected.

SPA routing

Because the application uses client-side routing, production hosting must support SPA fallback/rewrites for routes such as:

/vehicles
/about
/contact
/vehicles/example-id

so direct visits and browser refreshes resolve to the application.

13. Responsive QA

Test the site around:

360px
390px
430px
768px
1024px
1280px
1440px
1920px

Pay particular attention to:

Header and mobile menu

Vehicle cards

Vehicle filtering

Vehicle detail page

Long vehicle names

Prices and mileage

Contact buttons

Email/phone/WhatsApp actions

Images

Text wrapping

No horizontal scrolling

No clipped controls

14. Final QA checklist

Before publishing:

Home loads correctly

Hero image displays

Featured vehicle links work

Vehicles page displays the inventory

Vehicle category filter works

Vehicle detail links open the correct vehicle

Invalid vehicle IDs show the expected not-found state

Vehicle photos and specifications are correct

About page content displays correctly

Team photos display correctly

Contact address is correct

Contact phone is correct

Contact email is correct

WhatsApp opens correctly

Phone link works on supported devices

Email opens Gmail with the intended recipient

Email subject/body are populated correctly

Mobile menu opens and closes correctly

Escape closes the mobile menu

Navigation works on mobile

No horizontal overflow at narrow widths

No broken images

No browser console errors during normal use

npm run lint passes

npm run build passes

15. V1 scope

This is intentionally a showcase and lead-generation frontend.

Not included in V1:

Customer accounts

Login

Online checkout

Shopping cart

Database

Real booking engine

Payment processing

Dealer admin dashboard

CRM integration

Inventory management backend

Automated email server

These can be added later without changing the core purpose of the V1 template.

16. Freeze and Git

After browser/runtime QA and successful lint/build:

git status
git add .
git commit -m "feat(automotive-dealer-01): finalize V1 showroom website"
git push origin main

Review git status before committing and make sure only intentional changes are included.

17. V1 completion standard

The project is ready to freeze when:

All five routes work.

Vehicle inventory and detail pages work.

Filtering works.

Contact actions work.

Gmail email flow works.

Mobile navigation works.

Responsive layouts are clean.

No horizontal overflow or obvious UI defects remain.

npm run lint passes with zero warnings/errors.

npm run build completes successfully.

After that, automotive-dealer-01 is ready to be committed, pushed and reused as the V1 automotive dealership template.