import { personal } from '../data/portfolio'
import SocialLinks from './SocialLinks'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer__name">{personal.name}</p>
      <p className="footer__tagline">{personal.tagline}</p>
      <SocialLinks className="social-links--footer footer__social" size={18} />
      <p className="footer__copy">
        &copy; {year} {personal.name}. All rights reserved.
      </p>
    </footer>
  )
}
