import { MapPin, Phone, Clock, Leaf, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { site } from '../data/site';
import SectionReveal from './SectionReveal';

export default function VisitSection() {
  return (
    <section id="visit" className="py-24 sm:py-32 bg-ivory" aria-labelledby="visit-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-4 block">
              Visit Us
            </span>
            <h2
              id="visit-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso mb-5 leading-tight"
            >
              We'd love to see you.
            </h2>
            <p className="text-espresso/60 text-base sm:text-lg leading-relaxed">
              Drop in anytime — we're open every day.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <SectionReveal delay={0.1}>
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={20} className="text-terracotta" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-espresso mb-1.5">Address</h3>
                  <address className="not-italic text-espresso/60 leading-relaxed text-sm sm:text-base">
                    Cafesa<br />
                    {site.address.line1}<br />
                    {site.address.line2}<br />
                    {site.address.line3}
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={20} className="text-olive" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-espresso mb-1.5">Phone</h3>
                  <a
                    href={site.links.phone}
                    className="text-espresso/60 hover:text-terracotta transition-colors text-sm sm:text-base"
                  >
                    {site.contact.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-sand flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={20} className="text-espresso/50" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-espresso mb-1.5">Opening Hours</h3>
                  <p className="text-espresso/60 text-sm sm:text-base">
                    <span className="font-medium text-espresso/80">{site.hours.label}:</span>{' '}
                    {site.hours.time}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 bg-olive/10 text-olive px-4 py-2 text-sm font-medium rounded-full">
                  <Leaf size={15} aria-hidden="true" />
                  Pure Vegetarian
                </span>
                <span className="inline-flex items-center gap-1.5 bg-terracotta/10 text-terracotta px-4 py-2 text-sm font-medium rounded-full">
                  <Heart size={15} aria-hidden="true" />
                  Women-Owned
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={site.links.phone}
                  className="inline-flex items-center gap-2 bg-espresso text-ivory px-6 py-3 text-sm font-semibold tracking-wide rounded-full hover:bg-espresso-light transition-colors"
                >
                  <Phone size={16} strokeWidth={2.5} aria-hidden="true" />
                  Call Cafesa
                </a>
                <a
                  href={site.links.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-terracotta text-white px-6 py-3 text-sm font-semibold tracking-wide rounded-full hover:bg-terracotta/90 transition-colors"
                >
                  <MapPin size={16} strokeWidth={2.5} aria-hidden="true" />
                  Get Directions
                </a>
                {/* WhatsApp — shown only if the link is configured */}
                {site.links.whatsapp && (
                  <a
                    href={site.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-sm font-semibold tracking-wide rounded-full hover:bg-[#22bf5b] transition-colors"
                  >
                    <MessageCircle size={16} strokeWidth={2.5} aria-hidden="true" />
                    WhatsApp
                  </a>
                )}
              </div>
            </div>
          </SectionReveal>

          {/* Map embed */}
          <SectionReveal delay={0.2}>
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-sand border border-sand">
                <iframe
                  src={site.links.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cafesa location on Google Maps"
                  className="w-full h-full"
                />
              </div>
              <a
                href={site.links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-espresso/50 hover:text-terracotta transition-colors"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Open in Google Maps
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
