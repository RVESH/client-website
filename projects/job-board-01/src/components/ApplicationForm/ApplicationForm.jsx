import { useState } from "react";
import { Mail, MessageCircle, AlertCircle } from "lucide-react";
import { site } from "../../data/site";
import "./ApplicationForm.scss";

export default function ApplicationForm({ job, company }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = name.trim() && email.trim() && phone.trim();

  const buildBody = () => {
    const lines = [
      `Hi ${company ? company.name : "there"} team,`,
      "",
      `I'd like to apply for the ${job.title} role.`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      note ? `Note: ${note}` : null,
      "",
      "Please let me know the next steps.",
      "",
      name,
    ].filter((l) => l !== null);
    return lines.join("\n");
  };

const handleEmailApply = () => {
  setTouched(true);

  if (!isValid) return;

  const subject = `Application: ${job.title}${company ? ` at ${company.name}` : ""}`;
  const body = buildBody();
  const to = site.contact.email;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    // Mobile → native mail app / configured email handler
    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    return;
  }

  // Desktop → Gmail web compose
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    to
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(gmailUrl, "_blank", "noopener,noreferrer");
};

  const handleWhatsappApply = () => {
    setTouched(true);
    if (!isValid) return;
    const message = `Hi, I'd like to apply for the ${job.title} role${
      company ? ` at ${company.name}` : ""
    }.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}${note ? `\nNote: ${note}` : ""}`;
    const url = `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="application-form">
      <h3>Apply for this role</h3>
      <p className="application-form__desc">
        Fill in your details, then choose how you'd like to send your application. You'll review
        the message before it sends — nothing is submitted automatically.
      </p>

      <div className="application-form__row">
        <label htmlFor="apply-name">Full name</label>
        <input
          id="apply-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
      </div>

      <div className="application-form__row application-form__row--split">
        <div>
          <label htmlFor="apply-email">Email</label>
          <input
            id="apply-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="apply-phone">Phone</label>
          <input
            id="apply-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="application-form__row">
        <label htmlFor="apply-note">Note (optional)</label>
        <textarea
          id="apply-note"
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Anything you'd like to add — availability, portfolio link, etc."
        />
      </div>

      {touched && !isValid && (
        <p className="application-form__warning" role="alert">
          <AlertCircle size={15} strokeWidth={2} aria-hidden="true" />
          <span>Please fill in your name, email and phone before applying.</span>
        </p>
      )}

      <div className="application-form__actions">
        <button type="button" className="application-form__btn application-form__btn--email" onClick={handleEmailApply}>
          <Mail size={17} strokeWidth={2} aria-hidden="true" />
          <span>Apply via Email</span>
        </button>
        <button
          type="button"
          className="application-form__btn application-form__btn--whatsapp"
          onClick={handleWhatsappApply}
        >
          <MessageCircle size={17} strokeWidth={2} aria-hidden="true" />
          <span>Apply via WhatsApp</span>
        </button>
      </div>

      <p className="application-form__note">
        This opens Gmail or WhatsApp with your application pre-filled — you review and send it
        yourself. Hirely does not store or transmit your application.
      </p>
    </div>
  );
}
