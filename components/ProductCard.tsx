import React from 'react';
import { Product } from '../types';
import cookieLogo from './images/logo.jpg';

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product) => void;
  aosType?: string;
  aosDelay?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy, aosType, aosDelay }) => {
  return (
    <div 
      className="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg border-2 border-brand-primary/20 hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full text-white"
      data-aos={aosType}
      data-aos-delay={aosDelay}
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20 bg-brand-primary text-brand-secondary font-bold px-4 py-2 rounded-full shadow-md text-sm">
          ₹{product.price}/box
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow text-center">
        <div className="mb-4">
          <div className="inline-block mb-3">
            <img src={cookieLogo} alt="Tale of Cookies" className="w-16 h-16 rounded-full mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
            {product.name}
          </h3>
          <p className="text-white/80 leading-relaxed text-sm">
            {product.description}
          </p>
        </div>
        
        <div className="mt-auto pt-4">
          <button
            onClick={() => onBuy(product)}
            className="mt-auto bg-brand-primary text-brand-secondary font-bold py-3 px-6 rounded-full w-full hover:bg-brand-tertiary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
