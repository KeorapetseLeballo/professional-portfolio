'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function PortfolioEducation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLDivElement>('.education-item').forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: index * 0.1,
          ease: 'power2.out',
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const education = [
    {
      degree: 'Higher Certificate in Paralegal Practice',
      school: 'Boston City Campus',
      year: '2024',
    },
    {
      degree: 'Higher Certificate in Fashion Design',
      school: 'Kudi Designs Sewing School',
      year: '2022 - 2023',
    },
    {
      degree: 'National Senior Certificate',
      school: 'Dinwiddie High School',
      year: '2016 - 2020',
    },
  ]

  return (
    <section className="section">
      <h2 className="section-title md-typescale-headline-medium">Education</h2>
      <p className="section-subtitle md-typescale-body-medium">Academic qualifications and training</p>

      <div className="education-list">
        {education.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-card">
              <h3 className="education-degree md-typescale-title-medium">{item.degree}</h3>
              <p className="education-school md-typescale-body-medium">{item.school}</p>
              <p className="education-year md-typescale-label-small">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
