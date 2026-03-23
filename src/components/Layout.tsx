import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Terminal, FolderOpen, Network, Settings, Download, Github, Linkedin, Code2, BookOpen, Home } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'DASHBOARD', icon: Home },
    { path: '/sobre', label: 'SOBRE_MIM', icon: Terminal },
    { path: '/certificacoes', label: 'CERTIFICAÇÕES', icon: FolderOpen },
    { path: '/projetos', label: 'PROJETOS', icon: Network },
    { path: '/modelos', label: 'MODELOS', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body overflow-x-hidden">
      <div className="fixed inset-0 z-[100] scanline-overlay opacity-20 pointer-events-none" />
      
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center py-4 bg-surface-low border-r border-primary/10 z-40">
        <div className="flex flex-col gap-6 w-full px-2 mt-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex flex-col items-center gap-1 py-3 w-full transition-all active:scale-95",
                isActive 
                  ? "bg-primary/15 text-primary border-r-2 border-primary" 
                  : "text-surface-bright hover:bg-primary/10 hover:text-primary"
              )}
            >
              <item.icon size={20} />
              <span className="font-mono text-[9px] uppercase">{item.label.split('_')[0]}</span>
            </NavLink>
          ))}
        </div>

        <div className="mt-auto w-full px-2">
          <button className="flex flex-col items-center gap-1 py-3 w-full text-primary hover:text-secondary transition-all active:scale-95">
            <Download size={20} />
            <span className="font-mono text-[9px] uppercase">CURRÍCULO</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-20 pb-40 min-h-screen px-8 md:px-12 pt-8 circuit-bg">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full flex justify-between items-center px-8 py-3 bg-surface border-t border-surface-bright cursor-crosshair">
        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] tracking-[0.2em] text-secondary uppercase">
            ©2026 // ALL RIGHTS RESERVED
          </span>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center gap-4 absolute left-1/2 transform -translate-x-1/2">
          <a
            href="https://github.com/FranciscoFromSoftware"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all text-primary hover:text-primary"
            title="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/francisco-henrique-lomas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all text-primary hover:text-primary"
            title="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://www.kaggle.com/franciscohlomas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all text-primary hover:text-primary"
            title="Kaggle"
          >
            <Code2 size={16} />
          </a>
          <a
            href="https://rpubs.com/XscientFHL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all text-primary hover:text-primary"
            title="RPubs"
          >
            <BookOpen size={16} />
          </a>
        </div>
        
        <div className="flex gap-8">
          <span className="font-mono text-[10px] tracking-[0.2em] text-surface-bright uppercase">
            ATUALIZAÇÃO DOS DADOS: 23/03/2026
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase">
            PROGRESSO EM ANDAMENTO
          </span>
        </div>
      </footer>
    </div>
  );
};
