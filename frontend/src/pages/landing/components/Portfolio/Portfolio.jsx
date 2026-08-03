import React, { useState } from "react";
import "./Portfolio.scss";

import business1 from "../../../../images/web1/one.png";
import business2 from "../../../../images/web1/two.png";
import business3 from "../../../../images/web1/three.png";
import business4 from "../../../../images/web1/four.png";

import restaurant1 from "../../../../images/web1/five.png";

const PROJECTS = [
  {
    id: 1,
    title: "Business Website",
    tag: "React Website",
    text: "Modern responsive business website with premium UI.",
    link: "#",
    images: [
      business1,
      business2,
      business3,
      business4,
    ],
  },

  {
    id: 2,
    title: "Restaurant Website",
    tag: "Restaurant",
    text: "Beautiful restaurant landing page.",
    link: "#",
    images: [
      restaurant1,
    ],
  },
];

function PortCard({ project, openImage }) {
  return (
    <article className="port__card">

      <div
        className="port__thumb"
        onClick={() => openImage(0)}
      >
        <img
          src={project.images[0]}
          alt={project.title}
        />
      </div>

      <div className="port__body">

        <span className="port__tag">
          {project.tag}
        </span>

        <h3 className="port__title">
          {project.title}
        </h3>

        <p className="port__text">
          {project.text}
        </p>

        <a
          href={project.link}
          className="port__link"
          target="_blank"
          rel="noreferrer"
        >
          View Project →
        </a>

      </div>

    </article>
  );
}             

const Portfolio = () => {

  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const prevProject = () => {
    setCurrent((prev) =>
      prev === 0 ? PROJECTS.length - 1 : prev - 1
    );
    setCurrentImage(0);
  };

  const nextProject = () => {
    setCurrent((prev) =>
      prev === PROJECTS.length - 1 ? 0 : prev + 1
    );
    setCurrentImage(0);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0
        ? PROJECTS[current].images.length - 1
        : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === PROJECTS[current].images.length - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <section
      id="portfolio"
      className="section portfolio"
    >
      <div className="container">

        <header className="sh">
          <p className="sh__pill">
            Our Work
          </p>

          <h2 className="sh__title">
            Websites That <span>Sell</span>
          </h2>

          <p className="sh__sub">
            Hand-crafted demos and live
            projects built for real businesses.
          </p>
        </header>

        <div className="port__slider">

          <button
            className="arrow left"
            onClick={prevProject}
          >
            ❮
          </button>

<div className="port__track">

    {PROJECTS.map((project, index) => (

          <PortCard
              key={project.id}
            project={project}
            openImage={(imageIndex) => {
                setCurrent(index);
                setCurrentImage(imageIndex);
                setShowModal(true);
            }}
          />

      ))}
          </div>
          <button
            className="arrow right"
            onClick={nextProject}
          >
            ❯
          </button>

        </div>

      </div>

      {showModal && (

        <div
          className="portfolio-modal"
          onClick={() => setShowModal(false)}
        >

          <div
            className="portfolio-modal__content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="portfolio-modal__arrow"
              onClick={prevImage}
            >
              ❮
            </button>

            <div className="portfolio-modal__image">

              <img
                src={
                  PROJECTS[current].images[currentImage]
                }
                alt={
                  PROJECTS[current].title
                }
              />

              <p className="portfolio-modal__counter">
                {currentImage + 1} /
                {" "}
                {
                  PROJECTS[current].images.length
                }
              </p>

            </div>

            <button
              className="portfolio-modal__arrow"
              onClick={nextImage}
            >
              ❯
            </button>

            <button
              className="portfolio-modal__close"
              onClick={() =>
                setShowModal(false)
              }
            >
              ✕
            </button>

          </div>

        </div>

      )}

    </section>
  );
};

export default Portfolio;