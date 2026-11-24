export interface ExpertiseItem {
  number: string
  title: string
  description: string
  skills: string[]
}

export const expertise: ExpertiseItem[] = [
  {
    number: '01',
    title: 'Frontend & UI',
    description: 'Responsive, accessible interfaces built component by component.',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Backend & APIs',
    description: 'Secure services and integrations with clear access control.',
    skills: ['Python', 'FastAPI', 'Django', 'Flask', 'Node.js', 'RESTful APIs', 'Webhooks', 'RBAC', 'Authentication (JWT/OAuth)'],
  },
  {
    number: '03',
    title: 'Databases',
    description: 'Relational data models, tuned queries and dependable state handling.',
    skills: ['PostgreSQL', 'MySQL', 'SQL', 'Database Optimization', 'Query Tuning', 'Session & State Management'],
  },
  {
    number: '04',
    title: 'AI, Agents & Automation',
    description: 'LLM features that are validated, evaluated and built to recover from failure.',
    skills: [
      'OpenAI API',
      'Gemini API',
      'Tool-Calling AI Agents',
      'n8n Workflow Automation',
      'Prompt Engineering',
      'Structured JSON Outputs',
      'Conversation Memory',
      'LLM Evaluation',
      'RLHF',
      'Response Validation',
      'Evaluation Rubrics',
      'Data Annotation',
      'Model Benchmarking',
      'Output Guardrails',
      'Error Recovery',
      'Machine Learning (Scikit-Learn)',
    ],
  },
  {
    number: '05',
    title: 'Cloud, DevOps & QA',
    description: 'Deployment on AWS and testing that catches problems before users do.',
    skills: ['AWS (EC2, S3)', 'Docker', 'Nginx', 'Apache 2', 'Linux', 'Git/GitHub', 'Manual Testing', 'Performance Testing', 'Software Testing', 'Postman API'],
  },
]
