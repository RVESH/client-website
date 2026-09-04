import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { images } from '../../data/images.js'
import './Collections.scss'

const collections = [
  {
    id: 'quiet-mornings',
    title: 'Quiet Mornings',
    desc: 'Ceramics and textiles for a slower start to the day.',
    image: 'categoryCeramics',
    filter: 'ceramics',
    size: 'large',
  },
  {
    id: 'warm-light',
    title: 'Warm Light',
    desc: 'Lighting pieces built to soften a room, not flood it.',
    image: 'categoryLighting',
    filter: 'lighting',
    size: 'small',
  },
  {
    id: 'the-reading-corner',
    title: 'The Reading Corner',
    desc: 'Furniture and objects for one good chair and a stack of books.',
    image: 'categoryFurniture',
    filter: 'furniture',
    size: 'small',
  },
]

export default function Collections() {
  return (
    <section className="section section--ink collections">
      <div className="container">
        <div className="section-head">
          <span className="section-head__kicker">Curated collections</span>
          <h2 className="collections__title">Editorial picks, not algorithms</h2>
          <p className="section-head__desc collections__desc">
            Small groupings put together by the INDEX team around a mood, a room or a season.
          </p>
        </div>

        <div className="collections__grid">
          {collections.map((c) => (
            <Link
              key={c.id}
              to={`/marketplace?category=${c.filter}`}
              className={`collections__card collections__card--${c.size}`}
            >
              <img src={images[c.image]} alt={c.title} loading="lazy" />
              <div className="collections__overlay">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="collections__link">
                  Shop the edit <ArrowUpRight size={14} strokeWidth={2} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
