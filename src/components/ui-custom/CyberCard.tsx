import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CyberCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: 'red' | 'cyan' | 'green' | 'yellow';
  onClick?: () => void;
}

export function CyberCard({
  children,
  className = '',
  hoverEffect = true,
  glowColor = 'red',
  onClick,
}: CyberCardProps) {
  const glowColors = {
    red: 'rgba(255, 0, 0, 0.3)',
    cyan: 'rgba(0, 240, 255, 0.3)',
    green: 'rgba(0, 255, 0, 0.3)',
    yellow: 'rgba(255, 255, 0, 0.3)',
  };

  const borderColors = {
    red: 'border-[#ff0000]/30 hover:border-[#ff0000]/60',
    cyan: 'border-[#00f0ff]/30 hover:border-[#00f0ff]/60',
    green: 'border-[#00ff00]/30 hover:border-[#00ff00]/60',
    yellow: 'border-[#ffff00]/30 hover:border-[#ffff00]/60',
  };

  return (
    <motion.div
      className={`
        relative bg-[#111111]/80 backdrop-blur-sm border ${borderColors[glowColor]}
        p-6 overflow-hidden
        ${hoverEffect ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      whileHover={hoverEffect ? {
        y: -5,
        transition: { duration: 0.3 },
      } : {}}
      style={{
        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
      }}
    >
      {/* Top line accent */}
      <motion.div
        className="absolute top-0 left-0 h-0.5"
        style={{ backgroundColor: glowColors[glowColor].replace('0.3', '1') }}
        initial={{ width: '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-current opacity-30" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-current opacity-30" />

      {/* Glow effect on hover */}
      {hoverEffect && (
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${glowColors[glowColor]}, transparent 70%)`,
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
  ctaText?: string;
  ctaAction?: () => void;
}

export function ServiceCard({
  icon,
  title,
  description,
  features = [],
  ctaText = 'Saber más',
  ctaAction,
}: ServiceCardProps) {
  return (
    <CyberCard className="h-full flex flex-col" hoverEffect glowColor="red">
      {/* Icon */}
      <div className="mb-4 text-[#ff0000]">
        <div className="w-12 h-12 flex items-center justify-center border border-[#ff0000]/50 bg-[#ff0000]/10">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-display font-bold text-white mb-3 uppercase tracking-wide">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
        {description}
      </p>

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-1 h-1 bg-[#ff0000] rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {ctaAction && (
        <button
          onClick={ctaAction}
          className="mt-auto text-[#ff0000] text-xs font-mono uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2 group"
        >
          {ctaText}
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </button>
      )}
    </CyberCard>
  );
}
