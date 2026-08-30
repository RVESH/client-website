import {
  ArrowRight,
  Phone,
} from "lucide-react";

import { Link } from "react-router-dom";

import { site } from "../../data/site";

import "./CTA.scss";

export default function CTA() {
  return (
    <section className="clinic-cta section">
      <div className="page-shell clinic-cta__inner">

        <div>
          <span className="eyebrow">
            TALK TO MEDORA
          </span>

          <h2 className="section-title">
            Questions about
            <br />
            your care?
          </h2>

          <p>
            Our team is here to help you find
            the right next step.
          </p>
        </div>

        <div className="clinic-cta__actions">

          <a href={`tel:${site.phone}`}>
            <Phone size={15} />
            Call the clinic
          </a>

          <Link to="/contact">
            Contact us
            <ArrowRight size={15} />
          </Link>

        </div>

      </div>
    </section>
  );
}