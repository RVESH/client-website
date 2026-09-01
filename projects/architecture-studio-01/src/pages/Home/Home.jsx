import Hero from '../../sections/Hero/Hero.jsx'
import FeaturedProject from '../../sections/FeaturedProject/FeaturedProject.jsx'
import SelectedWork from '../../sections/Projects/Projects.jsx'
import StudioIntro from '../../sections/StudioIntro/StudioIntro.jsx'
import Stats from '../../sections/Stats/Stats.jsx'
import CTA from '../../sections/CTA/CTA.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <SelectedWork />
      <StudioIntro />
      <Stats />
      <CTA />
    </>
  )
}
