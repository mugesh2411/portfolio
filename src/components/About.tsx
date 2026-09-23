import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CheckCircle2, Globe, Cpu, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono mb-2">
            Profile & Background
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Building Intelligent, Practical Software for the Real World
          </h2>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="text-slate-200 font-normal">
              {PERSONAL_INFO.about}
            </p>

            <p>
              My engineering approach prioritizes bridging theoretical machine learning models with robust, accessible software architectures. Rather than treating AI as an isolated concept, I focus on end-to-end integration: developing structured APIs, engineering responsive client interfaces, and implementing high-throughput data processing workflows.
            </p>

            {/* Core Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0c101a] border border-slate-800">
                <div className="flex items-center gap-2.5 text-white font-semibold mb-1.5">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>AI & Machine Intelligence</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real-time computer vision, emotion recognition, deep neural networks, and NLP-driven intent analysis.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0c101a] border border-slate-800">
                <div className="flex items-center gap-2.5 text-white font-semibold mb-1.5">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Full-Stack Engineering</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Python backend systems, Django REST frameworks, relational SQL databases, and modern React clients.
                </p>
              </div>
            </div>

            {/* Languages Section */}
            <div className="pt-6 border-t border-slate-800">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3">
                Language Proficiencies
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PERSONAL_INFO.languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800/80"
                  >
                    <span className="text-sm font-medium text-white">{lang.language}</span>
                    <span className="text-xs text-cyan-400 font-mono">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Professional Strengths & Engineering Attributes */}
          <div className="lg:col-span-5">
            <div className="bg-[#0c101a] border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-white font-display text-lg font-semibold mb-2">
                <Award className="w-5 h-5 text-indigo-400" />
                <span>Professional Strengths</span>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Key cognitive and collaborative capabilities applied across engineering projects, academic research, and team problem solving.
              </p>

              {/* Strengths List - Clean unboxed text layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PERSONAL_INFO.strengths.map((strength) => (
                  <div
                    key={strength}
                    className="flex items-center gap-2 text-sm text-slate-300 py-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>

              {/* Recruiter Placement Summary Card */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Current Status</span>
                  <span className="text-emerald-400 font-mono">Available for Placements</span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  Seeking roles as an <strong className="text-white">AI Engineer</strong>, <strong className="text-white">Software Engineer</strong>, or <strong className="text-white">AI & Data Science Developer</strong>.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
