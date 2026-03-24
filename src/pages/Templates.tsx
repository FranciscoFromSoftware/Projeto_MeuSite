import React, { useState } from 'react';
import { Layout as LayoutIcon, Database, Copy, Download, Activity, Calendar, Check, FileCode } from 'lucide-react';

export const Templates: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Sua medida DAX completa
  const heatmapDax = `HeatmapVenda1s SVG = ...`; // Inserir aqui o código completo que você enviou
  
  const termometroDax = `TermometroMeta_Animado_SVG = 
VAR CorBarra = "#C0012A"
VAR CorFundo = "#FFFFFF"
VAR CorBorda = "#C0C0C0"
VAR CorDestaqueDia = "#2C9FA3"
VAR CorLY = "#2C9FA3"
VAR CorTituloMeta = "#333333"
-- ... (Restante do código DAX fornecido)`;

  const svgs = [
    { 
      id: 'HEATMAP_01', 
      title: 'Sales Heatmap v1.0', 
      color: 'text-primary', 
      isDax: true,
      code: heatmapDax,
      // Renderização do Preview Real em SVG
      preview: (
        <svg width="100%" height="100%" viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" className="rounded-sm">
          {/* Cabeçalho do Mini-Grafico */}
          <g fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#666" textAnchor="middle">
            {['D','S','T','Q','Q','S','S'].map((dia, i) => (
              <text key={i} x={15 + (i * 42) + 19} y={25}>{dia}</text>
            ))}
          </g>
          {/* Grid de Dias (Simulado) */}
          {Array.from({ length: 31 }).map((_, i) => {
            const x = 15 + ((i % 7) * 42);
            const y = 40 + (Math.floor(i / 7) * 42);
            // Cores baseadas na sua escala (Variação fictícia para o preview)
            const colors = ["#F6F6F6", "#FFF2E6", "#FFCF99", "#FFB866", "#FF8800", "#804400"];
            const color = colors[Math.floor(Math.random() * colors.length)];
            return (
              <g key={i}>
                <rect x={x} y={y} width="38" height="38" rx="4" fill={color} />
                <text x={x + 19} y={y + 24} fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle" fill={color === "#804400" ? "white" : "#333"}>
                  {i + 1}
                </text>
              </g>
            );
          })}
          {/* Rodapé do Mini-Grafico */}
          <text x="15" y="265" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#111">OUT 23 | Total: 15,420</text>
          <g transform="translate(235, 258)">
             {[ "#FFF2E6", "#FFB866", "#FF8800", "#804400"].map((c, i) => (
               <rect key={i} x={i * 10} y="0" width="8" height="8" fill={c} />
             ))}
          </g>
        </svg>
      )
    },
    {
      id: 'THERMO_01',
      title: 'Goal Thermometer',
      color: 'text-secondary',
      isDax: true,
      code: termometroDax,
      preview: (
        <svg width="100%" height="100%" viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradReflexo" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0.4" />
              <stop offset="50%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="black" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <circle cx="90" cy="170" r="22" fill="#FFFFFF" stroke="#C0C0C0" strokeWidth="1" />
          <rect x="80" y="30" width="20" height="140" rx="10" fill="#FFFFFF" stroke="#C0C0C0" strokeWidth="1" />
          <circle cx="90" cy="170" r="21" fill="#C0012A" />
          {/* Barra Animada Preview */}
          <rect x="81" y="60" width="18" height="110" fill="#C0012A">
            <animate attributeName="height" from="0" to="110" dur="2s" fill="freeze" />
            <animate attributeName="y" from="170" to="60" dur="2s" fill="freeze" />
          </rect>
          <rect x="81" y="60" width="18" height="110" fill="url(#gradReflexo)" />
          <text x="90" y="20" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#333">Meta: R$ 100.000</text>
          <text x="90" y="174" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle" fill="white">75%</text>
          <text x="90" y="215" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#C0012A">R$ 75.000</text>
        </svg>
      )
    },
    { 
      id: 'GAUGE_01', 
      title: 'Dynamic Gauge', 
      color: 'text-secondary', 
      isDax: false, 
      code: '<svg>...</svg>',
      preview: <Activity size={64} className="opacity-40" />
    },
  ];

  return (
    <div className="space-y-8">
      <div className="mb-12 border-l-4 border-primary pl-6 py-2 bg-primary/5">
        <h2 className="text-4xl font-headline font-black tracking-tight text-on-surface uppercase mb-1">Sector_Alpha: Resource_Hub</h2>
        <p className="font-mono text-sm text-primary/70">UPLINK STATUS: STABLE // DATALINK: SECURED_ENCRYPTION_LAYER_8</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* SVG Graphics Foundry */}
        <section className="col-span-12 lg:col-span-9 space-y-6">
          <div className="flex items-center justify-between border-b border-outline pb-4">
            <div className="flex items-center gap-3">
              <LayoutIcon className="text-primary" size={20} />
              <h3 className="font-headline font-bold text-xl uppercase tracking-wider">SVG Graphics Foundry</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {svgs.map((svg) => (
              <div key={svg.id} className="bg-surface-low border border-outline p-2 flex flex-col gap-4 hover:border-primary/50 transition-all group">
                <div className={`aspect-[4/3] flex items-center justify-center relative rounded-sm overflow-hidden ${svg.isDax ? 'bg-white p-4' : 'bg-surface-high'}`}>
                  <div className="absolute top-2 left-2 font-mono text-[8px] uppercase tracking-tighter opacity-50 z-10">
                    {svg.id} // PREVIEW_MODE
                  </div>
                  
                  {svg.preview}

                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                <div className="px-2 pb-2 space-y-3">
                  <div>
                    <h4 className={`font-headline font-bold uppercase text-sm ${svg.color}`}>{svg.title}</h4>
                    <p className="font-mono text-[9px] text-outline tracking-widest">
                      {svg.isDax ? 'POWER_BI_DAX_MEASURE' : 'UI_ASSET_SVG'}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => handleCopy(svg.code, svg.id)}
                      className="bg-surface-high border border-outline/20 py-2 font-mono text-[10px] uppercase hover:bg-primary hover:text-surface transition-all flex items-center justify-center gap-2"
                    >
                      {copiedId === svg.id ? <Check size={12} /> : <Copy size={12} />}
                      {copiedId === svg.id ? 'Copied' : 'Copy DAX'}
                    </button>
                    <button className="bg-transparent border border-outline/10 py-2 font-mono text-[10px] uppercase text-outline-variant hover:border-primary transition-all flex items-center justify-center gap-2">
                      <Download size={12} /> Shard
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sidebar Datastore */}
        <section className="col-span-12 lg:col-span-3 space-y-6">
          <div className="flex items-center gap-3 border-b border-outline pb-4">
            <Database className="text-secondary" size={20} />
            <h3 className="font-headline font-bold text-lg uppercase">Datastore</h3>
          </div>
          <div className="bg-surface-low border border-outline p-4 space-y-4">
             <div className="flex items-center gap-2">
               <FileCode size={16} className="text-secondary" />
               <span className="font-mono text-[10px] uppercase">Theme_Alpha.json</span>
             </div>
             <button className="w-full bg-secondary/10 border border-secondary/30 text-secondary py-2 font-mono text-[9px] uppercase hover:bg-secondary hover:text-surface transition-all">
               Download
             </button>
          </div>
        </section>
      </div>

      <div className="bg-black/20 border border-white/5 p-3 font-mono text-[9px] text-primary/60">
        &gt; RENDER_ENGINE: SVG_PREVIEW_GENERATED_SUCCESSFULLY [THERMO_01, HEATMAP_01]
      </div>
    </div>
  );
};