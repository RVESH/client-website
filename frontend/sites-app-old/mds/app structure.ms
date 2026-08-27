cd /g/apage/one/frontend/src/southBridge/sites-app

rm -f src/App.css
rm -f src/App.test.js
rm -f src/index.css
rm -f src/logo.svg
rm -f src/reportWebVitals.js
rm -f src/setupTests.js
ye react ap ke unused  default files hai inhe remove kartein hai


find src -maxdepth 3 -type f -print | sort

expected:

src/app/index.jsx
src/index.js
src/index.scss
src/websites/restaurant-01/index.jsx



Tumhare new CRA app mein react-router-dom ho bhi sakta hai, nahi bhi. Check:

cat package.json

Agar react-router-dom nahi hai:
npm install react-router-dom

final dependency check karo
cd /g/apage/one/frontend/src/southBridge/sites-app
grep -R "from .*app/index\|from .*App\|from .*restaurant-01" -n src


npm install react-router-dom
-------------------start-------------------

SouthBridge V1 — Multi-Website Preview App Structure

Purpose

This document defines the fixed structure for managing approximately 34–40 website projects from one React-based preview application.

The architecture separates:

foundations/ → reusable visual foundations

sites/ → standalone client-delivery projects

sites-app/ → one React preview application containing all website previews

1. Frontend structure

frontend/
│
├── src/
│   └── southBridge/
│       │
│       ├── foundations/
│       │
│       ├── sites/
│       │   ├── restaurant-01/
│       │   ├── hotel-01/
│       │   ├── cafe-01/
│       │   └── ... 40 websites
│       │
│       └── sites-app/          ← ONE React preview app
│
└── package.json

2. Foundations

frontend/src/southBridge/foundations/

This contains the reusable Foundation library:

Header
Hero
Footer
Buttons
Cards
About
Services
Gallery
Testimonials
Stats
Process
Features
CTA
Contact
FAQ
Newsletter
Sections
Modals
Preloaders
Sliders

Foundations are not client websites.

They are selected, copied and adapted into individual website projects.

3. Sites

frontend/src/southBridge/sites/

This contains the standalone website projects:

sites/
├── restaurant-01/
├── hotel-01/
├── cafe-01/
└── ... approximately 40 projects

Each website remains a complete React project with its own:

src/
public/
package.json
package-lock.json
README.md

These are the projects that can ultimately be delivered to clients.

4. One preview React app

frontend/src/southBridge/sites-app/

sites-app is a separate React application used to preview all websites together.

Its job is:

ONE React app
    ↓
Master router
    ↓
Website A
Website B
Website C
...
Website 40

It is a development / preview application, not a client delivery project.

5. sites-app structure

sites-app/
│
├── public/
│
├── src/
│   │
│   ├── index.js                ← ONLY browser entry
│   ├── index.scss
│   │
│   ├── app/
│   │   └── index.jsx           ← MASTER HASH ROUTER
│   │
│   └── websites/
│       │
│       ├── restaurant-01/
│       │   └── index.jsx       ← Restaurant website root
│       │
│       ├── hotel-01/
│       │   └── index.jsx       ← Hotel website root
│       │
│       ├── cafe-01/
│       │   └── index.jsx       ← Cafe website root
│       │
│       └── ...                 ← Remaining website roots
│
├── package.json
└── package-lock.json

6. Browser entry point

There is only one actual React browser entry point:

sites-app/src/index.js

Example:

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import App from "./app/index.jsx";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

The browser does not directly load:

websites/restaurant-01/index.jsx

Those files are React components imported by the master app.

7. Master router

The master router lives at:

sites-app/src/app/index.jsx

Its responsibility is to choose which website preview is displayed.

Example:

import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Restaurant01 from "../websites/restaurant-01";
import Hotel01 from "../websites/hotel-01";
import Cafe01 from "../websites/cafe-01";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/restaurant-01/*"
          element={<Restaurant01 />}
        />

        <Route
          path="/hotel-01/*"
          element={<Hotel01 />}
        />

        <Route
          path="/cafe-01/*"
          element={<Cafe01 />}
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/restaurant-01"
              replace
            />
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;

8. Individual website root

Each website gets its own root component:

sites-app/src/websites/restaurant-01/index.jsx

Example:

function Restaurant01() {
  return (
    <div>
      {/* Restaurant website */}
    </div>
  );
}

export default Restaurant01;

The website root can contain or import:

Preloader
HashRouter / nested routes
Pages
Sections
Components
Website-specific data

This allows each preview website to have its own structure and behavior.

9. Website-specific Preloader

This architecture allows every website to use a different Foundation preloader.

Example:

restaurant-01 → Preloader03
hotel-01      → Preloader09
cafe-01       → Preloader06
agency-01     → Preloader12

The selected design is implemented inside the corresponding website root and its local website components.

10. Why use individual website index.jsx files?

Instead of:

websites/
├── Restaurant01.jsx
├── Hotel01.jsx
├── Cafe01.jsx

use:

websites/
├── restaurant-01/
│   └── index.jsx
│
├── hotel-01/
│   └── index.jsx
│
└── cafe-01/
    └── index.jsx

This keeps each website grouped inside its own folder and scales better as the site grows.

The folder can later contain:

restaurant-01/
├── index.jsx
├── components/
├── sections/
├── pages/
├── data/
└── assets/ or website-specific resources

11. Preview vs delivery

Development / Preview

sites-app/
    ↓
one React app
    ↓
all website previews

Example URLs:

/#/restaurant-01
/#/hotel-01
/#/cafe-01

Client Delivery

Deliver only the required standalone project:

sites/restaurant-01/

The sites-app preview application does not need to be delivered with the client website.

12. Fixed architecture rule

ONE browser entry
        ↓
sites-app/src/index.js
        ↓
sites-app/src/app/index.jsx
        ↓
website-specific root
        ↓
sites-app/src/websites/<website-name>/index.jsx

There are many website index.jsx files, but only one browser entry:

sites-app/src/index.js

13. Final workflow

Foundation selected
        ↓
Standalone site skeleton prepared
        ↓
Website root created in sites-app/websites/
        ↓
Website-specific Preloader selected
        ↓
Pages + Sections + Components assembled
        ↓
Master router exposes the website
        ↓
Live preview available from one React app
        ↓
Standalone site remains available under sites/
        ↓
Client delivery uses the standalone site

14. Important rule

Do not create a second browser entry for every website.

Do not use:

website/index.js

as another ReactDOM entry.

Use:

website/index.jsx

as a normal React component exported to the master router.

The only ReactDOM entry remains:

sites-app/src/index.js

This keeps the preview system centralized while allowing every website to remain independently structured.