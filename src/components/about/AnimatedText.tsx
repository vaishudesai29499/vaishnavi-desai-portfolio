import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion'

interface CharProps {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return <motion.span style={{ opacity }}>{char}</motion.span>
}

interface Props {
  text: string
  className?: string
}

/** Each character fades from 20% to 100% opacity as the paragraph scrolls through the viewport. */
export default function AnimatedText({ text, className }: Props) {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })

  if (reduce) return <p className={className}>{text}</p>

  const words = text.split(' ')
  const total = text.length
  let index = 0

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, w) => {
        const chars = word.split('').map((char) => {
          const start = index / total
          const end = (index + 1) / total
          index += 1
          return <Char key={index} char={char} progress={scrollYProgress} range={[start, end]} />
        })
        index += 1 // the space after the word
        return (
          <span key={w} aria-hidden="true">
            <span className="inline-block whitespace-nowrap">{chars}</span>
            {w < words.length - 1 ? ' ' : null}
          </span>
        )
      })}
    </p>
  )
}
