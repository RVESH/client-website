import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import websitesData from "../../../data/websites.json";

import FeaturedSlider from "./FeaturedSlider/FeaturedSlider";
import WebsiteCard from "./WebsiteCard/WebsiteCard";
import WebsitePopup from "./WebsitePopup/WebsitePopup";
import WebsiteDetails from "./WebsiteDetails/WebsiteDetails";

import "./Websites.scss";

/*
|--------------------------------------------------------------------------
| WEBSITE ASSET CONFIGURATION
|--------------------------------------------------------------------------
| websites.json stores image paths relative to:
|
|   public/images/websites/
|
| Example:
|
|   "imageKey": "medical-clinic/clinic-01.png"
|
| becomes:
|
|   /images/websites/medical-clinic/clinic-01.png
|
| No React image imports or asset registry are required.
| Adding a new website only requires:
|
|   1. Add the image inside public/images/websites/
|   2. Add/update the website object in websites.json
|
|--------------------------------------------------------------------------
*/

const PUBLIC_BASE = (process.env.PUBLIC_URL || "").replace(/\/$/, "");

const WEBSITE_IMAGE_BASE =
  `${PUBLIC_BASE}/images/websites`;

const ITEMS_PER_PAGE = 6;

const getRawWebsiteList = (data) => {
  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data?.websites)) {
    return data.websites;
  }

  return [];
};

const normalizePath = (value) => {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value
    .trim()
    .replace(/\\/g, "/");

  if (!trimmed) {
    return null;
  }

  // External assets are allowed as-is.
  if (
    trimmed.startsWith("https://") ||
    trimmed.startsWith("http://") ||
    trimmed.startsWith("data:")
  ) {
    return trimmed;
  }

  // Already app-rooted website assets must keep PUBLIC_URL.
  // Example:
  // /images/websites/medical-clinic/clinic-01.png
  // -> /client-website/images/websites/medical-clinic/clinic-01.png
  if (trimmed.startsWith("/images/websites/")) {
    return `${PUBLIC_BASE}${trimmed}`;
  }

  // Absolute public paths outside the website asset directory are
  // preserved rather than incorrectly prepending the website base.
  if (trimmed.startsWith("/")) {
    return `${PUBLIC_BASE}${trimmed}`;
  }

  // JSON's normal format is relative to public/images/websites/.
  // Example:
  // medical-clinic/clinic-01.png
  // -> /client-website/images/websites/medical-clinic/clinic-01.png
  return `${WEBSITE_IMAGE_BASE}/${trimmed.replace(/^\/+/, "")}`;
};

const resolveGallery = (gallery) => {
  if (!Array.isArray(gallery)) {
    return [];
  }

  return [...new Set(
    gallery
      .map(normalizePath)
      .filter(Boolean)
  )];
};

const getImageFromWebsite = (website) => {
  const image =
    normalizePath(website?.imageKey) ||
    normalizePath(website?.image);

  if (image) {
    return image;
  }

  const gallery =
    resolveGallery(
      website?.galleryKeys || website?.gallery
    );

  return gallery[0] || null;
};

const normalizeWebsite = (website) => {
  if (!website || typeof website !== "object") {
    return null;
  }

  const pageCount = Math.max(
    0,
    Number.parseInt(website.pages, 10) || 0
  );

  const image = getImageFromWebsite(website);

  const gallery = resolveGallery(
    website.galleryKeys || website.gallery
  );

  const images =
    gallery.length > 0
      ? gallery
      : image
        ? [image]
        : [];

  const name =
    typeof website.name === "string" && website.name.trim()
      ? website.name.trim()
      : "Website Project";

  const id =
    typeof website.id === "string" && website.id.trim()
      ? website.id.trim()
      : name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return {
    ...website,
    id,
    name,
    pages: pageCount,
    pageCount,
    image,
    images,
  };
};

const WEBSITE_DATA = Object.freeze(
  getRawWebsiteList(websitesData)
    .map(normalizeWebsite)
    .filter(Boolean)
);

