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
    <section className="contact-page section">
      <div className="page-shell">

        <div className="contact-page__image">
          <img
            src={images.contact}
            alt="HAVEN property"
            loading="lazy"
          />
        </div>

        <div className="contact-page__intro">
          <span className="eyebrow">
            GET IN TOUCH
          </span>

          <h1 className="section-title">
            Tell us what
            <br />
            you're looking for.
          </h1>
        </div>

        <div className="contact-page__grid">

          <div className="contact-page__item">
            <MapPin size={18} />

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

          <div className="contact-page__item">
            <Phone size={18} />

            <span>CALL</span>

            <a href={`tel:${site.phone}`}>
              {site.phone}
            </a>
          </div>

          <div className="contact-page__item">
            <Mail size={18} />

            <span>EMAIL</span>

            <a
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}