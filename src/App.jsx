import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Leadership from './components/Leadership'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'

function Home() {
  const { state } = useLocation()
  useEffect(() => {
    if (state?.scrollTo) setTimeout(() => document.getElementById(state.scrollTo)?.scrollIntoView(), 50)
    else window.scrollTo(0, 0)
  }, [state])
  return (<main><Hero /><About /><Skills /><Projects /><Experience /><Leadership /><Achievements /><Contact /></main>)
}
export default function App() {
  return (<>
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-accent focus:p-2">Skip to content</a>
    <Navbar />
    <div id="main"><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="*" element={<Home />} />
    </Routes></div>
    <Footer />
  </>)
}
