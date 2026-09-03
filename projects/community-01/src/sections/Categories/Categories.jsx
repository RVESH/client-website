import CategoryChip from '../../components/CategoryChip/CategoryChip.jsx'
import { categories } from '../../data/categories.js'
import './Categories.css'

export default function Categories() {
  return (
    <section id="categories" className="section categories">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section-head__eyebrow">Categories</span>

          <h2 className="section-head__title">
            Browse by what you're into
          </h2>

          <p className="section-head__desc">
            Ten interest areas, thousands of communities inside each one.
          </p>
        </div>

        <div className="categories__grid">
          {categories.map((item) => (
            <div className="categories__item" key={item.id}>
              <CategoryChip
                name={item.name}
                icon={item.icon}
                count={item.count}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}