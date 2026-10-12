'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function PortfolioHero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Fade in title with stagger
      if (titleRef.current) {
        tl.from(titleRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
        }, 0)
      }

      // Fade in subtitle
      if (subtitleRef.current) {
        tl.from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 12,
            duration: 0.6,
            ease: 'power2.out',
          },
          0.2
        )
      }

      // Fade in CTA
      if (ctaRef.current) {
        tl.from(
          ctaRef.current,
          {
            opacity: 0,
            y: 12,
            duration: 0.6,
            ease: 'power2.out',
          },
          0.4
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="top" className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Professional Portfolio</p>
        <h1 ref={titleRef} className="hero-title md-typescale-display-large">
          Julia Mpondo
        </h1>
        <p ref={subtitleRef} className="hero-subtitle md-typescale-body-large">
          Customer Service Professional | Administrative Specialist. Passionate about delivering exceptional service, supporting diverse teams, and growing within dynamic organizations.
        </p>
        <div ref={ctaRef} className="hero-actions">
          <md-filled-button href="#experience">View Experience</md-filled-button>
          <md-outlined-button href="mailto:mpondojulia@gmail.com">Get in Touch</md-outlined-button>
        </div>
      </div>
    </section>
  )
}
