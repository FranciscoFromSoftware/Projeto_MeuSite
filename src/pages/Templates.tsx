import React, { useState } from 'react';
import { Layout as LayoutIcon, Database, Copy, Download, Activity, Calendar, Check } from 'lucide-react';

export const Templates: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const svgs = [
    { id: 'GAUGE_01', color: 'text-primary' },
    { id: 'CIRCUIT_X', color: 'text-secondary' },
    { id: 'FLOW_NET', color: 'text-tertiary' },
    { id: 'BENTO_GEN', color: 'text-primary' },
    { id: 'PYR_ARCH', color: 'text-on-surface' },
    { id: 'LOAD_BAR', color: 'text-secondary' },
  ];

  const daxMeasures = [
    {
      id: 'HEATMAP_01',
      title: 'HeatmapVenda1s_SVG.dax',
      type: 'CALENDAR_VISUAL',
      v: 'V.1.0',
      color: 'primary',
      code: `HeatmapVenda1s SVG = 
-- 1. CONFIGURAÇÕES (ESCALA DE 8 CORES + COR VAZIA)
VAR vCorVazia = "#F6F6F6"
VAR vCor1 = "#FFF2E6"
VAR vCor2 = "#FFE5CC"
VAR vCor3 = "#FFCF99"
VAR vCor4 = "#FFB866"
VAR vCor5 = "#FF9F33"
VAR vCor6 = "#FF8800"
VAR vCor7 = "#BF6600"
VAR vCor8 = "#804400"
-- ... (código completo enviado)`,
      fullCode: `HeatmapVenda1s SVG = 
-- 1. CONFIGURAÇÕES (ESCALA DE 8 CORES + COR VAZIA)
VAR vCorVazia = "#F6F6F6" -- Para dias com 0 vendas
VAR vCor1 = "#FFF2E6" -- 12.5%
VAR vCor2 = "#FFE5CC" -- 25%
VAR vCor3 = "#FFCF99" -- 37.5%
VAR vCor4 = "#FFB866" -- 50%
VAR vCor5 = "#FF9F33" -- 62.5%
VAR vCor6 = "#FF8800" -- 75%
VAR vCor7 = "#BF6600" -- 87.5%
VAR vCor8 = "#804400" -- 100% (Máximo)

VAR vSVGLargura = 320 
VAR vTamanho = 38     
VAR vEspacoX = 42     
VAR vEspacoY = 42     
VAR vRaio    = 4 
VAR vOffsetY = 30     
VAR vOffsetX = 15 
VAR vMetadeQ = vTamanho / 2 

-- 2. DEFINIÇÃO DO PERÍODO
VAR vHoje = MAX('dcalendario'[Date])
VAR vInicioMes = DATE(YEAR(vHoje), MONTH(vHoje), 1)
VAR vFimMes = EOMONTH(vHoje, 0)

-- 3. TABELA DE DADOS
VAR vTabelaDias =
    SELECTCOLUMNS(
        FILTER(ALL('dcalendario'), 'dcalendario'[Date] >= vInicioMes && 'dcalendario'[Date] <= vFimMes),
        "Data", 'dcalendario'[Date],
        "DiaSemana", WEEKDAY('dcalendario'[Date], 1),
        "VendasValor", [Vendas]
    )

VAR vTabelaFinal = 
    ADDCOLUMNS(
        vTabelaDias,
        "X_Coluna", [DiaSemana] - 1,
        "Y_Linha", QUOTIENT(DATEDIFF(vInicioMes, [Data], DAY) + WEEKDAY(vInicioMes, 1) - 1, 7)
    )

VAR vMaxVendas = MAXX(vTabelaFinal, [VendasValor])
VAR vTotalPeriodo = SUMX(vTabelaFinal, [VendasValor])
VAR vSemanaMin = MINX(vTabelaFinal, [Y_Linha])
VAR vQtdSemanas = MAXX(vTabelaFinal, [Y_Linha]) - vSemanaMin + 1
VAR vSVGAltura = vOffsetY + (vQtdSemanas * vEspacoY) + 35 

-- 4. CABEÇALHO
VAR vTextoDias = 
    "<g font-family='Arial' font-size='18' font-weight='bold' fill='#999' text-anchor='middle'>" &
        "<text x='" & vOffsetX + (0 * vEspacoX) + vMetadeQ & "' y='" & vOffsetY - 10 & "'>D</text>" &
        "<text x='" & vOffsetX + (1 * vEspacoX) + vMetadeQ & "' y='" & vOffsetY - 10 & "'>S</text>" &
        "<text x='" & vOffsetX + (2 * vEspacoX) + vMetadeQ & "' y='" & vOffsetY - 10 & "'>T</text>" &
        "<text x='" & vOffsetX + (3 * vEspacoX) + vMetadeQ & "' y='" & vOffsetY - 10 & "'>Q</text>" &
        "<text x='" & vOffsetX + (4 * vEspacoX) + vMetadeQ & "' y='" & vOffsetY - 10 & "'>Q</text>" &
        "<text x='" & vOffsetX + (5 * vEspacoX) + vMetadeQ & "' y='" & vOffsetY - 10 & "'>S</text>" &
        "<text x='" & vOffsetX + (6 * vEspacoX) + vMetadeQ & "' y='" & vOffsetY - 10 & "'>S</text>" &
    "</g>"

-- 5. QUADRADOS COM LÓGICA DE 8 NÍVEIS
VAR vQuadrados =
    CONCATENATEX(
        vTabelaFinal,
        VAR vX = vOffsetX + ([X_Coluna] * vEspacoX)
        VAR vY = vOffsetY + (([Y_Linha] - vSemanaMin) * vEspacoY)
        VAR vVendas = [VendasValor]
        VAR vPercentual = DIVIDE(vVendas, vMaxVendas, 0)
        
        VAR vCorFundo = 
            SWITCH(TRUE(), 
                ISBLANK(vVendas) || vVendas = 0, vCorVazia,
                vPercentual <= 0.125, vCor1,
                vPercentual <= 0.250, vCor2,
                vPercentual <= 0.375, vCor3,
                vPercentual <= 0.550, vCor4,
                vPercentual <= 0.650, vCor5,
                vPercentual <= 0.750, vCor6,
                vPercentual <= 0.950, vCor7,
                vCor8 
            )
        VAR vCorTexto = IF(vPercentual > 0.625, "white", "#333")
        
        RETURN
            "<g>" &
                "<rect x='" & vX & "' y='" & vY & "' width='" & vTamanho & "' height='" & vTamanho & "' rx='3' fill='" & vCorFundo & "' />" &
                "<text x='" & vX + vMetadeQ & "' y='" & vY + vMetadeQ + 6 & "' font-family='Arial' font-size='16' font-weight='bold' text-anchor='middle' fill='" & vCorTexto & "'>" & DAY([Data]) & "</text>" &
            "</g>",
        ""
    )

-- 6. RODAPÉ (LEGENDA AMPLIADA)
VAR vYBaseRodape = vSVGAltura - 12
VAR vLegSize = 8
VAR vLegenda = 
    "<g transform='translate(" & vSVGLargura - 85 & "," & vYBaseRodape - 7 & ")'>" &
        "<rect x='0'  y='0' width='" & vLegSize & "' height='" & vLegSize & "' fill='" & vCor1 & "' />" &
        "<rect x='9'  y='0' width='" & vLegSize & "' height='" & vLegSize & "' fill='" & vCor2 & "' />" &
        "<rect x='18' y='0' width='" & vLegSize & "' height='" & vLegSize & "' fill='" & vCor3 & "' />" &
        "<rect x='27' y='0' width='" & vLegSize & "' height='" & vLegSize & "' fill='" & vCor4 & "' />" &
        "<rect x='36' y='0' width='" & vLegSize & "' height='" & vLegSize & "' fill='" & vCor5 & "' />" &
        "<rect x='45' y='0' width='" & vLegSize & "' height='" & vLegSize & "' fill='" & vCor6 & "' />" &
        "<rect x='54' y='0' width='" & vLegSize & "' height='" & vLegSize & "' fill='" & vCor7 & "' />" &
        "<rect x='63' y='0' width='" & vLegSize & "' height='" & vLegSize & "' fill='" & vCor8 & "' />" &
    "</g>"

RETURN
"data:image/svg+xml;utf8,<svg width='" & vSVGLargura & "' height='" & vSVGAltura & "' viewBox='0 0 " & vSVGLargura & " " & vSVGAltura & "' xmlns='http://www.w3.org/2000/svg'>" &
    vTextoDias &
    vQuadrados &
    "<text x='" & vOffsetX & "' y='" & vYBaseRodape & "' font-family='Arial' font-size='18' font-weight='bold' fill='#111'>" & 
        UPPER(FORMAT(vHoje, "MMM yy")) & "  |  Total: " & FORMAT(vTotalPeriodo, "#,##0") & 
    "</text>" &
    vLegenda &
"</svg>"`
    },
    {
      id: 'DATA_01',
      title: 'Mainframe_Metrics.json',
      type: 'HOLOGRAPHIC_PREVIEW',
      v: 'V.8.4',
      color: 'secondary',
      code: `{ "node_id": "OMEGA_01", "latency": "14ms", ... }`,
      fullCode: `{ "node_id": "OMEGA_01", "latency": "14ms", "throughput": "4.2TB/s" }`
    }
  ];

  return (
    <div className="space-y-8">
      <div className="mb-12 border-l-4 border-primary pl-6 py-2 bg-primary/5">
        <h2 className="text-4xl font-headline font-black tracking-tight text-on-surface uppercase mb-1">Sector_Alpha: Resource_Hub</h2>
        <p className="font-mono text-sm text-primary/70">UPLINK STATUS: STABLE // DATALINK: SECURED_ENCRYPTION_LAYER_8</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* SVG Foundry */}
        <section className="col-span-12 lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between border-b border-outline pb-4">
            <div className="flex items-center gap-3">
              <LayoutIcon className="text-primary" size={20} />
              <h3 className="font-headline font-bold text-xl uppercase tracking-wider">SVG Graphics Foundry</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {svgs.map((svg) => (
              <div key={svg.id} className="bg-surface-low border border-outline p-4 flex flex-col gap-4 aspect-square hover:bg-surface-high transition-colors group relative">
                 {/* Conteúdo simplificado dos SVGs anteriores */}
                 <div className="flex-1 flex items-center justify-center">
                    <Activity size={48} className={`${svg.color} opacity-80 group-hover:scale-110 transition-transform`} />
                 </div>
                 <button className="w-full bg-surface-high border border-outline/30 py-2 text-[10px] font-mono uppercase text-on-surface hover:bg-primary hover:text-surface transition-all">
                    Copy Code
                 </button>
              </div>
            ))}
          </div>
        </section>

        {/* Power BI Datastore */}
        <section className="col-span-12 lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between border-b border-outline pb-4">
            <div className="flex items-center gap-3">
              <Database className="text-secondary" size={20} />
              <h3 className="font-headline font-bold text-xl uppercase tracking-wider">Power BI Datastore</h3>
            </div>
          </div>

          {daxMeasures.map((item) => (
            <div key={item.id} className="bg-surface-low border border-outline p-6 relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className={`font-headline font-bold text-${item.color} uppercase text-lg`}>{item.title}</h4>
                    <p className="font-mono text-[10px] text-on-surface-variant">TYPE: {item.type} // {item.v}</p>
                  </div>
                  {item.id === 'HEATMAP_01' && <Calendar className="text-primary/40" size={24} />}
                </div>

                {/* Preview Visual para o Heatmap */}
                {item.id === 'HEATMAP_01' && (
                  <div className="bg-white/90 p-3 rounded border border-primary/20 flex flex-col items-center">
                    <p className="text-[10px] font-bold text-slate-400 mb-2 self-start font-sans">OUT 23 | Total: 15,420</p>
                    <div className="grid grid-cols-7 gap-1">
                      {/* Simulação de quadradinhos do heatmap */}
                      {Array.from({ length: 21 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="w-4 h-4 rounded-sm" 
                          style={{ 
                            backgroundColor: i % 5 === 0 ? '#804400' : i % 3 === 0 ? '#FFB866' : '#F6F6F6',
                            border: '1px solid rgba(0,0,0,0.05)'
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex gap-0.5 mt-2 self-end">
                       {['#FFF2E6', '#FFCF99', '#FF8800', '#804400'].map(c => <div key={c} className="w-1.5 h-1.5" style={{backgroundColor: c}} />)}
                    </div>
                  </div>
                )}

                <div className="bg-surface p-4 border border-outline/10 font-mono text-[11px] leading-relaxed text-on-surface-variant h-32 overflow-hidden relative">
                  <pre className="whitespace-pre-wrap"><code>{item.code}</code></pre>
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-surface to-transparent" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <button 
                        onClick={() => handleCopy(item.fullCode, item.id)}
                        className={`flex-1 bg-${item.color}/10 border border-${item.color} text-${item.color} py-3 font-mono text-[10px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-${item.color} hover:text-surface transition-all`}
                    >
                        {copiedId === item.id ? <Check size={14} /> : <Copy size={14} />}
                        {copiedId === item.id ? 'Copied!' : 'Copy DAX Measure'}
                    </button>
                    <button className="bg-transparent border border-outline/30 py-3 font-mono text-[10px] uppercase text-on-surface-variant hover:border-primary transition-all flex items-center justify-center gap-2">
                        <Download size={14} />
                        Shard
                    </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Terminal Log */}
      <div className="mt-12 bg-surface border border-outline/20 p-4 font-mono text-[10px] text-on-surface-variant max-h-40 overflow-y-auto">
        <p className="text-primary">&gt;&gt; FOUNDRY_ACTIVE: HEATMAP_MEASURE_V1_INJECTED</p>
        <p>&gt;&gt; CALENDAR_LOGIC: 8_LEVEL_COLOR_SCALE_STABLE</p>
        <p className="text-secondary">&gt;&gt; UPLOADING_NEW_SHARDS... DONE</p>
      </div>
    </div>
  );
};