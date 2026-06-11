'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { SITE } from '@/lib/portfolioData';


const CONTACT_INFO = [
  { icon: '📧', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: '🔗', label: 'LinkedIn', value: 'vaishnavi-desai', href: SITE.linkedin },
  { icon: '💻', label: 'GitHub', value: 'vaishudesai29499', href: SITE.github },
  { icon: '✍️', label: 'Medium', value: '@vaishnavidesai29', href: SITE.medium },
  { icon: '🌐', label: 'Portfolio', value: 'vaishnavi-desai-portfolio', href: SITE.portfolio },
  { icon: '📍', label: 'Location', value: SITE.location, href: null },
];

export default function ContactSection({ fullPage = false }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSent(true);
      setSubmitting(false);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 800);
  };
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     setSubmitting(true);

//     const response = await fetch('/api/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(form),
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.error);
//     }

//     setSent(true);

//     setForm({
//       name: '',
//       email: '',
//       message: '',
//     });

//     setTimeout(() => setSent(false), 5000);

//   } catch (error) {
//     console.error(error);
//     alert('Failed to send message');
//   } finally {
//     setSubmitting(false);
//   }
// };

  return (
    <AnimatedSection id="contact" className={`py-20 md:py-28 ${fullPage ? '' : 'bg-neural-800/30'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contact"
          title={fullPage ? 'Get In Touch' : 'Start a Conversation'}
          subtitle="Have a project in mind? I'd love to hear about it."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="text-slate-200 text-sm hover:text-cyan-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-200 text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="card p-6 sm:p-8">
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="text-4xl mb-3">✓</div>
                <p className="text-emerald-400 font-semibold">Message sent!</p>
                <p className="text-slate-500 text-sm mt-1">I&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="portfolio-input"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="portfolio-input"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="portfolio-input resize-none"
                />
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: submitting ? 1 : 0.98 }}
                  className="btn-primary w-full py-3.5 relative overflow-hidden"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
