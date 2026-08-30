import {
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./CTA.scss";

export default function CTA() {
  return (
    <section className="north-cta section">
      <div className="page-shell north-cta__inner">

        <div>
          <span className="eyebrow">
            FIND YOUR PLACE
          </span>

          <h2 className="section-title">
            Some homes are
            <br />
            worth seeing twice.
          </h2>

          <p>
            Tell us what you are looking for
            and we will point you in the right direction.
          </p>
        </div>

        <div className="north-cta__actions">

          <Link to="/properties">
            Browse properties
            <ArrowUpRight size={16} />
          </Link>

          <Link to="/contact">
            Start a conversation
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </div>
    </section>
  );
}