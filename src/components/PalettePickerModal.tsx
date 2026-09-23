import React, { useState } from 'react';
import { usePalette, PALETTE_PRESETS } from '../context/PaletteContext';
import { X, Check, Sparkles, Sliders, RefreshCw, Palette, Sun, Moon } from 'lucide-react';

export const PalettePickerModal: React.FC = () => {
  const {
    mode,
    setMode,
    activePalette,
    customPrimary,
    isCustom,
    setPalette,
    setCustomColor,
    isModalOpen,
    setIsModalOpen,
  } = usePalette();

  const [hexInput, setHexInput] = useState(customPrimary);

  if (!isModalOpen) {
    return null;
  }

  const handleHexSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^#[0-9A-F]{6}$/i.test(hexInput)) {
      setCustomColor(hexInput);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-xl bg-[#0c101a] border border-slate-700/90 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#07090e]">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10"
              style={{ background: activePalette.bgGradient }}
            >
              <Palette className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">Theme & Color Palette</h3>
              <p className="text-xs text-slate-400">Choose between light or dark mode and your preferred accent</p>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close palette selector"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Section 1: Appearance Mode (Light vs Dark) */}
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Background Appearance
            </div>
            <div className="grid grid-cols-2 gap-3">
              {/* Light Mode Option */}
              <button
                type="button"
                onClick={() => setMode('light')}
                className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  mode === 'light'
                    ? 'bg-amber-500/10 border-amber-500/80 shadow-md'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  mode === 'light' ? 'bg-amber-500 text-white' : 'bg-slate-800 text-slate-300'
                }`}>
                  <Sun className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">Light Mode</span>
                    {mode === 'light' && <Check className="w-4 h-4 text-amber-500" />}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">Clean, bright & crisp</p>
                </div>
              </button>

              {/* Dark Mode Option */}
              <button
                type="button"
                onClick={() => setMode('dark')}
                className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  mode === 'dark'
                    ? 'bg-blue-500/10 border-blue-500/80 shadow-md'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  mode === 'dark' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
                }`}>
                  <Moon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">Dark Mode</span>
                    {mode === 'dark' && <Check className="w-4 h-4 text-blue-400" />}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">Deep slate & obsidian</p>
                </div>
              </button>
            </div>
          </div>
          {/* Preset Palettes Grid */}
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Curated Designer Palettes
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PALETTE_PRESETS.map((preset) => {
                const isSelected = !isCustom && activePalette.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => setPalette(preset.id)}
                    className={`flex items-center gap-3.5 p-3 rounded-xl border text-left transition-all cursor-pointer group ${
                      isSelected
                        ? 'bg-slate-800/80 border-cyan-400/80 shadow-lg'
                        : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                    }`}
                  >
                    {/* Swatch Circle */}
                    <div
                      className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center shadow-md relative overflow-hidden"
                      style={{ background: preset.bgGradient }}
                    >
                      {isSelected && (
                        <Check className="w-5 h-5 text-white drop-shadow-md" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white truncate">
                          {preset.name}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 rounded bg-white/10 text-white">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {preset.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Color Picker */}
          <div className="pt-4 border-t border-slate-800/80">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-slate-400" />
                <span>Custom Brand Accent</span>
              </div>
              {isCustom && (
                <span className="text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Custom Applied
                </span>
              )}
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row items-center gap-4">
              {/* Native color picker box */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="color"
                  value={customPrimary}
                  onChange={(e) => {
                    setCustomColor(e.target.value);
                    setHexInput(e.target.value);
                  }}
                  className="w-11 h-11 rounded-xl cursor-pointer border border-slate-700 bg-transparent p-1"
                />
                <div>
                  <div className="text-xs font-medium text-white">Color Picker</div>
                  <div className="text-[11px] text-slate-400">Click to choose any shade</div>
                </div>
              </label>

              {/* Hex Input Form */}
              <form onSubmit={handleHexSubmit} className="flex-1 flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="text"
                  value={hexInput}
                  onChange={(e) => setHexInput(e.target.value)}
                  placeholder="#06b6d4"
                  maxLength={7}
                  className="w-28 px-3 py-1.5 text-xs font-mono text-white bg-black/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>

              {/* Reset to Default */}
              <button
                onClick={() => {
                  setPalette('cyan');
                  setHexInput('#06b6d4');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-transparent hover:bg-slate-800/80 rounded-lg transition-colors cursor-pointer"
                title="Reset to default Electric Cyan"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Live Preview Demonstration Banner */}
          <div className="p-4 rounded-xl border border-slate-800 bg-[#090d16] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ backgroundColor: activePalette.primary }}
              />
              <span className="text-xs text-slate-300 font-medium">
                Live Theme: <strong className="text-white">{activePalette.name}</strong>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {activePalette.chipColors.map((col, idx) => (
                <div
                  key={idx}
                  className="w-4 h-4 rounded-full border border-black/30"
                  style={{ backgroundColor: col }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#07090e] flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Selection is saved automatically
          </span>
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg shadow-sm transition-all cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