const Websites = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [viewMode, setViewMode] = useState("popup");

  /*
  |--------------------------------------------------------------------------
  | PUBLISHED WEBSITES
  |--------------------------------------------------------------------------
  | Only entries with a valid image path are displayed in the store.
  |--------------------------------------------------------------------------
  */

  const websitesWithImages = useMemo(
    () =>
      WEBSITE_DATA.filter(
        (website) =>
          typeof website?.image === "string" &&
          website.image.length > 0
      ),
    []
  );

  /*
  |--------------------------------------------------------------------------
  | CATEGORY COUNT
  |--------------------------------------------------------------------------
  */

  const categoryCount = useMemo(() => {
    const categories = new Set();

    websitesWithImages.forEach((website) => {
      if (
        typeof website.category === "string" &&
        website.category.trim()
      ) {
        categories.add(website.category.trim());
      }
    });

    return categories.size;
  }, [websitesWithImages]);

  /*
  |--------------------------------------------------------------------------
  | FEATURED
  |--------------------------------------------------------------------------
  */

  const featuredWebsites = useMemo(() => {
    const featured = websitesWithImages.filter(
      (website) => website.featured === true
    );

    return featured.length > 0
      ? featured
      : websitesWithImages.slice(0, 5);
  }, [websitesWithImages]);

  /*
  |--------------------------------------------------------------------------
  | PAGINATION
  |--------------------------------------------------------------------------
  */

  const totalPages = Math.max(
    1,
    Math.ceil(
      websitesWithImages.length / ITEMS_PER_PAGE
    )
  );

  useEffect(() => {
    setCurrentPage((current) =>
      Math.min(
        Math.max(current, 1),
        totalPages
      )
    );
  }, [totalPages]);

  useEffect(() => {
    if (!selectedWebsite) {
      return;
    }

    const stillPublished = websitesWithImages.some(
      (website) => website.id === selectedWebsite.id
    );

    if (!stillPublished) {
      setSelectedWebsite(null);
      setViewMode("popup");
    }
  }, [selectedWebsite, websitesWithImages]);

  const visibleWebsites = useMemo(() => {
    const startIndex =
      (currentPage - 1) * ITEMS_PER_PAGE;

    return websitesWithImages.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
  }, [currentPage, websitesWithImages]);

  /*
  |--------------------------------------------------------------------------
  | WEBSITE SELECTION / MODALS
  |--------------------------------------------------------------------------
  */

  const handleOpenWebsite = useCallback((website) => {
    if (!website) {
      return;
    }

    setSelectedWebsite(website);
    setViewMode("popup");
  }, []);
