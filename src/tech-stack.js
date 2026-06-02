import {
  SiBootstrap,
  SiCloudinary,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPostman,
  SiRazorpay,
  SiReact,
  SiRender,
  SiSocketdotio,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { resumeTechStack } from './data/portfolio'

/** @typedef {{ name: string, Icon: import('react').ComponentType<{ className?: string, style?: import('react').CSSProperties, 'aria-label'?: string }>, color: string }} TechStackItem */

/** @type {Record<string, TechStackItem>} */
const techIconRegistry = {
  'React.js': { name: 'React.js', Icon: SiReact, color: '#61DAFB' },
  'Node.js': { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  'Express.js': { name: 'Express.js', Icon: SiExpress, color: '#ffffff' },
  MongoDB: { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  Mongoose: { name: 'Mongoose', Icon: SiMongoose, color: '#880000' },
  MySQL: { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  JavaScript: { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  HTML5: { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  CSS3: { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
  'Tailwind CSS': { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  Bootstrap: { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
  'Socket.IO': { name: 'Socket.IO', Icon: SiSocketdotio, color: '#010101' },
  Git: { name: 'Git', Icon: SiGit, color: '#F05032' },
  GitHub: { name: 'GitHub', Icon: SiGithub, color: '#ffffff' },
  Vercel: { name: 'Vercel', Icon: SiVercel, color: '#ffffff' },
  Render: { name: 'Render', Icon: SiRender, color: '#ffffff' },
  Postman: { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
  'VS Code': { name: 'VS Code', Icon: VscVscode, color: '#007ACC' },
  Cloudinary: { name: 'Cloudinary', Icon: SiCloudinary, color: '#3448C5' },
  Razorpay: { name: 'Razorpay', Icon: SiRazorpay, color: '#0C2451' },
  Java: { name: 'Core Java', Icon: SiOpenjdk, color: '#007396' },
}

function buildTechStack(names) {
  return names.map((name) => techIconRegistry[name]).filter(Boolean)
}

const stack = buildTechStack(resumeTechStack)

/** @type {TechStackItem} */
export const techStackCenter = stack[0] ?? techIconRegistry['React.js']

/** @type {TechStackItem[]} */
export const techStackOrbit = stack.slice(1)
