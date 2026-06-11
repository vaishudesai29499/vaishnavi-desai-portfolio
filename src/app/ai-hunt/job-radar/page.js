'use client';
import { useState, useEffect } from 'react';
import JobCard from '@/components/JobCard';
import { JobSkeleton } from '@/components/LoadingSkeleton';

const JOB_PLATFORMS = [
  {
    name: 'Outlier AI', icon: '⚖️', color: 'blue',
    url: 'https://outlier.ai/for-contributors', badge: 'AI Evaluation',
    desc: 'Earn by training AI models. Flexible hours, competitive pay.',
    tags: ['RLHF', 'AI Training', 'Remote', '$15–$50/hr'],
    hot: true,
  },
  {
    name: 'Turing.com', icon: '💻', color: 'cyan',
    url: 'https://www.turing.com/jobs', badge: 'Remote Dev Jobs',
    desc: 'Long-term remote roles with top US companies. Vetted talent network.',
    tags: ['ML Engineer', 'AI Dev', 'US Hours', 'Competitive Pay'],
    hot: true,
  },
  {
    name: 'Crossing Hurdles', icon: '🚀', color: 'purple',
    url: 'https://crossinghurdles.com', badge: 'AI / Data Jobs',
    desc: 'Specialized platform for AI, data annotation and content moderation jobs.',
    tags: ['Data Annotation', 'Content Review', 'Remote'],
    hot: false,
  },
  {
    name: 'Scale AI', icon: '📊', color: 'green',
    url: 'https://scale.com/careers', badge: 'Data & AI',
    desc: 'Powering AI with high-quality training data. Join the labeling network.',
    tags: ['Data Annotation', 'AI Training', 'Freelance'],
    hot: false,
  },
  {
    name: 'DataAnnotation.tech', icon: '📝', color: 'yellow',
    url: 'https://www.dataannotation.tech', badge: 'Annotation',
    desc: 'Flexible annotation projects for coders, writers and researchers.',
    tags: ['Coding Tasks', 'Writing', 'Remote', '$15–$40/hr'],
    hot: true,
  },
  {
    name: 'Remotask', icon: '🌐', color: 'pink',
    url: 'https://www.remotasks.com', badge: 'Micro Tasks',
    desc: 'AI data tasks — image labeling, audio transcription and more.',
    tags: ['Image Labeling', 'Transcription', 'No Experience'],
    hot: false,
  },
  {
    name: 'Labelbox', icon: '🏷️', color: 'indigo',
    url: 'https://labelbox.com/careers', badge: 'Annotation Platform',
    desc: 'Work on AI training data projects for enterprise companies.',
    tags: ['Data Labeling', 'Quality Review', 'Enterprise'],
    hot: false,
  },
  {
    name: 'RemoteOK', icon: '🌍', color: 'orange',
    url: 'https://remoteok.com/remote-ai-jobs', badge: 'Remote AI Jobs',
    desc: 'Largest remote job board. Filter by AI, ML, NLP and more.',
    tags: ['Remote', 'Full-time', 'Freelance', 'AI/ML'],
    hot: false,
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Jobs', icon: '🌐' },
  { id: 'data-annotation', label: 'Data Annotation', icon: '📝' },
  { id: 'prompt-engineering', label: 'Prompt Engineering', icon: '🤖' },
  { id: 'ai-training', label: 'AI Training', icon: '🧠' },
  { id: 'ai-evaluation', label: 'AI Evaluation', icon: '⚖️' },
  { id: 'mlops', label: 'MLOps', icon: '🔧' },
  { id: 'nlp', label: 'NLP / Text AI', icon: '💬' },
  { id: 'computer-vision', label: 'Computer Vision', icon: '👁️' },
  { id: 'ai-research', label: 'AI Research', icon: '🔬' },
];

const COLOR_MAP = {
  blue:   'border-blue-500/40 bg-blue-500/5 text-blue-400',
  cyan:   'border-cyan-500/40 bg-cyan-500/5 text-cyan-400',
  purple: 'border-purple-500/40 bg-purple-500/5 text-purple-400',
  green:  'border-green-500/40 bg-green-500/5 text-green-400',
  yellow: 'border-yellow-500/40 bg-yellow-500/5 text-yellow-400',
  pink:   'border-pink-500/40 bg-pink-500/5 text-pink-400',
  indigo: 'border-indigo-500/40 bg-indigo-500/5 text-indigo-400',
  orange: 'border-orange-500/40 bg-orange-500/5 text-orange-400',
};

export default function JobRadarPage() {
  const [jobs, setJobs]         = useState([]);
  const [total, setTotal]       = useState(0);
  const [loading, setLoading]   = useState(true);
  const [category, setCategory] = useState('all');
  const [search, setSearch]     = useState('');
  const [source, setSource]     = useState('all');
  const [page, setPage]         = useState(1);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchJobs = async (cat, q, src, pg) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ category: cat, search: q, page: pg, limit: 15 });
      const res  = await fetch(`/api/jobs?${params}`);
      const data = await res.json();
      let filtered = data.jobs || [];
      if (src !== 'all') filtered = filtered.filter(j => j.source?.toLowerCase().includes(src.toLowerCase()));
      setJobs(filtered);
      setTotal(data.total || 0);
      setLastUpdated(data.lastUpdated);
    } catch { setJobs([]); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchJobs(category, search, source, page); }, [category, source, page]);

  const handleSearch = e => { e.preventDefault(); setPage(1); fetchJobs(category, search, source, 1); };

  const sources = ['all', 'RemoteOK', 'Remotive', 'Arbeitnow', 'Outlier AI', 'Turing.com', 'Crossing Hurdles'];

  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <div className="border-b border-cyan-500/10 bg-neural-800/30 py-10 px-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span className="text-red-400 text-xs font-mono uppercase tracking-widest">Live Radar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
            🎯 AI Job <span className="text-gradient">Radar</span>
          </h1>
          <p className="text-slate-400 text-sm">
            All AI job platforms in one place — Outlier, Turing, Crossing Hurdles, RemoteOK & more
            {lastUpdated && <span className="ml-2 text-slate-600">· Refreshed {new Date(lastUpdated).toLocaleTimeString()}</span>}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Platform Cards */}
        <div className="mb-10">
          <h2 className="text-white font-display font-bold text-lg mb-4 flex items-center gap-2">
            🔗 Quick Apply Platforms
            <span className="text-xs text-slate-500 font-normal font-mono">click to apply directly</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {JOB_PLATFORMS.map(p => {
              const cls = COLOR_MAP[p.color] || COLOR_MAP.cyan;
              return (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                  className={`card border ${cls} p-4 hover:scale-[1.03] transition-all group relative`}
                >
                  {p.hot && (
                    <span className="absolute top-2 right-2 text-[10px] px-1.5 py-0.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 font-mono">🔥 HOT</span>
                  )}
                  <div className="text-xl mb-1.5">{p.icon}</div>
                  <div className="text-white font-semibold text-xs mb-0.5">{p.name}</div>
                  <div className={`text-[10px] font-mono mb-2`}>{p.badge}</div>
                  <p className="text-slate-500 text-[10px] leading-relaxed mb-2">{p.desc}</p>
                  <div className="flex flex-wrap gap-0.5">
                    {p.tags.slice(0,2).map(t => (
                      <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-slate-500">{t}</span>
                    ))}
                  </div>
                  <div className="mt-2 text-[10px] text-cyan-400 group-hover:translate-x-1 transition-transform">Apply Now →</div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Search + Filters */}
        <div className="card p-5 mb-6 border-cyan-500/10">
          <h2 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
            🔍 Search Aggregated Jobs
            <span className="text-xs text-slate-600">({total} jobs fetched from all sources)</span>
          </h2>
          <form onSubmit={handleSearch} className="flex gap-2 mb-4">
            <input
              type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search by title, company, skill..."
              className="flex-1 bg-neural-700 border border-cyan-500/20 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50"
            />
            <button type="submit" className="btn-primary px-5 py-2.5 text-sm">Search</button>
          </form>

          {/* Category filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-3">
            {CATEGORIES.map(c => (
              <button key={c.id} onClick={() => { setCategory(c.id); setPage(1); }}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  category === c.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-neural-700/50 text-slate-400 border border-transparent hover:border-cyan-500/20'
                }`}
              >
                <span>{c.icon}</span>{c.label}
              </button>
            ))}
          </div>

          {/* Source filter */}
          <div className="flex gap-2 overflow-x-auto">
            {sources.map(s => (
              <button key={s} onClick={() => { setSource(s); setPage(1); }}
                className={`flex-shrink-0 px-3 py-1 rounded-lg text-[11px] font-mono transition-all ${
                  source === s
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    : 'bg-neural-700/50 text-slate-500 border border-transparent hover:text-slate-300'
                }`}
              >
                {s === 'all' ? '🌐 All Sources' : s}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => <JobSkeleton key={i} />)}
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📡</div>
            <h3 className="text-white font-semibold mb-2">No jobs found for this filter</h3>
            <p className="text-slate-500 text-sm">Try a different category or source filter.</p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {JOB_PLATFORMS.filter(p => p.hot).map(p => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                  className="btn-primary text-xs px-4 py-2">
                  Apply at {p.name} →
                </a>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-slate-500 text-sm">{jobs.length} jobs shown</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {jobs.map((job, i) => (
                <div key={job.id || i} className="animate-fade-in" style={{ animationDelay: `${(i % 6) * 0.05}s`, opacity: 0 }}>
                  <JobCard job={job} />
                </div>
              ))}
            </div>
            {total > 15 && (
              <div className="flex items-center justify-center gap-3 mt-8">
                <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page===1} className="btn-secondary px-4 py-2 text-sm disabled:opacity-40">← Prev</button>
                <span className="text-slate-400 text-sm font-mono">{page} / {Math.ceil(total/15)}</span>
                <button onClick={() => setPage(p => p+1)} disabled={page>=Math.ceil(total/15)} className="btn-secondary px-4 py-2 text-sm disabled:opacity-40">Next →</button>
              </div>
            )}
          </>
        )}

        {/* Tips */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { icon: '⚡', title: 'Pro Tip: Outlier AI', desc: 'Great for beginners. Sign up at outlier.ai/for-contributors. No experience needed for some tasks.' },
            { icon: '💼', title: 'Pro Tip: Turing.com', desc: 'Best for experienced devs. Requires a technical test but pays USD rates for remote work.' },
            { icon: '📝', title: 'Pro Tip: DataAnnotation', desc: 'Easiest entry. Apply at dataannotation.tech for coding or writing tasks. Pays weekly via PayPal.' },
          ].map(t => (
            <div key={t.title} className="card p-4 border-yellow-500/10 bg-yellow-500/5">
              <div className="text-xl mb-1">{t.icon}</div>
              <p className="text-yellow-300 text-xs font-semibold mb-1">{t.title}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
