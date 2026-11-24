import type { Project } from '../../data/projects'

interface Props {
  project: Project
  className?: string
}

/** Screenshot if provided, otherwise generated artwork tinted with the project's hue. */
export default function ProjectVisual({ project, className = '' }: Props) {
  const { hue, image, name, category, number } = project
  return (
    <div
      className={`relative overflow-hidden rounded-[32px] sm:rounded-[44px] md:rounded-[52px] ${className}`}
      style={{ background: `linear-gradient(145deg, hsl(${hue} 60% 10%), hsl(${hue + 40} 70% 24%))` }}
    >
      {image ? (
        <img src={image} alt={`${name} screenshot`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <>
          <svg viewBox="0 0 300 200" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
            <path d="M0 170 C60 130 90 160 140 100 S220 80 300 30" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="2" />
            <path d="M0 190 C80 170 120 120 170 135 S250 70 300 60" fill="none" stroke="rgba(255,255,255,.22)" strokeWidth="2" />
          </svg>
          <span className="absolute left-6 top-4 text-[clamp(3rem,9vw,8rem)] font-black leading-none text-white/10">{number}</span>
          <span className="absolute bottom-5 left-6 text-xs uppercase tracking-[0.2em] text-white/70">{category}</span>
        </>
      )}
    </div>
  )
}
