import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AI Hunt — Your Gateway to AI Careers',
  description:
    'Discover AI jobs from Outlier, Turing, Crossing Hurdles & more. Stay ahead with AI news, blogs, and interactive quizzes.',
  openGraph: {
    title: 'AI Hunt — AI Job Hub',
    description: 'Your hub for AI careers, news, and learning',
    type: 'website',
  },
};

export default function AiHuntLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
