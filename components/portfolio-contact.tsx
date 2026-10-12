'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function PortfolioContact() {
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contactRef.current, {
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" className="section">
      <h2 className="section-title md-typescale-headline-medium">Get in Touch</h2>
      <p className="section-subtitle md-typescale-body-medium">Let&apos;s connect and discuss opportunities</p>

      <div ref={contactRef} className="contact-card">
        <div className="contact-content">
          <p className="md-typescale-body-large">
            I&apos;m always interested in hearing about new opportunities and collaborations.
          </p>
          <div className="contact-info">
            <div className="info-item">
              <md-icon className="info-icon">email</md-icon>
              <div className="info-text">
                <p className="md-typescale-label-medium">Email</p>
                <a href="mailto:mpondojulia@gmail.com" className="md-typescale-body-medium">
                  mpondojulia@gmail.com
                </a>
              </div>
            </div>
            <div className="info-item">
              <md-icon className="info-icon">phone</md-icon>
              <div className="info-text">
                <p className="md-typescale-label-medium">Phone</p>
                <a href="tel:+27639420054" className="md-typescale-body-medium">
                  +27 63 942 0054
                </a>
              </div>
            </div>
            <div className="info-item">
              <md-icon className="info-icon">location_on</md-icon>
              <div className="info-text">
                <p className="md-typescale-label-medium">Location</p>
                <p className="md-typescale-body-medium">Johannesburg, Gauteng, South Africa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-actions">
          <md-filled-button href="mailto:mpondojulia@gmail.com">
            <md-icon slot="icon">send</md-icon>
            Send Email
          </md-filled-button>
          <md-outlined-button href="tel:+27639420054">
            <md-icon slot="icon">call</md-icon>
            Call Me
          </md-outlined-button>
        </div>
      </div>
    </section>
  )
}
