import { Link } from "react-router-dom";

import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./FeaturedProducts.scss";

export default function FeaturedProducts() {
  return (
    <section className="featured-products section">
      <div className="page-shell">

        <div className="featured-products__heading">
          <div>
            <span className="eyebrow">
              FEATURED
            </span>

            <h2 className="section-title">
              Best sellers.
            </h2>
          </div>

          <Link to="/collection">
            Collection all ↗
          </Link>
        </div>

        <div className="product-grid">
          {products
            .slice(0, 4)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
        </div>

      </div>
    </section>
  );
}