import dynamic from 'next/dynamic';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';

const SkillsSection = dynamic(() => import('@/components/portfolio/SkillsSection'), { loading: () => null });
const ProjectsSection = dynamic(() => import('@/components/portfolio/ProjectsSection'), { loading: () => null });
const BlogSection = dynamic(() => import('@/components/portfolio/BlogSection'), { loading: () => null });
const AvailabilitySection = dynamic(() => import('@/components/portfolio/AvailabilitySection'), { loading: () => null });
const TimelineSection = dynamic(() => import('@/components/portfolio/TimelineSection'), { loading: () => null });
const TestimonialsSection = dynamic(() => import('@/components/portfolio/TestimonialsSection'), { loading: () => null });
const ContactSection = dynamic(() => import('@/components/portfolio/ContactSection'), { loading: () => null });

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection compact />
      <SkillsSection />
      <ProjectsSection limit={3} />
      <BlogSection limit={3} />
      <AvailabilitySection />
      <TimelineSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
