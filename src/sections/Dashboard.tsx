import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { CircularProgress, ProgressBar } from '@/components/ui-custom/ProgressBar';
import { CyberCard } from '@/components/ui-custom/CyberCard';
import { 
  Activity, 
  Zap, 
  Loader2,
  CheckCircle,
  AlertTriangle,
  Cpu,
  Scan,
  Calculator,
  Network,
  Play,
  Download,
  ArrowRight
} from 'lucide-react';

interface HealthMetric {
  label: string;
  value: number;
  max: number;
  color: 'red' | 'cyan' | 'green' | 'yellow';
}

const healthMetrics: HealthMetric[] = [
  { label: 'SEO_NODE_STATUS', value: 0, max: 100, color: 'cyan' },
  { label: 'PERFORMANCE_CORE', value: 0, max: 100, color: 'green' },
  { label: 'CONVERSION_ENGINE', value: 0, max: 100, color: 'red' },
  { label: 'ADS_EFFICIENCY', value: 0, max: 100, color: 'yellow' },
];

interface ConsoleMessage {
  type: 'system' | 'user' | 'response' | 'error' | 'feedback' | 'confirm';
  text: string;
  timestamp: Date;
}

// Micro-feedback messages
const microFeedbacks = [
  { icon: <Scan className="w-3 h-3" />, text: 'checking node integrity...', color: 'text-[#00ff00]' },
  { icon: <Calculator className="w-3 h-3" />, text: 'calculating baselines...', color: 'text-[#ffff00]' },
  { icon: <Network className="w-3 h-3" />, text: 'correlating patterns...', color: 'text-[#ff0000]' },
  { icon: <Cpu className="w-3 h-3" />, text: 'optimizing vectors...', color: 'text-[#00f0ff]' },
];

// Boot sequence messages
const bootSequence = [
  'BOOTING RON3IA CORE...',
  'CARGANDO MODELOS ANALÍTICOS...',
  'INTEGRANDO NODOS SEO / CRO / ADS...',
  'SISTEMA ONLINE.',
  'NUEVA SESIÓN DETECTADA.',
  'LISTO PARA URL.',
];

// Pre-scan messages
const preScanMessages = [
  'loading latency baselines...',
  'preparing seo nodes...',
  'initializing conversion matrix...',
  'syncing ad performance models...',
];

// Confirmation messages during analysis
const confirmMessages = [
  '✓ ARCHITECTURE INDEXED',
  '✓ SEO MAP GENERATED',
  '✓ FRICTION POINTS DETECTED',
  '✓ CONVERSION FUNNEL MAPPED',
  '✓ AD EFFICIENCY CALCULATED',
  '✓ CORRELATION MATRIX COMPLETE',
];

// Detect session info
const getSessionInfo = () => {
  const hour = new Date().getHours();
  const isDesktop = window.innerWidth > 1024;
  
  let timeContext = '';
  if (hour >= 6 && hour < 12) timeContext = 'MORNING SESSION';
  else if (hour >= 12 && hour < 18) timeContext = 'AFTERNOON SESSION';
  else if (hour >= 18 && hour < 22) timeContext = 'EVENING SESSION';
  else timeContext = 'NIGHT SESSION';
  
  const deviceContext = isDesktop ? 'DESKTOP' : 'MOBILE';
  
  return { timeContext, deviceContext };
};

