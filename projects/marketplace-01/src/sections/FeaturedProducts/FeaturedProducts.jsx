import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import ProductGrid from '../../components/ProductGrid/ProductGrid.jsx'
import Button from '../../components/Button/Button.jsx'
import { getFeaturedProducts } from '../../data/products.js'
import './FeaturedProducts.scss'

export default function FeaturedProducts() {
  const featured = getFeaturedProducts(6)

  return (
    <section className="section featured-products">
      <div className="container">
        <SectionHeading
          kicker="Featured"
          title="This week's edit"
          desc="A rotating selection pulled from across the catalogue by the INDEX team."
          between
        >
          <Button to="/marketplace" variant="secondary" size="md" icon="ArrowRight" className="featured-products__cta">
            Full marketplace
          </Button>
        </SectionHeading>

        <ProductGrid products={featured} />
      </div>
    </section>
  )
}
