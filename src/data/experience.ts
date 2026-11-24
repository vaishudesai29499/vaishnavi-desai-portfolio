export interface Role {
  company: string
  title: string
  period: string
  location: string
  summary: string
}

export const experience: Role[] = [
  {
    company: 'Freelance',
    title: 'Full Stack & AI Integration Engineer',
    period: 'JAN 2024 — PRESENT',
    location: 'Remote',
    summary:
      'Build AI-powered web applications with Python, REST APIs and React. Integrate LLM APIs to automate workflows, design backends with authentication and role-based access, deploy production applications on AWS, and evaluate LLM responses for accuracy and business relevance.',
  },
  {
    company: 'Earth Solutions',
    title: 'Full-Stack Web Developer',
    period: 'JUN 2021 — OCT 2023',
    location: 'Pune, IN',
    summary:
      'Developed applications with React.js, Flask, Django, Node.js and PHP, supporting 300+ users with optimised backend systems and a responsive UI. Improved performance by 30% through API integration and delivered 20+ production-ready enterprise features.',
  },
  {
    company: 'Earth Solutions',
    title: 'Python Developer Intern',
    period: 'DEC 2020 — JUN 2021',
    location: 'Pune, IN',
    summary:
      'Designed data processing and visualisation solutions with graphs and charts, automated customer service workflows using Python and AWS SES, built responsive UI components and ran functional testing.',
  },
]
