import { motion } from 'framer-motion'
import { Github, Download } from 'lucide-react'
export default function Hero() {
  return (
    <section className="flex min-h-[92vh] items-center pt-24 pb-16" aria-labelledby="hero-h">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 id="hero-h" className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Abhishek Prabha</h1>
          <p className="mt-4 text-xl font-semibold text-accent sm:text-2xl">Software Engineer / Full-Stack Developer</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Computer Science &amp; Engineering student at REVA University. I build full-stack applications with React, Node.js and Python, from REST APIs and authentication to databases and dashboards. Looking for a Software Engineering or Full-Stack Developer internship.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-p" href="#projects">View Projects</a>
            <a className="btn-s" href="https://github.com/abhiprabha03" target="_blank" rel="noreferrer"><Github size={16} aria-hidden /> GitHub</a>
            <a className="btn-s" href="/Abhishek_Prabha_Resume.pdf" download><Download size={16} aria-hidden /> Download Resume</a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Core technologies">
            {['React', 'Node.js', 'Python', 'FastAPI'].map((t) => <li key={t} className="chip text-sm">{t}</li>)}
          </ul>
        </motion.div>
      </div>
    </section>)
}
