Client Handoff Guide

1. What was changed in the V1

This project is a React + Vite + JavaScript + SCSS website for Keystone Learning.

Contact enquiry flow

Course and program enquiry buttons now pass the selected item to the Contact page.

Example:

Ask about this course
        ↓
/contact?interest=Course Name
        ↓
Contact form opens with that course already selected

The same flow is used for programs. The client does not need to manually select the item again when arriving from an enquiry button.

Email enquiry flow

The main Send via Email button is device-aware:

Phone / tablet
    ↓
mailto:
    ↓
device's configured email application

Desktop / laptop
    ↓
Gmail compose
    ↓
recipient + subject + enquiry details pre-filled

The direct Email card on the Contact page also uses the central emailLink value.

Central contact data

The email configuration is kept in src/data/site.js:

email: 'hello@keystonelearning.co',
emailLink: 'mailto:hello@keystonelearning.co',

Sass cleanup

The three image-frame ratio calls were changed from Sass slash division to numeric ratios, removing the slash-div deprecation warnings:

ProgramCard → 1.3333333333  (4:3)
MentorCard  → 1             (1:1)
CourseCard  → 1.5           (3:2)

2. Main client-edit area

For normal website maintenance, the safest areas are:

src/data/
public/images/

Content should normally be changed in the data files instead of inside React components.

3. Website and contact information

File

src/data/site.js

Use this file for the existing site-level information such as:

Site name and tagline

Phone number and display phone number

Email and email link

WhatsApp number/link

Address

Business hours

Other site-level content already defined in this file

Example:

phone: '+1 617 555 0142',
phoneDisplay: '(617) 555-0142',
email: 'hello@keystonelearning.co',
emailLink: 'mailto:hello@keystonelearning.co',
whatsapp: '+1 617 555 0142',
whatsappLink: 'https://wa.me/16175550142',

Keep these values centralized. Do not duplicate the same email or phone number inside individual components.

4. Courses

File

src/data/courses.js

Use it to add or edit courses, including the fields already used by the current data structure such as title, description, duration, format, level, category, outcomes and image.

Safe method

Open src/data/courses.js.

Copy an existing course object.

Change the content.

Give the new course a unique id.

Update its image reference using the existing structure.

Save.

Run:

npm run lint && npm run build

Do not rename existing property names unless a developer changes the application schema too.

5. Programs

File

src/data/programs.js

Use it to add or edit programs, including the fields already used by the current data structure such as title, tagline, description, duration, format, benefits and image.

Safe method

Copy an existing program object.

Change the content.

Give it a unique id.

Update its image reference.

Save.

Run:

npm run lint && npm run build

The existing program enquiry button automatically passes the program title to the Contact page.

6. Mentors / team

File

src/data/team.js

Use this for mentor/team content already represented in the project, such as name, role, bio, credentials and image reference.

For a new mentor, copy an existing object and preserve its current field names.

7. Testimonials

File

src/data/testimonials.js

Use this for testimonial content already represented by the current schema, such as quote, person name, role/company and image/reference fields where present.

For a new testimonial, copy an existing object and preserve its structure.

8. Images

Main folder

public/images/

The current project stores the site's image assets here.

Replacing an image

Put the replacement image inside public/images/.

Follow the existing filename/path convention.

Update the relevant data reference if the filename changed.

Run:

npm run lint && npm run build

Central image mapping

The project also contains:

src/data/images.js

When an image is mapped through this file, update the mapping there rather than hardcoding the new path inside a React component.

Recommended architecture:

Data → image mapping → component

9. How to add a new course image

1. Put the image in public/images/
2. Open src/data/courses.js
3. Find or add the course
4. Update its image using the existing data structure
5. Save
6. Run npm run lint && npm run build

Do not edit CourseCard.jsx just to replace an image.

10. How to add a new program image

1. Put the image in public/images/
2. Open src/data/programs.js
3. Find or add the program
4. Update its image using the existing data structure
5. Save
6. Run npm run lint && npm run build

Do not edit ProgramCard.jsx just to replace an image.

11. Contact enquiry behavior

Course enquiry

Course card
    ↓
Ask about this course
    ↓
Contact page
    ↓
Course automatically selected

Program enquiry

Program card
    ↓
Enquire about this program
    ↓
Contact page
    ↓
Program automatically selected

The client normally does not need to modify ContactForm.jsx for adding a normal course or program.

12. Email setup

The primary email is configured in:

src/data/site.js

Example:

email: 'hello@keystonelearning.co',
emailLink: 'mailto:hello@keystonelearning.co',

If the business email changes, update both values in site.js.

The form then uses the same central email automatically.

13. Phone and WhatsApp setup

Change phone and WhatsApp details in:

src/data/site.js

For phone numbers, keep the machine-readable phone value and the human-readable phoneDisplay value consistent.

For WhatsApp, keep the number and whatsappLink consistent.

14. Files clients should normally NOT touch

Normal content updates should not require editing:

src/App.jsx
src/main.jsx
vite.config.js
package.json
package-lock.json

The following are developer-maintenance areas unless the requested change is specifically technical:

src/components/
src/sections/
src/pages/
src/styles/
src/index.scss

These control layout, behavior, responsive rules, styling, navigation and other application logic.

15. Adding a completely new course

Use this workflow:

Open src/data/courses.js
        ↓
Duplicate an existing course object
        ↓
Change the course content
        ↓
Give it a unique id
        ↓
Add/update the image reference
        ↓
Save
        ↓
npm run lint && npm run build

The existing CourseCard renders courses from the data structure; no card component edit should be necessary for normal content additions.

16. Adding a completely new program

Use this workflow:

Open src/data/programs.js
        ↓
Duplicate an existing program object
        ↓
Change the program content
        ↓
Give it a unique id
        ↓
Add/update the image reference
        ↓
Save
        ↓
npm run lint && npm run build

The existing ProgramCard handles the display and its enquiry button passes the selected program to Contact.

17. Verification checklist

After any content or image change, run:

npm run lint && npm run build

Expected result:

Found 0 warnings and 0 errors.

Then manually check the affected page.

For enquiry flow:

Course → Ask about this course → Contact → correct item selected
Program → Enquire about this program → Contact → correct item selected

For email flow:

Phone → Send via Email → native email app
Desktop → Send via Email → Gmail compose
Contact Email card → mail handler

18. Git workflow after an approved change

Before editing:

git status

After editing and testing:

npm run lint && npm run build
git status
git diff

Review the diff before committing.

Then:

git add .
git commit -m "chore(education-coaching-01): update client content"
git push origin main

Do not commit node_modules/ or temporary/generated files.

19. Quick reference

Requirement

File / folder

Site name/tagline

src/data/site.js

Email

src/data/site.js

Phone

src/data/site.js

WhatsApp

src/data/site.js

Address

src/data/site.js

Hours

src/data/site.js

Add/edit courses

src/data/courses.js

Add/edit programs

src/data/programs.js

Add/edit mentors

src/data/team.js

Add/edit testimonials

src/data/testimonials.js

Add/replace image files

public/images/

Central image mapping

src/data/images.js

Contact form logic

src/components/ContactForm/ — developer area

Course card logic

src/components/CourseCard/ — developer area

Program card logic

src/components/ProgramCard/ — developer area

Layout/styling

src/components/, src/sections/, src/pages/, src/styles/ — developer area

20. One rule to remember

CONTENT      → src/data/
IMAGES       → public/images/
LAYOUT       → developer
FUNCTIONALITY→ developer
STYLING      → developer

For normal client updates, stay inside the data files and image folder. Component logic and styling should be changed only for a specific development task.