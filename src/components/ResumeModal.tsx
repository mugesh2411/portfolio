import React, { useRef } from 'react';
import { X, Download, Printer, Check, Copy, FileText, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILL_CATEGORIES, PROJECTS_DATA, INTERNSHIP_EXPERIENCE } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumePlainText = `
============================================================
MUGESH S - CURRICULUM VITAE
AI & Data Science Student | Python Developer | AI Enthusiast
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.githubUrl}
LinkedIn: ${PERSONAL_INFO.linkedinUrl}
============================================================

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.about}

EDUCATION:
- M.Sc. Artificial Intelligence & Data Science | Karunya University (2025 - Present) | CGPA: 8.09
- B.Sc. | Guru Nanak College of Arts & Sciences (2022 - 2025) | CGPA: 7.5
- Higher Secondary | A.K.T Academy Matric Hr. Sec. School (2021 - 2022) | Percentage: 70%

TECHNICAL SKILLS:
- Programming: Python, SQL
- Web & Software: Django, REST API Development, React, TypeScript, HTML, CSS, Object-Oriented Programming
- AI & Machine Learning: Machine Learning, TensorFlow, OpenCV, Natural Language Processing (NLP), Computer Vision, Deep Learning
- Databases: PostgreSQL, SQLite, SQL, MongoDB
- Data & Visualization: Tableau, Microsoft Excel, Data Analysis
- Tools: Git, GitHub
- Software Engineering: SDLC, Debugging, Testing, Secure Coding, Authentication, Authorization

EXPERIENCE / INTERNSHIP:
Web/App Development Intern
Project: Keyword-Based Web Data Scraper and Insight Generator
Technologies: React.js, Django API, Python, PostgreSQL
- Built modular React UI for keyword search and reports dashboard
- Developed Django REST APIs handling asynchronous search pipelines
- Implemented Python scraping routines and batch content extraction
- Generated automated summary insights and keyword trend metrics

KEY PROJECTS:
1. Keyword-Based Web Data Scraper & Insight Generator (Django, React, Python, PostgreSQL)
2. Real-Time Emotion Detection & FER System (OpenCV, Python, TensorFlow)
3. Weather Prediction & Decision Support Application (TensorFlow, Python, Weather APIs)
4. IoT Smart Parking System (Arduino UNO, IR & Ultrasonic Sensors, Servos)
5. OCR Handwritten Text Recognition (CNN/CRNN, Deep Learning, OpenCV)
6. Motion Tracking using Kalman Filter (Python, OpenCV, Kalman Filter)
7. AI Chatbot Application (Python, NLP)
8. Hostel Booking & Management Web Application (Django/Python, MySQL, HTML/CSS/JS)
9. Home Automation System (IoT, Microcontroller, Sensors, Relays)

LANGUAGES:
- Tamil: Native Proficiency
- English: Professional Working Proficiency

STRENGTHS:
Problem Solving, Critical Thinking, Analytical Thinking, Logical Thinking, Communication, Teamwork, Collaboration, Quick Learning, Adaptability, Time Management
============================================================
    `.trim();

    navigator.clipboard.writeText(resumePlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadTxt = () => {
    const resumeContent = `MUGESH S
AI & Data Science Student | Python Developer | AI Enthusiast
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.githubUrl}
LinkedIn: ${PERSONAL_INFO.linkedinUrl}

SUMMARY:
${PERSONAL_INFO.about}

EDUCATION:
* M.Sc. Artificial Intelligence & Data Science - Karunya University (2025 - Present) | CGPA: 8.09
* B.Sc. - Guru Nanak College of Arts & Sciences (2022 - 2025) | CGPA: 7.5
* Higher Secondary - A.K.T Academy Matric Hr. Sec. School (2021 - 2022) | Percentage: 70%

TECHNICAL SKILLS:
* Programming: Python, SQL
* Web & Software: Django, REST APIs, React, TypeScript, HTML, CSS, OOP
* AI / ML / CV: Machine Learning, TensorFlow, OpenCV, NLP, Computer Vision, Deep Learning
* Databases: PostgreSQL, SQLite, SQL, MongoDB
* Data & Visualization: Tableau, Microsoft Excel, Data Analysis
* Tools: Git, GitHub
* Software Engineering: SDLC, Debugging, Testing, Secure Coding, Authentication, Authorization

EXPERIENCE:
Web/App Development Intern - Keyword-Based Web Data Scraper & Insight Generator
Stack: React.js, Django REST API, Python

LANGUAGES:
Tamil (Native), English (Professional)
`;
    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Mugesh_S_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-[#0c101a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#07090e] shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-white font-display">
              Curriculum Vitae — Mugesh S
            </span>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              · ATS Compatible
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Print Resume or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Download TXT"
            >
              <Download className="w-3.5 h-3.5 text-indigo-400" />
              <span>Download</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Copy All Text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable ATS Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#07090e] text-slate-200">
          <div 
            ref={printRef}
            className="max-w-3xl mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-xl font-sans text-sm space-y-6"
          >
            {/* Resume Header */}
            <div className="border-b-2 border-slate-900 pb-4 text-center">
              <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-950 font-display">
                {PERSONAL_INFO.name}
              </h1>
              <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                {PERSONAL_INFO.role}
              </div>
              <div className="mt-2 text-xs text-slate-600 flex flex-wrap items-center justify-center gap-2">
                <span>{PERSONAL_INFO.location}</span>
                <span>•</span>
                <span className="font-mono">{PERSONAL_INFO.phone}</span>
                <span>•</span>
                <span className="font-mono">{PERSONAL_INFO.email}</span>
                <span>•</span>
                <a 
                  href={PERSONAL_INFO.githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-mono"
                >
                  GitHub
                </a>
                <span>•</span>
                <a 
                  href={PERSONAL_INFO.linkedinUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-mono"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
                Professional Profile
              </h2>
              <p className="text-xs leading-relaxed text-slate-700">
                {PERSONAL_INFO.about}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
                Education
              </h2>
              <div className="space-y-3">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.degree} className="flex justify-between items-start text-xs">
                    <div>
                      <div className="font-bold text-slate-900">{edu.degree}</div>
                      <div className="text-slate-700">{edu.institution}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-slate-900">
                        {edu.scoreLabel}: {edu.score}
                      </div>
                      <div className="text-slate-600">{edu.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-800">
                <div>
                  <strong className="text-slate-950">Programming:</strong> Python, SQL
                </div>
                <div>
                  <strong className="text-slate-950">Web & Software:</strong> Django, REST API Development, HTML, CSS, React, TypeScript, Object-Oriented Programming
                </div>
                <div>
                  <strong className="text-slate-950">AI / ML / CV:</strong> Machine Learning, TensorFlow, OpenCV, Natural Language Processing (NLP), Computer Vision, Deep Learning
                </div>
                <div>
                  <strong className="text-slate-950">Databases:</strong> SQL, SQLite, PostgreSQL, MongoDB
                </div>
                <div>
                  <strong className="text-slate-950">Data & Visualization:</strong> Tableau, Microsoft Excel, Data Analysis
                </div>
                <div>
                  <strong className="text-slate-950">Tools:</strong> Git, GitHub
                </div>
                <div>
                  <strong className="text-slate-950">Software Engineering:</strong> SDLC, Debugging, Testing, Secure Coding, Authentication, Authorization
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
                Internship / Practical Experience
              </h2>
              <div className="text-xs">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{INTERNSHIP_EXPERIENCE.role}</span>
                  <span>React.js, Django API, Python</span>
                </div>
                <div className="font-semibold text-slate-800 italic mt-0.5">
                  Project: {INTERNSHIP_EXPERIENCE.focus}
                </div>
                <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700">
                  <li>Developed full-stack web application linking React client to Django REST framework backend.</li>
                  <li>Implemented Python data scraping routines to harvest keywords and process batch web content.</li>
                  <li>Automated keyword extraction frequency matrices, summary generation, and interactive dashboard reports.</li>
                  <li>Configured user session persistence, historical search logs, and validation safeguards.</li>
                </ul>
              </div>
            </div>

            {/* Key Technical Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
                Key Technical Projects
              </h2>
              <div className="space-y-2 text-xs">
                <div>
                  <strong className="text-slate-950">Keyword-Based Web Data Scraper & Insight Generator:</strong> Python, Django, REST APIs, React, TypeScript, PostgreSQL. Automated extraction & analytics.
                </div>
                <div>
                  <strong className="text-slate-950">Real-Time Emotion Detection & FER System:</strong> Python, OpenCV, TensorFlow, Computer Vision. Live camera feed face detection and emotion classification.
                </div>
                <div>
                  <strong className="text-slate-950">Weather Prediction & Decision Support Application:</strong> Python, TensorFlow, Machine Learning. Precipitation probability alarms & heatwave warnings.
                </div>
                <div>
                  <strong className="text-slate-950">IoT Smart Parking System:</strong> Arduino UNO, IR sensors, Ultrasonic distance sensor, 3 servo motors. Automated bay occupancy tracking.
                </div>
                <div>
                  <strong className="text-slate-950">OCR Handwritten Text Recognition:</strong> CNN / CRNN, Python, Deep Learning, Computer Vision. Deep sequence decoding from handwritten images.
                </div>
                <div>
                  <strong className="text-slate-950">Motion Tracking using Kalman Filter:</strong> Python, OpenCV, Kalman Filter. Noise-resilient trajectory prediction.
                </div>
                <div>
                  <strong className="text-slate-950">AI Chatbot Application:</strong> Python, NLP. Query classification, intent recognition, automated response generation.
                </div>
                <div>
                  <strong className="text-slate-950">Hostel Booking / Management Web Application:</strong> HTML, CSS, JavaScript, Python/Django, MySQL/phpMyAdmin.
                </div>
              </div>
            </div>

            {/* Languages & Strengths */}
            <div className="grid grid-cols-2 gap-4 text-xs pt-2">
              <div>
                <h3 className="font-bold uppercase text-slate-950 mb-1 font-mono">Languages</h3>
                <p className="text-slate-700">Tamil (Native), English (Professional Working)</p>
              </div>
              <div>
                <h3 className="font-bold uppercase text-slate-950 mb-1 font-mono">Strengths</h3>
                <p className="text-slate-700">Problem Solving, Critical Thinking, Teamwork, Quick Learning, Time Management</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
