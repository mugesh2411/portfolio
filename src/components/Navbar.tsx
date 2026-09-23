import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { usePalette } from '../context/PaletteContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { mode, toggleMode } = usePalette();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="text-lg sm:text-xl font-bold tracking-tight text-white font-display hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            MUGESH S
          </a>

          {/* Zone 2: 4-7 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors relative py-1 hover:text-white ${
                  activeSection === link.id
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-300'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions + theme mode toggle */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Light / Dark Mode Quick Toggle */}
            <button
              onClick={toggleMode}
              className="p-2 rounded-lg border transition-all active:scale-95 cursor-pointer bg-white hover:bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:text-slate-300 dark:hover:text-white dark:border-slate-700/80"
              title={mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle Theme Mode"
            >
              {mode === 'light' ? (
                <Moon className="w-4 h-4 text-amber-500" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            <button
              onClick={onOpenResume}
              className="btn-nav-resume"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-600" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-lg shadow-md shadow-cyan-900/20 hover:shadow-cyan-500/25 transition-all whitespace-nowrap active:scale-95"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={toggleMode}
              className="p-1.5 rounded-md border cursor-pointer bg-white hover:bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800/80 dark:hover:text-white dark:text-slate-300 dark:border-slate-700"
              title="Toggle Light / Dark Mode"
              aria-label="Toggle Mode"
            >
              {mode === 'light' ? (
                <Moon className="w-4 h-4 text-amber-500" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>
            <button
              onClick={onOpenResume}
              className="btn-nav-resume sm:hidden px-2.5 py-1.5"
              title="View Resume"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-600" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (15% height rule compliant, clean compact stack) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0d14]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-5 shadow-2xl transition-all">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'bg-slate-800 text-cyan-400 font-medium'
                    : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-slate-200 bg-slate-800 border border-slate-700 rounded-lg cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg text-center cursor-pointer"
            >
              <span>Let's Connect</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
