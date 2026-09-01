import { useState } from "react";
import "./Contact.scss";
import "../sections/Locations.scss";
import locations from "../data/locations";
import images from "../data/images";
import Button from "../components/Button.jsx";
import LocationCard from "../components/LocationCard.jsx";
import SalonMap from "../components/SalonMap.jsx";
import { mailHref, whatsappHref } from "../utils/actions";

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const enquiryMessage = `Hello Maison Rosette, my name is ${form.name || "___"}.\n${form.message || ""}`;

  return (
    <>
      <section className="section page-banner">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1>Contact & enquiries</h1>
          <p className="section-sub">
            This studio runs by enquiry rather than open online booking — tell us what you're
            after and we'll confirm timing personally.
          </p>
        </div>
      </section>

      <section className="section contact-main">
        <div className="container contact-main__row">
          <div className="contact-main__form-wrap">
            <h2>Send an enquiry</h2>
            <p className="section-sub">
              Fill this in and send it on WhatsApp or email — whichever is easiest for you.
            </p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <label>
                Name
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number" />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're looking for"
                />
              </label>

              <div className="contact-form__actions">
                <Button href={whatsappHref(enquiryMessage)} variant="primary">
                  Send via WhatsApp
                </Button>
                <Button href={mailHref("Enquiry from website")} variant="secondary">
                  Send via Email
                </Button>
              </div>
            </form>

            <div className="contact-main__quick">
              <Button action="call" variant="ghost" size="sm">
                Or call the studio directly
              </Button>
              <Button action="instagram" variant="ghost" size="sm">
                Follow on Instagram
              </Button>
            </div>
          </div>

          <div className="contact-main__media">
            <img src={images.contactStudio} alt="Reception at Maison Rosette" />
          </div>
        </div>
      </section>

      <section className="section contact-locations">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Visit us</span>
            <h2>{locations.length > 1 ? "Our studios" : "Our studio"}</h2>
          </div>

          {locations.length === 0 ? (
            <div className="locations__empty">
              <p>We're not announcing studio addresses yet — reach out and we'll share details directly.</p>
            </div>
          ) : (
            <div className="locations__grid">
              <div className="locations__cards">
                {locations.map((loc) => (
                  <LocationCard key={loc.id} location={loc} />
                ))}
              </div>
              <SalonMap locations={locations} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Contact;
