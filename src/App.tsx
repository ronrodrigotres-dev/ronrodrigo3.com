import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MatrixBackground, 
  ParticleField, 
  Scanlines,
  NeonSun
} from '@/components/effects';
import { 
  Navigation, 
  Hero, 
  Dashboard, 
  Services, 
  Process, 
  Cases, 
  Contact, 
  Footer 
} from '@/sections';
import { Loader2 } from 'lucide-react';

// Loading Screen Component
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Inicializando sistema...');

  const bootMessages = [
    { progress: 10, message: 'Cargando núcleo de IA...' },
    { progress: 25, message: 'Inicializando módulos de análisis...' },
    { progress: 40, message: 'Conectando con servidores estratégicos...' },
    { progress: 60, message: 'Cargando interfaz de usuario...' },
    { progress: 80, message: 'Optimizando rendimiento...' },
    { progress: 95, message: 'RON3IA v5.0 ONLINE' },
  ];

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 3 + 1;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
      setProgress(currentProgress);

      // Update status message based on progress
      const message = bootMessages.find(m => currentProgress <= m.progress);
      if (message) {
        setStatus(message.message);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md px-8">
        {/* Logo */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-6xl font-black tracking-tighter text-white mb-2 logo-neon">
            RON<span className="text-[#00ff00] logo-three-neon">3</span>IA
          </h1>
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            Sistema de Inteligencia Estratégica
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="h-1 bg-[#111111] overflow-hidden">
            <motion.div
              className="h-full bg-[#ff0000]"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 20px #ff0000',
              }}
              initial={{ width: 0 }}
            />
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-[#00ff00]">{status}</span>
          <span className="text-xs font-mono text-gray-500">{Math.round(progress)}%</span>
        </div>

        {/* Loading indicator */}
        <div className="flex justify-center mt-8">
          <Loader2 className="w-6 h-6 text-[#ff0000] animate-spin" />
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen bg-black"
        >
          {/* Background Effects - SOL ROJO DE NEÓN PRIMERO */}
          <NeonSun />
          <MatrixBackground />
          <ParticleField />
          <Scanlines />

          {/* Main Content */}
          <div className="relative z-20">
            <Navigation />
            
            <main>
              <Hero />
              <Dashboard />
              <Services />
              <Process />
              <Cases />
              <Contact />
            </main>
            
            <Footer />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default App;
