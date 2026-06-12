export const SITE = {
  name: 'Vaishnavi Desai',
  title: 'Full Stack Developer & AI Engineer',
  email: 'vaishnavidesai2925@gmail.com',
  location: 'Pune, Maharashtra, India',
  linkedin: 'https://www.linkedin.com/in/vaishnavi-desai-6127a6177',
  github: 'https://github.com/vaishudesai29499',
  medium: 'https://medium.com/@vaishnavidesai29',
  portfolio: 'https://vaishnavi-desai-portfolio.vercel.app/',
  resumeUrl: '/resume',
};

export const ROLES = [
  'Full Stack Developer',
  'AI Engineer',
  'Python Developer',
];

export const AVAILABILITY = [
  'Full-time',
  'Part-time',
  'Freelance',
  'Contract',
  'Remote',
  'Consulting',
];

export const ABOUT_CARDS = [
  {
    icon: '🗓️',
    title: '4+ Years Experience',
    desc: 'Building production-ready web apps and AI integrations for startups and enterprises.',
  },
  {
    icon: '⚡',
    title: 'Technology Expertise',
    desc: 'React, Next.js, Python, Django, FastAPI, PostgreSQL, and modern cloud-native stacks.',
  },
  {
    icon: '🧠',
    title: 'AI Enthusiasm',
    desc: 'LLM integrations, RAG pipelines, and intelligent automation workflows.',
  },
  {
    icon: '🏗️',
    title: 'Backend Architecture',
    desc: 'REST APIs, microservices, data pipelines, and scalable system design.',
  },
  {
    icon: '☁️',
    title: 'Cloud Experience',
    desc: 'AWS deployments, Docker containers, Linux servers.',
  },
];

export const SKILL_CATEGORIES = [
  {
    name: 'Frontend',
    color: 'from-blue-500/20 to-blue-500/5 border-blue-500/25',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'Backend',
    color: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/25',
    skills: ['Python', 'Django', 'Node.js', 'MySQL', 'PostgreSQL'],
  },
  {
    name: 'Cloud',
    color: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/25',
    skills: ['AWS', 'Docker', 'Linux'],
  },
  {
    name: 'AI',
    color: 'from-purple-500/20 to-purple-500/5 border-purple-500/25',
    skills: ['OpenAI', 'LLM', 'MCP', 'LangChain', 'RAG', 'Vector DB'],
  },
];

