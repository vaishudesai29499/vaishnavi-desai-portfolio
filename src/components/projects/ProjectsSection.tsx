import { useCallback, useState } from 'react'
import FadeIn from '../ui/FadeIn'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects, type Project } from '../../data/projects'
import { withImages } from '../../data/projectImages'

const items = withImages(projects)

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-ink px-4 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn>
        <h2 className="hero-heading mb-12 text-center text-[clamp(3rem,12vw,160px)] sm:mb-16 md:mb-24">Projects</h2>
      </FadeIn>

      {items.map((p, i) => (
        <ProjectCard key={p.id} project={p} index={i} total={items.length} onOpen={setSelected} />
      ))}

      <ProjectModal project={selected} onClose={close} />
    </section>
  )
}
