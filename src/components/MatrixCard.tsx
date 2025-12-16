import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MatrixCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const MatrixCard = ({ children, className = '', hover = true, delay = 0 }: MatrixCardProps) => {
  return (
    <motion.div
      className={`relative bg-card/50 backdrop-blur-sm border border-border/50 p-6 overflow-hidden group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={hover ? { scale: 1.02, borderColor: 'hsl(var(--foreground))' } : undefined}
    >
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-foreground/50 group-hover:border-foreground transition-colors" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-foreground/50 group-hover:border-foreground transition-colors" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-foreground/50 group-hover:border-foreground transition-colors" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-foreground/50 group-hover:border-foreground transition-colors" />
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
      
      {/* Circuit line animation on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-foreground to-transparent"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default MatrixCard;
