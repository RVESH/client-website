Preloader --- V1 Use Flow
Purpose
This document defines the fixed V1 workflow for taking one preloader
design from the SouthBridge Foundation and using it inside any website
skeleton.

Foundation → copy → rename → connect in App.jsx → ready.

The loading logic remains in App.jsx.
The visual design comes from the selected Foundation preloader.

1. Foundation
Choose exactly one preloader design:

foundations/
└── preloaders/
    ├── Preloader01.jsx
    ├── Preloader01.scss
    ├── Preloader02.jsx
    ├── Preloader02.scss
    ├── ...
    ├── Preloader12.jsx
    └── Preloader12.scss
Example:

Preloader03.jsx
Preloader03.scss
2. Website destination
Every V1 website has:

restaurant-01/
└── src/
    └── components/
        └── Preloader/
            ├── Preloader.jsx
            └── Preloader.scss
Copy the selected Foundation files:

Preloader03.jsx → Preloader.jsx
Preloader03.scss → Preloader.scss
3. Required change inside Preloader.jsx
The Foundation component name becomes the website's common component
name:

function Preloader({
  open = true,
  progress = 0,
  brand = "SOUTHBRIDGE",
}) {
The stylesheet import becomes:

import "./Preloader.scss";
The selected design's visual classes can remain unchanged.

The visual component receives its state from App.jsx.

4. App.jsx is the loading controller
For V1 websites, the loading controller lives in:

restaurant-01/
└── src/
    └── App.jsx
This is the only application file that controls the real website loading
lifecycle.

Import:

import Preloader from "./components/Preloader/Preloader";
The lifecycle is:

App starts
   ↓
loading = true
   ↓
Preloader visible
   ↓
DOM readiness
   ↓
fonts ready
   ↓
initial non-lazy images ready
   ↓
minimum loader time
   ↓
progress = 100
   ↓
one browser paint
   ↓
loading = false
   ↓
Preloader disappears
5. What App.jsx controls
The fixed V1 App controller handles:

✓ loading state
✓ progress state
✓ DOM readiness
✓ font readiness
✓ initial non-lazy image readiness
✓ image timeout protection
✓ minimum loader display time
✓ final 100% progress
✓ final browser paint
✓ route architecture
✓ unknown-route fallback
The visual Foundation does not control these things.

6. App.jsx connection
At the top:

import { useEffect, useState } from "react";

import Preloader from "./components/Preloader/Preloader";
Inside App():

const [loading, setLoading] = useState(true);
const [progress, setProgress] = useState(0);
Render the loader before the router:

return (
  <>
    {loading && (
      <Preloader
        open={loading}
        progress={progress}
        brand="LUMA"
      />
    )}

    <HashRouter>
      <Routes>
        {/* website routes */}
      </Routes>
    </HashRouter>
  </>
);
The brand can change per website:

brand="LUMA"
This is a website-specific content change, not a structural change.

7. What must NOT be changed
When implementing the Foundation preloader:

❌ Do not create a preloader route
❌ Do not create a preloader page
❌ Do not change routes because of the preloader
❌ Do not add navigation for the preloader
❌ Do not add context
❌ Do not add services
❌ Do not add utils
❌ Do not put loading logic inside Home.jsx
❌ Do not put loading logic inside Header.jsx
❌ Do not put loading logic inside sections
The preloader is a global visual layer controlled by App.jsx.

8. Exactly which folders/files are touched
For normal V1 integration, only these are required:

restaurant-01/
└── src/
    ├── components/
    │   └── Preloader/
    │       ├── Preloader.jsx    ← selected Foundation visual
    │       └── Preloader.scss   ← selected Foundation styles
    │
    └── App.jsx                  ← loading controller
That is the complete Preloader integration.

9. Foundation → Website workflow
FOUNDATION
    │
    │ choose one visual
    ↓
Preloader03.jsx
Preloader03.scss
    │
    │ copy + rename
    ↓
restaurant-01
    │
    └── src/components/Preloader/
            ├── Preloader.jsx
            └── Preloader.scss
                    │
                    ↓
                 App.jsx
                    │
                    ├── loading
                    ├── progress
                    ├── DOM
                    ├── fonts
                    ├── images
                    └── minimum time
                    │
                    ↓
              Preloader visible
                    │
                    ↓
              progress = 100
                    │
                    ↓
             loading = false
                    │
                    ↓
             website visible
10. What changes from website to website
The architecture does not change.

Only these can change:

A. Selected visual
Example:

Website 01 → Preloader01
Website 02 → Preloader03
Website 03 → Preloader09
Website 04 → Preloader12
Each selected Foundation variant becomes:

Preloader.jsx
Preloader.scss
B. Brand
Inside App.jsx:

brand="LUMA"
can become:

brand="NORTH"
or:

brand="RESTAURANT NAME"
C. Website-specific assets
Only if the selected preloader design uses an image, add the required
asset to:

public/images/
No additional architecture is required.

11. Important rule for the 12 variants
The 12 Foundation preloaders are visual variants.

They should follow the same basic component contract:

<Preloader
  open={loading}
  progress={progress}
  brand="..."
/>
Therefore:

Preloader01 → visual variant
Preloader02 → visual variant
Preloader03 → visual variant
...
Preloader12 → visual variant
The website's App.jsx does not need a different loading system for
each visual.

12. Do I need Foundation index.jsx?
No.

The Foundation:

foundations/preloaders/index.jsx
is the Foundation demo/preview system.

It is used to:

show all 12 variants
preview variants
select a design
It is not required inside the production website.

Production website needs only:

Preloader.jsx
Preloader.scss
plus the existing:

App.jsx
loading controller.

13. Final V1 rule
For every website:

Choose one Foundation preloader
        ↓
Copy JSX + SCSS
        ↓
Rename to Preloader.jsx + Preloader.scss
        ↓
Keep common props:
open
progress
brand
        ↓
Import Preloader in App.jsx
        ↓
Use App.jsx as the loading controller
        ↓
Done
No route is required.

No page is required.

No loading service is required.

No additional architecture is required.

14. Final fixed structure
restaurant-01/
└── src/
    │
    ├── components/
    │   └── Preloader/
    │       ├── Preloader.jsx
    │       └── Preloader.scss
    │
    ├── pages/
    ├── sections/
    ├── data/
    │
    ├── App.jsx
    ├── index.js
    └── index.scss
Freeze rule
Preloader visual = Foundation

Preloader lifecycle = App.jsx

Preloader is not a route

Preloader is not a page

Only components/Preloader/ and App.jsx are involved in the
integration.

