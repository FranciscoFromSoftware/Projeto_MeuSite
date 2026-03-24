import React, { useState, useEffect } from 'react';
import { Layout as LayoutIcon, Database, Copy, Download, Activity, Calendar, Check, Thermometer } from 'lucide-react';

export const Templates: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Função de Download .txt
  const handleDownload = (code: string, fileName: string) => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${fileName}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Medidas DAX
  const heatmapDax = `HeatmapVenda1s SVG = ...`; // Seu código anterior
  const termometroDax = `TermometroMeta_Animado_SVG = 
VAR CorBarra = "#C0012A"
VAR CorFundo = "#FFFFFF"
VAR CorBorda = "#C0C0C0"
-- ... (Código completo do termômetro com animações)`;

  const svgs = [
    { 
      id: 'THERMO_ANIM', 
      title: 'Animated Goal Tracker', 
      color: 'text-secondary', 
      isDax: true,
      code: termometroDax,
      fileName: 'Medida_Termometro_Animado',
      preview: (
        <svg viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="gradReflexo" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0.4" />
              <stop offset="50%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="black" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {/* Estrutura do Termômetro */}
          <circle cx="90" cy="170" r="22" fill="#FFFFFF" stroke="#C0C0C0" strokeWidth="1" />
          <rect x="80" y="30" width="20" height="140" rx="10" fill="#FFFFFF" stroke="#C0C0C0" strokeWidth="1" />
          
          {/* Marcadores Laterais (Simulados) */}
          {[10, 20, 30].map(dia => (
             <rect key={dia} x="45" y={170 - (dia * 4)} width="8" height="3" fill="#2C9FA3" rx="1" />
          ))}

          {/* Bulbo e Barra Animada */}
          <circle cx="90" cy="170" r="21" fill="#C0012A" />
          <rect x="81" y="60" width="18" height="110" fill="#C0012A">
             <animate attributeName="height" from="0" to="110" dur="2s" fill="freeze" />
             <animate attributeName="y" from="170" to="60" dur="2s" fill="freeze" />
          </rect>
          <rect x="81" y="60" width="18" height="110" fill="url(#gradReflexo)" />

          {/* Textos */}
          <text x="90" y="174" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle" fill="white">75%</text>
          <text x="90" y="215" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#C0012A">R$ 45.200</text>
        </svg>
      )
    },
    { 
      id: 'HEATMAP_01', 
      title: 'Sales Heatmap v1.0', 
      color: 'text-primary', 
      isDax: true,
      code: heatmapDax,
      fileName: 'Medida_Heatmap_Vendas',
      preview: (
        <svg viewBox="0 0 320 280" className="w-full h-full">
            {/* ... Seu preview anterior do heatmap ... */}
            <rect width="320" height="280" fill="#f8f9fa" rx="4"/>
            <text x="160" y="150" textAnchor="middle" fill="#999" fontSize="20">Heatmap Preview</text>
        </svg>
      )
    }
  ];

  return (
    <div className="space-y-8">
      <div className="mb-12 border-l-4 border-primary pl-6 py-2 bg-primary/5">
        <h2 className="text-4xl font-headline font-black tracking-tight text-on-surface uppercase mb-1">Sector_Alpha: Resource_Hub</h2>
        <p className="font-mono text-sm text-primary/70">DATA_TYPE: SVG_DYNAMICS // STATUS: SYNCHRONIZED</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 space-y-6">
          <div className="flex items-center justify-between border-b border-outline pb-4">
            <div className="flex items-center gap-3">
              <LayoutIcon className="text-primary" size={20} />
              <h3 className="font-headline font-bold text-xl uppercase tracking-wider">SVG Graphics Foundry</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {svgs.map((svg) => (
              <div key={svg.id} className="bg-surface-low border border-outline p-2 flex flex-col gap-4 hover:border-secondary transition-all group relative overflow-hidden">
                {/* Badge de Animação */}
                {svg.id === 'THERMO_ANIM' && (
                  <div className="absolute top-4 right-4 z-20 bg-secondary text-surface text-[8px] font-bold px-2 py-0.5 rounded-full animate-pulse uppercase">
                    Animated
                  </div>
                )}

                {/* Área de Preview */}
                <div className="aspect-[4/5] flex items-center justify-center relative rounded-sm overflow-hidden bg-white p-6 shadow-inner">
                  {svg.preview}
                  <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                <div className="px-2 pb-2 space-y-3">
                  <div>
                    <h4 className={`font-headline font-bold uppercase text-sm ${svg.color}`}>{svg.title}</h4>
                    <p className="font-mono text-[9px] text-outline tracking-widest uppercase">POWER_BI_DAX // {svg.id}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => handleCopy(svg.code, svg.id)}
                      className="bg-surface-high border border-outline/20 py-2 font-mono text-[10px] uppercase hover:bg-secondary hover:text-surface transition-all flex items-center justify-center gap-2"
                    >
                      {copiedId === svg.id ? <Check size={12} /> : <Copy size={12} />}
                      {copiedId === svg.id ? 'Copied' : 'Copy'}
                    </button>
                    <button 
                      onClick={() => handleDownload(svg.code, svg.fileName || svg.id)}
                      className="bg-transparent border border-outline/10 py-2 font-mono text-[10px] uppercase text-outline-variant hover:border-secondary hover:text-secondary transition-all flex items-center justify-center gap-2"
                    >
                      <Download size={12} /> .TXT
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-8 bg-surface border border-outline/20 p-4 font-mono text-[10px] text-on-surface-variant">
        <p className="text-secondary">&gt;&gt; NEW_ASSET_LOADED: {svgs[0].title} [SYSTEM_ANIMATION_ENABLED]</p>
        <p>&gt;&gt; ASSET_ID: {svgs[0].id}</p>
      </div>
    </div>
  );
};