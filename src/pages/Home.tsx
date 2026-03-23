import React from 'react';
import { Cpu, Activity, Terminal, Shield, Network, Settings } from 'lucide-react';

export const Home: React.FC = () => {
  const skills = [
    { label: 'Python', value: 82, icon: Cpu },
    { label: 'Power BI', value: 86, icon: Activity },
    { label: 'Power Apps', value: 78, icon: Terminal },
    { label: 'Power Automate', value: 89, icon: Shield },
    { label: 'Excel', value: 94, icon: Network },
    { label: 'SQL', value: 84, icon: Settings },
    { label: 'Sharepoint', value: 92, icon: Cpu },
    { label: 'R', value: 88, icon: Activity },
    { label: 'Pentaho', value: 76, icon: Terminal },
    { label: 'Figma', value: 71, icon: Shield },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 relative group">
          <div className="absolute -inset-1 bg-primary/20 blur opacity-25 group-hover:opacity-50 transition duration-1000" />
          <div className="relative bg-surface-low border border-outline/30 overflow-hidden">
            <img 
              src="https://i.postimg.cc/G2rj9FFP/1752112266401.png" 
              alt="Francisco Henrique Lomas" 
              className="w-full h-[400px] object-cover brightness-75 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
            <div className="absolute top-4 left-4 font-mono text-[10px] text-primary/60 bg-surface/80 px-2 py-1">
              NEURAL_ARCHITECT
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="bg-surface-low/60 backdrop-blur-md p-8 border border-outline/20 clip-corner relative">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-secondary">
              STATUS: ACTIVE
            </div>
            <h1 className="font-headline font-black text-5xl md:text-7xl text-primary tracking-tighter mb-4 uppercase">
              Francisco Henrique Lomas
            </h1>
            <div className="w-24 h-1 bg-primary mb-6 shadow-[0_0_10px_#00f3ff]" />
            <p className="font-mono text-on-surface-variant text-lg leading-relaxed mb-6 max-w-2xl">
              Admirador de ficção científica futurista, fascinado por tecnologia e inspirado pelas constante evoluções, sempre estou buscando explorar novas tendências e avanços tecnológicos. Com um olhar analítico e estratégico, tenho um grande interesse por estatística e análise de dados, transformando informações em conhecimento valioso.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Experiência', value: '12.4YRS', color: 'text-secondary' },
                { label: 'Projetos Concluídos', value: '16', color: 'text-primary' },
                { label: 'Tipos de Análises Realizadas', value: '39', color: 'text-tertiary' },
                { label: 'Soluções de Negócios', value: '4', color: 'text-on-surface' },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface-high p-4 border-l-2 border-primary/30">
                  <span className="block font-mono text-[10px] text-on-surface-variant uppercase">{stat.label}</span>
                  <span className={`block font-mono text-xl ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-primary uppercase tracking-widest">Awaiting Command...</span>
            </div>
            <div className="flex items-center gap-2 bg-surface-high px-4 py-2 border border-outline/30">
              <Activity size={12} className="text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest">Grid-7, Sector-B</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-headline font-bold text-2xl uppercase tracking-widest">Technical_Skills.exe</h2>
          <div className="h-[1px] flex-grow bg-outline/30" />
          <span className="font-mono text-[10px] text-primary/40 tracking-[0.3em]">SKILL_MATRIX_V4.0</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div key={skill.label} className="bg-surface-low border border-outline/20 p-6 flex flex-col items-center justify-center group hover:border-primary/50 transition-colors">
                <IconComponent className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <span className="font-mono text-[10px] uppercase tracking-tighter text-center">{skill.label}</span>
                <div className="w-full bg-surface-high h-1 mt-4 relative overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-primary" 
                    style={{ width: `${skill.value}%` }} 
                  />
                </div>
                <span className="font-mono text-[9px] text-primary mt-2">{skill.value}%</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="pb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-headline font-bold text-2xl uppercase tracking-widest">Professional_Timeline.log</h2>
          <div className="h-[1px] flex-grow bg-outline/30" />
          <span className="font-mono text-[10px] text-secondary/40 tracking-[0.3em]">CHRONOS_SEQUENCE</span>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
          {[
            {
              date: 'SET 2024 - SET 2025',
              title: 'Analista de Dados Junior',
              company: 'GRUPO_BELARMINO',
              desc: 'Desenvolvimento de painéis interativos no Power BI para controle de KPI e indicadores estratégicos. Automações de processos gerenciais em Python e Power Automate, ETL com Pentaho e administração de Data Warehouse com PostgreSQL.',
              status: 'ACTIVE_PROCESS',
              color: 'primary'
            },
            {
              date: 'MAR 2024 - JUN 2024',
              title: 'Técnico Planejamento Produção',
              company: 'ENGECAMPO',
              desc: 'Relatórios diários de obras, histogramas do empreendimento, integração Power BI com EAP do MS Project. Idealização de controles de obra para planejamento, importação CAD/BIM e integração MS Project com Excel.',
              status: 'COMPLETE',
              color: 'secondary'
            },
            {
              date: 'NOV 2023 - MAR 2024',
              title: 'Estatístico',
              company: 'RAPIDO_SUMARÉ',
              desc: 'Promoção em 2 meses devido aos méritos e projetos de melhoria implementados. Aceleração de análises críticas para operação. Planejamento de escalas e análise de dados aplicando base teórica acumulada.',
              status: 'ARCHIVED',
              color: 'tertiary'
            }
          ].map((item, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-${item.color} bg-surface shadow-[0_0_15px_rgba(0,243,255,0.4)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
                <div className={`w-2 h-2 bg-${item.color}`} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface-low p-6 border border-outline/20 hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <time className={`font-mono text-[10px] text-${item.color}`}>{item.date}</time>
                  <span className="font-mono text-[10px] text-on-surface-variant uppercase bg-surface-high px-2 py-0.5">{item.status}</span>
                </div>
                <h3 className="font-headline font-bold text-xl uppercase mb-1">{item.title}</h3>
                <p className={`font-mono text-[10px] text-${item.color} mb-4`}>{item.company}</p>
                <p className="text-on-surface-variant text-sm leading-relaxed italic">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
