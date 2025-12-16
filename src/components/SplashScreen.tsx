import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from './MatrixRain';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const lines = [
    '> Entering The Matrix...',
    '> Decrypting Multimedia Systems...',
    '> Loading Digital Reality...',
    '> Access Granted.',
  ];

  useEffect(() => {
    const lineTimers = lines.map((_, index) =>
      setTimeout(() => setCurrentLine(index + 1), (index + 1) * 700)
    );

    const logoTimer = setTimeout(() => setShowLogo(true), lines.length * 700 + 300);
    const exitTimer = setTimeout(() => setIsExiting(true), lines.length * 700 + 2000);
    const completeTimer = setTimeout(onComplete, lines.length * 700 + 2500);

    return () => {
      lineTimers.forEach(clearTimeout);
      clearTimeout(logoTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: 'blur(10px)',
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <MatrixRain opacity={0.3} density={0.5} />
          
          {/* Scanlines overlay */}
          <div className="absolute inset-0 scanlines pointer-events-none" />
          
          {/* Content */}
          <div className="relative z-10 text-center px-4">
            {/* Terminal lines */}
            <div className="mb-8 text-left max-w-md mx-auto">
              {lines.slice(0, currentLine).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-sm md:text-base text-foreground mb-2"
                >
                  <span className="matrix-glow">{line}</span>
                  {index === currentLine - 1 && (
                    <span className="inline-block w-2 h-4 bg-foreground ml-1 animate-pulse" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Logo */}
            <AnimatePresence>
              {showLogo && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    filter: 'blur(0px)',
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: 'easeOut',
                  }}
                  className="relative"
                >
                  {/* Glitch layers */}
                  <motion.h1
                    className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold text-foreground matrix-glow-intense absolute inset-0"
                    animate={{
                      x: [0, -2, 2, -1, 1, 0],
                      opacity: [1, 0.8, 1, 0.9, 1],
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: 2,
                      ease: 'easeInOut',
                    }}
                    style={{ color: 'rgba(255, 0, 0, 0.5)' }}
                  >
                    THE MATRIX
                  </motion.h1>
                  <motion.h1
                    className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold text-foreground matrix-glow-intense absolute inset-0"
                    animate={{
                      x: [0, 2, -2, 1, -1, 0],
                      opacity: [1, 0.8, 1, 0.9, 1],
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: 2,
                      ease: 'easeInOut',
                    }}
                    style={{ color: 'rgba(0, 0, 255, 0.5)' }}
                  >
                    THE MATRIX
                  </motion.h1>
                  <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold text-foreground matrix-glow-intense relative">
                    THE MATRIX
                  </h1>
                  <p className="font-mono text-muted-foreground mt-4 text-sm md:text-base">
                    The Multimedia Club
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-foreground/30" />
          <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-foreground/30" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-foreground/30" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-foreground/30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
