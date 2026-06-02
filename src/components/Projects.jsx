import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'
import { projects, isValidLink } from '../data/portfolio'

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="projects" ref={ref}>
      <span className="section-label">Portfolio</span>

      <h2 className="section-title">
        Selected <span>projects</span>
      </h2>

      <div className="projects__grid">
        {projects.map((project, i) => {
          const hasGithub = isValidLink(project.githubUrl)

          return (
            <motion.article
              key={project.id}
              className="project-card card"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.45 }}
            >
              <div className="project-card__image-wrap">
                {project.featured && <span className="project-card__badge">Featured</span>}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__image-link"
                  aria-label={`Open ${project.title} live demo`}
                >
                  <img src={encodeURI(project.image)} alt={project.title} loading="lazy" />
                </a>
                <div className="project-card__overlay">
                  <a
                    href={project.liveUrl}
                    className="project-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                  >
                    <HiExternalLink size={18} />
                  </a>
                  {hasGithub && (
                    <a
                      href={project.githubUrl}
                      className="project-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-card__body">
                <h3>
                  {project.liveUrl && project.liveUrl !== '#' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__title-link"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>

                {project.problem && (
                  <p className="project-card__problem">
                    <strong>Problem:</strong> {project.problem}
                  </p>
                )}

                <p>{project.description}</p>

                {project.highlights?.length > 0 && (
                  <ul className="project-card__highlights">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {project.outcome && (
                  <p className="project-card__outcome">
                    <strong>Outcome:</strong> {project.outcome}
                  </p>
                )}

                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
