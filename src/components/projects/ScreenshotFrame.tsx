interface Props {
  src: string
  alt: string
  /** Shown in the fake address bar (hostname only). */
  url?: string
  className?: string
}

const hostname = (url?: string) => {
  if (!url) return ''
  try { return new URL(url).hostname } catch { return '' }
}

/** Screenshot inside a minimal browser frame. Images are pre-cropped to 1600x833 so nothing is cut off. */
export default function ScreenshotFrame({ src, alt, url, className = '' }: Props) {
  const host = hostname(url)
  return (
    <figure className={`overflow-hidden rounded-2xl border border-ice/20 bg-[#101418] shadow-[0_20px_50px_rgba(0,0,0,.5)] sm:rounded-3xl ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-ice/10 px-3 py-2.5 sm:px-4">
        <i className="h-2 w-2 rounded-full bg-[#3a424d]" />
        <i className="h-2 w-2 rounded-full bg-[#3a424d]" />
        <i className="h-2 w-2 rounded-full bg-[#3a424d]" />
        {host && <span className="ml-3 truncate rounded-full bg-white/5 px-3 py-0.5 font-mono text-[11px] text-ice/60">{host}</span>}
      </div>
      <img
        src={src}
        alt={alt}
        width={1600}
        height={833}
        loading="lazy"
        decoding="async"
        className="aspect-[1600/833] w-full object-cover object-top"
      />
    </figure>
  )
}
