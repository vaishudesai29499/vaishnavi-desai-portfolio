import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import FadeIn from '../ui/FadeIn'

interface Props {
  children: ReactNode
  /** Tailwind positioning + sizing classes. */
  className: string
  fromX: number
  delay: number
}

/** Decorative icon that slides in from the side, then floats gently. */
export default function FloatingIcon({ children, className, fromX, delay }: Props) {
  const reduce = useReducedMotion()
  return (
    <FadeIn x={fromX} y={0} delay={delay} duration={0.9} className={`pointer-events-none absolute ${className}`}>
      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { y: [0, -16, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        {children}
      </motion.div>
    </FadeIn>
  )
}
