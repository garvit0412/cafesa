import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Phone, Leaf } from 'lucide-react';
import { menuItems, menuCategories } from '../data/menu';
import { site } from '../data/site';
import { useReducedMotion } from '../hooks/useReducedMotion';
import SectionReveal from './SectionReveal';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const reduced = useReducedMotion();
  const hasMenuItems = menuItems.length > 0;

  const filteredItems = useMemo(() => {
    let items = menuItems;
    if (activeCategory !== 'all') {
      items = items.filter((item) => item.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.dietary?.some((d) => d.toLowerCase().includes(q))
      );
    }
    return items;
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-white" aria-labelledby="menu-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-4 block">
              The Menu
            </span>
            <h2
              id="menu-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso mb-5 leading-tight"
            >
              Something worth slowing down for.
            </h2>
            <p className="text-espresso/60 text-base sm:text-lg leading-relaxed">
              Everything at Cafesa is pure vegetarian — prepared with care, served with warmth.
            </p>
          </div>
        </SectionReveal>

        {hasMenuItems ? (
          <>
            {/* Search & filter controls */}
            <SectionReveal delay={0.1}>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                {/* Category tabs */}
                {menuCategories.length > 1 && (
                  <div
                    className="flex flex-wrap justify-center gap-2"
                    role="tablist"
                    aria-label="Menu categories"
                  >
                    {menuCategories.map((cat) => (
                      <button
                        key={cat.id}
                        role="tab"
                        aria-selected={activeCategory === cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                          activeCategory === cat.id
                            ? 'bg-espresso text-ivory'
                            : 'bg-sand/50 text-espresso/70 hover:bg-sand'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Search */}
                <div className="relative w-full sm:w-64 sm:ml-auto">
                  <Search
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-espresso/40"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    placeholder="Search the menu…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-sm bg-sand/30 border border-sand rounded-full focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta/40 placeholder:text-espresso/40"
                    aria-label="Search menu items"
                  />
                </div>
              </div>
            </SectionReveal>

            {/* Menu grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              role="tabpanel"
              aria-label={`${activeCategory === 'all' ? 'All' : menuCategories.find(c => c.id === activeCategory)?.label} menu items`}
            >
              {filteredItems.map((item, i) => (
                <motion.article
                  key={item.id}
                  className="group bg-ivory rounded-2xl overflow-hidden border border-sand/50"
                  initial={reduced ? undefined : { opacity: 0, y: 20 }}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={reduced ? undefined : { duration: 0.5, delay: i * 0.05 }}
                >
                  {item.image && (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.parentElement!.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-serif text-lg font-semibold text-espresso">
                        {item.name}
                      </h3>
                      <span className="text-terracotta font-semibold text-sm whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-espresso/55 leading-relaxed mb-3">
                      {item.description}
                    </p>
                    {item.dietary && item.dietary.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.dietary.map((label) => (
                          <span
                            key={label}
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-olive bg-olive/10 px-2 py-0.5 rounded-full"
                          >
                            <Leaf size={10} aria-hidden="true" />
                            {label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <p className="text-center text-espresso/50 py-12">
                No items found. Try a different search or category.
              </p>
            )}
          </>
        ) : (
          /* Empty state — no verified menu data */
          <SectionReveal delay={0.15}>
            <div className="text-center py-16 px-6 bg-sand/30 rounded-3xl border border-sand/50 max-w-xl mx-auto">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-terracotta/10 flex items-center justify-center">
                <Leaf size={28} className="text-terracotta" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-espresso mb-3">
                Our full menu is being updated.
              </h3>
              <p className="text-espresso/55 text-sm sm:text-base mb-8 leading-relaxed max-w-md mx-auto">
                We're putting the finishing touches on our online menu. In the meantime, give us a call and we'll be happy to walk you through our current offerings.
              </p>
              <a
                href={site.links.phone}
                className="inline-flex items-center gap-2 bg-espresso text-ivory px-7 py-3.5 text-sm font-semibold tracking-wide rounded-full hover:bg-espresso-light transition-colors"
              >
                <Phone size={16} strokeWidth={2.5} aria-hidden="true" />
                Call to Ask About the Menu
              </a>
            </div>
          </SectionReveal>
        )}

        {/* Note about menu changes */}
        {hasMenuItems && (
          <SectionReveal delay={0.2}>
            <p className="text-center text-xs text-espresso/40 mt-10">
              Menu items and prices may change. Please call to confirm current offerings.
            </p>
          </SectionReveal>
        )}
      </div>
    </section>
  );
}
