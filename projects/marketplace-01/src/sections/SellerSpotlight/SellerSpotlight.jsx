import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import SellerCard from '../../components/SellerCard/SellerCard.jsx'
import Button from '../../components/Button/Button.jsx'
import { sellers } from '../../data/sellers.js'
import './SellerSpotlight.scss'

export default function SellerSpotlight() {
  const shown = sellers.slice(0, 4)

  return (
    <section className="section section--alt seller-spotlight">
      <div className="container">
        <SectionHeading
          kicker="Maker spotlight"
          title="The studios behind the objects"
          desc="Every listing on INDEX ships directly from the maker — no warehouses in between."
          between
        >
          <Button to="/categories" variant="secondary" size="md" icon="ArrowRight" className="seller-spotlight__cta">
            Meet more sellers
          </Button>
        </SectionHeading>

        <div className="seller-spotlight__grid">
          {shown.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>
      </div>
    </section>
  )
}
