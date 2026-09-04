import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import ProductGrid from '../../components/ProductGrid/ProductGrid.jsx'
import { getNewArrivals } from '../../data/products.js'
import './NewArrivals.scss'

export default function NewArrivals() {
  const arrivals = getNewArrivals(4)

  return (
    <section className="section new-arrivals">
      <div className="container">
        <SectionHeading kicker="Just catalogued" title="New arrivals" desc="Freshly listed pieces, added this month." />
        <ProductGrid products={arrivals} />
      </div>
    </section>
  )
}
