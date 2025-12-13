import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  multiline?: boolean;
}

export const Input: React.FC<InputProps> = ({ label, multiline, className = '', ...props }) => {
  const baseClasses = "w-full p-3 rounded-xl border-2 border-brand-tertiary bg-brand-secondary/50 text-brand-primary placeholder-brand-primary/50 focus:outline-none focus:border-brand-primary transition-colors";

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-1 ml-1 text-brand-primary">
        {label}
      </label>
      {multiline ? (
        <textarea 
          className={`${baseClasses} min-h-[80px] ${className}`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input 
          className={`${baseClasses} ${className}`}
          {...props}
        />
      )}
    </div>
  );
};