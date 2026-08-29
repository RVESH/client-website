import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  images,
} from "../../data/images";

import {
  site,
} from "../../data/site";

import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact-store section">
      <div className="page-shell">

        <div className="contact-store__image">
          <img
            src={images.contact}
            alt="NOVA contact"
          />
        </div>

        <div className="contact-store__grid">

          <div className="contact-store__item">
            <MapPin size={18} />

            <span>ADDRESS</span>

            <address>
              {site.contact.address}
            </address>
          </div>

          <div className="contact-store__item">
            <Phone size={18} />

            <span>PHONE</span>

            <a
              href={`tel:${site.contact.phone}`}
            >
              {site.contact.phone}
            </a>
          </div>

          <div className="contact-store__item">
            <Mail size={18} />

            <span>EMAIL</span>

            <a
              href={`mailto:${site.contact.email}`}
            >
              {site.contact.email}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}