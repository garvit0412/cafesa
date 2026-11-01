import { site } from '../data/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-ivory/70 py-16 sm:py-20" role="contentinfo">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold text-ivory tracking-wide">
                Cafesa
              </span>
            </a>
            <p className="text-ivory/40 text-sm leading-relaxed max-w-xs">
              {site.tagline}
              <br />
              A pure vegetarian café in Jaipur.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-ivory/90 text-sm font-semibold tracking-wider uppercase mb-4">
              Explore
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-ivory/50 hover:text-terracotta transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-ivory/90 text-sm font-semibold tracking-wider uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-ivory/50">
              <li>
                <a href={site.links.phone} className="hover:text-terracotta transition-colors">
                  {site.contact.phone}
                </a>
              </li>
              {site.links.whatsapp && (
                <li>
                  <a
                    href={site.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-terracotta transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              <li>
                <a
                  href={site.links.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta transition-colors"
                >
                  Get Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Address */}
          <div>
            <h3 className="text-ivory/90 text-sm font-semibold tracking-wider uppercase mb-4">
              Visit
            </h3>
            <div className="text-sm text-ivory/50 space-y-3">
              <p>
                <span className="text-ivory/70 font-medium">{site.hours.label}</span>
                <br />
                {site.hours.time}
              </p>
              <address className="not-italic leading-relaxed">
                {site.address.line1}<br />
                {site.address.line2}
              </address>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/30">
            © {currentYear} Cafesa. All rights reserved.
          </p>
          <p className="text-xs text-ivory/30">
            Pure Vegetarian · Women-Owned · Jaipur, Rajasthan
          </p>
        </div>
      </div>
    </footer>
  );
}
