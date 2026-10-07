import Reveal from './Reveal'
import { skills } from '../data/skills'
export default function Skills() {
  return (
    <section id="skills" className="sect border-t border-line" aria-labelledby="skills-h"><div className="wrap"><Reveal>
      <h2 id="skills-h" className="h2">Skills</h2>
      <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {skills.map((s) => (<div key={s.group} className="grid gap-2 border-t border-line pt-4 sm:grid-cols-[110px_1fr]">
          <h3 className="text-sm font-semibold text-gray-200">{s.group}</h3>
          <ul className="flex flex-wrap gap-1.5">{s.items.map((i) => <li key={i} className="chip text-gray-300">{i}</li>)}</ul>
        </div>))}
      </div></Reveal></div></section>)
}
