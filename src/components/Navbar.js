'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AI_HUNT_ENTRY, aiHuntPath } from '@/lib/routes';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const active = href => pathname === href || pathname?.startsWith(href + '/');
  const onRadar = pathname === AI_HUNT_ENTRY || pathname === aiHuntPath();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          <Link href={AI_HUNT_ENTRY} className="flex items-center space-x-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-glow-cyan group-hover:shadow-glow-blue transition-all">AI</div>
            <span className={`font-display font-bold text-lg ${onRadar ? 'text-red-400' : 'text-white'}`}>
              AI<span className="text-gradient">Hunt</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
            <Link href={aiHuntPath('/job-radar')} className={`nav-link ${active(aiHuntPath('/job-radar')) ? 'active text-cyan-400' : ''}`}>Job Radar</Link>
            <Link href={aiHuntPath('/news')} className={`nav-link ${active(aiHuntPath('/news')) ? 'active text-cyan-400' : ''}`}>News</Link>
            <Link href={aiHuntPath('/quiz')} className={`nav-link ${active(aiHuntPath('/quiz')) ? 'active text-cyan-400' : ''}`}>Quiz</Link>
            <Link href="/" className="nav-link text-slate-400 hover:text-purple-300">← Portfolio</Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors" aria-label="Toggle menu">
            {mobileOpen
              ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            }
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-cyan-500/10 px-4 py-4 animate-fade-in">
          <div className="flex flex-col gap-1">
            <Link href={AI_HUNT_ENTRY} className="px-3 py-2.5 rounded-lg text-slate-300 hover:text-red-300 hover:bg-red-500/10 text-sm font-medium">🎯 Job Radar</Link>
            <Link href={aiHuntPath('/news')} className="px-3 py-2.5 rounded-lg text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 text-sm font-medium">📰 AI News</Link>
            <Link href={aiHuntPath('/quiz')} className="px-3 py-2.5 rounded-lg text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 text-sm font-medium">🎯 AI Quiz</Link>
            <Link href="/" className="px-3 py-2.5 rounded-lg text-slate-300 hover:text-purple-300 hover:bg-purple-500/10 text-sm font-medium">← Portfolio</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
