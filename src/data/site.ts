/**
 * Cafesa — Central site configuration
 *
 * All editable business information is centralized here.
 * Update this file to change contact details, hours, or branding copy.
 */

export const site = {
  name: 'Cafesa',
  tagline: 'Good food. Warm moments.',
  descriptor: 'PURE VEGETARIAN CAFÉ',
  domain: 'https://cafesa.co.in',

  description:
    'A pure vegetarian café in Jaipur, offering carefully prepared food in a warm, welcoming space.',

  meta: {
    title: 'Cafesa | Pure Vegetarian Café in Jaipur, Rajasthan',
    description:
      'Cafesa is a pure vegetarian café in Jaipur, Rajasthan. Enjoy carefully prepared vegetarian food in a warm, welcoming atmosphere. Open every day, 7:30 AM–11:00 PM.',
    ogImage: '/og-image.jpg', // Replace with actual OG image
  },

  contact: {
    phone: '+91-9829017934',
    phoneRaw: '+919829017934',
    // Email: uncomment and add when a genuine email address is available
    // email: 'hello@cafesa.co.in',
  },

  address: {
    line1: '12, Shiv Marg, Kirti Nagar',
    line2: 'Shyam Nagar, Jaipur',
    line3: 'Jaipur Nagar Nigam Area, Rajasthan 302019, India',
    full: '12, Shiv Marg, Kirti Nagar, Shyam Nagar, Jaipur, Jaipur Nagar Nigam Area, Rajasthan 302019, India',
  },

  hours: {
    label: 'Every day',
    time: '7:30 AM – 11:00 PM',
  },

  highlights: ['Pure Vegetarian', 'Women-Owned'],

  links: {
    directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      'Cafesa, 12, Shiv Marg, Kirti Nagar, Shyam Nagar, Jaipur, Rajasthan 302019, India'
    )}`,
    phone: 'tel:+919829017934',
    // WhatsApp: confirm the number accepts WhatsApp before uncommenting
    whatsapp: 'https://wa.me/919829017934',
    mapsEmbed: `https://www.google.com/maps?q=${encodeURIComponent(
      'Cafesa, 12, Shiv Marg, Kirti Nagar, Shyam Nagar, Jaipur, Rajasthan 302019, India'
    )}&output=embed`,
  },

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit Us', href: '#visit' },
  ],

  testimonial: {
    quote:
      "Tried Cafesa and really liked it! The food is super tasty and the service is pretty good too. It's a little expensive, but honestly worth it for the taste. Would totally recommend it if you're someone who loves good food. Plus, easy to reach by cab if you're new in Jaipur.",
    // Attribution: add reviewer name only if published with verified permission
    attribution: 'A Cafesa customer',
  },
} as const;
