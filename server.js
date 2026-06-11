const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const cron = require('node-cron');
const path = require('path');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOST || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

// Ensure data directories exist
const dataDir = path.join(process.cwd(), 'data');
const jobsDir = path.join(dataDir, 'jobs');
[dataDir, jobsDir].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});
['news.json', 'blog.json'].forEach((file) => {
  const p = path.join(dataDir, file);
  if (!fs.existsSync(p)) fs.writeFileSync(p, '[]');
});

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// Lazy-load cron modules to avoid startup errors
let newsCron, jobsCron, blogCron;
try { newsCron = require('./cron/newsCron'); } catch (e) { console.warn('newsCron load failed:', e.message); }
try { jobsCron = require('./cron/jobsCron'); } catch (e) { console.warn('jobsCron load failed:', e.message); }
try { blogCron = require('./cron/blogCron'); } catch (e) { console.warn('blogCron load failed:', e.message); }

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error handling request:', req.url, err);
      res.statusCode = 500;
      res.end('Internal server error');
    }
  }).listen(port, async (err) => {
    if (err) throw err;

    console.log(`\n🧠 AI Job Hub ready on http://${hostname}:${port}`);
    console.log(`📡 Environment: ${dev ? 'development' : 'production'}\n`);

    // Run initial data fetch (non-blocking)
    console.log('⚡ Starting initial data fetch...');
    const runners = [];
    if (newsCron?.fetchAndStoreNews) runners.push(newsCron.fetchAndStoreNews().catch((e) => console.warn('Initial news fetch:', e.message)));
    if (jobsCron?.fetchAndStoreJobs) runners.push(jobsCron.fetchAndStoreJobs().catch((e) => console.warn('Initial jobs fetch:', e.message)));
    if (blogCron?.fetchAndStoreBlog) runners.push(blogCron.fetchAndStoreBlog().catch((e) => console.warn('Initial blog fetch:', e.message)));
    await Promise.allSettled(runners);
    console.log('✅ Initial data fetch complete\n');

    // ─── Schedule Cron Jobs ─────────────────────────────────────────────────
    // News: every 6 hours
    if (newsCron?.fetchAndStoreNews) {
      cron.schedule('0 */6 * * *', async () => {
        console.log(`[CRON ${new Date().toISOString()}] 📰 Fetching AI news...`);
        await newsCron.fetchAndStoreNews().catch((e) => console.warn('News cron error:', e.message));
      });
      console.log('📰 News cron scheduled: every 6 hours');
    }

    // Jobs: every 12 hours
    if (jobsCron?.fetchAndStoreJobs) {
      cron.schedule('0 */12 * * *', async () => {
        console.log(`[CRON ${new Date().toISOString()}] 💼 Fetching AI jobs...`);
        await jobsCron.fetchAndStoreJobs().catch((e) => console.warn('Jobs cron error:', e.message));
      });
      console.log('💼 Jobs cron scheduled: every 12 hours');
    }

    // Blog: every 24 hours at 8am
    if (blogCron?.fetchAndStoreBlog) {
      cron.schedule('0 8 * * *', async () => {
        console.log(`[CRON ${new Date().toISOString()}] ✍️  Fetching blog posts...`);
        await blogCron.fetchAndStoreBlog().catch((e) => console.warn('Blog cron error:', e.message));
      });
      console.log('✍️  Blog cron scheduled: daily at 8am');
    }

    console.log('\n🚀 All cron jobs scheduled. Server running!\n');
  });
});
