import { motion } from 'framer-motion';
import { 
  Zap, 
  Linkedin, 
  Twitter, 
  Github,
  Mail,
  ExternalLink,
  Cpu
} from 'lucide-react';

const footerLinks = {
  protocolos: [
    { label: 'Auditoría Estratégica', href: '#services' },
    { label: 'CRO & Conversión', href: '#services' },
    { label: 'SEO Técnico', href: '#services' },
    { label: 'Growth & SEM', href: '#services' },
    { label: 'E-Commerce', href: '#services' },
    { label: 'Automatización', href: '#services' },
  ],
  sistema: [
    { label: 'Sobre RON3IA', href: '#hero' },
    { label: 'Flujo de Operación', href: '#process' },
    { label: 'Simulaciones', href: '#cases' },
    { label: 'Blog', href: '#' },
    { label: 'Carreras', href: '#' },
  ],
  recursos: [
    { label: 'Documentación', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  legal: [
    { label: 'Privacidad', href: '#' },
    { label: 'Términos', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-[#050505] border-t border-[#111111]">
      {/* Top decoration line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff0000] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <motion.a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-2 mb-6 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 flex items-center justify-center border border-[#ff0000] bg-[#ff0000]/10 group-hover:bg-[#ff0000]/20 transition-colors">
                <Zap className="w-6 h-6 text-[#ff0000]" />
              </div>
              <span className="font-display font-bold text-2xl tracking-wider text-white logo-neon">
                RON<span className="text-[#00ff00] logo-three-neon">3</span>IA
              </span>
            </motion.a>
            
            <p className="text-gray-500 text-sm mb-6 max-w-sm leading-relaxed">
              Sistema autónomo de optimización financiera digital. 
              Detectamos ineficiencias y generamos decisiones estratégicas 
              accionables mediante inteligencia artificial.
            </p>

            {/* Contact info */}
            <div className="space-y-2 mb-6">
              <a 
                href="mailto:hola@ron3ia.com"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#ff0000] transition-colors"
              >
                <Mail className="w-4 h-4" />
                hola@ron3ia.com
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Cpu className="w-4 h-4" />
                Operando globalmente 24/7
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a 
                href="https://linkedin.com/company/ron3ia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[#111111] text-gray-400 hover:text-[#00ff00] hover:border-[#00ff00] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/ron3ia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[#111111] text-gray-400 hover:text-[#00ff00] hover:border-[#00ff00] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/ron3ia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[#111111] text-gray-400 hover:text-[#00ff00] hover:border-[#00ff00] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Protocolos Links */}
          <div>
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">
              Protocolos
            </h4>
            <ul className="space-y-2">
              {footerLinks.protocolos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-gray-400 hover:text-[#ff0000] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sistema Links */}
          <div>
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">
              Sistema
            </h4>
            <ul className="space-y-2">
              {footerLinks.sistema.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-gray-400 hover:text-[#ff0000] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">
              Recursos
            </h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#ff0000] transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#ff0000] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#111111]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600 font-mono">
              © {currentYear} RON3IA. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
                <span className="text-xs font-mono text-[#00ff00] uppercase">
                  Sistema Online
                </span>
              </div>
              <span className="text-xs text-gray-600 font-mono">
                v5.0.1
              </span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-8 text-center">
          <p className="font-mono text-xs text-gray-700 uppercase tracking-[0.3em]">
            LA EFICIENCIA DIGITAL NO ES OPCIONAL. ES ESTRUCTURAL.
          </p>
        </div>
      </div>
    </footer>
  );
}
