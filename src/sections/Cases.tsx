import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { CyberCard } from '@/components/ui-custom/CyberCard';
import { CyberButton } from '@/components/ui-custom/CyberButton';
import { 
  Cpu, 
  Quote,
  ChevronLeft,
  ChevronRight,
  Zap,
  BarChart3,
  Activity,
  TrendingUp
} from 'lucide-react';

const simulations = [
  {
    id: 'SIM-001',
    company: 'TechVenture Labs',
    industry: 'SaaS B2B',
    scenario: 'Simulación basada en auditoría IA de ecosistema digital',
    quote: 'RON3IA proyectó fugas de conversión estimadas en $50K mensuales. En escenario optimizado, CVR proyectado: +43%.',
    metrics: [
      { label: 'CVR POTENCIAL', value: '+43%' },
      { label: 'REDUCCIÓN CAC EST.', value: '-28%' },
    ],
  },
  {
    id: 'SIM-002',
    company: 'EcomGlobal',
    industry: 'E-Commerce',
    scenario: 'Simulación basada en datos de tráfico y funnel',
    quote: 'Auditoría técnica IA identificó problemas de performance. ROI en ads proyectado: +67% post-optimización.',
    metrics: [
      { label: 'ROI PROYECTADO', value: '+67%' },
      { label: 'AOV ESTIMADO', value: '+31%' },
    ],
  },
  {
    id: 'SIM-003',
    company: 'FinTech Pro',
    industry: 'Fintech',
    scenario: 'Simulación basada en métricas de retención y churn',
    quote: 'Estrategia IA proyecta duplicar base de usuarios activos en 90 días manteniendo presupuesto constante.',
    metrics: [
      { label: 'CRECIMIENTO UX PROY.', value: '+102%' },
      { label: 'REDUCCIÓN CHURN EST.', value: '-35%' },
    ],
  },
];

const systemStats = [
  { icon: <Activity className="w-5 h-5" />, value: '∞', label: 'Capacidad de Procesamiento' },
  { icon: <Zap className="w-5 h-5" />, value: '<3min', label: 'Tiempo de Diagnóstico' },
  { icon: <Cpu className="w-5 h-5" />, value: '24/7', label: 'Operación Continua' },
  { icon: <TrendingUp className="w-5 h-5" />, value: '6', label: 'Vectores de Análisis' },
];

export function Cases() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSimulation = () => {
    setActiveIndex((prev) => (prev + 1) % simulations.length);
  };

  const prevSimulation = () => {
    setActiveIndex((prev) => (prev - 1 + simulations.length) % simulations.length);
  };

  return (
    <section id="cases" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 20% 80%, rgba(255, 0, 0, 0.08) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ff00]/10 border border-[#00ff00]/30 rounded-full mb-4">
            <BarChart3 className="w-4 h-4 text-[#00ff00]" />
            <span className="text-xs font-mono text-[#00ff00] uppercase tracking-wider">
              Modelos de Impacto
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Simulaciones de <span className="text-[#00ff00]">Impacto IA</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Escenarios proyectados por RON3IA basados en análisis de datos 
            y modelos predictivos de optimización.
          </p>
        </motion.div>

        {/* Stats Row - DATOS DEL SISTEMA REALES */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {systemStats.map((stat) => (
            <div 
              key={stat.label}
              className="text-center p-4 bg-[#111111]/50 border border-[#ff0000]/30"
            >
              <div className="flex justify-center mb-2 text-[#ff0000]">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1 glow-red">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Simulations Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <CyberCard className="relative overflow-hidden" glowColor="green">
            {/* Quote icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-[#00ff00]/20" />

            <div className="relative">
              {/* Simulation Content */}
              <div className="min-h-[280px] flex flex-col">
                {simulations.map((sim, index) => (
                  <motion.div
                    key={sim.id}
                    className={`${index === activeIndex ? 'block' : 'hidden'}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Simulation ID */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#00ff00]/60">
                        ID: {sim.id}
                      </span>
                      <span className="px-3 py-1 text-xs font-mono bg-[#00ff00]/10 border border-[#00ff00]/30 text-[#00ff00] uppercase">
                        IA SIMULATION
                      </span>
                    </div>

                    {/* Company info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-[#111111] border border-[#00ff00]/30 flex items-center justify-center">
                        <span className="text-lg font-display font-bold text-[#00ff00]">
                          {sim.company.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-display font-bold text-white">
                          {sim.company}
                        </h4>
                        <p className="text-sm text-gray-500">{sim.industry}</p>
                      </div>
                    </div>

                    {/* Scenario */}
                    <p className="text-sm text-[#00ff00] font-mono mb-4">
                      {sim.scenario}
                    </p>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 italic">
                      "{sim.quote}"
                    </blockquote>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4 mt-auto">
                      {sim.metrics.map((metric) => (
                        <div 
                          key={metric.label}
                          className="px-4 py-2 bg-[#00ff00]/10 border border-[#00ff00]/30"
                        >
                          <span className="text-[#00ff00] font-display font-bold">{metric.value}</span>
                          <span className="text-gray-500 text-xs ml-2">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#111111]">
                <div className="flex gap-2">
                  {simulations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === activeIndex ? 'bg-[#00ff00]' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevSimulation}
                    className="p-2 border border-[#111111] text-gray-400 hover:text-white hover:border-[#00ff00] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSimulation}
                    className="p-2 border border-[#111111] text-gray-400 hover:text-white hover:border-[#00ff00] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </CyberCard>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xs text-gray-600 font-mono">
            * Las proyecciones son estimaciones basadas en modelos predictivos de RON3IA. 
            Resultados reales pueden variar según implementación.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-500 mb-4">
            Obtén tu propia simulación personalizada
          </p>
          <CyberButton
            href="#dashboard"
            variant="primary"
            size="md"
          >
            Iniciar Simulación
          </CyberButton>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="section-divider max-w-4xl mx-auto mt-24" />
    </section>
  );
}
