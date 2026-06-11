import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import TimelineSection from '@/components/portfolio/TimelineSection';
import AvailabilitySection from '@/components/portfolio/AvailabilitySection';

export const metadata = {
  title: 'About — Vaishnavi Desai',
  description: 'Learn about Vaishnavi Desai — Full Stack Developer, AI Engineer, and technology enthusiast.',
};

export default function AboutPage() {
  return (
    <>

      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <AvailabilitySection />
    </>
  );
}
