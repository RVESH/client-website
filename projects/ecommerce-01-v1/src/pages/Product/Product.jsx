import {
  Link,
  useParams,
} from "react-router-dom";

import { ArrowUpRight } from "lucide-react";

import BusinessActions from "../../components/BusinessActions/BusinessActions";

import {
  getProductById,
} from "../../data/products";

import { site } from "../../data/site";

import "./Product.scss";

export default function Product() {
  const { productId } =
    useParams();

  const product =
    getProductById(productId);

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

          <Link to="/collection">
            Back to Collection ↗
          </Link>
        </div>
      </section>
    );
  }

  const whatsappMessage =
    `Hello, I am interested in ${product.name}. ` +
    `Price: ${site.currency}${product.price.toLocaleString(
      "en-IN"
    )}.`;

  return (
    <section className="product-page section">

      <div className="page-shell product-page__grid">

        <div className="product-page__media">

          <img
            src={product.image}
            alt={product.name}
          />

          {product.badge && (
            <span className="product-page__badge">
              {product.badge}
            </span>
          )}

        </div>

        <div className="product-page__content">

          <Link
            to="/collection"
            className="product-page__back"
          >
            ← Back to Collection
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

            {product.compareAtPrice >
              product.price && (
              <del>
                {site.currency}
                {product.compareAtPrice.toLocaleString(
                  "en-IN"
                )}
              </del>
            )}
          </div>

          <div className="product-page__rating">
            ★ {product.rating}

            <span>
              {product.reviewCount} reviews
            </span>
          </div>

          <p className="product-page__description">
            {product.description}
          </p>

          <a
            href={`https://wa.me/${
              site.contact.whatsapp
            }?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="product-page__enquiry"
          >
            Enquire on WhatsApp
            <ArrowUpRight size={17} />
          </a>

          <BusinessActions
            product={product}
          />

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