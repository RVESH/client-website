import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Services.scss";

const diningOptions = [
  {
    id: "01",
    title: "Dinner",
    subtitle: "Tuesday to Saturday",
    description:
      "Our complete evening experience with seasonal dishes, warm service and a relaxed atmosphere.",
  },
  {
    id: "02",
    title: "Private Dining",
    subtitle: "Up to 14 guests",
    description:
      "A more intimate setting for celebrations, family dinners and special occasions.",
  },
  {
    id: "03",
    title: "Chef's Table",
    subtitle: "Seasonal tasting",
    description:
      "A curated tasting experience built around the best ingredients available that day.",
  },
];

const quickOrderItems = [
  {
    id: "smoked-tomato",
    name: "Smoked Tomato",
    price: 420,
  },
  {
    id: "charred-vegetables",
    name: "Charred Vegetables",
    price: 460,
  },
  {
    id: "handmade-pasta",
    name: "Handmade Pasta",
    price: 680,
  },
  {
    id: "open-fire-fish",
    name: "Open-Fire Fish",
    price: 950,
  },
  {
    id: "dark-chocolate",
    name: "Dark Chocolate",
    price: 380,
  },
];

const WHATSAPP_NUMBER = "919000000000";

function Services() {
  const [openId, setOpenId] = useState(null);
  const [selectedDish, setSelectedDish] = useState("");

  const handleDiningOrder = (option) => {
    const message = [
      "🍽️ LUMA — DINING REQUEST",
      "",
      `Experience: ${option.title}`,
      "",
      "Hello LUMA, I would like to enquire about this dining option.",
      "Please share availability and details.",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleDishOrder = (item) => {
    const message = [
      "🍽️ LUMA — FOOD ORDER",
      "",
      `Dish: ${item.name}`,
      `Price: ₹${item.price}`,
      "",
      "Hello LUMA, I would like to order this dish.",
      "Please confirm availability and delivery/pickup details.",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="services section">
      <div className="page-shell">
        <span className="eyebrow">
          WAYS TO DINE
        </span>

        <h2 className="section-title">
          Choose your evening.
        </h2>

        <div className="services__accordion">
          {diningOptions.map((option) => {
            const isOpen = openId === option.id;

            return (
              <article
                key={option.id}
                className={`services__item ${
                  isOpen
                    ? "services__item--open"
                    : ""
                }`}
              >
                <button
                  type="button"
                  className="services__trigger"
                  onClick={() =>
                    setOpenId(
                      isOpen ? null : option.id
                    )
                  }
                  aria-expanded={isOpen}
                >
                  <span className="services__number">
                    {option.id}
                  </span>

                  <span className="services__title">
                    {option.title}
                  </span>

                  <span className="services__subtitle">
                    {option.subtitle}
                  </span>

                  <span className="services__plus">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`services__panel ${
                    isOpen
                      ? "services__panel--open"
                      : ""
                  }`}
                >
                  <p>
                    {option.description}
                  </p>

                  <div className="services__actions">
                    <NavLink
                      to="/reservation"
                      className="services__reserve"
                    >
                      Reserve a Table ↗
                    </NavLink>

                    <button
                      type="button"
                      className="services__order"
                      onClick={() =>
                        handleDiningOrder(option)
                      }
                    >
                      Enquire on WhatsApp ↗
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="services__quick-order">
          <div>
            <span className="eyebrow">
              QUICK ORDER
            </span>

            <h3>
              Order something from the kitchen.
            </h3>

            <p>
              Select a dish and send your request
              directly to LUMA on WhatsApp.
            </p>
          </div>

          <div className="services__order-box">
            <select
              value={selectedDish}
              onChange={(event) =>
                setSelectedDish(event.target.value)
              }
              autoComplete="off"
              aria-label="Select a dish"
            >
              <option value="">
                Select a dish
              </option>

              {quickOrderItems.map((item) => (
                <option
                  key={item.id}
                  value={item.id}
                >
                  {item.name} — ₹{item.price}
                </option>
              ))}
            </select>

            <button
              type="button"
              disabled={!selectedDish}
              onClick={() => {
                const item =
                  quickOrderItems.find(
                    (dish) =>
                      dish.id === selectedDish
                  );

                if (!item) return;

                handleDishOrder(item);
              }}
            >
              Order Now ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;