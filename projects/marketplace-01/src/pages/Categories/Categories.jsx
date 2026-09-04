import CategoryCard from '../../components/CategoryCard/CategoryCard.jsx'
import CTA from '../../components/CTA/CTA.jsx'
import { categories } from '../../data/categories.js'
import './Categories.scss'

export default function Categories() {
  return (
    <div className="page categories-page">
      <section className="section--tight categories-hero">
        <div className="container categories-hero__inner">
          <span className="section-head__kicker">Categories</span>
          <h1 className="categories-hero__title">Every section of the catalogue</h1>
          <p className="categories-hero__desc">
            {categories.length} categories, each maintained by a small group of studios who specialise in that
            craft. Pick one to jump straight into a filtered view of the marketplace.
          </p>
        </div>
      </section>

      <section className="section categories-grid-section">
        <div className="container">
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        kicker="Can't find a category?"
        title="Tell us what you're hunting for"
        desc="If it's not catalogued yet, our team can often point you to a maker who has it."
        primaryLabel="Contact us"
        primaryTo="/contact"
        secondaryLabel="Browse marketplace"
        secondaryTo="/marketplace"
      />
    </div>
  )
}
