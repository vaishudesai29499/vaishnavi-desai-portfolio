'use client';

const TYPE_COLORS = {
  Remote: 'text-green-400 bg-green-500/10 border-green-500/30',
  'On-site': 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  Hybrid: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
};

export default function JobCard({ job }) {
  const timeAgo = (dateStr) => {
    if (!dateStr) return 'Recently';
    const diff = Date.now() - new Date(dateStr).getTime();
    const d = Math.floor(diff / 86400000);
    if (d === 0) return 'Today';
    if (d === 1) return '1d ago';
    if (d < 30) return `${d}d ago`;
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const logoLetter = job.company?.charAt(0)?.toUpperCase() || '?';
  const typeClass = TYPE_COLORS[job.type] || TYPE_COLORS.Remote;

  return (
    <div className="card p-5 flex flex-col gap-3 h-full">
      {/* Header */}
      <div className="flex items-start gap-3">
        {job.company_logo ? (
          <img
            src={job.company_logo}
            alt={job.company}
            className="w-10 h-10 rounded-lg object-contain bg-white/5 p-1 flex-shrink-0"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div
          className={`w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0 ${job.company_logo ? 'hidden' : 'flex'}`}
        >
          {logoLetter}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2">{job.title}</h3>
          <p className="text-slate-400 text-xs mt-0.5 truncate">{job.company}</p>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-1.5">
        <span className={`badge border ${typeClass} text-[10px]`}>{job.type || 'Remote'}</span>
        {job.location && job.location !== 'Remote' && (
          <span className="badge bg-slate-700/50 text-slate-400 border border-slate-600/30 text-[10px]">
            📍 {job.location}
          </span>
        )}
        {job.salary && (
          <span className="badge bg-green-500/10 text-green-400 border border-green-500/20 text-[10px]">
            💰 {job.salary}
          </span>
        )}
      </div>

      {/* Description */}
      {job.description && (
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{job.description}</p>
      )}

      {/* Tags */}
      {job.tags && job.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {job.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag-chip">{tag}</span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between pt-2 border-t border-cyan-500/10">
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <span>via {job.source || 'Job Board'}</span>
          <span>·</span>
          <span>{timeAgo(job.postedAt)}</span>
        </div>
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary py-1.5 px-3 text-xs"
        >
          Apply →
        </a>
      </div>
    </div>
  );
}
