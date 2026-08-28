import { useMemo, useState } from "react";

import "./Reservation.scss";

const WHATSAPP_NUMBER = "919000000000";

const MENU_ITEMS = [
  {
    id: "smoked-tomato",
    name: "Smoked Tomato",
    description: "Olive, basil, sourdough",
    price: 420,
    image: "/images/food-01.jpg",
  },
  {
    id: "charred-vegetables",
    name: "Charred Vegetables",
    description: "Sesame, lemon, herbs",
    price: 460,
    image: "/images/food-02.jpg",
  },
  {
    id: "handmade-pasta",
    name: "Handmade Pasta",
    description: "Seasonal sauce, aged cheese",
    price: 680,
    image: "/images/food-03.jpg",
  },
  {
    id: "open-fire-fish",
    name: "Open-Fire Fish",
    description: "Greens, brown butter",
    price: 950,
    image: "/images/food-04.jpg",
  },
  {
    id: "dark-chocolate",
    name: "Dark Chocolate",
    description: "Sea salt, olive oil",
    price: 380,
    image: "/images/food-05.jpg",
  },
];


const INITIAL_QUANTITIES = MENU_ITEMS.reduce(
  (result, item) => {
    result[item.id] = 0;
    return result;
  },
  {}
);

function Reservation() {
  const [quantities, setQuantities] = useState(
    INITIAL_QUANTITIES
  );

  const [submitted, setSubmitted] = useState(false);

  const selectedItems = useMemo(() => {
    return MENU_ITEMS.filter(
      (item) => quantities[item.id] > 0
    );
  }, [quantities]);

  const totalItems = selectedItems.reduce(
    (total, item) =>
      total + quantities[item.id],
    0
  );

  const estimatedTotal = selectedItems.reduce(
    (total, item) =>
      total +
      item.price * quantities[item.id],
    0
  );

  const updateQuantity = (id, value) => {
    const parsed = Number(value);

    setQuantities((current) => ({
      ...current,
      [id]:
        Number.isFinite(parsed) && parsed >= 0
          ? Math.min(parsed, 12)
          : 0,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name =
      formData.get("name")?.trim() || "Guest";

    const phone =
      formData.get("phone")?.trim() || "";

    const email =
      formData.get("email")?.trim() || "";

    const date =
      formData.get("date") || "";

    const time =
      formData.get("time") || "";

    const guests =
      formData.get("guests") || "";

    const occasion =
      formData.get("occasion") || "";

    const notes =
      formData.get("notes")?.trim() || "";

    const orderLines =
      selectedItems.length > 0
        ? selectedItems.map(
            (item) =>
              `• ${item.name} × ${quantities[item.id]} — ₹${
                item.price *
                quantities[item.id]
              }`
          )
        : ["• No pre-order selected"];

    const message = [
      "🍽️ LUMA — RESERVATION REQUEST",
      "",
      `Name: ${name}`,
      phone ? `Phone: ${phone}` : null,
      email ? `Email: ${email}` : null,
      "",
      `Date: ${date || "Not specified"}`,
      `Time: ${time || "Not specified"}`,
      `Guests: ${guests || "Not specified"}`,
      occasion ? `Occasion: ${occasion}` : null,
      "",
      "PRE-ORDER",
      ...orderLines,
      "",
      selectedItems.length > 0
        ? `Items: ${totalItems}`
        : "Items: 0",
      selectedItems.length > 0
        ? `Estimated food total: ₹${estimatedTotal}`
        : null,
      "",
      notes
        ? `Special request: ${notes}`
        : "Special request: None",
      "",
      "Please confirm availability and reservation.",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`;

    setSubmitted(true);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="reservation-page">

      <section className="inner-page__hero page-shell">
        <span className="eyebrow">
          RESERVATIONS
        </span>

        <h1 className="section-title">
          Your table is waiting.
        </h1>

        <p className="section-copy">
          Choose your preferred time, tell us how many
          guests are joining, and optionally pre-order
          dishes for the evening.
        </p>
      </section>

      <section className="reservation section">
        <div className="page-shell">

    {/* Reservation image */}
    <div className="reservation__visual">
      <img
        src="/images/reservation.jpg"
        alt="LUMA restaurant table"
      />

      <div className="reservation__visual-overlay">
        <span>YOUR TABLE AWAITS</span>
        <strong>LUMA</strong>
      </div>
    </div>

 




          <form
            className="reservation__form"
            onSubmit={handleSubmit}
          >

            {/* BASIC DETAILS */}
            <div className="reservation__block">
              <div className="reservation__block-heading">
                <div>
                  <span className="eyebrow">
                    01 / YOUR DETAILS
                  </span>

                  <h2>
                    Tell us who is coming.
                  </h2>
                </div>
              </div>

              <div className="reservation__fields">

                <label>
                  Name
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>

                <label>
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 90000 00000"
                    autoComplete="tel"
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </label>

                <label>
                  Guests
                  <select
                    name="guests"
                    defaultValue=""
                  >
                    <option value="">
                      Optional
                    </option>

                    <option value="1">
                      1 Guest
                    </option>

                    <option value="2">
                      2 Guests
                    </option>

                    <option value="3">
                      3 Guests
                    </option>

                    <option value="4">
                      4 Guests
                    </option>

                    <option value="5">
                      5 Guests
                    </option>

                    <option value="6">
                      6 Guests
                    </option>

                    <option value="7">
                      7 Guests
                    </option>

                    <option value="8">
                      8 Guests
                    </option>

                    <option value="9">
                      9 Guests
                    </option>

                    <option value="10+">
                      10+ Guests
                    </option>
                  </select>
                </label>

              </div>
            </div>

            {/* DATE + TIME */}
            <div className="reservation__block">
              <div className="reservation__block-heading">
                <div>
                  <span className="eyebrow">
                    02 / YOUR EVENING
                  </span>

                  <h2>
                    When should we expect you?
                  </h2>
                </div>
              </div>

              <div className="reservation__fields">

                <label>
                  Date
                  <input
                    required
                    type="date"
                    name="date"
                  />
                </label>

                <label>
                  Preferred time
                  <select
                    required
                    name="time"
                    defaultValue=""
                  >
                    <option value="">
                      Select a time
                    </option>

                    <option value="18:00">
                      18:00
                    </option>

                    <option value="18:30">
                      18:30
                    </option>

                    <option value="19:00">
                      19:00
                    </option>

                    <option value="19:30">
                      19:30
                    </option>

                    <option value="20:00">
                      20:00
                    </option>

                    <option value="20:30">
                      20:30
                    </option>

                    <option value="21:00">
                      21:00
                    </option>

                    <option value="21:30">
                      21:30
                    </option>

                    <option value="22:00">
                      22:00
                    </option>
                  </select>
                </label>

                <label>
                  Occasion
                  <select
                    name="occasion"
                    defaultValue=""
                  >
                    <option value="">
                      Optional
                    </option>

                    <option value="Dinner">
                      Dinner
                    </option>

                    <option value="Birthday">
                      Birthday
                    </option>

                    <option value="Anniversary">
                      Anniversary
                    </option>

                    <option value="Date Night">
                      Date Night
                    </option>

                    <option value="Business Dinner">
                      Business Dinner
                    </option>

                    <option value="Celebration">
                      Celebration
                    </option>
                  </select>
                </label>

              </div>
            </div>

            {/* PRE ORDER */}
            <div className="reservation__block">

              <div className="reservation__block-heading">
                <div>
                  <span className="eyebrow">
                    03 / OPTIONAL PRE-ORDER
                  </span>

                  <h2>
                    Start the evening before you arrive.
                  </h2>

                  <p>
                    Choose one or more dishes. We'll
                    send your selection directly to
                    our restaurant WhatsApp.
                  </p>
                </div>
              </div>

              <div className="reservation__menu">

                {MENU_ITEMS.map((item) => {
                  const quantity =
                    quantities[item.id];

                  const selected =
                    quantity > 0;

                  return (
                    <article
                      key={item.id}
                      className={
                        selected
                          ? "reservation__menu-item reservation__menu-item--selected"
                          : "reservation__menu-item"
                      }
                    >
<div className="reservation__menu-image">
  <img
    src={item.image}
    alt={item.name}
    loading="lazy"
  />
</div>
                      <div className="reservation__menu-info">

                        <h3>
                          {item.name}
                        </h3>

                        <p>
                          {item.description}
                        </p>

                        <strong>
                          ₹{item.price}
                        </strong>

                      </div>

                      <div className="reservation__quantity">

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(
                                quantity - 1,
                                0
                              )
                            )
                          }
                          aria-label={`Remove ${item.name}`}
                        >
                          −
                        </button>

                        <span>
                          {quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              quantity + 1
                            )
                          }
                          aria-label={`Add ${item.name}`}
                        >
                          +
                        </button>

                      </div>

                    </article>
                  );
                })}

              </div>

              <div className="reservation__summary">

                <div>
                  <span>
                    SELECTED
                  </span>

                  <strong>
                    {totalItems}{" "}
                    {totalItems === 1
                      ? "item"
                      : "items"}
                  </strong>
                </div>

                <div>
                  <span>
                    ESTIMATED
                  </span>

                  <strong>
                    ₹{estimatedTotal}
                  </strong>
                </div>

              </div>
            </div>

            {/* NOTES */}
            <div className="reservation__block">

              <div className="reservation__block-heading">
                <div>
                  <span className="eyebrow">
                    04 / ANYTHING ELSE?
                  </span>

                  <h2>
                    Tell us what you need.
                  </h2>
                </div>
              </div>

              <label className="reservation__notes">
                Special requests
                <textarea
                  name="notes"
                  rows="5"
                  placeholder="Dietary requirements, allergies, seating preference, surprise request..."
                />
              </label>

            </div>

            {/* SUBMIT */}
            <div className="reservation__submit-area">

              <div>
                <span className="eyebrow">
                  READY WHEN YOU ARE
                </span>

                <p>
                  Your request will open WhatsApp
                  with all the details filled in.
                </p>
              </div>

              <button
                type="submit"
                className="reservation__submit"
              >
                {submitted
                  ? "Open WhatsApp Again ↗"
                  : "Send Reservation on WhatsApp ↗"}
              </button>

            </div>

          </form>

        </div>
      </section>

    </div>
  );
}

export default Reservation;