import { NextResponse } from 'next/server';
import { getNews } from '@/lib/dataLoader';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') || '';
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '24');

  const { articles, lastUpdated } = getNews();

  let filtered = articles;
  if (search) {
    const q = search.toLowerCase();
    filtered = articles.filter(
      (a) =>
        a.title?.toLowerCase().includes(q) ||
        a.description?.toLowerCase().includes(q) ||
        a.source?.toLowerCase().includes(q)
    );
  }

  const total = filtered.length;
  const paginated = filtered.slice((page - 1) * limit, page * limit);

  return NextResponse.json({ articles: paginated, total, page, limit, lastUpdated });
}
