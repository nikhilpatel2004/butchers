import { ArrowUpRight, Menu, Move3d } from 'lucide-react'
import { HeroScene } from '@/components/hero-scene'

const navItems = ['Menu', 'Our story', 'Visit']

export default function Page() {
  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <nav className="topbar" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="The Bakerly home">
          <span className="wordmark-mark">B</span>
          <span>THE BAKERLY<span className="wordmark-dot">.</span></span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={item}>{item}</a>)}
        </div>
        <button className="menu-button" aria-label="Open menu"><Menu size={19} strokeWidth={1.5} /></button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="Freshly baked pastries, bread, and coffee" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Fresh from the oven, every morning</p>
          <h1>Slow baked.<br /><em>Made joyful.</em></h1>
          <p className="hero-description">Warm bread, golden pastries, and small moments worth gathering around.</p>
          <a className="primary-button" href="#menu">Discover the menu <ArrowUpRight size={17} strokeWidth={1.7} /></a>
        </div>
        <HeroScene />
        <div className="hero-aside" aria-hidden="true"><span className="aside-label">BAKED WITH PATIENCE</span><span className="aside-line" /><span className="aside-index">01 / 01</span></div>
        <div className="hero-corner-note"><Move3d size={14} /> Move your cursor</div>
      </section>

      <section className="intro-section" id="our-story">
        <p className="eyebrow"><span className="eyebrow-line" /> A little bakery with a big heart</p>
        <div className="intro-grid">
          <h2>Good bread<br /><em>brings us closer.</em></h2>
          <p>We bake slowly, source thoughtfully, and leave room for the best part: sharing something warm with someone you love.</p>
        </div>
      </section>

      <section className="collection-section" id="menu">
        <div className="collection-header"><p className="eyebrow">Today at The Bakerly</p><a href="#visit">Visit us <ArrowUpRight size={15} /></a></div>
        <div className="collection-card">
          <div className="card-meta"><span>01 / Daily special</span><span>Honey butter croissant</span></div>
          <div className="card-orb" aria-hidden="true" />
          <div className="card-copy"><p className="eyebrow">Freshly laminated</p><h3>Golden<br />by nature.</h3><span>Made daily · 8:00 am</span></div>
        </div>
      </section>

      <footer className="footer" id="visit"><span>THE BAKERLY<span className="wordmark-dot">.</span></span><span>© 2026 — baked with love</span><span>Instagram&nbsp;&nbsp; / &nbsp;&nbsp;Find us</span></footer>
    </main>
  )
}
