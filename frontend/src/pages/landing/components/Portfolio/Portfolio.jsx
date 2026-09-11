import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import websitesData from "../../../data/websites.json";

import "./Portfolio.scss";

const PUBLIC_BASE = (process.env.PUBLIC_URL || "").replace(/\/$/, "");

const WEBSITE_IMAGE_BASE =
  `${PUBLIC_BASE}/images/websites`;

/* =================================================================
   DATA HELPERS
   ================================================================= */

const getRawWebsiteList = (data) => {
  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data?.websites)) {
    return data.websites;
  }

  return [];
};

const normalizeAssetPath = (value) => {
  if (typeof value !== "string" || !value.trim()) {
    return null;
  }

  const trimmed = value.trim();

  if (
    trimmed.startsWith("/") ||
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://")
  ) {
    return trimmed;
  }

return `${WEBSITE_IMAGE_BASE}/${trimmed.replace(/^\/+/, "")}`;};

const getWebsiteImages = (website) => {
  if (!website || typeof website !== "object") {
    return [];
  }

  const candidates = [
    website.imageKey,
    ...(Array.isArray(website.galleryKeys)
      ? website.galleryKeys
      : []),
    website.image,
    ...(Array.isArray(website.gallery)
      ? website.gallery
      : []),
  ];

  return [...new Set(
    candidates
      .map(normalizeAssetPath)
      .filter(Boolean)
  )];
};

const normalizeWebsite = (website) => {
  if (!website || typeof website !== "object") {
    return null;
  }

  const images = getWebsiteImages(website);

  if (images.length === 0) {
    return null;
  }

  const pageCount = Math.max(
    0,
    Number.parseInt(website.pages, 10) || 0
  );

  const category =
    typeof website.category === "string"
      ? website.category.trim()
      : "";

  const type =
    typeof website.type === "string"
      ? website.type.trim()
      : "";

  const tag =
    category && type
      ? `${category} · ${type}`
      : category || type || "Website";

  const title =
    typeof website.name === "string" && website.name.trim()
      ? website.name.trim()
      : "Website Project";

  const description =
    typeof website.description === "string"
      ? website.description.trim()
      : "";

  return {
    ...website,
    id: website.id ?? title,
    title,
    tag,
    text: description,
    pages: pageCount,
    images,
  };
};

const WEBSITE_DATA = Object.freeze(
  getRawWebsiteList(websitesData)
    .map(normalizeWebsite)
    .filter(Boolean)
);

/* =================================================================
   PORTFOLIO CARD
   ================================================================= */

function PortCard({
  project,
  index,
  onPreview,
  onViewWebsite,
}) {
  const [expanded, setExpanded] = useState(false);

  const firstImage = project?.images?.[0];

  if (!project || !firstImage) {
    return null;
  }

  return (
    <article
      className="port__card"
      style={{
        "--portfolio-card-index": index,
      }}
    >
      {/* Image */}
      <button
        type="button"
        className="port__thumb"
        onClick={() => onPreview(project, 0)}
        aria-label={`Preview ${project.title}`}
      >
        <img
          src={firstImage}
          alt={`${project.title} preview`}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
        />

        <span
          className="port__thumb-overlay"
          aria-hidden="true"
        />

        <span className="port__preview">
          <span
            className="port__preview-icon"
            aria-hidden="true"
          >
            ↗
          </span>

          Preview
        </span>

        <span className="port__thumb-label">
          {String(index + 1).padStart(2, "0")}
        </span>
      </button>

      {/* Content */}
      <div className="port__body">
        <div className="port__topline">
          <span className="port__tag">
            {project.tag}
          </span>

          <span className="port__type">
            Project
          </span>
        </div>

        <h3 className="port__title">
          {project.title}
        </h3>

        <div
          className={`port__description ${
            expanded
              ? "port__description--expanded"
              : ""
          }`}
        >
          {project.text || "A polished SouthBridge website concept."}
        </div>

        <button
          type="button"
          className="port__more"
          onClick={() =>
            setExpanded((previous) => !previous)
          }
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "More details"}

          <span
            className={`port__more-icon ${
              expanded
                ? "port__more-icon--open"
                : ""
            }`}
            aria-hidden="true"
          >
            +
          </span>
        </button>

        <div className="port__footer">
          <button
            type="button"
            className="port__link"
            onClick={() => onViewWebsite(project)}
          >
            <span>View Project</span>

            <span
              className="port__link-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </button>

          <span className="port__footer-note">
            Explore store
          </span>
        </div>
      </div>
    </article>
  );
}

