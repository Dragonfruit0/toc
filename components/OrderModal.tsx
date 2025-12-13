import React, { useState, useEffect } from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { Product, OrderDetails } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { Input } from './Input';
import { Button } from './Button';

interface OrderModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ product, isOpen, onClose }) => {
  const [formData, setFormData] = useState<OrderDetails>({
    customerName: '',
    email: '',
    address: '',
    phone: '',
    quantity: 1
  });

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        customerName: '',
        email: '',
        address: '',
        phone: '',
        quantity: 1
      });
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const totalAmount = formData.quantity * product.price;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const upiLink = `upi://pay?pa=hiba.noor192003@okhdfcbank&pn=Tale%20of%20Cookies&am=${totalAmount}&cu=INR`;

    const message = `
*New Order Request - Tale of Cookies* 🍪

*Product:* ${product.name}
*Price per Box:* ₹${product.price}
*Quantity:* ${formData.quantity}
*Total Amount:* ₹${totalAmount}

*Customer Details:*
Name: ${formData.customerName}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}

---------------------------
*Payment Details:*
If you want to pay now, click on this link to pay via UPI and send the screenshot to this number:
${upiLink}

Please confirm my order!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) || 1 : value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-primary/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-brand-secondary w-full max-w-md rounded-3xl shadow-2xl border-4 border-brand-primary overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-brand-primary p-4 flex justify-between items-center text-brand-secondary">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag size={24} />
            Place Order
          </h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-brand-tertiary rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <div className="mb-6 flex items-center gap-4 bg-brand-tertiary/20 p-4 rounded-xl">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-brand-tertiary flex-shrink-0">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-brand-primary">{product.name}</h3>
              <p className="text-sm font-semibold text-brand-primary">₹{product.price} / box</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <Input 
              label="Your Name" 
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required 
              placeholder="e.g. omer"
            />
            
            <Input 
              label="Phone Number" 
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required 
              placeholder="+91 9876543210"
            />

            <Input 
              label="Email Address" 
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="taleofcookies@gmail.com"
            />

            <Input 
              label="Delivery Address" 
              name="address"
              multiline
              value={formData.address}
              onChange={handleChange}
              required 
              placeholder="Full address with landmark"
            />

            <div className="flex items-center justify-between mb-8 p-4 bg-brand-primary/10 rounded-xl border border-brand-primary/20">
              <label className="font-bold text-brand-primary text-lg">Quantity (Boxes)</label>
              <div className="flex items-center gap-3">
                <button 
                  type="button"
                  onClick={() => setFormData(p => ({ ...p, quantity: Math.max(1, p.quantity - 1) }))}
                  className="w-10 h-10 rounded-full bg-brand-tertiary text-brand-secondary font-bold text-xl flex items-center justify-center hover:bg-brand-primary transition-colors"
                >
                  -
                </button>
                <span className="text-2xl font-bold w-8 text-center">{formData.quantity}</span>
                <button 
                  type="button"
                  onClick={() => setFormData(p => ({ ...p, quantity: p.quantity + 1 }))}
                  className="w-10 h-10 rounded-full bg-brand-primary text-brand-secondary font-bold text-xl flex items-center justify-center hover:bg-brand-tertiary transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6 text-xl font-bold text-brand-primary border-t-2 border-dashed border-brand-tertiary pt-4">
              <span>Total Amount:</span>
              <span>₹{totalAmount}</span>
            </div>

            <Button type="submit" fullWidth className="text-lg py-4 shadow-xl">
              Checkout on WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};