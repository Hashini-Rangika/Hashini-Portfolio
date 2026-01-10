import { createContext, useContext, useEffect, useState } from "react";

export type ThemeName = "cyan" | "emerald" | "rose" | "amber" | "violet";

type Theme = {
  primary: string;
  secondary?: string;
  glow1: string;
  glow2: string;
  text: string;
  textSecondary?: string;
  border: string;
  borderSecondary?: string;
  shadow?: string;
};

export const themes: Record<ThemeName, Theme> = {
  cyan: {
    primary: "from-cyan-400 to-blue-500",
    secondary: "from-blue-500 to-indigo-500",
    glow1: "bg-cyan-500/20",
    glow2: "bg-blue-500/20",
    text: "text-cyan-400",
    textSecondary: "text-blue-400",
    border: "border-cyan-400",
    borderSecondary: "border-blue-500",
    shadow: "shadow-cyan-500/50",
  },
  emerald: {
    primary: "from-emerald-400 to-teal-500",
    secondary: "from-teal-500 to-green-500",
    glow1: "bg-emerald-500/20",
    glow2: "bg-teal-500/20",
    text: "text-emerald-400",
    textSecondary: "text-teal-400",
    border: "border-emerald-400",
    borderSecondary: "border-teal-500",
    shadow: "shadow-emerald-500/50",
  },
  rose: {
    primary: "from-rose-400 to-pink-500",
    secondary: "from-pink-500 to-fuchsia-500",
    glow1: "bg-rose-500/20",
    glow2: "bg-pink-500/20",
    text: "text-rose-400",
    textSecondary: "text-pink-400",
    border: "border-rose-400",
    borderSecondary: "border-pink-500",
    shadow: "shadow-rose-500/50",
  },
  amber: {
    primary: "from-amber-400 to-orange-500",
    secondary: "from-orange-500 to-red-500",
    glow1: "bg-amber-500/20",
    glow2: "bg-orange-500/20",
    text: "text-amber-400",
    textSecondary: "text-orange-400",
    border: "border-amber-400",
    borderSecondary: "border-orange-500",
    shadow: "shadow-amber-500/50",
  },
  violet: {
    primary: "from-violet-400 to-purple-500",
    secondary: "from-purple-500 to-indigo-500",
    glow1: "bg-violet-500/20",
    glow2: "bg-purple-500/20",
    text: "text-violet-400",
    textSecondary: "text-purple-400",
    border: "border-violet-400",
    borderSecondary: "border-indigo-500",
    shadow: "shadow-violet-500/50",
  },
};

type ThemeContextType = {
  isDark: boolean;
  toggleDark: () => void;
  themeName: ThemeName;
  setThemeName: (t: ThemeName) => void;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  const [themeName, setThemeName] = useState<ThemeName>("cyan");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const theme = themes[themeName];

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleDark: () => setIsDark((p) => !p),
        themeName,
        setThemeName,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
