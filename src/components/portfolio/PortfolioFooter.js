import Link from 'next/link';
import { FOOTER_LINKS, SITE } from '@/lib/portfolioData';

export default function PortfolioFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-neural-800/40 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-slate-100 to-slate-400 flex items-center justify-center text-[10px] font-bold text-neural-900">
                VD
              </div>
              <span className="font-display font-bold text-white">{SITE.name}</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
              Full Stack Developer & AI Engineer building scalable, intelligent products.
            </p>
          </div>

          <div>
            <h4 className="text-slate-300 font-semibold text-sm mb-3">Navigation</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-white text-xs transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-300 font-semibold text-sm mb-3">Resources</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-white text-xs transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-300 font-semibold text-sm mb-3">Tech Stack</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              React · Next.js · Python · Django · PostgreSQL · AWS · OpenAI · LangChain
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {FOOTER_LINKS.social.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-cyan-400 text-xs transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">© {year} {SITE.name}. All rights reserved.</p>
          <p className="text-slate-600 text-xs">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
