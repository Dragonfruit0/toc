import React from 'react';
import { Product } from '../types';
import { Button } from './Button';
import { Cookie } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy }) => {
  return (
    <div className="group bg-brand-secondary rounded-3xl overflow-hidden shadow-lg border-2 border-brand-tertiary/20 hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20 bg-brand-secondary text-brand-primary font-bold px-4 py-2 rounded-full shadow-md text-sm">
          ₹{product.price}/box
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow text-center">
        <div className="mb-4">
          <div className="inline-block p-3 bg-brand-tertiary/10 rounded-full mb-3 text-brand-tertiary group-hover:text-brand-primary transition-colors">
            <Cookie size={32} />
          </div>
          <h3 className="text-2xl font-bold text-brand-primary mb-2 leading-tight">
            {product.name}
          </h3>
          <p className="text-brand-primary/80 leading-relaxed text-sm">
            {product.description}
          </p>
        </div>
        
        <div className="mt-auto pt-4">
          <Button 
            onClick={() => onBuy(product)} 
            fullWidth
            className="group-hover:bg-brand-primary group-hover:text-brand-secondary"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};