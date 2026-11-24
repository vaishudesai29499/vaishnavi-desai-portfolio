import MarqueeRow from './MarqueeRow'
import { skillGroups } from '../../data/marquee'

/** Four rows of skills grouped by area, alternating direction. */
export default function MarqueeSection() {
  return (
    <section
      aria-label="Skills and tools"
      className="flex flex-col gap-7 overflow-hidden bg-ink pb-10 pt-24 sm:gap-9 sm:pt-32 md:pt-40"
    >
      {skillGroups.map((group, i) => (
        <MarqueeRow key={group.label} label={group.label} items={group.items} hue={group.hue} reverse={i % 2 === 1} />
      ))}
    </section>
  )
}