import { useMemo, useState } from "react";

import "./Gallery.scss";

const galleryItems = [
  {
    src: "/images/gallery-01.webp",
    alt: "LUMA dining room",
  },
  {
    src: "/images/gallery-02.webp",
    alt: "LUMA restaurant table",
  },
  {
    src: "/images/gallery-03.webp",
    alt: "Seasonal dish at LUMA",
  },
  {
    src: "/images/gallery-04.webp",
    alt: "LUMA evening dining",
  },
  {
    src: "/images/gallery-05.webp",
    alt: "LUMA signature dish",
  },
  {
    src: "/images/gallery-06.webp",
    alt: "LUMA interior",
  },
  {
    src: "/images/gallery-07.webp",
    alt: "LUMA kitchen",
  },
  {
    src: "/images/gallery-08.webp",
    alt: "LUMA dessert",
  },
  {
    src: "/images/gallery-09.webp",
    alt: "LUMA private dining",
  },
];

const ITEMS_PER_PAGE = 6;

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    galleryItems.length / ITEMS_PER_PAGE
  );

  const currentItems = useMemo(() => {
    const start =
      (currentPage - 1) *
      ITEMS_PER_PAGE;

    return galleryItems.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [currentPage]);

  const goToPage = (page) => {
    const safePage = Math.min(
      Math.max(page, 1),
      totalPages
    );

    setCurrentPage(safePage);

    window.requestAnimationFrame(() => {
      document
        .querySelector(".gallery")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };

  return (
    <section className="gallery section">
      <div className="page-shell">

        <div className="gallery__heading">
          <span className="eyebrow">
            FROM THE ROOM
          </span>

          <h2 className="section-title">
            See you around the table.
          </h2>

          <p className="section-copy">
            A changing collection of the room,
            the kitchen and the dishes that define
            the LUMA experience.
          </p>
        </div>

        <div className="gallery__grid">
          {currentItems.map((image) => (
            <figure key={image.src}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        {totalPages > 1 && (
          <div
            className="gallery__pagination"
            aria-label="Gallery pagination"
          >
            <button
              type="button"
              onClick={() =>
                goToPage(currentPage - 1)
              }
              disabled={currentPage === 1}
              aria-label="Previous gallery page"
            >
              ←
            </button>

            <div className="gallery__pages">
              {Array.from(
                { length: totalPages },
                (_, index) => {
                  const page = index + 1;

                  return (
                    <button
                      key={page}
                      type="button"
                      className={
                        page === currentPage
                          ? "gallery__page gallery__page--active"
                          : "gallery__page"
                      }
                      onClick={() =>
                        goToPage(page)
                      }
                      aria-current={
                        page === currentPage
                          ? "page"
                          : undefined
                      }
                    >
                      {String(page).padStart(2, "0")}
                    </button>
                  );
                }
              )}
            </div>

            <button
              type="button"
              onClick={() =>
                goToPage(currentPage + 1)
              }
              disabled={
                currentPage === totalPages
              }
              aria-label="Next gallery page"
            >
              →
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default Gallery;