import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'

import Hero from '../sections/Hero/Hero.jsx'
import FeaturedCommunities from '../sections/FeaturedCommunities/FeaturedCommunities.jsx'
import Categories from '../sections/Categories/Categories.jsx'
import MemberActivity from '../sections/MemberActivity/MemberActivity.jsx'
import Discussions from '../sections/Discussions/Discussions.jsx'
import Events from '../sections/Events/Events.jsx'
import Spotlights from '../sections/Spotlights/Spotlights.jsx'
import CTA from '../sections/CTA/CTA.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedCommunities />
        <Categories />
        <MemberActivity />
        <Discussions />
        <Events />
        <Spotlights />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
