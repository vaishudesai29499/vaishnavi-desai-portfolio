'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { ABOUT_CARDS } from '@/lib/portfolioData';

export default function AboutSection({ compact = false }) {
  const cards = compact ? ABOUT_CARDS.slice(0, 4) : ABOUT_CARDS;

  return (
    <AnimatedSection id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About"
          title={compact ? 'What I Do' : 'About Me'}
          subtitle="Passionate about building scalable products that combine elegant engineering with intelligent automation."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card p-6 group"
            >
              <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {card.icon}
              </div>
              <h3 className="text-white font-display font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
        {!compact && (
          <p className="mt-10 text-center text-slate-500 text-sm max-w-3xl mx-auto leading-relaxed">
            I thrive at the intersection of software engineering and artificial intelligence — delivering
            products that are performant, maintainable, and ready for real-world scale.
          </p>
        )}
      </div>
    </AnimatedSection>
  );
}
