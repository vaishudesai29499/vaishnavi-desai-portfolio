interface Props {
  href?: string
  label?: string
}

export default function LiveProjectButton({ href, label = 'Live Project' }: Props) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full border-2 border-ice px-8 py-3 text-sm font-medium uppercase tracking-widest text-ice transition-colors hover:bg-ice/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      {label}
    </a>
  )
}
