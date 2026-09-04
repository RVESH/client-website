import { PackageSearch } from 'lucide-react'
import ProductCard from '../ProductCard/ProductCard.jsx'
import './ProductGrid.scss'

export default function ProductGrid({ products, emptyMessage = 'No products match your filters yet.' }) {
  if (!products || products.length === 0) {
    return (
      <div className="product-grid__empty">
        <PackageSearch size={32} strokeWidth={1.5} />
        <p>{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}
