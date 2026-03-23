import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  cover: string;
  images: string[];
  skills: string[];
  description: string;
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'projeto1',
      title: 'Interface MySQL + Python - Sistema de Heróis',
      cover: 'https://i.ibb.co/1YpfFZBh/capaprojeto-Heroes.png',
      images: [
        'https://i.ibb.co/spqszWpq/print-Interface-My-SQL-Python-Viloes.png',
        'https://i.ibb.co/0RTddHMH/print-Interface-My-SQL-Python-Local.png',
        'https://i.ibb.co/YBsKfWd0/print-Interface-My-SQL-Python.png',
      ],
      skills: ['Python', 'MySQL', 'Power Apps', 'Sharepoint', 'Power BI'],
      description: 'Conexão do MySQL com Sharepoint e interfaces. Desenvolvimento de aplicativos para controle de alertas, armazenamento de dados no Microsoft List, criação de dashboards e relatórios analíticos.',
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
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
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

            {/* Images Grid */}
            <div className="p-6">
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

              {/* Project Description */}
              <div className="mt-6 pt-6 border-t border-outline/20">
                <h3 className="font-headline font-bold text-primary mb-3 uppercase">Descrição</h3>
                <p className="font-body text-sm text-on-surface-variant mb-4 leading-relaxed">
                  {projects.find((p) => p.id === selectedProject)?.description}
                </p>

                <h3 className="font-headline font-bold text-primary mb-3 uppercase">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
