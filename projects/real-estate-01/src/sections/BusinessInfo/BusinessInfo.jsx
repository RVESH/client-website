import {
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";

import { site } from "../../data/site";

import "./BusinessInfo.scss";

export default function BusinessInfo() {
  return (
    <section className="north-business section">
      <div className="page-shell">

        <div className="north-business__heading">
          <span className="eyebrow">
            VISIT NORTHLINE
          </span>

          <h2 className="section-title">
            Come see the
            <br />
            neighbourhood.
          </h2>
        </div>

        <div className="north-business__grid">

          <div>
            <MapPin size={18} />

            <span>LOCATION</span>

            <p>
              {site.address}
            </p>

            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions ↗
            </a>
          </div>

          <div>
            <Clock3 size={18} />

            <span>HOURS</span>

            <p>
              {site.hours}
            </p>

            <a
              href={`tel:${site.phone}`}
            >
              Call the studio
            </a>
          </div>

          <div>
            <Phone size={18} />

            <span>CONTACT</span>

            <p>
              Speak directly with
              our property team.
            </p>

            <a
              href={`tel:${site.phone}`}
            >
              {site.phone}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}