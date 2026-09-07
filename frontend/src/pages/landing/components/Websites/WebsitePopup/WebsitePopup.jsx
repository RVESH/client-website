import React, { useEffect, useRef } from "react";
import "./WebsitePopup.scss";

const DEFAULT_NAME = "Untitled Website";
const DEFAULT_CATEGORY = "Website";
const DEFAULT_DESCRIPTION =
  "Premium website crafted for modern businesses.";

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

const WebsitePopup = ({
  website,
  onClose,
  onMore,
}) => {
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);

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
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
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
    stack,
    pages,
    pageCount,
    price,
    badge,
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

  const safeStack = normalizeArray(stack);
  const safePageCount = getPageCount(
    pages,
    pageCount
  );

  const safePrice =
    typeof price === "string" || typeof price === "number"
      ? String(price).trim()
      : "";

  const safeBadge = normalizeText(badge);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

  const handleMore = () => {
    if (typeof onMore === "function") {
      onMore(website);
    }
  };

  return (
    <div
      className="website-popup"
      role="presentation"
      onMouseDown={handleBackdropClick}
    >
      <div
        ref={dialogRef}
        className="website-popup__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="website-popup-title"
        aria-describedby="website-popup-description"
      >
        <div className="website-popup__visual">
          {image ? (
            <img
              className="website-popup__image"
              src={image}
              alt={`${safeName} website preview`}
              loading="eager"
              decoding="async"
              draggable="false"
            />
          ) : (
            <div className="website-popup__image-placeholder">
              <div className="website-popup__placeholder-mark">
                SB
              </div>

              <span>Website Preview</span>
            </div>
          )}

          <div
            className="website-popup__visual-overlay"
            aria-hidden="true"
          />

          <div className="website-popup__visual-top">
            <span className="website-popup__category">
              {safeCategory}
            </span>

            {safeBadge ? (
              <span className="website-popup__badge">
                {safeBadge}
              </span>
            ) : null}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="website-popup__close"
            onClick={onClose}
            aria-label={`Close preview of ${safeName}`}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="website-popup__body">
          <div className="website-popup__heading">
            <div>
              <span className="website-popup__eyebrow">
                Website Preview
              </span>

              <h2 id="website-popup-title">
                {safeName}
              </h2>
            </div>

            {safePrice ? (
              <span className="website-popup__price">
                {safePrice}
              </span>
            ) : null}
          </div>

          <p
            id="website-popup-description"
            className="website-popup__description"
          >
            {safeDescription}
          </p>

          {(safeStack.length > 0 ||
            safePageCount > 0) && (
            <div className="website-popup__info">
              {safeStack.length > 0 ? (
                <div className="website-popup__info-group">
                  <span className="website-popup__info-label">
                    Built With
                  </span>

                  <div className="website-popup__chips">
                    {safeStack.slice(0, 5).map(
                      (item, index) => (
                        <span
                          className="website-popup__chip"
                          key={`${item}-${index}`}
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              ) : null}

              {safePageCount > 0 ? (
                <div className="website-popup__info-group website-popup__info-group--pages">
                  <span className="website-popup__info-label">
                    Pages
                  </span>

                  <span className="website-popup__page-count">
                    {safePageCount}
                  </span>
                </div>
              ) : null}
            </div>
          )}

          <div className="website-popup__actions">
            <button
              type="button"
              className="website-popup__more"
              onClick={handleMore}
            >
              <span>More Details</span>

              <span
                className="website-popup__more-icon"
                aria-hidden="true"
              >
                →
              </span>
            </button>

            <button
              type="button"
              className="website-popup__dismiss"
              onClick={onClose}
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsitePopup;