import { motion } from 'framer-motion'
import { navLinks } from '../../data/profile'

export default function Navbar() {
  return (
    <nav aria-label="Primary" className="absolute inset-x-0 top-5 z-20 flex items-start justify-between px-4 md:px-8">
      {(['left', 'right'] as const).map((side) => (
        <div key={side} className="flex gap-3">
          {navLinks
            .filter((l) => l.side === side)
            .map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                className={`nav-tag ${l.hideOnMobile ? 'hidden sm:flex' : ''}`}
                initial={{ opacity: 0, y: -40, rotate: side === 'left' ? -4 : 4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.12 + i * 0.08, duration: 0.7, ease: [0.3, 1.5, 0.5, 1] }}
              >
                {l.label}
              </motion.a>
            ))}
        </div>
      ))}
    </nav>
  )
}
