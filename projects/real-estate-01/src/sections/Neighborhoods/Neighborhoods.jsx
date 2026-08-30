import { ArrowUpRight } from "lucide-react";

import { Link } from "react-router-dom";

import {
  images,
} from "../../data/images";

import "./Neighborhoods.scss";

const neighborhoods = [
  {
    name: "Golf Course",
    description:
      "Quiet streets, established gardens and expansive residences.",
    image: images.properties.villa01,
  },
  {
    name: "Central Delhi",
    description:
      "Character-rich streets close to culture, dining and commerce.",
    image: images.properties.apartment01,
  },
  {
    name: "South Delhi",
    description:
      "Green neighbourhoods with a mix of contemporary and classic homes.",
    image: images.properties.house01,
  },
];

export default function Neighborhoods() {
  return (
    <section className="north-neighborhoods section">
      <div className="page-shell">

        <div className="north-neighborhoods__header">
          <span className="eyebrow">
            LOCATIONS
          </span>

          <h2 className="section-title">
            Where you
            <br />
            might belong.
          </h2>
        </div>

        <div className="north-neighborhoods__grid">
          {neighborhoods.map(
            (place) => (
              <article
                key={place.name}
                className="north-neighborhood"
              >
                <div className="north-neighborhood__image">
                  <img
                    src={place.image}
                    alt={place.name}
                    loading="lazy"
                  />
                </div>

                <div className="north-neighborhood__body">
                  <h3>
                    {place.name}
                  </h3>

                  <p>
                    {place.description}
                  </p>

                  <Link to="/properties">
                    Explore
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            )
          )}
        </div>

      </div>
    </section>
  );
}