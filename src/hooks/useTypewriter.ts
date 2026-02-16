import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function useTypewriter({
  text,
  speed = 50,
  delay = 0,
  onComplete,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const startTyping = useCallback(() => {
    setIsTyping(true);
  }, []);

  const reset = useCallback(() => {
    setDisplayText('');
    setIsTyping(false);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      startTyping();
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, startTyping]);

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

  return {
    displayText,
    isTyping,
    isComplete,
    startTyping,
    reset,
  };
}

interface UseTypewriterSequenceOptions {
  texts: string[];
  speed?: number;
  delayBetween?: number;
  loop?: boolean;
}

export function useTypewriterSequence({
  texts,
  speed = 50,
  delayBetween = 1000,
  loop = false,
}: UseTypewriterSequenceOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (isTyping && !isDeleting) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
        return () => clearTimeout(timeout);
      }
    }

    if (isDeleting) {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, speed / 2);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        if (currentIndex < texts.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else if (loop) {
          setCurrentIndex(0);
        } else {
          setIsTyping(false);
        }
      }
    }
  }, [displayText, isTyping, isDeleting, currentIndex, texts, speed, delayBetween, loop]);

  return {
    displayText,
    currentIndex,
    isTyping,
    isDeleting,
  };
}
