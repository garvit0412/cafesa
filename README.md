# Cafesa — Pure Vegetarian Café Website

A premium, single-page static website for **Cafesa**, a pure vegetarian, women-owned café in Jaipur, Rajasthan.

Built with React, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

---

## Quick Start

### Prerequisites

- **Node.js** 18 or later
- **npm** 9 or later

### Install & Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Static output goes to the `dist/` folder — ready for deployment.

### Preview the Build

```bash
npm run preview
```

---

## Deployment

The `dist/` folder is a fully static site. Deploy it to any static hosting provider:

| Provider          | Build command   | Output directory |
| ----------------- | --------------- | ---------------- |
| Cloudflare Pages  | `npm run build` | `dist`           |
| Netlify           | `npm run build` | `dist`           |
| Vercel            | `npm run build` | `dist`           |

### Custom Domain

Connect `cafesa.co.in` through your hosting provider's domain settings. No special server configuration is needed.

---

## Editing Content

All editable content is stored in local TypeScript files — no database or CMS required.

### Business Information

Edit **`src/data/site.ts`** to update:

- Business name, tagline, and description
- Phone number and contact links
- Address and opening hours
- Testimonial text
- WhatsApp link (enable/disable)
- Navigation labels
- SEO meta data

### Menu

Edit **`src/data/menu.ts`** to add real menu items:

1. Uncomment the category entries in `menuCategories`
2. Add items to the `menuItems` array

```ts
// Example menu item
{
  id: 'masala-chai',
  name: 'Masala Chai',
  description: 'Traditional spiced tea brewed with fresh ingredients.',
  price: '₹120',
  category: 'beverages',
  dietary: ['Vegan'],
}
```

The menu section will automatically show category tabs, search, and a grid layout once items are added.

### Gallery

Edit **`src/data/gallery.ts`** to replace placeholder images:

1. Add real photographs to `public/images/gallery/`
2. Update the `src` paths and `alt` text in the gallery data
3. Set the correct `aspect` ratio (`landscape`, `portrait`, or `square`)

### Hero & Story Images

Replace the placeholder SVGs with real photographs:

- **Hero:** `public/images/hero.svg` → replace with `hero.jpg` (or `.webp`) and update the `src` in `src/components/Hero.tsx`
- **Story:** `public/images/story.svg` → replace with `story.jpg` and update the `src` in `src/components/StorySection.tsx`

### Favicon & OG Image

- **Favicon:** Replace `public/favicon.svg` with your café's favicon
- **OG Image:** Replace `public/og-image.svg` with a 1200×630px branded image for social sharing, then update the `.svg` extension to `.jpg`/`.png` in `index.html`

---

## Project Structure

```
cafesa/
├── index.html                    # HTML entry with SEO meta & JSON-LD
├── public/
│   ├── favicon.svg               # Site favicon
│   ├── og-image.svg              # Social sharing image
│   ├── robots.txt                # Search engine crawl rules
│   ├── sitemap.xml               # Sitemap for cafesa.co.in
│   └── images/                   # Static images
│       ├── hero.svg              # Hero placeholder
│       ├── story.svg             # Story section placeholder
│       └── gallery/              # Gallery images
├── src/
│   ├── main.tsx                  # React entry point
│   ├── App.tsx                   # Main app layout
│   ├── index.css                 # Tailwind + custom theme
│   ├── components/
│   │   ├── Header.tsx            # Sticky header + mobile nav
│   │   ├── Hero.tsx              # Hero section
│   │   ├── MenuSection.tsx       # Menu with categories, search
│   │   ├── StorySection.tsx      # Our Story section
│   │   ├── GallerySection.tsx    # Image gallery + lightbox
│   │   ├── TestimonialSection.tsx # Customer review
│   │   ├── VisitSection.tsx      # Contact + map
│   │   ├── Footer.tsx            # Site footer
│   │   ├── BackToTop.tsx         # Scroll-to-top button
│   │   └── SectionReveal.tsx     # Scroll animation wrapper
│   ├── data/
│   │   ├── site.ts               # Centralized business info
│   │   ├── menu.ts               # Menu data
│   │   └── gallery.ts            # Gallery image data
│   └── hooks/
│       ├── useScrollSpy.ts       # Active section detection
│       └── useReducedMotion.ts   # Reduced motion preference
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** — fast build tooling
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — subtle scroll and entrance animations
- **Lucide React** — consistent iconography

No backend, database, authentication, or server functions.

---

## Accessibility

- Semantic HTML with proper heading hierarchy
- ARIA labels on interactive elements
- Keyboard-navigable gallery lightbox (Escape, Arrow keys)
- Visible focus indicators
- Reduced-motion support (`prefers-reduced-motion`)
- Sufficient color contrast

---

## License

© Cafesa. All rights reserved.
