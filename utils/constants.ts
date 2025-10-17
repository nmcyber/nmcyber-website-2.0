// Company information
export const COMPANY_INFO = {
  name: 'NMCYBER',
  tagline: 'Empowering Humans. Protecting Businesses.',
  shortDescription: 'Custom Cybersecurity Awareness Training Built for Humans, Not  Hackers. ',
  longDescription:
    'NMCYBER helps Small and Medium Businesses transform their employees into cyber-aware defenders through custom, human-centric cybersecurity training. We replace boring check-the-box courses with interactive, role-based programs that build real behavioural change, reducing cyber risk at its human source.',
  email: 'info@nmcyber.com.au',
  website: 'https://nmcyber.com.au',
  phone: '+61-XXX-XXX-XXX',
};

// Navigation structure
export const MAIN_NAV_LINKS = [
  { name: 'Company', href: '/company' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Resources', href: '/resources' },
  { name: 'Academy', href: '/academy' },
  { name: 'Contact Us', href: '/contact-us' },
];

// Footer Sitemap
export const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Pricing', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/' },
  { label: 'Contact Us', href: '/' },
];

export const PLATFORM_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Pricing', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/' },
  { label: 'Contact Us', href: '/' },
];

// Why Human-Centric Cybersecurity content
export const WHY_HUMAN_CENTRIC = {
  title: 'Why Human-Centric Cybersecurity?',
  description:
    'Your People Are the First Line of Defence. You can make them your strongest (or weakest) link. Your cybersecurity is only as strong as your least aware employee.',
  explanation:
    'Traditional tech-focused approaches miss the human element. We at NMCYBER help your team stay alert, aware, and cyber-resilient. We help your team think like cyber defenders, not just employees.',
  intro:
    "At NMCYBER, we pride ourselves on turning your workforce into cyber defenders. Our innovative approach to cybersecurity awareness and training doesn't just protect your data, it transforms your entire organisation to thrive through:",
  benefits: [
    'Reduced Risk of Data Breaches',
    'Confident, Security-Conscious Employees',
    'Training that is Aligned with Your Business and Culture',
    'Empowering your team with real-world knowledge',
    'Reduced human error-based cyber incidents',
    'Build a lasting security culture that scales with your business',
  ],
  human_head: {
    image: '/images/cybersecurity-concept-illustration.webp',
    title: 'Human Head',
  },
  video: {
    url: 'https://www.youtube-nocookie.com/embed/6oqU4zANZf8?rel=0&playsinline=1&vq=hd480',
    title: 'Watch Our Team in Action',
  },
};

// Service packages
export const SERVICE_PACKAGES = [
  {
    name: 'CyberSpark',
    tagline: 'Starter Pack',
    price: '$499',
    frequency: '/month',
    bestFor: 'New to training',
    description:
      'Designed to build basic cybersecurity awareness and create a baseline culture of security. Perfect for SMBs new to cybersecurity training.',
    features: [
      'Foundational Cybersecurity Awareness Training (Customised)',
      'Cyber Hygiene Essentials Training',
      'One Phishing Simulation Campaign',
      'Basic Onboarding Module for New Staff',
      'Awareness Posters and Tips Pack (Digital)',
    ],
    callToAction: 'Get Started',
    href: '/packages/cyberspark',
    popular: false,
  },
  {
    name: 'HumanShield',
    tagline: 'Pro Pack',
    price: '$1,199',
    frequency: '/month',
    bestFor: 'Growing businesses',
    description:
      'Designed to strengthen security behaviours and create internal cybersecurity advocates. Perfect for SMBs looking to scale maturity and reduce human-related risks.',
    features: [
      'Full Cybersecurity Awareness Program (Role-Based)',
      'Quarterly Refresher Training',
      'Monthly Microlearning Campaigns',
      '3 Phishing Simulations (per year)',
      'Cybersecurity Champions Program',
      'Behavioural Nudging Toolkit',
      'Risk-Based Employee Profiling',
      'Reporting Dashboard Access',
    ],
    callToAction: 'Upgrade Security',
    href: '/packages/humanshield',
    popular: true,
  },
  {
    name: 'CultureLock',
    tagline: 'Premium Pack',
    price: '$2,499',
    frequency: '/month',
    bestFor: 'High-risk, compliance-driven',
    description:
      "Designed to embed security into the organisation's DNA and align with strategic goals. Perfect for High-growth SMBs or those with compliance goals or security leadership buy-in.",
    features: [
      'Security Culture Assessment',
      'Executive Cybersecurity Briefing and Coaching',
      'Custom Video Content (Branded)',
      'Crisis Simulation Workshop (Tabletop Exercise)',
      'Security Policy Consulting (Human-Focused)',
      'Cyber Maturity Roadmap and Strategy Planning',
      'Ongoing Security Culture Campaigns (12-month plan)',
      'Quarterly Analytics + Strategy Reviews',
    ],
    callToAction: 'Transform Culture',
    href: '/packages/culturelock',
    popular: false,
  },
];

