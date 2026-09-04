import Hero from '../../sections/Hero/Hero.jsx'
import FeaturedProducts from '../../sections/FeaturedProducts/FeaturedProducts.jsx'
import CategoryShowcase from '../../sections/CategoryShowcase/CategoryShowcase.jsx'
import NewArrivals from '../../sections/NewArrivals/NewArrivals.jsx'
import Collections from '../../sections/Collections/Collections.jsx'
import SellerSpotlight from '../../sections/SellerSpotlight/SellerSpotlight.jsx'
import Benefits from '../../sections/Benefits/Benefits.jsx'
import Testimonials from '../../sections/Testimonials/Testimonials.jsx'
import CTA from '../../components/CTA/CTA.jsx'

export default function Home() {
  return (
    <div className="page">
      <Hero />
      <FeaturedProducts />
      <CategoryShowcase />
      <NewArrivals />
      <Collections />
      <SellerSpotlight />
      <Benefits />
      <Testimonials />
      <CTA />
    </div>
  )
}
