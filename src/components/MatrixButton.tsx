import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MatrixButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
}

const MatrixButton = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: MatrixButtonProps) => {
  const baseStyles = 'relative font-mono px-6 py-3 overflow-hidden group transition-all duration-300';
  
  const variants = {
    primary: 'bg-foreground text-background hover:bg-foreground/90 matrix-box-glow',
    secondary: 'border border-foreground text-foreground hover:bg-foreground/10',
    ghost: 'text-foreground hover:bg-foreground/10',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glitch effect on hover */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/20 to-transparent opacity-0 group-hover:opacity-100"
        initial={{ y: '-100%' }}
        whileHover={{ y: '100%' }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-current opacity-50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current opacity-50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50" />
    </motion.button>
  );
};

export default MatrixButton;
