import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, FileText, Send, Github, Linkedin, Mail, Check, Sparkles, MapPin, GraduationCap } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showSocialModal, setShowSocialModal] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [customPhoto, setCustomPhoto] = useState<string>(() => {
    return localStorage.getItem('mugesh_portfolio_avatar') || PERSONAL_INFO.avatarImage;
  });

  useEffect(() => {
    const saved = localStorage.getItem('mugesh_portfolio_avatar');
    if (saved) {
      setCustomPhoto(saved);
      setImgError(false);
    } else {
      setCustomPhoto(PERSONAL_INFO.avatarImage);
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPhoto(result);
          setImgError(false);
          try {
            localStorage.setItem('mugesh_portfolio_avatar', result);
          } catch {}
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-purple-600/10 to-cyan-500/15 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-600/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Academic kicker - unboxed metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium mb-4">
              <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-300 font-semibold">
                <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                M.Sc. AI & Data Science Candidate
              </span>
              <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                Tamil Nadu, India
              </span>
              <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono font-medium">Available for Roles</span>
            </div>

            {/* Display Name */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white font-display uppercase leading-[1.08] text-balance">
              {PERSONAL_INFO.name}
            </h1>

            {/* Sub-headline */}
            <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold tracking-tight hero-role-headline text-balance">
              {PERSONAL_INFO.role}
            </h2>

            {/* Short introduction paragraph */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-balance">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 transition-all active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="btn-hero-resume"
              >
                <FileText className="w-4 h-4 text-cyan-600" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="btn-hero-contact"
              >
                <Send className="w-4 h-4 text-indigo-600" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Contact Bar */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold font-mono">
                Connect
              </span>

              {/* GitHub */}
              <div className="relative group">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                  aria-label="GitHub profile"
                >
                  <Github className="w-4 h-4 text-slate-300 group-hover:text-cyan-400" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* LinkedIn */}
              <div className="relative group">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4 text-slate-300 group-hover:text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Email direct copy */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Mail className="w-4 h-4 text-slate-300 group-hover:text-cyan-400" />
                )}
                <span>{copiedEmail ? 'Email Copied!' : PERSONAL_INFO.email}</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative gradient frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative bg-[#0c101a] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                  accept="image/*"
                  className="hidden"
                />

                {/* Visual Avatar - Display photo cleanly without change button */}
                <div 
                  className="relative aspect-square w-full overflow-hidden bg-[#090d16] flex flex-col items-center justify-center cursor-pointer"
                  title="Double click to update photo if needed"
                  onDoubleClick={() => fileInputRef.current?.click()}
                >
                  <img
                    src={customPhoto || PERSONAL_INFO.avatarImage}
                    alt="Mugesh S - AI & Data Science Candidate"
                    referrerPolicy="no-referrer"
                    onError={() => {
                      if (customPhoto !== PERSONAL_INFO.avatarImage) {
                        setCustomPhoto(PERSONAL_INFO.avatarImage);
                        setImgError(false);
                      } else {
                        setImgError(true);
                      }
                    }}
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Status beacon */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#07090e]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60 text-xs text-slate-200 shadow-md pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Karunya AI & DS</span>
                  </div>
                </div>

                {/* Candidate Summary Panel */}
                <div className="p-6">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                    <div>
                      <div className="text-xs text-slate-400">Current Program</div>
                      <div className="text-sm font-semibold text-white">M.Sc. Artificial Intelligence</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400">Current CGPA</div>
                      <div className="text-base font-bold text-cyan-400 font-mono tabular-nums">8.09</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-1 flex items-center justify-between text-xs text-slate-400">
                    <span>Karunya University</span>
                    <span>2025 – Present</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Social placeholder modal */}
      {showSocialModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0f1422] border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-semibold text-white font-display">
              {showSocialModal === 'github' ? 'GitHub Repository Link' : 'LinkedIn Profile Link'}
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              {showSocialModal === 'github'
                ? 'Official GitHub repositories and open source projects by Mugesh S are maintained under student version control.'
                : 'Connect with Mugesh S on LinkedIn for graduate placement opportunities, software roles, and AI engineering inquiries.'}
            </p>
            <div className="mt-4 p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-400 font-mono">
              Direct Contact: {PERSONAL_INFO.email} · {PERSONAL_INFO.phone}
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowSocialModal(null)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg"
              >
                Close
              </button>
              <a
                href={showSocialModal === 'github' ? PERSONAL_INFO.githubUrl : PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg"
              >
                Open {showSocialModal === 'github' ? 'GitHub' : 'LinkedIn'}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
