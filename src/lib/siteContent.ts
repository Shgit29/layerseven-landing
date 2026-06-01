export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const serviceItems = [
  {
    title: "SaaS MVP Development",
    description:
      "We turn startup ideas into working products with clean architecture, authentication, dashboards, payments, and deployment.",
    bullets: [
      "MVP planning and feature scoping",
      "Full-stack product development",
      "Authentication, dashboards, payments",
      "Cloud deployment and handoff",
    ],
    accent: "from-teal-500 to-cyan-600",
  },
  {
    title: "AI Integrations",
    description:
      "We add useful AI to your product or business workflow without turning it into a gimmick.",
    bullets: [
      "Chatbots and AI assistants",
      "Document search and RAG",
      "Structured outputs and function calling",
      "AI workflow automation",
    ],
    accent: "from-orange-500 to-amber-600",
  },
  {
    title: "Backend & API Engineering",
    description:
      "We design reliable APIs, databases, queues, and backend systems that can support real users.",
    bullets: [
      "REST API design",
      "PostgreSQL/MongoDB schemas",
      "Auth and permissions",
      "Async jobs and integrations",
    ],
    accent: "from-blue-500 to-cyan-600",
  },
  {
    title: "Maintenance & Support",
    description:
      "We keep your product stable after launch with updates, bug fixes, monitoring, and feature improvements.",
    bullets: [
      "Bug fixes and updates",
      "Performance improvements",
      "Monitoring and reliability",
      "Monthly support retainers",
    ],
    accent: "from-emerald-500 to-teal-600",
  },
];