// Key services
export const SERVICES = [
  {
    id: 'cybersecurity-awareness-training',
    name: 'Cybersecurity Awareness Training',
    description:
      'Engaging, scenario-based sessions designed to make security second nature for your team. Delivered live, virtually, or as eLearning.',
    features: [
      'Tailored by industry and team roles',
      'Easy-to-understand, non-technical approach',
      'Real-world examples and interactivity',
    ],
    icon: 'Shield',
    href: '/services/cybersecurity-awareness-training',
  },
  {
    id: 'phishing-simulation-campaigns',
    name: 'Phishing Simulation Campaigns',
    description:
      'We send mock phishing emails to test awareness, followed by practical micro-training to boost defence.',
    features: [
      'Realistic phishing emails sent to your team',
      'Post-simulation micro-training',
      'Track improvements over time',
    ],
    icon: 'Mail',
    href: '/services/phishing-simulation-campaigns',
  },
  {
    id: 'role-based-security-training',
    name: 'Role-Based Security Training',
    description:
      'Tailored content for different departments, from HR to Finance to the C-Suite. Everyone learns what matters most to them.',
    features: [
      'Finance, HR, Customer Support, IT, and more',
      'Executive briefings with strategic insights',
      'Aligns with compliance frameworks',
    ],
    icon: 'Users',
    href: '/services/role-based-security-training',
  },
  {
    id: 'cybersecurity-culture-development',
    name: 'Cybersecurity Culture Development',
    description:
      'Transform your organisation with long-term strategies, champion programs, and nudging systems that shift mindsets.',
    features: [
      'Cybersecurity Champions Program',
      'Microlearning and behavior nudges',
      'Long-term cultural change strategy',
    ],
    icon: 'Brain',
    href: '/services/cybersecurity-culture-development',
  },
];

// Hero section content
export const HERO_CONTENT = {
  title: 'Empowering Humans. Protecting Businesses.',
  subtitle: 'Custom cyber security awareness training built for humans, not robots.',
  description:
    'NMCYBER is a leading Cyber Security Awareness and Human Risk Management (HRM) provider. We deliver custom cyber security awareness training programs that are tailored to your roles and risk levels. We make security a daily mindset, empowering your team to become your strongest line of defence against cyber threats. We also offer a wide range of other cyber security services to protect your business.',
  cta: {
    primary: 'Book a Free Strategy Call Today',
    secondary: 'Download Free Cybersecurity Checklist',
  },
  trustedBy: 'Trusted by 3,200+ partners',
  partners: [
    { name: 'SOPHOS', logo: '/images/sophos.svg' },
    { name: 'CA ANZ', logo: '/images/chartere-accountants-australia-logo-2-1024x236_1.svg' },
    { name: 'Huntress', logo: '/images/huntress_security.svg' },
    { name: 'Proofpoint', logo: '/images/Proofpoint_R_Logo-2048x417.svg' },
  ],
};

// Core Services content
export const PRODUCTS = {
  title: 'Core Cybersecurity Awareness Training Services',
  description:
    'Empower your team with engaging, real-world cybersecurity training tailored to roles and risk levels. We make awareness interactive, relatable, and memorable, far beyond boring slide shows. Engaging, industry-tailored sessions designed to make  security a part of your team’s daily mindset. Delivered live or on-demand.',
  services: [
    {
      id: 'cybersecurity-awareness-training',
      name: 'Cybersecurity Awareness Training',
      description: 'Engaging, micro-learning content for all roles',
      icon: '/images/shield_icon.svg',
      features: [
        'Engaging, scenario-based sessions to make security second nature for your team.',
        'Tailored content designed for your industry and specific team roles.',
        'Easy-to-understand, non-technical approach with real-world examples.',
      ],
    },
    {
      id: 'phishing-simulation-campaigns',
      name: 'Phishing Simulation Campaigns',
      description: 'Realistic phishing tests to gauge vulnerability',
      icon: '/images/hacker_icon.svg',
      features: [
        "Realistic mock emails to test and strengthen your team's ability to spot threats.",
        'Immediate, practical micro-training to boost defence after each simulation.',
        "Track and measure improvements in your team's awareness over time.",
      ],
    },
    {
      id: 'cybersecurity-culture-development',
      name: 'Cybersecurity Culture & Behavioural Change',
      description: 'Instill a security-first mindset in your organization',
      icon: '/images/security_icon.svg',
      features: [
        'Shift from awareness to action by shaping secure habits across your organization.',
        'Build a security-first mindset with long-term strategies and champion programs.',
        'Embed security into your workplace DNA for lasting cultural transformation.',
      ],
    },
    {
      id: 'strategic-consulting',
      name: 'Strategic Consulting & Advisory',
      description: 'Develop a comprehensive human risk program',
      icon: '/images/consulting_icon.svg',
      features: [
        'Expert guidance for building people-first security policies and programs.',
        'Align cybersecurity strategy with your business goals, compliance, and culture.',
        'Develop future-proof security roadmaps and crisis preparedness plans.',
      ],
    },
  ],
  background: '/images/Looper2.svg',
};

