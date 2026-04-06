import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

/** URL do Streamlit Cloud com `embedded=true` (modo embed oficial), preservando outros query params. */
function streamlitEmbeddedSrc(pageUrl: string): string {
  try {
    const u = new URL(pageUrl);
    u.searchParams.set('embedded', 'true');
    return u.toString();
  } catch {
    const join = pageUrl.includes('?') ? '&' : '?';
    return `${pageUrl}${join}embedded=true`;
  }
}

interface Project {
  id: string;
  title: string;
  cover: string;
  images: string[];
  skills: string[];
  description: string;
  /** URL para iframe (ex.: Power BI “public view”). */
  iframeUrl?: string;
  /** App Streamlit: tentativa de embed no modal com `?embedded=true`; use também para abrir em nova aba. */
  externalAppUrl?: string;
  githubUrl?: string;
  status?: 'developing' | 'completed';
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'powerbi-projeto',
      title: 'Governo do Brasil - Dados e Estatísticas',
      cover: 'https://i.ibb.co/Lzsk8pyS/Aguarde-Novos-Projetos.png',
      images: [],
      skills: ['Power BI', 'Python'],
      description: 'Dashboard interativo em desenvolvimento com análises estratégicas e visualizações de dados em tempo real. Acompanhe a evolução do projeto em tempo real através do visualizador do Power BI.',
      iframeUrl: 'https://app.powerbi.com/view?r=eyJrIjoiODdmODA3NzYtMmM5Ny00MjM4LThjNWMtYzk3NDMzNmY5ZDkyIiwidCI6IjY0YjI0ZDg4LTU4ODQtNDg0NC04YmZhLWMwNzFjOThjNjUyMSJ9',
      status: 'developing',
    },
    {
      id: 'projeto1',
      title: 'Análise da Série - Rick Morty',
      cover: '<iframe title="RickMorty" width="1024" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiNjI4YWRlYjUtODkxZi00ZGM5LWJlYTUtZmYzNTgzNDQzMDEyIiwidCI6IjY0YjI0ZDg4LTU4ODQtNDg0NC04YmZhLWMwNzFjOThjNjUyMSJ9" frameborder="0" allowFullScreen="true"></iframe>',
      images: [],
      skills: ['Power BI', 'MySQL', 'Apache Hop'],
      description: 'Projeto de análise de dados da série Rick e Morty, utilizando Power BI para visualização, MySQL para armazenamento e Apache Hop para orquestração dos dados. O projeto apresenta insights sobre os personagens, episódios e temporadas da série, ajudando a identificar o personagem favorito dos fãs e conhecer melhor cada um deles.',
      iframeUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNjI4YWRlYjUtODkxZi00ZGM5LWJlYTUtZmYzNTgzNDQzMDEyIiwidCI6IjY0YjI0ZDg4LTU4ODQtNDg0NC04YmZhLWMwNzFjOThjNjUyMSJ9',
      githubUrl: 'https://github.com/FranciscoFromSoftware/RickMorty',
    },
    {
      id: 'projeto2',
      title: 'Crescimento da População do Brasil - 2001 a 2024',
      cover: 'https://i.ibb.co/Lzsk8pyS/Aguarde-Novos-Projetos.png',
      images: [],
      skills: ['Python', 'Streamlit'],
      description: 'Análise publicada no StreamLit, desenvolvida em Python. Dados sobre o crescimento da população do Brasil de 2001 a 2024.',
      externalAppUrl:
        'https://brasilpopulacao.streamlit.app/?embed_options=dark_theme,show_toolbar,show_colored_line,show_padding',
    },
    {
      id: 'projeto3',
      title: 'Novos Projetos em Desenvolvimento',
      cover: 'https://i.ibb.co/Lzsk8pyS/Aguarde-Novos-Projetos.png',
      images: ['https://i.ibb.co/Lzsk8pyS/Aguarde-Novos-Projetos.png'],
      skills: ['Em Breve'],
      description: 'Fique atento para novos projetos em desenvolvimento.',
    },
  ];

  const activeProject = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : undefined;

  return (
    <div className="space-y-8 pb-20">
      {/* Header */}
      <div className="mb-8 flex justify-between items-end border-b border-outline pb-4">
        <div>
          <h1 className="font-headline font-black text-4xl text-primary tracking-tighter uppercase">Projetos</h1>
          <p className="font-mono text-xs text-secondary mt-2 tracking-widest uppercase">Repositorio de Projetos: </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-surface-low border border-outline hover:border-primary/40 transition-all cursor-pointer group overflow-hidden relative"
            onClick={() => setSelectedProject(project.id)}
          >
            {/* Status Badge */}
            {project.status === 'developing' && (
              <div className="absolute top-2 right-2 z-10 bg-secondary text-surface font-mono text-[10px] font-bold px-3 py-1 uppercase">
                Desenvolvimento Agora
              </div>
            )}
            {/* Project Cover */}
            <div className="relative overflow-hidden h-48 bg-surface">
              {project.iframeUrl ? (
                <iframe
                  title={project.title}
                  src={project.iframeUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              ) : project.externalAppUrl ? (
                <>
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary bg-surface/90 px-3 py-1.5 border border-primary/40">
                      Abrir app — nova aba
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </>
              )}
            </div>

            {/* Project Info */}
            <div className="p-6 flex flex-col h-60">
              <h3 className="font-headline font-bold text-lg text-primary mb-3 uppercase line-clamp-2">
                {project.title}
              </h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[9px] bg-primary/10 text-primary px-2 py-1 border border-primary/20 font-mono uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-outline/20">
                <button className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-mono text-xs uppercase">
                  View Details <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div
            className={`bg-surface-low border border-outline w-full max-h-[90vh] overflow-y-auto ${
              activeProject?.iframeUrl || activeProject?.externalAppUrl
                ? 'max-w-[min(95vw,1400px)]'
                : 'max-w-4xl'
            }`}
          >
            {/* Close Button */}
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-outline/20">
              <h2 className="font-headline font-bold text-2xl text-primary uppercase">
                {activeProject?.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-2xl text-primary hover:text-secondary transition-colors"
              >
                ×
              </button>
            </div>

            {/* Images/iframe Grid */}
            <div className="p-6">
              {activeProject?.iframeUrl ? (
                <div className="bg-surface border border-outline/30 overflow-hidden">
                  <iframe
                    title="Project Visualization"
                    src={activeProject.iframeUrl}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    allowFullScreen={true}
                  />
                </div>
              ) : activeProject?.externalAppUrl ? (
                <div className="space-y-4">
                  <div className="bg-surface overflow-hidden border border-black/10">
                    <iframe
                      title="Streamlit"
                      src={streamlitEmbeddedSrc(activeProject.externalAppUrl)}
                      width="100%"
                      height={600}
                      className="block w-full border-0"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left">
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed max-w-2xl">
                      Mesmo padrão do embed com{' '}
                      <span className="font-mono text-[10px] text-primary">?embedded=true</span>. Se aparecer erro de
                      redirecionamento ou tela em branco, o navegador ou o Streamlit Cloud bloqueou o iframe — abra em
                      nova aba.
                    </p>
                    <a
                      href={activeProject.externalAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 shrink-0 bg-secondary text-surface px-5 py-2.5 hover:bg-secondary/90 font-mono text-xs uppercase font-bold transition-colors"
                    >
                      Abrir no Streamlit <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeProject?.images.map((image, idx) => (
                      <div
                        key={idx}
                        className="bg-surface border border-outline/30 overflow-hidden hover:border-primary/40 transition-colors"
                      >
                        <img
                          src={image}
                          alt={`Screenshot ${idx + 1}`}
                          className="w-full h-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
                        />
                      </div>
                    ))}
                </div>
              )}

              {/* Project Description */}
              <div className="mt-6 pt-6 border-t border-outline/20">
                <h3 className="font-headline font-bold text-primary mb-3 uppercase">Descrição</h3>
                <p className="font-body text-sm text-on-surface-variant mb-4 leading-relaxed">
                  {activeProject?.description}
                </p>

                <h3 className="font-headline font-bold text-primary mb-3 uppercase">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject?.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] bg-primary/10 text-primary px-3 py-1 border border-primary/20 font-mono uppercase"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {activeProject?.githubUrl && (
                  <div className="border-t border-outline/20 pt-6">
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-surface px-4 py-2 hover:bg-primary/90 font-mono text-xs uppercase font-bold transition-colors"
                    >
                      <Github size={16} /> Ver no GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
