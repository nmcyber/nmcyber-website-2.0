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
