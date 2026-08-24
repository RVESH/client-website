foundations/
└── modals/
    ├── Modal03.jsx
    └── Modal03.scss
Website mein copy karte waqt
restaurant-01/
└── src/
    └── components/
        └── Modal/
            ├── Modal.jsx
            └── Modal.scss

Modal03.jsx → Modal.jsx
Modal03.scss → Modal.scss

Aur Modal.jsx ke andar:

import "./Modal.scss";

hona chahiye.

Phir jis page/section mein modal chahiye

For example:

src/pages/Home/Home.jsx

ya:

src/sections/Gallery/Gallery.jsx

wahan:

import { useState } from "react";
import Modal from "../../components/Modal/Modal";

Path location ke according change hoga.

Phir component ke andar:

const [isOpen, setIsOpen] = useState(false);

Trigger:

<Button onClick={() => setIsOpen(true)}>
  View Details
</Button>

Aur:

<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Restaurant Details"
  description="Seasonal menu and dining information."
>
  <p>
    Fresh ingredients, seasonal dishes and
    an intimate dining experience.
  </p>
</Modal>
Ek important correction

Ab humne common Button bana liya hai, isliye raw <button> use karna zaroori nahi hai.

Preferred:

<Button onClick={() => setIsOpen(true)}>
  View Details
</Button>

instead of:

<button onClick={() => setIsOpen(true)}>
  View Details
</button>
Final V1 workflow
FOUNDATION
    │
    │ choose design
    ↓
Modal03.jsx
Modal03.scss
    │
    │ copy + rename
    ↓
restaurant-01
    │
    └── components/Modal/
            ├── Modal.jsx
            └── Modal.scss
                    │
                    ↓
             Any Page / Section
                    │
                    ├── useState
                    ├── Button
                    └── Modal
Aur App.js?

Kuch nahi.

Modal ke liye:

❌ App.js change nahi
❌ Routes change nahi
❌ navigation change nahi
❌ services nahi
❌ context nahi

Sirf jis component ko modal chahiye, wahi usko control karega.

Yehi 40 websites ke liye clean reusable pattern freeze karo.