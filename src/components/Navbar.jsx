import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Github } from 'lucide-react'
const links = [['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['experience', 'Experience'], ['contact', 'Contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false), [scrolled, setScrolled] = useState(false), [active, setActive] = useState('')
  const { pathname } = useLocation(), nav = useNavigate()
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    if (pathname !== '/') { setActive(''); return }
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    links.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [pathname])
  const go = (e, id) => {
    setOpen(false)
    if (pathname !== '/') { e.preventDefault(); nav('/', { state: { scrollTo: id } }) }
  }
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? 'border-b border-line bg-ink/90 backdrop-blur' : 'border-b border-transparent'}`}>
      <nav className="wrap flex h-16 items-center justify-between" aria-label="Main">
        <Link to="/" className="text-sm font-extrabold tracking-wide" onClick={() => setOpen(false)}>ABHISHEK PRABHA</Link>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map(([id, label]) => (<li key={id}>
            <a href={`/#${id}`} onClick={(e) => go(e, id)} aria-current={active === id ? 'true' : undefined}
              className={`border-b-2 py-1 text-sm transition-colors ${active === id ? 'border-accent text-white' : 'border-transparent text-gray-400 hover:text-white'}`}>{label}</a></li>))}
        </ul>
        <div className="hidden items-center gap-2 md:flex">
          <a className="btn-s" href="https://github.com/abhiprabha03" target="_blank" rel="noreferrer"><Github size={16} aria-hidden /> GitHub</a>
          <a className="btn-p" href="/Abhishek_Prabha_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
        <button className="p-2 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}</button>
      </nav>
      {open && (<div className="wrap flex flex-col gap-1 pb-5 md:hidden">
        {links.map(([id, label]) => (<a key={id} href={`/#${id}`} onClick={(e) => go(e, id)} className="rounded px-2 py-3 text-gray-300 hover:bg-white/5">{label}</a>))}
        <div className="mt-2 flex gap-2">
          <a className="btn-s" href="https://github.com/abhiprabha03" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn-p" href="/Abhishek_Prabha_Resume.pdf" target="_blank" rel="noreferrer">Resume</a></div>
      </div>)}
    </header>)
}
