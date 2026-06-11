'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import {
  AVAILABILITY,
  RESUME,
  ROLES,
  SITE,
  SKILL_CATEGORIES,
} from '@/lib/portfolioData';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
};

function ResumeSectionTitle({ icon, children }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-sm">
        {icon}
      </span>
      <h3 className="text-white font-display font-bold text-base tracking-tight">{children}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
    </div>
  );
}

function ContactLink({ href, label, value, external }) {
  const display = value.startsWith('http')
    ? value.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
    : value;

  const content = (
    <div className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.03] transition-colors">
      <span className="text-cyan-400/80 text-xs font-mono mt-0.5 shrink-0">{label}</span>
      <span className="text-slate-300 text-xs break-all group-hover:text-cyan-300 transition-colors">
        {display}
      </span>
    </div>
  );

  if (external || href.startsWith('mailto:')) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
        {content}
      </a>
    );
  }
  return <Link href={href}>{content}</Link>;
}

export default function ResumeContent() {
  const handleDownload = () => window.print();

  return (
    <>
      <AnimatedSection className="py-20 md:py-28 print:py-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 print:max-w-none print:px-0">
          <div className="print:hidden">
            <SectionHeader
              badge="Resume"
              title="Professional Profile"
              subtitle="A detailed overview of my experience, skills, and key projects."
            />
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownload}
                className="btn-primary px-8 py-3 inline-flex items-center gap-2"
              >
                <span>⬇</span> Download / Print Resume
              </motion.button>
              <Link href="/contact" className="btn-secondary px-8 py-3">
                Contact Me
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="resume-document overflow-hidden rounded-2xl border border-white/10 bg-neural-800/40 shadow-card print:rounded-none print:border-0 print:shadow-none print:bg-white"
          >
            {/* Header band */}
            <div className="relative px-6 sm:px-10 pt-8 sm:pt-10 pb-6 sm:pb-8 border-b border-white/10 print:border-slate-200 print:pb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-600/5 to-purple-600/10 pointer-events-none print:hidden" />
              <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div>
                  <p className="text-cyan-400/90 text-xs font-mono uppercase tracking-[0.2em] mb-2 print:text-cyan-700">
                    {SITE.title}
                  </p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-3 print:text-slate-900">
                    {SITE.name.split(' ')[0]}{' '}
                    <span className="text-gradient print:text-slate-800">{SITE.name.split(' ').slice(1).join(' ')}</span>
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    {ROLES.map((role) => (
                      <span
                        key={role}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400 text-xs print:bg-slate-100 print:border-slate-200 print:text-slate-600"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 shrink-0">
                  {RESUME.highlights.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center px-3 py-3 rounded-xl bg-black/20 border border-white/5 print:bg-slate-50 print:border-slate-200"
                    >
                      <p className="text-xl sm:text-2xl font-display font-bold text-gradient print:text-cyan-700">
                        {stat.value}
                      </p>
                      <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider mt-0.5 print:text-slate-500">
                        {stat.unit}
                      </p>
                      <p className="text-[10px] text-slate-600 mt-0.5 print:text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Two-column body */}
            <div className="grid lg:grid-cols-[280px_1fr] print:grid-cols-[220px_1fr]">
              {/* Sidebar */}
              <aside className="p-6 sm:p-8 lg:border-r border-white/10 bg-neural-900/30 print:bg-slate-50 print:border-slate-200 space-y-8">
                <motion.section {...fadeUp}>
                  <ResumeSectionTitle icon="📬">Contact</ResumeSectionTitle>
                  <div className="space-y-1">
                    <ContactLink href={`mailto:${SITE.email}`} label="Email" value={SITE.email} />
                    <ContactLink href={SITE.linkedin} label="LinkedIn" value={SITE.linkedin} external />
                    <ContactLink href={SITE.github} label="GitHub" value={SITE.github} external />
                    <ContactLink href={SITE.portfolio} label="Web" value={SITE.portfolio} external />
                    <div className="flex items-start gap-3 p-2.5">
                      <span className="text-cyan-400/80 text-xs font-mono mt-0.5">Location</span>
                      <span className="text-slate-300 text-xs print:text-slate-600">{SITE.location}</span>
                    </div>
                  </div>
                </motion.section>

                <motion.section {...fadeUp} transition={{ delay: 0.05 }}>
                  <ResumeSectionTitle icon="⚡">Core Skills</ResumeSectionTitle>
                  <div className="space-y-4">
                    {SKILL_CATEGORIES.map((cat) => (
                      <div key={cat.name}>
                        <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-mono print:text-slate-500">
                          {cat.name}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/8 text-slate-400 print:bg-white print:border-slate-200 print:text-slate-600"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>

                <motion.section {...fadeUp} transition={{ delay: 0.1 }}>
                  <ResumeSectionTitle icon="🎯">Expertise</ResumeSectionTitle>
                  <ul className="space-y-2">
                    {RESUME.coreCompetencies.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs text-slate-400 print:text-slate-600"
                      >
                        <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.section>

                <motion.section {...fadeUp} transition={{ delay: 0.15 }} className="print:hidden">
                  <ResumeSectionTitle icon="✅">Availability</ResumeSectionTitle>
                  <div className="flex flex-wrap gap-1.5">
                    {AVAILABILITY.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 rounded-md text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.section>
                <motion.section {...fadeUp} transition={{ delay: 0.15 }}>
                  <ResumeSectionTitle icon="🏆">Achievements</ResumeSectionTitle>

                  <div className="space-y-3">
                    {RESUME.achievements.map((item) => (
                      <div
                        key={item.title}
                        className="p-4 rounded-lg border border-amber-600/15 bg-amber-800/5"
                      >
                        <h4 className="text-white text-sm font-semibold mb-2">
                          {item.title}
                        </h4>

                        <ul className="list-disc list-inside">
                          <li className="text-slate-400 text-sm">
                            {item.desc}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.section>
              </aside>

              {/* Main content */}
              <main className="p-6 sm:p-8 space-y-10">
                <motion.section {...fadeUp}>
                  <ResumeSectionTitle icon="👤">Professional Summary</ResumeSectionTitle>
                  <p className="text-slate-400 text-sm leading-relaxed print:text-slate-700">
                    {RESUME.summary}
                  </p>
                </motion.section>

                <motion.section {...fadeUp} transition={{ delay: 0.05 }}>
                  <ResumeSectionTitle icon="💼">Work Experience</ResumeSectionTitle>
                  <div className="space-y-8">
                    {RESUME.experience.map((job, i) => (
                      <motion.div
                        key={`${job.title}-${job.period}`}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="relative pl-5 border-l-2 border-cyan-500/20 print:border-slate-300"
                      >
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 print:bg-cyan-600" />
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <div>
                            <h4 className="text-white font-semibold text-sm sm:text-base print:text-slate-900">
                              {job.title}
                            </h4>
                            <p className="text-cyan-400/80 text-xs font-medium mt-0.5 print:text-cyan-700">
                              {job.org}
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-cyan-400/90 text-xs font-mono block print:text-slate-600">
                              {job.period}
                            </span>
                            <span className="text-slate-600 text-[10px] print:text-slate-500">{job.location}</span>
                          </div>
                        </div>
                        <ul className="mt-3 space-y-2">
                          {job.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="text-slate-400 text-xs sm:text-sm leading-relaxed flex gap-2 print:text-slate-700"
                            >
                              <span className="text-cyan-500/60 shrink-0 mt-1">▸</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {job.tags.map((tag) => (
                            <span key={tag} className="tag-chip text-[10px] print:border-slate-300 print:text-slate-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                <motion.section {...fadeUp} transition={{ delay: 0.1 }} className="print:break-before-page">
                  <ResumeSectionTitle icon="🚀">Key Projects</ResumeSectionTitle>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {RESUME.keyProjects.map((project) => (
                      <div
                        key={project.title}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/8 hover:border-cyan-500/20 transition-colors print:bg-slate-50 print:border-slate-200"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="text-white font-semibold text-sm print:text-slate-900">{project.title}</h4>
                          <span className="text-[10px] font-mono text-slate-600 shrink-0">{project.period}</span>
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed mb-2 print:text-slate-600">{project.desc}</p>
                        <p className="text-emerald-400/90 text-[10px] font-medium mb-2 print:text-emerald-700">
                          {project.impact}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-slate-500 print:bg-white print:text-slate-500"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>


              </main>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
}
