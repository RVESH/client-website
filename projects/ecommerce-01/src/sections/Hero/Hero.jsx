import { Link } from "react-router-dom";

import { images } from "../../data/images";

import "./Hero.scss";

export default function Hero() {
  return (
    <section className="store-hero">
      <div className="store-hero__media">
        <img
          src={images.hero}
          alt="NOVA collection"
        />
      </div>

      <div className="store-hero__overlay" />

      <div className="page-shell store-hero__content">
        <span className="eyebrow">
          NEW COLLECTION
        </span>

        <h1>
          Everyday objects,
          <br />
          thoughtfully chosen.
        </h1>

        <p>
          A refined collection of useful products
          designed for everyday living.
        </p>

        <div className="store-hero__actions">
          <Link to="/shop">
            Shop Collection ↗
          </Link>

          <Link to="/about">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}