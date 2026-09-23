import React, { useState } from 'react';
import { INTERNSHIP_EXPERIENCE } from '../data/portfolioData';
import { Briefcase, CheckCircle2, ChevronRight, Terminal, Layers, ArrowRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentMilestone = INTERNSHIP_EXPERIENCE.progression.find(
    (p) => p.step === activeStep
  ) || INTERNSHIP_EXPERIENCE.progression[0];

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono mb-2">
            Practical Software Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Internship & Engineering Progression
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            End-to-end software development lifecycle executing modern React frontend, Django REST APIs, and automated Python data harvesting.
          </p>
        </div>

        {/* Experience Header Card */}
        <div className="bg-[#0c101a] border border-slate-800 rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <Briefcase className="w-4 h-4" />
                <span>Web / App Development</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                {INTERNSHIP_EXPERIENCE.focus}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {INTERNSHIP_EXPERIENCE.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-cyan-300 bg-cyan-950/30 border border-cyan-800/50 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
            {INTERNSHIP_EXPERIENCE.summary}
          </p>
        </div>

        {/* Interactive Milestone Progression Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Milestone Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3">
              Engineering Progression Phases
            </div>
            {INTERNSHIP_EXPERIENCE.progression.map((item) => {
              const isSelected = activeStep === item.step;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(item.step)}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-start gap-3.5 border cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-950/20 text-white'
                      : 'bg-[#0a0e17] border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    0{item.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {item.description}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Milestone Deep Dive */}
          <div className="lg:col-span-7">
            <div className="bg-[#0c101a] border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-3">
                <span>Phase 0{currentMilestone.step} of 06</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Milestone Delivered
                </span>
              </div>

              <h4 className="text-2xl font-bold text-white font-display mb-4">
                {currentMilestone.title}
              </h4>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {currentMilestone.description}
              </p>

              {/* Key Deliverables */}
              <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Key Technical Deliverables</span>
                </div>
                <div className="space-y-2.5">
                  {currentMilestone.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <span className="text-cyan-400 font-mono mt-0.5">▹</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons between steps */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  disabled={activeStep === 1}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white disabled:opacity-40 disabled:hover:text-slate-400 transition-colors"
                >
                  Previous Phase
                </button>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(6, prev + 1))}
                  disabled={activeStep === 6}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 disabled:opacity-40 rounded-lg transition-colors"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
