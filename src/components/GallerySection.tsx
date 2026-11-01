import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../data/gallery';
import { useReducedMotion } from '../hooks/useReducedMotion';
import SectionReveal from './SectionReveal';

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const reduced = useReducedMotion();

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  }, [lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, goNext, goPrev]);

  if (galleryImages.length === 0) return null;

  const aspectClasses = {
    landscape: 'aspect-[3/2]',
    portrait: 'aspect-[3/4] row-span-2',
    square: 'aspect-square',
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-sand/30" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-4 block">
              Gallery
            </span>
            <h2
              id="gallery-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso mb-5 leading-tight"
            >
              A glimpse inside.
            </h2>
            <p className="text-espresso/60 text-base sm:text-lg leading-relaxed">
              Moments from the café — replace these with genuine Cafesa photographs.
            </p>
          </div>
        </SectionReveal>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-auto">
          {galleryImages.map((image, i) => (
            <SectionReveal key={image.id} delay={i * 0.05}>
              <button
                onClick={() => openLightbox(i)}
                className={`relative w-full overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer ${aspectClasses[image.aspect]}`}
                aria-label={`View image: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className =
                      'w-full h-full bg-sand flex items-center justify-center text-espresso/25 font-serif text-sm italic';
                    fallback.textContent = 'Photo';
                    target.parentElement?.appendChild(fallback);
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-colors duration-300" aria-hidden="true" />
              </button>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-espresso/95 flex items-center justify-center"
            initial={reduced ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close image viewer"
            >
              <X size={28} />
            </button>

            {/* Prev button */}
            {galleryImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-2 text-white/50 hover:text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={36} />
              </button>
            )}

            {/* Next button */}
            {galleryImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-2 text-white/50 hover:text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={36} />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              initial={reduced ? undefined : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.currentTarget.alt = 'Image could not be loaded';
              }}
            />

            {/* Counter */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
