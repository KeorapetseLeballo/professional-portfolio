'use client'

import { ThemeToggle } from './theme-toggle'
import Image from 'next/image'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#top" className="wordmark md-typescale-title-large" aria-label="Julia Mpondo home">
          <span className="wordmark-initials">
            <Image 
              src="/profile.jpg" 
              alt="Julia Mpondo" 
              width={38} 
              height={38}
              className="profile-image"
            />
          </span>
          <span className="wordmark-text">Julia Mpondo</span>
        </a>
        <nav className="site-nav md-typescale-label-large" aria-label="Main">
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
