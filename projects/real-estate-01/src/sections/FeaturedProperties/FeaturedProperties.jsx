import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import {
  properties,
} from "../../data/properties";

import PropertyCard from "../../components/PropertyCard/PropertyCard";

import "./FeaturedProperties.scss";

export default function FeaturedProperties() {
  return (
    <section className="north-featured section">
      <div className="page-shell">

        <div className="north-featured__header">

          <div>
            <span className="eyebrow">
              EDITED SELECTION
            </span>

            <h2 className="section-title">
              Places with
              <br />
              character.
            </h2>
          </div>

          <Link to="/properties">
            View collection
            <ArrowUpRight size={15} />
          </Link>

        </div>

        <div className="north-featured__grid">
          {properties
            .slice(0, 4)
            .map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
        </div>

      </div>
    </section>
  );
}