import Reveal from './Reveal'
import { Mail, Linkedin, Github } from 'lucide-react'
const items = [
  [Mail, 'Email', 'abhiprabha0829@gmail.com', 'mailto:abhiprabha0829@gmail.com'],
  [Linkedin, 'LinkedIn', 'linkedin.com/in/abhishekprabha', 'https://www.linkedin.com/in/abhishekprabha'],
  [Github, 'GitHub', 'github.com/abhiprabha03', 'https://github.com/abhiprabha03'],
]
export default function Contact() {
  return (
    <section id="contact" className="sect border-t border-line" aria-labelledby="contact-h"><div className="wrap"><Reveal>
      <h2 id="contact-h" className="text-3xl font-extrabold tracking-tight sm:text-5xl">Let's build something useful.</h2>
      <p className="mt-4 max-w-xl text-gray-400">I'm looking for a Software Engineering, SDE or Full-Stack Developer internship. The fastest way to reach me is email.</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-3">
        {items.map(([Icon, label, text, href]) => (<li key={label}>
          <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="card flex h-full flex-col gap-2 p-5 transition-colors hover:border-accent/60">
            <Icon size={20} className="text-accent" aria-hidden /><span className="font-semibold">{label}</span><span className="break-all text-sm text-gray-400">{text}</span></a></li>))}
      </ul></Reveal></div></section>)
}
