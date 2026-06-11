import TimelineSection from '@/components/portfolio/TimelineSection';

export const metadata = {
  title: 'Experience — Vaishnavi Desai',
  description: 'Work experience and career timeline of Vaishnavi Desai.',
};

export default function ExperiencePage() {
  return (
    <>
      <div className="pt-24 pb-4 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">Work Experience</h1>
        <p className="text-slate-400 text-sm">
          A timeline of professional roles, projects, and achievements.
        </p>
      </div>
      <TimelineSection />
    </>
  );
}
