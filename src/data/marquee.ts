/**
 * Core skills shown in the marquee: four rows, short names only.
 * Edit the strings below: no component changes needed.
 */
export interface SkillGroup {
  label: string
  /** Base hue (0-360) for the tile colours in this row. */
  hue: number
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend & UI',
    hue: 160,
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    label: 'Backend & databases',
    hue: 30,
    items: ['Python', 'FastAPI', 'Django', 'Flask', 'Node.js', 'REST APIs', 'PostgreSQL', 'MySQL', 'SQL'],
  },
  {
    label: 'AI & automation',
    hue: 200,
    items: ['OpenAI API', 'Gemini API', 'AI Agents', 'n8n', 'Prompt Engineering', 'LLM Evaluation', 'RLHF', 'DATA Annotation'],
  },
  {
    label: 'Cloud & QA',
    hue: 280,
    items: ['AWS EC2', 'AWS S3', 'Docker', 'Nginx', 'Apache 2', 'Linux', 'Git/GitHub', 'Postman', 'Performance Testing'],
  },
]
