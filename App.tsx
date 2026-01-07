import React, { useState } from 'react';
import { ChevronDown, Instagram, MessageCircle } from 'lucide-react';
import { PRODUCTS, WHATSAPP_NUMBER } from './constants';
import { Product } from './types';
import { ProductCard } from './components/ProductCard';
import { OrderModal } from './components/OrderModal';
import cookieLogo from './components/images/logo.jpg';
import cookieImage from './components/images/Classic_Chocolate_Chunk_Cookies__3_-removebg-preview.png';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-primary selection:text-brand-secondary overflow-x-hidden">
      
      {/* Navbar */}
      {/* <nav className="fixed top-0 left-0 right-0 z-40 bg-brand-secondary/90 border-b-2 border-brand-primary/10 py-4 shadow-sm" data-aos="fade-down">
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold text-brand-primary tracking-tighter flex items-center gap-2">
             <img src={cookieLogo} alt="Tale of Cookies" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
             <span>Tale of Cookies</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <button onClick={() => scrollToSection('about')} className="text-sm sm:text-base font-bold text-brand-primary hover:text-brand-tertiary transition-colors">About</button>
            <button onClick={() => scrollToSection('products')} className="text-sm sm:text-base font-bold text-brand-primary hover:text-brand-tertiary transition-colors">Menu</button>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm sm:text-base font-bold text-brand-primary hover:text-brand-tertiary transition-colors"
            >
              <MessageCircle size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block">
            <div className="mb-4 inline-block" data-aos="zoom-in" data-aos-delay="200">
               <img src={cookieLogo} alt="Tale of Cookies" className="w-64 sm:w-96 mx-auto" />
            </div>
            <p className="font-authenia text-4xl sm:text-5xl text-brand-primary [text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]" data-aos="fade-up" data-aos-delay="400">
              Tiny bites, big tales
            </p>
            <div className="mt-8" data-aos="fade-left" data-aos-delay="600">
              <img src={cookieImage} alt="Chocolate Chunk Cookies" className="w-64 sm:w-96 mx-auto" />
            </div>

            <button 
              onClick={() => scrollToSection('about')}
              className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-brand-primary transition-all duration-200 bg-brand-secondary rounded-full hover:bg-brand-tertiary hover:text-brand-secondary hover:scale-105 shadow-xl mt-12"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <span>Learn More</span>
              <ChevronDown className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>
      
      {/* About Us Section */}
      <section id="about" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div data-aos="fade-right">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-brand-tertiary font-bold tracking-widest uppercase text-xs sm:text-sm">Our Story</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 mb-4 sm:mb-6">A Tale of Passion for Baking</h2>
              <div className="w-20 h-1.5 sm:w-24 sm:h-2 bg-brand-tertiary rounded-full mx-auto" />
            </div>
            <div className="max-w-3xl mx-auto text-center text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              <p className="mb-6">
                Tale of Cookies started from a simple love for baking and a desire to share that joy with others. Our journey began in a home kitchen, with a mission to create the most delightful bite-sized cookies. 
              </p>
              <p>
                We believe that the best cookies are made with the finest ingredients and a sprinkle of love. Each cookie is handcrafted to perfection, ready to be paired with our delicious dips. We're excited to be a part of your sweet moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <span className="text-brand-tertiary font-bold tracking-widest uppercase text-xs sm:text-sm">Our Menu</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 mb-4 sm:mb-6">Choose Your Flavor</h2>
            <div className="w-20 h-1.5 sm:w-24 sm:h-2 bg-brand-tertiary rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PRODUCTS.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onBuy={handleBuyClick}
                aosType="fade-up"
                aosDelay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 mt-auto" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6">
            <img src={cookieLogo} alt="Tale of Cookies" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full" />
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Tale of Cookies</h3>
              <p className="text-white/70 text-sm sm:text-base">Made with love in our home kitchen.</p>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/taleofcookies_/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-tertiary transition-colors transform hover:scale-110"
              >
                <Instagram size={24} className="sm:w-7 sm:h-7"/>
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-brand-tertiary transition-colors transform hover:scale-110">
                <MessageCircle size={24} className="sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-xs sm:text-sm text-white/50">
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
