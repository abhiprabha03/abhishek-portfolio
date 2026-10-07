import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
export default function ProjectCard({ p }) {
  return (
    <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }} className="card flex flex-col p-6 hover:border-accent/50">
      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span>{p.year}</span>
        {p.team && <span className="rounded bg-accent/15 px-2 py-0.5 font-semibold text-blue-300">TEAM PROJECT</span>}
      </div>
      <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
      <p className="text-sm text-accent">{p.subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-gray-400">{p.summary}</p>
      <ul className="mt-4 space-y-1.5 text-sm text-gray-300">{p.features.slice(0, 4).map((f) => <li key={f} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{f}</li>)}</ul>
      <ul className="mt-4 flex flex-wrap gap-1.5">{p.tech.slice(0, 8).map((t) => <li key={t} className="chip">{t}</li>)}</ul>
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        <Link to={`/projects/${p.slug}`} className="btn-p">View Details</Link>
        {p.github && <a className="btn-s" href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} on GitHub`}><Github size={16} aria-hidden /> GitHub</a>}
        {p.demo && <a className="btn-s" href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} aria-hidden /> Live Demo</a>}
      </div>
    </motion.article>)
}
