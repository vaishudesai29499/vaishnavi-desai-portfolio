import { motion, useReducedMotion } from 'framer-motion'

interface Props {
  label: string
  items: string[]
  hue: number
  /** Scroll right-to-left (default) or left-to-right. */
  reverse?: boolean
}

/** Roughly how many seconds one skill takes to pass by. Higher = slower. */
const SECONDS_PER_ITEM = 5.5

const EDGE_FADE = 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)'

function Pill({ text, hue, i }: { text: string; hue: number; i: number }) {
  const h = hue + (i % 8) * 14
  return (
    <li
      className="flex-none whitespace-nowrap rounded-2xl border border-white/10 px-4 py-3 text-base font-bold uppercase text-white sm:px-6 sm:py-4 sm:text-xl"
      style={{ background: `linear-gradient(145deg, hsl(${h} 60% 13%), hsl(${h + 40} 70% 22%))` }}
    >
      {text}
    </li>
  )
}

/**
 * Endless marquee: every skill passes through, so none is ever hidden.
 * The list is doubled twice, then the track slides by exactly half its width for a seamless loop.
 * Reduced-motion users get a static wrapped list instead.
 */
export default function MarqueeRow({ label, items, hue, reverse = false }: Props) {
  const reduce = useReducedMotion()
  const heading = (
    <p className="mb-3 px-5 font-mono text-xs uppercase tracking-[0.2em] text-ice/60 sm:px-8">{label}</p>
  )

  if (reduce) {
    return (
      <div>
        {heading}
        <ul className="flex flex-wrap gap-2 px-5 sm:px-8">
          {items.map((s, i) => <Pill key={s} text={s} hue={hue} i={i} />)}
        </ul>
      </div>
    )
  }

  const loop = [...items, ...items, ...items, ...items]
  return (
    <div>
      {heading}
      {/* Screen readers get the list once; the moving copy is decorative. */}
      <ul className="sr-only">{items.map((s) => <li key={s}>{s}</li>)}</ul>
      <div aria-hidden="true" style={{ WebkitMaskImage: EDGE_FADE, maskImage: EDGE_FADE }}>
        <motion.ul
          className="flex w-max gap-3"
          animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
          transition={{ duration: items.length * 2 * SECONDS_PER_ITEM, ease: 'linear', repeat: Infinity }}
          style={{ willChange: 'transform' }}
        >
          {loop.map((s, i) => <Pill key={`${s}-${i}`} text={s} hue={hue} i={i % items.length} />)}
        </motion.ul>
      </div>
    </div>
  )
}
