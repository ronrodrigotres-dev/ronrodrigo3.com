import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
  intensity?: 'low' | 'medium' | 'high';
}

export function GlitchText({ 
  text, 
  className = '', 
  as: Component = 'span',
  intensity = 'medium' 
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`RON3IA01';
  
  const intensityConfig = {
    low: { interval: 8000, duration: 150 },
    medium: { interval: 5000, duration: 200 },
    high: { interval: 3000, duration: 300 },
  };

  useEffect(() => {
    const config = intensityConfig[intensity];
    
    const triggerGlitch = () => {
      setIsGlitching(true);
      
      let iterations = 0;
      const maxIterations = 8;
      
      const glitchInterval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iterations) return text[index];
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('')
        );
        
        iterations += 1 / 2;
        
        if (iterations >= maxIterations) {
          clearInterval(glitchInterval);
          setDisplayText(text);
          setIsGlitching(false);
        }
      }, config.duration / maxIterations);
    };

    const interval = setInterval(triggerGlitch, config.interval);
    
    return () => clearInterval(interval);
  }, [text, intensity]);

  return (
    <Component className={`relative inline-block ${className}`}>
      {/* Main text */}
      <span className="relative z-10">{displayText}</span>
      
      {/* Glitch layers */}
      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-cyber-cyan opacity-70"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
            animate={{
              x: [-2, 2, -1, 1, 0],
              opacity: [0.7, 0.3, 0.7, 0.3, 0],
            }}
            transition={{ duration: 0.2 }}
          >
            {displayText}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-cyber-red opacity-70"
            style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
            animate={{
              x: [2, -2, 1, -1, 0],
              opacity: [0.7, 0.3, 0.7, 0.3, 0],
            }}
            transition={{ duration: 0.2 }}
          >
            {displayText}
          </motion.span>
        </>
      )}
    </Component>
  );
}
