import { useEffect, useState, type KeyboardEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { domains, type DomainId } from '../../data/hero'
import FullStackPanel from './panels/FullStackPanel'
import AiPanel from './panels/AiPanel'
import CloudPanel from './panels/CloudPanel'

const PANELS: Record<DomainId, () => JSX.Element> = {
  fullstack: FullStackPanel,
  ai: AiPanel,
  cloud: CloudPanel,
}
const ROTATE_MS = 5000

/** Tabbed window that cycles through Full-Stack, AI & Agents and Cloud & QA. */
export default function DomainShowcase() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reduce || paused) return
    const id = setInterval(() => setActive((i) => (i + 1) % domains.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [reduce, paused])

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const step = e.key === 'ArrowRight' ? 1 : -1
    const next = (active + step + domains.length) % domains.length
    setActive(next)
    document.getElementById(`hero-tab-${domains[next].id}`)?.focus()
  }

  const domain = domains[active]
  const Panel = PANELS[domain.id]

  return (
    <div
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="overflow-hidden rounded-2xl border border-[#2a323b] bg-[#101418] shadow-[0_40px_90px_rgba(0,0,0,.7),0_0_80px_rgba(118,33,176,.25)]"
    >
      <div role="tablist" aria-label="Areas of expertise" onKeyDown={onKeyDown} className="flex border-b border-[#232a33]">
        {domains.map((d, i) => (
          <button
            key={d.id}
            id={`hero-tab-${d.id}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`hero-panel-${d.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`relative flex-1 px-2 py-3 text-center font-mono text-[11px] uppercase tracking-wider transition-colors sm:text-xs ${
              i === active ? 'text-white' : 'text-[#8d97a3] hover:text-ice'
            }`}
          >
            {d.label}
            {i === active && <motion.span layoutId="hero-tab-underline" className="absolute inset-x-3 bottom-0 h-0.5 bg-[#BE4C00]" />}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`hero-panel-${domain.id}`} aria-labelledby={`hero-tab-${domain.id}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={domain.id}
            initial={{ opacity: 0, y: reduce ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
          >
            <Panel />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between border-t border-[#232a33] px-4 py-2.5 font-mono text-[11px] tracking-wider text-[#9fb0c0]">
        <span>{domain.status}</span>
        <span>ILLUSTRATIVE</span>
      </div>
    </div>
  )
}