// Why NMCYber content
export const WHY_NMCYBER = {
  title: 'Why NMCYber?',
  subtitle: 'What Our Clients Say',
  description:
    'Empower your team with engaging, real-world cybersecurity training tailored to roles and risk levels. We make awareness interactive, relatable, and memorable.',
  accordionItems: [
    {
      id: 'discover',
      title: 'Discover',
      content:
        "Uncover hidden vulnerabilities in your organization's security posture through comprehensive assessments and gap analysis.",
    },
    {
      id: 'transform',
      title: 'Transform',
      content:
        'Transform your workforce into cyber-aware defenders through engaging, role-based training programs that build lasting behavioral change.',
    },
    {
      id: 'thrive',
      title: 'Thrive',
      content:
        'Thrive in a security-first culture where your team becomes your strongest line of defense against cyber threats.',
    },
  ],
  graphics: {
    drone: '/images/drone.png',
    looper: '/images/looper.svg',
  },
};

// Pricing plans content
export const PRICING_PLANS = {
  title: 'Packages for Everyone',
  plans: [
    {
      name: 'CYBERSPARK (STARTER)',
      bestFor: 'Small teams starting out',
      price: '$9',
      frequency: '/mo',
      features: ['Awareness training', 'Hygiene', '1 phishing test'],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'CULTURELOCK (PREMIUM)',
      bestFor: 'Culture-first or compliance-driven',
      price: '$29',
      frequency: '/mo',
      features: ['Custom content', 'Policy support', 'Analytics', 'Consulting'],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'HUMANSHIELD (PRO)',
      bestFor: 'Growing businesses',
      price: '$19',
      frequency: '/mo',
      features: ['Role-based training', 'Champions', 'Microlearning'],
      cta: 'Get Started',
      popular: false,
    },
  ],
  compareText: 'Contact us to get a Custom Quote',
};

// Free resources content
export const FREE_RESOURCES = {
  title: 'Free Resources',
  resources: [
    {
      id: 1,
      title: '10 Cyber Traps SMBs Fall For (and How to Prevent them)',
      description:
        'Engaging, scenario-based sessions are designed to make security second nature for your  team. Delivered live, virtually, or as eLearning.',
      icon: 'Laptop',
      image: '/images/cybersecurity_desktop.png',
      downloadUrl: '/resources/cybersecurity-traps-guide.pdf',
      featured: true,
    },
    {
      id: 2,
      title: 'Free Cybersecurity Culture Checklist',
      icon: '/images/pdf_icon.svg',
      type: 'Checklist',
      downloadUrl: '/resources/FreeCybersecurityCultureChecklist.pdf',
    },
    {
      id: 3,
      title: 'Interactive Team Risk Quiz',
      icon: '/images/doc_icon.svg',
      type: 'Quiz',
      downloadUrl: '/resources/team-risk-quiz.pdf',
    },
  ],
};

// Testimonials content
export const TESTIMONIALS = {
  title: 'What Our Clients Say',
  testimonials: [
    {
      id: 1,
      text: 'NMCYBER helped us reduce phishing clicks by 83% in 6 months. Our team loved the training!',
      author: 'IT Manager, NextGen Technologies',
      leftcomma: '/images/leftcomma.png',
      rightcomma: '/images/rightcomma.png',
    },
    {
      id: 2,
      text: 'NMCYBER helped us go from constant phishing click rates to near-zero in 3 months. The team enjoyed the training, and they benefited.',
      author: 'Managing Director, AccuTech Co.',
      leftcomma: '/images/leftcomma.png',
      rightcomma: '/images/rightcomma.png',
    },
  ],
  backgroud1: '/images/map.svg',
};

// Contact form content
export const CONTACT_FORM = {
  title: 'Ready to Build Your Human Firewall?',
  description: 'Book a Free Strategy Call Today',
  email: 'info@nmcyber.com.au',
  website: 'https://nmcyber.com.au',
  cta: 'Book A Call With Us',
  formaName: 'Name',
  formEmail: 'Email Address',
  formCompany: 'Company',
  numberOfEmployees: 'Number of Employees',
  formMessage: 'Enter Your Message',
  formCta: 'Get A Free Support',
  chatbot: '/images/chatbot.svg',
};

// SEO keywords by page
export const SEO_KEYWORDS = {
  home: [
    'cybersecurity training',
    'human-centric cybersecurity',
    'SMB cybersecurity',
    'security awareness training',
    'employee cyber training',
    'phishing simulation',
    'cybersecurity for small business',
  ],
  services: [
    'cybersecurity services',
    'security awareness programs',
    'phishing testing',
    'role-based cyber training',
    'security culture development',
  ],
  products: [
    'cybersecurity products',
    'phishing simulation platform',
    'cyber awareness toolkit',
    'security training modules',
    'microlearning cybersecurity',
  ],
  about: [
    'cybersecurity consultants',
    'human-centric security experts',
    'SMB security specialists',
    'cybersecurity training company',
  ],
};

