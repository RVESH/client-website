import { NavLink } from "react-router-dom";

import "./CTA.scss";

function CTA() {
  return (
    <section className="cta section">
      <div className="page-shell cta__inner">
        <span className="eyebrow">
          YOUR TABLE AWAITS
        </span>

        <h2>
          Make an evening
          <br />
          of it.
        </h2>

        <p>
          Seasonal food, warm service and a table
          worth staying at a little longer.
        </p>

        <NavLink to="/reservation">
          Reserve a Table ↗
        </NavLink>
      </div>
    </section>
  );
}

export default CTA;