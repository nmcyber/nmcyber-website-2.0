export const TITLE_TAILWIND_CLASS = "text-2xl sm:text-2xl md:text-3xl lg:text-4xl"

// Company information
export const COMPANY_INFO = {
  name: "NMCYBER",
  tagline: "Empowering Humans. Protecting Businesses.",
  shortDescription: "Custom Human-Centric Cybersecurity Training for Small and Medium Businesses",
  longDescription: "NMCYBER helps Small and Medium Businesses transform their employees into cyber-aware defenders through custom, human-centric cybersecurity training. We replace boring check-the-box courses with interactive, role-based programs that build real behavioural change, reducing cyber risk at its human source.",
  email: "info@nmcyber.com.au",
  website: "https://nmcyber.com.au",
  phone: "+61-XXX-XXX-XXX", // Replace with actual phone number
}

// Navigation structure
export const MAIN_NAVIGATION = [
  { name: "Company", href: "/company" },
  { name: "About Us", href: "/about-us" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
  { name: "Academy", href: "/academy" },
  { name: "Contact Us", href: "/contact-us" },
]

// Service packages
export const SERVICE_PACKAGES = [
  {
    name: "CyberSpark",
    tagline: "Starter Pack",
    price: "$499",
    frequency: "/month",
    bestFor: "New to training",
    description: "Designed to build basic cybersecurity awareness and create a baseline culture of security. Perfect for SMBs new to cybersecurity training.",
    features: [
      "Foundational Cybersecurity Awareness Training (Customised)",
      "Cyber Hygiene Essentials Training",
      "One Phishing Simulation Campaign",
      "Basic Onboarding Module for New Staff",
      "Awareness Posters and Tips Pack (Digital)"
    ],
    callToAction: "Get Started",
    href: "/packages/cyberspark",
    popular: false
  },
  {
    name: "HumanShield",
    tagline: "Pro Pack",
    price: "$1,199",
    frequency: "/month",
    bestFor: "Growing businesses",
    description: "Designed to strengthen security behaviours and create internal cybersecurity advocates. Perfect for SMBs looking to scale maturity and reduce human-related risks.",
    features: [
      "Full Cybersecurity Awareness Program (Role-Based)",
      "Quarterly Refresher Training",
      "Monthly Microlearning Campaigns",
      "3 Phishing Simulations (per year)",
      "Cybersecurity Champions Program",
      "Behavioural Nudging Toolkit",
      "Risk-Based Employee Profiling",
      "Reporting Dashboard Access"
    ],
    callToAction: "Upgrade Security",
    href: "/packages/humanshield",
    popular: true
  },
  {
    name: "CultureLock",
    tagline: "Premium Pack",
    price: "$2,499",
    frequency: "/month",
    bestFor: "High-risk, compliance-driven",
    description: "Designed to embed security into the organisation's DNA and align with strategic goals. Perfect for High-growth SMBs or those with compliance goals or security leadership buy-in.",
    features: [
      "Security Culture Assessment",
      "Executive Cybersecurity Briefing and Coaching",
      "Custom Video Content (Branded)",
      "Crisis Simulation Workshop (Tabletop Exercise)",
      "Security Policy Consulting (Human-Focused)",
      "Cyber Maturity Roadmap and Strategy Planning",
      "Ongoing Security Culture Campaigns (12-month plan)",
      "Quarterly Analytics + Strategy Reviews"
    ],
    callToAction: "Transform Culture",
    href: "/packages/culturelock",
    popular: false
  }
]

// Key services
export const SERVICES = [
  {
    id: "cybersecurity-awareness-training",
    name: "Cybersecurity Awareness Training",
    description: "Engaging, scenario-based sessions designed to make security second nature for your team. Delivered live, virtually, or as eLearning.",
    features: [
      "Tailored by industry and team roles",
      "Easy-to-understand, non-technical approach",
      "Real-world examples and interactivity"
    ],
    icon: "Shield", // This would correspond to an icon in your Icons component
    href: "/services/cybersecurity-awareness-training"
  },
  {
    id: "phishing-simulation-campaigns",
    name: "Phishing Simulation Campaigns",
    description: "We send mock phishing emails to test awareness, followed by practical micro-training to boost defence.",
    features: [
      "Realistic phishing emails sent to your team",
      "Post-simulation micro-training",
      "Track improvements over time"
    ],
    icon: "Mail", // This would correspond to an icon in your Icons component
    href: "/services/phishing-simulation-campaigns"
  },
  {
    id: "role-based-security-training",
    name: "Role-Based Security Training",
    description: "Tailored content for different departments, from HR to Finance to the C-Suite. Everyone learns what matters most to them.",
    features: [
      "Finance, HR, Customer Support, IT, and more",
      "Executive briefings with strategic insights",
      "Aligns with compliance frameworks"
    ],
    icon: "Users", // This would correspond to an icon in your Icons component
    href: "/services/role-based-security-training"
  },
  {
    id: "cybersecurity-culture-development",
    name: "Cybersecurity Culture Development",
    description: "Transform your organisation with long-term strategies, champion programs, and nudging systems that shift mindsets.",
    features: [
      "Cybersecurity Champions Program",
      "Microlearning and behavior nudges",
      "Long-term cultural change strategy"
    ],
    icon: "Brain", // This would correspond to an icon in your Icons component
    href: "/services/cybersecurity-culture-development"
  }
]

// SEO keywords by page
export const SEO_KEYWORDS = {
  home: [
    "cybersecurity training",
    "human-centric cybersecurity",
    "SMB cybersecurity",
    "security awareness training",
    "employee cyber training",
    "phishing simulation",
    "cybersecurity for small business"
  ],
  services: [
    "cybersecurity services",
    "security awareness programs",
    "phishing testing",
    "role-based cyber training",
    "security culture development"
  ],
  products: [
    "cybersecurity products",
    "phishing simulation platform",
    "cyber awareness toolkit",
    "security training modules",
    "microlearning cybersecurity"
  ],
  about: [
    "cybersecurity consultants",
    "human-centric security experts",
    "SMB security specialists",
    "cybersecurity training company"
  ]
}