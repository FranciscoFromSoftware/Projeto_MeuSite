import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-12 pb-20">
      {/* Welcome Section */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/5 to-tertiary/10 border border-primary/20 p-12 rounded-lg">
        <h1 className="font-headline font-black text-5xl text-primary mb-4 uppercase">Bem-vindo ao Meu Portfólio</h1>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
          Sou um Analista de Dados apaixonado por transformar dados em insights estratégicos. Aqui você encontrará meus projetos, habilidades e experiências profissionais.
        </p>
      </section>

      {/* Featured Project */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-headline font-bold text-3xl uppercase tracking-widest">Projeto em Destaque</h2>
          <div className="h-[1px] flex-grow bg-outline/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Image */}
          <div className="lg:col-span-2">
            <div className="relative bg-surface-low border border-outline/30 overflow-hidden group">
              <img 
                src="https://i.ibb.co/1YpfFZBh/capaprojeto-Heroes.png" 
                alt="Interface MySQL + Python - Sistema de Heróis" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent opacity-40" />
              <div className="absolute top-4 left-4 bg-primary text-surface font-mono text-[10px] font-bold px-3 py-1">
                PROJETO_01
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="flex flex-col justify-between">
            <div className="bg-surface-low border border-outline/20 p-6 space-y-4">
              <div>
                <h3 className="font-headline font-bold text-xl text-primary uppercase mb-2">
                  Interface MySQL + Python
                </h3>
                <p className="text-on-surface-variant text-sm">Sistema de Heróis</p>
              </div>

              <div className="border-t border-outline/20 pt-4">
                <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                  Conexão entre MySQL e Python com integração Sharepoint e dashboards Power BI para análise de dados em tempo real.
                </p>
              </div>

              <div className="border-t border-outline/20 pt-4">
                <p className="text-[10px] text-outline uppercase font-mono mb-3">Tecnologias:</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'MySQL', 'Power BI', 'Power Apps'].map(tech => (
                    <span key={tech} className="text-[9px] bg-primary/10 text-primary px-2 py-1 border border-primary/20 font-mono uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-outline/20 pt-4">
                <a href="/Projeto_MeuSite/projetos" className="inline-flex items-center gap-2 bg-primary text-surface px-4 py-2 font-mono text-xs uppercase font-bold hover:bg-primary/90 transition-colors">
                  Ver Todos os Projetos <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Projetos', value: '3', color: 'primary' },
            { label: 'Habilidades', value: '10+', color: 'secondary' },
            { label: 'Experiência', value: '2+ anos', color: 'tertiary' },
            { label: 'Status', value: 'Disponível', color: 'primary' },
          ].map((stat, idx) => (
            <div key={stat.label} className="bg-surface-low border border-primary/20 p-6 text-center hover:border-primary/40 transition-colors">
              <p className="font-mono text-[10px] text-primary uppercase mb-2">{stat.label}</p>
              <p className="font-headline font-bold text-3xl text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-surface-low border-2 border-primary p-8 text-center space-y-4">
        <h2 className="font-headline font-bold text-2xl uppercase text-primary">Vamos Conversar?</h2>
        <p className="text-on-surface-variant mb-6">
          Estou sempre aberto a novas oportunidades e desafios. Entre em contato através dos meus links sociais!
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/FranciscoFromSoftware" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-2 hover:bg-primary/10 transition-colors font-mono text-xs uppercase">
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/francisco-henrique-lomas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-surface px-4 py-2 hover:bg-primary/90 transition-colors font-mono text-xs uppercase font-bold">
            <ExternalLink size={16} /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};
