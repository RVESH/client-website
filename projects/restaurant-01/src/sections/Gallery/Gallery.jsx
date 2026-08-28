import { useMemo, useState } from "react";

import { restaurantImages } from "../../data/images";

import "./Gallery.scss";

const ITEMS_PER_PAGE = 6;

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    restaurantImages.gallery.length /
      ITEMS_PER_PAGE
  );

  const currentItems = useMemo(() => {
    const start =
      (currentPage - 1) *
      ITEMS_PER_PAGE;

    return restaurantImages.gallery.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [currentPage]);

  const changePage = (page) => {
    const nextPage = Math.min(
      Math.max(page, 1),
      totalPages
    );

    setCurrentPage(nextPage);

    window.scrollTo({
      top:
        document.querySelector(".gallery")
          ?.getBoundingClientRect().top +
        window.scrollY -
        80,
      behavior: "smooth",
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
            A visual collection of our food,
            atmosphere and dining experience.
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
          <div className="gallery__pagination">

            <button
              type="button"
              onClick={() =>
                changePage(currentPage - 1)
              }
              disabled={currentPage === 1}
            >
              ←
            </button>

            <div className="gallery__pages">
              {Array.from(
                {
                  length: totalPages,
                },
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
                        changePage(page)
                      }
                    >
                      {String(page).padStart(
                        2,
                        "0"
                      )}
                    </button>
                  );
                }
              )}
            </div>

            <button
              type="button"
              onClick={() =>
                changePage(currentPage + 1)
              }
              disabled={
                currentPage === totalPages
              }
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