export const workItems = [
  {
    slug: "healthcare-scheduling-platform",
    title: "Healthcare Scheduling Platform",
    label: "Production Engineering Case Study",
    category: "Healthcare / Backend / Full-Stack Engineering",
    description:
      "Production engineering work across healthcare scheduling workflows, backend APIs, authentication flows, mobile fixes, and reliability improvements.",
    tags: ["TypeScript", "Node.js", "REST APIs", "React Native", "Monorepo", "Staging"],
    cta: "View Case Study",
    palette: "from-slate-900 via-slate-800 to-blue-900",
    problem:
      "Healthcare teams rely on reliable scheduling and coverage workflows. Issues in authentication, calendar behavior, backend logic, or mobile flows can create friction for users and internal teams.",
    solution:
      "Worked across backend APIs, frontend/mobile flows, authentication, calendar behavior, and reliability improvements to support more stable healthcare scheduling workflows.",
    result:
      "Contributed to production systems used for healthcare scheduling and operational management, improving maintainability, reliability, and user experience across key workflows.",
    heroSubtitle:
      "Production engineering work on scheduling, authentication, API, and reliability improvements for a healthcare platform.",
    contributions: [
      "REST API development",
      "Controller/service/model architecture",
      "Authentication and OTP flows",
      "Forgot password flow improvements",
      "Calendar and scheduling bug fixes",
      "Soft-delete and audit-friendly data handling",
      "Frontend/mobile issue resolution",
      "Staging and development testing",
    ],
    whatThisShows:
      "This case study demonstrates LayerSeven's ability to work with production systems, maintain backend workflows, debug real-world issues, and deliver practical improvements across full-stack applications.",
    techStack:
      "TypeScript, Node.js, REST APIs, React Native, Monorepo, Git, staging environments",
    finalCta: "Need reliable engineering support? Book a discovery call.",
  },
  {
    slug: "ai-workflow-system",
    title: "AI Workflow System",
    label: "AI Integration Case Study",
    category: "AI / Internal Tools / Workflow Automation",
    description:
      "An AI-powered workflow system for document search, structured answers, and internal knowledge automation using modern LLM APIs.",
    tags: ["Next.js", "TypeScript", "Node.js", "OpenAI/Claude", "Vector Search", "PostgreSQL"],
    cta: "View Case Study",
    palette: "from-orange-500 via-amber-500 to-teal-600",
    problem:
      "Teams often store important information across PDFs, documents, spreadsheets, chats, and internal tools. Finding the right answer can take time and create repetitive manual work.",
    solution:
      "Designed an AI workflow system that can ingest documents, index content, retrieve relevant context, and generate structured answers using modern LLM APIs.",
    result:
      "Created a reusable AI workflow architecture that can be adapted for internal search, support automation, operations, and knowledge management use cases.",
    heroSubtitle:
      "An AI-powered internal workflow system for document search, structured responses, and business automation.",
    contributions: [
      "Document upload and processing",
      "PDF/text extraction",
      "Embedding-based search",
      "Retrieval-augmented generation",
      "Chat interface",
      "Source-aware answers",
      "Structured JSON outputs",
      "Admin dashboard",
      "Role-based access structure",
    ],
    whatThisShows:
      "This case study demonstrates LayerSeven's ability to build practical AI systems that solve real workflow problems instead of adding AI as a gimmick.",
    techStack:
      "Next.js, TypeScript, Node.js, OpenAI/Claude, PostgreSQL, Vector Search, Tailwind CSS, Docker",
    finalCta: "Want to add useful AI to your workflow? Book a discovery call.",
  },
  {
    slug: "blocktrack",
    title: "BlockTrack Technical Case Study",
    label: "Product Engineering Case Study",
    category: "Supply Chain / Blockchain / SaaS",
    description:
      "How LayerSeven designed a blockchain-powered supply chain traceability platform.",
    tags: ["Next.js", "Node.js", "Express", "PostgreSQL", "Hyperledger Fabric", "Mapbox"],
    cta: "View Case Study",
    palette: "from-teal-600 via-cyan-600 to-blue-700",
    problem:
      "Agricultural and logistics supply chains can suffer from poor visibility, manual tracking, middlemen dependency, and limited trust between stakeholders.",
    solution:
      "Designed a full-stack traceability platform where supply chain actors can create, transfer, and verify product batches through structured workflows and blockchain-backed verification.",
    result:
      "Built a working product prototype demonstrating end-to-end supply chain traceability, role-based workflows, batch tracking, shipment management, and blockchain-backed verification.",
    heroSubtitle:
      "How LayerSeven designed a blockchain-powered supply chain traceability platform.",
    contributions: [
      "Manufacturer, distributor, and retailer roles",
      "Organization and user management",
      "Batch and child-batch tracking",
      "Shipment creation and transfer history",
      "Shipment-batch relationships",
      "Product status tracking",
      "On-chain hash verification",
      "Dashboard for supply chain visibility",
      "Map/location-based views",
    ],
    whatThisShows:
      "This case study demonstrates LayerSeven's ability to model complex business workflows, design full-stack SaaS architecture, and use blockchain practically where traceability matters.",
    techStack:
      "Next.js, Node.js, Express, PostgreSQL, Hyperledger Fabric, Docker, Mapbox, TypeScript",
    finalCta: "Have a complex workflow to digitize? Book a discovery call.",
  },
];

