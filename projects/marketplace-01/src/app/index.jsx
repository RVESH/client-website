import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'

import Home from '../pages/Home/Home.jsx'
import Marketplace from '../pages/Marketplace/Marketplace.jsx'
import ProductDetail from '../pages/ProductDetail/ProductDetail.jsx'
import Categories from '../pages/Categories/Categories.jsx'
import Contact from '../pages/Contact/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
