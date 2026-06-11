import BlogSection from '@/components/portfolio/BlogSection';

export const metadata = {
  title: 'Blog — Vaishnavi Desai',
  description: 'Medium articles and insights on AI engineering, full-stack development, and automation.',
};

export default function BlogsPage() {
  return (
    <>
    
      <BlogSection limit={12} showViewAll={false} />
    </>
  );
}
