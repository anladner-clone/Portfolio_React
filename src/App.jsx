import { Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Organisms/Sidebar'
import { Footer } from './components/Organisms/Footer'
import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'
import { Contact } from './pages/Contact'
import { Projects } from './pages/Projects'
import './styles/global.css'


export const App = () => {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}
