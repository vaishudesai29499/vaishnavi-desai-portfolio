'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { SKILL_CATEGORIES } from '@/lib/portfolioData';

const ICONS = {
  React: '⚛️', 'Next.js': '▲', TypeScript: 'TS', JavaScript: 'JS', HTML: '🌐', CSS: '🎨',
  Python: '🐍', Django: '🟢', 'Node.js': '🟩', Express: '🚀',
  PostgreSQL: '🐘', MySQL: '🗄️', MongoDB: '🍃', Redis: '⚡',
  AWS: '☁️', Docker: '🐳', Linux: '🐧',
  OpenAI: '✨', LLM: '🧠', MCP: '🔌', LangChain: '🔗', RAG: '📚', 'Vector DB': '📊',
  'Algo Trading': '📈', 'Market Data': '📉', 'Strategy Development': '🎯', APIs: '🔧',
};

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="py-20 md:py-28 bg-neural-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Skills"
          title="Technology Stack"
          subtitle="A curated toolkit for building modern, intelligent, and scalable applications."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.05 }}
              className={`card border bg-gradient-to-br ${cat.color} p-6`}
            >
              <h3 className="text-white font-display font-semibold text-base mb-4">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)' }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/20 border border-white/10 text-slate-300 text-xs font-medium cursor-default transition-colors"
                  >
                    <span>{ICONS[skill] || '•'}</span>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
