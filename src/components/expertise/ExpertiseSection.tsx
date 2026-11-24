import FadeIn from '../ui/FadeIn'
import { expertise } from '../../data/expertise'

/** White rounded panel with skills grouped by area. */
export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="relative z-[2] rounded-t-[40px] bg-white px-5 py-20 text-ink sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Skills
        </h2>
      </FadeIn>

      <ol className="mx-auto max-w-5xl">
        {expertise.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.08}>
            <li className="flex items-start gap-4 border-t border-ink/15 py-8 last:border-b sm:gap-8 sm:py-10 md:gap-14 md:py-12">
              <span className="text-[clamp(3rem,10vw,140px)] font-black leading-[0.9]">{item.number}</span>
              <div className="min-w-0">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase">{item.title}</h3>
                <p className="mt-3 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                  {item.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.skills.map((s) => (
                    <li key={s} className="rounded-full border border-ink/25 px-3 py-1 font-mono text-xs text-ink/80">{s}</li>
                  ))}
                </ul>
              </div>
            </li>
          </FadeIn>
        ))}
      </ol>
    </section>
  )
}
