import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ServiceCard } from '@/components/ui-custom/CyberCard';
import { 
  Search, 
  TrendingUp, 
  Target, 
  Rocket, 
  ShoppingCart, 
  Bot,
  ArrowRight,
  Cpu
} from 'lucide-react';

const protocols = [
  {
    code: 'PROTOCOL_CORE_SCAN',
    icon: <Search className="w-6 h-6" />,
    title: 'Auditoría Estratégica™',
    description: 'Detección inteligente de fugas de margen y reducción de riesgo operativo mediante análisis profundo de tu ecosistema digital.',
    features: [
      'Análisis de funnel completo',
      'Detección de puntos de fricción',
      'Mapeo de customer journey',
      'Reporte ejecutivo detallado',
    ],
    ctaText: 'ACTIVAR PROTOCOLO',
  },
  {
    code: 'ENGINE_CONVERSION',
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Ingeniería de Conversión',
    description: 'Incremento matemático de la rentabilidad y el valor por cada cliente mediante técnicas avanzadas de CRO.',
    features: [
      'A/B testing automatizado',
      'Optimización de landing pages',
      'Mejora de tasas de conversión',
      'Análisis de comportamiento',
    ],
    ctaText: 'ACTIVAR PROTOCOLO',
  },
  {
    code: 'SEO_CORE_NODE',
    icon: <Target className="w-6 h-6" />,
    title: 'Arquitectura SEO',
    description: 'Dominio orgánico de mercado para eliminar la dependencia publicitaria y construir tráfico sostenible.',
    features: [
      'Auditoría técnica completa',
      'Optimización on-page',
      'Estrategia de contenidos',
      'Link building estratégico',
    ],
    ctaText: 'ACTIVAR PROTOCOLO',
  },
  {
    code: 'PERFORMANCE_ENGINE',
    icon: <Rocket className="w-6 h-6" />,
    title: 'Growth & SEM Inteligente',
    description: 'Maximización del retorno mediante la asignación precisa de capital digital en campañas publicitarias.',
    features: [
      'Gestión de Google Ads',
      'Meta Ads optimization',
      'Remarketing avanzado',
      'Attribution modeling',
    ],
    ctaText: 'ACTIVAR PROTOCOLO',
  },
  {
    code: 'COMMERCE_ARCHITECT',
    icon: <ShoppingCart className="w-6 h-6" />,
    title: 'Arquitectura E-Commerce',
    description: 'Estructura técnica de alto rendimiento para un escalado sin fricciones de tu tienda online.',
    features: [
      'Optimización de checkout',
      'Reducción de carritos abandonados',
      'Personalización de UX',
      'Integración de pasarelas',
    ],
    ctaText: 'ACTIVAR PROTOCOLO',
  },
  {
    code: 'AUTONOMOUS_ORCHESTRATOR',
    icon: <Bot className="w-6 h-6" />,
    title: 'Transformación Autónoma',
    description: 'Escalabilidad total del negocio sin aumentar la estructura de costos mediante automatización con IA.',
    features: [
      'Automatización de procesos',
      'Chatbots inteligentes',
      'Integración de sistemas',
      'Workflows autónomos',
    ],
    ctaText: 'ACTIVAR PROTOCOLO',
  },
];

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleProtocolClick = () => {
    const dashboardSection = document.getElementById('dashboard');
    if (dashboardSection) {
      dashboardSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255, 0, 0, 0.1) 0%, transparent 40%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff0000]/10 border border-[#ff0000]/30 rounded-full mb-4">
            <Cpu className="w-4 h-4 text-[#ff0000]" />
            <span className="text-xs font-mono text-[#ff0000] uppercase tracking-wider">
              Módulos del Sistema
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Protocolos <span className="text-[#ff0000]">Activables</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Seis vectores de optimización diseñados para transformar cada aspecto 
            crítico de tu presencia digital. Haz clic para activar.
          </p>
        </motion.div>

        {/* Protocols Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {protocols.map((protocol, index) => (
            <motion.div
              key={protocol.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                {/* PROTOCOLO DISPONIBLE badge */}
                <div className="absolute -top-2 right-4 z-20 px-2 py-1 text-[10px] font-mono uppercase tracking-wider bg-[#00ff00] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  PROTOCOLO DISPONIBLE
                </div>
                
                {/* Protocol Code */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-mono text-[#ff0000]/60 uppercase">
                    {protocol.code}
                  </span>
                </div>
                
                <ServiceCard
                  icon={protocol.icon}
                  title={protocol.title}
                  description={protocol.description}
                  features={protocol.features}
                  ctaText={protocol.ctaText}
                  ctaAction={handleProtocolClick}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-500 mb-4 font-mono text-sm">
            ¿Necesitas un protocolo personalizado?
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#ff0000] text-[#ff0000] hover:bg-[#ff0000] hover:text-white transition-colors font-mono uppercase tracking-wider text-sm"
            style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 75%, 92% 100%, 0 100%, 0 25%)' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Solicitar Protocolo Custom
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="section-divider max-w-4xl mx-auto mt-24" />
    </section>
  );
}
