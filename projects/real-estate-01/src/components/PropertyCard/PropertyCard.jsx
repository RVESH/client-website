import {
  ArrowUpRight,
  Bath,
  BedDouble,
  Maximize2,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./PropertyCard.scss";

export default function PropertyCard({
  property,
}) {
  return (
    <article className="north-property-card">

      <Link
        to={`/property/${property.id}`}
        className="north-property-card__media"
      >
        <img
          src={property.image}
          alt={property.name}
          loading="lazy"
        />

        <span className="north-property-card__status">
          {property.status}
        </span>

        <span className="north-property-card__arrow">
          <ArrowUpRight size={16} />
        </span>
      </Link>

      <div className="north-property-card__body">

        <div className="north-property-card__heading">
          <span className="north-property-card__type">
            {property.type}
          </span>

          <h3>
            <Link
              to={`/property/${property.id}`}
            >
              {property.name}
            </Link>
          </h3>

          <p>
            {property.location}
          </p>
        </div>

        <div className="north-property-card__footer">

          <strong>
            {property.price}
          </strong>

          <div className="north-property-card__facts">

            <span>
              <BedDouble size={12} />
              {property.bedrooms}
            </span>

            <span>
              <Bath size={12} />
              {property.bathrooms}
            </span>

            <span>
              <Maximize2 size={12} />
              {property.area}
            </span>

          </div>

        </div>

      </div>

    </article>
  );
}