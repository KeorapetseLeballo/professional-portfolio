import { SiteHeader } from '@/components/site-header'
import { PortfolioHero } from '@/components/portfolio-hero'
import { PortfolioExperience } from '@/components/portfolio-experience'
import { PortfolioSkills } from '@/components/portfolio-skills'
import { PortfolioEducation } from '@/components/portfolio-education'
import { PortfolioLanguages } from '@/components/portfolio-languages'
import { PortfolioContact } from '@/components/portfolio-contact'
import './home.css'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="page">
        <PortfolioHero />
        <PortfolioExperience />
        <PortfolioSkills />
        <div className="two-column-sections">
          <PortfolioEducation />
          <PortfolioLanguages />
        </div>
        <PortfolioContact />
      </main>
      <footer className="site-footer md-typescale-body-small">
        <span>Julia Mpondo</span>
        <span>Johannesburg, Gauteng</span>
      </footer>
    </>
  )
}

export const metadata = {
  title: 'Julia Mpondo | Customer Service & Administrative Professional',
  description: 'Professional portfolio for Julia Mpondo, a customer service and administrative professional based in Johannesburg.',
}

