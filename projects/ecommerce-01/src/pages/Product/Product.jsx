import { useState } from "react";
import {
  Link,
  useParams,
} from "react-router-dom";

import {
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";

import { getProductById } from "../../data/products";
import { site } from "../../data/site";
import { useCart } from "../../context/CartContext";

import "./Product.scss";

export default function Product() {
  const { productId } =
    useParams();

  const product =
    getProductById(productId);

  const {
    addToCart,
  } = useCart();

  const [quantity, setQuantity] =
    useState(1);

  const [added, setAdded] =
    useState(false);

  if (!product) {
    return (
      <section className="product-not-found section">
        <div className="page-shell">
          <span className="eyebrow">
            404
          </span>

          <h1>
            Product not found.
          </h1>

          <Link to="/shop">
            Back to shop ↗
          </Link>
        </div>
      </section>
    );
  }

  const increase = () =>
    setQuantity(
      (value) => value + 1
    );

  const decrease = () =>
    setQuantity(
      (value) =>
        Math.max(1, value - 1)
    );

  const handleAdd = () => {
    addToCart(
      product,
      quantity
    );

    setAdded(true);

    window.setTimeout(
      () => setAdded(false),
      1600
    );
  };

  return (
    <section className="product-page section">
      <div className="page-shell product-page__grid">

        <div className="product-page__media">
          <div className="product-page__fallback" />

          <img
            src={product.image}
            alt={product.name}
            onError={(event) => {
              event.currentTarget.style.display =
                "none";
            }}
          />

          {product.badge && (
            <span className="product-page__badge">
              {product.badge}
            </span>
          )}
        </div>

        <div className="product-page__content">

          <Link
            to="/shop"
            className="product-page__back"
          >
            ← Back to shop
          </Link>

          <span className="eyebrow">
            {product.category}
          </span>

          <h1>
            {product.name}
          </h1>

          <div className="product-page__price">
            <strong>
              {site.currency}
              {product.price.toLocaleString(
                "en-IN"
              )}
            </strong>

            {product.compareAtPrice && (
              <del>
                {site.currency}
                {product.compareAtPrice.toLocaleString(
                  "en-IN"
                )}
              </del>
            )}
          </div>

          <div className="product-page__rating">
            <span>
              ★ {product.rating}
            </span>

            <span>
              {product.reviewCount} reviews
            </span>
          </div>

          <p className="product-page__description">
            {product.description}
          </p>

          <div className="product-page__purchase">

            <div className="product-page__quantity">
              <button
                type="button"
                onClick={decrease}
                aria-label="Decrease quantity"
              >
                <Minus size={15} />
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={increase}
                aria-label="Increase quantity"
              >
                <Plus size={15} />
              </button>
            </div>

            <button
              type="button"
              className="product-page__add"
              onClick={handleAdd}
            >
              <ShoppingBag
                size={17}
                strokeWidth={1.7}
              />

              {added
                ? "Added to Cart ✓"
                : "Add to Cart"}
            </button>

          </div>

          <div className="product-page__features">
            {product.features?.map(
              (feature) => (
                <div key={feature}>
                  <span>✓</span>
                  {feature}
                </div>
              )
            )}
          </div>

        </div>
      </div>
    </section>
  );
}