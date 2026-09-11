import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Contact.scss";

const WHATSAPP = "919060144817";

/*
 * ==========================================
 * CONTACT EMAIL
 * ==========================================
 * YAHAN apna REAL receiving email address daalo.
 *
 * Example:
 * const EMAIL = "hello@example.com";
 */
const EMAIL = "your-real-email@gmail.com";

const WHY = [
  {
    icon: "01",
    title: "Fast delivery",
    text: "Most websites are ready within 24–48 hours.",
  },
  {
    icon: "02",
    title: "Affordable pricing",
    text: "Clean professional websites without agency-level costs.",
  },
  {
    icon: "03",
    title: "Mobile-first",
    text: "Every screen, from desktop to small phones, is covered.",
  },
  {
    icon: "04",
    title: "Modern UI",
    text: "Sharp, clean and conversion-focused design.",
  },
];

const DEFAULT_PROJECT_MESSAGE =
  "What kind of website do you need?";

const Contact = () => {
  const location = useLocation();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const selectedWebsite = useMemo(() => {
    const state = location.state;

    if (!state || typeof state !== "object") {
      return null;
    }

    const websiteName =
      typeof state.websiteName === "string"
        ? state.websiteName.trim()
        : "";

    const websiteCategory =
      typeof state.websiteCategory === "string"
        ? state.websiteCategory.trim()
        : "";

    const websiteId =
      typeof state.websiteId === "string"
        ? state.websiteId.trim()
        : "";

    if (!websiteName && !websiteCategory && !websiteId) {
      return null;
    }

    return {
      websiteId,
      websiteName,
      websiteCategory,
    };
  }, [location.state]);

  useEffect(() => {
    if (!selectedWebsite) {
      return;
    }

    const websiteName = selectedWebsite.websiteName;
    const websiteCategory =
      selectedWebsite.websiteCategory;

    setMessage((currentMessage) => {
      if (currentMessage.trim()) {
        return currentMessage;
      }

      const lines = [
        websiteName
          ? `I am interested in "${websiteName}".`
          : "I am interested in one of your website designs.",
      ];

      if (websiteCategory) {
        lines.push(`Category: ${websiteCategory}.`);
      }

      lines.push("");
      lines.push(
        "Please share the pricing, customization options and delivery details."
      );

      return lines.join("\n");
    });
  }, [selectedWebsite]);

  const clearError = () => {
    setError("");
  };

  const validate = () => {
    const cleanName = name.trim();
    const cleanMessage = message.trim();

    if (!cleanName) {
      setError("Please enter your name.");
      return null;
    }

    if (cleanName.length < 2) {
      setError("Please enter a valid name.");
      return null;
    }

    if (!cleanMessage) {
      setError("Please enter your project details.");
      return null;
    }

    setError("");

    return {
      cleanName,
      cleanMessage,
    };
  };

  const buildContactContext = () => {
    if (!selectedWebsite) {
      return [];
    }

    return [
      selectedWebsite.websiteName
        ? `Website: ${selectedWebsite.websiteName}`
        : null,
      selectedWebsite.websiteCategory
        ? `Category: ${selectedWebsite.websiteCategory}`
        : null,
      selectedWebsite.websiteId
        ? `Website ID: ${selectedWebsite.websiteId}`
        : null,
    ].filter(Boolean);
  };

  const buildWhatsAppMessage = (cleanName, cleanMessage) => {
    const websiteContext = buildContactContext();

    return [
      "Hi, I want a website.",
      "",
      `Name: ${cleanName}`,
      ...(websiteContext.length > 0
        ? ["", ...websiteContext]
        : []),
      "",
      "Project Details:",
      cleanMessage,
    ].join("\n");
  };

  const buildEmailSubject = () => {
    return selectedWebsite?.websiteName
      ? `Website Enquiry — ${selectedWebsite.websiteName}`
      : "New Website Enquiry";
  };

  const buildEmailBody = (cleanName, cleanMessage) => {
    const websiteContext = buildContactContext();

    return [
      "Hello,",
      "",
      "I would like to enquire about a website.",
      "",
      `Name: ${cleanName}`,
      ...(websiteContext.length > 0
        ? ["", ...websiteContext]
        : []),
      "",
      "Project Details:",
      cleanMessage,
      "",
      "Please share the pricing, customization options and delivery details.",
    ].join("\n");
  };

  const handleWhatsApp = (event) => {
    event.preventDefault();

    const validated = validate();

    if (!validated) {
      return;
    }

    const whatsappMessage = buildWhatsAppMessage(
      validated.cleanName,
      validated.cleanMessage
    );

    const whatsappUrl =
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.location.assign(whatsappUrl);
  };

  const handleEmail = (event) => {
    event.preventDefault();

    const validated = validate();

    if (!validated) {
      return;
    }

    const cleanEmail = EMAIL.trim();

    if (!cleanEmail) {
      setError("Please add your real email address in Contact.jsx.");
      return;
    }

    const subject = buildEmailSubject();

    const body = buildEmailBody(
      validated.cleanName,
      validated.cleanMessage
    );

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    /*
     * Mobile / Tablet
     * ----------------
     * Open the configured mail app through mailto.
     */
    const mailtoUrl =
      `mailto:${cleanEmail}` +
      `?subject=${encodedSubject}` +
      `&body=${encodedBody}`;

    /*
     * Desktop / Laptop
     * ----------------
     * Open Gmail Compose directly with pre-filled data.
     */
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(cleanEmail)}` +
      `&su=${encodedSubject}` +
      `&body=${encodedBody}`;

    const isMobile =
      /Android|iPhone|iPad|iPod|Mobile/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      window.location.assign(mailtoUrl);
      return;
    }

    window.location.assign(gmailUrl);
  };

  const handleDirectWhatsApp = () => {
    const whatsappUrl =
      `https://wa.me/${WHATSAPP}`;

    window.location.assign(whatsappUrl);
  };

  return (
    <section
      id="contact"
      className="contact"
      aria-labelledby="contact-title"
    >
      <div
        className="contact__glow contact__glow--one"
        aria-hidden="true"
      />

      <div
        className="contact__glow contact__glow--two"
        aria-hidden="true"
      />

      <div className="contact__container">
        {/* ======================================================
            HERO
            ======================================================= */}

        <header className="contact__hero">
          <div className="contact__eyebrow">
            <span
              className="contact__eyebrow-dot"
              aria-hidden="true"
            />

            GET IN TOUCH
          </div>

          <h2
            id="contact-title"
            className="contact__title"
          >
            Let&apos;s build something
            <span> worth showing off.</span>
          </h2>

          <p className="contact__subtitle">
            Tell me what you&apos;re building, what you
            need, and where you want to go. I&apos;ll help
            turn it into a polished website.
          </p>

          {selectedWebsite?.websiteName ? (
            <div
              className="contact__selected"
              role="status"
              aria-live="polite"
            >
              <span className="contact__selected-label">
                SELECTED WEBSITE
              </span>

              <strong>
                {selectedWebsite.websiteName}
              </strong>

              {selectedWebsite.websiteCategory ? (
                <span>
                  {selectedWebsite.websiteCategory}
                </span>
              ) : null}
            </div>
          ) : null}
        </header>

        <div className="contact__layout">
          {/* ====================================================
              LEFT
              ===================================================== */}

          <div className="contact__intro">
            <div className="contact__intro-top">
              <span className="contact__kicker">
                WHY WORK WITH ME?
              </span>

              <h3>
                A website should look good,
                <span> work hard.</span>
              </h3>

              <p>
                I focus on practical, modern websites that
                are fast, responsive and built to make your
                business look credible online.
              </p>
            </div>

            <div className="contact__benefits">
              {WHY.map((item) => (
                <div
                  className="contact__benefit"
                  key={item.icon}
                >
                  <span className="contact__benefit-number">
                    {item.icon}
                  </span>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__direct">
              <div>
                <span className="contact__direct-label">
                  Prefer a direct chat?
                </span>

                <strong>
                  Talk to me on WhatsApp
                </strong>
              </div>

              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="contact__direct-btn"
                aria-label="Chat directly on WhatsApp"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371.074-.57.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>

                Start a chat

                <span aria-hidden="true">
                  ↗
                </span>
              </button>
            </div>
          </div>

          {/* ====================================================
              RIGHT
              ===================================================== */}

          <div className="contact__form-wrap">
            <div className="contact__form-head">
              <span>PROJECT ENQUIRY</span>

              <div className="contact__status">
                <i aria-hidden="true" />
                Available
              </div>
            </div>

            <h3>
              {selectedWebsite?.websiteName
                ? "Let's talk about this website."
                : "Tell me about your project."}
            </h3>

            <form
              className="contact__form"
              onSubmit={(event) =>
                event.preventDefault()
              }
              noValidate
            >
              <div className="contact__field">
                <label htmlFor="contact-name">
                  Your name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    clearError();
                  }}
                  autoComplete="name"
                  maxLength={100}
                  required
                  aria-invalid={Boolean(error)}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message">
                  Project details
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder={DEFAULT_PROJECT_MESSAGE}
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value);
                    clearError();
                  }}
                  rows={7}
                  maxLength={3000}
                  required
                  aria-invalid={Boolean(error)}
                />

                <span className="contact__field-count">
                  {message.length}/3000
                </span>
              </div>

              {error ? (
                <p
                  className="contact__error"
                  role="alert"
                  aria-live="assertive"
                >
                  {error}
                </p>
              ) : null}

              {/* ==================================================
                  CONTACT ACTIONS
                  ================================================== */}

              <div className="contact__actions">
                <button
                  type="button"
                  className="contact__submit"
                  onClick={handleEmail}
                >
                  <span>Send via Email</span>

                  <span
                    className="contact__submit-icon"
                    aria-hidden="true"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                      />
                      <polyline points="3,7 12,13 21,7" />
                    </svg>
                  </span>
                </button>

                <button
                  type="button"
                  className="contact__submit contact__submit--whatsapp"
                  onClick={handleWhatsApp}
                >
                  <span>Send via WhatsApp</span>

                  <span
                    className="contact__submit-icon"
                    aria-hidden="true"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-4-.99L3 20l1.16-4.61A8.35 8.35 0 1 1 21 11.5Z" />
                      <path d="M8.2 8.2c.2-.4.4-.4.7-.4h.6c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c.8 1.4 1.9 2.5 3.3 3.2l.5-.6c.2-.2.4-.3.6-.2l1.7.7c.3.1.4.3.4.5v.6c0 .3 0 .5-.4.7-.4.2-1.2.4-2 .2-1.4-.3-2.9-1.2-4.4-2.7-1.5-1.5-2.4-3-2.7-4.4-.2-.8 0-1.6.2-2Z" />
                    </svg>
                  </span>
                </button>
              </div>

              <p className="contact__note">
                Email opens Gmail Compose on desktop and
                your configured mail app on mobile.
                WhatsApp opens a pre-filled message for
                your review.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;