import {
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";

import "./LocationCard.scss";

export default function LocationCard({
  location,
}) {
  if (!location) return null;

  return (
    <article className="clinic-location-card">

      <div className="clinic-location-card__top">
        <MapPin size={17} />
        <span>
          CLINIC
        </span>
      </div>

      <h3>
        {location.name}
      </h3>

      <p>
        {location.address}
      </p>

      <div className="clinic-location-card__meta">

        <span>
          <Clock3 size={12} />
          {location.hours}
        </span>

        <a
          href={`tel:${location.phone}`}
        >
          <Phone size={12} />
          {location.phone}
        </a>

      </div>

      <a
        href={location.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="clinic-location-card__link"
      >
        Get directions ↗
      </a>

    </article>
  );
}