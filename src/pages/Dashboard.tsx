import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Linkedin } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-12 pb-20">
      {/* Welcome Section */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/5 to-tertiary/10 border border-primary/20 p-12">
        <h1 className="font-headline font-black text-5xl text-primary mb-4 uppercase">Bem-vindo ao Meu Portfólio</h1>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
          Sou um Analista de Dados apaixonado por transformar dados em insights estratégicos. Aqui você encontrará meus projetos, habilidades e experiências profissionais.
        </p>
      </section>

      {/* Featured Project */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-headline font-bold text-3xl uppercase tracking-widest">Projeto em Destaque</h2>
          <div className="h-px flex-grow bg-outline/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative bg-surface-low border border-outline/30 overflow-hidden">
              <div className="w-full h-96 flex items-center justify-center">
                <iframe 
                  title="RickMorty" 
                  width="100%" 
                  height="100%" 
                  src="https://app.powerbi.com/view?r=eyJrIjoiNjI4YWRlYjUtODkxZi00ZGM5LWJlYTUtZmYzNTgzNDQzMDEyIiwidCI6IjY0YjI0ZDg4LTU4ODQtNDg0NC04YmZhLWMwNzFjOThjNjUyMSJ9" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  style={{ minHeight: '100%' }}
                />
              </div>
              <div className="absolute top-4 left-4 bg-primary text-surface font-mono text-xs font-bold px-3 py-1">
                PROJETO_01
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-surface-low border border-outline/20 p-6 space-y-4">
              <div>
                <h3 className="font-headline font-bold text-xl text-primary uppercase mb-2">
                  Power BI + Apache Hop
                </h3>
                <p className="text-on-surface-variant text-sm">Status da Série Rick e Morty</p>
              </div>

              <div className="border-t border-outline/20 pt-4">
                <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                O objetivo do projeto é apresentar os detalhes atuais da série Rick e Morty, ajudando  a identificar seu personagem favorito e conhecer melhor cada um deles.
 
                </p>
              </div>

              <div className="border-t border-outline/20 pt-4">
                <p className="text-xs text-outline uppercase font-mono mb-3">Tecnologias:</p>
                <div className="flex flex-wrap gap-2">
                  {['Power BI', 'Apache Hop', 'MySQL'].map(tech => (
                    <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 border border-primary/20 font-mono uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-outline/20 pt-4">
                <Link to="/projetos" className="inline-flex items-center gap-2 bg-primary text-surface px-4 py-2 font-mono text-xs uppercase font-bold hover:bg-primary/90">
                  Ver Todos os Projetos <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-surface-low border border-primary/20 p-6 text-center">
            <p className="font-mono text-xs text-primary uppercase mb-2">Projetos</p>
            <p className="font-headline font-bold text-3xl text-primary">3</p>
          </div>
          <div className="bg-surface-low border border-secondary/20 p-6 text-center">
            <p className="font-mono text-xs text-secondary uppercase mb-2">Habilidades</p>
            <p className="font-headline font-bold text-3xl text-secondary">10+</p>
          </div>
          <div className="bg-surface-low border border-tertiary/20 p-6 text-center">
            <p className="font-mono text-xs text-tertiary uppercase mb-2">Experiência</p>
            <p className="font-headline font-bold text-3xl text-tertiary">2+ anos</p>
          </div>
          <div className="bg-surface-low border border-primary/20 p-6 text-center">
            <p className="font-mono text-xs text-primary uppercase mb-2">Almejando</p>
            <p className="font-headline font-bold text-3xl text-primary">Senioridade</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-surface-low border-2 border-primary p-8 text-center space-y-4">
        <h2 className="font-headline font-bold text-2xl uppercase text-primary">Vamos Conversar?</h2>
        <p className="text-on-surface-variant mb-6">
          Estou sempre aberto a novas oportunidades e desafios. Entre em contato através dos meus links sociais!
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/FranciscoFromSoftware" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-2 hover:bg-primary/10 font-mono text-xs uppercase">
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/francisco-henrique-lomas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-surface px-4 py-2 hover:bg-primary/90 font-mono text-xs uppercase font-bold">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};
