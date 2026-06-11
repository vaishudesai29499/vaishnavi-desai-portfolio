'use client';

export default function BlogCard({ post }) {
  const fmtDate = (d) => {
    if (!d) return '';
    return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card flex flex-col overflow-hidden group h-full"
    >
      {/* Image */}
      <div className="relative h-48 bg-neural-700 overflow-hidden flex-shrink-0">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.style.display='none'; }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/40 to-blue-900/20 text-5xl">
            ✍️
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neural-900/70 to-transparent" />
        {post.readTime && (
          <span className="absolute bottom-2 right-3 text-[10px] font-mono text-purple-300 bg-neural-900/80 px-2 py-0.5 rounded">
            {post.readTime} min read
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {post.categories.slice(0, 3).map((c) => (
              <span key={c} className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
                {c}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-white text-sm font-semibold leading-snug line-clamp-3 group-hover:text-purple-300 transition-colors">
          {post.title}
        </h3>

        {post.description && (
          <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{post.description}</p>
        )}

        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-[10px] text-white font-bold">
              {post.author?.charAt(0) || 'A'}
            </div>
            <span className="text-slate-500 text-[11px] truncate max-w-[100px]">{post.author || 'Author'}</span>
          </div>
          <span className="text-slate-600 text-[11px]">{fmtDate(post.publishedAt)}</span>
        </div>
      </div>
    </a>
  );
}
