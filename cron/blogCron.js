/**
 * blogCron.js – Fetches blog posts from Medium RSS feed
 * Runs every 24 hours via server.js scheduler
 * Can also run standalone: node cron/blogCron.js
 */

const axios = require('axios');
const xml2js = require('xml2js');
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(process.cwd(), 'data', 'blog.json');

// Configure via MEDIUM_USERNAME in .env.local
const getMediumRSS = () => {
  const username = process.env.MEDIUM_USERNAME || 'vaishnavidesai29';
  return `https://medium.com/feed/@${username}`;
};

function extractImage(content) {
  const match = content?.match(/<img[^>]+src="([^"]+)"/);
  return match ? match[1] : null;
}

function extractText(html) {
  return html
    ?.replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 300) || '';
}

function estimateReadTime(text) {
  const words = text?.split(/\s+/).length || 0;
  return Math.max(1, Math.ceil(words / 200));
}

async function fetchAndStoreBlog() {
  const rssUrl = getMediumRSS();
  console.log(`[Blog] Fetching from: ${rssUrl}`);
  try {
    const { data: xml } = await axios.get(rssUrl, {
      headers: {
        'User-Agent': 'AIJobHub/1.0 RSS Reader',
        Accept: 'application/rss+xml, application/xml, text/xml',
      },
      timeout: 15000,
    });

    const parsed = await xml2js.parseStringPromise(xml, { explicitArray: false });
    const channel = parsed?.rss?.channel;
    const rawItems = channel?.item || [];
    const items = Array.isArray(rawItems) ? rawItems : [rawItems];

    const posts = items.map((item) => {
      const content = item['content:encoded'] || item.description || '';
      const categories = item.category
        ? Array.isArray(item.category) ? item.category : [item.category]
        : [];
      return {
        id: item.guid?._ || item.guid || item.link,
        title: item.title,
        url: item.link,
        author: item['dc:creator'] || channel?.title || 'Author',
        publishedAt: item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString(),
        image: extractImage(content),
        description: extractText(content),
        readTime: estimateReadTime(content),
        categories: categories.slice(0, 5),
        source: 'Medium',
      };
    });

    fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2), 'utf-8');
    console.log(`[Blog] ✅ Saved ${posts.length} posts`);
    return posts;
  } catch (err) {
    console.error('[Blog] ❌ Error:', err.message);
    // Save empty fallback
    if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]');
    return [];
  }
}

function loadBlog() {
  try {
    if (!fs.existsSync(DATA_FILE) || fs.statSync(DATA_FILE).size < 3) return { posts: [], lastUpdated: null };
    const posts = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    const lastUpdated = new Date(fs.statSync(DATA_FILE).mtimeMs).toISOString();
    return { posts: Array.isArray(posts) ? posts : [], lastUpdated };
  } catch (e) {
    return { posts: [], lastUpdated: null };
  }
}

module.exports = { fetchAndStoreBlog, loadBlog };

// Standalone run
if (require.main === module) {
  require('dotenv').config({ path: path.join(process.cwd(), '.env.local') });
  fetchAndStoreBlog().then(() => {
    const { posts } = loadBlog();
    console.log(`Loaded ${posts.length} posts`);
    if (posts[0]) console.log('Latest:', posts[0].title);
  });
}
