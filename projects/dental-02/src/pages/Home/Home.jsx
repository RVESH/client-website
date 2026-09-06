import Hero from '../../sections/Hero/Hero.jsx'
import TrustStats from '../../sections/TrustStats/TrustStats.jsx'
import FeaturedTreatments from '../../sections/FeaturedTreatments/FeaturedTreatments.jsx'
import WhyChooseUs from '../../sections/WhyChooseUs/WhyChooseUs.jsx'
import DoctorIntro from '../../sections/DoctorIntro/DoctorIntro.jsx'
import Testimonials from '../../sections/Testimonials/Testimonials.jsx'
import TechnologyComfort from '../../sections/TechnologyComfort/TechnologyComfort.jsx'
import CTA from '../../components/CTA/CTA.jsx'

export default function Home() {
  return (
    <div className="page">
      <Hero />
      <TrustStats />
      <FeaturedTreatments />
      <WhyChooseUs />
      <DoctorIntro />
      <Testimonials />
      <TechnologyComfort />
      <CTA />
    </div>
  )
}
