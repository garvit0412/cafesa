import { motion } from 'framer-motion';
import { MapPin, ChevronDown, Leaf } from 'lucide-react';
import { site } from '../data/site';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Hero() {
  const reduced = useReducedMotion();

  const fadeUp = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      };

  const fadeIn = reduced
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1.2, delay: 0.2, ease: 'easeOut' },
      };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Welcome to Cafesa"
    >
      {/* Background image */}
      <motion.div className="absolute inset-0 z-0" {...fadeIn}>
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-espresso/20 z-10" />
        {/* Replace this with an actual hero photograph of Cafesa */}
        <img
          src="/images/hero.svg"
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.classList.add('bg-espresso');
            }
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8 w-full pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-0 lg:pb-0">
        <div className="max-w-2xl">
          {/* Badges */}
          <motion.div className="flex flex-wrap items-center gap-3 mb-8" {...fadeUp}>
            <span className="inline-flex items-center gap-1.5 bg-olive/90 text-white px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full">
              <Leaf size={13} strokeWidth={2.5} aria-hidden="true" />
              Pure Vegetarian
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full border border-white/20">
              Women-Owned
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6"
            {...fadeUp}
            transition={reduced ? undefined : { duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Cafesa
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="font-serif text-xl sm:text-2xl md:text-3xl text-white/90 italic mb-4"
            {...fadeUp}
            transition={reduced ? undefined : { duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-white/75 leading-relaxed mb-10 max-w-lg"
            {...fadeUp}
            transition={reduced ? undefined : { duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            {...fadeUp}
            transition={reduced ? undefined : { duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={site.links.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-terracotta text-white px-7 py-3.5 text-sm sm:text-base font-semibold tracking-wide rounded-full hover:bg-terracotta/90 transition-colors"
            >
              <MapPin size={18} strokeWidth={2.5} aria-hidden="true" />
              Get Directions
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-7 py-3.5 text-sm sm:text-base font-semibold tracking-wide rounded-full border border-white/25 hover:bg-white/25 transition-colors"
            >
              Explore the Menu
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2"
        initial={reduced ? undefined : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1 }}
        transition={reduced ? undefined : { delay: 1.5, duration: 0.8 }}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="text-white/50 animate-bounce" aria-hidden="true" />
      </motion.div>
    </section>
  );
}
