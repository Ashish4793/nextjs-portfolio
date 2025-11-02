// 1. Create a file: /lib/projectsData.ts (or .js)

export const projectsBasicInfo = [
  {
    id: 1,
    tag: "CRM SOFTWARE",
    title: "Hortiprise",
    description: "Next Gen Plant CRM",
    gradient:
      "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-600 via-teal-500 to-zinc-800",
  },
  {
    id: 2,
    tag: "BLOGGING APP",
    title: "DRC",
    description: "F1 and motorsport news platform",
    gradient:
      "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-600 via-pink-600 to-amber-50",
  },
  {
    id: 3,
    tag: "E-COM CLONE",
    title: "QuicKart",
    description: "Node.js based e-commerce platform",
    gradient:
      "bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-zinc-500 via-sky-600 to-indigo-200",
  },
  {
    id: 4,
    tag: "PaaS App",
    title: "Weblift",
    description: "Automated web app deployment platform",
    gradient:
      "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-700 via-pink-50 to-violet-800",
  },
];

export const projectsData = [
  {
    id: 1,
    name: "Hortiprise",
    tag: "CRM APP",
    tagline: "Next Gen Nursery Management CRM Software for Plant Nurseries",
    screenshot: "/assets/images/hortiprise.png",
    description:
      "A comprehensive CRM platform designed specifically for plant nurseries and agricultural businesses. Built with modern web technologies, Hortiprise streamlines nursery operations with intelligent inventory management, automated billing workflows, and real-time monitoring capabilities. The platform features a scalable architecture deployed on Google Cloud Platform, ensuring reliable performance and seamless data management for nursery operations of any scale.",
    features: [
      "RESTful APIs with TypeScript for reliable CRUD operations across multiple modules",
      "Optimized MySQL database schema with Prisma ORM for efficient query performance",
      "Automated subscription billing with Razorpay integration and webhook handling",
      "Real-time transaction lifecycle management and payment tracking",
      "Advanced observability with Grafana, Prometheus, and Loki for centralized metrics and logs",
      "Google Cloud Platform deployment with 99% success rate",
      "Role-based access control and user authentication",
      "Comprehensive admin dashboard for business analytics and reporting",
    ],
    techStack: [
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Prisma ORM", category: "Backend" },
      { name: "MySQL", category: "Database" },
      { name: "Razorpay", category: "Payment" },
      { name: "GCP", category: "Cloud" },
      { name: "Grafana", category: "Monitoring" },
      { name: "Prometheus", category: "Monitoring" },
      { name: "Loki", category: "Monitoring" },
      { name: "Docker", category: "DevOps" },
    ],
    demoLink: "https://hortiprise.com",
    githubLink: "", // Keep empty if private repo
    category: "CRM Software",
    team: "Team Project",
    role: "Software Engineer Intern",
    impact: [
      "Reduced production issue diagnosis time by 40% through observability stack implementation",
      "Achieved 99% deployment success rate on staging environment",
      "Automated billing workflows reducing manual payment tracking significantly",
      "Improved database query performance through optimized schema design",
    ],
  },
  {
    id: 2,
    name: "DesiRacingCo",
    tag: "BLOGGING APP",
    tagline: "F1 and Motorsports News Platform",
    screenshot: "/assets/images/drc.webp",
    gradient: "from-cyan-600/20 to-blue-600/20",
    description:
      "A comprehensive motorsport media platform specifically tailored for Indian audiences, delivering the latest F1 news, race analysis, and motorsport content. Built to engage motorsport enthusiasts with high-quality journalism, user-generated content, and an intuitive reading experience. The platform features a robust editorial system ensuring content accuracy and quality, while maintaining consistent engagement with 600+ weekly unique visitors.",
    features: [
      "Dynamic article publishing system with rich text editor",
      "Real-time motorsport news aggregation and updates",
      "User-submitted content contribution portal",
      "Multi-level editorial review and moderation system",
      "Admin validation workflow to ensure factual accuracy",
      "Content categorization for F1, MotoGP, and other motorsports",
      "SEO-optimized article pages for better discoverability",
      "Responsive design for seamless mobile and desktop experience",
    ],
    techStack: [
      { name: "Node.js", category: "Backend" },
      { name: "Express.js", category: "Backend" },
      { name: "JavaScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "MongoDB", category: "Database" },
      { name: "AWS", category: "Cloud" },
      { name: "AWS S3", category: "Storage" },
      { name: "AWS EC2", category: "Hosting" },
    ],
    demoLink: "https://drc-ijkj.onrender.com/",
    githubLink: "https://github.com/NielRanawat/MotorsportArticleAndNews",
    category: "Blogging Platform",
    duration: "4 months",
    team: "2 Developers",
  },
  {
    id: 3,
    name: "QuicKart",
    tag: "E-COMMERCE CLONE",
    tagline: "Modern Feature-Rich E-Commerce Platform Built with Node.js",
    screenshot: "/assets/images/quickart.png",
    description:
      "A full-featured e-commerce platform built from the ground up with modern web technologies, delivering a complete online shopping experience. QuicKart provides seamless product browsing, intelligent cart management, and secure payment processing through Stripe integration. Deployed using containerized infrastructure on Azure with automated email workflows, the platform ensures high availability and exceptional user experience across all devices.",
    features: [
      "Complete product catalog with advanced search and filtering",
      "Real-time shopping cart management and inventory tracking",
      "Secure payment processing with Stripe webhook integration",
      "Real-time transaction status updates and payment confirmations",
      "Automated transactional emails using Azure Functions",
      "User authentication and order history tracking",
      "Responsive UI built with Tailwind CSS for all device sizes",
      "Dockerized deployment for consistent environment management",
      "Azure VM hosting ensuring high availability and scalability",
    ],
    techStack: [
      { name: "Node.js", category: "Backend" },
      { name: "Express.js", category: "Backend" },
      { name: "JavaScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "MongoDB", category: "Database" },
      { name: "Stripe", category: "Payment" },
      { name: "Docker", category: "DevOps" },
      { name: "Azure VM", category: "Cloud" },
      { name: "Azure Functions", category: "Cloud" },
    ],
    demoLink: "https://quickart.onrender.com",
    githubLink: "https://github.com/Ashish4793/quickart",
    category: "E-Commerce",
    duration: "3 month",
    team: "Solo Project",
    highlights: [
      "Full-stack e-commerce implementation with modern architecture",
      "Secure payment workflows with Stripe webhooks",
      "Containerized deployment using Docker",
      "Serverless email automation with Azure Functions",
      "Responsive design ensuring optimal UX across devices",
    ],
  },
  {
  id: 4,
  name: "WebLift",
  tag: "PaaS PLATFORM",
  tagline: "Platform-as-a-Service for Automated Web Application Deployment",
  screenshot: "/assets/images/weblift.png",
  gradient: "from-orange-600/20 to-red-600/20",
  description:
    "A sophisticated Platform-as-a-Service (PaaS) solution that automates the deployment and hosting of web applications across multiple frameworks. WebLift provides isolated AWS EC2 environments for each project with intelligent traffic routing through custom subdomains. The platform features real-time build monitoring, automated NGINX configuration, and standardized deployment workflows, making it effortless to deploy Node.js, React, Next.js, and other modern web applications with enterprise-grade infrastructure.",
  features: [
    "Multi-framework support (Node.js, React, Next.js, and more)",
    "Automatic provisioning of isolated AWS EC2 environments per project",
    "Dynamic NGINX configuration for intelligent traffic routing",
    "Custom subdomain allocation for each deployed application",
    "Standardized port allocation and management system",
    "Real-time log streaming using Redis Pub/Sub and Socket.io",
    "Interactive UI for monitoring build and deployment progress",
    "Automated deployment pipelines with zero-downtime releases",
    "Centralized project management dashboard"
  ],
  techStack: [
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "Cache/Pub-Sub" },
    { name: "Socket.io", category: "Real-time" },
    { name: "AWS EC2", category: "Cloud" },
    { name: "AWS SSM", category: "Cloud" },
    { name: "NGINX", category: "Web Server" },
    { name: "Docker", category: "DevOps" }
  ],
  demoLink: "https://weblift.live",
  githubLink: "https://github.com/Ashish4793/weblift-app",
  category: "Platform-as-a-Service",
  duration: "2 months",
  team: "Solo Project",
}
];

// Helper function to get project by ID
export function getProjectById(id: number) {
  return projectsData.find((project) => project.id === id);
}

// Helper function to get all project IDs (for static generation)
export function getAllProjectIds() {
  return projectsData.map((project) => project.id);
}
