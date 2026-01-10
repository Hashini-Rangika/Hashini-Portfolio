import { createContext, useContext, useEffect, useState } from "react";

export type ThemeName = "cyan" | "emerald" | "rose" | "amber" | "violet";

export const themes = {
  cyan: {
    primary: "from-cyan-400 to-blue-500",
    glow1: "bg-cyan-500/20",
    glow2: "bg-blue-500/20",
    text: "text-cyan-400",
    border: "border-cyan-400",
  },
  emerald: {
    primary: "from-emerald-400 to-teal-500",
    glow1: "bg-emerald-500/20",
    glow2: "bg-teal-500/20",
    text: "text-emerald-400",
    border: "border-emerald-400",
  },
  rose: {
    primary: "from-rose-400 to-pink-500",
    glow1: "bg-rose-500/20",
    glow2: "bg-pink-500/20",
    text: "text-rose-400",
    border: "border-rose-400",
  },
  amber: {
    primary: "from-amber-400 to-orange-500",
    glow1: "bg-amber-500/20",
    glow2: "bg-orange-500/20",
    text: "text-amber-400",
    border: "border-amber-400",
  },
  violet: {
    primary: "from-violet-400 to-purple-500",
    glow1: "bg-violet-500/20",
    glow2: "bg-purple-500/20",
    text: "text-violet-400",
    border: "border-violet-400",
  },
};

type ThemeContextType = {
  isDark: boolean;
  toggleDark: () => void;
  themeName: ThemeName;
  setThemeName: (t: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  const [themeName, setThemeName] = useState<ThemeName>("cyan");

  // 🔥 APPLY DARK MODE TO ENTIRE APP
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleDark: () => setIsDark((p) => !p),
        themeName,
        setThemeName,
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
