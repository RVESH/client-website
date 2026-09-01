import { images } from '../../data/images.js'
import Button from '../../components/Button/Button.jsx'
import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image">
        <img
          src={images.hero.src}
          alt={images.hero.alt}
        />
      </div>

      <div className="container hero__content">
        <p className="eyebrow">Marrow Studio</p>

        <h1 className="hero__title">
          Architecture and interiors
          <br />
          built from the inside out.
        </h1>

        <div className="hero__foot">
          <p className="lede">
            We design houses, hospitality spaces and cultural buildings
            around how they will actually be lived in — not just how
            they photograph on opening day.
          </p>

          <Button to="/projects">
            View the work
          </Button>
        </div>
      </div>
    </section>
  )
}