'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Heart, MapPin, Menu, Search, ShoppingBag, Wheat, X } from 'lucide-react'

const bakeryImage = '/bakery-hero.png'
const productImage = '/bakery-products.png'
const categoryImage = '/bakery-categories.png'
const galleryImage = '/bakery-gallery.png'

const products = [
  { name: 'Sourdough Bread', price: '₹120', position: '0% 42%' },
  { name: 'Butter Croissant', price: '₹80', position: '28% 30%' },
  { name: 'Chocolate Muffin', price: '₹70', position: '53% 35%' },
  { name: 'Choco Chip Cookies', price: '₹60', position: '82% 35%' },
]

const categories = [
  { name: 'Whole Grain', note: 'Good for your heart', position: '0% 62%' },
  { name: 'Fresh Pastries', note: 'Naturally delicious', position: '52% 52%' },
  { name: 'Sandwiches', note: 'Fresh & filling', position: '100% 58%' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [bagCount, setBagCount] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [cursor, setCursor] = useState({ x: -100, y: -100, label: 'fresh' })

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      setCursor({ x: event.clientX, y: event.clientY, label: target.closest('a, button, article')?.getAttribute('data-cursor') || 'fresh' })
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  function subscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <main className="bakery-site">
      <div className={`bakery-cursor ${cursor.label !== 'fresh' ? 'is-active' : ''}`} style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} aria-hidden="true"><Wheat size={17} /><span>{cursor.label}</span></div>
      <header className="site-header">
        <a data-cursor="home" className="brand" href="#top" aria-label="The Butcher's Table home"><Wheat size={28} strokeWidth={1.4} /><span>The<br /><strong>Butcher&apos;s Table</strong></span></a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Primary navigation">
          {['Home', 'Products', 'Our Story', 'Locations', 'Contact'].map((item) => <a key={item} href={`#${item === 'Home' ? 'top' : item.toLowerCase().replace(' ', '-')}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <div className="header-actions"><button aria-label="Search" onClick={() => setSearchOpen(!searchOpen)}><Search size={20} /></button><button className="bag-button" aria-label={`Shopping bag, ${bagCount} items`} onClick={() => setSelectedProduct(bagCount ? 'Your bag is ready for checkout.' : 'Your bag is empty. Add a favourite to begin.') }><ShoppingBag size={20} />{bagCount > 0 && <span>{bagCount}</span>}</button><button className="mobile-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-bg" style={{ backgroundImage: `url(${bakeryImage})` }} />
        <div className="hero-shade" />
        <div className="hero-content"><p className="small-label">Handcrafted every morning</p><h1>Freshly Baked<br /><em>Happiness</em></h1><p className="hero-text">Handcrafted with love,<br />just for you.</p><a className="pill-button light" href="#products">Shop Now <ArrowRight size={16} /></a></div>
        <div className="hero-scroll">Scroll to explore <span /></div>
      </section>

      <div className="promise-bar"><span><Wheat /> Freshly Baked Daily</span><i /><span>♨ Premium Ingredients</span><i /><span>◌ No Artificial Preservatives</span><i /><span><Heart fill="currentColor" /> Made with Love</span></div>

      <section className="cream-section products-section" id="products"><div className="section-heading centered"><p className="kicker">Our favourites</p><h2>Not just bread, but<br /><em>little moments of joy</em></h2></div><div className="product-grid">{products.map((product, index) => <article data-cursor="taste" className="product-card" key={product.name} tabIndex={0} onClick={() => setSelectedProduct(product.name)} onKeyDown={(event) => event.key === 'Enter' && setSelectedProduct(product.name)}><div className="product-photo" style={{ backgroundImage: `url(${productImage})`, backgroundPosition: index === 0 ? '0% 0%' : index === 1 ? '100% 0%' : index === 2 ? '0% 100%' : '100% 100%' }} /><h3>{product.name}</h3><p>{product.price}</p><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><button className="add-button" onClick={(event) => { event.stopPropagation(); setBagCount((count) => count + 1) }}>Add to bag</button></article>)}</div><a className="pill-button dark" href="#menu">View All Products <ArrowRight size={16} /></a></section>

      <section className="story-section" id="our-story"><div className="story-copy"><p className="kicker">Our story</p><h2>Everyone&apos;s<br />welcome at<br /><em>our table</em></h2><p>We started The Butcher&apos;s Table with a simple belief — good food brings people together. From our kitchen to your table, every bite is made with fresh ingredients, care and love.</p><a className="pill-button light" href="#locations">Our Story <ArrowRight size={16} /></a></div><div className="story-photo" style={{ backgroundImage: `url(${bakeryImage})` }} /><div className="story-note">Real Ingredients<br /><em>Better Moments</em></div></section>

      <section className="cream-section category-section" id="menu"><div className="section-heading centered"><h2>Meals that&apos;ll make<br /><em>you look good</em></h2><p>Healthy choices. Happier you.</p><a className="pill-button red" href="#contact">Explore Menu <ArrowRight size={16} /></a></div><div className="category-grid">{categories.map((category, index) => <article key={category.name}><div className="category-photo" style={{ backgroundImage: `url(${categoryImage})`, backgroundPosition: index === 0 ? '0% center' : index === 1 ? '50% center' : '100% center' }} /><h3>{category.name}</h3><p>{category.note}</p></article>)}</div></section>

      <section className="values-section"><div className="value-card gold"><Wheat /><h3>Our Promise</h3><p>We use the finest ingredients, traditional recipes and a lot of love to bring you the best baked goods, every day.</p></div><div className="jar-mark">✦<br /><span>fresh daily</span></div><div className="value-card red"><Heart /><h3>Made with Love</h3><p>Because every loaf, cookie and pastry has a story — and it starts with care.</p></div></section>

      <section className="locations-section" id="locations"><div><p className="kicker">Find your nearest table</p><h2>Find the Bakery<br /><em>near you</em></h2><p>Same great taste, closer to home.</p><a className="pill-button light" href="#contact"><MapPin size={16} /> View Locations <ArrowRight size={16} /></a></div><div className="map-art" aria-hidden="true">INDIA<span>•</span><span>•</span><span>•</span></div></section>

      <section className="gallery-section"><h2>Freshly Baked. Always.</h2><div className="gallery-grid"><div style={{ backgroundImage: `url(${galleryImage})`, backgroundPosition: '0% center' }} /><div style={{ backgroundImage: `url(${galleryImage})`, backgroundPosition: '50% center' }} /><div style={{ backgroundImage: `url(${galleryImage})`, backgroundPosition: '100% center' }} /></div></section>

      <section className="newsletter-section" id="contact"><h2>Baking a Brighter Day <Heart fill="currentColor" size={28} /></h2><p>Get fresh news, seasonal treats and bakery stories in your inbox.</p>{subscribed ? <p className="success-message">You&apos;re on the list. See you at the table.</p> : <form onSubmit={subscribe}><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" required placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} /><button className="pill-button dark" type="submit">Subscribe <ArrowRight size={16} /></button></form>}</section>

      <footer className="site-footer"><a className="brand" href="#top"><Wheat size={28} /><span>The<br /><strong>Butcher&apos;s Table</strong></span></a><div><h3>Explore</h3><a href="#products">Products</a><a href="#our-story">Our Story</a><a href="#locations">Locations</a></div><div><h3>Visit us</h3><p>Mon–Sun, 8:00 AM–9:00 PM</p><p>hello@butcherstable.in</p></div><p className="copyright">© 2026 The Butcher&apos;s Table</p></footer>
      {searchOpen && <div className="search-panel"><button aria-label="Close search" onClick={() => setSearchOpen(false)}><X /></button><input autoFocus placeholder="Search breads, pastries..." /><p>Try “croissant”, “sourdough”, or “muffin”</p></div>}
      {selectedProduct && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProduct(null)}><div className="product-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}><button className="modal-close" aria-label="Close" onClick={() => setSelectedProduct(null)}><X /></button><h2>{selectedProduct}</h2><p>Freshly baked with premium ingredients and a little extra love.</p><button className="pill-button dark" onClick={() => { setBagCount((count) => count + 1); setSelectedProduct(null) }}>Add to bag <ShoppingBag size={15} /></button></div></div>}
    </main>
  )
}
