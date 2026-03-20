import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-accent-primary to-accent-hover text-bg-primary hover:shadow-lg hover:shadow-accent-primary/25 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'border border-accent-primary text-accent-primary hover:bg-accent-primary/10 hover:shadow-lg hover:shadow-accent-primary/20 hover:scale-[1.02] active:scale-[0.98]',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-white/5',
  };
  
  const sizes = {
    small: 'h-8 px-3 text-sm rounded-md gap-1.5',
    medium: 'h-11 px-5 text-sm rounded-lg gap-2',
    large: 'h-14 px-8 text-base rounded-lg gap-2.5',
  };

  const iconSizes = {
    small: 16,
    medium: 18,
    large: 20,
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={iconSizes[size]} />}
      {children}
      {Icon && iconPosition === 'right' && <ArrowRight size={iconSizes[size]} className="ml-1" />}
    </motion.button>
  );
}
