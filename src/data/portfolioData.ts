export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: 'Full-Stack Web App' | 'SaaS Platform' | 'Enterprise ERP' | 'Developer Tool';
  status: 'Live' | 'Development' | 'Planned';
  description: string;
  challenge: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
  featured: boolean;
}

export interface ClientWebsite {
  name: string;
  url: string;
  category: 'Business & Corporate' | 'E-commerce' | 'Healthcare & Services' | 'Tech & Recruitment';
  description: string;
  role: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  isCurrent?: boolean;
  responsibilities: string[];
  achievements?: string[];
}

export interface SkillCategory {
  category: string;
  tagline: string;
  skills: { name: string; highlight?: boolean }[];
}

export const PERSONAL_INFO = {
  name: 'Arif Mahmood',
  roleTitle: 'AI-Powered Full-Stack Developer | Web Application Development | UI/UX | WordPress',
  shortBio: 'AI-Powered Full-Stack Developer with 13+ years of experience delivering responsive websites, scalable web applications, and user-focused digital solutions.',
  location: 'Islamabad, Pakistan',
  email: 'arifranabk@gmail.com',
  phone: '+92 300 4936838',
  experienceYears: '13+',
  education: {
    degree: 'Bachelor of Arts (BA)',
    institution: 'Punjab University, Lahore',
    years: '2011–2013',
  },
  cvFileName: 'Arif-Mahmood-CV.pdf',
  cvPath: '/Arif-Mahmood-CV.pdf',
  avatarUrl: '/arif-mahmood.jpg',
  github: 'https://github.com/arifranabk3',
  headline: 'Building Digital Products That Solve Real Business Problems.',
  supportingText:
    "I'm Arif Mahmood, an AI-powered Full-Stack Developer with 13+ years of experience building scalable web applications, custom WordPress solutions and modern digital experiences.",
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'autoverse',
    slug: 'autoverse',
    number: '01',
    title: 'AUTOVERSE',
    tagline: 'Premium Automotive Marketplace Platform',
    category: 'Full-Stack Web App',
    status: 'Live',
    description:
      'A multi-tier automotive marketplace engineering platform that connects verified automotive dealerships and private buyers with interactive inventory search, real-time lead negotiation, and dealership management tools.',
    challenge:
      'Dealerships struggle with fragmented listing tools, sluggish search on large inventory catalogs, and disjointed buyer lead tracking.',
    solution:
      'Engineered an end-to-end full-stack marketplace featuring dynamic facet filters, multi-role authentication (Buyer, Dealer, Admin), vehicle inquiry tracking, and high-performance server-rendered vehicle catalogs.',
    architecture: [
      'Next.js App Router 14 with TypeScript & Tailwind CSS',
      'Node.js & Express RESTful API with route isolation',
      'MongoDB Atlas cluster with optimized compound indices for faceted queries',
      'JWT authentication with HTTP-only cookie persistence and role middleware',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Vehicle marketplace directory with multi-criteria filtering',
      'Advanced vehicle search (Make, Model, Year, Price, Mileage, Fuel)',
      'Vehicle detail views with high-definition galleries and spec breakdown',
      'Buyer inquiry and favorite vehicle saved lists',
      'Dealer vehicle submission and inventory management dashboard',
      'Admin moderation panel with vehicle status approval workflows',
      'Role-based access control protecting buyer and dealer portals',
    ],
    liveUrl: 'https://autoverse-lilac.vercel.app/',
    githubUrl: 'https://github.com/arifranabk3/autoverse-marketplace',
    metrics: [
      { label: 'Platform Status', value: 'Live & Operational' },
      { label: 'Role Types', value: 'Buyer / Dealer / Admin' },
      { label: 'App Routes', value: '25+ Pre-rendered' },
    ],
    featured: true,
  },
  {
    id: 'sellzy',
    slug: 'sellzy',
    number: '02',
    title: 'SELLZY',
    tagline: 'Multi-Tenant E-Commerce SaaS Platform',
    category: 'SaaS Platform',
    status: 'Development',
    description:
      'Enterprise multi-tenant digital commerce infrastructure engineered for high-volume merchants, featuring complete tenant workspace isolation, custom domain resolution, product catalogs, and order orchestration.',
    challenge:
      'Managing multiple storefronts often results in database crossover risks, complex domain routing, and performance degradation during peak inventory loads.',
    solution:
      'Designed a multi-tenant architecture enforcing strict data isolation at the ORM layer, paired with Next.js sub-domain routing and modular store administrative tools.',
    architecture: [
      'Multi-tenant schema segregation with tenant validation middleware',
      'Next.js 14 App Router with dynamic tenant rewrite rules',
      'Express & TypeScript backend API with centralized error boundaries',
      'MongoDB Atlas with shard-friendly tenant compound indexes',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Multi-store architecture with tenant isolation',
      'Merchant workspace creation and custom storefront configuration',
      'Product catalog management with SKU variants and inventory tracking',
      'Customer database and order fulfillment processing',
      'Storefront rendering engine with responsive product cards',
      'Marketing campaigns and communication workflow integration',
    ],
    githubUrl: 'https://github.com/arifranabk3/sellzy-saas-platform',
    metrics: [
      { label: 'Architecture', value: 'Multi-Tenant' },
      { label: 'Status', value: 'Active Development' },
      { label: 'Data Model', value: 'Strict Isolation' },
    ],
    featured: true,
  },
  {
    id: 'talentflow',
    slug: 'talentflow',
    number: '03',
    title: 'TALENTFLOW',
    tagline: 'Recruitment & Applicant Tracking System (ATS)',
    category: 'Enterprise ERP',
    status: 'Development',
    description:
      'An enterprise ATS built to streamline high-velocity hiring pipelines for talent acquisition teams, featuring visual Kanban applicant stages, candidate profile indexing, and centralized interview scheduling.',
    challenge:
      'Recruiting teams waste hours toggling between messy spreadsheets, lost email threads, and fragmented resume repositories.',
    solution:
      'Architected a dedicated corporate recruitment SaaS with role-governed workspaces (Candidate, Recruiter, Admin), real-time applicant stage transitions, and comprehensive audit logs.',
    architecture: [
      'Next.js 14 App Router with centralized Edge RouteGuard & RBAC engine',
      'Deep Teal corporate enterprise SaaS design system with light-first dashboards',
      'Express.js backend with Mongoose models for Jobs, Applications, and Audit Logs',
      'Token rotation and resilient preview session management',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Candidate and recruiter dual-authentication system with password recovery',
      'Corporate company workspace management and verified profiles',
      'Job requisition creator with compensation, skills, and status controls',
      'Public job directory with search and structured candidate application flow',
      'Interactive recruiter pipeline with status tracking (Applied, Screening, Interview, Offered, Hired)',
      'Candidate resume association and application history',
      'Enterprise admin panel for user moderation and platform governance',
    ],
    liveUrl: 'https://talentflow-ats-chi.vercel.app/',
    githubUrl: 'https://github.com/arifranabk3/talentflow-ats',
    metrics: [
      { label: 'Status', value: 'Under Active Dev' },
      { label: 'Identities', value: 'Candidate / Recruiter / Admin' },
      { label: 'Core Workspaces', value: '3 Dedicated Portals' },
    ],
    featured: true,
  },
  {
    id: 'contentsphere',
    slug: 'contentsphere',
    number: '04',
    title: 'CONTENTSPHERE',
    tagline: 'Headless CMS & Content API Platform',
    category: 'Developer Tool',
    status: 'Planned',
    description:
      'A modern headless content management system giving editorial teams full control over dynamic content types, custom taxonomies, and multi-channel publishing via high-performance REST APIs.',
    challenge:
      'Monolithic CMS setups bind frontend presentation tightly to backend databases, preventing flexible omnichannel delivery.',
    solution:
      'Planned modular headless CMS combining PHP/Laravel content engine with Next.js decoupled frontend delivery.',
    architecture: [
      'Laravel & PHP core REST API backend with granular permission models',
      'Next.js decoupled frontend for content preview and administration',
      'MySQL database with flexible EAV and JSON schema support',
    ],
    techStack: ['Laravel', 'PHP', 'Next.js', 'React', 'MySQL', 'REST APIs'],
    features: [
      'Dynamic content type builder with custom schema fields',
      'Rich media library with automatic asset optimization',
      'Publishing state workflows (Draft, Review, Scheduled, Published)',
      'Decoupled RESTful API endpoints with API key access controls',
      'Automated technical SEO metadata and OpenGraph tag generator',
    ],
    metrics: [
      { label: 'Stage', value: 'Planned Roadmap' },
      { label: 'Core Stack', value: 'Laravel + Next.js' },
    ],
    featured: false,
  },
  {
    id: 'clientflow',
    slug: 'clientflow',
    number: '05',
    title: 'CLIENTFLOW',
    tagline: 'CRM & Sales Automation Engine',
    category: 'SaaS Platform',
    status: 'Planned',
    description:
      'Customer relationship management platform engineered to automate lead acquisition, deal velocity tracking, customer communication history, and team follow-up cadences.',
    challenge:
      'Small and mid-size agencies struggle to maintain consistent follow-ups and monitor revenue pipelines across distributed sales reps.',
    solution:
      'A lightweight yet powerful CRM focusing on interactive deal pipelines, contact activity timelines, and automated follow-up reminders.',
    architecture: [
      'Next.js 14 App Router for rapid, reactive sales dashboard interactions',
      'Express.js & Node.js micro-services for webhook and communication queues',
      'MongoDB database supporting schema-free customer interaction logs',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Lead and contact directory with customer timeline logging',
      'Visual sales deal pipeline with stage progress tracking',
      'Task management and scheduled follow-up triggers',
      'Customer communication histories and direct messaging records',
      'Pipeline velocity and sales conversion rate analytics',
    ],
    metrics: [
      { label: 'Stage', value: 'Planned Roadmap' },
      { label: 'Target', value: 'Sales & Client Teams' },
    ],
    featured: false,
  },
  {
    id: 'worksync',
    slug: 'worksync',
    number: '06',
    title: 'WORKSYNC',
    tagline: 'Project Management & Team Collaboration Platform',
    category: 'Full-Stack Web App',
    status: 'Planned',
    description:
      'Collaboration software designed for cross-functional engineering and design squads to manage sprint cycles, task dependencies, milestone delivery, and team capacity.',
    challenge:
      'Distributed teams suffer from context-switching between sprint trackers, roadmaps, and chat applications.',
    solution:
      'Unified project workspaces pairing Kanban boards with sprint roadmaps, calendar overlays, and team workload balancing.',
    architecture: [
      'Next.js 14 frontend with drag-and-drop Kanban state management',
      'Node.js & Express API with optimistic update support',
      'MongoDB database storing flexible task dependency graphs',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Multi-team workspaces and customizable project boards',
      'Interactive Kanban boards with card tagging and priority badges',
      'Milestone roadmaps and calendar milestone views',
      'Team task assignment and sprint workload visibility',
      'Activity audit trails and real-time collaboration threads',
    ],
    metrics: [
      { label: 'Stage', value: 'Planned Roadmap' },
      { label: 'Use Case', value: 'Agile Teams' },
    ],
    featured: false,
  },
  {
    id: 'stockpilot',
    slug: 'stockpilot',
    number: '07',
    title: 'STOCKPILOT',
    tagline: 'Inventory & Warehouse ERP System',
    category: 'Enterprise ERP',
    status: 'Planned',
    description:
      'Operational ERP software managing real-time stock levels across multi-site warehouses, purchase requisition flows, supplier relationships, and inventory valuation ledgers.',
    challenge:
      'Inventory discrepancies and untracked warehouse transfers cause expensive stockouts and accounting inaccuracies.',
    solution:
      'Robust double-entry stock ledger paired with barcode scanning support and automated reorder threshold triggers.',
    architecture: [
      'PHP / Laravel backend executing transactional inventory ledgers',
      'MySQL database with strict foreign keys and audit history',
      'Next.js & React frontend for responsive warehouse floor access',
    ],
    techStack: ['Laravel', 'PHP', 'React', 'Next.js', 'MySQL', 'Tailwind CSS'],
    features: [
      'SKU and barcode catalog with multi-variant management',
      'Multi-warehouse tracking with bin location mapping',
      'Double-entry stock movement ledger for verified audits',
      'Purchase order creation and supplier directory',
      'Inter-warehouse transfer management with receipt confirmation',
      'FIFO / Weighted Average inventory valuation reporting',
    ],
    metrics: [
      { label: 'Stage', value: 'Planned Roadmap' },
      { label: 'Domain', value: 'Supply Chain & ERP' },
    ],
    featured: false,
  },
  {
    id: 'seoaudit-pro',
    slug: 'seoaudit-pro',
    number: '08',
    title: 'SEOAUDIT PRO',
    tagline: 'Technical SEO Audit & Health SaaS',
    category: 'Developer Tool',
    status: 'Planned',
    description:
      'Automated technical crawler that inspects website infrastructure for broken links, canonical defects, Core Web Vitals issues, robots directives, and missing schema markup.',
    challenge:
      'Manual technical website audits take dozens of hours and frequently miss edge-case indexing and crawler blocks.',
    solution:
      'High-concurrency crawler inspecting HTTP status codes, heading hierarchies, meta tags, and internal link equity distributions.',
    architecture: [
      'Node.js crawler engine parsing HTML trees with headless DOM analysis',
      'Next.js 14 dashboard rendering interactive audit scores and issue trees',
      'MongoDB database caching historical audit reports for progress tracking',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Full-site automated crawler with depth and rate controls',
      'Broken link detection (404, 500) and redirect chain inspection',
      'Metadata and title tag length, uniqueness, and duplication audits',
      'Heading hierarchy (H1-H6) validation and keyword distribution',
      'Robots.txt, XML sitemap, and canonical link compliance checks',
      'Comprehensive exportable PDF and CSV technical SEO health reports',
    ],
    metrics: [
      { label: 'Stage', value: 'Planned Roadmap' },
      { label: 'Focus', value: 'Technical SEO Engine' },
    ],
    featured: false,
  },
];

