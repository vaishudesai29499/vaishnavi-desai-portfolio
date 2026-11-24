/** Inline SVG icons for the About section: code, network, cube, chat. */

export const CodeIcon = () => (
  <svg viewBox="0 0 120 120" className="w-full" aria-hidden="true">
    <defs>
      <linearGradient id="ab-g1" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#BE4C00" />
        <stop offset="1" stopColor="#7621B0" />
      </linearGradient>
    </defs>
    <path d="M40 34L16 60L40 86M80 34L104 60L80 86M68 24L52 96" fill="none" stroke="url(#ab-g1)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const NetworkIcon = () => (
  <svg viewBox="0 0 120 120" className="w-full" aria-hidden="true">
    <g stroke="#B600A8" strokeWidth="3" fill="#18011F">
      <path d="M40 34L78 38M36 41L50 79M84 51L63 80" fill="none" />
      <circle cx="30" cy="30" r="12" />
      <circle cx="90" cy="40" r="12" />
      <circle cx="55" cy="90" r="12" />
    </g>
  </svg>
)

export const CubeIcon = () => (
  <svg viewBox="0 0 120 120" className="w-full" aria-hidden="true">
    <path d="M60 14L104 38V82L60 106L16 82V38Z" fill="none" stroke="#7621B0" strokeWidth="4" />
    <path d="M16 38L60 62L104 38M60 62V106" fill="none" stroke="#BE4C00" strokeWidth="4" />
  </svg>
)

export const ChatIcon = () => (
  <svg viewBox="0 0 120 120" className="w-full" aria-hidden="true">
    <path d="M18 24H102V80H58L34 100V80H18Z" fill="none" stroke="#BBCCD7" strokeWidth="5" strokeLinejoin="round" />
    <g fill="#BBCCD7">
      <circle cx="44" cy="52" r="5" />
      <circle cx="60" cy="52" r="5" />
      <circle cx="76" cy="52" r="5" />
    </g>
  </svg>
)
