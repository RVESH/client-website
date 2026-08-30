import {
  ArrowUpRight,
  BedDouble,
  Bath,
  Maximize2,
  MapPin,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import PropertyActions from "../../components/PropertyActions/PropertyActions";

import {
  getPropertyById,
} from "../../data/properties";

import "./Property.scss";

export default function Property() {
  const { propertyId } =
    useParams();

  const property =
    getPropertyById(propertyId);

  if (!property) {
    return (
      <section className="section">
        <div className="page-shell">
          <span className="eyebrow">
            404
          </span>

          <h1 className="section-title">
            Property not found.
          </h1>

          <Link to="/properties">
            Back to properties ↗
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="north-property-detail section">
      <div className="page-shell">

        <Link
          to="/properties"
          className="north-property-detail__back"
        >
          ← All properties
        </Link>

        <div className="north-property-detail__hero">
          <img
            src={property.image}
            alt={property.name}
          />
        </div>

        <div className="north-property-detail__grid">

          <div>
            <span className="eyebrow">
              {property.type}
            </span>

            <h1>
              {property.name}
            </h1>

            <p className="north-property-detail__location">
              <MapPin size={14} />
              {property.location}
            </p>
          </div>

          <div>
            <strong className="north-property-detail__price">
              {property.price}
            </strong>

            <p className="north-property-detail__description">
              {property.description}
            </p>

            <PropertyActions
              property={property}
            />
          </div>

        </div>

        <div className="north-property-detail__facts">

          <div>
            <BedDouble size={17} />
            <span>Bedrooms</span>
            <strong>
              {property.bedrooms}
            </strong>
          </div>

          <div>
            <Bath size={17} />
            <span>Bathrooms</span>
            <strong>
              {property.bathrooms}
            </strong>
          </div>

          <div>
            <Maximize2 size={17} />
            <span>Area</span>
            <strong>
              {property.area}
            </strong>
          </div>

          <div>
            <ArrowUpRight size={17} />
            <span>Status</span>
            <strong>
              {property.status}
            </strong>
          </div>

        </div>

        <div className="north-property-detail__features">
          {property.features.map(
            (feature) => (
              <span key={feature}>
                {feature}
              </span>
            )
          )}
        </div>

      </div>
    </section>
  );
}