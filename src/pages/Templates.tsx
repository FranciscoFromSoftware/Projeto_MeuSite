import React, { useState } from 'react';
import { Layout as LayoutIcon, Database, Copy, Download, Activity, Calendar, Check, FileCode, Target } from 'lucide-react';

export const Templates: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

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

  // --- MEDIDAS DAX ---
  const heatmapDax = `HeatmapVenda1s SVG = -- Código do Heatmap...`;
  
  const termometroDax = `TermometroMeta_Animado_SVG = 
-- Código do Termômetro enviado anteriormente...`;

  const ringsDax = `Circular_Progress_Rings_SVG = 
VAR PercA = [Percentual_A]
VAR PercB = [Percentual_B]
VAR CorA = "#00F3FF"
VAR CorB = "#FF007A"
-- Retorna SVG com círculos concêntricos e labels centrais`;

  const svgs = [
    { 
      id: 'HEATMAP_01', 
      title: 'Sales Heatmap v1.0', 
      color: 'text-primary', 
      isDax: true,
      code: heatmapDax,
      fileName: 'Medida_Heatmap_Sales',
      preview: (
        <svg width="100%" height="100%" viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg">
          <g fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#666" textAnchor="middle">
            {['D','S','T','Q','Q','S','S'].map((dia, i) => (
              <text key={i} x={15 + (i * 42) + 19} y={25}>{dia}</text>
            ))}
          </g>
          {Array.from({ length: 31 }).map((_, i) => (
            <rect key={i} x={15 + ((i % 7) * 42)} y={40 + (Math.floor(i / 7) * 42)} width="38" height="38" rx="4" fill={["#F6F6F6", "#FFF2E6", "#FFB866", "#FF8800"][i % 4]} />
          ))}
          <text x="15" y="265" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#111">OUT 23 | Total: 15,420</text>
        </svg>
      )
    },
    {
      id: 'THERMO_01',
      title: 'Goal Thermometer',
      color: 'text-secondary',
      isDax: true,
      code: termometroDax,
      fileName: 'Medida_Termometro_Animado',
      preview: (
        <svg width="100%" height="100%" viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90" cy="170" r="22" fill="#FFFFFF" stroke="#C0C0C0" strokeWidth="1" />
          <rect x="80" y="30" width="20" height="140" rx="10" fill="#FFFFFF" stroke="#C0C0C0" strokeWidth="1" />
          <circle cx="90" cy="170" r="21" fill="#C0012A" />
          <rect x="81" y="60" width="18" height="110" fill="#C0012A">
            <animate attributeName="height" from="0" to="110" dur="2s" fill="freeze" />
            <animate attributeName="y" from="170" to="60" dur="2s" fill="freeze" />
          </rect>
          <text x="90" y="20" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#333">Meta: R$ 100.000</text>
          <text x="90" y="215" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#C0012A">R$ 75.000</text>
        </svg>
      )
    },
    {
      id: 'RINGS_01',
      title: 'KPI Progress Rings',
      color: 'text-cyan-400',
      isDax: true,
      code: ringsDax,
      fileName: 'Medida_KPI_Rings',
      preview: (
        <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Fundo dos anéis */}
          <circle cx="100" cy="100" r="80" fill="none" stroke="#f1f5f9" strokeWidth="12" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#f1f5f9" strokeWidth="12" />
          {/* Progresso com Animação */}
          <circle cx="100" cy="100" r="80" fill="none" stroke="#00F3FF" strokeWidth="12" strokeDasharray="502" strokeDashoffset="150" strokeLinecap="round" transform="rotate(-90 100 100)" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#FF007A" strokeWidth="12" strokeDasharray="377" strokeDashoffset="100" strokeLinecap="round" transform="rotate(-90 100 100)" />
          <Target className="text-slate-300" x="85" y="85" size={30} />
        </svg>
      )
    }
  ];

  return (
    <div className="space-y-8">
      <div className="mb-12 border-l-4 border-primary pl-6 py-2 bg-primary/5">
        <h2 className="text-4xl font-headline font-black tracking-tight text-on-surface uppercase mb-1">Sector_Alpha: Resource_Hub</h2>
        <p className="font-mono text-sm text-primary/70">UPLINK STATUS: STABLE // DATALINK: SECURED_ENCRYPTION_LAYER_8</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
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
                  <div className="absolute top-2 left-2 font-mono text-[8px] uppercase tracking-tighter opacity-50 z-10">{svg.id} // PREVIEW_MODE</div>
                  {svg.preview}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                <div className="px-2 pb-2 space-y-3">
                  <div>
                    <h4 className={`font-headline font-bold uppercase text-sm ${svg.color}`}>{svg.title}</h4>
                    <p className="font-mono text-[9px] text-outline tracking-widest uppercase">POWER_BI_DAX_MEASURE</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => handleCopy(svg.code, svg.id)}
                      className="bg-surface-high border border-outline/20 py-2 font-mono text-[10px] uppercase hover:bg-primary hover:text-surface transition-all flex items-center justify-center gap-2"
                    >
                      {copiedId === svg.id ? <Check size={12} /> : <Copy size={12} />}
                      {copiedId === svg.id ? 'Copied' : 'Copy DAX'}
                    </button>
                    <button 
                      onClick={() => handleDownload(svg.code, svg.fileName)}
                      className="bg-transparent border border-outline/10 py-2 font-mono text-[10px] uppercase text-outline-variant hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                    >
                      <Download size={12} /> Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

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
        &gt; RENDER_ENGINE: SVG_PREVIEW_GENERATED_SUCCESSFULLY [HEATMAP, THERMO, RINGS]
        <br />
        &gt; DOWNLOAD_MANAGER: READY_TO_EXPORT_DAX_MEASURES
      </div>
    </div>
  );
};