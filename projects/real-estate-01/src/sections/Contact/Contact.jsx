import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { images } from "../../data/images";
import { site } from "../../data/site";

import "./Contact.scss";

export default function Contact() {
  return (
    <section className="north-contact section">
      <div className="page-shell">

        <div className="north-contact__image">
          <img
            src={images.contact}
            alt={`${site.name} property`}
            loading="lazy"
          />
        </div>

        <div className="north-contact__intro">
          <span className="eyebrow">
            CONTACT
          </span>

          <h1 className="section-title">
            Tell us what
            <br />
            you are looking for.
          </h1>
        </div>

        <div className="north-contact__grid">

          <div className="north-contact__item">
            <MapPin
              size={18}
              aria-hidden="true"
            />

            <span>VISIT</span>

            <p>{site.address}</p>

            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions ↗
            </a>
          </div>

          <div className="north-contact__item">
            <Phone
              size={18}
              aria-hidden="true"
            />

            <span>CALL</span>

            <a href={`tel:${site.phone}`}>
              {site.phone}
            </a>
          </div>

          <div className="north-contact__item">
            <Mail
              size={18}
              aria-hidden="true"
            />

            <span>EMAIL</span>

            <a href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}