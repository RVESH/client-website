import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import CategoryCard from '../../components/CategoryCard/CategoryCard.jsx'
import Button from '../../components/Button/Button.jsx'
import { categories } from '../../data/categories.js'
import './CategoryShowcase.scss'

export default function CategoryShowcase() {
  const shown = categories.slice(0, 4)

  return (
    <section className="section section--alt category-showcase">
      <div className="container">
        <SectionHeading
          kicker="Browse by category"
          title="Find your section of the catalogue"
          between
        >
          <Button to="/categories" variant="secondary" size="md" icon="ArrowRight" className="category-showcase__cta">
            All categories
          </Button>
        </SectionHeading>

        <div className="category-showcase__grid">
          {shown.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
