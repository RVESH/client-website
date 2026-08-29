import { Link } from "react-router-dom";

import { categories } from "../../data/categories";

import "./Categories.scss";

export default function Categories() {
  return (
    <section className="categories section">
      <div className="page-shell">

        <div className="categories__heading">
          <div>
            <span className="eyebrow">
              CATEGORIES
            </span>

            <h2 className="section-title">
              Find your everyday.
            </h2>
          </div>

          <Link to="/shop">
            View all ↗
          </Link>
        </div>

        <div className="categories__grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(
                category.name
              )}`}
              className="category-card"
            >
              <div className="category-card__image">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                />
              </div>

              <div className="category-card__content">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}