import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useTheme, themes } from "../context/ThemeContext";

const Layout = () => {
  const { isDark, themeName } = useTheme();
  const theme = themes[themeName];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
          : "bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900"
      }`}
    >
      <Sidebar />

      {/* global glow */}
      <div
        className={`fixed top-1/4 left-1/3 w-96 h-96 ${theme.glow1} blur-3xl pointer-events-none`}
      />
      <div
        className={`fixed bottom-1/4 right-1/3 w-96 h-96 ${theme.glow2} blur-3xl pointer-events-none`}
      />

      <main className='ml-20 min-h-screen relative z-10'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
