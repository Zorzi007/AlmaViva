import { Flame, Github, Linkedin, Sparkles } from 'lucide-react';
import { type MouseEventHandler } from 'react';
import { motion } from 'framer-motion';

interface AppHeaderProps {
  onToggleTheme: MouseEventHandler<HTMLButtonElement>;
  theme: 'light' | 'dark';
}

const navItems = [
  { label: 'Visão Geral', href: '#overview' },
  { label: 'Produtos', href: '#products' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contato', href: '#contact' }
];

export const AppHeader = ({ onToggleTheme, theme }: AppHeaderProps) => {
  return (
    <header className="app-header">
      <div className="brand">
        <Sparkles className="brand-icon" size={26} />
        <div>
          <p className="brand-title">QualityMon Evolution</p>
          <p className="brand-subtitle">Inteligência Orquestrada para CX & DC</p>
        </div>
      </div>
      <nav className="main-nav" aria-label="Navegação principal">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button type="button" className="theme-toggle" onClick={onToggleTheme}>
          {theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
        </button>
        <div className="social-group">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            href="https://www.linkedin.com"
            aria-label="LinkedIn"
            className="social-link"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            href="https://github.com"
            aria-label="GitHub"
            className="social-link"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            href="#insights"
            aria-label="Relatórios"
            className="social-link"
          >
            <Flame size={20} />
          </motion.a>
        </div>
      </div>
    </header>
  );
};
