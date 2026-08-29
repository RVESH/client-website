import { Link } from "react-router-dom";

import BusinessActions from "../../components/BusinessActions/BusinessActions";
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
          EVERYDAY COLLECTION
        </span>

        <h1>
          Thoughtfully chosen
          <br />
          for everyday living.
        </h1>

        <p>
          Discover the collection, learn about
          the products and connect with the store
          directly.
        </p>

        <BusinessActions />

        <Link
          to="/collection"
          className="store-hero__collection"
        >
          Explore Collection ↗
        </Link>

      </div>
    </section>
  );
}