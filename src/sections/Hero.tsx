import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TerminalText } from '@/components/effects/TerminalText';
import { CyberButton } from '@/components/ui-custom/CyberButton';
import { ChevronDown, Play, Sparkles } from 'lucide-react';

const systemMessages = [
  'Inicializando núcleo de IA...',
  'Cargando módulos de análisis...',
  'Conectando con servidores estratégicos...',
  'RON3IA v5.0 ONLINE',
];

export function Hero() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 2000);

    const ctaTimer = setTimeout(() => {
      setShowCTA(true);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(ctaTimer);
    };
  }, []);

  const scrollToDashboard = () => {
    const element = document.getElementById('dashboard');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Terminal boot sequence */}
        <motion.div
          className="mb-8 font-mono text-xs sm:text-sm text-[#00ff00]/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block text-left bg-[#111111]/80 p-4 border border-[#00ff00]/30 rounded">
            {systemMessages.map((msg, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-[#ff0000] shrink-0">{'>'}</span>
                <TerminalText
                  text={msg}
                  speed={30}
                  delay={index * 400}
                  showCursor={index === systemMessages.length - 1}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main title - LOGO MÁS GRANDE CON EFECTO NEÓN VIBRANTE */}
        {showMainContent && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter mb-4 leading-none"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white logo-neon">RON</span>
              <motion.span 
                className="text-[#00ff00] logo-three-neon inline-block"
              >
                3
              </motion.span>
              <span className="text-white logo-neon">IA</span>
            </motion.h1>

            <motion.div
              className="h-px w-48 mx-auto mb-6"
              style={{
                background: 'linear-gradient(90deg, transparent, #ff0000, #00ff00, #ff0000, transparent)',
                boxShadow: '0 0 20px #ff0000',
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.p 
              className="text-[#ff0000] font-mono text-sm sm:text-base uppercase tracking-[0.3em] mb-6 glow-red"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Sistema Autónomo de Optimización Financiera Digital
            </motion.p>

            <motion.p 
              className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Desde la mejora de conversión hasta la optimización del margen empresarial, 
              <span className="text-white"> RON3IA detecta ineficiencias</span> en tu ecosistema 
              digital y genera <span className="text-[#00ff00]">decisiones estratégicas accionables</span> en minutos.
            </motion.p>
          </motion.div>
        )}

        {/* CTA Buttons */}
        {showCTA && (
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CyberButton
              onClick={scrollToDashboard}
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Iniciar Auditoría
            </CyberButton>

            <CyberButton
              href="#services"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Ver Protocolos
            </CyberButton>
          </motion.div>
        )}

        {/* Status indicators - SIMULADOS */}
        {showMainContent && (
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { value: '247', label: 'Auditorías Simuladas', color: 'text-[#ff0000]' },
              { value: '98.7%', label: 'Uptime del Sistema', color: 'text-[#00ff00]' },
              { value: '+34%', label: 'ROI Proyectado', color: 'text-[#00ff00]' },
              { value: '<3min', label: 'Tiempo de Diagnóstico', color: 'text-[#ff0000]' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className={`text-2xl sm:text-3xl font-display font-bold ${stat.color} glow-red`}>
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={scrollToDashboard}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#ff0000] transition-colors"
        >
          <span className="text-xs font-mono uppercase tracking-wider">Explorar</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-4 w-16 h-16 border-l-2 border-t-2 border-[#ff0000]/50" />
      <div className="absolute bottom-20 right-4 w-16 h-16 border-r-2 border-b-2 border-[#ff0000]/50" />
    </section>
  );
}
