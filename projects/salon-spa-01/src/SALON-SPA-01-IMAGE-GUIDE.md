Salon Spa 01 — V1 Image Flow & Client Guide

Image Flow

public/images/
      ↓
src/data/images.js
      ↓
data objects / sections
      ↓
Home / Services / About / Team / Contact
      ↓
<img src={...}>
      ↓
Browser

Single Source Rule

All physical image files live only in:

public/images/

The central image registry is:

src/data/images.js

Components and sections should use the centralized image references instead of inventing unrelated image paths.

One Image = One Physical File

Never duplicate the same photograph under multiple filenames.

Bad

hero01.jpg
about01.jpg
contact01.jpg

when all three contain the same photo.

Good

hero01.jpg

Reuse that same image reference wherever needed.

This keeps image management clean and prevents unnecessary file duplication.

Client Image Changes

For normal image replacement, the client/developer should normally touch only:

public/images/
src/data/images.js

Replacing an existing image

Keep the existing filename when practical.

Example:

public/images/hero01.jpg

Replace the photo while keeping:

hero01.jpg

The existing code can continue using the same path.

Adding a new image

Put the physical image in:

public/images/

Add its path to:

src/data/images.js

Update the relevant data reference only when a new logical image slot is required.

Do not create duplicate copies of an existing image.

Recommended Image Sizes

These are recommendations, not strict requirements.

Hero / large image:
1800 × 1200 px

Team portrait:
900 × 1100 px

Salon / interior:
1400 × 1000 px

Gallery image:
1200 × 900 px

Preferred formats:

.webp
.jpg

Use PNG only when transparency is actually required.

The CSS controls the final displayed size, so clients do not need to resize every image to the exact rendered dimensions.

Current Image Map

hero
→ hero01.jpg

team
→ stylist01.jpg
→ stylist02.jpg
→ stylist03.jpg
→ stylist04.jpg

interiors
→ salon01.jpg
→ salon02.jpg
→ salon03.jpg

services
→ haircut01.jpg
→ facial01.jpg
→ nails01.jpg
→ spa01.jpg

gallery
→ reuses images from the central registry

The exact logical keys can be expanded later without changing the storage rule.

Image Implementation

Example:

const images = {
  hero: "/images/hero01.jpg",

  team: {
    stylist01: "/images/stylist01.jpg",
    stylist02: "/images/stylist02.jpg",
  },
};

A component then uses:

<img
  src={images.hero}
  alt="Maison Rosette"
/>

The browser requests:

/images/hero01.jpg

which is served from:

public/images/hero01.jpg

Team image flow

public/images/stylist01.jpg
        ↓
src/data/images.js
        ↓
src/data/team.js
        ↓
TeamCard / Team section
        ↓
<img>

Gallery / Slider image flow

public/images/*
        ↓
src/data/images.js
        ↓
gallery references
        ↓
Gallery / SalonSlider
        ↓
<img>

What NOT to Edit for a Normal Image Change

Do not normally touch:

src/app/
src/components/
src/sections/
src/pages/
src/styles/
src/main.jsx
vite.config.js
package.json

These files control application structure, rendering, routing, styling, or build configuration.

Only change them when the implementation itself needs to change.

Image Naming

Use stable descriptive names:

hero01.jpg
stylist01.jpg
stylist02.jpg
salon01.jpg
salon02.jpg
haircut01.jpg
facial01.jpg

Avoid:

IMG_9283.jpg
new-final.jpg
new-final-2.jpg
copy.jpg
test.jpg

Image Quality Rules

Use:

sharp images

good lighting

consistent team portraits

clean salon/interior photography

images without unnecessary text embedded inside them

images that do not expose private customer information

Avoid unnecessarily huge camera originals.

After Changing Images

Start development:

npm run dev

Check all five pages:

Home
Services
About
Team
Contact

Then run:

npm run lint

and:

npm run build

If production output is required:

npm run build

The production output is:

dist/

Deploy the fresh dist/ output to the production static host.

Image Error Check

List physical files:

find public/images -maxdepth 1 -type f | sort

Check source image references:

grep -RInE '(/images/|images\.)' src --include='*.js' --include='*.jsx'

For every referenced physical image, confirm the corresponding file exists in:

public/images/

A successful Vite build does not by itself guarantee that every runtime image reference points to an existing file.

Client Handover

For normal image updates, give the client/developer access to:

public/images/
src/data/images.js

Everything else should normally remain untouched.

Final Image Checklist

[ ] Hero image loads
[ ] About image loads
[ ] Contact image loads
[ ] Team images load
[ ] Gallery images load
[ ] Slider images load
[ ] No broken-image icon
[ ] No incorrect image paths
[ ] No duplicate physical images
[ ] Desktop checked
[ ] Mobile checked
[ ] npm run lint passes
[ ] npm run build passes

V1 Image Rule

Keep the image system simple:

Physical files
      ↓
public/images/
      ↓
Central registry
src/data/images.js
      ↓
Data / sections
      ↓
Components
      ↓
Browser

For ordinary client image replacement, changing the physical file while keeping its filename is the simplest and safest workflow.