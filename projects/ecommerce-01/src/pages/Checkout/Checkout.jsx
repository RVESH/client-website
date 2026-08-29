import { useState } from "react";
import {
  Link,
} from "react-router-dom";

import {
  ArrowUpRight,
} from "lucide-react";

import {
  useCart,
} from "../../context/CartContext";

import {
  site,
} from "../../data/site";

import "./Checkout.scss";

export default function Checkout() {
  const {
    items,
    cartSubtotal,
    clearCart,
  } = useCart();

  const [submitted, setSubmitted] =
    useState(false);

  const [popupBlocked, setPopupBlocked] =
    useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!items.length) {
      return;
    }

    const formData =
      new FormData(
        event.currentTarget
      );

    const name =
      formData
        .get("name")
        ?.toString()
        .trim() || "";

    const phone =
      formData
        .get("phone")
        ?.toString()
        .trim() || "";

    const email =
      formData
        .get("email")
        ?.toString()
        .trim() || "";

    const address =
      formData
        .get("address")
        ?.toString()
        .trim() || "";

    const city =
      formData
        .get("city")
        ?.toString()
        .trim() || "";

    const notes =
      formData
        .get("notes")
        ?.toString()
        .trim() || "";

    const productLines =
      items.map(
        (item) =>
          `• ${item.name} × ${item.quantity} — ${
            site.currency
          }${(
            item.price *
            item.quantity
          ).toLocaleString("en-IN")}`
      );

    const message = [
      "🛍️ NOVA — ORDER REQUEST",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      "",
      "ITEMS",
      ...productLines,
      "",
      `Subtotal: ${site.currency}${cartSubtotal.toLocaleString(
        "en-IN"
      )}`,
      "",
      "DELIVERY",
      `Address: ${address}`,
      `City: ${city}`,
      notes
        ? `Notes: ${notes}`
        : "Notes: None",
      "",
      "Please confirm availability, final total and delivery details.",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${site.whatsapp}` +
      `?text=${encodeURIComponent(
        message
      )}`;

    const popup =
      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );

    if (!popup) {
      setPopupBlocked(true);
      return;
    }

    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="checkout-success section">
        <div className="page-shell">

          <span className="eyebrow">
            ORDER REQUEST
          </span>

          <h1>
            Your order is ready.
          </h1>

          <p>
            The order details have been
            prepared for WhatsApp.
          </p>

          <Link to="/shop">
            Continue Shopping ↗
          </Link>

        </div>
      </section>
    );
  }

  if (!items.length) {
    return (
      <section className="checkout-empty section">
        <div className="page-shell">

          <span className="eyebrow">
            CHECKOUT
          </span>

          <h1>
            Your cart is empty.
          </h1>

          <Link to="/shop">
            Browse the collection ↗
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page section">
      <div className="page-shell">

        <header className="checkout-page__heading">
          <span className="eyebrow">
            CHECKOUT
          </span>

          <h1 className="section-title">
            Almost there.
          </h1>

          <p className="section-copy">
            Add your details and we'll
            prepare your order for WhatsApp.
          </p>
        </header>

        {popupBlocked && (
          <div
            className="checkout-warning"
            role="alert"
          >
            Please allow pop-ups for this
            website to open WhatsApp.
          </div>
        )}

        <div className="checkout-page__grid">

          <form
            className="checkout-form"
            onSubmit={handleSubmit}
          >

            <div className="checkout-form__section">
              <span className="eyebrow">
                01 / CONTACT
              </span>

              <div className="checkout-form__fields">

                <label>
                  Full name
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                  />
                </label>

                <label>
                  Phone
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 90000 00000"
                  />
                </label>

                <label>
                  Email
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </label>

              </div>
            </div>

            <div className="checkout-form__section">
              <span className="eyebrow">
                02 / DELIVERY
              </span>

              <div className="checkout-form__fields">

                <label className="checkout-form__full">
                  Address
                  <textarea
                    required
                    name="address"
                    rows="4"
                    autoComplete="street-address"
                    placeholder="House number, street, area"
                  />
                </label>

                <label>
                  City
                  <input
                    required
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="City"
                  />
                </label>

              </div>
            </div>

            <div className="checkout-form__section">
              <span className="eyebrow">
                03 / NOTES
              </span>

              <label className="checkout-form__notes">
                Additional notes
                <textarea
                  name="notes"
                  rows="4"
                  placeholder="Delivery instructions, preferences..."
                />
              </label>
            </div>

            <button
              type="submit"
              className="checkout-form__submit"
            >
              Send Order on WhatsApp
              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
              />
            </button>

          </form>

          <aside className="checkout-summary">

            <span className="eyebrow">
              ORDER SUMMARY
            </span>

            <div className="checkout-summary__items">

              {items.map((item) => (
                <div
                  key={item.id}
                  className="checkout-summary__item"
                >
                  <span>
                    {item.name} ×{" "}
                    {item.quantity}
                  </span>

                  <strong>
                    {site.currency}
                    {(
                      item.price *
                      item.quantity
                    ).toLocaleString(
                      "en-IN"
                    )}
                  </strong>
                </div>
              ))}

            </div>

            <div className="checkout-summary__total">
              <span>Total</span>

              <strong>
                {site.currency}
                {cartSubtotal.toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>

            <p>
              Your final shipping cost and
              availability will be confirmed
              through WhatsApp.
            </p>

            <Link to="/cart">
              Edit Cart
            </Link>

          </aside>

        </div>
      </div>
    </section>
  );
}