1. Project overview

This is the V1 website for Meridian Dental Studio.

The website uses:

React

Vite

JavaScript / JSX

SCSS

Lucide icons

Oxlint

The project is designed so normal client content changes can be made mainly from the data files and image folder, without changing component logic.

2. The most important rule

For everyday client updates:

CONTENT       → src/data/
IMAGES        → public/images/
LAYOUT        → developer
FUNCTIONALITY → developer
STYLING       → developer

A client should normally not need to edit React component files just to change text, contact details, treatments, doctors, or images.

3. Website / clinic information

File

src/data/site.js

Use this file for:

Clinic name

Short name

Tagline

Description

Navigation labels/paths

Phone number

Display phone number

Email

WhatsApp number

WhatsApp display number

Address

Map address/query

Opening hours

Social links

Footer links

Main CTA labels/paths

Trust-stat values

Keep phone, email and WhatsApp information centralized here rather than hardcoding them in components.

4. Email behavior

The project supports two email paths.

Phone / tablet

The site uses a mailto: link, which opens the device's configured email application.

Desktop / PC

The enquiry flow opens a Gmail compose window with the recipient, subject and enquiry details pre-filled.

The contact page's direct Email us card uses the same device-aware behavior.

The relevant helper functions are:

buildGmailLink()
buildMailtoLink()

These are developer-maintained functionality.

5. WhatsApp and phone

Contact details are centralized in:

src/data/site.js

Phone

phone
phoneDisplay

phone is used for the callable tel: link. phoneDisplay is the number shown to visitors.

WhatsApp

whatsapp
whatsappDisplay

The WhatsApp URL is generated through buildWhatsappLink().

When changing the business number, keep the number and display value consistent.

6. Treatments

File

src/data/treatments.js

Use it to:

Change a treatment title

Change summary/details

Change icon reference

Change image reference

Add a treatment

Remove a treatment

Adding a treatment

Open src/data/treatments.js.

Copy an existing treatment object.

Keep the existing property names and structure.

Give the new treatment a unique id.

Replace the content.

Set the correct image reference.

Save.

Run the project checks.

Do not rename data properties unless the component schema is also changed by a developer.

7. Treatment enquiry auto-selection

Treatment cards pass the treatment title to the Contact page.

Example:

Dental Implants
    ↓
Enquire about this
    ↓
/contact?treatment=Dental%20Implants
    ↓
Preferred treatment
    ↓
Dental Implants is automatically selected

A normal client adding a correctly structured treatment does not need to edit the Contact form for this behavior.

8. Doctors

File

src/data/doctors.js

Use this file for doctor/team content used by the project.

Typical fields include:

Doctor name

Specialty / role

Biography

Credentials

Image reference

To add a doctor, duplicate an existing object, preserve its field names, give it a unique id, replace the content/image, and run the checks.

9. Images

Main folder

public/images/

This contains the website image assets.

Images may be used for treatments, doctors, hero areas, about content, and other sections.

Replacing an existing image

Recommended workflow:

1. Put the replacement image in public/images/
2. Keep the existing filename where practical
3. If the filename changes, update the corresponding data reference
4. Run lint + build
5. Visually check the affected page

Keeping the existing filename is the safest replacement method because it usually avoids additional application-code changes.

10. Central image mapping

File

src/data/images.js

This file provides centralized image mapping where the application uses image keys.

If a component receives an image key rather than a direct file path, update that mapping here.

Do not scatter new hardcoded image paths through React components when the project already uses this mapping.

11. How to replace a treatment image

1. Add the image to public/images/
2. Open src/data/images.js if the treatment uses an image key
3. Update the existing mapping/reference
4. Save
5. Run npm run lint && npm run build
6. Check the treatment page on desktop and mobile

If the treatment data itself contains the image reference, update the corresponding entry in src/data/treatments.js instead.

12. Social links

File

src/data/site.js

Update the social array for Instagram, Facebook, Google Reviews, or other existing social destinations.

Use the clinic's real public URLs.

13. Footer links and CTA

File

src/data/site.js

Footer navigation is controlled through footerLinks.

Main CTA settings are controlled through ctaLinks.

For normal copy/path changes, edit these data structures rather than hardcoding links in Footer.jsx or other components.

14. Trust statistics

File

src/data/site.js

The displayed trust statistics are stored in trustStats.

Only replace these numbers with verified clinic information.

15. Contact form

Component

src/components/ContactForm/ContactForm.jsx

This is a developer-maintained functional file.

It handles:

Name

Email

Phone

Preferred treatment

Preferred date

Message

Validation

