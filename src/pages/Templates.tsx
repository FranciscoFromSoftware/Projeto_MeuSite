import React, { useState } from 'react';
import { Layout as LayoutIcon, Database, Copy, Download, Activity, Calendar, Check, FileCode, PieChart } from 'lucide-react';

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

  const donutVendasDax = `SVG Donut Vendas = 
VAR lucro = DIVIDE(CALCULATE(SUM(fVendasDetalhes[valor_total])), CALCULATE(SUM(fVendasDetalhes[valor_total]), ALL(fVendasDetalhes[categoria])), 0)
VAR ValorPercentual = MIN(MAX(lucro * 100, 0), 100)
VAR Circunferencia = 100
VAR TextoSuperior = SELECTEDVALUE(fVendasDetalhes[categoria]) 

-- Cores (Sempre usando %23 no lugar de # para Power BI)
VAR CorSucesso = "%23165052"
VAR CorFundo = "%23ABD9DA"
VAR CorTexto = "%23333333"
VAR CorMarcador = "%23F03813" 

RETURN
"data:image/svg+xml;utf8,<svg viewBox='0 0 42 52' xmlns='http://www.w3.org/2000/svg'>" & 
  "<text x='21' y='8' dominant-baseline='central' text-anchor='middle' font-family='Segoe UI' font-size='6' font-weight='bold' fill='" & CorTexto & "'>" & 
  UPPER(TextoSuperior) & "</text>" & 
  "<circle cx='21' cy='32' r='15.915' fill='none' stroke='" & CorFundo & "' stroke-width='4' />" & 
  "<circle cx='21' cy='32' r='15.915' fill='none' stroke='" & CorSucesso & "' stroke-width='4' " & 
  "stroke-dasharray='" & ValorPercentual & " " & (Circunferencia - ValorPercentual) & "' " & 
  "stroke-dashoffset='0' transform='rotate(-90 21 32)' stroke-linecap='round' />" & 
  "<line x1='21' y1='12' x2='21' y2='20' stroke='" & CorMarcador & "' stroke-width='1.5' />" &
  "<text x='21' y='32' dominant-baseline='central' text-anchor='middle' font-family='Segoe UI' font-size='8' font-weight='bold' fill='" & CorTexto & "'>" & 
  FORMAT(lucro, "0%") & "</text>" & 
"</svg>"`;

  const termometroDax = `TermometroMeta_Animado_SVG = 
VAR CorBarra = "#C0012A"
-- ... (Restante do seu código integral do Termômetro)`;

  const svgs = [
    { 
      id: 'HEATMAP_01', 
      title: 'Calendario de Intensidade v1.0', 
      color: 'text-primary', 
      isDax: true,
      code: heatmapDax,
      fileName: 'Medida_CalendarIntense_Sales',
      preview: (
        <svg width="100%" height="100%" viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg">
          <g fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#666" textAnchor="middle">
            {['D','S','T','Q','Q','S','S'].map((dia, i) => <text key={i} x={15 + (i * 42) + 19} y={25}>{dia}</text>)}
          </g>
          {Array.from({ length: 31 }).map((_, i) => (
            <rect key={i} x={15 + ((i % 7) * 42)} y={40 + (Math.floor(i / 7) * 42)} width="38" height="38" rx="4" fill={["#F6F6F6", "#FFCF99", "#FF8800"][i % 3]} />
          ))}
        </svg>
      )
    },
    {
      id: 'DONUT_01',
      title: 'Donut de Meta',
      color: 'text-cyan-600',
      isDax: true,
      code: donutVendasDax,
      fileName: 'Medida_Donut_Vendas',
      preview: (
        <svg width="100%" height="100%" viewBox="0 0 42 52" xmlns="http://www.w3.org/2000/svg">
          <text x="21" y="8" dominantBaseline="central" textAnchor="middle" fontFamily="Arial" fontSize="5" fontWeight="bold" fill="#333">CATEGORIA</text>
          <circle cx="21" cy="32" r="15.915" fill="none" stroke="#ABD9DA" strokeWidth="4" />
          <circle cx="21" cy="32" r="15.915" fill="none" stroke="#165052" strokeWidth="4" strokeDasharray="75 25" transform="rotate(-90 21 32)" strokeLinecap="round" />
          <line x1="21" y1="12" x2="21" y2="20" stroke="#F03813" strokeWidth="1.5" />
          <text x="21" y="32" dominantBaseline="central" textAnchor="middle" fontFamily="Arial" fontSize="8" fontWeight="bold" fill="#333">75%</text>
        </svg>
      )
    },
    {
      id: 'THERMO_01',
      title: 'Termometro de Vendas',
      color: 'text-secondary',
      isDax: true,
      code: termometroDax,
      fileName: 'Medida_Termometro_Animado',
      preview: (
        <svg width="100%" height="100%" viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90" cy="170" r="22" fill="#FFFFFF" stroke="#C0C0C0" strokeWidth="1" />
          <rect x="80" y="30" width="20" height="140" rx="10" fill="#FFFFFF" stroke="#C0C0C0" strokeWidth="1" />
          <circle cx="90" cy="170" r="21" fill="#C0012A" />
          <rect x="81" y="60" width="18" height="110" fill="#C0012A" />
          <text x="90" y="215" className="font-sans text-[11px] font-bold" textAnchor="middle" fill="#C0012A">R$ 75.000</text>
        </svg>
      )
    },
    { 
      id: 'GAUGE_01', 
      title: 'Dynamic Gauge', 
      color: 'text-secondary', 
      isDax: false, 
      code: '<svg>...</svg>',
      fileName: 'Gauge_Asset',
      preview: <Activity size={64} className="opacity-40 text-secondary" />
    },
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
              <h3 className="font-headline font-bold text-xl uppercase tracking-wider">TEMPLATES SVG PARA POWER BI</h3>
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
                    <p className="font-mono text-[9px] text-outline tracking-widest uppercase">{svg.isDax ? 'POWER_BI_DAX_MEASURE' : 'UI_ASSET_SVG'}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => handleCopy(svg.code, svg.id)} className="bg-surface-high border border-outline/20 py-2 font-mono text-[10px] uppercase hover:bg-primary hover:text-surface transition-all flex items-center justify-center gap-2">
                      {copiedId === svg.id ? <Check size={12} /> : <Copy size={12} />}
                      {copiedId === svg.id ? 'Copied' : 'Copy DAX'}
                    </button>
                    <button onClick={() => handleDownload(svg.code, svg.fileName || svg.id)} className="bg-transparent border border-outline/10 py-2 font-mono text-[10px] uppercase text-outline-variant hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2">
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
             <button className="w-full bg-secondary/10 border border-secondary/30 text-secondary py-2 font-mono text-[9px] uppercase hover:bg-secondary hover:text-surface transition-all">Download</button>
          </div>
        </section>
      </div>

      <div className="bg-black/20 border border-white/5 p-3 font-mono text-[9px] text-primary/60">
        &gt; RENDER_ENGINE: SVG_PREVIEW_GENERATED_SUCCESSFULLY [HEATMAP, DONUT, THERMO]
        <br />
        &gt; DOWNLOAD_MANAGER: READY_TO_EXPORT_DAX_MEASURES
      </div>
    </div>
  );
};