export const PROJECTS = [
  {
    slug: 'ai-hunt',
    title: 'AI Hunt Platform',
    desc: 'Built a full-stack AI job discovery platform that aggregates job listings, AI news, Medium blogs, and interactive quizzes. Implemented automated cron jobs, API integrations, and responsive dashboards to streamline AI career exploration.',
    features: ['Job Radar', '6 job sources', 'News & blog sync', 'AI Quiz'],
    stack: ['Next.js', 'React', 'Node Cron', 'Tailwind'],
    github: 'https://github.com/vaishudesai29499',
    demo: '/ai-hunt/job-radar',
    external: false,
    featured: true,
    gradient: 'from-cyan-500/30 via-blue-600/20 to-purple-600/20',
    details: {
      overview: "AI Hunt is a full-stack AI career platform that aggregates AI jobs, news, blogs, and quizzes into a single ecosystem.",

      contributions: [
        "Built complete frontend using Next.js and Tailwind CSS",
        "Developed backend APIs for jobs, blogs and news",
        "Implemented automated cron jobs",
        "Created AI Quiz and Job Radar modules",
        "Optimized SEO and responsiveness"
      ],

      features: [
        "AI Job Aggregation",
        "News Feed",
        "Medium Blog Sync",
        "Interactive AI Quiz",
        "Automated Updates"
      ],

      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Cron Jobs"
      ],

      impact:
        "Aggregated AI opportunities from multiple sources and reduced manual job searching."
    }
  },
  {
    slug: 'cyberinsurify',
    title: 'CyberInsurify',
    desc: 'Developed an ML-powered insurance risk assessment platform that analyzes customer profiles and predicts risk scores to support data-driven underwriting decisions.',
    features: ['Risk scoring', 'Attack detection', 'React migration'],
    stack: ['PHP', 'MySQL', 'AWS', 'React.js'],
    github: null,
    demo: 'https://www.cyberinsurifylabs.com/',
    external: true,
    featured: false,
    gradient: 'from-green-500/20 to-emerald-600/10',
    details: {
      overview:
        "CyberInsurify is an ML-powered insurance risk assessment platform that analyzes customer profiles and predicts risk scores to support data-driven underwriting decisions.",

      contributions: [
        "Developed risk scoring workflows using machine learning concepts",
        "Built APIs for customer and policy management",
        "Created dashboards for risk visualization and reporting",
        "Supported cloud deployment and infrastructure integration",
        "Enhanced application performance and scalability"
      ],

      features: [
        "Risk Assessment Engine",
        "Customer Profiling",
        "Insurance Analytics Dashboard",
        "Risk Categorization",
        "Cloud Integration"
      ],

      technologies: [
        "PHP",
        "MySQL",
        "AWS",
        "React.js",
        "REST API"
      ],

      impact:
        "Improved underwriting efficiency by providing automated risk analysis and customer insights."
    }
  },
  {
    slug: 'learnqoch',
    title: 'LearnQoch',
    desc: 'Improved API performance and testing workflows by implementing structured test strategies, database optimization, and automated validation processes.',
    features: ['API testing', 'Performance tuning', 'Bug tracking'],
    stack: ['Manual Testing', 'API Testing'],
    github: null,
    demo: 'https://ves.learnqoch.com/',
    external: true,
    featured: false,
    gradient: 'from-indigo-500/20 to-blue-600/10',
    details: {
      overview:
        "LearnQoch focused on improving application quality through structured testing, API validation, and performance optimization.",

      contributions: [
        "Performed manual and API testing",
        "Created and executed detailed test cases",
        "Identified and reported critical bugs",
        "Validated API functionality using testing tools",
        "Improved system performance through optimization recommendations"
      ],

      features: [
        "API Testing",
        "Performance Validation",
        "Bug Tracking",
        "Test Documentation",
        "Quality Assurance"
      ],

      technologies: [
        "Postman",
        "Manual Testing",
        "API Testing",
        "SQL",
        "Jira"
      ],

      impact:
        "Reduced production issues and improved application reliability through comprehensive testing."
    }
  },
  {
    slug: 'loanshastra',
    title: 'LoanShastra',
    desc: 'Built a loan and client management system that automates customer onboarding, loan tracking, and task allocation for financial operations teams.',
    features: ['Loan workflows', 'REST APIs', 'Notifications'],
    stack: ['Flask', 'SQL', 'Frontend'],
    github: null,
    demo: 'https://www.loanshastra.com/',
    external: true,
    featured: false,
    gradient: 'from-orange-500/20 to-amber-600/10',
    details: {
      overview:
        "LoanShastra is a loan and client management platform that automates customer onboarding, loan processing, and operational workflows.",

      contributions: [
        "Developed loan workflow management modules",
        "Built REST APIs for customer and loan management",
        "Implemented notification and tracking systems",
        "Created responsive frontend interfaces",
        "Supported database integration and reporting features"
      ],

      features: [
        "Loan Processing",
        "Client Management",
        "Task Automation",
        "Notifications",
        "Reporting Dashboard"
      ],

      technologies: [
        "Flask",
        "SQL",
        "JavaScript",
        "REST APIs",
        "Frontend Development"
      ],

      impact:
        "Improved operational efficiency by automating loan lifecycle and customer management processes."
    }
  },

];

