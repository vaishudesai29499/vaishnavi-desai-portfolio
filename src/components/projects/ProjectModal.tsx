import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import LiveProjectButton from '../ui/LiveProjectButton'
import ScreenshotFrame from './ScreenshotFrame'
import type { Project } from '../../data/projects'

interface Props {
  project: Project | null
  onClose: () => void
}

const Chip = ({ children }: { children: string }) => (
  <li className="rounded-full border border-ice/25 px-3 py-1 text-xs font-light text-ice/90 sm:text-sm">{children}</li>
)

/** Full case-study sheet: bottom sheet on phones, centered dialog on larger screens. */
export default function ProjectModal({ project, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab' || !panelRef.current) return
      const items = panelRef.current.querySelectorAll<HTMLElement>('a[href], button')
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 backdrop-blur-sm md:items-center md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[32px] border border-ice/20 bg-[#101114] p-5 pb-10 sm:p-8 md:max-h-[88vh] md:rounded-[40px] md:p-10"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="sticky top-0 z-10 ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-ice/30 bg-[#101114] text-ice transition-colors hover:bg-ice/10"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <header className="-mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-ice/60">{project.category}</p>
              <h3 id="project-title" className="mt-2 pr-12 text-[clamp(1.6rem,4vw,2.6rem)] font-semibold uppercase leading-tight">
                {project.name}
              </h3>
              {project.period && (
                <p className="mt-2 font-mono text-xs text-ice/60 sm:text-sm">
                  {project.period}
                </p>
              )}
              {project.url && <div className="mt-5"><LiveProjectButton href={project.url} label={project.linkLabel} /></div>}
            </header>

            {project.image && (
              <ScreenshotFrame src={project.image} alt={`${project.name} landing page`} url={project.url} className="mt-6" />
            )}

            <div className="mt-7 space-y-4 text-sm font-light leading-relaxed text-ice/85 sm:text-base">
              {project.overview.map((p) => <p key={p}>{p}</p>)}
            </div>

            <h4 className="mb-4 mt-9 text-xs uppercase tracking-[0.2em] text-ice/60">What it does</h4>
            <ul className="space-y-4">
              {project.contributions.map((c) => (
                <li key={c.title} className="border-l-2 border-[#BE4C00] pl-4">
                  <p className="font-medium text-white">{c.title}</p>
                  <p className="mt-1 text-sm font-light leading-relaxed text-ice/80 sm:text-base">{c.text}</p>
                </li>
              ))}
            </ul>

            <h4 className="mb-3 mt-9 text-xs uppercase tracking-[0.2em] text-ice/60">Technologies</h4>
            <ul className="flex flex-wrap gap-2">{project.stack.map((s) => <Chip key={s}>{s}</Chip>)}</ul>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
