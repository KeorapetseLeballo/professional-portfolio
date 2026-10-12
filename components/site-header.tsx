'use client'

import { ThemeToggle } from './theme-toggle'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#top" className="wordmark md-typescale-title-large" aria-label="Julia Mpondo home">
          <span className="wordmark-initials">JM</span>
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
