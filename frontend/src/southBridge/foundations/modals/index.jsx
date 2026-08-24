import { useState } from "react";

import Modal01 from "./Modal01";
import Modal02 from "./Modal02";
import Modal03 from "./Modal03";
import Modal04 from "./Modal04";
import Modal05 from "./Modal05";
import Modal06 from "./Modal06";
import Modal07 from "./Modal07";
import Modal08 from "./Modal08";
import Modal09 from "./Modal09";
import Modal10 from "./Modal10";
import Modal11 from "./Modal11";
import Modal12 from "./Modal12";

import "./style.scss";

/*
  Modal01 → Clean Center / Premium
  Modal02 → Right Side Sheet / Cart / Booking
  Modal03 → Glass / Modern Product
  Modal04 → Image Lightbox / Gallery
  Modal05 → Split Editorial / Storytelling
  Modal06 → Bottom Sheet / Mobile Actions
  Modal07 → Fullscreen Cinematic / Luxury
  Modal08 → Compact Confirmation / Success
  Modal09 → Layered Card / Premium Detail
  Modal10 → Command / Search
  Modal11 → Luxury Framed / Hospitality
  Modal12 → Stacked Detail / Product Information
*/

const modalVariants = [
  {
    id: 1,
    title: "Clean Center",
    description: "Premium centered modal",
    Component: Modal01,
  },
  {
    id: 2,
    title: "Side Sheet",
    description: "Booking / cart / quick details",
    Component: Modal02,
  },
  {
    id: 3,
    title: "Glass",
    description: "Modern glass interaction",
    Component: Modal03,
  },
  {
    id: 4,
    title: "Lightbox",
    description: "Gallery / photography",
    Component: Modal04,
  },
  {
    id: 5,
    title: "Editorial",
    description: "Image + story split",
    Component: Modal05,
  },
  {
    id: 6,
    title: "Bottom Sheet",
    description: "Mobile-first actions",
    Component: Modal06,
  },
  {
    id: 7,
    title: "Cinematic",
    description: "Fullscreen premium experience",
    Component: Modal07,
  },
  {
    id: 8,
    title: "Confirmation",
    description: "Success / completed state",
    Component: Modal08,
  },
  {
    id: 9,
    title: "Layered",
    description: "Premium detail card",
    Component: Modal09,
  },
  {
    id: 10,
    title: "Command",
    description: "Search / navigation",
    Component: Modal10,
  },
  {
    id: 11,
    title: "Luxury",
    description: "Hospitality / premium brands",
    Component: Modal11,
  },
  {
    id: 12,
    title: "Stacked Detail",
    description: "Product / specification details",
    Component: Modal12,
  },
];

function Modal() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => {
    setActiveModal(null);
  };

  const ActiveComponent =
    activeModal !== null
      ? modalVariants[activeModal - 1]?.Component
      : null;

  return (
    <div className="modal_foundation">
      <div className="modal_foundation__header">
        <span>INTERACTION FOUNDATION</span>

        <h1>Modal Systems</h1>

        <p>
          12 distinct modal patterns designed for different product,
          editorial, hospitality and commercial experiences.
        </p>
      </div>

      <div className="modal_foundation__grid">
        {modalVariants.map((modal) => (
          <button
            key={modal.id}
            type="button"
            className="modal_foundation__card"
            onClick={() => setActiveModal(modal.id)}
          >
            <span className="modal_foundation__number">
              {String(modal.id).padStart(2, "0")}
            </span>

            <div>
              <h2>{modal.title}</h2>
              <p>{modal.description}</p>
            </div>

            <span className="modal_foundation__arrow">↗</span>
          </button>
        ))}
      </div>

      {ActiveComponent && (
        <ActiveComponent
          open={true}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export {
  Modal01,
  Modal02,
  Modal03,
  Modal04,
  Modal05,
  Modal06,
  Modal07,
  Modal08,
  Modal09,
  Modal10,
  Modal11,
  Modal12,
};

export default Modal;





// // Website mein usage same रहेगा:---------------------------------
// import { useState } from "react";
// import Modal01 from "../../components/Modal/Modal01";

// function Example() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <button onClick={() => setIsOpen(true)}>
//         View Details
//       </button>

//       <Modal01
//         open={isOpen}
//         onClose={() => setIsOpen(false)}
//         title="Restaurant Details"
//         description="Seasonal menu and dining information."
//       />
//     </>
//   );
// }

// export default Example;





// // if alag custom chahiye toh___________________________
// <Modal01
//   open={isOpen}
//   onClose={() => setIsOpen(false)}
//   title="Restaurant Details"
// >
//   <h3>Our Story</h3>
//   <p>
//     Seasonal ingredients and carefully prepared dishes.
//   </p>
// </Modal01>


