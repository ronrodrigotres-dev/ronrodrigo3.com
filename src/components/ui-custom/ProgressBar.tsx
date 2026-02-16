import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProgressBarProps {
  label: string;
  value: number;
  max?: number;
  color?: 'red' | 'cyan' | 'green' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  suffix?: string;
  delay?: number;
}

export function ProgressBar({
  label,
  value,
  max = 100,
  color = 'red',
  size = 'md',
  showValue = true,
  suffix = '%',
  delay = 0,
}: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const percentage = Math.min((value / max) * 100, 100);

  const colors = {
    red: 'from-[#ff0000] to-[#ff3333]',
    cyan: 'from-[#00f0ff] to-[#00c8ff]',
    green: 'from-[#00ff00] to-[#33ff33]',
    yellow: 'from-[#ffff00] to-[#ffcc00]',
  };

  const glowColors = {
    red: 'rgba(255, 0, 0, 0.8)',
    cyan: 'rgba(0, 240, 255, 0.8)',
    green: 'rgba(0, 255, 0, 0.8)',
    yellow: 'rgba(255, 255, 0, 0.8)',
  };

  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div ref={ref} className="w-full">
      {/* Label row */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-2">
          <span 
            className="w-1.5 h-1.5 rounded-full"
            style={{ 
              backgroundColor: glowColors[color],
              boxShadow: `0 0 8px ${glowColors[color]}`,
            }}
          />
          {label}
        </span>
        {showValue && (
          <motion.span
            className="text-xs font-mono font-bold"
            style={{ color: glowColors[color].replace('0.8', '1') }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.3 }}
          >
            {Math.round(percentage)}{suffix}
          </motion.span>
        )}
      </div>

      {/* Progress bar */}
      <div 
        className={`relative ${sizes[size]} bg-[#111111] overflow-hidden`}
        style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 100%, 0 100%)' }}
      >
        {/* Background grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(255,255,255,0.1) 50%)',
            backgroundSize: '4px 100%',
          }}
        />

        {/* Fill */}
        <motion.div
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${colors[color]}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ 
            duration: 1, 
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            boxShadow: `0 0 15px ${glowColors[color]}`,
          }}
        />

        {/* Shine effect */}
        <motion.div
          className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ left: '-20%' }}
          animate={isInView ? { left: '120%' } : {}}
          transition={{ 
            duration: 1.5, 
            delay: delay + 0.5,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
}

interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  color?: 'red' | 'cyan' | 'green';
  label?: string;
  sublabel?: string;
}

export function CircularProgress({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  color = 'red',
  label,
  sublabel,
}: CircularProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const percentage = Math.min((value / max) * 100, 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const colors = {
    red: '#ff0000',
    cyan: '#00f0ff',
    green: '#00ff00',
  };

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#111111"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colors[color]}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{
            filter: `drop-shadow(0 0 10px ${colors[color]})`,
          }}
        />
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-2xl font-display font-bold"
          style={{ color: colors[color] }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {Math.round(percentage)}
        </motion.span>
        {label && (
          <span className="text-xs font-mono text-gray-500 uppercase">{label}</span>
        )}
        {sublabel && (
          <span className="text-[10px] font-mono text-gray-600">{sublabel}</span>
        )}
      </div>
    </div>
  );
}
