import Reveal from './Reveal'
export default function Achievements() {
  return (
    <section className="sect border-t border-line" aria-labelledby="ach-h"><div className="wrap"><Reveal>
      <h2 id="ach-h" className="h2">Achievements &amp; certifications</h2>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="card p-6"><h3 className="mb-3 font-bold">Achievements</h3><ul className="space-y-2 text-gray-400">
          <li>Solved 100+ DSA problems on LeetCode (arrays, strings, graphs, trees).</li>
          <li>Competed in 4+ college-level hackathons, building and demoing working prototypes within 24–48 hours.</li></ul></div>
        <div className="card p-6"><h3 className="mb-3 font-bold">Certifications</h3><ul className="space-y-2 text-gray-400">
          <li>Fundamentals of Cryptography, Infosys Springboard</li>
          <li>Agile &amp; DevOps Overview, Infosys Springboard</li></ul></div>
      </div></Reveal></div></section>)
}
