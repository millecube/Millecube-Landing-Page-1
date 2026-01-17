import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
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
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-primary hover:bg-blue-700 shadow-md focus:ring-primary",
    secondary: "border-transparent text-white bg-accent-dark hover:bg-accent shadow-md focus:ring-accent",
    outline: "border-primary text-primary bg-transparent hover:bg-blue-50 focus:ring-primary",
    // New high-conversion variant
    glow: "border-transparent text-black bg-accent hover:bg-accent-glow shadow-[0_0_20px_rgba(50,205,50,0.4)] hover:shadow-[0_0_30px_rgba(50,205,50,0.6)] focus:ring-accent transform hover:-translate-y-1"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};