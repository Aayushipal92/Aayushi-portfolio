import { motion } from 'framer-motion'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { useInView } from '../hooks/useInView'
import { experience } from '../data/portfolio'
import './Experience.css'

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="experience" ref={ref}>
      <span className="section-label">Experience</span>

      <h2 className="section-title">
        Professional <span>experience</span>
      </h2>

      <div className="experience__list">
        {experience.map((job, i) => (
          <motion.article
            key={job.company}
            className="experience-card card"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * i, duration: 0.45 }}
          >
            <div className="experience-card__icon">
              <HiOutlineBriefcase size={24} />
            </div>
            <div className="experience-card__content">
              <div className="experience-card__header">
                <h3>{job.role}</h3>
                <span className="experience-card__period">{job.period}</span>
              </div>
              <p className="experience-card__company">{job.company}</p>
              <ul>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
