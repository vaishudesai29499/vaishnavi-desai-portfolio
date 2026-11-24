import FadeIn from '../ui/FadeIn'
import Magnet from '../ui/Magnet'
import ContactButton from '../ui/ContactButton'
import Navbar from './Navbar'
import DomainShowcase from './DomainShowcase'
import EngineerBadge from './EngineerBadge'
import { hero } from '../../data/hero'

/**
 * Mobile (< md): a normal stacked column, so nothing can overlap or run off screen.
 * Desktop (md+): layered composition with the wordmark behind the showcase window.
 *
 * Note: never put Tailwind translate classes on a FadeIn element. Framer Motion writes its own
 * inline `transform`, which overrides them. Position with a plain wrapper div instead.
 */
export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-x-clip overflow-y-hidden md:block md:h-screen md:min-h-[760px]"
    >
      <Navbar />

      {/* Wordmark sits behind the showcase window on desktop */}
      <FadeIn y={40} delay={0.15} className="relative z-[1] pt-24 md:absolute md:inset-x-0 md:top-[11vh] md:pt-0">
        <h1 className="hero-heading whitespace-nowrap pb-[0.06em] text-center text-[16vw] md:pr-[16vw] md:text-[11.5vw]" aria-label={hero.srTitle}>
          {hero.firstName}
        </h1>
      </FadeIn>

      <FadeIn
        delay={0.5}
        className="relative z-[6] -mt-[3vw] pl-[6vw] md:absolute md:left-[6vw] md:top-[27vh] md:mt-0 md:pl-0"
      >
        <p className="-rotate-[6deg] font-script text-[clamp(30px,9vw,80px)] leading-none text-white [text-shadow:0_2px_14px_rgba(0,0,0,.4)] md:-rotate-[8deg] md:text-[clamp(30px,5.4vw,80px)]">
          {hero.script}
        </p>
      </FadeIn>

      {/* Positioning wrapper (plain div) keeps the window centred without any transform conflict */}
      <div className="relative z-[4] mt-5 flex justify-center px-4 md:absolute md:inset-x-0 md:bottom-[104px] md:mt-0 md:px-0">
        <FadeIn delay={0.6} y={30} className="w-full max-w-[620px] md:w-[min(620px,88vw)]">
          <Magnet>
            <DomainShowcase />
          </Magnet>
        </FadeIn>
      </div>

      <EngineerBadge />

      <div className="relative z-[9] mt-8 flex flex-col items-start gap-5 px-5 pb-10 md:absolute md:inset-x-10 md:bottom-10 md:mt-0 md:flex-row md:items-end md:justify-between md:gap-4 md:px-0 md:pb-0">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[320px] text-sm font-light uppercase leading-snug tracking-wide md:max-w-[300px] md:text-[clamp(0.9rem,1.4vw,1.5rem)]">
            {hero.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}