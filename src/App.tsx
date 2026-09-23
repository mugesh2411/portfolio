/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PaletteProvider } from './context/PaletteContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PalettePickerModal } from './components/PalettePickerModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <PaletteProvider>
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-200">
        {/* Navigation */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Main Content */}
        <main className="flex-1">
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <ResumeSection onOpenResume={() => setResumeOpen(true)} />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Theme Palette Selector Modal */}
        <PalettePickerModal />

        {/* Interactive Full ATS Resume Modal */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />
      </div>
    </PaletteProvider>
  );
}