Gmail flow

Native email flow

WhatsApp flow

Treatment auto-selection

The client normally should not edit this file for content-only changes.

16. Contact page

File

src/pages/Contact/Contact.jsx

This contains the contact cards, contact form, address, hours, map and direct contact actions.

Normal business information should be changed through src/data/site.js instead of hardcoding it here.

17. Styling and layout

These are developer-managed areas:

src/components/
src/sections/
src/pages/
src/styles/
src/index.scss

They control layout, typography, colors, cards, buttons, responsive behavior, forms, spacing and interactions.

Do not change selectors, breakpoints or spacing for ordinary content maintenance.

18. Vite configuration

File

vite.config.js

This controls the development and production build setup and is developer-managed.

Do not change Vite settings for ordinary content updates.

19. Linting and build checks

The project uses Oxlint.

Run:

npm run lint

The target result is:

Found 0 warnings and 0 errors.

Then run:

npm run build

The build should finish successfully with:

✓ built

A Vite bundle-size notice is different from a compilation failure and should be handled separately by development.

20. Recommended client workflow

For a normal content change:

1. Edit the relevant file in src/data/
2. Add/replace the image in public/images/ if needed
3. Save
4. Run npm run lint && npm run build
5. Open the relevant page
6. Check desktop
7. Check mobile
8. Test the changed link/form/button

21. Complete example: adding a new treatment

Client provides treatment content
        ↓
Add/replace treatment image
        ↓
public/images/
        ↓
Update image mapping/data reference if required
        ↓
src/data/treatments.js
        ↓
Treatment card renders automatically
        ↓
"Enquire about this"
        ↓
Contact page
        ↓
Treatment is automatically selected

No treatment-card or Contact-form code change is normally required for a standard new treatment.

22. What not to edit for normal client work

Avoid editing:

src/App.jsx
src/main.jsx
vite.config.js
package.json
package-lock.json

Also avoid editing component/page/section logic just to change client content:

src/components/
src/sections/
src/pages/

Styling files should also remain developer-managed unless the requested change is a design task.

23. Client-edit reference table

Requirement

File / folder

Clinic name/tagline

src/data/site.js

Phone

src/data/site.js

Email

src/data/site.js

WhatsApp

src/data/site.js

Address

src/data/site.js

Hours

src/data/site.js

Social links

src/data/site.js

Footer links

src/data/site.js

Trust statistics

src/data/site.js

Treatments

src/data/treatments.js

Doctors

src/data/doctors.js

Image mapping

src/data/images.js

Image files

public/images/

Contact form logic

src/components/ContactForm/ContactForm.jsx — developer

Treatment card logic

src/components/TreatmentCard/TreatmentCard.jsx — developer

Contact page logic

src/pages/Contact/Contact.jsx — developer

24. What to prepare when requesting a new treatment

Provide:

Treatment title
Short summary
Treatment details
Image
Icon/key if required by the existing data structure

Keep the existing schema intact.

25. What to prepare when requesting a new doctor

Provide:

Doctor name
Specialty / role
Biography
Credentials
Image

Keep the current data structure.

26. Image replacement best practice

When possible, replace an existing image while keeping its filename and aspect ratio. This minimizes code changes and reduces the chance of layout shifts.

Example:

public/images/treatment-implants.jpg

Replace the file while keeping the same name.

Back up the previous image before replacing it.

27. Contact behavior to verify after deployment

Test:

Call the studio
    → phone dialer on supported devices

Email us
    → native email handler on phone/tablet
    → Gmail compose on desktop

WhatsApp
    → WhatsApp opens

Treatment enquiry
    → Contact page opens
    → correct treatment is selected automatically

Send via Email
    → complete enquiry is pre-filled
    → phone uses mailto
    → desktop uses Gmail

Send via WhatsApp
    → complete enquiry is pre-filled

28. Git workflow

Before a change:

git status

After the change:

npm run lint && npm run build
git diff

When everything is verified:

git add .
git commit -m "chore(dental-02): finalize Meridian Dental Studio V1"
git push origin main

Do not commit node_modules/ or temporary files.

29. Final maintenance rule

Need to change wording?
→ src/data/

Need to change contact information?
→ src/data/site.js

Need to add/change treatment?
→ src/data/treatments.js

Need to add/change doctor?
→ src/data/doctors.js

Need to replace an image?
→ public/images/
→ update image mapping/data reference if needed

Need to change layout/design?
→ developer

Need to change form/email/WhatsApp behavior?
→ developer

The V1 is structured so normal client content can be maintained centrally without duplicating information across React components.