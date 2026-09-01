Architecture Studio 01 — Client Editing Guide

This guide explains exactly which files a client can edit, where to change contact details, how to replace images, and which project files should normally be left untouched.

1. Golden Rule

For normal content updates, the client should mainly work inside:

src/data/

and:

public/images/

Do not edit React components, SCSS, routing, Vite config, or package files just to change normal website content.

Client-editable areas

src/data/site.js
src/data/projects.js
src/data/services.js
src/data/team.js
src/data/images.js
public/images/

These files control the majority of the website's visible content.

2. Where to Change Mobile Number, Email & WhatsApp

File

src/data/site.js

The contact information is stored under:

contact: {
  email: '...',
  phone: '...',
  whatsapp: '...',
  ...
}

Email

Change:

email: 'hello@example.com',

to the studio's real email:

email: 'studio@marrow.example',

The email is used by the Contact page and enquiry links.

Phone / Mobile Number

Change:

phone: '+91 98765 43210',

Use the number you want visitors to call.

The website converts it into a tel: link automatically.

Keep the displayed number readable with spaces if desired.

Example:

phone: '+91 98765 43210',

WhatsApp Number

Change:

whatsapp: '+91 98765 43210',

Use the WhatsApp number that should receive enquiries.

The website automatically creates the WhatsApp URL.

Do not manually write:

https://wa.me/...

inside the data field.

Only keep the phone number.

Example:

whatsapp: '+91 98765 43210',

The Contact page's:

Send an enquiry

button opens this WhatsApp number.

3. Studio Address

Also edit:

src/data/site.js

Inside the contact address:

address: {
  line1: 'Studio Address',
  line2: 'City, State / Postcode',
  country: 'India',
},

Example:

address: {
  line1: '24 Example Street',
  line2: 'New Delhi, 110001',
  country: 'India',
},

Do not change React components to update the address.

4. Opening Hours

Edit the hours data in:

src/data/site.js

Example structure:

hours: [
  {
    days: 'Monday — Friday',
    time: '09:00 — 18:00',
  },
  {
    days: 'Saturday',
    time: '10:00 — 14:00',
  },
  {
    days: 'Sunday',
    time: 'Closed',
  },
],

You can change the days and times.

5. Studio Name & General Site Information

Edit:

src/data/site.js

This is where the main studio/site information should live.

Typical editable content includes:

studio name

contact information

address

opening hours

navigation labels

statistics

testimonial

client names

Keep the existing object/array structure intact when changing text.

6. Project Information

File

src/data/projects.js

Use this file to manage portfolio projects.

You can change:

project title

location

year

category

summary

description

project cover image

project detail image

Example:

{
  id: 'project-01',
  title: 'Riverside House',
  location: 'London',
  year: '2026',
  category: 'Residential',
  summary: 'A compact house shaped around light and material.',
  cover: images.project01,
}

Do not change the component code just to rename a project.

7. Project Categories

The Projects page supports categories.

When adding or changing a category, keep the existing data structure in:

src/data/projects.js

Examples:

Residential
Hospitality
Cultural
Interiors

Use categories consistently so filtering continues to work correctly.

8. Services

File

src/data/services.js

Use this file for the studio's services.

You can edit:

service title

summary

service points

service image

Example:

{
  id: 'architecture',
  title: 'Architecture',
  summary: 'Full architectural design from concept through delivery.',
  points: [
    'Concept design',
    'Planning',
    'Technical development',
  ],
  image: images.services01,
}

You can add or remove service points while keeping the same structure.

9. Team Members

File

src/data/team.js

Use this file to edit:

team member name

role

biography

team image

Example:

{
  id: 'team-01',
  name: 'Jane Smith',
  role: 'Director',
  bio: 'Architect and founder of the studio.',
  image: images.team01,
}

10. Image System — Very Important

The website uses a centralized image system.

The recommended flow is:

1. Physical image
        ↓
public/images/
        ↓
2. Image registry
src/data/images.js
        ↓
3. Data files
projects.js / services.js / team.js
        ↓
4. React components
        ↓
5. Website

This keeps images organized and makes future client updates easier.

11. Where to Put New Images

Put physical image files here:

public/images/

Example:

public/images/
├── hero01.jpg
├── project01.jpg
├── project01-detail.jpg
├── project02.jpg
├── services01.jpg
├── team01.jpg
└── contact01.jpg

Do not put client images inside:

src/components/
src/pages/
src/sections/

12. How to Replace an Existing Image

The safest method is to replace the physical image while keeping its filename.

For example, if the site currently uses:

public/images/project01.jpg

