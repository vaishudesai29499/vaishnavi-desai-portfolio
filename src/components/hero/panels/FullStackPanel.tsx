import { ArrowRight } from 'lucide-react'

const LAYERS = [
  { name: 'Frontend', tech: 'React · Next.js · TypeScript' },
  { name: 'API', tech: 'FastAPI · Django · Flask · Node' },
  { name: 'Data', tech: 'PostgreSQL · MySQL' },
  { name: 'Cloud', tech: 'AWS EC2 · S3 · Nginx' },
]
const EXTRAS = ['RESTful APIs', 'Webhooks', 'RBAC', 'JWT / OAuth']

/** Illustrative full-stack layers. */
export default function FullStackPanel() {
  return (
    <div className="flex min-h-[220px] flex-col gap-4 p-4 sm:min-h-[270px] sm:p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-1">
        {LAYERS.map((l, i) => (
          <div key={l.name} className="flex flex-1 items-center gap-1">
            <div className={`flex-1 rounded-xl border px-3 py-2 ${i === 1 ? 'border-[#BE4C00]/70 bg-[#BE4C00]/10' : 'border-ice/20 bg-white/[0.03]'}`}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ice/55">{l.name}</p>
              <p className="mt-0.5 text-[12px] leading-snug text-ice">{l.tech}</p>
            </div>
            {i < LAYERS.length - 1 && <ArrowRight size={14} aria-hidden="true" className="hidden flex-none text-ice/40 sm:block" />}
          </div>
        ))}
      </div>
      <ul className="flex flex-wrap gap-2">
        {EXTRAS.map((e) => (
          <li key={e} className="rounded-full border border-ice/20 px-2.5 py-0.5 font-mono text-[11px] text-ice/80">{e}</li>
        ))}
      </ul>
      <p className="mt-auto text-[12px] font-light leading-relaxed text-ice/65">
        Web apps built end to end: responsive frontends, backend APIs and relational databases.
      </p>
    </div>
  )
}
