'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { TIMELINE } from '@/lib/portfolioData';

const TYPE_STYLES = {
  education: { icon: '🎓', color: 'border-blue-500/50 bg-blue-500/10' },
  experience: { icon: '💼', color: 'border-cyan-500/50 bg-cyan-500/10' },
  project: { icon: '🚀', color: 'border-purple-500/50 bg-purple-500/10' },
  achievement: { icon: '🏆', color: 'border-amber-500/50 bg-amber-500/10' },
};

export default function TimelineSection() {
  return (
    <AnimatedSection id="timeline" className="py-20 md:py-28 bg-neural-800/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Timeline"
          title="Career Journey"
          subtitle="Education, experience, major projects, and key achievements."
        />
        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/60 via-white/10 to-transparent" />
          <div className="space-y-8">
            {TIMELINE.map((item, i) => {
              const style = TYPE_STYLES[item.type] || TYPE_STYLES.experience;
              return (
                <motion.div
                  key={`${item.title}-${i}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="relative"
                >
                  <div className={`absolute -left-8 sm:-left-10 w-6 h-6 rounded-full border-2 ${style.color} flex items-center justify-center text-[10px]`}>
                    {style.icon}
                  </div>
                  <div className="card p-5 sm:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-white font-semibold text-base">{item.title}</h3>
                      <span className="text-cyan-400/90 text-xs font-mono">{item.year}</span>
                    </div>
                    <p className="text-slate-400 text-xs mb-2 uppercase tracking-wider">{item.org}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
