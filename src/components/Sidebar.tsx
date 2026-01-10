import { NavLink } from "react-router-dom";
import { Sun, Moon, Palette } from "lucide-react";
import { useTheme, themes } from "../context/ThemeContext";

const navItems = [
  { label: "Home", path: "/", icon: "🏠" },
  { label: "About", path: "/about", icon: "👤" },
  { label: "Skills", path: "/skills", icon: "⚡" },
  { label: "Projects", path: "/projects", icon: "💼" },
  { label: "Contact", path: "/contact", icon: "📧" },
];

const Sidebar = () => {
  const { isDark, toggleDark, themeName, setThemeName } = useTheme();
  const theme = themes[themeName];

  return (
    <aside
      className={`fixed left-0 top-0 h-screen w-20 backdrop-blur-xl border-r z-50
      ${
        isDark
          ? "bg-slate-900/80 border-white/10"
          : "bg-white/80 border-slate-200"
      }`}
    >
      <div
        className={`mt-6 mx-auto w-12 h-12 rounded-xl bg-gradient-to-br ${theme.primary}
        flex items-center justify-center text-white font-bold`}
      >
        HW
      </div>

      <nav className='mt-10 flex flex-col gap-6 items-center'>
        {navItems.map((n) => (
          <NavLink
            key={n.path}
            to={n.path}
            className={({ isActive }) =>
              `w-12 h-12 rounded-xl flex items-center justify-center transition
              ${
                isActive
                  ? `bg-gradient-to-br ${theme.primary} text-white`
                  : isDark
                  ? "bg-white/5 hover:bg-white/10"
                  : "bg-slate-100 hover:bg-slate-200"
              }`
            }
          >
            <span className='text-xl'>{n.icon}</span>
          </NavLink>
        ))}
      </nav>

      <div className='absolute bottom-6 flex flex-col gap-3 items-center w-full'>
        <button
          onClick={toggleDark}
          className='w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center'
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          onClick={() => setThemeName(themeName === "cyan" ? "violet" : "cyan")}
          className='w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center'
        >
          <Palette size={18} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