replace it with the new photo using the same filename:

public/images/project01.jpg

This means the existing data/components continue to work without further code changes.

13. How to Add a New Image

When a genuinely new image is required:

Step 1

Add the image to:

public/images/

Example:

public/images/project07.jpg

Step 2

Register it inside:

src/data/images.js

Use the existing structure in that file.

Conceptually:

project07: {
  src: '/images/project07.jpg',
  alt: 'New architecture project',
},

Step 3

Reference that image from the appropriate data file, such as:

src/data/projects.js

14. One Physical Image = One File

Do not keep duplicate copies of the same photograph such as:

project01.jpg
project01-copy.jpg
project01-final.jpg
project01-new.jpg

when they are actually the same photo.

Prefer one physical image file and reuse its registered image key where appropriate.

15. Alt Text

When adding a new image, provide meaningful alt text in:

src/data/images.js

Good:

alt: 'Concrete residential house with courtyard',

Avoid:

alt: 'image1',
alt: 'photo',
alt: 'IMG_1234',

16. Which Files the Client Should NOT Touch

Unless specifically instructed by a developer, do not edit:

src/app/
src/components/
src/pages/
src/sections/
src/styles/
src/main.jsx
index.html
vite.config.js
package.json
package-lock.json
eslint.config.js

These files control the application structure, layout, routing, styling, build system and development tooling.

Changing them can break the website.

17. Do Not Edit These Just to Change Content

Do not change:

Header.jsx
Footer.jsx
Hero.jsx
Contact.jsx
ProjectCard.jsx
ServiceCard.jsx
TeamCard.jsx

just to change:

phone number

email

WhatsApp

address

project title

service text

team member

image

Those values are intentionally controlled from the data files.

18. Contact Page Behaviour

The Contact page is intentionally simple.

It contains:

Studio
Address

Get in touch
Email
Phone

Opening hours

Send an enquiry

The Send an enquiry action uses the WhatsApp number stored in:

src/data/site.js

There is no separate booking system or contact database in this V1.

19. Map

The architecture studio V1 does not require a map for normal contact information.

The Contact page is designed around:

Address
Email
Phone
WhatsApp
Opening hours

Do not add a map merely to display an address.

A map should only be introduced later if there is a genuine business/location requirement.

20. Home Page Content

The Home page combines data and reusable sections.

Normal client edits should therefore happen through:

src/data/site.js
src/data/projects.js
src/data/services.js
src/data/images.js

The Home page should not normally require direct JSX editing.

21. Changing the Hero Image

The Hero image is registered in:

src/data/images.js

The physical file lives in:

public/images/

For the safest update, keep the existing hero filename and replace the file.

Example:

public/images/hero01.jpg

22. Changing the Contact Image

The Contact image follows the same system.

Physical file:

public/images/contact01.jpg

Registry:

src/data/images.js

Keep the existing filename when simply replacing the photograph.

23. Image Sizing

Do not upload extremely large images directly from a camera/phone without optimization.

The site uses responsive image frames, but very large source files still increase loading time.

Recommended workflow:

Original photo
      ↓
Crop appropriately
      ↓
Compress/optimize
      ↓
JPEG/WebP
      ↓
public/images/

For normal portfolio images, optimized files are preferable to multi-megabyte originals.

24. Updating Content Safely

After changing data or images:

npm run lint

Then:

npm run build

Both should complete successfully.

25. Do Not Delete Data Keys Randomly

If a component expects:

title
summary
image
year
category

do not randomly remove those properties.

If a field is no longer needed, check the component/data usage first.

26. Before Replacing an Image

Check the filename currently used.

Example:

hero01.jpg
project01.jpg
services01.jpg
team01.jpg
contact01.jpg

Replacing an existing file with the same filename is safer than changing code everywhere.

27. Final Client Checklist

For normal updates, the client should think:

CONTACT
↓
src/data/site.js

PROJECTS
↓
src/data/projects.js

SERVICES
↓
src/data/services.js

TEAM
↓
src/data/team.js

IMAGES
↓
public/images/
+
src/data/images.js

Everything else should normally be left alone.

28. Recommended Editing Rule

Safe for the client

Text
Phone
Email
WhatsApp
Address
Hours
Projects
Services
Team
Images
Image alt text
Stats
Testimonials
Client names

Normally developer-only

React components
SCSS
Routing
Vite configuration
Build configuration
Dependencies
ESLint configuration
Application structure

29. Important

Before changing any structural code, make a backup or Git commit.

For ordinary content updates, do not modify the application code when the same change can be made through the data files.

The purpose of this architecture is to keep future client updates simple and low-risk