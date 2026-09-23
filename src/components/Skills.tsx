import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Globe, Brain, Database, BarChart2, GitBranch, ShieldCheck } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'BarChart2':
        return <BarChart2 className="w-5 h-5 text-amber-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-rose-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono mb-2">
            Technical Stack & Tooling
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Competencies & Engineering Arsenal
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Grounded in core computer science, modern AI architectures, web application frameworks, and resilient database systems.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="bg-[#0c101a] border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between transition-all hover:shadow-lg hover:shadow-cyan-950/10"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills list - clean badge layout */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700/80 text-slate-200 transition-colors cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{cat.skills.length} core competencies</span>
                <span className="text-slate-500">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
