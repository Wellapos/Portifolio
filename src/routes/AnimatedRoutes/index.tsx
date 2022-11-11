import { HomePage } from 'pages/Home'
import { ProjectsPage } from 'pages/Projects'
import {
  Routes as Router,
  Navigate,
  Route,
  useLocation
} from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

export function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Router location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<h1>contact</h1>} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Router>
    </AnimatePresence>
  )
}
