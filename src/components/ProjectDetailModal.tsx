import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight, Layers, Cpu, ShieldAlert } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl bg-[#0c101a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#07090e]">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Layers className="w-4 h-4" />
            <span>Project Architecture & Technical Deep Dive</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Project Title & Summary */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-2">
              {project.category.filter(c => c !== 'All').map((cat, idx) => (
                <React.Fragment key={cat}>
                  {idx > 0 && <span aria-hidden="true">·</span>}
                  <span className="text-cyan-400">{cat}</span>
                </React.Fragment>
              ))}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              {project.title}
            </h3>
            <p className="mt-2 text-base text-slate-300 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Optional Project Media Asset */}
          {project.image && (
            <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c101a] via-transparent to-transparent opacity-60" />
            </div>
          )}

          {/* Architecture / Pipeline Flow Diagram */}
          {project.workflowSteps && project.workflowSteps.length > 0 && (
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono mb-4">
                <Cpu className="w-4 h-4" />
                <span>System Pipeline & Processing Workflow</span>
              </div>
              <div className="space-y-3">
                {project.workflowSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-mono text-cyan-400 shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div className="text-sm text-slate-200">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono mb-2 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Engineering Challenge</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3">
              Key Capabilities & System Features
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2.5">
              Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#07090e] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            Source code & documentation maintained in portfolio archive
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <span>Discuss Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
