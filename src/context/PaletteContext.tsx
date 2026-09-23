import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface PalettePreset {
  id: string;
  name: string;
  description: string;
  primary: string;
  primaryLight: string;
  primaryLightMode: string;
  secondary: string;
  secondaryDark: string;
  bgGradient: string;
  glowColor: string;
  borderColor: string;
  chipColors: [string, string, string];
}

export const PALETTE_PRESETS: PalettePreset[] = [
  {
    id: 'cyan',
    name: 'Electric Cyan',
    description: 'Deep tech, AI & data science signature',
    primary: '#06b6d4',
    primaryLight: '#22d3ee',
    primaryLightMode: '#0284c7',
    secondary: '#3b82f6',
    secondaryDark: '#1d4ed8',
    bgGradient: 'linear-gradient(135deg, #2563eb, #4f46e5, #06b6d4)',
    glowColor: 'rgba(6, 182, 212, 0.35)',
    borderColor: 'rgba(6, 182, 212, 0.4)',
    chipColors: ['#06b6d4', '#3b82f6', '#4f46e5'],
  },
  {
    id: 'emerald',
    name: 'Emerald Matrix',
    description: 'Cyber green, algorithmic & terminal vibe',
    primary: '#10b981',
    primaryLight: '#34d399',
    primaryLightMode: '#059669',
    secondary: '#059669',
    secondaryDark: '#047857',
    bgGradient: 'linear-gradient(135deg, #059669, #0d9488, #10b981)',
    glowColor: 'rgba(168, 85, 247, 0.35)',
    borderColor: 'rgba(16, 185, 129, 0.4)',
    chipColors: ['#10b981', '#14b8a6', '#059669'],
  },
  {
    id: 'violet',
    name: 'Electric Violet',
    description: 'Cosmic purple, neural networks & creative AI',
    primary: '#a855f7',
    primaryLight: '#c084fc',
    primaryLightMode: '#7c3aed',
    secondary: '#6366f1',
    secondaryDark: '#4338ca',
    bgGradient: 'linear-gradient(135deg, #6366f1, #8b5cf6, #d946ef)',
    glowColor: 'rgba(168, 85, 247, 0.35)',
    borderColor: 'rgba(168, 85, 247, 0.4)',
    chipColors: ['#a855f7', '#6366f1', '#d946ef'],
  },
  {
    id: 'crimson',
    name: 'Sunset Crimson',
    description: 'High-impact ruby rose & radiant flame',
    primary: '#f43f5e',
    primaryLight: '#fb7185',
    primaryLightMode: '#e11d48',
    secondary: '#ea580c',
    secondaryDark: '#c2410c',
    bgGradient: 'linear-gradient(135deg, #e11d48, #ea580c, #f59e0b)',
    glowColor: 'rgba(244, 63, 94, 0.35)',
    borderColor: 'rgba(244, 63, 94, 0.4)',
    chipColors: ['#f43f5e', '#ea580c', '#f59e0b'],
  },
  {
    id: 'amber',
    name: 'Solar Amber',
    description: 'Executive warm gold & prestige clarity',
    primary: '#f59e0b',
    primaryLight: '#fbbf24',
    primaryLightMode: '#d97706',
    secondary: '#d97706',
    secondaryDark: '#b45309',
    bgGradient: 'linear-gradient(135deg, #d97706, #b45309, #eab308)',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    borderColor: 'rgba(245, 158, 11, 0.4)',
    chipColors: ['#f59e0b', '#fbbf24', '#d97706'],
  },
  {
    id: 'azure',
    name: 'Nordic Azure',
    description: 'Deep royal blue, crisp enterprise software',
    primary: '#38bdf8',
    primaryLight: '#60a5fa',
    primaryLightMode: '#2563eb',
    secondary: '#2563eb',
    secondaryDark: '#1e40af',
    bgGradient: 'linear-gradient(135deg, #1d4ed8, #2563eb, #38bdf8)',
    glowColor: 'rgba(56, 189, 248, 0.35)',
    borderColor: 'rgba(56, 189, 248, 0.4)',
    chipColors: ['#38bdf8', '#2563eb', '#1d4ed8'],
  }
];

