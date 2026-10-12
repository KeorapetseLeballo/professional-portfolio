'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function PortfolioSkills() {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLDivElement>('.skill-chip').forEach((chip, index) => {
        gsap.from(chip, {
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          delay: index * 0.05,
          ease: 'back.out(1.5)',
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const softSkills = [
    'Organisational Skills',
    'Communication',
    'Attention to Detail',
    'Customer Service',
    'Interpersonal Skills',
    'Reliability',
  ]

  const technicalSkills = [
    'Microsoft Office',
    'Data Entry',
    'Computer Literacy',
    'Research & Analysis',
    'Administrative Support',
    'Problem Solving',
  ]

  return (
    <section id="skills" className="section">
      <h2 className="section-title md-typescale-headline-medium">Skills</h2>
      <p className="section-subtitle md-typescale-body-medium">Core competencies and technical abilities</p>

      <div className="skills-container">
        <div className="skill-category">
          <h3 className="subsection-title md-typescale-title-medium">Soft Skills</h3>
          <div ref={skillsRef} className="skill-list">
            {softSkills.map((skill) => (
              <div key={skill} className="skill-chip">
                <md-chip label={skill} />
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3 className="subsection-title md-typescale-title-medium">Technical Skills</h3>
          <div className="skill-list">
            {technicalSkills.map((skill) => (
              <div key={skill} className="skill-chip">
                <md-chip label={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
