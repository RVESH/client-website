import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { site } from "../../data/site";
import "./NewsletterCTA.scss";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Frontend-only V1 — there is no subscription backend. We open a
    // pre-filled mail draft to the team rather than pretending to save
    // the address anywhere.
    const subject = "Newsletter sign-up";
    const body = `Please add this address to the Aperture newsletter list: ${email.trim()}`;
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        site.contact.email
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  };

  return (
    <section className="newsletter section--tight">
      <div className="container newsletter__inner">
        <div>
          <span className="eyebrow">{site.newsletter.eyebrow}</span>
          <h2 className="newsletter__heading">{site.newsletter.heading}</h2>
          <p className="newsletter__desc">{site.newsletter.desc}</p>
        </div>

        {submitted ? (
          <p className="newsletter__success" role="status">
            <Check size={18} strokeWidth={2} aria-hidden="true" />
            <span>Draft opened — send it to confirm your subscription.</span>
          </p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email address
            </label>
            <div className="newsletter__field">
              <Mail size={18} strokeWidth={2} aria-hidden="true" />
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn--primary">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
