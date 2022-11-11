import { HomePage } from 'pages/Home'
import { ProjectsPage } from 'pages/Projects'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Router
} from 'react-router-dom'

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<h1>contact</h1>} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Router>
    </BrowserRouter>
  )
}
