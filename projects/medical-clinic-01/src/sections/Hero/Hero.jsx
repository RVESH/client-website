import {
  ArrowRight,
  Phone,
} from "lucide-react";

import { Link } from "react-router-dom";

import { images } from "../../data/images";
import { site } from "../../data/site";

import "./Hero.scss";

export default function Hero() {
  return (
    <section className="clinic-hero">

      <div className="page-shell clinic-hero__grid">

        <div className="clinic-hero__copy">

          <span className="clinic-hero__eyebrow">
            MODERN PRIMARY CARE
          </span>

          <h1>
            Better care.
            <br />
            <em>Better days.</em>
          </h1>

          <p>
            Thoughtful healthcare for individuals
            and families, built around listening,
            clarity and continuity.
          </p>

          <div className="clinic-hero__actions">

            <Link to="/services">
              Explore services
              <ArrowRight size={15} />
            </Link>

            <a href={`tel:${site.phone}`}>
              <Phone size={15} />
              Call clinic
            </a>

          </div>

        </div>

        <div className="clinic-hero__visual">

          <img
            src={images.hero}
            alt="Medora clinic"
          />

          <div className="clinic-hero__badge">
            <span>OPEN TODAY</span>
            <strong>
              {site.hours}
            </strong>
          </div>

        </div>

      </div>

    </section>
  );
}