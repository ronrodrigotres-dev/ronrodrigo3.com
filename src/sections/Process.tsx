import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CyberCard } from '@/components/ui-custom/CyberCard';
import { 
  ClipboardCheck, 
  Cpu, 
  FileSearch, 
  Lightbulb, 
  Rocket,
  Settings,
  Workflow,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    number: '01',
    code: 'INPUT_NODE',
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: 'Diagnóstico Inicial',
    description: 'RON3IA escanea automáticamente tu ecosistema digital: sitio, ads, analytics y funnel de conversión.',
    duration: '< 3 min',
    color: 'cyan' as const,
  },
  {
    number: '02',
    code: 'DEEP_SCAN',
    icon: <FileSearch className="w-6 h-6" />,
    title: 'Análisis Profundo',
    description: 'Algoritmos identifican ineficiencias, fugas de margen y oportunidades de optimización en cada punto de contacto.',
    duration: '24-48h',
    color: 'red' as const,
  },
  {
    number: '03',
    code: 'AI_PROCESSING',
    icon: <Cpu className="w-6 h-6" />,
    title: 'Procesamiento IA',
    description: 'RON3IA correlaciona datos de múltiples fuentes para generar insights accionables priorizados por impacto en ROI.',
    duration: 'Real-time',
    color: 'green' as const,
  },
  {
    number: '04',
    code: 'AUTO_PLAN_GEN',
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Generación Automática de Plan',
    description: 'El sistema genera un plan de acción detallado con recomendaciones específicas, timeline y proyecciones de resultados.',
    duration: 'Instant',
    color: 'yellow' as const,
  },
  {
    number: '05',
    code: 'EXEC_KIT',
    icon: <Settings className="w-6 h-6" />,
    title: 'Kit Técnico Ejecutable',
    description: 'Entregables técnicos listos para ejecutar: código, configuraciones, briefs y guías paso a paso.',
    duration: 'Variable',
    color: 'cyan' as const,
  },
  {
    number: '06',
    code: 'CONT_MONITOR',
    icon: <Rocket className="w-6 h-6" />,
    title: 'Monitoreo Continuo',
    description: 'RON3IA opera 24/7, detectando nuevas oportunidades y ajustando la estrategia en tiempo real.',
    duration: 'Permanent',
    color: 'red' as const,
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" ref={ref} className="relative py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ff00]/10 border border-[#00ff00]/30 rounded-full mb-4">
            <Workflow className="w-4 h-4 text-[#00ff00]" />
            <span className="text-xs font-mono text-[#00ff00] uppercase tracking-wider">
              Pipeline del Sistema
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Flujo de <span className="text-[#00ff00]">Operación</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Proceso sistemático y automatizado que transforma datos brutos 
            en decisiones estratégicas ejecutables.
          </p>
        </motion.div>

        {/* Pipeline Visual */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {['INPUT', 'SCAN', 'CORRELATION', 'SCORE', 'VEREDICT', 'ACTION KIT'].map((step, index) => (
            <div key={step} className="flex items-center">
              <div className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-[#111111] text-gray-600">
                {step}
              </div>
              {index < 5 && (
                <ArrowRight className="w-4 h-4 mx-1 text-gray-700" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00ff00]/20 via-[#ff0000]/40 to-[#00ff00]/20 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CyberCard 
                  className="h-full relative" 
                  glowColor={step.color}
                  hoverEffect
                >
                  {/* Step code */}
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-mono text-gray-600 uppercase">
                      {step.code}
                    </span>
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 flex items-center justify-center bg-black border-2 border-[#ff0000]">
                    <span className="text-sm font-display font-bold text-[#ff0000]">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`mb-4 mt-4 ${
                    step.color === 'cyan' ? 'text-[#00f0ff]' :
                    step.color === 'green' ? 'text-[#00ff00]' :
                    step.color === 'yellow' ? 'text-[#ffff00]' :
                    'text-[#ff0000]'
                  }`}>
                    <div className={`w-12 h-12 flex items-center justify-center border ${
                      step.color === 'cyan' ? 'border-[#00f0ff]/50 bg-[#00f0ff]/10' :
                      step.color === 'green' ? 'border-[#00ff00]/50 bg-[#00ff00]/10' :
                      step.color === 'yellow' ? 'border-[#ffff00]/50 bg-[#ffff00]/10' :
                      'border-[#ff0000]/50 bg-[#ff0000]/10'
                    }`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute top-4 right-4 mt-6">
                    <span className="text-[10px] font-mono text-gray-500 uppercase">
                      {step.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-display font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-[#111111]/50 border border-[#00ff00]/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
              <span className="text-xs font-mono text-[#00ff00] uppercase">
                Sistema Online
              </span>
            </div>
            <div className="w-px h-4 bg-gray-700" />
            <span className="text-sm text-gray-400">
              Tiempo promedio: <span className="text-white font-mono">48 horas</span> primera entrega
            </span>
          </div>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="section-divider max-w-4xl mx-auto mt-24" />
    </section>
  );
}
