job-board-01 — Hirely

Client Editing & Maintenance Guide

This document is the handoff guide for the Hirely V1 website.

Important principle: clients should normally edit centralized content/data and images. They should not edit React components, SCSS, routes, or build configuration for ordinary content changes.

1. Project scope

React + Vite + JavaScript + SCSS

Frontend-only V1

No backend

No authentication

No database

No ATS integration

No payment/checkout system

Routes

/
 /jobs
 /jobs/:id
 /companies
 /contact

2. What the client edits

Requirement

Edit this file/folder

Brand name and tagline

src/data/site.js

Navigation labels/links

src/data/site.js

Email / phone / WhatsApp

src/data/site.js

Address / business hours

src/data/site.js

Homepage hero/copy

src/data/site.js

Homepage statistics

src/data/site.js

Jobs

src/data/jobs.js

Companies

src/data/companies.js

Job categories

src/data/categories.js

Testimonials

src/data/testimonials.js

Image mapping

src/data/images.js

Actual image files

public/images/

3. Brand and general copy

Edit:

src/data/site.js

This file controls the platform identity and general website copy.

Typical fields include:

site.name
site.tagline
site.nav
site.contact
site.cta
site.hero
site.howItWorks
site.stats
site.testimonialsHeading
site.employerCta
site.companiesPage
site.jobsPage
site.contactPage

Example

name: "Hirely",
tagline: "Find the work that fits your next chapter.",

Change the values, but keep the existing object structure.

4. Contact details

Edit only:

src/data/site.js

Current contact structure:

