import { Link } from "react-router-dom";

import "./CTA.scss";

export default function CTA() {
  return (
    <section className="store-cta section">

      <div className="page-shell">

        <span className="eyebrow">
          READY WHEN YOU ARE
        </span>

        <h2>
          Choose something
          <br />
          worth keeping.
        </h2>

        <p>
          Explore the complete collection
          and find something made for your
          everyday.
        </p>

        <Link to="/shop">
          Browse the collection ↗
        </Link>

      </div>
    </section>
  );
}