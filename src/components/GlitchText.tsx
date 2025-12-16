import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const GlitchText = ({ text, className = '', delay = 0 }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Glitch layers */}
      {isGlitching && (
        <>
          <span
            className="absolute inset-0"
            style={{
              left: '-2px',
              color: 'rgba(255, 0, 0, 0.7)',
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
            }}
          >
            {text}
          </span>
          <span
            className="absolute inset-0"
            style={{
              left: '2px',
              color: 'rgba(0, 255, 255, 0.7)',
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
            }}
          >
            {text}
          </span>
        </>
      )}
      <span className="relative">{text}</span>
    </motion.span>
  );
};

export default GlitchText;
