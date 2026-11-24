import { useEffect, useRef, useState, type ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  className?: string
}

/** Moves its child toward the cursor when the cursor is near it. */
export default function Magnet({ children, padding = 150, strength = 3, className }: MagnetProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      const near = Math.abs(dx) < r.width / 2 + padding && Math.abs(dy) < r.height / 2 + padding
      setActive(near)
      setPos(near ? { x: dx / strength, y: dy / strength } : { x: 0, y: 0 })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [padding, strength])

  return (
    <div ref={wrapRef} className={className}>
      <div
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          transition: active ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
