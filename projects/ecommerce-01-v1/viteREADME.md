# Vite Website Foundation

## 1. Create Vite App

```bash
cd /g/apage/one/projects

npm create vite@latest project-name -- --template react

cd project-name

npm install
npm install react-router-dom lucide-react
npm install -D sass
2. Remove Vite Starter Files

Delete:

src/App.jsx
src/App.css
src/index.css
src/assets/
public/vite.svg

Keep:

index.html
src/main.jsx
package.json
package-lock.json
vite.config.js
README.md
3. Basic Structure
src/
├── main.jsx
├── index.scss
├── app/
│   └── index.jsx
├── components/
├── sections/
├── pages/
├── data/
└── styles/
    ├── global.scss
    └── variables.scss
4. main.jsx
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";

import "./index.scss";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
5. Sass

Global entry:

@use "./styles/global";

Use:

Component.jsx
Component.scss

Avoid putting all CSS in one file.

6. Routing

Use:

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

For simple deployable websites:

/
 /shop
 /product
 /about
 /contact

HashRouter avoids refresh/hosting route issues on simple static hosting.

7. Images

Keep all website images in:

public/images/

Use:

<img
  src="/images/product01.jpg"
  alt="Product"
/>

Do not use:

/public/images/...

One physical image = one file.

Reuse the same image wherever required.

8. Responsive Design

Use:

width: min(1200px, calc(100% - 40px));

Use flexible layouts:

display: grid;
grid-template-columns:
  repeat(3, minmax(0, 1fr));

Add responsive breakpoints:

@media (max-width: 900px) {
  /* tablet */
}

@media (max-width: 600px) {
  /* mobile */
}

Avoid fixed widths that break mobile.

Use:

clamp()
min()
max()

for fluid sizing.

9. Component Rules

Keep reusable UI in:

components/

Examples:

Header
Footer
Button
Card
Modal
Search
Slider
ProductCard

Page-specific content goes in:

pages/

Reusable visual sections go in:

sections/
10. V1 Website Rule

Keep V1 simple:

4–5 main pages
Responsive
Fast
SEO-ready structure
Local images
No unnecessary dependencies
No database unless required

For showcase/catalog websites:

Home
Shop / Services
Product / Detail
About
Contact

Use WhatsApp/contact CTA when required.

11. Development
npm run dev

Network access:

npm run dev -- --host 0.0.0.0 --port 5173
12. Production Check
npm run build

Then:

npm run preview

Test:

Desktop
Tablet
Mobile
Navigation
Refresh
Images
Forms
Buttons
Links
Console errors
13. Before Delivery
npm run build

Must finish successfully.