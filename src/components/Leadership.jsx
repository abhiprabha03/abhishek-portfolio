import Reveal from './Reveal'
export default function Leadership() {
  return (
    <section className="sect border-t border-line" aria-labelledby="lead-h"><div className="wrap"><Reveal>
      <h2 id="lead-h" className="h2">Leadership</h2>
      <div className="card max-w-3xl p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4"><h3 className="font-bold">Tech Coordinator</h3><p className="text-sm text-gray-500">Nov 2023 – Aug 2024</p></div>
        <p className="text-accent">FACE Club, REVA University</p>
        <ul className="mt-3 space-y-2 text-gray-400">
          <li>Managed technical execution for 10+ events (workshops, hackathons, tech talks), including live demos and tooling.</li>
          <li>Mentored 20+ junior members on full-stack fundamentals.</li></ul>
      </div></Reveal></div></section>)
}
