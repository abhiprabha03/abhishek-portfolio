import Reveal from './Reveal'
import { Link } from 'react-router-dom'
export default function Experience() {
  return (
    <section id="experience" className="sect border-t border-line" aria-labelledby="exp-h"><div className="wrap"><Reveal>
      <h2 id="exp-h" className="h2">Experience</h2>
      <div className="relative border-l border-line pl-6 sm:pl-8">
        <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="text-lg font-bold">Full Stack Developer Intern</h3><p className="text-sm text-gray-500">Nov 2024 – Present</p></div>
        <p className="text-accent">REVA NEST, Pre-Incubation Program (University Incubator)</p>
        <ul className="mt-4 max-w-3xl space-y-3 text-gray-400">
          <li>Developed the QR Code SaaS platform end to end with React, Express.js and MongoDB, from data model and authentication to API design and deployment. <Link to="/projects/qr-platform" className="text-accent underline underline-offset-2">See the project</Link>.</li>
          <li>Built a scan analytics pipeline and React dashboard tracking per-device and geolocation data, used by 50+ beta users.</li>
          <li>Reduced perceived load time by ~30% by optimizing the Canvas rendering pipeline and applying lazy loading and code splitting in React.</li>
        </ul>
      </div></Reveal></div></section>)
}
