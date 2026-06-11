'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '@/lib/portfolioData';
import { useState,useEffect } from 'react';

function ProjectCard({ project, index, onViewDetails }) {

  
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
              Live URL
            </a>
          ) : (
            <Link href={project.demo} className="btn-primary text-xs py-2 px-3">
              Live URL
            </Link>
          )}
          <button
            onClick={onViewDetails}
            className="btn-ghost text-xs py-2 px-3"
          >
            More Details
          </button>

        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection({ limit }) {
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

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
            <ProjectCard key={project.slug} project={project} index={i} onViewDetails={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>
      {selectedProject && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">

    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-cyan-500/20 bg-slate-900 p-8">

      <button
        onClick={() => setSelectedProject(null)}
        className="absolute right-5 top-5 text-slate-400 hover:text-white text-2xl"
      >
        ×
      </button>

      <h2 className="text-3xl font-bold text-white mb-6">
        {selectedProject.title}
      </h2>

      <div className="space-y-6">

        <div>
          <h3 className="text-cyan-400 font-semibold mb-2">
            Overview
          </h3>

          <p className="text-slate-300">
            {selectedProject?.details?.overview}
          </p>
        </div>

        <div>
          <h3 className="text-cyan-400 font-semibold mb-2">
            My Contributions
          </h3>

          <ul className="space-y-2">
            {selectedProject?.details?.contributions?.map((item, i) => (
              <li
                key={i}
                className="text-slate-300 flex gap-2"
              >
                <span className="text-emerald-400">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-cyan-400 font-semibold mb-2">
            Key Features
          </h3>

          <ul className="space-y-2">
            {selectedProject?.details?.features?.map((item, i) => (
              <li
                key={i}
                className="text-slate-300 flex gap-2"
              >
                <span className="text-cyan-400">
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-cyan-400 font-semibold mb-2">
            Technologies
          </h3>

          <div className="flex flex-wrap gap-2">
            {selectedProject?.details?.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-cyan-400 font-semibold mb-2">
            Impact
          </h3>

          <p className="text-slate-300">
            {selectedProject?.details?.impact || "No impact information available"}
          </p>
        </div>

      </div>

    </div>
  </div>
)}
    </AnimatedSection>
  );
}
