import Hero from '../../sections/Hero'
import TrustStats from '../../sections/TrustStats'
import FeaturedServices from '../../sections/FeaturedServices'
import SignatureEvents from '../../sections/SignatureEvents'
import Process from '../../sections/Process'
import VenueShowcase from '../../sections/VenueShowcase'
import Testimonials from '../../sections/Testimonials'
import GalleryPreview from '../../sections/GalleryPreview'
import CTA from '../../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <FeaturedServices />
      <SignatureEvents />
      <Process />
      <VenueShowcase />
      <Testimonials />
      <GalleryPreview />
      <CTA />
    </>
  )
}
