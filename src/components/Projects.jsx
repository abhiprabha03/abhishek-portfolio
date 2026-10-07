import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
export default function Projects() {
  return (
    <section id="projects" className="sect border-t border-line" aria-labelledby="proj-h"><div className="wrap"><Reveal>
      <h2 id="proj-h" className="h2">Featured projects</h2>
      <div className="grid gap-5 lg:grid-cols-3">{projects.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
    </Reveal></div></section>)
}
