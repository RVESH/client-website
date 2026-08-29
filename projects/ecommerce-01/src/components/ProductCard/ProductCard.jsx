import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

import {
  useCart,
} from "../../context/CartContext";

import { site } from "../../data/site";

import "./ProductCard.scss";

export default function ProductCard({
  product,
}) {
  const { addToCart } =
    useCart();

  if (!product) {
    return null;
  }

  const price =
    Number(product.price) || 0;

  const comparePrice =
    Number(
      product.compareAtPrice
    ) || 0;

  return (
    <article className="product-card">

      <Link
        to={`/product/${product.id}`}
        className="product-card__media"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="product-card__image"
        />

        {product.badge && (
          <span className="product-card__badge">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="product-card__body">

        <span className="product-card__category">
          {product.category}
        </span>

        <h3>
          <Link
            to={`/product/${product.id}`}
          >
            {product.name}
          </Link>
        </h3>

        <div className="product-card__bottom">

          <div className="product-card__price">
            <strong>
              {site.currency}
              {price.toLocaleString(
                "en-IN"
              )}
            </strong>

            {comparePrice > price && (
              <del>
                {site.currency}
                {comparePrice.toLocaleString(
                  "en-IN"
                )}
              </del>
            )}
          </div>

          <button
            type="button"
            onClick={() =>
              addToCart(product)
            }
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag
              size={16}
              strokeWidth={1.6}
            />
          </button>

        </div>
      </div>
    </article>
  );
}