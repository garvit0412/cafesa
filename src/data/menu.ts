/**
 * Cafesa — Menu data
 *
 * IMPORTANT: No verified menu items have been provided.
 * Replace the placeholder categories and add real items once available.
 *
 * Each item has: name, description, price, category, dietary labels, and an optional image path.
 * The menu component reads from this file — update it to change displayed menu content.
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string; // e.g. "₹250" — use string for flexible formatting
  category: string;
  image?: string; // Path to item image in /public/images/menu/
  dietary?: string[]; // e.g. ["Vegan", "Gluten-Free"]
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  description?: string;
}

/**
 * Menu categories — update these to match the café's actual menu sections.
 * These are placeholder category names to be confirmed by the owner.
 */
export const menuCategories: MenuCategory[] = [
  { id: 'all', label: 'All' },
  // Uncomment and update when the real menu is available:
  // { id: 'breakfast', label: 'Breakfast' },
  // { id: 'small-plates', label: 'Small Plates' },
  // { id: 'mains', label: 'Main Course' },
  // { id: 'beverages', label: 'Beverages' },
  // { id: 'coffee', label: 'Coffee' },
  // { id: 'desserts', label: 'Desserts' },
];

/**
 * Menu items — currently empty as no verified menu items have been provided.
 * Add real items here once the café shares its menu.
 *
 * Example item:
 * {
 *   id: 'masala-chai',
 *   name: 'Masala Chai',
 *   description: 'Traditional spiced tea brewed with fresh ingredients.',
 *   price: '₹120',
 *   category: 'beverages',
 *   dietary: ['Vegan'],
 * }
 */
export const menuItems: MenuItem[] = [];
