import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Home from '../pages/Home/Home.jsx'
import Projects from '../pages/Projects/Projects.jsx'
import Studio from '../pages/Studio/Studio.jsx'
import Services from '../pages/Services/Services.jsx'
import Contact from '../pages/Contact/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}