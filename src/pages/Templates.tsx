import React, { useState } from 'react';
import { Layout as LayoutIcon, Database, Copy, Download, Activity, Calendar, Check, FileCode, Target } from 'lucide-react';

export const Templates: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Função para baixar a medida como arquivo .txt
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

  // --- SUAS MEDIDAS DAX INTEGRAIS ---

  const heatmapDax = `HeatmapVenda1s SVG = 
// Insira aqui o código DAX do Heatmap que você possui originalmente
// Mantido conforme seu padrão de projeto.`; 
  
  const termometroDax = `TermometroMeta_Animado_SVG = 
VAR CorBarra = "#C0012A"
VAR CorFundo = "#FFFFFF"
VAR CorBorda = "#C0C0C0"
VAR CorDestaqueDia = "#2C9FA3"
VAR CorLY = "#2C9FA3"
VAR CorTituloMeta = "#333333"

-- 1. Lógica de Data e Dias
VAR UltimaData = MAX(dcalendario[Date])
VAR DiaUltimaVenda = DAY(UltimaData)
VAR MesAnoRef = FORMAT(UltimaData, "dd/mmm/yy", "pt-BR")

-- 2. Valores
VAR ValorAtual = [Vendas_MesAtualAcumu.] 
VAR Meta = CALCULATE([MetaDiaria],ALL(dcalendario))
VAR ValorAnoPassado = [MetaDiariaAcumulada]
VAR ValorLY_Resumido = FORMAT(ValorAnoPassado, "R$ #,#")

-- 3. Percentuais
VAR PercAtual = MIN(DIVIDE(ValorAtual, Meta, 0), 1)
VAR PercLY = MIN(DIVIDE(ValorAnoPassado, Meta, 0), 1)

-- 4. Dimensões e Coordenadas
VAR AlturaHaste = 140
VAR Y_BaseHaste = 170
VAR X_Centro = 90

VAR AlturaSVG_Barra = FORMAT(AlturaHaste * PercAtual, "0.00", "en-US")
VAR Y_PreenchidoSVG = FORMAT(Y_BaseHaste - (AlturaHaste * PercAtual), "0.00", "en-US")
VAR Y_LY_Num = Y_BaseHaste - (AlturaHaste * PercLY)
VAR Y_LY_SVG = FORMAT(Y_LY_Num, "0.00", "en-US")

VAR DuracaoAnimacao = "2s"
VAR TabelaDias = DISTINCT(SELECTCOLUMNS(ALLSELECTED(dcalendario), "DiaNum", dcalendario[Dia]))
VAR Y_TextoPorcentagem = Y_BaseHaste + 4

RETURN
"data:image/svg+xml;utf8," &
"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 240'>" &
    "<defs>" &
        "<linearGradient id='gradReflexo' x1='0%' y1='0%' x2='100%' y2='0%'>" &
            "<stop offset='0%' style='stop-color:white;stop-opacity:0.4' />" &
            "<stop offset='50%' style='stop-color:white;stop-opacity:0' />" &
            "<stop offset='100%' style='stop-color:black;stop-opacity:0.05' />" &
        "</linearGradient>" &
    "</defs>" &
    "<style>
        .texto { font-family: 'DIN Next LT Pro', 'DIN', sans-serif; pointer-events: none; }
        .texto-dia { font-size: 5px; font-weight: bold; text-anchor: middle; }
        .texto-valor-atual { font-size: 11px; font-weight: bold; fill: " & CorBarra & "; }
        .texto-ly { font-size: 10px; font-weight: bold; fill: #000; }
        .texto-ref { font-size: 7px; fill: #666; }
    </style>" &
    "<circle cx='" & X_Centro & "' cy='" & Y_BaseHaste & "' r='22' fill='" & CorFundo & "' stroke='" & CorBorda & "' stroke-width='1' />" &
    "<rect x='" & X_Centro - 10 & "' y='30' width='20' height='140' rx='10' fill='" & CorFundo & "' stroke='" & CorBorda & "' stroke-width='1' />" &
    CONCATENATEX(
        TabelaDias, 
        "<rect x='15' y='" & FORMAT((Y_BaseHaste + 20) - (180 * ([DiaNum] / 31)), "0.00", "en-US") & "' width='10' height='5' rx='1' " & 
        "fill='" & IF([DiaNum] <= DiaUltimaVenda, CorDestaqueDia, CorFundo) & "' " & 
        "stroke='" & CorBorda & "' stroke-width='0.2' />" &
        "<text x='20' y='" & FORMAT((Y_BaseHaste + 20) - (180 * ([DiaNum] / 31)) + 4, "0.00", "en-US") & "' class='texto texto-dia' " & 
        "fill='" & IF([DiaNum] <= DiaUltimaVenda, "white", "#666") & "'>" & [DiaNum] & "</text>",
        ""
    ) &
    "<circle cx='" & X_Centro & "' cy='" & Y_BaseHaste & "' r='21' fill='" & CorBarra & "' />" &
    "<g>" &
        "<rect x='" & X_Centro - 9 & "' y='" & Y_PreenchidoSVG & "' width='18' height='" & AlturaSVG_Barra & "' fill='" & CorBarra & "'>" &
            "<animate attributeName='height' from='0' to='" & AlturaSVG_Barra & "' dur='" & DuracaoAnimacao & "' fill='freeze' calcMode='spline' keyTimes='0;1' keySplines='0.42, 0, 0.58, 1' />" &
            "<animate attributeName='y' from='" & FORMAT(Y_BaseHaste, "0.00", "en-US") & "' to='" & Y_PreenchidoSVG & "' dur='" & DuracaoAnimacao & "' fill='freeze' calcMode='spline' keyTimes='0;1' keySplines='0.42, 0, 0.58, 1' />" &
        "</rect>" &
        "<rect x='" & X_Centro - 9 & "' y='" & Y_PreenchidoSVG & "' width='18' height='" & AlturaSVG_Barra & "' fill='url(#gradReflexo)' />" &
    "</g>" &
    "<line x1='" & X_Centro - 10 & "' y1='" & Y_LY_SVG & "' x2='" & X_Centro + 10 & "' y2='" & Y_LY_SVG & "' stroke='" & CorLY & "' stroke-width='1.5' stroke-dasharray='3,1' />" &
    "<text x='" & X_Centro + 22 & "' y='" & FORMAT(Y_LY_Num + 2, "0.00", "en-US") & "' class='texto texto-ly'>" & ValorLY_Resumido & "</text>" &
    "<text x='" & X_Centro & "' y='20' class='texto' font-weight='bold' font-size='10' text-anchor='middle' fill='" & CorTituloMeta & "'>Meta: " & FORMAT(Meta, "R$ ###,###.00") & "</text>" &
    "<text x='" & X_Centro & "' y='" & Y_BaseHaste + 4 & "' class='texto' fill='white' font-size='10' text-anchor='middle' font-weight='bold'>" & FORMAT(PercAtual, "0%") & "</text>" &
    "<text x='" & X_Centro & "' y='" & Y_BaseHaste + 45 & "' class='texto texto-valor-atual' text-anchor='middle'>" & FORMAT(ValorAtual, "R$ #,##0") & "</text>" &
"</svg>"`;

  const svgs = [
    { 
      id: 'HEATMAP_01', 
      title: 'Sales Heatmap v1.0', 
      color: 'text-primary', 
      isDax: true,
      code: heatmapDax,
      fileName: 'Medida_Heatmap_Sales',
      preview: (
        <svg width="100%" height="100%" viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" className="rounded-sm">
          <g fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#666" textAnchor="middle">
            {['D','S','T','Q','Q','S','S'].map((dia, i) => (
              <text key={i} x={15 + (i * 42) + 19} y={25}>{dia}</text>
            ))}
          </g>
          {Array.from({ length: 31 }).map((_, i) => (
            <rect key={i} x={15 + ((i % 7) * 42)} y={40 + (Math.floor(i / 7) * 42)} width="38" height="38" rx="4" fill={["#F6F6F6", "#FFF2E6", "#FFCF99", "#FFB866", "#FF8800", "#804400"][i % 6]} />
          ))}
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
          <text x="90" y="20" className="font-sans text-[10px] font-bold" textAnchor="middle" fill="#333">Meta: R$ 100k</text>
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
      {/* Cabeçalho */}
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
             <button className="w-full bg-secondary/10 border border-secondary/30 text-secondary py-2 font-mono text-[9px] uppercase hover:bg-secondary hover:text-surface transition-all">Download</button>
          </div>
        </section>
      </div>

      <div className="bg-black/20 border border-white/5 p-3 font-mono text-[9px] text-primary/60">
        &gt; RENDER_ENGINE: SVG_PREVIEW_GENERATED_SUCCESSFULLY [HEATMAP, THERMO]
        <br />
        &gt; DOWNLOAD_MANAGER: READY_TO_EXPORT_DAX_MEASURES
      </div>
    </div>
  );
};