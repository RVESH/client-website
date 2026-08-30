import {
  ArrowRight,
  ArrowDown,
} from "lucide-react";

import { Link } from "react-router-dom";

import { images } from "../../data/images";

import "./Hero.scss";

export default function Hero() {
  return (
    <section className="north-hero">

      <div className="page-shell north-hero__grid">

        <div className="north-hero__copy">

          <div className="north-hero__eyebrow">
            <span>01</span>
            PRIVATE RESIDENTIAL
          </div>

          <h1>
            A home should
            <br />
            <em>feel inevitable.</em>
          </h1>

          <p>
            Distinctive residences selected for
            architecture, atmosphere and location.
          </p>

          <div className="north-hero__actions">
            <Link to="/properties">
              Explore properties
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>

        <div className="north-hero__visual">

          <img
            src={images.hero}
            alt="Featured residence"
          />

          <div className="north-hero__caption">
            <div>
              <span>FEATURED RESIDENCE</span>
              <strong>
                Delhi NCR · Private Collection
              </strong>
            </div>

            <ArrowDown size={18} />
          </div>

        </div>

      </div>

    </section>
  );
}