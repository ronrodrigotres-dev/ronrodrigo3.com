import { motion } from 'framer-motion';

export function Scanlines() {
  return (
    <>
      {/* Horizontal scanlines */}
      <div 
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.08) 50%)',
          backgroundSize: '100% 4px',
        }}
      />
      
      {/* Moving scanline */}
      <motion.div
        className="fixed left-0 right-0 h-px pointer-events-none z-40"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 0, 60, 0.3), transparent)',
          boxShadow: '0 0 10px rgba(255, 0, 60, 0.3)',
        }}
        initial={{ top: '-5%' }}
        animate={{ top: '105%' }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Vignette effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-30"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />
      
      {/* Subtle noise texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-35 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
}
