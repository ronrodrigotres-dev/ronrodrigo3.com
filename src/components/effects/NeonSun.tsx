import { motion } from 'framer-motion';

export function NeonSun() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Sol rojo de neón pulsante */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Círculo principal */}
        <div 
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 0, 60, 0.4) 0%, rgba(255, 0, 60, 0.1) 40%, transparent 70%)',
            boxShadow: `
              0 0 100px 50px rgba(255, 0, 60, 0.3),
              0 0 200px 100px rgba(255, 0, 60, 0.2),
              0 0 300px 150px rgba(255, 0, 60, 0.1),
              inset 0 0 100px 50px rgba(255, 0, 60, 0.2)
            `,
          }}
        />
      </motion.div>

      {/* Anillo pulsante exterior */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border-2 border-cyber-red/20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{
          boxShadow: '0 0 50px rgba(255, 0, 60, 0.3), inset 0 0 50px rgba(255, 0, 60, 0.1)',
        }}
      />

      {/* Anillo interior pulsante */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cyber-red/30"
        animate={{
          scale: [1, 0.95, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.25,
        }}
      />

      {/* Rayos de luz */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-px h-[500px] origin-bottom"
          style={{
            background: 'linear-gradient(to top, rgba(255, 0, 60, 0.4), transparent)',
            transform: `rotate(${i * 45}deg) translateY(-50%)`,
            transformOrigin: 'center bottom',
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleY: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}

      {/* Brillo central */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(circle, rgba(255, 0, 60, 0.6) 0%, transparent 70%)',
          boxShadow: '0 0 100px 30px rgba(255, 0, 60, 0.5)',
        }}
      />
    </div>
  );
}
