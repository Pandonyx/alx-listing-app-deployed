import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ 
  text = 'Click me', 
  onClick, 
  variant = 'primary',
  size = 'medium',
  fullWidth = false 
}) => {
  const baseClasses = 'font-medium transition-all duration-200 rounded-fullfocus:outline-none focus:ring-1 focus:ring-offset-1';
  
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base',
  };
  
  const variantClasses = {
    primary: 'bg-brand-teal text-white hover:bg-brand-teal/90 focus:ring-brand-teal rounded-full',
    secondary: 'bg-black text-white border border-brand-gray-300 hover:bg-brand-gray-800 focus:ring-brand-gray-500 rounded-full',
    orange: 'bg-brand-orange text-white hover:bg-brand-orange/90 focus:ring-brand-orange',
    white: 'bg-white text-black border border-gray-300 rounded-full px-2 py-1 hover:bg-gray-50',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;