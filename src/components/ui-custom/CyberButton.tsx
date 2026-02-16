import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CyberButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function CyberButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  disabled = false,
  type = 'button',
}: CyberButtonProps) {
  const baseStyles = 'relative font-mono font-semibold uppercase tracking-widest transition-all duration-300 overflow-hidden group';
  
  const variants = {
    primary: 'bg-[#ff0000] text-white border-2 border-[#ff0000] hover:bg-[#ff3333]',
    secondary: 'bg-[#111111] text-white border-2 border-[#ff0000]/50 hover:border-[#ff0000]',
    outline: 'bg-transparent text-[#ff0000] border-2 border-[#ff0000] hover:bg-[#ff0000] hover:text-white',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const clipPath = 'polygon(8% 0, 100% 0, 100% 75%, 92% 100%, 0 100%, 0 25%)';

  const content = (
    <>
      {/* Background shine effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </span>
    </>
  );

  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.98 },
    style: { clipPath },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonStyles}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
