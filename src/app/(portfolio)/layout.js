import PortfolioNavbar from '@/components/portfolio/PortfolioNavbar';
import PortfolioFooter from '@/components/portfolio/PortfolioFooter';

export const metadata = {
  title: 'Vaishnavi Desai — Full Stack Developer & AI Engineer',
  description:
    'Portfolio of Vaishnavi Desai — Full Stack Developer, AI Engineer, Python Developer, and Algo Trading Developer. Available for full-time, freelance, and consulting opportunities.',
  keywords:
    'Full Stack Developer, AI Engineer, Python Developer, React, Next.js, LangChain, RAG, Portfolio',
  openGraph: {
    title: 'Vaishnavi Desai — Full Stack Developer & AI Engineer',
    description: 'Building scalable products and production-ready AI systems.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaishnavi Desai — Full Stack Developer & AI Engineer',
    description: 'Building scalable products and production-ready AI systems.',
  },
};

export default function PortfolioLayout({ children }) {
  return (
    <>
      <PortfolioNavbar />
      <main className="flex-1">{children}</main>
      <PortfolioFooter />
    </>
  );
}
