import { Product } from './types';
import classicChocImage from './components/images/products/cookie.jpeg';
import doubleChocImage from './components/images/products/double_choclate.jpeg';

export const WHATSAPP_NUMBER = '919392652231';

export const PRODUCTS: Product[] = [
  {
    id: 'classic-choc',
    name: 'Classic Chocolate Chip',
    description: 'The timeless favorite. Buttery vanilla dough loaded with semi-sweet chocolate chips that melt in your mouth.',
    price: 120,
    image: classicChocImage
  },
  {
    id: 'double-choc',
    name: 'Double Chocolate Chip',
    description: 'For the ultimate chocolate lover. Rich cocoa dough packed with white and milk chocolate chunks.',
    price: 120,
    image: doubleChocImage
  }
];

export const BRAND_LOGO_URL = "https://i.imgur.com/your-logo-placeholder.png"; // Using a placeholder, effectively handled via UI code with the user provided image in mind