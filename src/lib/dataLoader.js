// src/lib/dataLoader.js – Server-side data loading utilities
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

function readJSON(filePath) {
  try {
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, 'utf-8');
    if (!raw || raw.trim().length < 2) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function getFileMtime(filePath) {
  try {
    return new Date(fs.statSync(filePath).mtimeMs).toISOString();
  } catch {
    return null;
  }
}

export function getNews() {
  const file = path.join(DATA_DIR, 'news.json');
  const articles = readJSON(file) || [];
  return { articles, lastUpdated: getFileMtime(file) };
}

export function getJobs(category = 'all') {
  const file =
    category === 'all'
      ? path.join(DATA_DIR, 'jobs', 'all.json')
      : path.join(DATA_DIR, 'jobs', `${category}.json`);
  const jobs = readJSON(file) || [];
  return { jobs, lastUpdated: getFileMtime(file) };
}

export function getBlog() {
  const file = path.join(DATA_DIR, 'blog.json');
  const posts = readJSON(file) || [];
  return { posts, lastUpdated: getFileMtime(file) };
}

export function getStats() {
  const { articles } = getNews();
  const { posts } = getBlog();
  const { jobs } = getJobs('all');
  return {
    newsCount: articles.length,
    blogCount: posts.length,
    jobCount: jobs.length,
    categories: 8,
  };
}
