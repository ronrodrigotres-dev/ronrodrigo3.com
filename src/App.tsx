import { useState, useEffect, useRef } from 'react';
import './App.css';

// Tipos
interface AnalysisState {
  isRunning: boolean;
  progress: number;
  modules: {
    name: string;
    status: 'pending' | 'running' | 'completed';
  }[];
  dataNodes: number;
  errorsDetected: number;
  optimizationScore: number;
}

function App() {
  // Estados del formulario
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  
  // Estado del análisis
  const [analysis, setAnalysis] = useState<AnalysisState>({
    isRunning: false,
    progress: 0,
    modules: [
      { name: 'Arquitectura SEO escaneada', status: 'pending' },
      { name: 'Performance audit ejecutado', status: 'pending' },
      { name: 'Analizando funnels CRO', status: 'pending' },
      { name: 'Generando veredicto estratégico', status: 'pending' },
    ],
    dataNodes: 0,
    errorsDetected: 0,
    optimizationScore: 0,
  });

  const [showAnalysis, setShowAnalysis] = useState(false);
  const analysisRef = useRef<HTMLDivElement>(null);
  const [isPremium, setIsPremium] = useState(false);

  // Módulos disponibles
  const modules = [
    { id: 'auditoria', name: 'AUDITORÍA ESTRATÉGICA' },
    { id: 'cro', name: 'INGENIERÍA DE CONVERSIÓN (CRO)' },
    { id: 'seo', name: 'ARQUITECTURA SEO' },
    { id: 'growth', name: 'GROWTH & SEM INTELIGENTE' },
    { id: 'ecommerce', name: 'E-COMMERCE PERFORMANCE' },
    { id: 'transformacion', name: 'TRANSFORMACIÓN DIGITAL' },
    { id: 'geo', name: 'GEO', description: 'Generative Engine Optimization' },
  ];

  // Scroll suave al análisis
  useEffect(() => {
    if (showAnalysis && analysisRef.current) {
      analysisRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showAnalysis]);

  // Simulación del análisis
  useEffect(() => {
    if (!analysis.isRunning) return;

    const interval = setInterval(() => {
      setAnalysis(prev => {
        if (prev.progress >= 100) {
          return { ...prev, isRunning: false };
        }

        const newProgress = Math.min(prev.progress + Math.random() * 3 + 1, 100);
        const moduleIndex = Math.floor((newProgress / 100) * prev.modules.length);
        
        const updatedModules = prev.modules.map((mod, idx) => {
          if (idx < moduleIndex) return { ...mod, status: 'completed' as const };
          if (idx === moduleIndex && newProgress < 100) return { ...mod, status: 'running' as const };
          return mod;
        });

        return {
          ...prev,
          progress: newProgress,
          modules: updatedModules,
          dataNodes: Math.floor(newProgress * 42.7),
          errorsDetected: Math.floor(newProgress * 0.31),
          optimizationScore: Math.floor(60 + newProgress * 0.35),
        };
      });
    }, 80);

    return () => clearInterval(interval);
  }, [analysis.isRunning]);

  const handleStartDiagnostic = () => {
    const warRoom = document.getElementById('war-room');
    if (warRoom) {
      warRoom.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExecuteAnalysis = () => {
    if (!url || !name || !email || !selectedModule) return;
    
    setShowAnalysis(true);
    setAnalysis(prev => ({
      ...prev,
      isRunning: true,
      progress: 0,
      modules: prev.modules.map(m => ({ ...m, status: 'pending' as const })),
    }));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="text-emerald-400">✔</span>;
      case 'running':
        return <span className="text-amber-400">●</span>;
      default:
        return <span className="text-white/20">○</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono selection:bg-white/20">
      {/* Grid de fondo técnico */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Líneas decorativas esquinas */}
        <div className="absolute top-8 left-8 w-16 h-px bg-white/30" />
        <div className="absolute top-8 left-8 w-px h-16 bg-white/30" />
        <div className="absolute top-8 right-8 w-16 h-px bg-white/30" />
        <div className="absolute top-8 right-8 w-px h-16 bg-white/30" />
        <div className="absolute bottom-8 left-8 w-16 h-px bg-white/30" />
        <div className="absolute bottom-8 left-8 w-px h-16 bg-white/30" />
        <div className="absolute bottom-8 right-8 w-16 h-px bg-white/30" />
        <div className="absolute bottom-8 right-8 w-px h-16 bg-white/30" />

        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="ron3ia-glow text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter font-mono text-white">
              RON3IA
            </h1>
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-white/40" />
              <span className="text-xs tracking-[0.3em] text-white/50 uppercase">Enterprise System</span>
              <div className="w-12 h-px bg-white/40" />
            </div>
          </div>

          {/* H1 Principal */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mb-6 text-white/90">
            Sistema Autónomo de Diagnóstico Digital
          </h2>

          {/* Subtexto */}
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Detecta pérdidas, optimiza conversiones y ejecuta decisiones estratégicas.
          </p>

          {/* Botón Principal Industrial */}
          <button
            onClick={handleStartDiagnostic}
            className="group relative px-12 py-5 bg-white text-black font-mono text-sm tracking-widest uppercase transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
          >
            <span className="relative z-10">[ INICIAR DIAGNÓSTICO ]</span>
            {/* Borde decorativo */}
            <div className="absolute -inset-[1px] border border-white/20 pointer-events-none" />
          </button>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-widest text-white/30 uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* WAR ROOM — CENTRO DEL SISTEMA */}
      <section id="war-room" className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header del panel */}
          <div className="border border-white/10 bg-[#0f0f0f]">
            {/* Barra superior */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-500" />
                <span className="text-xs tracking-widest text-white/60 uppercase">War Room</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/40">SYS.ONLINE</span>
                <span className="text-[10px] text-emerald-400">●</span>
              </div>
            </div>

            <div className="p-8 sm:p-12">
              {/* Título */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-mono text-white mb-2">
                  Configuración de Análisis
                </h2>
                <div className="w-24 h-px bg-white/30" />
              </div>

              {/* Inputs del cliente */}
              <div className="grid sm:grid-cols-3 gap-6 mb-12">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest text-white/40 uppercase block">
                    URL del Cliente
                  </label>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition-colors font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest text-white/40 uppercase block">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="..."
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition-colors font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest text-white/40 uppercase block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="..."
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition-colors font-mono"
                  />
                </div>
              </div>

              {/* Separador */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-[10px] tracking-widest text-white/40 uppercase">
                  Selecciona un módulo estratégico
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Grid de módulos - Estilo switches industriales */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
                {modules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => setSelectedModule(module.id)}
                    className={`
                      relative px-6 py-5 text-left font-mono text-xs tracking-wider uppercase
                      border transition-all duration-150
                      ${selectedModule === module.id 
                        ? 'border-white bg-white/10 text-white' 
                        : 'border-white/20 bg-transparent text-white/60 hover:border-white/40 hover:text-white/80'
                      }
                    `}
                  >
                    <span className="flex flex-col items-start gap-1">
                      <span className="flex items-center gap-3">
                        <span className={`
                          w-1.5 h-1.5 transition-colors
                          ${selectedModule === module.id ? 'bg-emerald-400' : 'bg-white/30'}
                        `} />
                        {module.name}
                      </span>
                      {'description' in module && module.description && (
                        <span className="text-[10px] text-white/40 normal-case tracking-normal pl-4">
                          {module.description}
                        </span>
                      )}
                    </span>
                    {/* Indicador de selección */}
                    {selectedModule === module.id && (
                      <div className="absolute top-0 right-0 w-0 h-0 border-t-[8px] border-r-[8px] border-t-emerald-400 border-r-emerald-400 border-l-transparent border-b-transparent" />
                    )}
                  </button>
                ))}
              </div>

              {/* Botón Final - Ejecutar Análisis */}
              <button
                onClick={handleExecuteAnalysis}
                disabled={!url || !name || !email || !selectedModule}
                className={`
                  w-full py-6 font-mono text-sm tracking-[0.2em] uppercase
                  border-2 transition-all duration-200
                  ${!url || !name || !email || !selectedModule
                    ? 'border-white/10 text-white/30 cursor-not-allowed'
                    : 'border-white bg-white text-black hover:bg-white/90 active:scale-[0.99]'
                  }
                `}
              >
                [ EJECUTAR ANÁLISIS RON3IA ]
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INDICADOR DE ANÁLISIS - PANEL CONSOLA */}
      {showAnalysis && (
        <section ref={analysisRef} className="relative py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="border border-white/10 bg-[#0a0a0a]">
              {/* Header de consola */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-widest text-white/60 uppercase">RON3IA ANALYSIS ENGINE</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-white/40">v2.4.1</span>
                  <span className="w-2 h-2 bg-amber-400 animate-pulse" />
                </div>
              </div>

              <div className="p-8 sm:p-12 font-mono">
                {/* Barra de progreso */}
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-white/60">PROGRESS</span>
                    <span className="text-xs text-white">{Math.floor(analysis.progress)}%</span>
                  </div>
                  <div className="h-2 bg-white/10 relative overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-white transition-all duration-100"
                      style={{ width: `${analysis.progress}%` }}
                    />
                  </div>
                  {/* Representación ASCII de la barra */}
                  <div className="mt-2 text-xs text-white/40 tracking-widest">
                    [{Array(20).fill(0).map((_, i) => 
                      i < Math.floor(analysis.progress / 5) ? '█' : '░'
                    ).join('')}] {Math.floor(analysis.progress)}%
                  </div>
                </div>

                {/* Módulos ejecutándose */}
                <div className="space-y-3 mb-10">
                  {analysis.modules.map((module, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-4 text-sm"
                    >
                      <span className="w-4">{getStatusIcon(module.status)}</span>
                      <span className={`
                        ${module.status === 'completed' ? 'text-emerald-400/80' : ''}
                        ${module.status === 'running' ? 'text-amber-400' : ''}
                        ${module.status === 'pending' ? 'text-white/30' : ''}
                      `}>
                        {module.name}
                      </span>
                      {module.status === 'running' && (
                        <span className="text-[10px] text-amber-400/60 animate-pulse">...</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Separador */}
                <div className="h-px bg-white/10 mb-10" />

                {/* Contadores técnicos */}
                <div className="grid grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <span className="text-[10px] tracking-widest text-white/40 uppercase block">
                      Data Nodes Scanned
                    </span>
                    <span className="text-2xl sm:text-3xl font-mono text-white tabular-nums">
                      {analysis.dataNodes.toString().padStart(3, '0')}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] tracking-widest text-white/40 uppercase block">
                      Errors Detected
                    </span>
                    <span className="text-2xl sm:text-3xl font-mono text-amber-400 tabular-nums">
                      {analysis.errorsDetected.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] tracking-widest text-white/40 uppercase block">
                      Optimization Score
                    </span>
                    <span className="text-2xl sm:text-3xl font-mono text-emerald-400 tabular-nums">
                      {analysis.optimizationScore}
                    </span>
                  </div>
                </div>

                {/* Mensaje de completado */}
                {analysis.progress >= 100 && (
                  <div className="mt-10 pt-8 border-t border-white/10">
                    {isPremium ? (
                      <>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-emerald-400 text-xl">✔</span>
                          <span className="text-white font-mono">ANÁLISIS COMPLETADO</span>
                        </div>
                        <p className="text-white/60 text-sm mb-6">
                          El diagnóstico ha finalizado. Los resultados detallados están listos para su revisión.
                        </p>
                        <button className="px-8 py-4 border border-white text-white font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-200">
                          [ VER RESULTADOS COMPLETOS ]
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-emerald-400 text-xl">✔</span>
                          <span className="text-white font-mono text-sm tracking-widest uppercase">ANÁLISIS BÁSICO COMPLETADO</span>
                        </div>

                        {/* Score general */}
                        <div className="mb-8">
                          <span className="text-[10px] tracking-widest text-white/40 uppercase block mb-2">Score general</span>
                          <span className="text-3xl font-mono text-emerald-400 tabular-nums">{analysis.optimizationScore}</span>
                          <span className="text-white/40 text-sm font-mono ml-2">/ 100</span>
                        </div>

                        {/* 3 hallazgos simulados */}
                        <div className="space-y-3 mb-8">
                          <span className="text-[10px] tracking-widest text-white/40 uppercase block mb-3">Hallazgos detectados</span>
                          <div className="flex items-start gap-3 text-sm text-white/80 font-mono">
                            <span className="text-amber-400 shrink-0">•</span>
                            <span>SEO técnico presenta oportunidades críticas.</span>
                          </div>
                          <div className="flex items-start gap-3 text-sm text-white/80 font-mono">
                            <span className="text-amber-400 shrink-0">•</span>
                            <span>UX móvil detecta fricción en navegación.</span>
                          </div>
                          <div className="flex items-start gap-3 text-sm text-white/80 font-mono">
                            <span className="text-amber-400 shrink-0">•</span>
                            <span>GEO visibility no optimizada para motores IA.</span>
                          </div>
                        </div>

                        {/* Botón de conversión */}
                        <button
                          type="button"
                          className="w-full py-6 font-mono text-sm tracking-[0.2em] uppercase border-2 border-white bg-white text-black hover:bg-white/90 active:scale-[0.99] transition-all duration-200 mb-6"
                          onClick={() => setIsPremium(true)}
                        >
                          [ DESBLOQUEAR DIAGNÓSTICO COMPLETO ]
                        </button>

                        {/* Mensaje vendedor */}
                        <p className="text-white/60 text-sm leading-relaxed">
                          RON3IA ha detectado mejoras accionables listas.
                          <br />
                          Desbloquea el diagnóstico completo para ver:
                        </p>
                        <ul className="mt-3 space-y-1.5 text-white/50 text-sm font-mono list-none pl-0">
                          <li>— Prioridades exactas</li>
                          <li>— Impacto financiero estimado</li>
                          <li>— Plan de acción inmediato</li>
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER TÉCNICO */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold font-mono">RON3IA</span>
            <span className="text-[10px] text-white/40">v2.4.1</span>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-[10px] tracking-widest text-white/40 uppercase">Enterprise System</span>
            <span className="text-[10px] tracking-widest text-white/40 uppercase">© 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
