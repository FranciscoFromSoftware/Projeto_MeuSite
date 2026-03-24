import React, { useState } from 'react';
import { Layout as LayoutIcon, Database, Copy, Download, Activity, Calendar, Check, FileCode } from 'lucide-react';

export const Templates: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const daxHeatmap = `HeatmapVenda1s SVG = 
VAR vCorVazia = "#F6F6F6"
VAR vCor1 = "#FFF2E6"
VAR vCor2 = "#FFE5CC"
VAR vCor3 = "#FFCF99"
VAR vCor4 = "#FFB866"
VAR vCor5 = "#FF9F33"
VAR vCor6 = "#FF8800"
VAR vCor7 = "#BF6600"
VAR vCor8 = "#804400"
-- ... (código completo de lógica de calendário e retorno SVG)`;

  const svgs = [
    { 
      id: 'HEATMAP_01', 
      title: 'Sales Heatmap', 
      color: 'text-primary', 
      icon: Calendar,
      isDax: true,
      code: daxHeatmap 
    },
    { id: 'GAUGE_01', title: 'Dynamic Gauge', color: 'text-secondary', icon: Activity, isDax: false, code: '<svg>...</svg>' },
    { id: 'CIRCUIT_X', title: 'Neural Path', color: 'text-tertiary', icon: Activity, isDax: false, code: '<svg>...</svg>' },
    { id: 'FLOW_NET', title: 'Data Flow', color: 'text-primary', icon: Activity, isDax: false, code: '<svg>...</svg>' },
    { id: 'BENTO_GEN', title: 'Grid Layout', color: 'text-on-surface', icon: LayoutIcon, isDax: false, code: '<svg>...</svg>' },
    { id: 'LOAD_BAR', title: 'Progress Shard', color: 'text-secondary', icon: Activity, isDax: false, code: '<svg>...</svg>' },
  ];

  return (
    <div className="space-y-8">
      <div className="mb-12 border-l-4 border-primary pl-6 py-2 bg-primary/5">
        <h2 className="text-4xl font-headline font-black tracking-tight text-on-surface uppercase mb-1">Sector_Alpha: Resource_Hub</h2>
        <p className="font-mono text-sm text-primary/70">UPLINK STATUS: STABLE // DATALINK: SECURED_ENCRYPTION_LAYER_8</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* SVG Graphics Foundry */}
        <section className="col-span-12 lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between border-b border-outline pb-4">
            <div className="flex items-center gap-3">
              <LayoutIcon className="text-primary" size={20} />
              <h3 className="font-headline font-bold text-xl uppercase tracking-wider">SVG Graphics Foundry</h3>
            </div>
            <span className="font-mono text-[10px] bg-primary/10 text-primary px-2 py-0.5 border border-primary/20">FOUNDRY_V.4.2</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {svgs.map((svg) => (
              <div key={svg.id} className="bg-surface-low border border-outline p-4 flex flex-col gap-4 min-h-[280px] hover:bg-surface-high transition-colors group relative">
                <div className="flex-1 flex flex-col items-center justify-center relative bg-surface/50 rounded-sm overflow-hidden">
                  <div className={`absolute top-2 left-2 font-mono text-[9px] uppercase opacity-40 ${svg.color}`}>
                    {svg.isDax ? 'DAX_MEASURE' : 'STATIC_SVG'}
                  </div>
                  
                  {/* Preview Visual Compacto */}
                  <div className={svg.color}>
                    <svg.icon size={48} className="opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <div className={`absolute bottom-2 right-2 font-mono text-[8px] ${svg.color} opacity-40`}>{svg.id}</div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-mono text-[10px] uppercase font-bold text-on-surface text-center border-b border-outline/10 pb-1">
                    {svg.title}
                  </h4>
                  <button 
                    onClick={() => handleCopy(svg.code, svg.id)}
                    className={`w-full bg-surface-high border border-outline/30 py-2 text-[10px] font-mono uppercase flex items-center justify-center gap-2 hover:bg-primary hover:text-surface transition-all ${copiedId === svg.id ? 'text-primary border-primary' : svg.color}`}
                  >
                    {copiedId === svg.id ? <Check size={12} /> : <Copy size={12} />}
                    {copiedId === svg.id ? 'Copied!' : 'Copy Code'}
                  </button>
                  <button className="w-full bg-transparent border border-outline/10 py-2 text-[10px] font-mono uppercase text-on-surface-variant hover:border-primary transition-all flex items-center justify-center gap-2">
                    <Download size={12} /> Download Shard
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Power BI Datastore (Apenas JSON/Arquivos) */}
        <section className="col-span-12 lg:col-span-4 space-y-6">
          <div className="flex items-center justify-between border-b border-outline pb-4">
            <div className="flex items-center gap-3">
              <Database className="text-secondary" size={20} />
              <h3 className="font-headline font-bold text-xl uppercase tracking-wider">Power BI Datastore</h3>
            </div>
          </div>

          {[
            {
              title: 'Mainframe_Metrics.json',
              type: 'CONFIG_JSON',
              v: 'V.8.4',
              color: 'secondary',
              code: `{ "node_id": "OMEGA_01", "latency": "14ms" }`
            },
            {
              title: 'Theme_Neural.json',
              type: 'PBI_THEME',
              v: 'V.1.0',
              color: 'primary',
              code: `{ "name": "Cyber_Grid", "dataColors": ["#00F3FF"] }`
            }
          ].map((item) => (
            <div key={item.title} className="bg-surface-low border border-outline p-5 relative group">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileCode className={`text-${item.color}`} size={20} />
                  <div>
                    <h4 className={`font-headline font-bold text-${item.color} uppercase text-sm`}>{item.title}</h4>
                    <p className="font-mono text-[9px] text-on-surface-variant uppercase">{item.type} // {item.v}</p>
                  </div>
                </div>
                <button className={`w-full bg-${item.color}/10 border border-${item.color}/30 text-${item.color} py-2 font-mono text-[10px] uppercase hover:bg-${item.color} hover:text-surface transition-all`}>
                  Download JSON
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Terminal de Status */}
      <div className="bg-surface border border-outline/20 p-4 font-mono text-[10px] text-on-surface-variant">
        <p className="text-primary">&gt;&gt; HEATMAP_01 INTEGRATED INTO FOUNDRY_GRID...</p>
        <p>&gt;&gt; REVERTING_DATASTORE_TO_JSON_STORAGE... SUCCESS</p>
        <p>&gt;&gt; READY_FOR_EXTRACTION.</p>
      </div>
    </div>
  );
};