import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiOutlineDownload, HiOutlineMail } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { SpiralAnimation, getSpiralCircleProgress } from '@/components/ui/spiral-animation'
import { personal, getWhatsAppUrl } from '../data/portfolio'

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const detailVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const [circleProgress, setCircleProgress] = useState(0)
  const name = personal.name

  const handleSpiralProgress = useCallback((time) => {
    const progress = getSpiralCircleProgress(time)
    setCircleProgress((prev) => Math.max(prev, progress))
  }, [])

  const visibleCount =
    circleProgress <= 0 ? 0 : Math.min(name.length, Math.ceil(circleProgress * name.length))
  const visibleName = name.slice(0, visibleCount)
  const nameScale = 0.35 + circleProgress * 0.65
  const nameOpacity = 0.15 + circleProgress * 0.85
  const detailsVisible = circleProgress >= 0.82
  const whatsappUrl = getWhatsAppUrl()

  return (
    <section id="home" className="hero">
      <div className="hero__spiral">
        <SpiralAnimation onProgress={handleSpiralProgress} />
      </div>

      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__name-block">
          <motion.p
            className="hero__eyebrow"
            initial={false}
            animate={{ opacity: circleProgress > 0.12 ? Math.min((circleProgress - 0.12) * 3, 1) : 0 }}
            transition={{ duration: 0.3 }}
          >
            Hello, I&apos;m
          </motion.p>

          <h1
            className="hero__name"
            style={{
              transform: `scale(${nameScale})`,
              opacity: nameOpacity,
            }}
            aria-label={name}
          >
            <span className="hero__name-text">{visibleName}</span>
            {visibleCount < name.length && (
              <span className="hero__name-cursor" aria-hidden="true">
                |
              </span>
            )}
          </h1>
        </div>

        <motion.div
          className="hero__panel"
          initial={false}
          animate={{
            opacity: detailsVisible ? 1 : 0,
            y: detailsVisible ? 0 : 28,
          }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ pointerEvents: detailsVisible ? 'auto' : 'none' }}
        >
          <motion.p className="hero__role" custom={0} variants={detailVariants} initial="hidden" animate={detailsVisible ? 'show' : 'hidden'}>
            {personal.title}
          </motion.p>

          <motion.p className="hero__intro" custom={1} variants={detailVariants} initial="hidden" animate={detailsVisible ? 'show' : 'hidden'}>
            {personal.heroIntro}
          </motion.p>

          <motion.div className="hero__status" custom={2} variants={detailVariants} initial="hidden" animate={detailsVisible ? 'show' : 'hidden'}>
            <span className="hero__status-dot" />
            Open to opportunities
          </motion.div>

          <motion.div className="hero__actions" custom={3} variants={detailVariants} initial="hidden" animate={detailsVisible ? 'show' : 'hidden'}>
            <a
              href="#projects"
              className="hero__btn hero__btn--primary"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('projects')
              }}
            >
              View Projects
            </a>
            <a
              href={encodeURI(personal.resumeUrl)}
              className="hero__btn hero__btn--ghost"
              download={personal.resumeFileName}
            >
              <HiOutlineDownload size={17} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="hero__btn hero__btn--ghost"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('contact')
              }}
            >
              <HiOutlineMail size={17} />
              Contact
            </a>
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                className="hero__btn hero__btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={17} />
                WhatsApp
              </a>
            )}
          </motion.div>

          <motion.div className="hero__tags" custom={4} variants={detailVariants} initial="hidden" animate={detailsVisible ? 'show' : 'hidden'}>
            {personal.heroTechTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={false}
        animate={{ opacity: detailsVisible ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        onClick={(e) => {
          e.preventDefault()
          scrollTo('about')
        }}
        aria-label="Scroll to about section"
      >
        <HiArrowDown size={20} />
      </motion.a>
    </section>
  )
}
