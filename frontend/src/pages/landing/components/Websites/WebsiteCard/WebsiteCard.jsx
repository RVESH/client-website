import React, { memo } from "react";
import "./WebsiteCard.scss";

const DEFAULT_NAME = "Untitled Website";
const DEFAULT_CATEGORY = "Website";
const DEFAULT_DESCRIPTION =
  "Premium website crafted for modern businesses.";

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

const normalizeArray = (value) => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(
    (item) => typeof item === "string" && item.trim().length > 0
  );
};

const WebsiteCard = memo(function WebsiteCard({
  website,
  index = 0,
  onSelect,
}) {
  /*
   * IMPORTANT:
   * Hooks must never be placed after a conditional return.
   * This component intentionally does not use hooks here,
   * so it is safe for every render path.
   */

  if (!website || typeof website !== "object") {
    return null;
  }

  const {
    id,
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

  const safeName =
    typeof name === "string" && name.trim()
      ? name.trim()
      : DEFAULT_NAME;

  const safeCategory =
    typeof category === "string" && category.trim()
      ? category.trim()
      : DEFAULT_CATEGORY;

  const safeDescription =
    typeof description === "string" && description.trim()
      ? description.trim()
      : DEFAULT_DESCRIPTION;

  const safePrice =
    typeof price === "string" || typeof price === "number"
      ? String(price).trim()
      : "";

  const safeBadge =
    typeof badge === "string" && badge.trim()
      ? badge.trim()
      : "";

  const displayStack = normalizeArray(stack).slice(0, 3);

  const displayPageCount = getPageCount(
    pages,
    pageCount
  );

  const cardNumber = String(index + 1).padStart(2, "0");

  const handleOpen = () => {
    if (typeof onSelect === "function") {
      onSelect(website);
    }
  };

  return (
    <article
      className="website-card"
      style={{ "--card-index": index }}
      data-website-id={id || undefined}
    >
      <div className="website-card__media">
        {image ? (
          <button
            type="button"
            className="website-card__image-button"
            onClick={handleOpen}
            aria-label={`Preview ${safeName}`}
          >
            <img
              className="website-card__image"
              src={image}
              alt={`${safeName} website preview`}
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
              draggable="false"
            />

            <span
              className="website-card__image-overlay"
              aria-hidden="true"
            />

            <span
              className="website-card__preview-label"
              aria-hidden="true"
            >
              Preview
            </span>
          </button>
        ) : (
          <button
            type="button"
            className="website-card__image-button website-card__image-button--empty"
            onClick={handleOpen}
            aria-label={`Open details for ${safeName}`}
          >
            <span
              className="website-card__placeholder"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                width="34"
                height="34"
                fill="none"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="16"
                  rx="2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M3 8.5h18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="6.5"
                  cy="6.25"
                  r=".8"
                  fill="currentColor"
                />
                <circle
                  cx="9.25"
                  cy="6.25"
                  r=".8"
                  fill="currentColor"
                />
              </svg>

              <span>Preview unavailable</span>
            </span>
          </button>
        )}

        <div
          className="website-card__media-shade"
          aria-hidden="true"
        />
      </div>

      <div className="website-card__content">
        <div className="website-card__topbar">
          <span className="website-card__category">
            {safeCategory}
          </span>

          {safeBadge ? (
            <span className="website-card__badge">
              {safeBadge}
            </span>
          ) : (
            <span
              className="website-card__index"
              aria-hidden="true"
            >
              {cardNumber}
            </span>
          )}
        </div>

        <div className="website-card__heading-row">
          <div className="website-card__heading">
            <h3 className="website-card__title">
              {safeName}
            </h3>

            <span
              className="website-card__title-line"
              aria-hidden="true"
            />
          </div>

          {safePrice ? (
            <div className="website-card__price">
              {safePrice}
            </div>
          ) : null}
        </div>

        <p className="website-card__description">
          {safeDescription}
        </p>

        {(displayStack.length > 0 ||
          displayPageCount > 0) && (
          <div className="website-card__meta">
            {displayStack.length > 0 && (
              <div
                className="website-card__stack"
                aria-label="Technology"
              >
                {displayStack.map((technology) => (
                  <span
                    className="website-card__chip"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            )}

            {displayPageCount > 0 && (
              <span className="website-card__pages">
                <span
                  className="website-card__pages-icon"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                  >
                    <path
                      d="M5 4.5h14M5 9.5h14M5 14.5h9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                {displayPageCount}{" "}
                {displayPageCount === 1
                  ? "page"
                  : "pages"}
              </span>
            )}
          </div>
        )}

        <div className="website-card__footer">
          <button
            type="button"
            className="website-card__explore"
            onClick={handleOpen}
            aria-label={`Explore ${safeName}`}
          >
            <span>Explore Website</span>

            <span
              className="website-card__explore-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </button>
        </div>
      </div>
    </article>
  );
});

export default WebsiteCard;