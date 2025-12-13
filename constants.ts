import { Product } from './types';

export const WHATSAPP_NUMBER = '919392652231';

export const PRODUCTS: Product[] = [
  {
    id: 'classic-choc',
    name: 'Classic Chocolate Chip',
    description: 'The timeless favorite. Buttery vanilla dough loaded with semi-sweet chocolate chips that melt in your mouth.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1499636138143-bd630f5cf38a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'double-choc',
    name: 'Double Chocolate Chip',
    description: 'For the ultimate chocolate lover. Rich cocoa dough packed with white and milk chocolate chunks.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1618923866631-0f711e56b364?q=80&w=800&auto=format&fit=crop'
  }
];

export const BRAND_LOGO_URL = "https://i.imgur.com/your-logo-placeholder.png"; // Using a placeholder, effectively handled via UI code with the user provided image in mind