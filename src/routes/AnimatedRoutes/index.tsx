import { ProjectsPage } from 'pages/Projects'
import {
  Routes as Router,
  Navigate,
  Route,
  useLocation
} from 'react-router-dom'

import { HomePage } from 'pages/Home'
import { AboutPage } from 'pages/About'
import { ContactPage } from 'pages/Contact'

import { AnimatePresence } from 'framer-motion'

export function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Router location={location} key={location.pathname}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/projects" index element={<ProjectsPage />} />
        <Route path="/project/:id" index element={<ProjectsPage />} />
        <Route path="/contact" index element={<ContactPage />} />
        <Route path="/about" index element={<AboutPage />} />
        <Route path="*" index element={<Navigate to={'/'} />} />
      </Router>
    </AnimatePresence>
  )
}
