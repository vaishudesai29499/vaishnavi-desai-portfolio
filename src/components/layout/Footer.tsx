import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-ice/10 bg-ink px-5 py-8 text-xs uppercase tracking-[0.18em] text-ice/55 sm:flex-row sm:px-8 md:px-10">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span className="hidden sm:inline">Full Stack Development · AI Engineering · Workflow Automation</span>
      <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-white">
        Back to top <ArrowUp size={14} aria-hidden="true" />
      </a>
    </footer>
  )
}
