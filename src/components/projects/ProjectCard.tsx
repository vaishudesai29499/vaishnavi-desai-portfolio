import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Plus } from 'lucide-react'
import LiveProjectButton from '../ui/LiveProjectButton'
import ProjectVisual from './ProjectVisual'
import ScreenshotFrame from './ScreenshotFrame'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import type { Project } from '../../data/projects'

interface Props {
  project: Project
  index: number
  total: number
  onOpen: (project: Project) => void
}

/**
 * Desktop (md+): sticky card that scales down as the next cards stack over it.
 * Mobile: a normal flowing card, so content is never cut off by a pinned layout.
 */
export default function ProjectCard({ project, index, total, onOpen }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const stacking = isDesktop && !reduce

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, stacking ? targetScale : 1])

  return (
    <div ref={ref} className="mx-auto mb-6 max-w-[1180px] md:mb-0 md:min-h-[85vh]">
      <motion.article
        className="rounded-[32px] border-2 border-ice bg-ink p-5 sm:rounded-[44px] sm:p-6 md:sticky md:rounded-[60px] md:p-8"
        style={isDesktop ? { top: 88 + index * 24, scale, transformOrigin: 'top center' } : undefined}
      >
        <header className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-3 md:flex-nowrap">
          <span className="hero-heading text-[clamp(2.5rem,7vw,100px)]">{project.number}</span>
          <div className="min-w-0 flex-1 basis-[60%] md:basis-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-ice/70">{project.category}</p>
            <h3 className="text-[clamp(1.1rem,2.4vw,2.2rem)] font-medium uppercase leading-tight">{project.name}</h3>
            {project.period && <p className="mt-1 font-mono text-xs text-ice/55">{project.period}</p>}
          </div>
          <div className="flex w-full flex-wrap gap-3 md:w-auto">
            <button
              type="button"
              onClick={() => onOpen(project)}
              aria-haspopup="dialog"
              className="inline-flex items-center gap-2 rounded-full bg-ice px-6 py-3 text-xs font-medium uppercase tracking-widest text-ink transition-opacity hover:opacity-85 sm:text-sm"
            >
              <Plus size={16} aria-hidden="true" /> Full details
            </button>
            <LiveProjectButton href={project.url} label={project.linkLabel} />
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-[1.15fr_1fr] md:gap-6">
          <div className="flex flex-col gap-4">
            <p className="line-clamp-5 text-sm font-light leading-relaxed text-ice/85 sm:text-base md:line-clamp-4">{project.overview[0]}</p>
            <ul className="space-y-1.5 text-sm font-light text-ice/80">
              {project.contributions.slice(0, 4).map((c) => (
                <li key={c.title} className="flex gap-2">
                  <span aria-hidden="true" className="text-[#BE4C00]">▸</span>
                  <span>{c.title}</span>
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-2">
              {project.stack.slice(0, 6).map((s) => (
                <li key={s} className="rounded-full border border-ice/30 px-3 py-1 font-mono text-xs text-ice/90">{s}</li>
              ))}
              {project.stack.length > 6 && (
                <li className="px-1 py-1 font-mono text-xs text-ice/60">+{project.stack.length - 6} more</li>
              )}
            </ul>
          </div>
          {project.image ? (
            <ScreenshotFrame
              src={project.image}
              alt={`${project.name} landing page`}
              url={project.url}
              className="order-first self-start md:order-none"
            />
          ) : (
            <ProjectVisual project={project} className="hidden min-h-[240px] md:block" />
          )}
        </div>
      </motion.article>
    </div>
  )
}
