import React, { useState, useMemo, useEffect } from 'react';
import { Layout as LayoutIcon, Database, Copy, Download, Activity, Calendar, Check, FileCode, PieChart } from 'lucide-react';

// Componente do Termômetro Animado
interface ThermometerProps {
  metaAtingida: boolean;
}

const AnimatedThermometer: React.FC<ThermometerProps> = ({ metaAtingida }) => {
  // === CORES ===
  const CorBarraPadrao = "#C0012A";
  const CorBarraMeta = "#2C9FA3";
  const CorFundo = "#FFFFFF";
  const CorBorda = "#C0C0C0";
  const CorDestaqueDia = "#FF8800";
  const CorLY = "#FF8800";
  const CorTituloMeta = "#333333";
  const CorFonteLY = "#666666";

  // === DADOS FICTÍCIOS ===
  const UltimaData = new Date(2024, 10, 15); // 15 de novembro
  const DiaUltimaVenda = UltimaData.getDate();
  const MesAnoRef = UltimaData.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: '2-digit' });

  const ValorAtual = metaAtingida ? 125000 : 65000;
  const Meta = 100000;
  const ValorAnoPassado = metaAtingida ? 110000 : 95000;
  const ValorLY_Resumido = `R$ ${(ValorAnoPassado / 1000).toFixed(0)}k`;

  // === PERCENTUAIS ===
  const PercAtual = Math.min(ValorAtual / Meta, 1);
  const PercLY = Math.min(ValorAnoPassado / Meta, 1);

  // === LÓGICA CONDICIONAL ===
  const CorBarraFinal = metaAtingida ? CorBarraMeta : CorBarraPadrao;
  const CorDestaqueDiaFinal = metaAtingida ? CorBarraMeta : CorDestaqueDia;

  // === DIMENSÕES E COORDENADAS ===
  const AlturaHaste = 140;
  const Y_BaseHaste = 170;
  const X_Centro = 90;
  const Y_TextoPorcentagem = Y_BaseHaste + 4;
  const AlturaSVG_Barra = AlturaHaste * PercAtual;
  const Y_PreenchidoSVG = Y_BaseHaste - AlturaSVG_Barra;
  const Y_LY_Num = Y_BaseHaste - AlturaHaste * PercLY;
  const Y_Topo = Y_BaseHaste - AlturaHaste;
  const DuracaoAnimacao = "2s";

  // === CONTEÚDO DO BULBO ===
  const ConteudoBulbo = metaAtingida ? (
    <>
      <circle cx={X_Centro} cy={Y_BaseHaste} r="10" fill="white" fillOpacity="0.2" />
      <path
        d={`M ${X_Centro - 6} ${Y_BaseHaste} L ${X_Centro - 2} ${Y_BaseHaste + 5} L ${X_Centro + 7} ${Y_BaseHaste - 6}`}
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ) : (
    <text
      x={X_Centro}
      y={Y_BaseHaste + 4}
      fontFamily="DIN Next LT Pro, DIN, sans-serif"
      fill="white"
      fontSize="10"
      textAnchor="middle"
      fontWeight="bold"
    >
      {Math.round(PercAtual * 100)}%
    </text>
  );

  // === CACOS DE VIDRO ===
  const CacosVidro = metaAtingida ? (
    <g>
      <g opacity="0">
        <animate attributeName="opacity" from="0" to="1" begin="1.8s" dur="0.2s" fill="freeze" />
        <path d={`M ${X_Centro - 2} ${Y_Topo} L ${X_Centro - 5} ${Y_Topo - 10}`} stroke={CorBarraMeta} strokeWidth="1" fill="none" opacity="0.8" />
        <path d={`M ${X_Centro} ${Y_Topo} L ${X_Centro} ${Y_Topo - 14}`} stroke={CorBarraMeta} strokeWidth="0.8" fill="none" opacity="0.7" />
        <path d={`M ${X_Centro + 2} ${Y_Topo} L ${X_Centro + 5} ${Y_Topo - 10}`} stroke={CorBarraMeta} strokeWidth="1" fill="none" opacity="0.8" />
      </g>
    </g>
  ) : null;

  return (
    <svg width="100%" height="100%" viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradReflexo" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.4 }} />
          <stop offset="50%" style={{ stopColor: 'white', stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: 'black', stopOpacity: 0.05 }} />
        </linearGradient>
      </defs>

      <style>{`
        .texto { font-family: 'DIN Next LT Pro', 'DIN', sans-serif; pointer-events: none; }
        .texto-valor-atual { font-size: 11px; font-weight: bold; fill: ${CorBarraFinal}; }
        .texto-ly { font-size: 8px; font-weight: bold; fill: ${CorFonteLY}; }
        .texto-ref { font-size: 6px; fill: #666; }
      `}</style>

      {/* Anel de glow pulsante */}
      <circle cx={X_Centro} cy={Y_BaseHaste} r="26" fill="none" stroke={CorBarraFinal} strokeWidth="3" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
        <animate attributeName="r" values="24;27;24" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Fundo e borda */}
      <circle cx={X_Centro} cy={Y_BaseHaste} r="22" fill={CorFundo} stroke={CorBorda} strokeWidth="1" />
      <rect x={X_Centro - 10} y="30" width="20" height="140" rx="10" fill={CorFundo} stroke={CorBorda} strokeWidth="1" />

      {/* Marcadores de dias */}
      {Array.from({ length: 15 }).map((_, i) => {
        const dia = i + 1;
        const isActive = dia <= DiaUltimaVenda;
        const y = Y_BaseHaste + 20 - (180 * (dia / 31));
        return (
          <g key={`dia-${dia}`}>
            <rect
              x="15"
              y={y}
              width="10"
              height="5"
              rx="1"
              fill={isActive ? CorDestaqueDiaFinal : CorFundo}
              stroke={CorBorda}
              strokeWidth="0.2"
            />
            <text
              x="20"
              y={y + 4}
              className="texto"
              fontSize="5px"
              fontWeight="bold"
              textAnchor="middle"
              fill={isActive ? "white" : "#666"}
            >
              {dia}
            </text>
          </g>
        );
      })}

      {/* Bulbo base */}
      <circle cx={X_Centro} cy={Y_BaseHaste} r="21" fill={CorBarraFinal} />

      {/* Reflexo do bulbo */}
      <ellipse
        cx={X_Centro - 5}
        cy={Y_TextoPorcentagem - 10}
        rx="3"
        ry="7"
        fill="white"
        fillOpacity="0.3"
        transform={`rotate(-35 ${X_Centro} ${Y_TextoPorcentagem + 8})`}
      />

      {/* Barra preenchida com animação */}
      <rect
        x={X_Centro - 9}
        y={Y_PreenchidoSVG}
        width="18"
        height={AlturaSVG_Barra}
        fill={CorBarraFinal}
      >
        <animate attributeName="height" from="0" to={AlturaSVG_Barra} dur={DuracaoAnimacao} fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.42,0,0.58,1" />
        <animate attributeName="y" from={Y_BaseHaste} to={Y_PreenchidoSVG} dur={DuracaoAnimacao} fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.42,0,0.58,1" />
      </rect>

      {/* Reflexo sobre a barra */}
      <rect x={X_Centro - 9} y={Y_PreenchidoSVG} width="18" height={AlturaSVG_Barra} fill="url(#gradReflexo)" />

      {/* Linha de meta LY */}
      <line x1={X_Centro - 10} y1={Y_LY_Num} x2={X_Centro + 10} y2={Y_LY_Num} stroke={CorLY} strokeWidth="1.5" strokeDasharray="3,1" />
      <path d={`M ${X_Centro + 10} ${Y_LY_Num} L ${X_Centro + 18} ${Y_LY_Num - 4} L ${X_Centro + 18} ${Y_LY_Num + 4} Z`} fill={CorLY} />
      <text x={X_Centro + 22} y={Y_LY_Num + 2} className="texto-ly">
        {ValorLY_Resumido}
      </text>
      <text x={X_Centro + 22} y={Y_LY_Num + 10} className="texto-ref">
        Meta acuml. até {MesAnoRef}
      </text>

      {/* Título */}
      <text x={X_Centro} y="20" className="texto" fontWeight="bold" fontSize="10" textAnchor="middle" fill={CorTituloMeta}>
        Meta: R$ {(Meta / 1000).toFixed(0)}k
      </text>

      {/* Conteúdo do bulbo */}
      {ConteudoBulbo}

      {/* Valor atual abaixo do bulbo */}
      <text x={X_Centro} y={Y_BaseHaste + 45} className="texto-valor-atual" textAnchor="middle">
        R$ {(ValorAtual / 1000).toFixed(0)}k
      </text>

      {/* Cacos */}
      {CacosVidro}
    </svg>
  );
};

