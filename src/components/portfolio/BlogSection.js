'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';

const PLACEHOLDER_POSTS = [
  {
    title: 'Building Production-Ready RAG Pipelines',
    excerpt: 'A practical guide to retrieval augmented generation with vector databases and LangChain.',
    date: '2024-11-15',
    readTime: '8 min read',
    tags: ['AI', 'RAG', 'LangChain'],
    link: 'https://medium.com/@vaishnavidesai29',
  },
  {
    title: 'Full Stack AI Integration Patterns',
    excerpt: 'How to integrate LLMs into existing web applications without compromising performance.',
    date: '2024-09-22',
    readTime: '6 min read',
    tags: ['Full Stack', 'OpenAI'],
    link: 'https://medium.com/@vaishnavidesai29',
  },
  {
    title: 'Automating Job Search with Cron & APIs',
    excerpt: 'Building an AI job aggregation platform with scheduled data fetching and smart filtering.',
    date: '2024-08-10',
    readTime: '10 min read',
    tags: ['Automation', 'Next.js'],
    link: 'https://medium.com/@vaishnavidesai29',
  },
];

function BlogCard({ post, index }) {
  return (
    <motion.a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="card overflow-hidden group block h-full"
    >
      <div className="h-36 bg-gradient-to-br from-purple-500/20 via-blue-600/10 to-cyan-500/10 relative">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute bottom-3 left-4 flex gap-2">
          {post.tags?.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-black/30 border border-white/10 text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
          <span>{post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}</span>
          <span>·</span>
          <span>{post.readTime || '5 min read'}</span>
        </div>
        <h3 className="text-white font-semibold text-base mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-slate-400 text-sm line-clamp-2 mb-3">{post.excerpt || post.description}</p>
        <span className="text-cyan-400 text-xs font-medium group-hover:translate-x-1 inline-block transition-transform">
          Read More →
        </span>
      </div>
    </motion.a>
  );
}

export default function BlogSection({ limit = 3, showViewAll = true }) {
  const [posts, setPosts] = useState(PLACEHOLDER_POSTS);

  useEffect(() => {
    fetch('/api/blog?limit=6')
      .then((r) => r.json())
      .then((data) => {
        if (data.posts?.length) {
          setPosts(
            data.posts.slice(0, limit).map((p) => ({
              title: p.title,
              excerpt: p.description || p.excerpt,
              date: p.pubDate || p.date,
              readTime: p.readTime || '5 min read',
              tags: p.categories || ['AI'],
              link: p.link || p.url,
            }))
          );
        }
      })
      .catch(() => {});
  }, [limit]);

  const displayPosts = posts.slice(0, limit);

  return (
    <AnimatedSection id="blogs" className="py-20 md:py-28 bg-neural-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Blog"
          title="Articles & Insights"
          subtitle="Thoughts on AI engineering, full-stack development, and building scalable products."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayPosts.map((post, i) => (
            <BlogCard key={post.title + i} post={post} index={i} />
          ))}
        </div>
        {showViewAll && (
          <div className="text-center mt-10">
            <Link href="/blogs" className="btn-secondary px-8 py-3">
              View All Articles
            </Link>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
