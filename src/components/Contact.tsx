import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Check, Copy, Github, Linkedin, ExternalLink, Sparkles, GraduationCap } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-500/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Let's Connect & Build Together
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg text-balance">
            I am actively available for placement drives, AI engineering opportunities, software development roles, and technical discussions.
          </p>
        </div>

        {/* Contact Hub Container */}
        <div className="max-w-4xl mx-auto">
          
          {/* Main Card */}
          <div className="bg-[#0c101a] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            
            {/* Top Identity Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-8 border-b border-slate-800 text-center sm:text-left">
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-cyan-400 mb-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Karunya University · M.Sc. AI & Data Science</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  AI Engineer / Software Engineer / AI & Data Science Developer
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-800/60 px-4 py-2 rounded-xl text-xs font-medium text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Placements & Full-time Roles</span>
              </div>
            </div>

            {/* Direct Contact Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
              
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                      title="Copy email address"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <div className="text-xs text-slate-400 font-medium">Email Address</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-slate-100 hover:text-cyan-400 break-all block mt-1 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Send Direct Email</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <button
                      onClick={handleCopyPhone}
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                      title="Copy phone number"
                    >
                      {copiedPhone ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <div className="text-xs text-slate-400 font-medium">Phone Number</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-slate-100 hover:text-cyan-400 font-mono block mt-1 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Call Directly</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-purple-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-sm font-semibold text-slate-100 mt-1">
                    {PERSONAL_INFO.location}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <span className="text-xs text-slate-400 font-mono">
                    Open to Relocation
                  </span>
                </div>
              </div>

            </div>

            {/* Social & Professional Networks */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Professional Profiles & Networks
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
                >
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </div>

          {/* Quick Notice Banner */}
          <div className="mt-6 p-4 rounded-2xl bg-blue-950/20 border border-blue-900/30 flex items-center justify-between text-xs text-slate-300">
            <span className="text-slate-400">
              Prefer scheduling an interview directly? Send an email to <strong className="text-white">{PERSONAL_INFO.email}</strong> or call <strong className="text-white">{PERSONAL_INFO.phone}</strong>.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
