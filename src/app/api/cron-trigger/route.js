import { NextResponse } from 'next/server';

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'all';

  try {
    const results = {};

    if (type === 'news' || type === 'all') {
      const { fetchAndStoreNews } = require('../../../../cron/newsCron');
      await fetchAndStoreNews();
      results.news = 'success';
    }

    if (type === 'jobs' || type === 'all') {
      const { fetchAndStoreJobs } = require('../../../../cron/jobsCron');
      await fetchAndStoreJobs();
      results.jobs = 'success';
    }

    if (type === 'blog' || type === 'all') {
      const { fetchAndStoreBlog } = require('../../../../cron/blogCron');
      await fetchAndStoreBlog();
      results.blog = 'success';
    }

    return NextResponse.json({ ok: true, results, timestamp: new Date().toISOString() });
  } catch (err) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
