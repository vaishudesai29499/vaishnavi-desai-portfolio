const DEPLOY = ['AWS EC2', 'AWS S3', 'Docker', 'Nginx', 'Apache 2', 'Linux']
const QUALITY = ['Manual testing', 'Performance testing', 'Software testing', 'Postman API']

/** Illustrative deployment and QA summary. */
export default function CloudPanel() {
  return (
    <div className="flex min-h-[220px] flex-col gap-4 p-4 sm:min-h-[270px] sm:p-5">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-ice/55">Deploy</p>
        <ul className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {DEPLOY.map((d) => (
            <li key={d} className="rounded-lg border border-ice/20 bg-white/[0.03] px-2 py-1.5 text-center text-[12px] text-ice">{d}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-ice/55">Test</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {QUALITY.map((q) => (
            <li key={q} className="rounded-full border border-[#BE4C00]/60 bg-[#BE4C00]/10 px-2.5 py-0.5 font-mono text-[11px] text-ice/85">{q}</li>
          ))}
        </ul>
      </div>
      <p className="mt-auto text-[12px] font-light leading-relaxed text-ice/65">
        Production deployments on AWS, with API and performance testing before release.
      </p>
    </div>
  )
}
