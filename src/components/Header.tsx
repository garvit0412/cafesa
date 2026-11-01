import { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { site } from '../data/site';
import { useScrollSpy } from '../hooks/useScrollSpy';

const sectionIds = ['home', 'menu', 'story', 'gallery', 'visit'];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#home" className="flex flex-col" aria-label="Cafesa — Home">
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-espresso">
            Cafesa
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-espresso/60 font-sans font-medium -mt-0.5">
            {site.descriptor}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-terracotta ${
                activeSection === item.href.slice(1)
                  ? 'text-terracotta'
                  : 'text-espresso/70'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.links.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-espresso text-ivory px-5 py-2.5 text-sm font-medium tracking-wide rounded-full hover:bg-espresso-light transition-colors"
          >
            <MapPin size={15} strokeWidth={2.5} aria-hidden="true" />
            Get Directions
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 -mr-2 text-espresso"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-0 bg-ivory z-40 lg:hidden flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Mobile header */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-5">
            <a href="#home" onClick={handleNavClick} className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wide text-espresso">
                Cafesa
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-espresso/60 font-sans font-medium -mt-0.5">
                {site.descriptor}
              </span>
            </a>
            <button
              className="p-2 -mr-2 text-espresso"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile links */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-6" aria-label="Mobile navigation">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="font-serif text-3xl font-semibold text-espresso hover:text-terracotta transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.links.directions}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="mt-4 inline-flex items-center gap-2 bg-espresso text-ivory px-7 py-3.5 text-base font-medium tracking-wide rounded-full hover:bg-espresso-light transition-colors"
            >
              <MapPin size={18} strokeWidth={2.5} aria-hidden="true" />
              Get Directions
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