// Componente do Radar de Desempenho
interface RadarProps {}

const RadarDesempenho: React.FC<RadarProps> = () => {
  // === CONFIGURAÇÕES VISUAIS ===
  const boxWidth = 500;
  const boxHeight = 340;
  const radius = 130;
  const x0 = 195;
  const y0 = boxHeight / 2;

  const corFundo = "#F8F8F6";
  const corGrade = "#DDDDDD";
  const corPoligonoM1 = "#2C9FA3"; // Azul - Conversão
  const corPoligonoM2 = "#940533"; // Vermelho - Custo
  const corPoligonoM3 = "#ff8800"; // Laranja - Prazo
  const corAlerta = "#E24B4A";
  const corLabel = "#333333";

  // === DADOS FICTÍCIOS ===
  const categorias = ["Eletrônicos", "Moda", "Alimentos", "Livros", "Casa"];
  const k = categorias.length;
  const anguloPorItem = 360 / k;

  const tabelaBase = categorias.map((categoria, idx) => ({
    categoria,
    idx,
    M1: [0.85, 0.92, 0.78, 0.88, 0.72][idx], // Conversão (0-1)
    M2: [0.45, 0.58, 0.62, 0.38, 0.71][idx], // Custo (0-1)
    M3: [0.52, 0.48, 0.68, 0.55, 0.75][idx], // Prazo (0-1)
  }));

  // === CÁLCULO DE SCORE E ALERTA ===
  const tabelaComScore = tabelaBase.map(item => ({
    ...item,
    score: (-item.M1 + item.M2 + item.M3) / 3,
  }));

  const elegivel = tabelaComScore.filter(item => item.M1 <= 0.9);
  const sorted = [...elegivel].sort((a, b) => b.score - a.score);
  const alertas = sorted.slice(0, 2).map(item => item.categoria);

  // === TABELA ORDENADA COM COORDENADAS ===
  const tabelaOrdenada = tabelaBase.map((item, idx) => {
    const anguloGraus = idx * anguloPorItem;
    const cosAng = Math.cos((anguloGraus * Math.PI) / 180);
    const sinAng = Math.sin((anguloGraus * Math.PI) / 180);

    return {
      ...item,
      anguloGraus,
      px1: x0 + item.M1 * radius * cosAng,
      py1: y0 - item.M1 * radius * sinAng,
      px2: x0 + item.M2 * radius * cosAng,
      py2: y0 - item.M2 * radius * sinAng,
      px3: x0 + item.M3 * radius * cosAng,
      py3: y0 - item.M3 * radius * sinAng,
      lx: x0 + (radius + 20) * cosAng,
      ly: y0 - (radius + 20) * sinAng,
      ehAlerta: alertas.includes(item.categoria),
    };
  });

  // === MONTAGEM DO SVG ===

  // Círculos concêntricos
  const circulos = Array.from({ length: 5 }).map((_, i) => {
    const r = ((i + 1) / 5) * radius;
    return (
      <circle
        key={`circ-${i}`}
        cx={x0}
        cy={y0}
        r={r}
        fill="none"
        stroke={corGrade}
        strokeWidth="0.6"
      />
    );
  });

  // Rótulos de escala
  const rotulos = Array.from({ length: 5 }).map((_, i) => {
    const val = (i + 1) * 20;
    const y = y0 - ((i + 1) / 5) * radius - 2;
    return (
      <text
        key={`rot-${i}`}
        x={x0 + 4}
        y={y}
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="7.5"
        fill="#AAAAAA"
      >
        {val}%
      </text>
    );
  });

  // Raios
  const raios = tabelaOrdenada.map((item) => (
    <line
      key={`raio-${item.idx}`}
      x1={x0}
      y1={y0}
      x2={x0 + radius * Math.cos((item.anguloGraus * Math.PI) / 180)}
      y2={y0 - radius * Math.sin((item.anguloGraus * Math.PI) / 180)}
      stroke={corGrade}
      strokeWidth="0.7"
    />
  ));

  // Pontos dos polígonos
  const pontosM1 = tabelaOrdenada
    .map(item => `${item.px1.toFixed(1)},${item.py1.toFixed(1)}`)
    .join(" ");
  const pontosM2 = tabelaOrdenada
    .map(item => `${item.px2.toFixed(1)},${item.py2.toFixed(1)}`)
    .join(" ");
  const pontosM3 = tabelaOrdenada
    .map(item => `${item.px3.toFixed(1)},${item.py3.toFixed(1)}`)
    .join(" ");

  // Polígonos
  const poligonos = (
    <>
      <polygon
        points={pontosM2}
        fill={corPoligonoM2}
        fillOpacity="0.14"
        stroke={corPoligonoM2}
        strokeWidth="1.5"
      />
      <polygon
        points={pontosM3}
        fill={corPoligonoM3}
        fillOpacity="0.14"
        stroke={corPoligonoM3}
        strokeWidth="1.5"
      />
      <polygon
        points={pontosM1}
        fill={corPoligonoM1}
        fillOpacity="0.18"
        stroke={corPoligonoM1}
        strokeWidth="1.8"
      />
    </>
  );

  // Pontos circulares
  const pontosCirculos = (
    <>
      {tabelaOrdenada.map((item) => (
        <circle
          key={`p2-${item.idx}`}
          cx={item.px2}
          cy={item.py2}
          r="3"
          fill={corPoligonoM2}
        />
      ))}
      {tabelaOrdenada.map((item) => (
        <circle
          key={`p3-${item.idx}`}
          cx={item.px3}
          cy={item.py3}
          r="3"
          fill={corPoligonoM3}
        />
      ))}
      {tabelaOrdenada.map((item) => (
        <circle
          key={`p1-${item.idx}`}
          cx={item.px1}
          cy={item.py1}
          r={item.ehAlerta ? 4.5 : 3}
          fill={item.ehAlerta ? corAlerta : corPoligonoM1}
        />
      ))}
    </>
  );

  // Animações de alerta
  const animacoes = tabelaOrdenada
    .filter(item => item.ehAlerta)
    .map((item) => (
      <g key={`alerta-${item.idx}`}>
        <circle cx={item.px1} cy={item.py1} r="9" fill="none" stroke={corAlerta} strokeWidth="6" strokeOpacity="0.12">
          <animate attributeName="r" values="8;13;8" dur="2s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.12;0.55;0.12" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle
          cx={item.px1}
          cy={item.py1}
          r="14"
          fill="none"
          stroke={corAlerta}
          strokeWidth="1.5"
          strokeOpacity="0.75"
          strokeDasharray="6 4"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${item.px1} ${item.py1}`}
            to={`360 ${item.px1} ${item.py1}`}
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    ));

  // Labels
  const labels = tabelaOrdenada.map((item) => {
    const ang = item.anguloGraus;
    let anchor = "start";
    if ((ang < 75 || ang > 285)) anchor = "start";
    else if (ang >= 75 && ang <= 105) anchor = "middle";
    else if (ang >= 255 && ang <= 285) anchor = "middle";
    else anchor = "end";

    const corLbl = item.ehAlerta ? corAlerta : corLabel;
    const perc = `${Math.round(item.M1 * 100)}%`;
    const alertaTxt = item.ehAlerta ? " !" : "";

    return (
      <g key={`label-${item.idx}`}>
        <text
          x={item.lx}
          y={item.ly}
          fontFamily="Segoe UI, Arial, sans-serif"
          fontSize={item.ehAlerta ? 10.5 : 9.5}
          fontWeight={item.ehAlerta ? "bold" : "normal"}
          fill={corLbl}
          textAnchor={anchor}
        >
          {item.categoria}
          {alertaTxt}
        </text>
        <text
          x={item.lx}
          y={item.ly + 12}
          fontFamily="Segoe UI, Arial, sans-serif"
          fontSize="12"
          fill={item.ehAlerta ? corAlerta : "#999"}
          textAnchor={anchor}
        >
          {perc} {item.ehAlerta ? "▲" : ""}
        </text>
        {item.ehAlerta && (
          <animate attributeName="opacity" values="1;0.35;1" dur="2s" repeatCount="indefinite" />
        )}
      </g>
    );
  });

  // Legenda
  const legW = 148;
  const legX = boxWidth - legW - 6;
  const legY = boxHeight - 88;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${boxWidth} ${boxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes pulseR { 0%, 100% { r: 8; stroke-opacity: 0.12; } 50% { r: 13; stroke-opacity: 0.6; } }
          .pr { animation: pulseR 2s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* Fundo */}
      <rect x="0" y="0" width={boxWidth} height={boxHeight} fill={corFundo} />

      {/* Grade */}
      {circulos}
      {rotulos}
      {raios}

      {/* Polígonos */}
      {poligonos}

      {/* Animações de alerta */}
      {animacoes}

      {/* Pontos */}
      {pontosCirculos}

      {/* Labels */}
      {labels}

      {/* Legenda */}
      <rect
        x={legX}
        y={legY}
        width={legW}
        height="82"
        rx="4"
        fill="white"
        stroke="#DDDDDD"
        strokeWidth="0.7"
        fillOpacity="0.95"
      />
      <circle cx={legX + 10} cy={legY + 14} r="5" fill={corAlerta} />
      <text
        x={legX + 20}
        y={legY + 18}
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="14"
        fill={corAlerta}
      >
        2 categ. em alerta
      </text>
      <rect
        x={legX + 6}
        y={legY + 26}
        width="9"
        height="9"
        rx="2"
        fill={corPoligonoM1}
        fillOpacity="0.2"
        stroke={corPoligonoM1}
        strokeWidth="1"
      />
      <text
        x={legX + 20}
        y={legY + 34}
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="14"
        fill="#555"
      >
        M1 — Convenção
      </text>
      <rect
        x={legX + 6}
        y={legY + 40}
        width="9"
        height="9"
        rx="2"
        fill={corPoligonoM2}
        fillOpacity="0.2"
        stroke={corPoligonoM2}
        strokeWidth="1"
      />
      <text
        x={legX + 20}
        y={legY + 48}
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="14"
        fill="#555"
      >
        M2 — Lucro
      </text>
      <rect
        x={legX + 6}
        y={legY + 54}
        width="9"
        height="9"
        rx="2"
        fill={corPoligonoM3}
        fillOpacity="0.2"
        stroke={corPoligonoM3}
        strokeWidth="1"
      />
      <text
        x={legX + 20}
        y={legY + 62}
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="14"
        fill="#555"
      >
        M3 — Prazo
      </text>
      <text
        x={legX + 6}
        y={legY + 76}
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="7"
        fill="#BBBBBB"
      >
        escala: medidas × 100
      </text>
    </svg>
  );
};

export const Templates: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [metaAtingida, setMetaAtingida] = useState(true);

  // Animação: alterna entre meta atingida e não atingida a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setMetaAtingida(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
VAR CorBarraPadrao = "#C0012A"
VAR CorBarraMeta   = "#2C9FA3"
VAR CorFundo       = "#FFFFFF"
VAR CorBorda       = "#C0C0C0"
VAR CorDestaqueDia = "#FF8800"
VAR CorLY          = "#FF8800"
VAR CorTituloMeta  = "#333333"
VAR CorFonteLY     = "#666666"

-- 1. Lógica de Data e Dias
VAR UltimaData      = MAX(fVendasDetalhes[Data])
VAR DiaUltimaVenda  = DAY(UltimaData)
VAR MesAnoRef       = FORMAT(UltimaData, "dd/mmm/yy", "pt-BR")

-- 2. Valores
VAR ValorAtual      = [Vendas_MesAtualAcumu.]
VAR Meta            = CALCULATE([MetaDiaria], ALL(dcalendario))
VAR ValorAnoPassado = [MetaDiariaAcumulada]
VAR ValorLY_Resumido = FORMAT(ValorAnoPassado, "R$ #,#")

-- 3. Percentuais
VAR PercAtual = MIN(DIVIDE(ValorAtual, Meta, 0), 1)
VAR PercLY    = MIN(DIVIDE(ValorAnoPassado, Meta, 0), 1)

-- *** LÓGICA CONDICIONAL PRINCIPAL ***
VAR MetaAtingida        = ValorAtual >= ValorAnoPassado
VAR CorBarra            = IF(MetaAtingida, CorBarraMeta, CorBarraPadrao)
VAR CorDestaqueDiaFinal = IF(MetaAtingida, CorBarraMeta, CorDestaqueDia)

-- 4. Dimensões e Coordenadas
VAR AlturaHaste      = 140
VAR Y_BaseHaste      = 170
VAR X_Centro         = 90
VAR Y_TextoPorcentagem = Y_BaseHaste + 4

VAR AlturaSVG_Barra  = FORMAT(AlturaHaste * PercAtual, "0.00", "en-US")
VAR Y_PreenchidoSVG  = FORMAT(Y_BaseHaste - (AlturaHaste * PercAtual), "0.00", "en-US")
VAR Y_LY_Num         = Y_BaseHaste - (AlturaHaste * PercLY)
VAR Y_LY_SVG         = FORMAT(Y_LY_Num, "0.00", "en-US")
VAR DuracaoAnimacao  = "2s"
VAR Y_Topo           = FORMAT(Y_BaseHaste - AlturaHaste, "0.00", "en-US")

VAR TabelaDias = DISTINCT(SELECTCOLUMNS(ALLSELECTED(dcalendario), "DiaNum", dcalendario[Dia]))

-- ============================================================
-- CONTEÚDO DO BULBO - Azul → ícone check | Vermelho → porcentagem
-- ============================================================
VAR ConteudoBulbo =
    IF(
        MetaAtingida,
        "<circle cx='" & X_Centro & "' cy='" & Y_BaseHaste & "' r='10' fill='white' fill-opacity='0.2'/>" &
        "<path d='M " & (X_Centro-6) & " " & Y_BaseHaste &
              " L " & (X_Centro-2) & " " & (Y_BaseHaste+5) &
              " L " & (X_Centro+7) & " " & (Y_BaseHaste-6) &
              "' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/>",
        "<text x='" & X_Centro & "' y='" & (Y_BaseHaste+4) &
        "' font-family='DIN Next LT Pro,DIN,sans-serif' fill='white' font-size='10' text-anchor='middle' font-weight='bold'>" &
        FORMAT(PercAtual, "0%") & "</text>"
    )

-- ============================================================
-- ANEL DE GLOW PULSANTE
-- ============================================================
VAR AnelGlow =
    "<circle cx='" & X_Centro & "' cy='" & Y_BaseHaste & "' r='26' fill='none' stroke='" & CorBarra & "' stroke-width='3' opacity='0.15'>" &
        "<animate attributeName='opacity' values='0.1;0.3;0.1' dur='2s' repeatCount='indefinite'/>" &
        "<animate attributeName='r' values='24;27;24' dur='2s' repeatCount='indefinite'/>" &
    "</circle>"

-- ============================================================
-- CACOS DE VIDRO — somente versão azul (meta atingida)
-- ============================================================
VAR CacosVidro =
    IF(
        MetaAtingida,
        "<g opacity='0'>" &
            "<animate attributeName='opacity' from='0' to='1' begin='1.8s' dur='0.2s' fill='freeze'/>" &
            "<path d='M " & (X_Centro-2) & " " & Y_Topo & " L " & (X_Centro-5) & " " & FORMAT(Y_BaseHaste-AlturaHaste-10,"0.00","en-US") & "' stroke='" & CorBarraMeta & "' stroke-width='1' fill='none' opacity='0.8'/>" &
        "</g>",
        ""
    )

RETURN
"data:image/svg+xml;utf8," &
"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 240'>" &
    "<defs>" &
        "<linearGradient id='gradReflexo' x1='0%' y1='0%' x2='100%' y2='0%'>" &
            "<stop offset='0%' style='stop-color:white;stop-opacity:0.4'/>" &
            "<stop offset='50%' style='stop-color:white;stop-opacity:0'/>" &
            "<stop offset='100%' style='stop-color:black;stop-opacity:0.05'/>" &
        "</linearGradient>" &
    "</defs>" &
    "<style>" &
        ".texto{font-family:'DIN Next LT Pro','DIN',sans-serif;pointer-events:none}" &
        ".texto-valor-atual{font-size:11px;font-weight:bold;fill:" & CorBarra & "}" &
        ".texto-ly{font-size:8px;font-weight:bold;fill:" & CorFonteLY & "}" &
    "</style>" &
    AnelGlow &
    "<circle cx='" & X_Centro & "' cy='" & Y_BaseHaste & "' r='22' fill='" & CorFundo & "' stroke='" & CorBorda & "' stroke-width='1'/>" &
    "<rect x='" & (X_Centro-10) & "' y='30' width='20' height='140' rx='10' fill='" & CorFundo & "' stroke='" & CorBorda & "' stroke-width='1'/>" &
    ConteudoBulbo &
    "<circle cx='" & X_Centro & "' cy='" & Y_BaseHaste & "' r='21' fill='" & CorBarra & "'/>" &
    "<ellipse cx='" & (X_Centro-5) & "' cy='" & FORMAT(Y_TextoPorcentagem-10,"0.00","en-US") & "' rx='3' ry='7' fill='white' fill-opacity='0.3' transform='rotate(-35 " & X_Centro & " " & FORMAT(Y_TextoPorcentagem+8,"0.00","en-US") & ")'/>" &
    "<rect x='" & (X_Centro-9) & "' y='" & Y_PreenchidoSVG & "' width='18' height='" & AlturaSVG_Barra & "' fill='" & CorBarra & "'><animate attributeName='height' from='0' to='" & AlturaSVG_Barra & "' dur='" & DuracaoAnimacao & "' fill='freeze' calcMode='spline' keyTimes='0;1' keySplines='0.42,0,0.58,1'/><animate attributeName='y' from='" & FORMAT(Y_BaseHaste,"0.00","en-US") & "' to='" & Y_PreenchidoSVG & "' dur='" & DuracaoAnimacao & "' fill='freeze' calcMode='spline' keyTimes='0;1' keySplines='0.42,0,0.58,1'/></rect>" &
    "<rect x='" & (X_Centro-9) & "' y='" & Y_PreenchidoSVG & "' width='18' height='" & AlturaSVG_Barra & "' fill='url(#gradReflexo)'/>" &
    "<line x1='" & (X_Centro-10) & "' y1='" & Y_LY_SVG & "' x2='" & (X_Centro+10) & "' y2='" & Y_LY_SVG & "' stroke='" & CorLY & "' stroke-width='1.5' stroke-dasharray='3,1'/>" &
    "<text x='" & X_Centro & "' y='20' class='texto' font-weight='bold' font-size='10' text-anchor='middle' fill='" & CorTituloMeta & "'>Meta: " & FORMAT(Meta,"R$ ###,###.00") & "</text>" &
    "<text x='" & X_Centro & "' y='" & (Y_BaseHaste+45) & "' class='texto texto-valor-atual' text-anchor='middle'>" & FORMAT(ValorAtual,"R$ #,##0") & "</text>" &
    CacosVidro &
"</svg>"`;

  const radarDax = `Radar_Desempenho_SVG = 
-- CONFIGURAÇÕES VISUAIS
VAR boxWidth = 500
VAR boxHeight = 340
VAR radius = 130
VAR x0 = 195
VAR y0 = boxHeight / 2
VAR corPoligonoM1 = "#2C9FA3"     -- Azul - Conversão
VAR corPoligonoM2 = "#940533"     -- Vermelho - Custo
VAR corPoligonoM3 = "#ff8800"     -- Laranja - Prazo
VAR corAlerta = "#E24B4A"

-- DADOS (substitua pelas suas medidas reais)
VAR tabelaBase = ADDCOLUMNS(
    SUMMARIZE(d_categoria, d_categoria[categoria]),
    "M1", [%_Conversao],
    "M2", [%_Custo],
    "M3", [%_Prazo]
)

VAR k = COUNTROWS(tabelaBase)
VAR anguloPorItem = 360 / k

-- SCORE E FILTRO DE ALERTA
VAR tabelaComScore = ADDCOLUMNS(
    tabelaBase,
    "Score", ( -[M1] + [M2] + [M3] ) / 3
)
VAR elegivel = FILTER(tabelaComScore, [M1] <= 0.90)
VAR score1 = MAXX(elegivel, [Score])
VAR cat1 = MAXX(FILTER(elegivel, [Score] = score1), [categoria])
VAR score2 = MAXX(FILTER(elegivel, [categoria] <> cat1), [Score])
VAR cat2 = MAXX(FILTER(elegivel, [Score] = score2), [categoria])

-- TABELA COM COORDENADAS (retorna SVG final)
-- Este é um resumo simplificado - use a medida completa fornecida para o código DAX total
RETURN "data:image/svg+xml;utf8,<svg><!-- Radar Chart - Implementar coordenadas dos 3 polígonos + animações + legenda --></svg>"`;

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
      isAnimated: true,
      preview: null
    },
    {
      id: 'RADAR_01',
      title: 'Radar de Desempenho',
      color: 'text-blue-600',
      isDax: true,
      code: radarDax,
      fileName: 'Medida_Radar_Desempenho',
      isRadar: true,
      preview: null
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
        <h2 className="text-4xl font-headline font-black tracking-tight text-on-surface uppercase mb-1">Templates Visuais e Temas</h2>
        <p className="font-mono text-sm text-primary/70">STORYTELLING: ON // DATALINK: ON</p>
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
                  {svg.isAnimated ? <AnimatedThermometer metaAtingida={metaAtingida} /> : svg.isRadar ? <RadarDesempenho /> : svg.preview}
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
        &gt; RENDER_STATUS: SVG_PREVIEW_GENERATED_SUCCESSFULLY [HEATMAP, DONUT, THERMO, RADAR]
        <br />
        &gt; DOWNLOAD ON: DAX_MEASURES
      </div>
    </div>
  );
};

