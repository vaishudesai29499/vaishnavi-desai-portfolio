/**
 * newsCron.js – AI news + Indian tech news (TOI, ET, NDTV, Hindu, etc.)
 */
const axios = require('axios');
const fs    = require('fs');
const path  = require('path');

const NEWSAPI_KEY = process.env.NEWSAPI_KEY || '19dadafb959c408fae16eee8609fb48f';
const BASE_URL    = 'https://newsapi.org/v2/everything';
const TOP_URL     = 'https://newsapi.org/v2/top-headlines';
const DATA_FILE   = path.join(process.cwd(), 'data', 'news.json');

const AI_QUERIES = [
  'artificial intelligence ChatGPT GPT OpenAI',
  'machine learning deep learning neural network',
  'Anthropic Claude Gemini LLM generative AI',
  'prompt engineering AI automation tools 2024',
];

const INDIA_QUERIES = [
  'India artificial intelligence technology startup',
  'India AI machine learning IT sector tech jobs',
  'India fintech digital economy technology news',
];

const INDIAN_DOMAINS = 'timesofindia.com,economictimes.indiatimes.com,ndtv.com,hindustantimes.com,thehindu.com,livemint.com,businessstandard.com,moneycontrol.com,inc42.com,yourstory.com';

async function newsGet(url, params) {
  try {
    const { data } = await axios.get(url, { params: { ...params, apiKey: NEWSAPI_KEY }, timeout: 12000 });
    return (data.articles || []).filter(a => a.title && a.title !== '[Removed]' && a.url);
  } catch (e) { console.warn('[News] Request failed:', e.message); return []; }
}

const INDIAN_NAMES = ['Times of India','Economic Times','NDTV','Hindustan Times','The Hindu','LiveMint','Business Standard','MoneyControl','Inc42','YourStory'];

function tagArticle(a, isIndia) {
  const src = a.source?.name || 'Unknown';
  return {
    title: a.title, description: a.description || '',
    url: a.url, urlToImage: a.urlToImage || null,
    source: src, publishedAt: a.publishedAt, author: a.author || null,
    isIndia: isIndia || INDIAN_NAMES.some(n => src.includes(n)),
  };
}

async function fetchAndStoreNews() {
  console.log('\n[News] Fetching AI + Indian tech news...');
  const seen = new Set(); const all = [];
  const add = (articles, india = false) => {
    for (const a of articles) { if (!seen.has(a.url)) { seen.add(a.url); all.push(tagArticle(a, india)); } }
  };

  for (const q of AI_QUERIES) {
    add(await newsGet(BASE_URL, { q, sortBy: 'publishedAt', language: 'en', pageSize: 30 }));
    await new Promise(r => setTimeout(r, 400));
  }
  console.log(`[News] Global AI: ${all.length}`);

  add(await newsGet(TOP_URL, { country: 'in', category: 'technology', pageSize: 30 }), true);
  console.log(`[News] +India headlines: ${all.length}`);

  for (const q of INDIA_QUERIES) {
    add(await newsGet(BASE_URL, { q, language: 'en', sortBy: 'publishedAt', domains: INDIAN_DOMAINS, pageSize: 20 }), true);
    await new Promise(r => setTimeout(r, 400));
  }

  add(await newsGet(BASE_URL, { q: 'technology AI India', language: 'en', sortBy: 'publishedAt', domains: 'timesofindia.com,economictimes.indiatimes.com', pageSize: 20 }), true);

  all.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  const final = all.slice(0, 150);
  fs.writeFileSync(DATA_FILE, JSON.stringify(final, null, 2), 'utf-8');
  const india = final.filter(a => a.isIndia).length;
  console.log(`[News] Saved ${final.length} (${final.length - india} global + ${india} Indian)\n`);
  return final;
}

function loadNews() {
  try {
    if (!fs.existsSync(DATA_FILE)) return { articles: [], lastUpdated: null };
    const articles = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    const lastUpdated = new Date(fs.statSync(DATA_FILE).mtimeMs).toISOString();
    return { articles: Array.isArray(articles) ? articles : [], lastUpdated };
  } catch { return { articles: [], lastUpdated: null }; }
}

module.exports = { fetchAndStoreNews, loadNews };
if (require.main === module) {
  require('dotenv').config({ path: path.join(process.cwd(), '.env.local') });
  fetchAndStoreNews().then(() => {
    const { articles } = loadNews();
    const india = articles.filter(a => a.isIndia).length;
    console.log(`Total: ${articles.length} | Indian: ${india} | Global AI: ${articles.length - india}`);
  });
}
