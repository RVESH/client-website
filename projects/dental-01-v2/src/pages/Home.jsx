import Hero from '../components/home/Hero.jsx'
import TreatmentHighlights from '../components/home/TreatmentHighlights.jsx'
import TrustStats from '../components/home/TrustStats.jsx'
import DoctorIntro from '../components/home/DoctorIntro.jsx'
import ComfortTech from '../components/home/ComfortTech.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import CTABand from '../components/home/CTABand.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <TreatmentHighlights />
      <DoctorIntro />
      <ComfortTech />
      <Testimonials />
      <CTABand />
    </>
  )
}
