import Reveal from './Reveal'
const stats = [['7.5', 'CGPA'], ['100+', 'LeetCode problems'], ['4+', 'Hackathons'], ['50+', 'Beta users']]
export default function About() {
  return (
    <section id="about" className="sect border-t border-line" aria-labelledby="about-h"><div className="wrap"><Reveal>
      <h2 id="about-h" className="h2">About</h2>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 leading-relaxed text-gray-400">
          <p>I'm a B.Tech Computer Science &amp; Engineering student at REVA University in Bengaluru, specializing in IoT, Cyber Security &amp; Blockchain.</p>
          <p>My focus is full-stack development. I've built REST APIs, JWT authentication and database-backed applications with React, Node.js, Express.js, MongoDB, Flask and FastAPI, and I currently work as a Full Stack Developer Intern at REVA NEST.</p>
          <p>Alongside web development I've worked on a blockchain-based file integrity system, and a scikit-learn text classifier with OCR. I practice data structures and algorithms on LeetCode.</p>
        </div>
        <dl className="grid grid-cols-2 gap-3 self-start">
          {stats.map(([n, l]) => (<div key={l} className="card p-5"><dd className="text-3xl font-bold">{n}</dd><dt className="mt-1 text-sm text-gray-400">{l}</dt></div>))}
        </dl>
      </div></Reveal></div></section>)
}
