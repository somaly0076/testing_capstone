import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  width = 'auto',
  height = 'auto',
  fullWidth = false,
  disabled = false,
  onClick,
  className = '',
}) => {
  const baseStyles = 'font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-sky-400 text-white hover:bg-sky-300 focus:ring-sky-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'bg-transparent text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-gray-500',
    ghost: 'bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-500',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
  };

  const sizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const widthStyle = fullWidth ? 'w-full' : (width === 'auto') ? '' : `w-[${width}])`;
  const heightStyle = height === 'auto' ? '' : `h-[${height}]`;
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${widthStyle}
    ${heightStyle}
    ${disabledClass}
    ${className}
  `.trim();

  const buttonStyle = {
    ...(width !== 'auto' && !fullWidth ? { width } : {}),
    ...(height !== 'auto' ? { height } : {}),
  };

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default Button;