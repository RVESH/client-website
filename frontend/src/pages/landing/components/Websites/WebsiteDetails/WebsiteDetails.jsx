import React, { useEffect, useRef } from "react";
import "./WebsiteDetails.scss";

const DEFAULT_NAME = "Untitled Website";
const DEFAULT_CATEGORY = "Website";
const DEFAULT_DESCRIPTION =
  "A polished, conversion-focused website concept built to give your brand a premium digital presence.";

const normalizeText = (value, fallback = "") => {
  if (typeof value !== "string") {
    return fallback;
  }

  const trimmed = value.trim();
  return trimmed || fallback;
};

const normalizeArray = (value) => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(
    (item) => typeof item === "string" && item.trim().length > 0
  );
};

const getPageCount = (pages, pageCount) => {
  if (Number.isFinite(Number(pageCount))) {
    return Math.max(0, Number(pageCount));
  }

  if (Number.isFinite(Number(pages))) {
    return Math.max(0, Number(pages));
  }

  if (Array.isArray(pages)) {
    return pages.length;
  }

  return 0;
};

const WebsiteDetails = ({
  website,
  onClose,
  onGetNow,
}) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!website) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [website, onClose]);

  if (!website || typeof website !== "object") {
    return null;
  }

  const {
    name,
    category,
    description,
    image,
    price,
    badge,
    stack,
    pages,
    pageCount,
    features,
    highlights,
    idealFor,
  } = website;

  const safeName = normalizeText(name, DEFAULT_NAME);
  const safeCategory = normalizeText(
    category,
    DEFAULT_CATEGORY
  );
  const safeDescription = normalizeText(
    description,
    DEFAULT_DESCRIPTION
  );

  const safePrice =
    typeof price === "string" || typeof price === "number"
      ? String(price).trim()
      : "";

  const safeBadge = normalizeText(badge);

  const safeStack = normalizeArray(stack);
  const safeFeatures = normalizeArray(features);
  const safeHighlights = normalizeArray(highlights);
  const safeIdealFor = normalizeArray(idealFor);

  const safePageCount = getPageCount(
    pages,
    pageCount
  );

  const handleGetNow = () => {
    if (typeof onGetNow === "function") {
      onGetNow(website);
    }
  };

  return (
    <div className="website-details">
      <div className="website-details__shell">
        <header className="website-details__header">
          <div className="website-details__header-copy">
            <span className="website-details__eyebrow">
              SouthBridge Website Store
            </span>

            <h1>{safeName}</h1>

            <div className="website-details__identity">
              <span className="website-details__category">
                {safeCategory}
              </span>

              {safeBadge ? (
                <span className="website-details__badge">
                  {safeBadge}
                </span>
              ) : null}
            </div>
          </div>

          <div className="website-details__header-actions">
            {safePrice ? (
              <div className="website-details__price">
                <span>Starting at</span>
                <strong>{safePrice}</strong>
              </div>
            ) : null}

            <button
              ref={closeButtonRef}
              type="button"
              className="website-details__close"
              onClick={onClose}
              aria-label={`Close details for ${safeName}`}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </header>

        <main className="website-details__content">
          <section className="website-details__hero">
            <div className="website-details__preview">
              {image ? (
                <img
                  src={image}
                  alt={`${safeName} website preview`}
                  loading="eager"
                  decoding="async"
                  draggable="false"
                />
              ) : (
                <div className="website-details__preview-empty">
                  <span>SB</span>
                  <small>Preview coming soon</small>
                </div>
              )}
            </div>

            <div className="website-details__intro">
              <span className="website-details__section-label">
                About this website
              </span>

              <h2>
                Designed to make your business look ready
                for its next level.
              </h2>

              <p>{safeDescription}</p>

              <button
                type="button"
                className="website-details__primary"
                onClick={handleGetNow}
              >
                <span>Get Now</span>

                <span
                  className="website-details__primary-icon"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            </div>
          </section>

          <section className="website-details__stats">
            <div className="website-details__stat">
              <span className="website-details__stat-label">
                Category
              </span>

              <strong>{safeCategory}</strong>
            </div>

            <div className="website-details__stat">
              <span className="website-details__stat-label">
                Pages
              </span>

              <strong>
                {safePageCount > 0
                  ? safePageCount
                  : "Flexible"}
              </strong>
            </div>

            <div className="website-details__stat">
              <span className="website-details__stat-label">
                Tech Stack
              </span>

              <strong>
                {safeStack.length > 0
                  ? safeStack.length
                  : "Modern"}
              </strong>
            </div>

            <div className="website-details__stat">
              <span className="website-details__stat-label">
                Availability
              </span>

              <strong>Ready to Enquire</strong>
            </div>
          </section>

          <section className="website-details__section">
            <div className="website-details__section-heading">
              <span className="website-details__section-label">
                What you get
              </span>

              <h2>
                Everything you need to present your brand
                online.
              </h2>
            </div>

            {safeFeatures.length > 0 ? (
              <div className="website-details__feature-grid">
                {safeFeatures.map((feature, index) => (
                  <div
                    className="website-details__feature"
                    key={`${feature}-${index}`}
                  >
                    <span className="website-details__feature-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3>{feature}</h3>
                      <span className="website-details__feature-line" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="website-details__empty-block">
                <p>
                  This website is structured as a flexible
                  premium starter that can be tailored to
                  your exact business requirements.
                </p>
              </div>
            )}
          </section>

          {safeHighlights.length > 0 ? (
            <section className="website-details__section">
              <div className="website-details__section-heading">
                <span className="website-details__section-label">
                  Highlights
                </span>

                <h2>
                  Built around the details that matter.
                </h2>
              </div>

              <div className="website-details__highlight-list">
                {safeHighlights.map((highlight, index) => (
                  <div
                    className="website-details__highlight"
                    key={`${highlight}-${index}`}
                  >
                    <span
                      className="website-details__highlight-dot"
                      aria-hidden="true"
                    />

                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {safeIdealFor.length > 0 ? (
            <section className="website-details__section">
              <div className="website-details__section-heading">
                <span className="website-details__section-label">
                  Ideal for
                </span>

                <h2>
                  A strong fit for businesses that want...
                </h2>
              </div>

              <div className="website-details__ideal-grid">
                {safeIdealFor.map((item, index) => (
                  <div
                    className="website-details__ideal"
                    key={`${item}-${index}`}
                  >
                    <span aria-hidden="true">✦</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {safeStack.length > 0 ? (
            <section className="website-details__section">
              <div className="website-details__section-heading">
                <span className="website-details__section-label">
                  Technology
                </span>

                <h2>
                  Modern foundations, ready for customization.
                </h2>
              </div>

              <div className="website-details__stack">
                {safeStack.map((technology, index) => (
                  <span
                    className="website-details__stack-item"
                    key={`${technology}-${index}`}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>
          ) : null}

          <section className="website-details__final-cta">
            <div>
              <span className="website-details__section-label">
                Ready to make it yours?
              </span>

              <h2>
                Tell us which website you want and we’ll take
                it from here.
              </h2>

              <p>
                Start an enquiry for this exact website and
                discuss customization, pricing, content, and
                delivery with SouthBridge.
              </p>
            </div>

            <button
              type="button"
              className="website-details__primary website-details__primary--large"
              onClick={handleGetNow}
            >
              <span>Get Now</span>

              <span
                className="website-details__primary-icon"
                aria-hidden="true"
              >
                →
              </span>
            </button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default WebsiteDetails;