import Link from 'next/link';
import { aiHuntPath } from '@/lib/routes';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cyan-500/10 bg-neural-800/50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xs font-bold text-white">AI</div>
              <span className="font-display font-bold text-white">AI<span className="text-gradient">Hunt</span></span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">Your hub for AI careers, daily news, learning resources & job automation.</p>
            <Link href="/" className="inline-block mt-3 text-purple-400 hover:text-purple-300 text-xs transition-colors">← Back to Portfolio</Link>
          </div>

          <div>
            <h4 className="text-slate-300 font-semibold text-sm mb-3">Job Categories</h4>
            <ul className="space-y-2">
              {[['data-annotation','📝 Data Annotation'],['prompt-engineering','🤖 Prompt Eng.'],['ai-training','🧠 AI Training'],['ai-evaluation','⚖️ AI Evaluation']].map(([slug,label]) => (
                <li key={slug}><Link href={aiHuntPath(`/jobs/${slug}`)} className="text-slate-500 hover:text-cyan-400 text-xs transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-300 font-semibold text-sm mb-3">More Roles</h4>
            <ul className="space-y-2">
              {[['mlops','🔧 MLOps'],['nlp','💬 NLP / Text AI'],['computer-vision','👁️ Computer Vision'],['ai-research','🔬 AI Research']].map(([slug,label]) => (
                <li key={slug}><Link href={aiHuntPath(`/jobs/${slug}`)} className="text-slate-500 hover:text-cyan-400 text-xs transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-300 font-semibold text-sm mb-3">Job Platforms</h4>
            <ul className="space-y-2">
              {[['https://outlier.ai/for-contributors','⚖️ Outlier AI'],['https://www.turing.com/jobs','💻 Turing.com'],['https://crossinghurdles.com','🚀 Crossing Hurdles'],['https://www.dataannotation.tech','📝 DataAnnotation']].map(([href,label]) => (
                <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 text-xs transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-300 font-semibold text-sm mb-3">Resources</h4>
            <ul className="space-y-2">
              {[
                [aiHuntPath('/job-radar'), '🎯 Job Radar'],
                [aiHuntPath('/news'), '📰 AI News'],
                [aiHuntPath('/quiz'), '🎯 AI Quiz'],
                ['/', '👤 Portfolio'],
              ].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-slate-500 hover:text-cyan-400 text-xs transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-500/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">© {year} AI Hunt. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-600 text-xs">
            <a href="https://medium.com/@vaishnavidesai29" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Medium ✍️</a>
            <span>·</span>
            <p className="flex items-center gap-1">Built with <span className="text-red-400">♥</span> for the AI Community</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
