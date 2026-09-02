import Hero from '../../sections/Hero/Hero.jsx'
import ProductPreviewSection from '../../sections/ProductPreview/ProductPreviewSection.jsx'
import Trust from '../../sections/Trust/Trust.jsx'
import { CoreCapabilities, FeatureHighlights } from '../../sections/Features/Features.jsx'
import { UseCases } from '../../sections/Solutions/Solutions.jsx'
import Stats from '../../sections/Stats/Stats.jsx'
import Testimonials from '../../sections/Testimonials/Testimonials.jsx'
import CTA from '../../sections/CTA/CTA.jsx'

export default function Home() {
  return (
    <div className="page">
      <Hero />
      <Trust />
      <ProductPreviewSection />
      <CoreCapabilities />
      <FeatureHighlights />
      <UseCases />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  )
}
