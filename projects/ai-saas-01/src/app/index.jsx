import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'

const Home = lazy(() => import('../pages/Home/Home.jsx'))
const Features = lazy(() => import('../pages/Features/Features.jsx'))
const Solutions = lazy(() => import('../pages/Solutions/Solutions.jsx'))
const About = lazy(() => import('../pages/About/About.jsx'))
const Contact = lazy(() => import('../pages/Contact/Contact.jsx'))

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function RouteLoader() {
  return (
    <div
      style={{
        minHeight: '40vh',
        display: 'grid',
        placeItems: 'center',
        padding: '4rem 1rem',
      }}
      aria-live="polite"
      aria-busy="true"
    >
      <span>Loading...</span>
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <main>
        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  )
}