export const productItems = [
  {
    slug: "blocktrack",
    title: "BlockTrack",
    label: "LayerSeven Product",
    status: "In Development",
    category: "Supply Chain / Blockchain / SaaS",
    description:
      "BlockTrack is a blockchain-powered supply chain traceability platform for agriculture, logistics, and product movement.",
    bullets: [
      "Batch and child-batch tracking",
      "Shipment and transfer workflows",
      "Manufacturer, distributor, and retailer roles",
      "Product status and history tracking",
      "Blockchain-backed verification",
      "Supply chain visibility dashboard",
    ],
    tags: ["Next.js", "Node.js", "PostgreSQL", "Hyperledger Fabric", "Docker", "Mapbox"],
    cta: "Explore BlockTrack",
    palette: "from-teal-600 via-cyan-600 to-blue-700",
    heroTitle: "Trace every batch from origin to destination.",
    heroSubtitle:
      "BlockTrack is a supply chain traceability platform in development by LayerSeven Solutions, designed for agriculture, logistics, and businesses where product history matters.",
    heroBadges: ["LayerSeven Product", "In Development", "Supply Chain Traceability"],
    problem:
      "Many agricultural and logistics supply chains depend on manual records, disconnected communication, and limited visibility between manufacturers, distributors, retailers, and other stakeholders. This makes it harder to verify product movement, resolve disputes, and maintain accountability.",
    solution:
      "BlockTrack gives each stakeholder a structured digital workflow to create, transfer, verify, and track product batches across the supply chain.",
    capabilities: [
      {
        title: "Batch Tracking",
        description:
          "Track parent batches, child batches, product grades, weights, packing dates, and lifecycle status.",
      },
      {
        title: "Shipment Workflows",
        description:
          "Create and manage shipments between manufacturers, distributors, retailers, and other actors.",
      },
      {
        title: "Role-Based Access",
        description:
          "Support different stakeholders with organization-based roles and permissions.",
      },
      {
        title: "Blockchain Verification",
        description:
          "Use blockchain-backed hashes to strengthen trust and traceability across product records.",
      },
      {
        title: "Dashboard Visibility",
        description:
          "Provide a clear overview of batch status, shipment activity, and supply chain movement.",
      },
      {
        title: "Location-Aware Views",
        description:
          "Use maps and location data to visualize product movement where relevant.",
      },
    ],
    whoFor: [
      "Agricultural suppliers",
      "Food distributors",
      "Logistics companies",
      "Manufacturers",
      "Retailers",
      "Compliance-heavy supply chains",
    ],
    statusCopy:
      "BlockTrack is currently an in-development LayerSeven product. The platform has been designed and prototyped around real supply chain workflows and is being prepared for pilot-ready deployment.",
    techStack: [
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Hyperledger Fabric",
      "Docker",
      "Mapbox",
      "TypeScript",
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, users, goals, and what needs to be built first.",
    deliverables: ["Project goals", "User context", "Priority risks"],
  },
  {
    number: "02",
    title: "Product Plan",
    description:
      "We define the MVP scope, user flows, technical architecture, timeline, and delivery plan.",
    deliverables: ["Scope outline", "Architecture direction", "Milestone plan"],
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "We develop in milestones with regular updates, testing, and feedback loops.",
    deliverables: ["Working milestones", "Weekly updates", "QA feedback loop"],
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy, monitor, fix issues, and help you improve the product after launch.",
    deliverables: ["Deployment handoff", "Monitoring plan", "Support options"],
  },
];

export const trustPoints = [
  "Registered company in Bahrain",
  "Production software experience",
  "Full-stack product development",
  "Remote-first delivery",
  "Clear weekly updates",
  "Post-launch support available",
];

export const stackItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "OpenAI",
  "Claude",
  "Tailwind CSS",
];

export const partnerItems = [
  {
    name: "Aitina Tech",
    label: "Software partner",
    summary:
      "Part of our trusted network for modern product delivery and technical collaboration.",
  },
  {
    name: "Air IT Labs",
    label: "Vendor / client network",
    summary:
      "Included in our working ecosystem as we build and support practical software systems.",
  },
];

export const credibilityPoints = [
  "Software engineering background",
  "Production experience with healthcare platforms",
  "Experience with TypeScript, React, Node.js, PostgreSQL, Docker, and cloud infrastructure",
  "Focused on practical AI integrations and scalable product architecture",
];

export const projectTypes = [
  "SaaS MVP",
  "AI Integration",
  "Backend/API Development",
  "Website/Web App",
  "Maintenance & Support",
  "BlockTrack / Supply Chain Traceability",
  "Not sure yet",
];

export const budgetOptions = [
  "Under $2k",
  "$2k-$5k",
  "$5k-$10k",
  "$10k+",
  "Not sure yet",
];

export const timelineOptions = ["ASAP", "1-2 months", "3-6 months", "Just exploring"];

export const contactPoints = [
  { label: "Email", value: "hello@layer7solution.com", href: "mailto:hello@layer7solution.com" },
  { label: "Location", value: "Manama, Bahrain", href: "https://maps.google.com/?q=Manama,Bahrain" },
  { label: "Delivery", value: "Remote-first, serving clients globally" },
];

export const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/layerseven" },
  { name: "GitHub", url: "https://github.com/layerseven" },
  { name: "X", url: "https://twitter.com/layerseven" },
];
