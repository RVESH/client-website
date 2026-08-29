import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { site } from "../../data/site";

import "./Contact.scss";

const contactItems = [
  {
    icon: MapPin,
    label: "ADDRESS",
    value: site.contact.address,
  },
  {
    icon: Phone,
    label: "PHONE",
    value: site.contact.phone,
    href: `tel:${site.contact.phone}`,
  },
  {
    icon: Mail,
    label: "EMAIL",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
];

export default function Contact() {
  return (
    <section className="contact-store section">
      <div className="page-shell">

        <div className="contact-store__grid">

          {contactItems.map(
            ({
              icon: Icon,
              label,
              value,
              href,
            }) => (
              <div
                key={label}
                className="contact-store__item"
              >
                <div className="contact-store__icon">
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                  />
                </div>

                <span>
                  {label}
                </span>

                {href ? (
                  <a href={href}>
                    {value}
                  </a>
                ) : (
                  <address>
                    {value}
                  </address>
                )}
              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
}