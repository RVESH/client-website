import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import ClinicMap from "../../components/ClinicMap/ClinicMap";

import { locations } from "../../data/locations";
import { site } from "../../data/site";
import { images } from "../../data/images";

import "./Contact.scss";

export default function Contact() {
  return (
    <section className="clinic-contact section">
      <div className="page-shell">

        <div className="clinic-contact__image">
          <img
            src={images.contact}
            alt={`${site.name} clinic`}
          />
        </div>

        <div className="clinic-contact__intro">
          <span className="eyebrow">
            CONTACT
          </span>

          <h1 className="section-title">
            We are here
            <br />
            when you need us.
          </h1>
        </div>

        <div className="clinic-contact__details">

          <div>
            <MapPin size={18} />
            <span>GENERAL ADDRESS</span>
            <p>{site.address}</p>
          </div>

          <div>
            <Phone size={18} />
            <span>CALL</span>
            <a href={`tel:${site.phone}`}>
              {site.phone}
            </a>
          </div>

          <div>
            <Mail size={18} />
            <span>EMAIL</span>
            <a
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>

        </div>

        <ClinicMap
          locations={locations}
        />

      </div>
    </section>
  );
}