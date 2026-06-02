import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { education, certificate } from '../data/portfolio'

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section id="education" className="education" ref={ref}>
      <span className="section-label">Education</span>

      <h2 className="section-title">
        Academic <span>background</span>
      </h2>

      <div className="education__grid">
        {education.map((item, i) => (
          <motion.div
            key={item.school}
            className="education-card card"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 * i }}
          >
            <span className="education-card__period">{item.period}</span>
            <h3>{item.degree}</h3>
            <p className="education-card__school">{item.school}</p>
          </motion.div>
        ))}

        <motion.div
          className="education-card education-card--cert card"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <span className="education-card__period">{certificate.duration}</span>
          <h3>{certificate.title}</h3>
          <p className="education-card__school">{certificate.provider}</p>
          <div className="education-card__tags">
            {certificate.topics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
