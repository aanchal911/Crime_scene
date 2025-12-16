import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading = false,
  className = '',
  disabled,
  ...props 
}) => {
  const baseStyles = "w-full py-4 px-6 rounded-sm font-typewriter uppercase tracking-[0.2em] text-sm md:text-base transition-all duration-200 transform active:scale-[0.98] border relative overflow-hidden group outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-zinc-700";
  
  const variants = {
    primary: `
      bg-zinc-900 text-white border-zinc-700
      hover:bg-blood-700 hover:border-blood-600 hover:text-white
      shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-zinc-900 disabled:hover:border-zinc-700
    `,
    secondary: `
      bg-transparent hover:bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white
    `
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Glint effect */}
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg] transition-all duration-700 group-hover:left-[100%]"></div>
      
      <span className="relative flex items-center justify-center gap-3 z-10">
        {isLoading && <Loader2 className="w-4 h-4 animate-spin text-zinc-400" />}
        {children}
      </span>
    </button>
  );
};

export default Button;