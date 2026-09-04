import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import MobileDrawer from '../components/MobileDrawer'
import Dashboard from '../pages/Dashboard'
import Leads from '../pages/Leads'
import Contacts from '../pages/Contacts'
import Deals from '../pages/Deals'
import Activities from '../pages/Activities'
import styles from './App.module.css'

const PAGE_TITLES = {
  '/': 'Dashboard',
  '/leads': 'Leads',
  '/contacts': 'Contacts',
  '/deals': 'Deals & Pipeline',
  '/activities': 'Activities',
}

function useScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

function Layout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const location = useLocation()
  useScrollToTop()

  const title = PAGE_TITLES[location.pathname] || 'Orbit CRM'

  return (
    <div className={styles.shell}>
      <Sidebar collapsed={collapsed} onToggleCollapse={() => setCollapsed((v) => !v)} />
      <MobileDrawer open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <div
        className={[styles.main, collapsed ? styles.mainCollapsed : ''].join(' ')}
      >
        <Topbar title={title} onOpenMobileNav={() => setMobileNavOpen(true)} />

        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
