'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function PortfolioLanguages() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLDivElement>('.language-item').forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          x: -20,
          duration: 0.5,
          delay: index * 0.1,
          ease: 'power2.out',
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const languages = [
    { name: 'English', level: 'Fluent', proficiency: 100 },
    { name: 'isiXhosa', level: 'Fluent', proficiency: 100 },
    { name: 'isiZulu', level: 'Fluent', proficiency: 100 },
    { name: 'Sesotho', level: 'Intermediate', proficiency: 70 },
  ]

  return (
    <section className="section">
      <h2 className="section-title md-typescale-headline-medium">Languages</h2>
      <p className="section-subtitle md-typescale-body-medium">Multilingual communication abilities</p>

      <div className="language-list">
        {languages.map((lang) => (
          <div key={lang.name} className="language-item">
            <div className="language-header">
              <h3 className="language-name md-typescale-title-small">{lang.name}</h3>
              <p className="language-level md-typescale-label-small">{lang.level}</p>
            </div>
            <div className="language-bar">
              <div className="language-progress" style={{ width: `${lang.proficiency}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