// About Us Page content
export const ABOUT_US = {
  title: 'About Us',
  subtitle: 'WHO WE ARE',
  description: {
    paragraph1:
      "At NMCYBER, we believe cybersecurity starts with people, not technology. Founded by a seasoned Human-Centric Cybersecurity Consultant with experience delivering security training for Australia's largest companies, NMCYBER was created to bring world-class, customised, and engaging cybersecurity awareness programs to Small and Medium Businesses (SMBs).",
    paragraph2:
      "We don't just teach teams how to avoid cyber threats, we train them to think, act, and respond like true cyber defenders. From phishing simulations and executive coaching to full culture transformation strategies, we help your business build security from the inside out. With NMCYBER, cybersecurity becomes part of your company culture, not just a once-a-year training. We focus on behaviour change, continuous learning, and practical application that fits your business, your people, and your goals.",
  },
  tagline: "Empowering Humans. Protecting Businesses. That's the NMCYBER way.",
  video: {
    title: 'Watch Our Team in Action',
    url: 'https://www.youtube-nocookie.com/embed/6oqU4zANZf8?rel=0&playsinline=1&vq=hd480',
  },
};

// Products Page content
export const PRODUCTS_PAGE = {
  hero: {
    subtitle: 'PRODUCTS',
    title: 'NMCYBER Products',
    description:
      'NMCYBER offers a suite of human-centric cybersecurity products designed specifically for small and medium businesses. Our products are built to educate, empower, and enable your workforce to proactively defend against cyber threats with confidence.',
  },
  lineup: {
    title: 'Our Product Lineup',
    products: [
      {
        id: 'cyber-awareness-toolkit',
        title: 'Cyber Awareness Toolkit',
        description:
          'An all-in-one package of posters, infographics, email templates, and security reminders designed to keep cybersecurity top-of-mind across your organisation.',
        icon: '/images/cyber-awareness-toolkit.svg',
        linkText: 'Read More →',
        linkHref: '/products/cyber-awareness-toolkit',
      },
      {
        id: 'phishing-simulation-platform',
        title: 'Phishing Simulation Platform',
        description:
          'A user-friendly platform that lets you run customised phishing simulations and track employee responses. Identify risk areas and train staff in real-time.',
        icon: '/images/phishing.svg',
        linkText: 'Read More →',
        linkHref: '/products/phishing-simulation-platform',
      },
      {
        id: 'microlearning-email-series',
        title: 'Microlearning Email Series',
        description:
          "Deliver continuous cybersecurity education straight to your team's inbox. Each series includes digestible lessons, interactive prompts, and behaviour nudges.",
        icon: '/images/email.svg',
        linkText: 'Read More →',
        linkHref: '/products/microlearning-email-series',
      },
      {
        id: 'role-based-learning-modules',
        title: 'Role-Based Learning Modules',
        description:
          'Targeted training for different departments—Finance, HR, IT, Customer Service—so every team member learns what matters most for their role.',
        icon: '/images/video-marketing.svg',
        linkText: 'Read More →',
        linkHref: '/products/role-based-learning-modules',
      },
      {
        id: 'behavioural-analytics-dashboard',
        title: 'Behavioural Analytics Dashboard',
        description:
          'A centralised platform that provides visibility into user progress, training effectiveness, and human risk levels across your business.',
        icon: '/images/dashboard.svg',
        linkText: 'Read More →',
        linkHref: '/products/behavioural-analytics-dashboard',
      },
      {
        id: 'branded-cybersecurity-content-packs',
        title: 'Branded Cybersecurity Content Packs',
        description:
          "Customised awareness materials branded to your organisation's look and feel. Includes banners, videos, printable guides, and digital assets.",
        icon: '/images/antivirus.svg',
        linkText: 'Read More →',
        linkHref: '/products/branded-cybersecurity-content-packs',
      },
      {
        id: 'nmcyber-academy-access',
        title: 'NMCYBER Academy Access',
        description:
          'On-demand access to our full range of interactive courses, learning paths, and simulations through NMCYBER Academy. Scalable for teams of all sizes.',
        icon: '/images/school.svg',
        linkText: 'Read More →',
        linkHref: '/products/nmcyber-academy-access',
      },
    ],
  },
  whyChoose: {
    title: 'Why Choose NMCYBER Products?',
    points: [
      'Designed for non-technical users—simple, clear, and effective',
      'Focused on changing behaviour, not just delivering information',
      'Ready-to-use and easy to deploy within SMB environments',
      'Supported by expert consultation and customisation options',
    ],
    video: {
      title: 'Watch Our Products in Action',
      url: 'https://www.youtube-nocookie.com/embed/6oqU4zANZf8?rel=0&playsinline=1&vq=hd480',
    },
  },
  cta: {
    subtitle: 'CONTACT US',
    title: 'Ready to Equip Your Team?',
    description:
      "Explore our products to find the perfect fit for your team's needs. Whether you're building a culture of cybersecurity from scratch or upgrading your existing efforts, NMCYBER has the tools to help.",
    email: '/images/blue-email.svg',
    contactText: 'Contact us at info@nmcyber.com.au to request a product demo or pricing.',
    background1: '/images/Looper2.svg',
    background2: '/images/chatbot.svg',
  },
};

