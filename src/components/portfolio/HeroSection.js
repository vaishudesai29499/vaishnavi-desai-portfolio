'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ROLES, SITE } from '@/lib/portfolioData';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb w-[480px] h-[480px] bg-blue-500/40 -top-32 -left-32 opacity-30" />
        <div className="orb w-[360px] h-[360px] bg-violet-600/40 bottom-0 right-0 opacity-25" />
        <div className="orb w-64 h-64 bg-cyan-500/30 top-1/3 right-1/4 opacity-20" />
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-4 leading-[1.08] tracking-tight">
              {SITE.name.split(' ')[0]}
              <br />
              <span className="text-gradient">{SITE.name.split(' ').slice(1).join(' ')}</span>
            </h1>

            <div className="flex flex-wrap gap-2 mb-5">
              {ROLES.map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm"
                >
                  {role}
                </motion.span>
              ))}
            </div>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              I build scalable full-stack products and production-ready AI systems — from LLM integrations
              and RAG pipelines to algorithmic trading platforms and cloud-native backends.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary px-6 py-3 text-sm sm:text-base">
                Hire Me
              </Link>
              <Link href="/resume" className="btn-secondary px-6 py-3 text-sm sm:text-base">
                Download Resume
              </Link>
              <Link href="/projects" className="btn-ghost px-6 py-3 text-sm sm:text-base">
                View Projects
              </Link>
              <Link href="/contact" className="btn-ghost px-6 py-3 text-sm sm:text-base">
                Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-purple-600/20 blur-2xl" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 glass">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-neural-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-4xl sm:text-5xl font-display font-bold text-white mb-3 shadow-glow-cyan">
                      VD
                    </div>
                    <p className="text-slate-500 text-xs font-mono">Photo placeholder</p>
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 border border-white/10"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-white text-sm font-semibold">3+ Years</p>
                <p className="text-slate-500 text-xs">Experience</p>
              </motion.div>
              <motion.div
                className="absolute -top-3 -right-3 glass rounded-xl px-4 py-3 border border-white/10"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-cyan-400 text-sm font-semibold">AI + Full Stack</p>
                <p className="text-slate-500 text-xs">Specialist</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
