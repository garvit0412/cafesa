/**
 * Cafesa — Gallery data
 *
 * No genuine Cafesa photographs have been provided.
 * Replace these placeholder entries with real images.
 * Store images in /public/images/gallery/
 *
 * Each entry has: src (path), alt (descriptive text), and aspect (for grid layout).
 */

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  aspect: 'landscape' | 'portrait' | 'square';
}

/**
 * Gallery images — replace these with actual Cafesa photographs.
 * The alt text should accurately describe each real image for accessibility.
 */
export const galleryImages: GalleryImage[] = [
  // Placeholder entries — replace src with real image paths and update alt text
  {
    id: 'g1',
    src: '/images/gallery/placeholder-1.svg',
    alt: 'Illustrative café interior — replace with actual Cafesa photograph',
    aspect: 'landscape',
  },
  {
    id: 'g2',
    src: '/images/gallery/placeholder-2.svg',
    alt: 'Illustrative vegetarian dish — replace with actual Cafesa photograph',
    aspect: 'portrait',
  },
  {
    id: 'g3',
    src: '/images/gallery/placeholder-3.svg',
    alt: 'Illustrative coffee preparation — replace with actual Cafesa photograph',
    aspect: 'square',
  },
  {
    id: 'g4',
    src: '/images/gallery/placeholder-4.svg',
    alt: 'Illustrative café ambiance — replace with actual Cafesa photograph',
    aspect: 'landscape',
  },
  {
    id: 'g5',
    src: '/images/gallery/placeholder-5.svg',
    alt: 'Illustrative food plating — replace with actual Cafesa photograph',
    aspect: 'portrait',
  },
  {
    id: 'g6',
    src: '/images/gallery/placeholder-6.svg',
    alt: 'Illustrative dining setting — replace with actual Cafesa photograph',
    aspect: 'square',
  },
];
