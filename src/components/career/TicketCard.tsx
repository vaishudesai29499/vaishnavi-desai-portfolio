import { motion, useReducedMotion } from 'framer-motion'
import type { Role } from '../../data/experience'

const HOLES = ['left-3 top-3', 'right-3 top-3', 'bottom-3 left-3', 'bottom-3 right-3']

/** Punched paper ticket for one role. */
export default function TicketCard({ role }: { role: Role }) {
  const reduce = useReducedMotion()
  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -8, rotate: -1.2 }}
      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative h-full rounded bg-white py-7 pl-11 pr-8 text-[#0d0f0e] shadow-[0_18px_40px_rgba(0,0,0,.5)]"
    >
      {HOLES.map((pos) => (
        <i key={pos} aria-hidden="true" className={`absolute h-[21px] w-[21px] rounded-full bg-ink shadow-[inset_0_2px_3px_rgba(0,0,0,.5)] ${pos}`} />
      ))}
      <h3 className="font-display text-[clamp(30px,3.4vw,46px)] uppercase leading-none">{role.company}</h3>
      <dl className="mt-3 text-right text-[13px] font-bold tracking-wide">
        {[role.title.toUpperCase(), role.period, role.location.toUpperCase()].map((row) => (
          <dd key={row} className="border-b-[1.5px] border-dotted border-[#2a2a2a] pb-[3px] pt-1">{row}</dd>
        ))}
      </dl>
      <p className="mt-4 text-sm leading-relaxed text-[#333]">{role.summary}</p>
    </motion.article>
  )
}