// Services Page content
export const SERVICES_PAGE = {
  servicesHero: {
    subtitle: 'SERVICES',
    title: 'NMCYBER Services',
    backgroundHero: '/images/hero-bg.svg',
    backgroundBinary: '/images/binary.svg',
  },
  coreServicesCarousel: {
    services: [
      {
        id: 1,
        title: 'Core Cybersecurity Awareness Training Services',
        includes: [
          {
            title: 'Customised Cybersecurity Awareness Programs',
            description:
              'We offer Programs that are tailored to industry, business size, risk profile, and team roles.',
          },
          {
            title: 'Phishing Simulation Campaigns',
            description: 'We offer realistic phishing tests followed by learning sessions.',
          },
          {
            title: 'Interactive Workshops and Webinars',
            description:
              'We deliver scenario-based, gamified, or storytelling formats to drive home key concepts.',
          },
          {
            title: 'Executive Cybersecurity Briefings',
            description:
              'This focuses on risks, compliance, and strategic impact for the C-suite and boards.',
          },
          {
            title: 'Role-Based Security Training',
            description: 'We offer separate modules for finance, HR, IT, customer support, etc.',
          },
          {
            title: 'Cyber Hygiene Essentials Training',
            description: 'Password practices, device protection, Wi-Fi use, secure browsing, etc.',
          },
        ],
      },
      {
        id: 2,
        title: 'Behavioural and Cultural Change Services',
        includes: [
          {
            title: 'Cybersecurity Culture Assessments',
            description: 'Diagnose the current security mindset and awareness levels.',
          },
          {
            title: 'Security Behaviour Nudging',
            description:
              'Implement nudges (e.g., prompts, visuals, reminders) to encourage secure behaviours.',
          },
          {
            title: 'Cybersecurity Champions Program',
            description: 'Train internal ambassadors to promote secure behaviour peer-to-peer.',
          },
          {
            title: 'Microlearning Campaigns',
            description: 'Ongoing bite-sized education delivered via email, Slack, etc.',
          },
        ],
      },
      {
        id: 3,
        title: 'Onboarding & Continuous Learning Programs',
        includes: [
          {
            title: 'New Employee Cybersecurity Onboarding',
            description: 'First-day training for ingraining security culture.',
          },
          {
            title: 'Quarterly Refresher Courses',
            description: 'Keep teams updated with evolving threats and policies.',
          },
          {
            title: 'Gamified Learning Paths',
            description: 'Points, badges, and leaderboards to drive engagement.',
          },
        ],
      },
      {
        id: 4,
        title: 'Custom Content Creation',
        includes: [
          {
            title: 'Branded Cybersecurity Training Materials',
            description: 'Videos, PDFs, infographics, posters tailored to client branding.',
          },
          {
            title: 'Industry-Specific Scenarios',
            description: 'E.g., retail, healthcare, legal, government, education, manufacturing.',
          },
          {
            title: 'Crisis Communication and Incident Simulation Exercises',
            description: 'Human-focused tabletop exercises for breach response.',
          },
        ],
      },
      {
        id: 5,
        title: 'Measurement and Reporting',
        includes: [
          {
            title: 'Security Behaviour Analytics and Reporting',
            description: 'Measure training impact, behavioural change, and areas of risk.',
          },
          {
            title: 'Training Effectiveness Reviews',
            description: 'Data-driven insights to refine and improve training programs.',
          },
          {
            title: 'Employee Risk Profiling and Segmentation',
            description: 'Identify high-risk roles or users for targeted intervention.',
          },
        ],
      },
      {
        id: 6,
        title: 'Consulting and Advisory Services',
        includes: [
          {
            title: 'Cybersecurity Policy Development (Human-Focused)',
            description: 'Help write policies employees will actually follow.',
          },
          {
            title: 'Security Culture Transformation Strategy',
            description: 'Long-term programs to shift the mindset, not just deliver training.',
          },
          {
            title: 'SMB Cybersecurity Maturity Roadmap',
            description: 'Align security training with business growth and compliance goals.',
          },
        ],
      },
      {
        id: 7,
        title: 'Add-On/Unique Value Services',
        includes: [
          {
            title: 'Cyber Hygiene Check-ups for Individuals',
            description: '1:1 coaching or assessments for key employees or execs.',
          },
          {
            title: 'Awareness Campaign Kits',
            description: 'Monthly security themes with posters, email templates, and quizzes.',
          },
          {
            title: 'Cybersecurity and Mental Health Sessions',
            description:
              'Exploring burnout, vigilance fatigue, and the human toll of cyber threats.',
          },
          {
            title: 'Secure Remote Work Training',
            description: 'Especially valuable for hybrid/remote teams.',
          },
          {
            title: 'Third-Party Risk Awareness',
            description: 'Training staff on evaluating and interacting with vendors securely.',
          },
          {
            title: 'Compliance-Focused Training Modules',
            description: 'Aligning to ISO 27001, NIST, GDPR, ACSC Essential Eight, etc.',
          },
        ],
      },
    ],
    flashIcon: '/images/flash.svg',
    arrowsIcon: '/images/carousel_arrow.svg',
  },
  packageHeader: {
    subtitle: 'SERVICES',
    title: 'NMCYBER Service Packages',
  },
  servicePackagesCarousel: {
    packages: [
      {
        id: 1,
        title: 'Cyber-Aware Team',
        description:
          'Designed to build basic cybersecurity awareness and create a baseline culture of security. Perfect for SMBs new to cybersecurity training.',
        includes: [
          'Foundational Cybersecurity Awareness Training (Customised)',
          'Cyber Hygiene Essentials Training',
          'One Phishing Simulation Campaign',
          'Basic Onboarding Module for New Staff',
          'Awareness Posters and Tips Pack (Digital)',
        ],
      },
      {
        id: 2,
        title: 'Security-First Organization',
        description:
          'Advanced training program for organizations ready to implement comprehensive cybersecurity culture and advanced threat protection.',
        includes: [
          'Advanced Cybersecurity Training Modules',
          'Multi-layered Phishing Simulations',
          'Executive Security Briefings',
          'Incident Response Training',
          'Custom Security Policies & Procedures',
        ],
      },
      {
        id: 3,
        title: 'Enterprise Security Excellence',
        description:
          'Complete cybersecurity transformation package for large organizations requiring enterprise-level security awareness and compliance.',
        includes: [
          'Enterprise-wide Security Training',
          'Compliance-focused Training Modules',
          'Advanced Threat Simulation',
          'Security Culture Assessment',
          'Ongoing Security Monitoring & Support',
        ],
      },
    ],
    flashIcon: '/images/flash.svg',
    arrowsIcon: '/images/carousel_arrow.svg',
  },
  servicePackages: {
    title: 'NMCYBER Service Packages',
    teams: [
      {
        name: 'Cyber‑Aware Team',
        description:
          'Foundational program to build cyber awareness and safe habits across your organisation.',
        points: [
          'Foundational awareness training (customised)',
          'Cyber hygiene essentials',
          'One phishing simulation',
          'Basic onboarding module',
          'Awareness posters and tips (digital)',
        ],
      },
      {
        name: 'HumanShield Team',
        description:
          'Scale behaviour change with role-based programs, champions, and microlearning.',
        points: [
          'Role-based training program',
          'Quarterly refreshers',
          'Three phishing simulations / year',
          'Champions program',
          'Behaviour nudging toolkit',
          'Reporting dashboard access',
        ],
      },
    ],
    notes: [
      'Pricing shown are monthly plans; annual commitment saves 10%.',
      'Flexible bundles and add‑ons available to tailor to your team.',
    ],
    arrowsIcon: '/images/arrows.svg',
  },
  packagesForEveryone: {
    title: 'Packages for Everyone',
    subtitle: 'PRICE & PLANS',
    packages: [
      {
        name: 'STARTER PACK (CYBERSPARK)',
      },
      {
        name: 'PRO PACK (HUMANSHIELD)',
      },
      {
        name: 'PREMIUM PACK (CULTURELOCK)',
      },
    ],
    features: [
      {
        name: 'Cyber-Aware Team',
        starter: { included: true, note: 'Available' },
        pro: { included: true, note: 'Available' },
        premium: { included: true, note: 'Available' },
      },
      {
        name: 'Human Firewall Development Kit',
        starter: { included: false, note: '--' },
        pro: { included: true, note: 'Available' },
        premium: { included: true, note: 'Available' },
      },
      {
        name: 'Cyber Culture Transformation Suite',
        starter: { included: false, note: '--' },
        pro: { included: false, note: '--' },
        premium: { included: true, note: 'Available' },
      },
      {
        name: 'Customised Cybersecurity Awareness Training Services',
        starter: { included: true, note: 'Basic' },
        pro: { included: false, note: '--' },
        premium: { included: true, note: 'Role + Risk-Based' },
      },
      {
        name: 'Onboarding and Continuous Learning Programs',
        starter: { included: true, note: 'Basic' },
        pro: { included: false, note: '--' },
        premium: { included: true, note: 'Role + Risk-Based' },
      },
      {
        name: 'Phishing Simulations',
        starter: { included: true, note: '2/year' },
        pro: { included: true, note: '4/year' },
        premium: { included: true, note: '6/year + Custom Scenarios' },
      },
      {
        name: 'Cyber Hygiene Essentials',
        starter: { included: true, note: 'Available' },
        pro: { included: true, note: 'Available' },
        premium: { included: true, note: 'Deep Dive' },
      },
      {
        name: 'Executive Cybersecurity Briefing',
        starter: { included: true, note: '1/year' },
        pro: { included: true, note: '2/year' },
        premium: { included: true, note: '4/year' },
      },
      {
        name: 'Microlearning Campaigns',
        starter: { included: false, note: '--' },
        pro: { included: true, note: 'Monthly' },
        premium: { included: true, note: 'Monthly + Engagement Tracking' },
      },
      {
        name: 'Cybersecurity Champions Program',
        starter: { included: false, note: '--' },
        pro: { included: true, note: 'Launch Kit' },
        premium: { included: true, note: 'Launch + Coaching' },
      },
      {
        name: 'Measurement and Reporting (Reporting Dashboard)',
        starter: { included: false, note: '--' },
        pro: { included: true, note: 'Basic Analytics' },
        premium: { included: true, note: 'Advanced Behaviour Analytics' },
      },
      {
        name: 'Behavioural and Cultural Change Services (Security Culture Assessment)',
        starter: { included: false, note: '--' },
        pro: { included: false, note: '--' },
        premium: { included: true, note: 'Full Culture and Behaviour Assessment and Review' },
      },
      {
        name: 'Crisis Simulation Workshops',
        starter: { included: false, note: '--' },
        pro: { included: false, note: '--' },
        premium: { included: true, note: 'Incident Response Training' },
      },
      {
        name: 'Custom Content Creation (Video/Docs/Posters)',
        starter: { included: false, note: '--' },
        pro: { included: true, note: 'Templates' },
        premium: { included: true, note: 'Fully Branded' },
      },
      {
        name: 'Cyber Maturity Roadmap',
        starter: { included: false, note: '--' },
        pro: { included: false, note: '--' },
        premium: { included: true, note: 'Available' },
      },
      {
        name: 'Policy Development and Review/Consulting',
        starter: { included: true, note: 'Two-time' },
        pro: { included: true, note: 'Four-time' },
        premium: { included: true, note: 'Ongoing' },
      },
      {
        name: 'Consulting and Advisory Services (Strategy Support and Advisory)',
        starter: { included: true, note: 'Email' },
        pro: { included: true, note: 'Email + 2x Calls/Year' },
        premium: { included: true, note: 'Dedicated Consultant (Quarterly Sessions)' },
      },
    ],
    bonuses: [
      'First month free on annual plans ($99 setup and commitment fee only, Non-refundable)',
      'Referral bonus: $100 credit for both parties if you refer someone to us.',
      'Bundle Service Tiers + Add-ons = 10% off for both',
    ],
    checkIcon: '/images/Package-Checked.svg',
    backgroundImage: '/images/world_map.svg',
  },
  pricingStrategy: {
    subtitle: 'SERVICES',
    title: 'Pricing Strategy For Our Services',
    note: 'Our Guiding Principles:',
    bullets: [
      {
        title: 'Value-based pricing:',
        description: 'Value-based pricing aligned with impact and outcomes',
      },
      {
        title: 'Flexible scaling:',
        description: 'Flexible scaling by team size and risk profile',
      },
      {
        title: 'Subscription model:',
        description: 'Bundle discounts for multi-service engagements',
      },
    ],
    monthlyPricing: {
      title: 'Monthly pricing (Based On Team Size 1–50 Employees)',
      headers: {
        tier: 'TIER',
        monthly: 'MONTHLY',
        annual: 'ANNUAL (SAVE ~15%)',
        bestFor: 'BEST FOR',
      },
      rows: [
        {
          tier: 'CyberSpark (Starter)',
          monthly: '$9/month',
          annual: '$119/year',
          bestFor: 'New to training',
        },
        {
          tier: 'HumanShield (Pro)',
          monthly: '$99/month',
          annual: '$299/year',
          bestFor: 'Growing businesses',
        },
        {
          tier: 'CultureLock (Premium)',
          monthly: '$199/month',
          annual: '$499/year',
          bestFor: 'High-risk,  compliance-driven',
        },
      ],
    },
    flashIcon: '/images/flash.svg',
    looper: '/images/looper.svg',
  },

  addonUnique: {
    title: 'Add-On/Unique Value Services',
    services: [
      {
        title: 'Cyber Hygiene Check-ups for Individuals',
        description: '1:1 coaching or assessments for key employees or execs.',
      },
      {
        title: 'Awareness Campaign Kits',
        description: 'Monthly security themes with posters, email templates, and quizzes.',
      },
      {
        title: 'Cybersecurity and Mental Health Sessions',
        description: 'Exploring burnout, vigilance fatigue, and the human toll of cyber threats.',
      },
      {
        title: 'Secure Remote Work Training',
        description: 'Especially valuable for hybrid/remote teams.',
      },
      {
        title: 'Third-Party Risk Awareness',
        description: 'Training staff on evaluating and interacting with vendors securely.',
      },
      {
        title: 'Compliance-Focused Training Modules',
        description: 'Aligning to ISO 27001, NIST, GDPR, ACSC Essential Eight, etc.',
      },
    ],
    pricingNote:
      'Add-on/Unique Value Services: $10 - $20 per additional employee per month after the 50-person base.',
    flashIcon: '/images/flash.svg',
    backgroundBinary: '/images/binary.svg',
  },
  addOns: {
    title: 'Add-Ons',
    services: [
      {
        title: 'Extra Phishing Simulations',
        price: '$50 each',
      },
      {
        title: 'Executive Cybersecurity Training/Coaching',
        price: '$50 each',
      },
      {
        title: 'Branded Training Video',
        price: '$200 (one-off per Module)',
      },
      {
        title: 'Crisis Simulation Workshop/Webinar',
        price: '$500 (per event)',
      },
      {
        title: 'Unique Value Services Workshop/Webinar',
        price: '$600 (per event)',
      },
      {
        title: 'Cybersecurity Policy Support and Consulting',
        price: '$10/hour',
      },
    ],
    plusIcon: '/images/Plus.svg',
    chatbotIcon: '/images/chatbot.svg',
  },

  footerCta: {
    title: 'Ready to get started?',
    subtitle: 'Book a free strategy call',
    email: 'info@nmcyber.com.au',
  },
};
// Resources Page content
export const RESOURCES_PAGE = {
  resourcesHero: {
    subtitle: 'RESOURCES',
    title: 'NMCYBER Resources',
    description:
      'Welcome to the NMCYBER Resources Hub, your go-to destination for practical, people-first cybersecurity tools and insights. Our mission is to empower small and medium businesses with the knowledge and resources they need to strengthen their human firewall and build lasting cyber resilience.',
    backgroundHero: '/images/hero-bg.svg',
    backgroundBinary: '/images/binary.svg',
  },
  availableResources: {
    title: 'Available Resources',
    resources: [
      {
        id: 1,
        title: 'Cyber Risk Checklists',
        description:
          'Easy-to-use checklists that help you assess and address key cybersecurity risks in your organisation. Perfect for quick audits or internal reviews.',
        icon: '/images/checklist.svg',
        items: [
          'Human Risk Assessment Checklist',
          'Remote Work Cyber Hygiene Checklist',
          'Phishing Readiness Scorecard',
        ],
      },
      {
        id: 2,
        title: 'Awareness Quizzes & Challenges',
        description:
          'Engage your team with interactive cybersecurity quizzes and knowledge checks. Designed to reinforce key concepts in a fun and practical way.',
        icon: '/images/dart.svg',
        items: [
          '5-Minute Phishing Awareness Quiz',
          'Monthly Cyber Behaviour Challenge',
          'Password Strength Self-Test',
        ],
      },
      {
        id: 3,
        title: 'Free Microlearning Series',
        description:
          'Bite-sized training delivered over email or intranet to keep awareness sharp and continuous. Each series focuses on real-world behaviours and common threats.',
        icon: '/images/chapter.svg',
        items: [
          '5-Day Human Firewall Mini-Course',
          'Security Culture Starter Series',
          'Executive Cyber Habits Toolkit',
        ],
      },
      {
        id: 4,
        title: 'Templates & Toolkits',
        description:
          'Plug-and-play tools to help you implement strong cybersecurity practices without needing a technical background.',
        icon: '/images/template.svg',
        items: [
          'Cybersecurity Policy Templates (SMB-friendly)',
          'Incident Response Communication Template',
          'Monthly Security Awareness Campaign Toolkit',
        ],
      },
    ],
  },
  howToUseResources: {
    title: 'How to Use These Resources?',
    description:
      'All ABC-CYBER resources are built to be practical, easy to understand, and ready to deploy. Use them to complement our training programs, kickstart internal conversations, or build new initiatives around human-centric security.',
    shieldIcon: '/images/shield-check.png',
    looperIcon: '/images/looper.svg',
  },
  contactUs: {
    subtitle: 'CONTACT US',
    title: 'Get More from NMCYBER',
    description:
      'Looking for custom resources for your industry, team, or security goals? We offer personalised toolkits, awareness campaigns, and learning paths tailored to your business.',
    email: 'info@nmcyber.com.au',
    ctaText:
      'Contact us at info@nmcyber.com.au to learn more or request access to premium resources.',
    icon: '/images/chatbot.svg',
  },
};
