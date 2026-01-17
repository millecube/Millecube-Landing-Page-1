import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow' | 'bubble';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden group";
  
  const variants = {
    primary: "border border-transparent text-white bg-primary hover:bg-blue-700 shadow-md focus:ring-primary rounded-lg",
    secondary: "border border-transparent text-white bg-accent-dark hover:bg-accent shadow-md focus:ring-accent rounded-lg",
    outline: "border border-primary text-primary bg-transparent hover:bg-blue-50 focus:ring-primary rounded-lg",
    glow: "border border-transparent text-black bg-accent hover:bg-accent-glow shadow-[0_0_20px_rgba(50,205,50,0.4)] hover:shadow-[0_0_30px_rgba(50,205,50,0.6)] focus:ring-accent transform hover:-translate-y-1 rounded-lg",
    
    // New Water Bubble Design
    // Uses inset shadows for volume (highlight top, shadow bottom) + gradient background
    bubble: `
      rounded-full 
      text-white 
      bg-gradient-to-b from-primary via-blue-600 to-blue-700
      hover:from-blue-500 hover:via-blue-600 hover:to-blue-700
      border border-blue-400/30
      shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-2px_0_rgba(0,0,0,0.2),0_4px_15px_rgba(24,99,220,0.5)]
      hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-2px_0_rgba(0,0,0,0.2),0_8px_25px_rgba(24,99,220,0.6)]
      active:translate-y-0.5
      active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]
    `
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      {/* Shine effect for bubble button */}
      {variant === 'bubble' && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-shine transition-all duration-700" />
      )}
    </button>
  );
};