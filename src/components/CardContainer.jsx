import React from 'react';

const CardContainer = ({ 
  children, 
  className = '', 
  variant = 'default',
  animated = true 
}) => {
  const baseClasses = 'rounded-xl p-6 shadow-lg';
  
  const variants = {
    default: 'bg-white border border-gray-200',
    glass: 'glass-effect',
    gradient: 'gradient-bg text-white',
    dark: 'bg-gray-800 text-white border border-gray-700'
  };

  const animationClass = animated ? 'card-hover animate-fade-in' : '';

  return (
    <div className={`
      ${baseClasses} 
      ${variants[variant]} 
      ${animationClass} 
      ${className}
    `}>
      {children}
    </div>
  );
};

export default CardContainer;