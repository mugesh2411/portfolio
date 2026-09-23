import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArrowUpRight, Github, ExternalLink, Code2, Cpu, Eye, CloudRain, Car, FileText, Activity, Home, Building2, MessageSquare } from 'lucide-react';

const CATEGORIES: ProjectCategory[] = [
  'All',
  'AI / ML',
  'Computer Vision',
  'NLP',
  'Full Stack',
  'IoT',
  'Data Science'
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category.includes(activeCategory));
  }, [activeCategory]);

  // Helper for rendering custom project icon
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'web-scraper-insights':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'emotion-detection-fer':
        return <Eye className="w-5 h-5 text-indigo-400" />;
      case 'weather-prediction':
        return <CloudRain className="w-5 h-5 text-blue-400" />;
      case 'ai-chatbot-nlp':
        return <MessageSquare className="w-5 h-5 text-purple-400" />;
      case 'iot-smart-parking':
        return <Car className="w-5 h-5 text-emerald-400" />;
      case 'ocr-handwritten-recognition':
        return <FileText className="w-5 h-5 text-cyan-400" />;
      case 'motion-tracking-kalman':
        return <Activity className="w-5 h-5 text-amber-400" />;
      case 'home-automation-iot':
        return <Home className="w-5 h-5 text-emerald-400" />;
      case 'hostel-management-app':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-600/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono mb-2">
              Featured Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Applied AI & Engineering Projects
            </h2>
            <p className="mt-3 text-slate-300 text-base sm:text-lg">
              Practical software implementations spanning deep learning, computer vision pipelines, natural language processing, IoT controllers, and full-stack systems.
            </p>
          </div>

          <div className="text-sm font-mono text-slate-400">
            Showing <span className="text-cyan-400 font-semibold">{filteredProjects.length}</span> of {PROJECTS_DATA.length} Projects
          </div>
        </div>

        {/* Project Category Filter Tabs (Single-line interactive segmented control) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#0c101a] border border-slate-800 rounded-xl overflow-x-auto mb-10 no-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-900/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-[#0c101a] border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20"
            >
              {/* Card Media or Visual Architecture Teaser */}
              {project.image ? (
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c101a] via-transparent to-transparent opacity-80" />
                </div>
              ) : (
                <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-slate-900 via-[#0a0f1d] to-[#0c101a] p-5 flex flex-col justify-between border-b border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-white">
                      {getProjectIcon(project.id)}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Technical Spec
                    </span>
                  </div>

                  {project.architectureOrWorkflow && (
                    <div className="text-xs font-mono text-slate-300 bg-black/40 p-2.5 rounded-lg border border-slate-800/60 line-clamp-2">
                      <span className="text-cyan-400">Flow: </span>
                      {project.architectureOrWorkflow}
                    </div>
                  )}
                </div>
              )}

              {/* Card Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category unboxed metadata tags */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 mb-2.5">
                    {project.category
                      .filter((c) => c !== 'All')
                      .map((cat, idx) => (
                        <React.Fragment key={cat}>
                          {idx > 0 && <span aria-hidden="true">·</span>}
                          <span className="text-cyan-400 font-medium">{cat}</span>
                        </React.Fragment>
                      ))}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Highlights / Features List */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5">
                    {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-cyan-400 shrink-0">▹</span>
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Tech Stack & Actions */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      <span>Explore Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-1.5 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                        title="View Architecture Details"
                        aria-label="View Details"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
