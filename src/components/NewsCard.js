'use client';

export default function NewsCard({ article }) {
  const timeAgo = (dateStr) => {
    if (!dateStr) return '';
    const diff = Date.now() - new Date(dateStr).getTime();
    const h = Math.floor(diff / 3600000);
    if (h < 1) return 'Just now';
    if (h < 24) return `${h}h ago`;
    const d = Math.floor(h / 24);
    if (d < 7) return `${d}d ago`;
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card flex flex-col gap-0 overflow-hidden group h-full"
    >
      {/* Image */}
      <div className="relative h-44 bg-neural-700 overflow-hidden flex-shrink-0">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.parentNode.classList.add('img-error'); e.target.style.display='none'; }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-blue-900/40 to-cyan-900/20">
            📰
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neural-900/60 to-transparent" />
        <span className="absolute bottom-2 left-3 text-[10px] font-mono text-cyan-300 bg-neural-900/80 px-2 py-0.5 rounded">
          {article.source}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-white text-sm font-semibold leading-snug line-clamp-3 group-hover:text-cyan-300 transition-colors">
          {article.title}
        </h3>
        {article.description && (
          <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{article.description}</p>
        )}
        <div className="mt-auto pt-2 flex items-center justify-between text-[11px] text-slate-600">
          {article.author && <span className="truncate max-w-[60%]">✍️ {article.author}</span>}
          <span className="ml-auto">{timeAgo(article.publishedAt)}</span>
        </div>
      </div>
    </a>
  );
}