useEffect(() => {
  const websiteId = location.state?.websiteId;
  const shouldOpenPopup = location.state?.openPopup;

  if (!websiteId || !shouldOpenPopup) {
    return;
  }

  const website = websitesWithImages.find(
    (item) => item.id === websiteId
  );

  if (!website) {
    navigate("/websites", {
      replace: true,
      state: null,
    });
    return;
  }

  setSelectedWebsite(website);
  setViewMode("popup");

  navigate("/websites", {
    replace: true,
    state: null,
  });
}, [location.state, navigate, websitesWithImages]);



  const handleCloseWebsite = useCallback(() => {
    setSelectedWebsite(null);
    setViewMode("popup");
  }, []);

  const handleOpenDetails = useCallback(
    (website) => {
      if (website) {
        setSelectedWebsite(website);
        setViewMode("details");
        return;
      }

      if (selectedWebsite) {
        setViewMode("details");
      }
    },
    [selectedWebsite]
  );

  const handleBackToPopup = useCallback(() => {
    setViewMode("popup");
  }, []);

  /*
  |--------------------------------------------------------------------------
  | CONTACT / GET NOW
  |--------------------------------------------------------------------------
  */

  const handleGetWebsite = useCallback(
    (website) => {
      if (!website) {
        navigate("/contact");
        return;
      }

      navigate("/contact", {
        state: {
          websiteId: website.id || "",
          websiteName: website.name || "",
          websiteCategory: website.category || "",
        },
      });
    },
    [navigate]
  );

  const handleCustomProject = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  /*
  |--------------------------------------------------------------------------
  | PAGINATION
  |--------------------------------------------------------------------------
  */

  const handlePageChange = useCallback(
    (page) => {
      const nextPage = Number.parseInt(page, 10);

      if (
        !Number.isFinite(nextPage) ||
        nextPage < 1 ||
        nextPage > totalPages ||
        nextPage === currentPage
      ) {
        return;
      }

      setCurrentPage(nextPage);

      window.requestAnimationFrame(() => {
        document
          .getElementById("southbridge-websites-catalog")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      });
    },
    [currentPage, totalPages]
  );

  /*
  |--------------------------------------------------------------------------
  | RENDER
  |--------------------------------------------------------------------------
  */

  return (
    <section
      className="websites"
      id="websites"
      aria-labelledby="websites-title"
    >
      <div
        className="websites__background websites__background--one"
        aria-hidden="true"
      />

      <div
        className="websites__background websites__background--two"
        aria-hidden="true"
      />

      <div
        className="websites__grid-overlay"
        aria-hidden="true"
      />

      <div className="websites__container">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <header className="websites__header">
          <div className="websites__eyebrow">
            <span
              className="websites__eyebrow-dot"
              aria-hidden="true"
            />

            SOUTHBRIDGE WEBSITE STORE
          </div>

          <h2
            id="websites-title"
            className="websites__title"
          >
            Websites made to
            <span> move businesses forward.</span>
          </h2>

          <p className="websites__intro">
            Explore ready-to-use website concepts designed
            for modern businesses, startups, creators and
            brands. Pick a direction, preview the experience
            and get your next website moving.
          </p>

          <div className="websites__stats">
            <div className="websites__stat">
              <strong>
                {websitesWithImages.length}
              </strong>

              <span>Ready designs</span>
            </div>

            <div
              className="websites__stat-divider"
              aria-hidden="true"
            />

            <div className="websites__stat">
              <strong>{categoryCount}</strong>

              <span>Categories</span>
            </div>

            <div
              className="websites__stat-divider"
              aria-hidden="true"
            />

            <div className="websites__stat">
              <strong>100%</strong>
              <span>Responsive</span>
            </div>
          </div>
        </header>

        {/* =========================================================
            FEATURED
        ========================================================== */}

        <div className="websites__featured">
          <FeaturedSlider
            websites={featuredWebsites}
            onSelect={handleOpenWebsite}
          />
        </div>

        {/* =========================================================
            CATALOG
        ========================================================== */}

        <div
          className="websites__catalog"
          id="southbridge-websites-catalog"
        >
          <div className="websites__catalog-head">
            <div>
              <span className="websites__section-label">
                THE COLLECTION
              </span>

              <h3>
                Find your
                <span> next website.</span>
              </h3>
            </div>

            <div className="websites__catalog-count">
              <strong>
                {websitesWithImages.length}
              </strong>

              <span>projects in collection</span>
            </div>
          </div>

          <div className="websites__catalog-bar">
            <span>
              Page {currentPage} of {totalPages}
            </span>

            <span>
              Showing{" "}
              <strong>
                {visibleWebsites.length}
              </strong>{" "}
              websites
            </span>
          </div>

          {visibleWebsites.length > 0 ? (
            <div className="websites__cards">
              {visibleWebsites.map(
                (website, index) => (
                  <WebsiteCard
                    key={
                      website.id ||
                      `${website.name}-${index}`
                    }
                    website={website}
                    index={
                      (currentPage - 1) *
                        ITEMS_PER_PAGE +
                      index
                    }
                    onSelect={handleOpenWebsite}
                  />
                )
              )}
            </div>
          ) : (
            <div
              className="websites__empty"
              role="status"
            >
              <strong>
                No website previews available.
              </strong>

              <span>
                Add a valid imageKey or galleryKeys path in
                websites.json to publish a preview.
              </span>
            </div>
          )}

          {/* =======================================================
              PAGINATION
          ======================================================== */}

          {totalPages > 1 && (
            <nav
              className="websites__pagination"
              aria-label="Website pages"
            >
              <button
                type="button"
                className="websites__pagination-arrow"
                onClick={() =>
                  handlePageChange(
                    currentPage - 1
                  )
                }
                disabled={currentPage === 1}
                aria-label="Previous website page"
              >
                ←
              </button>

              <div className="websites__pagination-pages">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    className={
                      page === currentPage
                        ? "is-active"
                        : ""
                    }
                    onClick={() =>
                      handlePageChange(page)
                    }
                    aria-current={
                      page === currentPage
                        ? "page"
                        : undefined
                    }
                    aria-label={`Go to website page ${page}`}
                  >
                    {String(page).padStart(2, "0")}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="websites__pagination-arrow"
                onClick={() =>
                  handlePageChange(
                    currentPage + 1
                  )
                }
                disabled={
                  currentPage === totalPages
                }
                aria-label="Next website page"
              >
                →
              </button>
            </nav>
          )}
        </div>

        {/* =========================================================
            CUSTOM PROJECT CTA
        ========================================================== */}

        <div className="websites__bottom-cta">
          <div>
            <span className="websites__section-label">
              CAN&apos;T FIND THE RIGHT ONE?
            </span>

            <h3>
              We can build something
              <span> around your brand.</span>
            </h3>
          </div>

          <button
            type="button"
            className="websites__cta-button"
            onClick={handleCustomProject}
          >
            Start a custom project

            <span aria-hidden="true">
              ↗
            </span>
          </button>
        </div>
      </div>

      {/* ===========================================================
          WEBSITE POPUP
      =========================================================== */}

      {selectedWebsite &&
        viewMode === "popup" && (
          <WebsitePopup
            website={selectedWebsite}
            onClose={handleCloseWebsite}
            onMore={handleOpenDetails}
          />
        )}

      {/* ===========================================================
          WEBSITE DETAILS
      =========================================================== */}

      {selectedWebsite &&
        viewMode === "details" && (
          <WebsiteDetails
            website={selectedWebsite}
            onClose={handleCloseWebsite}
            onBack={handleBackToPopup}
            onGetNow={handleGetWebsite}
          />
        )}
    </section>
  );
};

export default Websites;