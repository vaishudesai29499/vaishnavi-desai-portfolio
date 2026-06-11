'use client';
import { useState, useEffect, useCallback } from 'react';
import NewsCard from '@/components/NewsCard';
import { NewsSkeleton } from '@/components/LoadingSkeleton';

export default function NewsPage() {
  const [articles, setArticles]   = useState([]);
  const [total, setTotal]         = useState(0);
  const [loading, setLoading]     = useState(true);
  const [search, setSearch]       = useState('');
  const [filter, setFilter]       = useState('all');   // all | india | global
  const [page, setPage]           = useState(1);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchNews = useCallback(async (q='', pg=1) => {
    setLoading(true);
    try {
      const res  = await fetch(`/api/news?search=${encodeURIComponent(q)}&page=${pg}&limit=100`);
      const data = await res.json();
      setArticles(data.articles || []);
      setTotal(data.total || 0);
      setLastUpdated(data.lastUpdated);
    } catch { setArticles([]); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchNews('', 1); }, []);

  const handleSearch = e => { e.preventDefault(); setPage(1); fetchNews(search, 1); };

  const fmtTime = iso => iso ? new Date(iso).toLocaleString('en-IN',{ month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' }) : '';

  // Client-side filter by India/Global
  const filtered = articles.filter(a => {
    if (filter === 'india')  return a.isIndia;
    if (filter === 'global') return !a.isIndia;
    return true;
  });

  const perPage  = 24;
  const paginated = filtered.slice((page-1)*perPage, page*perPage);
  const totalPages = Math.ceil(filtered.length / perPage);
  const indiaCount  = articles.filter(a => a.isIndia).length;
  const globalCount = articles.length - indiaCount;

  return (
    <div className="pt-20 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Live Feed</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">AI <span className="text-gradient">News</span></h1>
        <p className="text-slate-400 text-sm">
          {articles.length} articles — {globalCount} global AI + {indiaCount} Indian tech
          {lastUpdated && <span className="ml-2 text-slate-600">· {fmtTime(lastUpdated)}</span>}
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <form onSubmit={handleSearch} className="flex gap-2 flex-1">
          <input type="text" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search AI news..."
            className="flex-1 bg-neural-700 border border-cyan-500/20 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/60" />
          <button type="submit" className="btn-primary px-5 py-3">🔍</button>
          {search && <button type="button" onClick={()=>{setSearch('');fetchNews('',1);}} className="btn-secondary px-4 py-3 text-sm">✕</button>}
        </form>
        {/* Region filter */}
        <div className="flex gap-2">
          {[['all','🌐 All'],['global','🤖 AI Global'],['india','🇮🇳 India']].map(([v,l]) => (
            <button key={v} onClick={()=>{setFilter(v);setPage(1);}}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${filter===v ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-neural-700/50 text-slate-400 border border-transparent hover:border-cyan-500/20'}`}>{l}</button>
          ))}
        </div>
      </div>

      {/* Source badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['Times of India','Economic Times','NDTV','The Hindu','OpenAI','TechCrunch'].map(src => (
          <button key={src} onClick={()=>{setSearch(src); fetchNews(src,1); setPage(1);}}
            className="text-[10px] px-2.5 py-1 rounded-full bg-neural-700/50 border border-cyan-500/10 text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors font-mono">
            {src}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({length:8}).map((_,i) => <NewsSkeleton key={i} />)}
        </div>
      ) : paginated.length === 0 ? (
        <div className="text-center py-24">
          <div className="text-5xl mb-4">📰</div>
          <h3 className="text-white font-semibold mb-2">No articles found</h3>
          <p className="text-slate-500 text-sm">{search ? 'Try different keywords.' : 'News is fetched every 6 hours. Check back soon!'}</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {paginated.map((article, i) => (
              <div key={article.url||i} className="animate-fade-in" style={{animationDelay:`${(i%8)*0.04}s`,opacity:0}}>
                {article.isIndia && (
                  <div className="text-[10px] font-mono text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-t-xl flex items-center gap-1">
                    🇮🇳 {article.source}
                  </div>
                )}
                <NewsCard article={article} />
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-10">
              <button onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1} className="btn-secondary px-5 py-2 text-sm disabled:opacity-40">← Prev</button>
              <span className="text-slate-400 text-sm font-mono">Page {page} of {totalPages}</span>
              <button onClick={()=>setPage(p=>p+1)} disabled={page>=totalPages} className="btn-secondary px-5 py-2 text-sm disabled:opacity-40">Next →</button>
            </div>
          )}
        </>
      )}

      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        <div className="card p-4 border-blue-500/20 bg-blue-500/5 flex items-start gap-3">
          <span className="text-xl">🤖</span>
          <div>
            <p className="text-blue-300 text-sm font-medium mb-0.5">Global AI News</p>
            <p className="text-slate-500 text-xs">Covers OpenAI, Anthropic, Google DeepMind, Meta AI, Mistral, Hugging Face & more — updated every 6 hours.</p>
          </div>
        </div>
        <div className="card p-4 border-orange-500/20 bg-orange-500/5 flex items-start gap-3">
          <span className="text-xl">🇮🇳</span>
          <div>
            <p className="text-orange-300 text-sm font-medium mb-0.5">Indian Tech News</p>
            <p className="text-slate-500 text-xs">Times of India, Economic Times, NDTV, Hindustan Times, The Hindu, LiveMint, Inc42, YourStory & more.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
