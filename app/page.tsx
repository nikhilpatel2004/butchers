import { ArrowUpRight, Menu, Move3d } from 'lucide-react'
import { HeroScene } from '@/components/hero-scene'

const navItems = ['Shop', 'About', 'Journal']

export default function Page() {
  return (
    <main className="site-shell">
      <div className="ambient-glow ambient-glow-top" />
      <div className="ambient-glow ambient-glow-bottom" />

      <nav className="topbar" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Astra home">
          <span className="wordmark-mark">A</span>
          <span>ASTRA<span className="wordmark-dot">.</span></span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}
        </div>
        <button className="menu-button" aria-label="Open menu"><Menu size={19} strokeWidth={1.5} /></button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Independent objects for considered spaces</p>
          <h1>Make space<br /><em>for wonder.</em></h1>
          <p className="hero-description">Curated objects with a point of view. Designed to bring a little more feeling into the everyday.</p>
          <a className="primary-button" href="#shop">Explore collection <ArrowUpRight size={17} strokeWidth={1.7} /></a>
        </div>
        <HeroScene />
        <div className="hero-aside" aria-hidden="true">
          <span className="aside-label">SCROLL TO DISCOVER</span>
          <span className="aside-line" />
          <span className="aside-index">01 / 03</span>
        </div>
        <div className="hero-corner-note"><Move3d size={14} /> Move your cursor</div>
      </section>

      <section className="intro-section" id="about">
        <p className="eyebrow"><span className="eyebrow-line" /> The Astra edit</p>
        <div className="intro-grid">
          <h2>Objects that<br /><em>change the room.</em></h2>
          <p>We believe the things around us should do more than fill a space. They should make us pause, smile, and see the familiar differently.</p>
        </div>
      </section>

      <section className="collection-section" id="shop">
        <div className="collection-header"><p className="eyebrow">01 — Featured objects</p><a href="#journal">View all <ArrowUpRight size={15} /></a></div>
        <div className="collection-card">
          <div className="card-meta"><span>01 / 03</span><span>New form, familiar feeling</span></div>
          <div className="card-orb" aria-hidden="true" />
          <div className="card-copy"><p className="eyebrow">The Halo vessel</p><h3>Quietly<br />extraordinary.</h3><span>$128.00</span></div>
        </div>
      </section>

      <footer className="footer" id="journal"><span>ASTRA<span className="wordmark-dot">.</span></span><span>© 2026 — Made for wonder</span><span>Instagram&nbsp;&nbsp; / &nbsp;&nbsp;Contact</span></footer>
    </main>
  )
}
