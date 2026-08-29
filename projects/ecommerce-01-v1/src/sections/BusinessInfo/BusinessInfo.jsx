import {
  Clock,
  MapPin,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import { site } from "../../data/site";

import "./BusinessInfo.scss";

export default function BusinessInfo() {
  const {
    address,
    phone,
    hours,
    mapUrl,
  } = site.contact;

  return (
    <section className="business-info section">
      <div className="page-shell">

        <span className="eyebrow">
          VISIT US
        </span>

        <div className="business-info__grid">

          <div>
            <MapPin size={19} />

            <span>LOCATION</span>

            <p>{address}</p>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions ↗
            </a>
          </div>

          <div>
            <Clock size={19} />

            <span>OPENING HOURS</span>

            <p>
              {hours.days}
              <br />
              {hours.time}
            </p>

            <a href={`tel:${phone}`}>
              Call {phone}
            </a>
          </div>

          <div>
            <span>NEED HELP?</span>

            <p>
              Talk directly with the store
              about products, availability or
              anything else you need to know.
            </p>

            <Link to="/contact">
              Contact Us ↗
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}