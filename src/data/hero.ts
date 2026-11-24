export type DomainId = 'fullstack' | 'ai' | 'cloud'

export interface Domain {
  id: DomainId
  label: string
  /** Status text shown in the window footer. */
  status: string
}

export const hero = {
  firstName: 'Vaishnavi',
  srTitle: 'Vaishnavi Desai: Full Stack and AI Integration Engineer',
  script: 'full-stack × AI',
  tagline: 'Full-stack engineer building reliable web apps and production-grade AI workflows',
}

export const domains: Domain[] = [
  { id: 'fullstack', label: 'Full-Stack', status: 'REACT ● PYTHON ● REST' },
  { id: 'ai', label: 'AI & Agents', status: 'OPENAI ● N8N ● AGENTS' },
  { id: 'cloud', label: 'Cloud & QA', status: 'AWS EC2 ● DEPLOYED' },
]
