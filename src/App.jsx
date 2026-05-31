import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Features from './components/Features'
import MenuPage from './components/MenuPage'
import Temoignages from './components/Temoignages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BlogPage from './components/BlogPage'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Features/>
      <Temoignages />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Accueil" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/menu" element={<MenuPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
