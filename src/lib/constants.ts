// Navigation Data for CarpacSoft Website

export const productMenuItems = {
  jamaConnect: {
    title: "CARPACSOFT",
    items: [
      { label: "Product Overview", href: "/product/overview" },
      { label: "Features", href: "/product/features" },
      { label: "Integrations", href: "/product/integrations" },
      { label: "Pricing and Licensing", href: "/product/pricing" },
      { label: "Why CarpacSoft?", href: "/product/why-jama" },
      { label: "Success Programs", href: "/product/success-programs" },
      { label: "Trial", href: "/trial" },
    ],
  },
  compare: {
    title: "COMPARE",
    items: [
      { label: "IBM DOORS", href: "/compare/ibm-doors" },
      { label: "IBM DOORS Next", href: "/compare/ibm-doors-next" },
      { label: "Jira", href: "/compare/jira" },
      { label: "MS Word & Excel Documents", href: "/compare/ms-word-excel" },
      { label: "Polarion", href: "/compare/polarion" },
      { label: "PTC Codebeamer and Integrity/RV&S", href: "/compare/ptc-codebeamer" },
    ],
  },
};

export const solutionsMenuItems = {
  byIndustry: {
    title: "SOLUTION BY INDUSTRY",
    items: [
      { label: "AECO", href: "/solutions/aeco" },
      { label: "Aerospace and Defense", href: "/solutions/aerospace-defense" },
      { label: "Automotive", href: "/solutions/automotive" },
      { label: "Oil & Gas", href: "/solutions/oil-and-gas" },
      { label: "Financial Services and Insurance", href: "/solutions/financial-services" },
      { label: "Government", href: "/solutions/government" },
      { label: "Industrial Manufacturing & Machinery, Consumer Electronics, and Energy", href: "/solutions/industrial-manufacturing" },
      { label: "Medical Device & Life Sciences", href: "/solutions/medical-device-life-sciences" },
      { label: "Semiconductors", href: "/solutions/semiconductors" },
    ],
  },
  byFunction: {
    title: "SOLUTION BY FUNCTION",
    items: [
      { label: "Business Analysts", href: "/solutions/business-analysts" },
      { label: "Engineering Leadership", href: "/solutions/engineering-leadership" },
      { label: "Risk Management", href: "/solutions/risk-management" },
      { label: "Software Development", href: "/solutions/software-development" },
      { label: "Systems Engineering", href: "/solutions/systems-engineering" },
      { label: "Test Management", href: "/solutions/test-management" },
    ],
  },
  byInitiative: {
    title: "SOLUTIONS BY INITIATIVE",
    items: [
      { label: "Agile", href: "/solutions/agile" },
      { label: "Artificial Intelligence", href: "/solutions/artificial-intelligence" },
      { label: "Co-Development", href: "/solutions/co-development" },
      { label: "Digital Engineering", href: "/solutions/digital-engineering" },
      { label: "Digital Thread", href: "/solutions/digital-thread" },
      { label: "MBSE", href: "/solutions/mbse" },
      { label: "Requirements Management", href: "/solutions/requirements-management" },
      { label: "Requirements Traceability", href: "/solutions/requirements-traceability" },
    ],
  },
};

export const companyMenuItems = {
  companyInfo: {
    title: "COMPANY INFORMATION",
    items: [
      { label: "About Us", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "Partners", href: "/company/partners" },
      { label: "Contact Us", href: "/company/contact" },
    ],
  },
  newsEvents: {
    title: "NEWS AND EVENTS",
    items: [
      { label: "Events", href: "/company/events" },
      { label: "Webinars", href: "/company/webinars" },
      { label: "Press Room", href: "/company/press" },
    ],
  },
};

export const supportMenuItems = {
  learnWithUs: {
    title: "LEARN WITH US",
    items: [
      { label: "Events", href: "/company/events" },
      { label: "Webinars", href: "/company/webinars" },
      { label: "Blog", href: "/blog" },
      { label: "Resource Library", href: "/resources/library" },
      { label: "Discovery Center", href: "/resources/discovery" },
      { label: "Guide to Requirements Management and Traceability", href: "/resources/guide" },
    ],
  },
  productSupport: {
    title: "PRODUCT SUPPORT",
    items: [
      { label: "Community", href: "/resources/community" },
      { label: "Product Demos", href: "/resources/library" },
      { label: "Success Programs", href: "/product/success-programs" },
      { label: "Support", href: "/resources/support" },
    ],
  },
};

export const footerLinks = {
  jamaConnect: [
    { label: "Product Overview", href: "/product/overview" },
    { label: "Features", href: "/product/features" },
    { label: "Integrations", href: "/product/integrations" },
    { label: "Pricing", href: "/product/pricing" },
    { label: "Free Trial", href: "/trial" },
  ],
  company: [
    { label: "About Us", href: "/company/about" },
    { label: "Careers", href: "/company/careers" },
    { label: "Contact Us", href: "/company/contact" },
    { label: "Partners", href: "/company/partners" },
    { label: "Press Room", href: "/company/press" },
  ],
  educationSupport: [
    { label: "Blog", href: "/blog" },
    { label: "Resource Library", href: "/resources/library" },
    { label: "Community", href: "/resources/community" },
    { label: "Support Center", href: "/resources/support" },
    { label: "Documentation", href: "/resources/docs" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Security", href: "/security" },
  ],
};

export const testimonials = [
  {
    quote: "CarpacSoft has transformed how we manage requirements across our global teams. The traceability features are unmatched.",
    author: "Sarah Chen",
    title: "VP of Engineering",
    company: "MedTech Innovations",
    image: "/placeholder.svg",
  },
  {
    quote: "We reduced our compliance documentation time by 60% after implementing CarpacSoft. It's been a game-changer for our FDA submissions.",
    author: "Michael Rodriguez",
    title: "Quality Director",
    company: "BioDevice Corp",
    image: "/placeholder.svg",
  },
  {
    quote: "The live traceability features help us catch issues before they become expensive problems downstream.",
    author: "Emily Thompson",
    title: "Systems Engineering Lead",
    company: "AeroSystems Inc",
    image: "/placeholder.svg",
  },
];

export const features = [
  {
    title: "Requirements Management",
    description: "Capture, define, and manage requirements with full traceability throughout the product lifecycle.",
    icon: "FileText",
  },
  {
    title: "Live Traceability™",
    description: "See real-time impact analysis and maintain complete visibility across all project artifacts.",
    icon: "GitBranch",
  },
  {
    title: "Risk Management",
    description: "Identify, assess, and mitigate risks with integrated risk analysis and FMEA support.",
    icon: "Shield",
  },
  {
    title: "Test Management",
    description: "Plan, execute, and track test cases with full traceability to requirements.",
    icon: "CheckCircle",
  },
  {
    title: "Review & Collaboration",
    description: "Streamline reviews with in-context comments, @mentions, and approval workflows.",
    icon: "Users",
  },
  {
    title: "Compliance & Audit",
    description: "Meet regulatory requirements with electronic signatures, audit trails, and compliance reports.",
    icon: "ClipboardCheck",
  },
];

export const awards = [
  { name: "G2 Leader 2024", image: "/placeholder.svg" },
  { name: "Gartner Peer Insights", image: "/placeholder.svg" },
  { name: "TrustRadius Top Rated", image: "/placeholder.svg" },
  { name: "Capterra Best Value", image: "/placeholder.svg" },
];

export const partnerLogos = [
  "Collins Aerospace",
  "Deloitte",
  "ABIOMED",
  "Siemens",
  "Honeywell",
  "Boston Scientific",
];



