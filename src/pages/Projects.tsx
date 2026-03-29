import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  cover: string;
  images: string[];
  skills: string[];
  description: string;
  iframeUrl?: string;
  githubUrl?: string;
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects: Project[] = [
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
      title: 'Novos Projetos em Desenvolvimento',
      cover: 'https://i.ibb.co/Lzsk8pyS/Aguarde-Novos-Projetos.png',
      images: ['https://i.ibb.co/Lzsk8pyS/Aguarde-Novos-Projetos.png'],
      skills: ['Em Breve'],
      description: 'Fique atento para novos projetos em desenvolvimento.',
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

  return (
    <div className="space-y-8 pb-20">
      {/* Header */}
      <div className="mb-8 flex justify-between items-end border-b border-outline pb-4">
        <div>
          <h1 className="font-headline font-black text-4xl text-primary tracking-tighter uppercase">Project_Databanks.exe</h1>
          <p className="font-mono text-xs text-secondary mt-2 tracking-widest uppercase">Repository Access: Active</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-surface-low border border-outline hover:border-primary/40 transition-all cursor-pointer group overflow-hidden"
            onClick={() => setSelectedProject(project.id)}
          >
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
          <div className="bg-surface-low border border-outline max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-outline/20">
              <h2 className="font-headline font-bold text-2xl text-primary uppercase">
                {projects.find((p) => p.id === selectedProject)?.title}
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
              {projects.find((p) => p.id === selectedProject)?.iframeUrl ? (
                <div className="bg-surface border border-outline/30 overflow-hidden">
                  <iframe
                    title="Project Visualization"
                    src={projects.find((p) => p.id === selectedProject)?.iframeUrl}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    allowFullScreen={true}
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects
                    .find((p) => p.id === selectedProject)
                    ?.images.map((image, idx) => (
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
                  {projects.find((p) => p.id === selectedProject)?.description}
                </p>

                <h3 className="font-headline font-bold text-primary mb-3 uppercase">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects
                    .find((p) => p.id === selectedProject)
                    ?.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] bg-primary/10 text-primary px-3 py-1 border border-primary/20 font-mono uppercase"
                      >
                        {skill}
                      </span>
                    ))}
                </div>

                {projects.find((p) => p.id === selectedProject)?.githubUrl && (
                  <div className="border-t border-outline/20 pt-6">
                    <a
                      href={projects.find((p) => p.id === selectedProject)?.githubUrl}
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
