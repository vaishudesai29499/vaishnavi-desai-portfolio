import { NextResponse } from 'next/server';
import { getBlog } from '@/lib/dataLoader';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') || '';
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '12');

  const { posts, lastUpdated } = getBlog();

  let filtered = posts;
  if (search) {
    const q = search.toLowerCase();
    filtered = posts.filter(
      (p) =>
        p.title?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.categories?.some((c) => c.toLowerCase().includes(q))
    );
  }

  const total = filtered.length;
  const paginated = filtered.slice((page - 1) * limit, page * limit);

  return NextResponse.json({ posts: paginated, total, page, limit, lastUpdated });
}
