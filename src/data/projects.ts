export interface Contribution {
  title: string
  text: string
}

export interface Project {
  id: string
  number: string
  category: string
  name: string
  url?: string
  /** Button text for `url`. Defaults to "Live Project". */
  linkLabel?: string
  /** e.g. "In progress". */
  period?: string
  /** Technologies shown as chips. */
  stack: string[]
  /** Full description paragraphs. The first one is also used on the card. */
  overview: string[]
  contributions: Contribution[]
  /** Accent hue (0-360) for the generated artwork. */
  hue: number
  /** Optional screenshot: drop `<id>.webp` into src/data/images/ and it is picked up automatically. */
  image?: string
}

export const projects: Project[] = [
  {
    id: 'ai-job-intelligence',
    number: '01',
    category: 'AI Workflows · Job Automation',
    name: 'AI Job Intelligence Platform',
    period: 'In progress',
    stack: ['AI Workflows', 'LLM APIs', 'Automation', 'Data Enrichment', 'Web Application Stack'],
    overview: [
      'An AI-powered job intelligence and application platform that automates job discovery based on my profile, scores how well my resume matches each role, researches companies and their business problems, and drafts personalised recruiter emails for manual review before anything is sent.',
    ],
    contributions: [
      { title: 'Profile-Based Job Discovery', text: 'Automates job discovery from my own profile.' },
      { title: 'Resume-to-Job Match Scores', text: 'Calculates a match score between my resume and each job.' },
      { title: 'Company Research', text: 'Researches companies and the business problems they are working on.' },
      { title: 'Recruiter Emails with Human Review', text: 'Generates personalised recruiter emails that I review manually before sending.' },
      { title: 'Deduplication Filters', text: '24-hour and 7-day deduplication filters keep the same job from appearing twice.' },
      { title: 'Application Tracking', text: 'Tracks applications, responses and progress.' },
    ],
    hue: 265,
  },
  {
    id: 'whatsapp-agent',
    number: '02',
    category: 'Conversational AI · Automation',
    name: 'AI-Powered WhatsApp Agent',
    stack: ['n8n', 'OpenAI API', 'AI Agents', 'Evolution API', 'Webhooks', 'REST APIs', 'Workflow Automation', 'Conversation Memory'],
    overview: [
      'A conversational WhatsApp agent built with n8n workflow automation, an OpenAI chat model and the Evolution API. It processes incoming messages and replies automatically.',
    ],
    contributions: [
      { title: 'Webhook Event Ingestion', text: 'Receives incoming WhatsApp message events through an n8n webhook.' },
      { title: 'Message Filtering', text: 'Handles incoming personal text messages and ignores messages sent by the connected account.' },
      { title: 'First-Contact Welcome', text: 'Detects first-time contacts and sends a welcome message, tracking welcomed contacts in an n8n Data Table.' },
      { title: 'Multilingual AI Replies', text: 'An AI agent connected to an OpenAI chat model writes context-aware replies in the sender’s language.' },
      { title: 'Conversation Memory', text: 'Window-buffer memory keeps up to 10 recent interactions as context.' },
      { title: 'WhatsApp Delivery', text: 'Sends welcome messages and AI replies through the Evolution API.' },
    ],
    hue: 150,
  },
  {
    id: 'interviewforge-ai',
    number: '03',
    category: 'AI · Interview Preparation',
    name: 'InterviewForge AI',
    url: 'https://github.com/vaishudesai29499/InterviewForge-AI',
    linkLabel: 'View on GitHub',
    stack: ['Gemini API', 'React.js', 'Node.js', 'Vite 5', 'TypeScript'],
    overview: [
      'An AI-powered interview preparation web app for practising role-specific interviews and receiving structured feedback.',
    ],
    contributions: [
      { title: 'Resume-to-Job-Description Matching', text: 'Compares a resume against a job description.' },
      { title: 'AI Questions & Evaluations', text: 'Generates interview questions and evaluates the answers.' },
      { title: 'End-to-End Integration', text: 'Connects the frontend, backend and LLM API.' },
      { title: 'Prompt Design & Validation', text: 'Prompts are designed for structured output, and model responses are validated.' },
    ],
    hue: 190,
  },
  {
    id: 'cyberinsurify',
    number: '04',
    category: 'Cyber Insurance · Risk Scoring',
    name: 'CyberInsurify',
    url: 'https://www.cyberinsurifylabs.com/',
    stack: ['React.js', 'Python (Django)', 'PHP', 'REST APIs', 'Scikit-Learn', 'SQL', 'Apache 2', 'HTML5/CSS3', 'JavaScript', 'Linux'],
    overview: [
      'An enterprise cyber underwriting platform that calculates real-time organisational risk scores for ransomware and breach exposure.',
    ],
    contributions: [
      { title: 'ML Risk Scoring', text: 'Integrated machine learning models and risk scoring formulas.' },
      { title: 'Multi-Tenant Architecture', text: 'Architected a multi-tenant subdomain setup with isolated API endpoints.' },
      { title: 'React Migration', text: 'Migrated legacy server-rendered PHP modules to a responsive React.js UI.' },
      { title: 'Hybrid REST APIs', text: 'Built REST APIs that combine Django/Python and PHP.' },
      { title: 'Hosting Cost Reduction', text: 'Cut cloud hosting costs by 15% through container and database query tuning.' },
    ],
    hue: 285,
  },
  {
    id: 'loanshastra',
    number: '05',
    category: 'Fintech · Loan Workflows',
    name: 'Loanshastra',
    stack: ['Python (Flask)', 'JavaScript', 'RESTful APIs', 'SQL', 'HTML5', 'CSS3', 'RBAC'],
    overview: [
      'A fintech platform that automates loan origination, document verification and multi-stakeholder workflows across lending partners and financial consultants.',
    ],
    contributions: [
      { title: 'Full-Stack Features', text: 'Built features in Python (Flask), JavaScript, HTML5 and CSS3.' },
      { title: 'Concurrent Users', text: 'Supports 300+ concurrent institutional users with zero session drop-off.' },
      { title: 'Task Allocation', text: 'Custom task allocation across stakeholders.' },
      { title: 'Role-Based Access Control', text: 'RBAC across 2 enterprise clients and 4 co-partner firms.' },
      { title: 'Secure Financial Data APIs', text: 'APIs built for secure handling of financial data.' },
    ],
    hue: 25,
  },
  {
    id: 'learnqoch',
    number: '06',
    category: 'EdTech · Management Platform',
    name: 'LearnQoch',
    url: 'https://ves.learnqoch.com/',
    stack: ['REST APIs', 'SQL', 'Manual Testing', 'Performance Testing', 'Software Testing', 'Postman API'],
    overview: [
      'An enterprise educational management platform for automated grading, attendance tracking, scheduling and student performance analytics.',
    ],
    contributions: [
      { title: 'API Performance', text: 'Profiled and tuned bottlenecks to cut API response times by 30%.' },
      { title: 'SQL & Schema Optimisation', text: 'Optimised SQL queries and relational schemas for assessment and attendance records.' },
      { title: 'Reporting Modules', text: 'Delivered timetable and student progress reporting modules.' },
    ],
    hue: 210,
  },
]
