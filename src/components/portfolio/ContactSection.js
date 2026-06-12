'use client';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { SITE } from '@/lib/portfolioData';


const CONTACT_INFO = [
  { icon: '📧', label: 'Gmail', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: '🔗', label: 'LinkedIn', value: SITE.linkedin, href: SITE.linkedin },
  { icon: '💻', label: 'GitHub', value: SITE.github, href: SITE.github },
  { icon: '✍️', label: 'Medium', value: SITE.medium, href: SITE.medium },
  { icon: '🌐', label: 'Portfolio', value: SITE.portfolio, href: SITE.portfolio },
  { icon: '📍', label: 'Location', value: SITE.location, href: null },
];

export default function ContactSection({ fullPage = false }) {


  return (
    <AnimatedSection id="contact" className={`py-20 md:py-28 ${fullPage ? '' : 'bg-neural-800/30'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contact"
          title={fullPage ? 'Get In Touch' : 'Start a Conversation'}
          subtitle="Have a project in mind? I'd love to hear about it."
        />

        <div className="flex justify-center">
          <div className="w-full max-w-2xl space-y-4">
            {CONTACT_INFO.map((item) => (
              <div
  key={item.label}
  className="
    flex items-center
    gap-5
    p-5
    rounded-2xl
    border border-cyan-500/10
    bg-slate-900/40
    backdrop-blur-sm
    hover:border-cyan-400/30
    hover:bg-slate-900/60
    transition-all
    duration-300
  "
>
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
    {item.icon}
  </div>

  <div>
    <p className="text-slate-500 text-sm">
      {item.label}
    </p>

    {item.href ? (
      <a
        href={item.href}
        target={item.href.startsWith('mailto') ? undefined : '_blank'}
        rel="noopener noreferrer"
        className="text-slate-200 hover:text-cyan-400 transition-colors"
      >
        {item.value}
      </a>
    ) : (
      <p className="text-slate-200">
        {item.value}
      </p>
    )}
  </div>
</div>
            ))}
          </div>


        </div>
      </div>
    </AnimatedSection>
  );
}
