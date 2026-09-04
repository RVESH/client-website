import { Search } from 'lucide-react'
import Button from '../../components/Button/Button.jsx'
import { images } from '../../data/images.js'
import { platformStats } from '../../data/site.js'
import './Hero.scss'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            2.4M+ people already here
          </span>

          <h1 className="hero__title">
            Find your people.{' '}
            <span className="hero__title-accent">
              Build your orbit.
            </span>
          </h1>

          <p className="hero__desc">
            Orbit brings together communities built around what you actually
            care about — design, gaming, fitness, music and more. Real
            conversations, real events, real people.
          </p>

          <form
            className="hero__search"
            onSubmit={(event) => event.preventDefault()}
            role="search"
          >
            <Search
              size={18}
              strokeWidth={2}
              className="hero__search-icon"
            />

            <input
              type="text"
              placeholder="Search communities, topics or interests..."
              aria-label="Search communities"
            />

            <Button
              type="submit"
              variant="primary"
              size="sm"
              className="hero__search-btn"
            >
              Search
            </Button>
          </form>

          <div className="hero__actions">
            <Button
              href="#join"
              data-join-orbit
              variant="primary"
              size="lg"
              icon="ArrowRight"
            >
              Join Orbit — it&apos;s free
            </Button>

            <Button
              href="#discover"
              variant="ghost"
              size="lg"
              icon="Users"
              iconPosition="left"
            >
              Browse communities
            </Button>
          </div>
        </div>

        <div className="hero__visual">
          <img
            src={images.heroVisual}
            alt="Illustration of an orbiting network of community members"
            loading="lazy"
          />
        </div>
      </div>

      <div className="container">
        <div className="hero__stats">
          {platformStats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <div className="hero__stat-value">
                {stat.value}
              </div>


              <div className="hero__stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}