/* =================================================================
   PORTFOLIO
   ================================================================= */

const Portfolio = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const [cardsToShow, setCardsToShow] = useState(3);

  /* ================================================================
     RESPONSIVE CARD COUNT
     ================================================================ */

  useEffect(() => {
    const updateCards = () => {
      const width = window.innerWidth;

      if (width >= 1200) {
        setCardsToShow(3);
      } else if (width >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCards();

    window.addEventListener("resize", updateCards);

    return () => {
      window.removeEventListener("resize", updateCards);
    };
  }, []);

  /* ================================================================
     SAFE INDEX
     ================================================================ */

  useEffect(() => {
    if (WEBSITE_DATA.length === 0) {
      setCurrent(0);
      setCurrentImage(0);
      return;
    }

    setCurrent((previous) =>
      Math.min(previous, WEBSITE_DATA.length - 1)
    );
  }, []);

  /* ================================================================
     PROJECT NAVIGATION
     ================================================================ */

  const prevProject = useCallback(() => {
    if (WEBSITE_DATA.length <= 1) {
      return;
    }

    setCurrent((previous) =>
      previous === 0
        ? WEBSITE_DATA.length - 1
        : previous - 1
    );

    setCurrentImage(0);
  }, []);

  const nextProject = useCallback(() => {
    if (WEBSITE_DATA.length <= 1) {
      return;
    }

    setCurrent((previous) =>
      previous === WEBSITE_DATA.length - 1
        ? 0
        : previous + 1
    );

    setCurrentImage(0);
  }, []);

  /* ================================================================
     IMAGE NAVIGATION
     ================================================================ */

  const prevImage = useCallback(() => {
    setCurrentImage((previous) => {
      const images =
        WEBSITE_DATA[current]?.images || [];

      if (images.length <= 1) {
        return 0;
      }

      return previous === 0
        ? images.length - 1
        : previous - 1;
    });
  }, [current]);

  const nextImage = useCallback(() => {
    setCurrentImage((previous) => {
      const images =
        WEBSITE_DATA[current]?.images || [];

      if (images.length <= 1) {
        return 0;
      }

      return previous === images.length - 1
        ? 0
        : previous + 1;
    });
  }, [current]);

  /* ================================================================
     VISIBLE PROJECTS
     ================================================================ */

  const visibleProjects = useMemo(() => {
    if (WEBSITE_DATA.length === 0) {
      return [];
    }

    return Array.from(
      { length: Math.min(cardsToShow, WEBSITE_DATA.length) },
      (_, index) =>
        WEBSITE_DATA[
          (current + index) % WEBSITE_DATA.length
        ]
    );
  }, [current, cardsToShow]);

  /* ================================================================
     OPEN IMAGE MODAL
     ================================================================ */

  const openImage = useCallback(
    (project, imageIndex = 0) => {
      const projectIndex = WEBSITE_DATA.findIndex(
        (item) => item.id === project?.id
      );

      if (
        projectIndex === -1 ||
        !WEBSITE_DATA[projectIndex]?.images?.length
      ) {
        return;
      }

      const images = WEBSITE_DATA[projectIndex].images;
      const safeImageIndex = Math.max(
        0,
        Math.min(imageIndex, images.length - 1)
      );

      setCurrent(projectIndex);
      setCurrentImage(safeImageIndex);
      setShowModal(true);
    },
    []
  );

  /* ================================================================
     CLOSE MODAL
     ================================================================ */

  const closeModal = useCallback(() => {
    setShowModal(false);
    setCurrentImage(0);
  }, []);

/* ================================================================
   VIEW WEBSITE
   ================================================================ */

const handleViewWebsite = useCallback(
  (project) => {
    if (!project?.id) {
      return;
    }

    navigate("/websites", {
      state: {
        websiteId: project.id,
        openPopup: true,
      },
    });
  },
  [navigate]
);

  /* ================================================================
     MODAL KEYBOARD CONTROLS
     ================================================================ */

  useEffect(() => {
    if (!showModal) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          closeModal();
          break;

        case "ArrowLeft":
          prevImage();
          break;

        case "ArrowRight":
          nextImage();
          break;

        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = previousOverflow;
    };
  }, [
    showModal,
    closeModal,
    prevImage,
    nextImage,
  ]);

  /* ================================================================
     AUTOPLAY
     ================================================================ */

  useEffect(() => {
    if (
      showModal ||
      WEBSITE_DATA.length <= 1
    ) {
      return undefined;
    }

    const timer = window.setInterval(
      nextProject,
      6500
    );

    return () => {
      window.clearInterval(timer);
    };
  }, [
    showModal,
    nextProject,
  ]);

  /* ================================================================
     EMPTY STATE
     ================================================================ */

  if (WEBSITE_DATA.length === 0) {
    return (
      <section
        id="portfolio"
        className="section portfolio"
      >
        <div className="container">
          <header className="sh portfolio__header">
            <p className="sh__pill">
              Our Work
            </p>

            <h2 className="sh__title">
              Websites That{" "}
              <span>Sell</span>
            </h2>

            <p className="sh__sub">
              Hand-crafted demos and live
              projects built for real
              businesses.
            </p>
          </header>

          <div className="portfolio__empty">
            <strong>
              Portfolio projects are being prepared.
            </strong>

            <span>
              Add an image path to websites.json
              to publish a project here.
            </span>
          </div>
        </div>
      </section>
    );
  }

  const activeProject = WEBSITE_DATA[current];
  const activeImages = activeProject?.images || [];
  const safeCurrentImage = Math.min(
    currentImage,
    Math.max(0, activeImages.length - 1)
  );

  return (
    <>
      <section
        id="portfolio"
        className="section portfolio"
      >
        <div className="container">
          {/* ========================================================
              HEADER
             ======================================================== */}

          <header className="sh portfolio__header">
            <p className="sh__pill">
              Our Work
            </p>

            <h2 className="sh__title">
              Websites That{" "}
              <span>Sell</span>
            </h2>

            <p className="sh__sub">
              Hand-crafted demos and live
              projects built for real
              businesses.
            </p>
          </header>

          {/* ========================================================
              PROJECT SLIDER
             ======================================================== */}

          <div className="port__slider">
            <div className="port__track">
              {visibleProjects.map(
                (project, index) => (
                  <PortCard
                    key={`${project.id}-${index}`}
                    project={project}
                    index={index}
                    onPreview={openImage}
                    onViewWebsite={
                      handleViewWebsite
                    }
                  />
                )
              )}
            </div>

            {/* ======================================================
                SLIDER CONTROLS
               ====================================================== */}

            <div
              className="port__controls"
              aria-label="Portfolio slider controls"
            >
              <button
                type="button"
                className="port__arrow"
                onClick={prevProject}
                disabled={WEBSITE_DATA.length <= 1}
                aria-label="Previous projects"
              >
                <span aria-hidden="true">
                  ←
                </span>
              </button>

              <div
                className="port__counter"
                aria-live="polite"
              >
                <span>
                  {String(
                    current + 1
                  ).padStart(2, "0")}
                </span>

                <i>/</i>

                <span>
                  {String(
                    WEBSITE_DATA.length
                  ).padStart(2, "0")}
                </span>
              </div>

              <button
                type="button"
                className="port__arrow"
                onClick={nextProject}
                disabled={WEBSITE_DATA.length <= 1}
                aria-label="Next projects"
              >
                <span aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          IMAGE MODAL
         ============================================================== */}

      {showModal && activeProject && activeImages.length > 0 && (
        <div
          className="portfolio-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeModal();
            }
          }}
        >
          <div
            className="portfolio-modal__content"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title} preview`}
          >
            {/* CLOSE */}

            <button
              type="button"
              className="portfolio-modal__close"
              onClick={closeModal}
              aria-label="Close image preview"
            >
              ×
            </button>

            {/* PREVIOUS */}

            <button
              type="button"
              className="portfolio-modal__arrow"
              onClick={prevImage}
              disabled={activeImages.length <= 1}
              aria-label="Previous image"
            >
              ←
            </button>

            {/* IMAGE */}

            <div className="portfolio-modal__image">
              <img
                src={
                  activeImages[safeCurrentImage]
                }
                alt={`${activeProject.title} preview ${
                  safeCurrentImage + 1
                }`}
                decoding="async"
              />

              <div className="portfolio-modal__meta">
                <div>
                  <strong>
                    {activeProject.title}
                  </strong>

                  <span>
                    {activeProject.tag}
                  </span>
                </div>

                <span className="portfolio-modal__counter">
                  {safeCurrentImage + 1} /{" "}
                  {activeImages.length}
                </span>
              </div>
            </div>

            {/* NEXT */}

            <button
              type="button"
              className="portfolio-modal__arrow"
              onClick={nextImage}
              disabled={activeImages.length <= 1}
              aria-label="Next image"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;