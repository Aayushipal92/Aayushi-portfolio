/**
 * Portfolio content — update the REPLACE_* fields with your real links & assets.
 *
 * Required from you:
 * 1. social.github & social.linkedin — your profile URLs
 * 2. projects[].githubUrl — GitHub repo for each project (or leave '' to hide icon)
 * 3. public/images/profile.png.jpeg — your professional headshot
 * 4. public/og-image.jpg — share preview image (1200×630 recommended)
 * 5. .env → VITE_WEB3FORMS_ACCESS_KEY from https://web3forms.com (free)
 * 6. .env → VITE_SITE_URL = your live site URL after deploy (e.g. https://aayushipal.vercel.app)
 */

export const personal = {
  name: 'Aayushi Pal',
  title: 'Web Developer & MERN Stack Developer',
  tagline:
    'Full-stack web developer specializing in responsive applications, REST APIs, and production-ready deployments.',
  heroIntro:
    'I craft responsive, database-driven web apps with the MERN stack — polished frontends, secure APIs, and production-ready deployments.',
  email: 'palaayushi561@gmail.com',
  phone: '+91 9761286822',
  location: 'Bijnor, Uttar Pradesh',
  resumeUrl: '/Aayushi pal.pdf.pdf',
  resumeFileName: 'Aayushi-Pal-Resume.pdf',
  profileImage: '/images/profile.png.jpeg',
  ogImage: '/og-image.jpg',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://aayushipal.vercel.app',
  heroTechTags: ['React.js', 'Node.js', 'MongoDB', 'MySQL', 'REST APIs'],
  summary:
    'Web Developer with one year of professional experience building responsive, database-driven applications. Skilled in React.js, Node.js, Express.js, MongoDB, MySQL, REST APIs, JWT authentication, Socket.IO, Razorpay, and Cloudinary. Experienced in delivering production features from UI implementation through API integration and deployment.',
  social: {
    github: '', // REPLACE: e.g. https://github.com/your-username
    linkedin: '', // REPLACE: e.g. https://linkedin.com/in/your-username
    whatsapp: '919761286822',
  },
  stats: [
    { value: '1+', label: 'Years of Experience' },
    { value: '2', label: 'Production Projects' },
    { value: '10+', label: 'API Integrations Built' },
    { value: '15+', label: 'Technologies' },
  ],
}

export const experience = [
  {
    company: 'Tushyer Technologies Pvt. Ltd',
    role: 'Web Developer',
    period: 'April 2025 — June 2026',
    highlights: [
      'Developed 15+ responsive pages using React.js, Tailwind CSS, and Bootstrap 5.',
      'Integrated REST APIs, JWT login flows, protected routes, and CRUD forms across multiple modules.',
      'Built 5+ dashboard and admin screens for production workflows with role-based access.',
      'Worked with Node.js, Express.js, MongoDB, and MySQL for backend features and data modeling.',
      'Deployed and maintained apps on Vercel and Render with production-ready environment configs.',
      'Used AI-assisted tooling to debug, refactor, and optimize delivery speed without sacrificing quality.',
    ],
  },
]

export const education = [
  {
    school: 'Kunwar Satyavira College of Engineering and Management, Bijnor',
    degree: 'B.Tech — Computer Science & Engineering',
    period: '2021 — 2025',
  },
  {
    school: 'S.M.S Senior Secondary School, Nehtaur, Bijnor',
    degree: 'Intermediate (P.C.M)',
    period: '2020 — 2021',
  },
]

export const certificate = {
  title: 'Java Development Training',
  provider: 'CETPA Pvt. Ltd.',
  duration: '4 weeks',
  topics: ['Core Java', 'OOPs', 'Multithreading', 'Problem Solving'],
}

export const skillCategories = [
  {
    title: 'Programming Languages',
    items: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'SQL', 'Core Java'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Context API', 'Tailwind CSS', 'Bootstrap 5', 'Responsive UI'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Socket.IO', 'CRUD'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'Mongoose', 'MySQL', 'Schema Design', 'Data Modeling'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render', 'Cloudinary', 'Razorpay'],
  },
  {
    title: 'AI & Productivity',
    items: ['ChatGPT', 'GitHub Copilot', 'Cursor AI', 'Gemini'],
  },
]

export const softSkills = [
  'Problem Solving',
  'Team Collaboration',
  'Communication',
  'Fast Learning',
]

/**
 * Tech icons shown in the orbital skills section — must match resume only.
 * First item is the center icon; rest orbit around it.
 */
export const resumeTechStack = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Mongoose',
  'MySQL',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Bootstrap',
  'Socket.IO',
  'Git',
  'GitHub',
  'Vercel',
  'Render',
  'Postman',
  'VS Code',
  'Cloudinary',
  'Razorpay',
  'Java',
]

export const projects = [
  {
    id: 1,
    title: 'ShopVerse',
    featured: true,
    problem: 'Business needed a modern e-commerce storefront with cart, checkout, and admin control.',
    description:
      'Full e-commerce UI with product listings, shopping cart, checkout flow, and admin panel — state managed with React Context API and deployed on Vercel.',
    outcome: 'Live production storefront with end-to-end shopping experience.',
    highlights: [
      'Product catalog, cart, and checkout UI',
      'Admin panel for inventory management',
      'Context API for global state',
    ],
    tags: ['React.js', 'Context API', 'Tailwind CSS', 'Vercel'],
    image: '/images/shopverse .png.png',
    liveUrl: 'https://ecommerce-frontend-navy-psi.vercel.app/products',
    githubUrl: '', // REPLACE: e.g. https://github.com/your-username/shopverse
  },
  {
    id: 2,
    title: 'AstroUniverse',
    featured: true,
    problem: 'Astrology platform required real-time consultations, payments, and multi-role dashboards.',
    description:
      'Real-time astrology consultation platform with role-based dashboards for users, astrologers, and admins — JWT auth, Razorpay payments, Socket.IO chat, and Cloudinary media.',
    outcome: 'Production app with 3 role-based dashboards and live payment + chat flows.',
    highlights: [
      'JWT authentication & protected routes',
      'Razorpay payment integration',
      'Real-time chat via Socket.IO',
    ],
    tags: ['React.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'Razorpay'],
    image: '/projects/astrouniverse.png',
    liveUrl: 'https://astrouniverse-frontend.vercel.app/',
    githubUrl: '', // REPLACE: e.g. https://github.com/your-username/astrouniverse
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

/** Returns true when a URL is set and usable (not placeholder). */
export function isValidLink(url) {
  if (!url || url === '#') return false
  return url.startsWith('http') || url.startsWith('mailto:') || url.startsWith('tel:')
}

export function getWhatsAppUrl(message = 'Hi Aayushi, I came across your portfolio.') {
  const number = personal.social.whatsapp
  if (!number) return ''
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