export function Dashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [overallScore, setOverallScore] = useState(0);
  const [metrics, setMetrics] = useState<HealthMetric[]>(healthMetrics);
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [sessionInfo, setSessionInfo] = useState({ timeContext: '', deviceContext: '' });
  
  // Console state
  const [consoleInput, setConsoleInput] = useState('');
  const [messages, setMessages] = useState<ConsoleMessage[]>([]);
  const consoleEndRef = useRef<HTMLDivElement>(null);

  // Initialize session and boot sequence
  useEffect(() => {
    setSessionInfo(getSessionInfo());
    
    // Start boot sequence
    let msgIndex = 0;
    const bootInterval = setInterval(() => {
      if (msgIndex < bootSequence.length) {
        setMessages(prev => [...prev, { 
          type: 'system', 
          text: bootSequence[msgIndex], 
          timestamp: new Date() 
        }]);
        msgIndex++;
      } else {
        clearInterval(bootInterval);
        // Add session detection message
        const { timeContext, deviceContext } = getSessionInfo();
        setMessages(prev => [...prev, 
          { type: 'feedback', text: `SESSION FROM ${deviceContext} — ${timeContext}`, timestamp: new Date() },
          { type: 'feedback', text: 'PRE-SCAN PASSIVE ANALYSIS READY', timestamp: new Date() },
          { type: 'system', text: 'Ingresa URL o comando para iniciar escaneo profundo.', timestamp: new Date() },
        ]);
      }
    }, 400);

    return () => clearInterval(bootInterval);
  }, []);

  // Auto-scroll console
  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Micro-feedback rotation during analysis
  useEffect(() => {
    if (!isAnalyzing) return;
    
    const interval = setInterval(() => {
      setCurrentFeedback((prev) => (prev + 1) % microFeedbacks.length);
    }, 600);

    return () => clearInterval(interval);
  }, [isAnalyzing]);

  // Simulate analysis
  const startAnalysis = () => {
    if (isAnalyzing) return;
    
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    setOverallScore(0);
    setMetrics(healthMetrics.map(m => ({ ...m, value: 0 })));

    // Add pre-scan messages
    let preScanIndex = 0;
    const preScanInterval = setInterval(() => {
      if (preScanIndex < preScanMessages.length) {
        addMessage('feedback', preScanMessages[preScanIndex]);
        preScanIndex++;
      } else {
        clearInterval(preScanInterval);
        runAnalysis();
      }
    }, 300);
  };

  const runAnalysis = () => {
    // Add system messages with confirmations
    const analysisSteps = [
      { msg: 'Iniciando PROTOCOL_CORE_SCAN...', confirm: 0 },
      { msg: 'Indexando arquitectura del sitio...', confirm: 0 },
      { msg: 'Analizando nodos SEO...', confirm: 1 },
      { msg: 'Mapeando funnel de conversión...', confirm: 2 },
      { msg: 'Evaluando eficiencia de ads...', confirm: 3 },
      { msg: 'Calculando métricas de performance...', confirm: 4 },
      { msg: 'Generando matriz de correlación...', confirm: 5 },
      { msg: 'Compilando veredicto final...', confirm: -1 },
    ];

    let stepIndex = 0;
    const stepInterval = setInterval(() => {
      if (stepIndex < analysisSteps.length) {
        addMessage('system', analysisSteps[stepIndex].msg);
        if (analysisSteps[stepIndex].confirm >= 0) {
          setTimeout(() => {
            addMessage('confirm', confirmMessages[analysisSteps[stepIndex].confirm]);
          }, 300);
        }
        setCurrentFeedback(stepIndex % microFeedbacks.length);
        stepIndex++;
      } else {
        clearInterval(stepInterval);
        completeAnalysis();
      }
    }, 500);
  };

  const completeAnalysis = () => {
    // Generate random scores
    const newMetrics = healthMetrics.map(m => ({
      ...m,
      value: Math.floor(Math.random() * 30) + 60, // 60-90 range
    }));
    
    const avgScore = Math.floor(newMetrics.reduce((acc, m) => acc + m.value, 0) / newMetrics.length);
    
    setMetrics(newMetrics);
    setOverallScore(avgScore);
    setIsAnalyzing(false);
    setAnalysisComplete(true);
    
    addMessage('response', '═══════════════════════════════════════');
    addMessage('response', `VEREDICTO GENERADO — SCORE: ${avgScore}/100`);
    addMessage('response', '═══════════════════════════════════════');
    addMessage('system', 'Kit de implementación disponible. Revisa el panel de salud digital.');
  };

  const addMessage = (type: ConsoleMessage['type'], text: string) => {
    setMessages(prev => [...prev, { type, text, timestamp: new Date() }]);
  };

  const handleConsoleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consoleInput.trim()) return;

    addMessage('user', consoleInput);
    
    // Simulate AI response
    setTimeout(() => {
      if (consoleInput.toLowerCase().includes('auditar') || consoleInput.toLowerCase().includes('analizar') || consoleInput.startsWith('http')) {
        addMessage('response', `RECIBIDO: ${consoleInput}`);
        addMessage('system', 'Iniciando escaneo profundo...');
        startAnalysis();
      } else if (consoleInput.toLowerCase().includes('ayuda') || consoleInput.toLowerCase().includes('help')) {
        addMessage('response', 'COMANDOS DISPONIBLES:');
        addMessage('response', '• auditar [url] — Escaneo completo');
        addMessage('response', '• analizar seo — Análisis SEO profundo');
        addMessage('response', '• evaluar conversiones — Análisis CRO');
        addMessage('response', '• reporte — Generar reporte actual');
      } else {
        addMessage('response', 'Comando no reconocido. Escribe "ayuda" para ver opciones.');
      }
    }, 300);

    setConsoleInput('');
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-[#00ff00]';
    if (score >= 60) return 'text-[#ffff00]';
    return 'text-[#ff0000]';
  };

  const getScoreStatus = (score: number) => {
    if (score >= 80) return 'OPTIMAL';
    if (score >= 60) return 'IMPROVABLE';
    return 'CRITICAL';
  };

  // Pipeline steps
  const pipelineSteps = [
    { label: 'INPUT', active: consoleInput.length > 0 || isAnalyzing || analysisComplete },
    { label: 'SCAN', active: isAnalyzing || analysisComplete },
    { label: 'CORRELATION', active: isAnalyzing || analysisComplete },
    { label: 'SCORE', active: analysisComplete },
    { label: 'VEREDICT', active: analysisComplete },
    { label: 'ACTION KIT', active: analysisComplete },
  ];

  return (
    <section id="dashboard" ref={ref} className="relative py-24 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff0000]/10 border border-[#ff0000]/30 rounded-full mb-4">
            <Cpu className="w-4 h-4 text-[#ff0000]" />
            <span className="text-xs font-mono text-[#ff0000] uppercase tracking-wider">
              Centro de Operaciones
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            <span className="text-[#ff0000]">RON3IA</span> HUB
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sistema operativo autónomo de diagnóstico digital. 
            Todos los módulos activables desde este centro de comando.
          </p>
        </motion.div>
      </div>

      {/* Pipeline Visual */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {pipelineSteps.map((step, index) => (
            <div key={step.label} className="flex items-center">
              <div 
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition-all duration-300 ${
                  step.active 
                    ? 'border-[#00ff00] text-[#00ff00] bg-[#00ff00]/10' 
                    : 'border-[#111111] text-gray-600'
                }`}
              >
                {step.label}
              </div>
              {index < pipelineSteps.length - 1 && (
                <ArrowRight className={`w-4 h-4 mx-1 transition-colors ${
                  step.active ? 'text-[#00ff00]' : 'text-gray-700'
                }`} />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dashboard Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Score de Salud Digital */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <CyberCard className="h-full" glowColor="red">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-[#ff0000]" />
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                    System Health Monitor
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-[#00ff00]">ONLINE</span>
                </div>
              </div>

              {/* Overall Score */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <CircularProgress 
                    value={overallScore} 
                    size={140} 
                    color={overallScore >= 60 ? 'green' : 'red'}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-3xl font-display font-bold ${getScoreColor(overallScore)}`}>
                      {overallScore}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">/100</span>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="text-center mb-6">
                {!analysisComplete && !isAnalyzing ? (
                  <motion.span 
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider border border-[#00ff00]/50 text-[#00ff00] bg-[#00ff00]/10"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-[#00ff00] rounded-full" />
                    STATUS: READY FOR ANALYSIS
                  </motion.span>
                ) : (
                  <span className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider border ${
                    overallScore >= 60 
                      ? 'border-[#00ff00]/50 text-[#00ff00] bg-[#00ff00]/10' 
                      : 'border-[#ff0000]/50 text-[#ff0000] bg-[#ff0000]/10'
                  }`}>
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-3 h-3 animate-spin" />
                        ANALYZING...
                      </>
                    ) : (
                      <>
                        {overallScore >= 60 ? <CheckCircle className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                        {getScoreStatus(overallScore)}
                      </>
                    )}
                  </span>
                )}
              </div>

              {/* Micro-feedback during analysis */}
              <AnimatePresence>
                {isAnalyzing && (
                  <motion.div
                    className="flex justify-center mb-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono ${microFeedbacks[currentFeedback].color} bg-black/50 border border-current`}>
                      {microFeedbacks[currentFeedback].icon}
                      {microFeedbacks[currentFeedback].text}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Metrics */}
              <div className="space-y-4">
                {metrics.map((metric, index) => (
                  <ProgressBar
                    key={metric.label}
                    label={metric.label}
                    value={metric.value}
                    max={metric.max}
                    color={metric.color}
                    size="sm"
                    delay={index * 0.1}
                  />
                ))}
              </div>

              {/* Action Kit CTA */}
              {analysisComplete && (
                <motion.div
                  className="mt-6 pt-4 border-t border-[#111111]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#00ff00]/10 border border-[#00ff00]/50 text-[#00ff00] hover:bg-[#00ff00] hover:text-black transition-colors font-mono uppercase text-sm">
                    <Download className="w-4 h-4" />
                    GENERAR KIT IMPLEMENTACIÓN
                  </button>
                </motion.div>
              )}
            </CyberCard>
          </motion.div>

          {/* Consola de Comando */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <CyberCard className="h-full flex flex-col" glowColor="cyan">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#00f0ff]" />
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                    Centro de Comando
                  </h3>
                </div>
                {sessionInfo.deviceContext && (
                  <span className="text-[10px] font-mono text-gray-500">
                    {sessionInfo.deviceContext} — {sessionInfo.timeContext}
                  </span>
                )}
              </div>

              {/* Console Output */}
              <div 
                className="flex-grow bg-black/80 border border-[#111111] rounded p-4 mb-4 font-mono text-sm overflow-y-auto max-h-[320px]"
                style={{ minHeight: '280px' }}
              >
                {messages.map((msg, index) => (
                  <div key={index} className="mb-1.5">
                    <span className="text-gray-600 text-xs">
                      [{msg.timestamp.toLocaleTimeString()}]
                    </span>
                    {' '}
                    {msg.type === 'system' && (
                      <span className="text-[#00ff00]">
                        <span className="text-[#ff0000]">{'>'}</span> {msg.text}
                      </span>
                    )}
                    {msg.type === 'user' && (
                      <span className="text-[#00f0ff]">
                        <span className="text-gray-500">{'$'}</span> {msg.text}
                      </span>
                    )}
                    {msg.type === 'response' && (
                      <span className="text-white">{msg.text}</span>
                    )}
                    {msg.type === 'feedback' && (
                      <span className="text-[#ffff00]">:: {msg.text}</span>
                    )}
                    {msg.type === 'confirm' && (
                      <span className="text-[#00ff00] font-bold">{msg.text}</span>
                    )}
                    {msg.type === 'error' && (
                      <span className="text-[#ff0000]">! {msg.text}</span>
                    )}
                  </div>
                ))}
                <div ref={consoleEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleConsoleSubmit} className="relative">
                <input
                  type="text"
                  value={consoleInput}
                  onChange={(e) => setConsoleInput(e.target.value)}
                  placeholder="auditar https://dominio.com | analizar seo | evaluar conversiones"
                  className="w-full bg-[#111111]/50 border border-[#111111] focus:border-[#00f0ff] text-white placeholder-gray-600 px-4 py-3 pr-28 font-mono text-sm outline-none transition-colors"
                  disabled={isAnalyzing}
                />
                <button
                  type="submit"
                  disabled={isAnalyzing || !consoleInput.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#ff0000] text-white text-xs font-mono uppercase hover:bg-[#ff3333] disabled:opacity-50 disabled:bg-gray-700 transition-colors"
                  style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 30%)' }}
                >
                  {isAnalyzing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <span className="flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      EJECUTAR
                    </span>
                  )}
                </button>
              </form>

              {/* Quick Commands */}
              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  onClick={() => {
                    setConsoleInput('auditar https://ejemplo.com');
                  }}
                  disabled={isAnalyzing}
                  className="px-3 py-1.5 text-xs font-mono bg-[#111111]/50 border border-[#111111] text-gray-400 hover:text-white hover:border-[#ff0000] transition-colors"
                >
                  auditar URL
                </button>
                <button
                  onClick={() => {
                    addMessage('system', 'COMANDOS DISPONIBLES:');
                    addMessage('response', '• auditar [url] — Escaneo completo');
                    addMessage('response', '• analizar seo — Análisis SEO profundo');
                    addMessage('response', '• evaluar conversiones — Análisis CRO');
                  }}
                  className="px-3 py-1.5 text-xs font-mono bg-[#111111]/50 border border-[#111111] text-gray-400 hover:text-white transition-colors"
                >
                  ayuda
                </button>
              </div>
            </CyberCard>
          </motion.div>
        </div>

        {/* Learning message */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xs text-gray-600 font-mono">
            RON3IA aprende de cada sesión para mejorar sus modelos predictivos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
