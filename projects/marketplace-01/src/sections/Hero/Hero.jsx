import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import { images } from '../../data/images.js'
import './Hero.scss'

export default function Hero() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSearch(value) {
    const params = value ? `?q=${encodeURIComponent(value)}` : ''
    navigate(`/marketplace${params}`)
  }

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__kicker">Catalogue N°07 — Autumn Selection</span>
          <h1 className="hero__title">
            Objects worth <span className="hero__title-mark">keeping</span>
          </h1>
          <p className="hero__desc">
            INDEX gathers independent makers into one catalogue — ceramics, lighting, textiles and more, each
            piece made by hand in small batches and sold directly by the studio that made it.
          </p>

          <div className="hero__search">
            <SearchBar value={query} onChange={setQuery} onSubmit={handleSearch} placeholder="Search vases, lighting, rugs..." />
          </div>

          <div className="hero__actions">
            <Button to="/marketplace" variant="primary" size="lg" icon="ArrowRight">
              Browse Marketplace
            </Button>
            <Button to="/categories" variant="ghost" size="lg">
              View categories
            </Button>
          </div>
        </div>

        <div className="hero__visual">
          <img src={images.heroVisual} alt="A grid of catalogue tiles representing INDEX's product categories" loading="eager" />
        </div>
      </div>
    </section>
  )
}
