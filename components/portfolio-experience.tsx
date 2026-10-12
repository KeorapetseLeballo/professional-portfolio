'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function PortfolioExperience() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLDivElement>('.experience-item').forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          x: -30,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="section">
      <h2 className="section-title md-typescale-headline-medium">Experience</h2>
      <p className="section-subtitle md-typescale-body-medium">Professional background and achievements</p>

      <div className="experience-timeline">
        <div className="experience-item">
          <div className="experience-card">
            <div className="experience-header">
              <h3 className="experience-role md-typescale-title-large">Vodacom Call Centre Agent</h3>
              <p className="experience-company md-typescale-body-medium">iSon Experiences</p>
              <p className="experience-period md-typescale-label-medium">April – June 2025</p>
            </div>
            <ul className="experience-highlights">
              <li>Resolved customer complaints and account queries with professionalism and empathy</li>
              <li>Investigated and explained airtime and data deductions, ensuring transparency</li>
              <li>Promoted prepaid products and customer loyalty programmes</li>
              <li>Consistently met performance targets in call handling and customer satisfaction</li>
              <li>Maintained first-call resolution and exceptional customer service standards</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
