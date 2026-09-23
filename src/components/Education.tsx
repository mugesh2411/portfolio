import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono mb-2">
            Academic Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Education & Qualifications
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Rigorous mathematical and computational foundations advancing through postgraduate specialization in Artificial Intelligence and Data Science.
          </p>
        </div>

        {/* Education Timeline & Cards */}
        <div className="space-y-6">
          {EDUCATION_DATA.map((item, idx) => (
            <div
              key={item.degree}
              className="bg-[#0c101a] border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 transition-all relative overflow-hidden"
            >
              {/* Highlight bar on the left */}
              <div
                className={`absolute top-0 left-0 bottom-0 w-1.5 ${
                  idx === 0
                    ? 'bg-gradient-to-b from-cyan-400 to-blue-600'
                    : idx === 1
                    ? 'bg-gradient-to-b from-indigo-500 to-purple-600'
                    : 'bg-slate-700'
                }`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left zone: Degree & Institution */}
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-2">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    {item.location && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {item.location}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white font-display">
                    {item.degree}
                  </h3>

                  <div className="text-base font-semibold text-slate-300 mt-1">
                    {item.institution}
                  </div>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-4 space-y-1.5">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                          <span className="text-cyan-400 font-mono mt-0.5">▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Right zone: Score badge / Academic Performance */}
                <div className="lg:col-span-4 flex lg:justify-end">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-left lg:text-right w-full sm:w-auto">
                    <div className="text-xs text-slate-400 font-medium">
                      Academic Score ({item.scoreLabel})
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white mt-0.5">
                      {item.score}
                    </div>
                    <div className="text-[11px] text-emerald-400 font-mono mt-1 flex items-center lg:justify-end gap-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>Verified Record</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
