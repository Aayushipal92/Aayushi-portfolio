import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useTheme } from '../context/ThemeContext'
import { useInView } from '../hooks/useInView'
import { personal, isValidLink, softSkills } from '../data/portfolio'
import { techStackCenter, techStackOrbit } from '../tech-stack'
import './Skills.css'

const orbitCount = 3
const orbitGap = 8
const iconsPerOrbit = Math.ceil(techStackOrbit.length / orbitCount)

const orbitAnimations = [
  'stack-orbit stack-orbit--12',
  'stack-orbit stack-orbit--18',
  'stack-orbit stack-orbit--24',
]

const counterOrbitAnimations = [
  'stack-orbit-counter stack-orbit-counter--12',
  'stack-orbit-counter stack-orbit-counter--18',
  'stack-orbit-counter stack-orbit-counter--24',
]

function resolveIconColor(color, isDark) {
  if (color === '#ffffff') {
    return isDark ? '#ffffff' : '#0f172a'
  }
  if (color === '#010101') {
    return isDark ? '#f0f2f5' : '#010101'
  }
  return color
}

function StackTooltip({ name, visible }) {
  return (
    <span className={`stack-tooltip${visible ? ' stack-tooltip--visible' : ''}`} role="tooltip">
      {name}
    </span>
  )
}

function StackIcon({ item, isDark, name, active, onActivate, onDeactivate }) {
  const Icon = item.Icon
  const color = resolveIconColor(item.color, isDark)

  return (
    <div
      className={`stack-icon-hit${active ? ' stack-icon-hit--active' : ''}`}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      tabIndex={0}
      aria-label={name}
    >
      <div className="stack-icon">
        <Icon className="stack-icon__svg" style={{ color }} aria-hidden="true" />
      </div>
      <StackTooltip name={name} visible={active} />
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()
  const { isDark } = useTheme()
  const [activeSkill, setActiveSkill] = useState(null)
  const center = techStackCenter
  const CenterIcon = center.Icon
  const githubUrl = personal.social.github
  const centerColor = resolveIconColor(center.color, isDark)
  const orbitPaused = activeSkill !== null

  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.div
        className="stack-feature card"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="stack-feature__content">
          <span className="section-label">Skills</span>
          <h2 className="stack-feature__title">
            Technologies I <span>work with</span>
          </h2>
          <p className="stack-feature__desc">
            Full-stack toolkit spanning React, Node.js, databases, real-time APIs, and deployment
            — the same stack behind ShopVerse and AstroUniverse.
          </p>
          <div className="stack-feature__actions">
            <Button href="#projects" onClick={scrollToProjects}>
              View Projects
            </Button>
            {isValidLink(githubUrl) && (
              <Button variant="outline" href={githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </Button>
            )}
          </div>
        </div>

        <div className="stack-feature__visual">
          <div className="stack-orbit-clip">
            <div className={`stack-orbit-stage${orbitPaused ? ' stack-orbit-stage--paused' : ''}`}>
            <div
              className={`stack-orbit-center${activeSkill === center.name ? ' stack-orbit-center--active' : ''}`}
              onMouseEnter={() => setActiveSkill(center.name)}
              onMouseLeave={() => setActiveSkill(null)}
              onFocus={() => setActiveSkill(center.name)}
              onBlur={() => setActiveSkill(null)}
              tabIndex={0}
              aria-label={center.name}
            >
              <CenterIcon
                className="stack-orbit-center__icon"
                style={{ color: centerColor }}
                aria-hidden="true"
              />
              <StackTooltip name={center.name} visible={activeSkill === center.name} />
            </div>

            {[...Array(orbitCount)].map((_, orbitIdx) => {
              const sizeRem = 12 + orbitGap * (orbitIdx + 1)
              const halfRem = sizeRem / 2
              const angleStep = (2 * Math.PI) / iconsPerOrbit
              const slice = techStackOrbit.slice(
                orbitIdx * iconsPerOrbit,
                orbitIdx * iconsPerOrbit + iconsPerOrbit,
              )

              return (
                <div
                  key={orbitIdx}
                  className={`stack-orbit-ring ${orbitAnimations[orbitIdx]}`}
                  style={{
                    width: `${sizeRem}rem`,
                    height: `${sizeRem}rem`,
                    left: `calc(50% - ${halfRem}rem)`,
                    top: `calc(50% - ${halfRem}rem)`,
                  }}
                  aria-hidden="true"
                >
                  {slice.map((item, iconIdx) => {
                    const angle = iconIdx * angleStep
                    const x = 50 + 50 * Math.cos(angle)
                    const y = 50 + 50 * Math.sin(angle)
                    const isActive = activeSkill === item.name

                    return (
                      <div
                        key={item.name}
                        className={`stack-orbit-node ${counterOrbitAnimations[orbitIdx]}${isActive ? ' stack-orbit-node--active' : ''}`}
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        <StackIcon
                          item={item}
                          isDark={isDark}
                          name={item.name}
                          active={isActive}
                          onActivate={() => setActiveSkill(item.name)}
                          onDeactivate={() => setActiveSkill(null)}
                        />
                      </div>
                    )
                  })}
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="skills__soft card"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.25 }}
      >
        <h3>Professional strengths</h3>
        <div className="skills__soft-list">
          {softSkills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
