'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '@/lib/portfolioData';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`card overflow-hidden flex flex-col h-full ${project.featured ? 'ring-1 ring-cyan-500/30' : ''}`}
    >
      <div className={`h-40 sm:h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl opacity-80">{project.featured ? '🎯' : '🚀'}</span>
        </div>
        {project.featured && (
          <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-[10px] font-semibold uppercase tracking-wider">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-display font-bold text-lg mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.features.map((f) => (
            <span key={f} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
              {f}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((t) => (
            <span key={t} className="tag-chip text-[10px]">{t}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs py-2 px-3"
            >
              GitHub
            </a>
          )}
          {project.external ? (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-3">
              Live Demo
            </a>
          ) : (
            <Link href={project.demo} className="btn-primary text-xs py-2 px-3">
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection({ limit }) {
  const projects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <AnimatedSection id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Projects"
          title="Selected Work"
          subtitle="Real products solving real problems — from AI platforms to enterprise applications."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