contact: {
  addressLines: [
    "3rd Floor, Crescent Business Park",
    "Boring Road",
    "Patna, Bihar 800001",
  ],
  phoneDisplay: "+91 612 335 0192",
  phoneHref: "tel:+916123350192",
  whatsappDisplay: "+91 98350 61147",
  whatsappNumber: "919835061147",
  email: "hello@hirely.example",
  hours: [
    { day: "Monday – Friday", time: "9:30 AM – 6:30 PM" },
    { day: "Saturday", time: "10:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
},

Email

email: "hello@yourdomain.com",

Phone

phoneDisplay: "+91 98765 43210",
phoneHref: "tel:+919876543210",

WhatsApp

whatsappNumber must use international digits only:

whatsappNumber: "919876543210",

Display formatting can remain separate:

whatsappDisplay: "+91 98765 43210",

Address and hours

Edit the existing addressLines and hours values.

Do not change unrelated code.

5. Navigation

Edit:

src/data/site.js

Example:

nav: [
  { label: "Home", path: "/" },
  { label: "Jobs", path: "/jobs" },
  { label: "Companies", path: "/companies" },
  { label: "Contact", path: "/contact" },
],

You may change labels.

Do not add a new route by changing this array alone. A new route also requires a page and routing implementation.

6. Homepage content

Most editable homepage content is in:

src/data/site.js

Common areas:

hero
howItWorks
stats
employerCta

The client can update:

eyebrow text

headlines

descriptions

process-step text

statistics

employer CTA copy

Keep the same data structure.

7. Adding or editing a job

Edit:

src/data/jobs.js

Job data includes fields such as:

id
title
companyId
category
type
workMode
experience
location
salary
postedDate
description
responsibilities
requirements
benefits

Normal edits

The client can change:

title

company

category

type

work mode

experience

location

salary

description

responsibilities

requirements

benefits

posted date

8. Adding a new job safely

Step 1 — Create a unique job ID

Example:

id: "frontend-engineer-vertex-01",

Never duplicate an existing job ID.

Step 2 — Use a real company ID

Check:

src/data/companies.js

Then set:

companyId: "existing-company-id",

Step 3 — Use a real category ID

Check:

src/data/categories.js

Then set:

category: "existing-category-id",

Step 4 — Add the job using the same structure as existing jobs

Correct relationships allow the job to appear in listings, filtering, related jobs, and company opening counts.

Important

Do not casually rename existing:

job id
company id
category id

because other parts of the website may depend on them.

9. Companies

Edit:

src/data/companies.js

Company data normally controls:

company name

industry

location

logo/image reference

company description

Opening counts

The company opening count is derived from jobs.js.

Do not manually maintain a duplicate opening-count value.

When a job's companyId is correct, the company's opening count stays synchronized automatically.

10. Adding a company

Create a unique company ID.

Add the company to src/data/companies.js.

Add its logo/image to public/images/ when needed.

Use the same company ID in src/data/jobs.js.

Example:

companies.js
id: "northstar"

jobs.js
companyId: "northstar"

IDs must match exactly.

11. Categories

Edit:

src/data/categories.js

Categories are used by:

job filters

homepage category UI

job grouping

job data relationships

When a job has:

category: "engineering",

a matching category ID must exist.

Do not rename a category ID without checking every job that references it.

12. Testimonials

Edit:

src/data/testimonials.js

Use it for candidate testimonial content.

Keep the existing object/array structure.

13. Images

Actual image folder

public/images/

Central image registry

src/data/images.js

Image rule

One physical image = one file.

Prefer local images in the final V1.

Safest way to swap an existing image

Keep the exact same filename.

Example:

public/images/hero-main.jpg

Replace the photograph but keep:

hero-main.jpg

No registry change is needed when the filename stays identical.

Adding a new image

Put the file into public/images/.

Add/update its mapping in src/data/images.js when required.

Make sure the path exactly matches the physical filename.

Test the affected page.

Do not use broken, guessed, or remote-only image URLs for final local assets.

14. Company logos

Current company image files follow:

public/images/co-*.jpg

For a simple logo replacement, keep the same filename.

Use real square logo artwork whenever available.

15. Application flow

The application form is implemented in:

src/components/ApplicationForm/ApplicationForm.jsx

The client normally should not edit this file.

It collects:

candidate name

candidate email

phone

optional note

There is no backend application database in V1.

Email destination

The destination email comes from:

site.contact.email

Therefore, to change the hiring/contact email, edit:

src/data/site.js

Do not hard-code a new email into the React component.

Email behavior

The application email flow supports:

mobile: mailto:

desktop: Gmail web compose

The subject and application body are generated from the form.

WhatsApp destination

The number comes from:

site.contact.whatsappNumber

Change it in src/data/site.js.

16. Mobile navigation

The mobile menu is implemented in:

src/components/Header/Header.jsx
src/components/Header/Header.scss

Clients should not modify these for normal content changes.

The mobile drawer already handles:

open/close

Escape

backdrop click

navigation close

background scroll locking

responsive behavior

Use src/data/site.js to change navigation labels and destinations that already exist.

17. Files clients should normally NOT touch

Unless a developer is intentionally handling a structural change, leave these alone:

src/components/
src/pages/
src/app/index.jsx
src/main.jsx
src/styles/
src/utils/
vite.config.js
package.json
package-lock.json

Do not edit React/SCSS merely to change:

job information

company information

category information

testimonials

contact information

social links

images

Those belong in the centralized data/image layer.

18. When to involve a developer

A developer should handle requests involving:

new pages/routes

new backend/database functionality

authentication

ATS/CRM integrations

payment systems

major layout changes

component redesign

new interaction systems

animation architecture

responsive architecture changes

global design system changes

React/Vite dependency changes

build configuration changes

new third-party services

These are structural/technical changes rather than ordinary content editing.

19. Client update workflow

For normal content work:

1. Identify the correct file in src/data/.
2. Edit only the required values.
3. Add/replace the required image in public/images/.
4. Save.
5. Run lint and build.
6. Test the affected route.
7. Check desktop.
8. Check mobile.
9. Commit the change.

Run:

npm run lint && npm run build

Both must pass before delivery.

20. Visual QA checklist

Check:

/
 /jobs
 /jobs/<job-id>
 /companies
 /contact

On both desktop and mobile, verify:

[ ] No broken images
[ ] Job information is correct
[ ] Company information is correct
[ ] Category filters work
[ ] Salary/location data is correct
[ ] Navigation links work
[ ] Email application flow works
[ ] WhatsApp application flow works
[ ] Mobile drawer works
[ ] No horizontal overflow
[ ] No clipped text
[ ] No missing CTA buttons

21. Git workflow

After verification:

git status --short

Review the changes.

Then:

git add .
git commit -m "feat(job-board-01): finalize Hirely V1"
git push origin main

Finally:

git status

Expected:

nothing to commit, working tree clean

22. Recommended content commit messages

Jobs:

git add .
git commit -m "content: update job listings"

Companies:

git add .
git commit -m "content: update company directory"

Contact:

git add .
git commit -m "content: update contact details"

Images:

git add .
git commit -m "content: update website imagery"

Final V1:

git add .
git commit -m "feat(job-board-01): finalize Hirely V1"

23. Quick file map

BRAND / CONTACT / NAV / GENERAL COPY
→ src/data/site.js

JOBS
→ src/data/jobs.js

COMPANIES
→ src/data/companies.js

CATEGORIES
→ src/data/categories.js

TESTIMONIALS
→ src/data/testimonials.js

IMAGE MAPPING
→ src/data/images.js

ACTUAL IMAGES
→ public/images/

APPLICATION LOGIC
→ src/components/ApplicationForm/ApplicationForm.jsx

MOBILE HEADER
→ src/components/Header/Header.jsx
→ src/components/Header/Header.scss

PAGES
→ src/pages/

REUSABLE UI
→ src/components/

GLOBAL DESIGN
→ src/styles/

24. Golden rules

Content/data first: use src/data/.

Images stay local: use public/images/.

Keep IDs consistent: job/company/category IDs are relationships.

Do not duplicate data: company opening counts are derived.

Do not edit components for ordinary copy changes.

Do not change dependencies for content updates.

Run npm run lint && npm run build after edits.

Always test desktop and mobile.

Keep the current Hirely visual identity unless a redesign is explicitly requested.

Commit and push only after QA is clean.

25. Handoff

Hirely V1 is intentionally maintained through a centralized content/data layer.

The expected maintenance flow is:

Client request
    ↓
Find correct src/data/*.js file
    ↓
Edit content
    ↓
Update public/images/ when required
    ↓
npm run lint && npm run build
    ↓
Desktop + mobile QA
    ↓
git add .
git commit
git push

For structural or technical changes, use a developer rather than changing the component architecture manually.