export const CLIENT_WEBSITES: ClientWebsite[] = [
  // Business & Corporate
  {
    name: 'Ovexsol',
    url: 'https://ovexsol.com',
    category: 'Business & Corporate',
    description: 'Corporate technology solutions and IT consulting corporate presence.',
    role: 'WordPress Theme Development & Performance Optimization',
  },
  {
    name: 'Mumtaz Metal Care',
    url: 'https://mumtazmetalcare.com',
    category: 'Business & Corporate',
    description: 'Industrial metal finishing, surface treatment and manufacturing services catalog.',
    role: 'Full-Stack Web Development & Responsive Design',
  },
  {
    name: 'KB FM',
    url: 'https://kb-fm.co.uk',
    category: 'Business & Corporate',
    description: 'UK-based facilities management, commercial cleaning and maintenance solutions.',
    role: 'WordPress Architecture & Custom Content Design',
  },
  {
    name: 'Suisse Associates',
    url: 'https://suisseassociates.com',
    category: 'Business & Corporate',
    description: 'Boutique corporate advisory, business consultancy and asset management.',
    role: 'UI/UX Design & Front-End Development',
  },
  {
    name: 'Sanadad',
    url: 'https://sanadad.ae',
    category: 'Business & Corporate',
    description: 'UAE-based enterprise corporate services and government document clearance.',
    role: 'Responsive Web Application & Performance Tuning',
  },

  // E-commerce
  {
    name: 'No Limit Logos',
    url: 'https://nolimitlogos.com',
    category: 'E-commerce',
    description: 'Custom digital branding, logo design storefront and creative service packages.',
    role: 'E-commerce Storefront & Custom WordPress Development',
  },
  {
    name: 'Minor Hakwik Store',
    url: 'https://minorhawikstore.com',
    category: 'E-commerce',
    description: 'Online consumer retail shop featuring curated product collections.',
    role: 'WooCommerce Integration & Checkout Flow Optimization',
  },
  {
    name: 'Expat Prime',
    url: 'https://expatprime.tv',
    category: 'E-commerce',
    description: 'Digital media streaming subscriptions and international service packages.',
    role: 'Front-End Development & Subscription Integration',
  },

  // Healthcare, Security & Professional Services
  {
    name: 'Jodie Rosen',
    url: 'https://jodierosen.com',
    category: 'Healthcare & Services',
    description: 'High-end interior design and architectural portfolio showcase.',
    role: 'Custom Portfolio Engineering & Visual Polish',
  },
  {
    name: 'Peachtree Med',
    url: 'https://peachtreemed.com',
    category: 'Healthcare & Services',
    description: 'Medical clinic services, physician directories and patient appointment workflows.',
    role: 'Healthcare Portal Development & Accessibility',
  },
  {
    name: 'Citiguard Security',
    url: 'https://citiguardsecurity.com',
    category: 'Healthcare & Services',
    description: 'Commercial and residential physical security, patrol and surveillance solutions.',
    role: 'Enterprise Web Development & Lead Generation UI',
  },
  {
    name: 'Moral Tel Secure',
    url: 'https://moraltelsecure.com',
    category: 'Healthcare & Services',
    description: 'Cybersecurity, telecommunications and network defense solutions.',
    role: 'UI/UX Layout & Technical Website Implementation',
  },

  // Technology & Recruitment
  {
    name: 'Global Tech Coverage',
    url: 'https://globaltechcoverage.com',
    category: 'Tech & Recruitment',
    description: 'Technology publication and industry news portal covering global innovations.',
    role: 'CMS Architecture & Editorial Layout Engineering',
  },
  {
    name: 'Buddy Jobz',
    url: 'https://buddyjobz.com',
    category: 'Tech & Recruitment',
    description: 'Job board and recruitment platform connecting candidates with regional employers.',
    role: 'Job Portal Development & Search Interface',
  },
  {
    name: 'Fratres',
    url: 'https://fratres.net',
    category: 'Tech & Recruitment',
    description: 'Global talent recruitment network and career advice resource platform.',
    role: 'Full-Stack Development & Candidate Pipeline Layouts',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'November 2020 – Present',
    role: 'AI-Powered Full-Stack, UI/UX & WordPress Developer',
    company: 'Zam Solutions',
    location: 'Islamabad, Pakistan',
    isCurrent: true,
    responsibilities: [
      'Architect and develop responsive and scalable web applications utilizing React, Next.js, PHP, and Laravel.',
      'Design, engineer, and maintain custom WordPress themes and high-performance custom plugins.',
      'Implement RESTful API integrations and build headless CMS content distribution pipelines.',
      'Incorporate modern AI-assisted development workflows to accelerate code velocity, quality assurance, and automated scaffolding.',
    ],
    achievements: [
      'Improved mobile traffic by 50% through responsive design (attributed to CV experience).',
      'Reduced website loading times by 40% through performance optimization (attributed to CV experience).',
    ],
  },
  {
    period: 'August 2019 – October 2020',
    role: 'UI/UX Designer / Developer',
    company: 'Spearhead Technology',
    location: 'Islamabad, Pakistan',
    responsibilities: [
      'Designed high-fidelity application mockups, interactive wireframes, and responsive user interfaces in Figma and Photoshop.',
      'Translated user research and product requirements into production-ready front-end code with clean HTML5, CSS3, and JavaScript.',
      'Collaborated closely with backend engineers to integrate dynamic data into frontend views with strict usability standards.',
    ],
  },
  {
    period: 'October 2018 – July 2019',
    role: 'Web Designer / Front-End Developer',
    company: 'Irtifa Group (Wizkon)',
    location: 'Pakistan',
    responsibilities: [
      'Engineered interactive, cross-browser compatible client websites and modern responsive web layouts.',
      'Crafted custom CSS styling systems, fluid typography, and interactive components using vanilla JavaScript and jQuery.',
      'Conducted speed optimization, image compression, and semantic HTML structuring across client properties.',
    ],
  },
  {
    period: 'April 2017 – September 2018',
    role: 'Web Designer / Front-End Developer',
    company: 'Global Technology Coverage',
    location: 'Pakistan',
    responsibilities: [
      'Developed and maintained editorial publishing templates for high-traffic media and technology portals.',
      'Optimized page delivery performance, ad placements, and mobile reading experiences.',
      'Implemented custom social sharing features, newsletter signup integrations, and dynamic article recommendations.',
    ],
  },
  {
    period: 'May 2013 – March 2017',
    role: 'Web Designer / Front-End Developer',
    company: 'Zam Software Solutions',
    location: 'Pakistan',
    responsibilities: [
      'Designed, built, and launched bespoke corporate websites, landing pages, and interactive client portals.',
      'Customized WordPress installations, created child themes, and authored custom CSS templates.',
      'Collaborated directly with business stakeholders to refine specifications and deliver projects on schedule.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Full-Stack Development',
    tagline: 'End-to-end web architectures, server-side frameworks, and reactive client applications.',
    skills: [
      { name: 'PHP', highlight: true },
      { name: 'Laravel', highlight: true },
      { name: 'Node.js', highlight: true },
      { name: 'JavaScript', highlight: true },
      { name: 'React', highlight: true },
      { name: 'Next.js', highlight: true },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Bootstrap' },
    ],
  },
  {
    category: 'WordPress & Headless CMS',
    tagline: 'Custom theme and plugin authoring, headless content architectures, and robust API layers.',
    skills: [
      { name: 'WordPress', highlight: true },
      { name: 'Custom Themes', highlight: true },
      { name: 'Custom Plugins', highlight: true },
      { name: 'Headless CMS', highlight: true },
      { name: 'CMS Architecture' },
      { name: 'RESTful APIs', highlight: true },
      { name: 'API Integration' },
    ],
  },
  {
    category: 'UI/UX & Design Systems',
    tagline: 'User-centric wireframing, high-fidelity design tools, responsive systems, and speed tuning.',
    skills: [
      { name: 'Figma', highlight: true },
      { name: 'Adobe Photoshop' },
      { name: 'Adobe Illustrator' },
      { name: 'Responsive Design', highlight: true },
      { name: 'Website Optimization', highlight: true },
    ],
  },
  {
    category: 'AI & Workflow Automation',
    tagline: 'AI-augmented development methodologies, intelligent prompt architectures, and velocity tools.',
    skills: [
      { name: 'AI-Assisted Development', highlight: true },
      { name: 'AI Integration', highlight: true },
      { name: 'AI-Powered Coding', highlight: true },
      { name: 'Development Workflow Automation', highlight: true },
    ],
  },
];

export const SERVICES = [
  {
    title: 'Full-Stack Web Applications',
    description:
      'Custom web applications engineered with Next.js, React, Node.js, PHP, and Laravel. Scalable architectures built for performance, security, and long-term maintainability.',
    tags: ['Next.js', 'React', 'Node.js', 'Laravel', 'TypeScript'],
  },
  {
    title: 'Custom WordPress & Plugin Engineering',
    description:
      'High-performance bespoke WordPress themes and plugins built from scratch without bloated page builders. Clean code tailored to exact business requirements.',
    tags: ['WordPress', 'PHP', 'Custom Plugins', 'WooCommerce', 'Gutenberg'],
  },
  {
    title: 'Headless CMS & Decoupled Architecture',
    description:
      'Decoupled publishing platforms connecting powerful content backends (WordPress, Laravel, Strapi) with lightning-fast Next.js frontend interfaces via RESTful and GraphQL APIs.',
    tags: ['Headless CMS', 'Next.js', 'REST APIs', 'GraphQL', 'Omnichannel'],
  },
  {
    title: 'UI/UX Design to Production Code',
    description:
      'Transforming high-fidelity Figma concepts into pixel-perfect, accessible, and responsive web interfaces with smooth micro-interactions and meticulous typography.',
    tags: ['Figma', 'UI/UX', 'Tailwind CSS', 'Responsive', 'Accessibility'],
  },
  {
    title: 'Website Performance & Technical SEO',
    description:
      'Comprehensive Core Web Vitals optimization, database query tuning, asset compression, and semantic HTML auditing to achieve sub-second load times and higher search visibility.',
    tags: ['Core Web Vitals', 'PageSpeed', 'Technical SEO', 'Schema Markup'],
  },
  {
    title: 'AI-Assisted Rapid Engineering',
    description:
      'Leveraging cutting-edge AI coding workflows to prototype faster, automate repetitive engineering tasks, and deliver production-ready software in record timeframes.',
    tags: ['AI Workflows', 'Automation', 'Rapid Prototyping', 'Prompt Engineering'],
  },
];

