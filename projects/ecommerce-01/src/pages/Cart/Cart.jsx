import {
  Link,
} from "react-router-dom";

import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from "lucide-react";

import {
  useCart,
} from "../../context/CartContext";

import {
  site,
} from "../../data/site";

import "./Cart.scss";

export default function Cart() {
  const {
    items,
    cartSubtotal,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (!items.length) {
    return (
      <section className="cart-empty section">
        <div className="page-shell">

          <ShoppingBag
            size={28}
            strokeWidth={1.4}
          />

          <span className="eyebrow">
            YOUR BAG
          </span>

          <h1>
            Nothing here yet.
          </h1>

          <p>
            Add something from the
            collection and it will
            appear here.
          </p>

          <Link to="/shop">
            Continue Shopping ↗
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="cart-page section">
      <div className="page-shell">

        <header className="cart-page__heading">
          <span className="eyebrow">
            YOUR BAG
          </span>

          <h1 className="section-title">
            Selected for you.
          </h1>

          <button
            type="button"
            onClick={clearCart}
            className="cart-page__clear"
          >
            Clear cart
          </button>
        </header>

        <div className="cart-page__grid">

          <div className="cart-list">

            {items.map((item) => (
              <article
                key={item.id}
                className="cart-item"
              >

                <Link
                  to={`/product/${item.id}`}
                  className="cart-item__image"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(event) => {
                      event.currentTarget.style.display =
                        "none";
                    }}
                  />
                </Link>

                <div className="cart-item__content">

                  <span>
                    {item.category ||
                      "PRODUCT"}
                  </span>

                  <h2>
                    <Link
                      to={`/product/${item.id}`}
                    >
                      {item.name}
                    </Link>
                  </h2>

                  <strong>
                    {site.currency}
                    {item.price.toLocaleString(
                      "en-IN"
                    )}
                  </strong>

                  <div className="cart-item__controls">

                    <div className="cart-qty">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity -
                              1
                          )
                        }
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity +
                              1
                          )
                        }
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="cart-item__remove"
                      onClick={() =>
                        removeFromCart(
                          item.id
                        )
                      }
                    >
                      <Trash2
                        size={14}
                      />
                      Remove
                    </button>

                  </div>
                </div>

                <strong className="cart-item__total">
                  {site.currency}
                  {(
                    item.price *
                    item.quantity
                  ).toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </article>
            ))}

          </div>

          <aside className="cart-summary">

            <span className="eyebrow">
              SUMMARY
            </span>

            <div>
              <span>Subtotal</span>

              <strong>
                {site.currency}
                {cartSubtotal.toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>

            <div>
              <span>Shipping</span>

              <span>
                Calculated at checkout
              </span>
            </div>

            <div className="cart-summary__total">
              <span>Total</span>

              <strong>
                {site.currency}
                {cartSubtotal.toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>

            <Link to="/checkout">
              Proceed to Checkout ↗
            </Link>

            <Link
              to="/shop"
              className="cart-summary__continue"
            >
              Continue Shopping
            </Link>

          </aside>

        </div>
      </div>
    </section>
  );
}