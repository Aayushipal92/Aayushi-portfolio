import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { personal, isValidLink, getWhatsAppUrl } from '../data/portfolio'
import './SocialLinks.css'

export default function SocialLinks({ className = '', size = 20, showLabels = false }) {
  const items = [
    {
      href: personal.social.github,
      icon: FaGithub,
      label: 'GitHub',
    },
    {
      href: personal.social.linkedin,
      icon: FaLinkedin,
      label: 'LinkedIn',
    },
    {
      href: getWhatsAppUrl(),
      icon: FaWhatsapp,
      label: 'WhatsApp',
    },
    {
      href: `mailto:${personal.email}`,
      icon: HiOutlineMail,
      label: 'Email',
    },
  ].filter((item) => isValidLink(item.href))

  if (items.length === 0) return null

  return (
    <div className={`social-links ${className}`}>
      {items.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-links__item"
          aria-label={label}
          title={label}
        >
          <Icon size={size} />
          {showLabels && <span>{label}</span>}
        </a>
      ))}
    </div>
  )
}
