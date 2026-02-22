import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalTextProps {
  text: string;
  className?: string;
  speed?: number;
  showCursor?: boolean;
  onComplete?: () => void;
  delay?: number;
}

export function TerminalText({
  text,
  className = '',
  speed = 50,
  showCursor = true,
  onComplete,
  delay = 0,
}: TerminalTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isTyping, text, speed, onComplete]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
      {showCursor && !isComplete && (
        <motion.span
          className="inline-block w-2 h-5 ml-1 align-middle"
          style={{ backgroundColor: 'currentColor' }}
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
      {showCursor && isComplete && (
        <motion.span
          className="inline-block w-2 h-5 ml-1 align-middle"
          style={{ backgroundColor: 'currentColor' }}
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </span>
  );
}

interface TerminalLogProps {
  lines: string[];
  className?: string;
  lineDelay?: number;
  charSpeed?: number;
}

export function TerminalLog({
  lines,
  className = '',
  lineDelay = 500,
  charSpeed = 30,
}: TerminalLogProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [completedLines, setCompletedLines] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
      }, lineDelay);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines, lines.length, lineDelay]);

  const handleLineComplete = (index: number) => {
    setCompletedLines(prev => new Set(prev).add(index));
  };

  return (
    <div className={`font-mono space-y-1 ${className}`}>
      {lines.slice(0, visibleLines).map((line, index) => (
        <div key={index} className="flex items-start gap-2">
          <span className="text-cyber-red shrink-0">{'>'}</span>
          <TerminalText
            text={line}
            speed={charSpeed}
            showCursor={!completedLines.has(index)}
            onComplete={() => handleLineComplete(index)}
          />
        </div>
      ))}
    </div>
  );
}
