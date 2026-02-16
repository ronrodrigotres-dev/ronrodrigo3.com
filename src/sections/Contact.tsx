import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { CyberCard } from '@/components/ui-custom/CyberCard';
import { CyberButton } from '@/components/ui-custom/CyberButton';
import { 
  Mail, 
  Send, 
  Calendar,
  MessageSquare,
  Linkedin,
  Twitter,
  CheckCircle,
  Loader2,
  Cpu,
  User,
  ArrowRight
} from 'lucide-react';

const contactMethods = [
  {
    icon: <Calendar className="w-5 h-5" />,
    title: 'Agendar Llamada',
    description: '30 minutos para conocer tu proyecto',
    action: 'Agendar',
    href: '#calendar',
    color: 'cyan',
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: 'WhatsApp',
    description: 'Respuesta en menos de 1 hora',
    action: 'Escríbenos',
    href: 'https://wa.me/1234567890',
    color: 'green',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Email',
    description: 'hola@ron3ia.com',
    action: 'Enviar Email',
    href: 'mailto:hola@ron3ia.com',
    color: 'red',
  },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset after showing success
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 0, 0, 0.1) 0%, transparent 60%)',
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
            <User className="w-4 h-4 text-[#ff0000]" />
            <span className="text-xs font-mono text-[#ff0000] uppercase tracking-wider">
              Interfaz Opcional
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Human Interface <span className="text-[#ff0000]">(Optional)</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-4">
            RON3IA opera de forma autónoma. Esta interfaz solo es necesaria 
            si deseas interacción humana adicional.
          </p>

          <div className="inline-flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#111111]/50 border border-[#00ff00]/30">
              <Cpu className="w-4 h-4 text-[#00ff00]" />
              <span className="text-xs font-mono text-[#00ff00]">
                Para diagnóstico inmediato, usa el Centro de Comando
              </span>
              <ArrowRight className="w-4 h-4 text-[#00ff00]" />
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <motion.div
            className="lg:col-span-1 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-display font-bold text-white mb-4">
              Canales Directos
            </h3>
            
            {contactMethods.map((method) => (
              <CyberCard
                key={method.title}
                className="group cursor-pointer"
                glowColor={method.color as 'red' | 'cyan' | 'green'}
                hoverEffect
              >
                <a 
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4"
                >
                  <div className={`w-12 h-12 flex items-center justify-center border ${
                    method.color === 'cyan' ? 'border-[#00f0ff]/50 bg-[#00f0ff]/10 text-[#00f0ff]' :
                    method.color === 'green' ? 'border-[#00ff00]/50 bg-[#00ff00]/10 text-[#00ff00]' :
                    'border-[#ff0000]/50 bg-[#ff0000]/10 text-[#ff0000]'
                  }`}>
                    {method.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-display font-bold text-white group-hover:text-[#ff0000] transition-colors">
                      {method.title}
                    </h4>
                    <p className="text-sm text-gray-500">{method.description}</p>
                  </div>
                  <span className="text-xs font-mono text-gray-600 group-hover:text-white transition-colors">
                    {method.action} →
                  </span>
                </a>
              </CyberCard>
            ))}

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-4">
                Síguenos
              </h4>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com/company/ron3ia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#111111] text-gray-400 hover:text-[#00ff00] hover:border-[#00ff00] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/ron3ia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#111111] text-gray-400 hover:text-[#00ff00] hover:border-[#00ff00] transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Response time */}
            <div className="mt-8 p-4 bg-[#111111]/50 border border-[#111111]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
                <span className="text-xs font-mono text-[#00ff00] uppercase">
                  Sistema Autónomo Online
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Interacción humana: <span className="text-white">{'<'} 1 hora</span>
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <CyberCard className="h-full" glowColor="red">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#ff0000]" />
                  <h3 className="text-lg font-display font-bold text-white">
                    Formulario de Contacto Humano
                  </h3>
                </div>
                <span className="text-xs font-mono text-gray-500">
                  Solo si necesitas interacción humana
                </span>
              </div>

              {submitStatus === 'success' ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-[#00ff00]/20 border border-[#00ff00]/50 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-[#00ff00]" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">
                    Mensaje Enviado
                  </h4>
                  <p className="text-gray-400">
                    Un operador humano responderá en menos de 1 hora.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black border border-[#111111] focus:border-[#ff0000] text-white placeholder-gray-600 px-4 py-3 outline-none transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black border border-[#111111] focus:border-[#ff0000] text-white placeholder-gray-600 px-4 py-3 outline-none transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-black border border-[#111111] focus:border-[#ff0000] text-white px-4 py-3 outline-none transition-colors"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                        Protocolo de Interés
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-black border border-[#111111] focus:border-[#ff0000] text-white px-4 py-3 outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Selecciona un protocolo</option>
                        <option value="auditoria">PROTOCOL_CORE_SCAN</option>
                        <option value="cro">ENGINE_CONVERSION</option>
                        <option value="seo">SEO_CORE_NODE</option>
                        <option value="ads">PERFORMANCE_ENGINE</option>
                        <option value="ecommerce">COMMERCE_ARCHITECT</option>
                        <option value="automation">AUTONOMOUS_ORCHESTRATOR</option>
                        <option value="otro">Otro / No estoy seguro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-black border border-[#111111] focus:border-[#ff0000] text-white px-4 py-3 outline-none transition-colors resize-none"
                      placeholder="Describe tu proyecto y objetivos..."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <p className="text-xs text-gray-500">
                      * Campos obligatorios
                    </p>
                    <CyberButton
                      type="submit"
                      variant="primary"
                      size="md"
                      icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar a Operador'}
                    </CyberButton>
                  </div>
                </form>
              )}
            </CyberCard>
          </motion.div>
        </div>

        {/* Bottom message */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="font-mono text-[#ff0000] text-sm uppercase tracking-widest">
            RON3IA OPERA BAJO PROTOCOLOS DE ANÁLISIS AUTÓNOMO Y VALIDACIÓN ESTRATÉGICA
          </p>
          <p className="text-xs text-gray-600 font-mono mt-2">
            RON3IA aprende de cada sesión para mejorar sus modelos predictivos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
