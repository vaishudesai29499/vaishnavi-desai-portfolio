import { profile } from '../../data/profile'
import { profilePhoto } from '../../data/photo'

/** Circular profile photo for phones. The lanyard badge is hidden below md. */
export default function MobileAvatar() {
  return (
    <div className="flex justify-center md:hidden">
      <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-ice shadow-[0_10px_30px_rgba(0,0,0,.5)]">
        {profilePhoto ? (
          <img
            src={profilePhoto}
            alt={`${profile.name}, ${profile.role}`}
            width={112}
            height={112}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center text-3xl font-black text-white"
            style={{ background: 'linear-gradient(135deg,#18011F,#7621B0 60%,#BE4C00)' }}
          >
            VD
          </div>
        )}
      </div>
    </div>
  )
}