export const RESUME = {
  summary:
    'Full Stack Developer and AI Engineer with 4+ years of experience delivering production-ready web applications, LLM integrations, and scalable backend systems. Proven track record across fintech, edtech, and insurtech — from React/Next.js frontends to Python/Django APIs, RAG pipelines, and algorithmic trading automation. Passionate about clean architecture, measurable performance gains, and shipping AI products that solve real business problems.',
  highlights: [
    { label: 'Experience', value: '4+', unit: 'Years' },
  ],
  experience: [
    {
      title: 'Full Stack & AI Integration Engineer',
      org: 'Freelance / Independent',
      period: '2024 – Present',
      location: 'Remote · Pune, India',
      type: 'experience',
      bullets: [
        'Architect and ship end-to-end AI products — LLM integrations, RAG chatbots, MCP tooling, and intelligent automation workflows for startups and enterprises.',
        'Built AI Hunt, a full-stack job intelligence platform with cron-based aggregation across 6 sources, live news feeds, Medium blog sync, and an interactive AI career quiz.',
        'Deliver production-ready AI applications with scalable Python/FastAPI backends, vector databases, and React/Next.js frontends deployed on Vercel and AWS.',
        'Consult on AI system design including LangChain pipelines, embedding strategies, and cost-efficient LLM deployment patterns.',
      ],
      tags: ['Next.js', 'Python', 'FastAPI', 'RAG', 'LangChain', 'MCP', 'OpenAI'],
    },
    {
      title: 'Full-Stack Web Developer',
      org: 'Earth Solutions Pvt. Ltd',
      period: '2021 – 2023',
      location: 'Pune, India',
      type: 'experience',
      bullets: [
        'Developed and maintained production web applications using React, Django, Flask, Node.js, and PHP for multiple client engagements.',
        'Designed RESTful APIs, database schemas, and backend services with PostgreSQL and MySQL; optimized frontend performance and bundle sizes.',
        'Led React migration for CyberInsurify — ML-based insurance risk scoring that improved pricing accuracy by 25% and business margins by 18%.',
        'Built LoanShastra loan management platform supporting 300+ users with automated task allocation, REST APIs, and real-time notifications.',
        'Improved LearnQoch API response times by 30% through query optimization, structured API testing, and systematic bug tracking.',
      ],
      tags: ['React', 'Django', 'Flask', 'Node.js', 'PHP', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'Summer Intern — Python Development',
      org: 'Earth Solutions Pvt. Ltd',
      period: '2020 – 2021',
      location: 'Pune, India',
      type: 'education',
      bullets: [
        'Designed Python data processing pipelines with interactive visualization dashboards using graphs and charts.',
        'Collaborated with senior developers on backend modules, gaining foundational exposure to full-stack web development.',
      ],
      tags: ['Python', 'Data Visualization', 'Backend'],
    },
  ],
  keyProjects: [
    {
      title: 'AI Hunt Platform',
      period: '2024',
      desc: 'Automated AI job aggregation with multi-source cron jobs, news feeds, blog sync, and career tools.',
      impact: '6 job sources · Full-stack Next.js',
      stack: ['Next.js', 'React', 'Node Cron', 'Tailwind'],
      link: '/ai-hunt/job-radar',
    },
    {
      title: 'CyberInsurify',
      period: '2022 – 2023',
      desc: 'ML-based insurance risk scoring and attack detection with legacy-to-React migration.',
      impact: '+25% pricing accuracy · +18% margins',
      stack: ['React', 'PHP', 'MySQL', 'AWS'],
      link: 'https://www.cyberinsurifylabs.com/',
    },
    {
      title: 'LoanShastra',
      period: '2022',
      desc: 'Loan and client management platform with workflow automation and notification systems.',
      impact: '300+ active users',
      stack: ['Flask', 'SQL', 'REST APIs'],
      link: 'https://www.loanshastra.com/',
    },
    {
      title: 'LearnQoch',
      period: '2023',
      desc: 'Edtech platform optimization through API testing and database query tuning.',
      impact: '30% faster API responses',
      stack: ['API Testing', 'Performance Tuning'],
      link: 'https://ves.learnqoch.com/',
    },
  ],
  achievements: [
    { title: 'Gen AI Powered Data Analytics Job Simulatio', desc: 'Tata Group (Forage).' },
    { title: 'Deep Agents Course', desc: 'LangChain Academy.' },
    { title: 'Certified Full Stack Developer', desc: 'freeCodeCamp' },
    { title: 'Machine Learning Training', desc: 'Dell Technologies' },

  ],
  coreCompetencies: [
    'Full-Stack Development',
    'AI / LLM Integration',
    'REST API Design',
    'System Architecture',
    'Database Optimization',
    'Algo Trading Systems',
    'Cloud Deployment',
    'Technical Consulting',
  ],
};

export const TIMELINE = [
  {
    type: 'experience',
    year: '2024 – Present',
    title: 'Full Stack & AI Integration Engineer',
    org: 'Freelance',
    desc: 'Building end-to-end AI solutions — LLM integrations, RAG chatbots, and custom AI applications.',
  },
  {
    type: 'experience',
    year: '2021 – 2023',
    title: 'Full-Stack Web Developer',
    org: 'Earth Solutions Pvt. Ltd',
    desc: 'Developed apps with React, Flask, Django, Node.js, and PHP. Built REST APIs and optimized frontend performance.',
  },
  {
    type: 'education',
    year: '2020 – 2021',
    title: 'Summer Intern – Python Development',
    org: 'Earth Solutions Pvt. Ltd',
    desc: 'Designed data processing and visualization solutions using graphs and charts.',
  },
];


export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/resume', label: 'Resume' },
  { href: '/ai-hunt/job-radar', label: 'AI Hunt' },
  { href: '/contact', label: 'Contact' },
];

export const FOOTER_LINKS = {
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
  ],
  resources: [
    { href: '/blogs', label: 'Blog' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
    { href: '/ai-hunt/job-radar', label: 'AI Hunt' },
  ],
  social: [
    { href: SITE.github, label: 'GitHub', external: true },
    { href: SITE.linkedin, label: 'LinkedIn', external: true },
    { href: SITE.medium, label: 'Medium', external: true },
  ],
};
