import { Link } from "react-router-dom";

import "./Deals.scss";

export default function Deals() {
  return (
    <section className="deals section">

      <div className="page-shell deals__inner">

        <div>
          <span className="eyebrow">
            LIMITED EDITION
          </span>

          <h2>
            A little less.
            <br />
            A lot more value.
          </h2>

          <p>
            Discover selected essentials with
            special seasonal pricing while
            the collection lasts.
          </p>
        </div>

        <Link to="/collection">
          Explore Offers ↗
        </Link>

      </div>
    </section>
  );
}