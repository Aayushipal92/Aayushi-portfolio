import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { personal } from '../data/portfolio'
import SocialLinks from './SocialLinks'
import './About.css'

const initials = personal.name
  .split(' ')
  .map((part) => part[0])
  .join('')
  .slice(0, 2)
  .toUpperCase()

export default function About() {
  const [ref, inView] = useInView()
  const [photoError, setPhotoError] = useState(false)

  return (
    <section id="about" className="about" ref={ref}>
      <span className="section-label">About</span>

      <h2 className="section-title">
        Professional <span>summary</span>
      </h2>

      <div className="about__layout">
        <motion.div
          className="about__profile card"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          <div className="about__photo-wrap">
            {!photoError ? (
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="about__photo"
                onError={() => setPhotoError(true)}
              />
            ) : (
              <div className="about__photo-fallback" aria-hidden="true">
                {initials}
              </div>
            )}
          </div>
          <div className="about__profile-meta">
            <h3>{personal.name}</h3>
            <p>{personal.title}</p>
            <span className="about__location">{personal.location}</span>
            <SocialLinks className="about__social" size={18} />
          </div>
        </motion.div>

        <motion.div
          className="about__text card"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08, duration: 0.45 }}
        >
          <p>{personal.summary}</p>
          <p>
            Based in {personal.location}, I focus on delivering maintainable code, clear UI
            implementation, and reliable API integration across the full development lifecycle.
          </p>
        </motion.div>

        <div className="about__stats">
          {personal.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="about__stat card"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.4 }}
            >
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
