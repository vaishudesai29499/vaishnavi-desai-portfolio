import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { profilePhoto } from '../../data/photo'


const rows: [string, string][] = [
  ['NAME', 'V. DESAI'],
  ['ROLE', 'FULL STACK · AI'],
  ['FOCUS', 'WEB · LLM · AUTOMATION'],
  ['BASE', profile.location.toUpperCase()],
]

/** Lanyard ID badge that drops in and sways. Hidden on small screens. */
export default function EngineerBadge() {
  return (
    <motion.div
      className="absolute right-[5vw] top-[-30px] z-[8] hidden w-[160px] md:block"
      style={{ transformOrigin: '50% 0', animation: 'sway 3.2s ease-in-out infinite alternate' }}
      initial={{ opacity: 0, y: '-120%', rotate: 8 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay: 0.7, duration: 1.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="mx-auto h-[140px] w-[18px] bg-white" />
      <div className="mx-auto -mt-0.5 h-[18px] w-[26px] rounded-sm bg-[#aab4bd]" />
      <div className="rounded-[10px] bg-white p-3 text-[#141615] shadow-[0_20px_40px_rgba(0,0,0,.5)]">
        <h4 className="text-[22px] font-black leading-[.95]">DEVELOPER <br />PASS</h4>
        {profilePhoto ? (
          <img
            src={profilePhoto}
            alt={`${profile.name}, ${profile.role}`}
            width={136}
            height={150}
            className="my-2.5 h-[150px] w-full rounded-md object-cover object-top"
          />
        ) : (
          <div
            aria-hidden="true"
            className="my-2.5 flex h-[150px] items-center justify-center rounded-md text-5xl font-black text-white"
            style={{ background: 'linear-gradient(135deg,#18011F,#7621B0 60%,#BE4C00)' }}
          >
            VD
          </div>
        )}
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-1.5 border-b-[1.5px] border-dotted border-[#333] pb-0.5 pt-1.5 text-[8.5px] font-bold">
            <span>{k}</span>
            <b className="text-right font-bold">{v}</b>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
