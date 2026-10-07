import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import { projects } from '../data/projects'
const Sec = ({ title, children }) => (<section className="mt-12"><h2 className="mb-4 text-xl font-bold">{title}</h2>{children}</section>)
const List = ({ items }) => (<ul className="space-y-2 text-gray-400">{items.map((i) => <li key={i} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />{i}</li>)}</ul>)
export default function ProjectDetail() {
  const { slug } = useParams(); const p = projects.find((x) => x.slug === slug)
  useEffect(() => { window.scrollTo(0, 0) }, [slug])
  if (!p) return (<div className="wrap pt-32 pb-24"><p>Project not found.</p><Link to="/" className="text-accent underline">Back home</Link></div>)
  return (
    <article className="wrap max-w-4xl pt-28 pb-20">
      <Link to="/" state={{ scrollTo: 'projects' }} className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white"><ArrowLeft size={16} aria-hidden /> All projects</Link>
      <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-gray-500"><span>{p.year}</span>{p.team && <span className="rounded bg-accent/15 px-2 py-0.5 text-xs font-semibold text-blue-300">TEAM PROJECT</span>}</div>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">{p.title}</h1>
      <p className="mt-2 text-lg text-accent">{p.subtitle}</p>
      <p className="mt-5 max-w-2xl text-gray-400">{p.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {p.github && <a className="btn-s" href={p.github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden /> GitHub</a>}
        {p.demo && <a className="btn-p" href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} aria-hidden /> Live Demo</a>}
      </div>
      <Sec title="Approach"><List items={p.approach} /></Sec>
      <Sec title="Architecture">
        <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
          {p.flow.map((n, i) => (<li key={n} className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <span className="card block px-4 py-3 text-sm">{n}</span>
            {i < p.flow.length - 1 && <span className="px-2 text-gray-600 sm:px-0" aria-hidden><span className="sm:hidden">↓</span><span className="hidden sm:inline">→</span></span>}</li>))}
        </ol>
      </Sec>
      <Sec title="Key features"><List items={p.features} /></Sec>
      <Sec title="Technologies"><ul className="flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="chip text-sm">{t}</li>)}</ul></Sec>
      {p.outcome.length > 0 && <Sec title="Outcome"><List items={p.outcome} /></Sec>}
    </article>)
}
