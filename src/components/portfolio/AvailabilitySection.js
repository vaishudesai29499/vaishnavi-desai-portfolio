'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { AVAILABILITY } from '@/lib/portfolioData';

export default function AvailabilitySection() {
  return (
    <AnimatedSection className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 p-8 sm:p-12 text-center glass">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-blue-600/5" />
          <div className="relative">
            <SectionHeader
              badge="Open to Work"
              title="Available For"
              subtitle="Flexible engagement models — remote-friendly and ready to collaborate."
            />
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {AVAILABILITY.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-emerald-500/20 text-slate-200 text-sm font-medium"
                >
                  <span className="text-emerald-400">✓</span>
                  {item}
                </motion.span>
              ))}
            </div>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary px-10 py-3.5 text-base inline-block"
              >
                Let&apos;s Work Together
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
