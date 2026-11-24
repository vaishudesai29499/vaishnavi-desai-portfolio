import FadeIn from '../ui/FadeIn'
import TicketCard from './TicketCard'
import { experience } from '../../data/experience'
import { certifications, education } from '../../data/credentials'

export default function CareerSection() {
  return (
    <section id="career" className="mx-auto max-w-[1180px] bg-ink px-5 pb-24 pt-8 sm:px-8 md:px-10">
      <FadeIn>
        <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)]">Career</h2>
      </FadeIn>

      <div className="mt-12 grid gap-7 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {experience.map((role, i) => (
          <FadeIn key={role.title + role.period} delay={i * 0.12} className={i === 2 ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-0.875rem)] lg:col-span-1 lg:w-full' : undefined}>
            <TicketCard role={role} />
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.1} className="mt-16 grid gap-10 border-t border-ice/15 pt-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ice/60">Education</p>
          <ul className="mt-3 space-y-5">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="text-xl font-medium">{e.degree}</p>
                <p className="mt-1 text-sm font-light text-ice/75">{e.school}</p>
                <p className="mt-1 font-mono text-xs text-ice/60">{e.period}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ice/60">Certifications</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {certifications.map((c) => (
              <li key={c} className="rounded-full border border-ice/25 px-4 py-1.5 text-sm font-light">{c}</li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  )
}
