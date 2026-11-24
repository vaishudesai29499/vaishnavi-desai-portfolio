import HeroSection from './components/hero/HeroSection'
import MarqueeSection from './components/marquee/MarqueeSection'
import AboutSection from './components/about/AboutSection'
import ExpertiseSection from './components/expertise/ExpertiseSection'
import ProjectsSection from './components/projects/ProjectsSection'
import CareerSection from './components/career/CareerSection'
import ContactSection from './components/contact/ContactSection'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <main className="overflow-x-clip bg-ink">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <CareerSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