interface PaletteContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  activePalette: PalettePreset;
  customPrimary: string;
  isCustom: boolean;
  setPalette: (id: string) => void;
  setCustomColor: (colorHex: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const PaletteContext = createContext<PaletteContextType | undefined>(undefined);

export const PaletteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Set light mode as initial preference per user's prompt "i need light color"
  const [mode, setModeState] = useState<ThemeMode>(() => {
    return (localStorage.getItem('mugesh_theme_mode') as ThemeMode) || 'light';
  });

  const [paletteId, setPaletteId] = useState<string>(() => {
    return localStorage.getItem('mugesh_theme_palette') || 'cyan';
  });

  const [customPrimary, setCustomPrimaryState] = useState<string>(() => {
    return localStorage.getItem('mugesh_custom_color') || '#0284c7';
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    return localStorage.getItem('mugesh_theme_palette') === 'custom';
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const activePreset = PALETTE_PRESETS.find(p => p.id === paletteId) || PALETTE_PRESETS[0];

  const applyTheme = (currentMode: ThemeMode) => {
    const root = document.documentElement;
    root.setAttribute('data-mode', currentMode);
    root.setAttribute('data-theme', isCustom ? 'custom' : activePreset.id);
    root.classList.toggle('dark', currentMode === 'dark');
    root.classList.toggle('light', currentMode === 'light');

    if (isCustom) {
      const glow = `${customPrimary}44`;
      const border = `${customPrimary}55`;
      const gradient = `linear-gradient(135deg, ${customPrimary}, #3b82f6)`;
      root.style.setProperty('--theme-primary', customPrimary);
      root.style.setProperty('--theme-primary-light', customPrimary);
      root.style.setProperty('--theme-secondary', '#3b82f6');
      root.style.setProperty('--theme-gradient', gradient);
      root.style.setProperty('--theme-glow', glow);
      root.style.setProperty('--theme-border', border);
    } else {
      const primaryDisplay = currentMode === 'light' ? activePreset.primaryLightMode : activePreset.primary;
      const primaryLightDisplay = currentMode === 'light' ? activePreset.primaryLightMode : activePreset.primaryLight;
      root.style.setProperty('--theme-primary', primaryDisplay);
      root.style.setProperty('--theme-primary-light', primaryLightDisplay);
      root.style.setProperty('--theme-secondary', activePreset.secondary);
      root.style.setProperty('--theme-gradient', activePreset.bgGradient);
      root.style.setProperty('--theme-glow', activePreset.glowColor);
      root.style.setProperty('--theme-border', activePreset.borderColor);
    }
  };

  useEffect(() => {
    applyTheme(mode);
  }, [mode, paletteId, customPrimary, isCustom, activePreset]);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem('mugesh_theme_mode', newMode);
  };

  const toggleMode = () => {
    const nextMode = mode === 'light' ? 'dark' : 'light';
    setMode(nextMode);
  };

  const setPalette = (id: string) => {
    setPaletteId(id);
    setIsCustom(false);
    localStorage.setItem('mugesh_theme_palette', id);
  };

  const setCustomColor = (colorHex: string) => {
    setCustomPrimaryState(colorHex);
    setIsCustom(true);
    setPaletteId('custom');
    localStorage.setItem('mugesh_theme_palette', 'custom');
    localStorage.setItem('mugesh_custom_color', colorHex);
  };

  const currentPalette: PalettePreset = isCustom
    ? {
        id: 'custom',
        name: 'Custom Brand',
        description: `Custom accent tone (${customPrimary})`,
        primary: customPrimary,
        primaryLight: customPrimary,
        primaryLightMode: customPrimary,
        secondary: customPrimary,
        secondaryDark: customPrimary,
        bgGradient: `linear-gradient(135deg, ${customPrimary}, #3b82f6)`,
        glowColor: `${customPrimary}44`,
        borderColor: `${customPrimary}55`,
        chipColors: [customPrimary, '#3b82f6', '#ffffff'],
      }
    : activePreset;

  return (
    <PaletteContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        activePalette: currentPalette,
        customPrimary,
        isCustom,
        setPalette,
        setCustomColor,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </PaletteContext.Provider>
  );
};

export const usePalette = () => {
  const context = useContext(PaletteContext);
  if (!context) {
    throw new Error('usePalette must be used within a PaletteProvider');
  }
  return context;
};
