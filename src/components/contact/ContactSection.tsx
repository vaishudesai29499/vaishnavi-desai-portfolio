import { useState, type ReactNode } from 'react'
import { BookOpen, Check, Copy, Github, Linkedin, Mail } from 'lucide-react'
import FadeIn from '../ui/FadeIn'
import ContactButton from '../ui/ContactButton'
import { profile } from '../../data/profile'

const links: { label: string; href: string; icon: ReactNode }[] = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: <Mail size={16} /> },
  { label: 'LinkedIn', href: profile.linkedin, icon: <Linkedin size={16} /> },
  { label: 'GitHub', href: profile.github, icon: <Github size={16} /> },
  { label: 'Medium', href: profile.medium, icon: <BookOpen size={16} /> },
]

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="bg-ink px-5 pb-24 pt-16 text-center sm:px-8 md:px-10">
      <FadeIn>
        <p className="text-xs uppercase tracking-[0.2em] text-ice/60">Full-stack · AI integration · collaboration</p>
        <h2 className="hero-heading mt-5 text-[clamp(3rem,11vw,150px)]">Let’s talk</h2>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-10 flex flex-col items-center gap-5 sm:mt-14">
        <ContactButton label={profile.email} className="max-w-full break-all" />
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 py-2 text-sm uppercase tracking-widest text-ice/80 transition-colors hover:text-white"
        >
          {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
          <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
        </button>
      </FadeIn>



      <FadeIn delay={0.25}>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {links.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 border-b border-ice/30 py-2 text-sm uppercase tracking-[0.18em] text-ice/85 transition-colors hover:border-ice hover:text-white"
              >
                <span aria-hidden="true">{icon}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  )
}
