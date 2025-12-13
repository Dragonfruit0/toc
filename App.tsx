import React, { useState } from 'react';
import { ChevronDown, Cookie, Instagram, MessageCircle } from 'lucide-react';
import { PRODUCTS, WHATSAPP_NUMBER } from './constants';
import { Product } from './types';
import { ProductCard } from './components/ProductCard';
import { OrderModal } from './components/OrderModal';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const scrollToProducts = () => {
    const section = document.getElementById('products');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  // The Logo URL provided by user
  const LOGO_URL = "https://i.imgur.com/L5z1j5v.png"; // Placeholder for the actual logo URL which wasn't textually provided but implies I should use the one they "provided" mentally. Since I can't see images, I will construct a UI that handles the logo text nicely if the image breaks, or uses the specific provided text. 
  // Wait, the prompt said "i have provided you with logo...". I will assume I render the text "Tale of Cookies" in the font style if I don't have the direct URL, but I will simulate the logo area.

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-primary selection:text-brand-secondary">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-brand-secondary/90 backdrop-blur-md border-b-2 border-brand-primary/10 py-4 shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-brand-primary tracking-tighter flex items-center gap-2">
             {/* Simulating the logo provided */}
             <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-brand-secondary">
               <Cookie size={20} />
             </div>
             <span>Tale of Cookies</span>
          </div>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-bold text-brand-primary hover:text-brand-tertiary transition-colors"
          >
            <MessageCircle size={20} />
            <span className="hidden sm:inline">Contact Us</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-primary">
        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-tertiary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="mb-8 inline-block animate-bounce-slow">
             {/* Logo Representation */}
             <h1 className="text-6xl md:text-8xl font-black text-brand-secondary mb-2 drop-shadow-sm tracking-tight">
               Tale of Cookies
             </h1>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-brand-tertiary mb-6 max-w-3xl mx-auto leading-tight">
            Freshly Baked Comfort in Every Bite
          </h2>
          
          <p className="text-lg md:text-xl text-brand-secondary/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Handcrafted bite-sized cookies with delicious dips, made with love in our home kitchen.
          </p>

          <button 
            onClick={scrollToProducts}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-brand-primary transition-all duration-200 bg-brand-secondary rounded-full hover:bg-brand-tertiary hover:text-brand-secondary hover:scale-105 shadow-xl"
          >
            <span>Order Your Box</span>
            <ChevronDown className="ml-2 w-6 h-6 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* Products Section */}
      <section id="products" className="py-24 bg-brand-primary/5 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-tertiary font-bold tracking-widest uppercase text-sm">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-primary mt-2 mb-6">Choose Your Flavor</h2>
            <div className="w-24 h-2 bg-brand-tertiary rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PRODUCTS.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onBuy={handleBuyClick} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-primary text-brand-secondary py-12 mt-auto border-t-8 border-brand-tertiary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Tale of Cookies</h3>
              <p className="text-brand-secondary/70">Made with love in our home kitchen.</p>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/taleofcookies_/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-tertiary transition-colors transform hover:scale-110"
              >
                <Instagram size={28} />
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-brand-tertiary transition-colors transform hover:scale-110">
                <MessageCircle size={28} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-brand-secondary/20 text-center text-sm text-brand-secondary/50">
            © {new Date().getFullYear()} Tale of Cookies. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modal */}
      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={selectedProduct} 
      />
    </div>
  );
}

export default App;