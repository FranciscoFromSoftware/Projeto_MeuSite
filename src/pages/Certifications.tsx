import React from 'react';
import { Award, Shield, Zap, Microscope, Network, Database, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certs = [
    {
      id: 'SHARD_01',
      title: 'Google Data Analytics',
      issuer: 'GOOGLE_PROFESSIONAL',
      status: 'VERIFICADO',
      date: '2024',
      icon: Database,
      color: 'text-primary',
      link: 'https://www.credly.com/org/google/badge/google-data-analytics-professional-certificate'
    },
    {
      id: 'SHARD_02',
      title: 'Tensor Flow Dynamics',
      issuer: 'DEEP_MINDS_LAB',
      status: 'VERIFICADO',
      date: 'Q4_2023',
      icon: Award,
      color: 'text-primary'
    },
    {
      id: 'SHARD_03',
      title: 'Crypto-Static Defense',
      issuer: 'CYBER_CORE_SEC',
      status: 'VERIFICADO',
      date: 'Q1_2024',
      icon: Shield,
      color: 'text-secondary'
    },
    {
      id: 'SHARD_04',
      title: 'High-Freq Computing',
      issuer: 'PLASMA_NETWORKS',
      status: 'EXPIRA_EM_BREVE',
      date: 'Q2_2024',
      icon: Zap,
      color: 'text-tertiary'
    }
  ];

  const skills = [
    "Data Aggregation", "Data Analytics", "Data Calculations", "Data Cleaning", 
    "Data Ethics", "Data Visualization", "Presentations", "Problem Solving", 
    "R", "Spreadsheets", "SQL", "Structured Thinking"
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end mb-8 border-b border-outline pb-4">
        <div>
          <h1 className="text-4xl font-headline font-black uppercase tracking-tighter text-on-surface leading-none">
            Certificações & <span className="text-primary">Cursos</span>
          </h1>
          <div className="flex gap-4 mt-2 font-mono text-[10px] uppercase text-primary/60 tracking-widest">
            <span>ID_NÓ: ARQUITETO_DE_DADOS_01</span>
            <span className="text-outline">//</span>
            <span>NÍVEL_ACESSO: PROTOCOLO_OMEGA</span>
            <span className="text-outline">//</span>
            <span className="animate-pulse">STATUS: LINK_NEURAL_ESTÁVEL</span>
          </div>
        </div>
        <div className="text-right font-mono text-[10px] text-outline uppercase">
          <div>UPTIME_SISTEMA: 1422:45:12</div>
          <div className="text-secondary">LATÊNCIA: 4.2ms</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Featured Shard - Google Data Analytics */}
        <div className="md:col-span-2 lg:col-span-2 relative group overflow-hidden bg-surface-low border border-primary/20 p-1 shard-clip">
          <div className="relative bg-surface-high h-full min-h-[500px] p-8 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary/40 select-none">
              REF_FRAGMENTO: GOOGLE-GDA-01
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-secondary text-surface font-mono text-[10px] font-bold uppercase mb-6 shard-clip">
                Certificação de Destaque
              </div>
              <h2 className="text-5xl font-headline font-black uppercase leading-tight tracking-tighter mb-4 text-primary">
                Google Data Analytics <br/>Professional Certificate
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map(skill => (
                  <span key={skill} className="text-[9px] font-mono border border-primary/30 px-2 py-0.5 text-primary/80 bg-primary/5">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="max-w-md font-body text-on-surface-variant leading-relaxed text-sm">
                Validação completa de processos de análise de dados, desde a limpeza e cálculos complexos até a visualização e tomada de decisão estratégica via SQL e R.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex gap-2">
                <span className="w-2 h-2 bg-primary"></span>
                <span className="w-2 h-2 bg-primary/40"></span>
                <span className="w-2 h-2 bg-primary/20"></span>
              </div>
              <div className="flex justify-between items-center border-t border-outline pt-4">
                <div className="font-mono text-xs uppercase text-secondary">
                  EMISSOR: GOOGLE // VALIDADO: SIM
                </div>
                <a 
                  href="https://www.credly.com/org/google/badge/google-data-analytics-professional-certificate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-surface font-mono px-6 py-2 text-xs font-bold uppercase transition-all hover:translate-x-1 flex items-center gap-2"
                >
                  VER_CREDLY <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Shard Grid */}
        {certs.slice(1).map((cert) => (
          <div key={cert.id} className="bg-surface-low border border-outline hover:border-primary/50 transition-colors group cursor-crosshair shard-clip p-1">
            <div className="bg-surface-high p-6 flex flex-col h-full gap-4 transition-transform group-hover:scale-[0.98]">
              <div className="flex justify-between items-start">
                <cert.icon className={`${cert.color} text-3xl`} size={32} />
                <span className="font-mono text-[10px] text-outline uppercase tracking-widest">{cert.id}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline font-bold text-xl uppercase tracking-tighter text-on-surface group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="font-mono text-[10px] text-on-surface-variant mt-2 uppercase tracking-tight">
                  EMISSOR: {cert.issuer}
                </p>
              </div>
              <div className="bg-surface p-3 flex justify-between items-center font-mono text-[9px] uppercase">
                <span className={cert.status === 'EXPIRA_EM_BREVE' ? 'text-tertiary' : 'text-secondary'}>
                  {cert.status}
                </span>
                <span className="text-outline">{cert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Seção de Telemetria */}
      <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface-low border border-outline p-6 shard-clip">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-2 w-2 bg-primary animate-pulse"></div>
            <h4 className="font-headline font-bold uppercase tracking-widest text-sm">Fluxo_de_Validação: Ativo</h4>
          </div>
          <div className="space-y-2 font-mono text-[10px] text-on-surface-variant overflow-hidden h-48 relative">
            <p className="text-primary/60">[0.0012] Iniciando handshake com autoridade de certificação neural...</p>
            <p>[0.0045] Troca de chaves públicas: 0x82...9F1 confirmada.</p>
            <p>[0.0122] Buscando hash da credencial: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</p>
            <p className="text-secondary">[0.0543] VALIDANDO ASSINATURA: GOOGLE DATA ANALYTICS</p>
            <p>[0.0611] Autoridade correspondente: GOOGLE PROFESSIONAL CERTIFICATES</p>
            <p>[0.0892] Checagem de expiração: SEMPRE_ATIVO</p>
            <p className="text-primary">[0.1102] STREAM ESTÁVEL. RENDERIZANDO SELO HOLOGRÁFICO...</p>
            <p>[0.1255] Carregando metadados biométricos...</p>
            <p>[0.1344] Usuário verificado: ARQUITETO_PRIMÁRIO</p>
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-surface-low to-transparent" />
          </div>
        </div>

        <div className="bg-surface-high border-l-2 border-secondary p-6 relative">
          <div className="absolute top-2 right-2 flex gap-1">
            <div className="w-1 h-1 bg-secondary"></div>
            <div className="w-1 h-1 bg-secondary/50"></div>
          </div>
          <h4 className="font-headline font-bold uppercase tracking-widest text-sm mb-4 text-secondary">Informações do Sistema</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[10px] text-outline uppercase">Total de Fragmentos</span>
              <span className="font-mono text-xs font-bold text-on-surface">12/12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-mono text-[10px] text-outline uppercase">Nível de Maestria</span>
              <span className="font-mono text-xs font-bold text-primary">ELITE_TIER</span>
            </div>
            <div className="w-full bg-surface h-1 mt-2">
              <div className="bg-primary h-full w-[95%] shadow-[0_0_10px_rgba(0,243,255,0.5)]"></div>
            </div>
            <div className="pt-4 border-t border-outline">
              <p className="font-mono text-[9px] text-outline-variant italic leading-tight">
                "A arquitetura dos dados é a única planta que importa na era pós-silício."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};