import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon, Palette } from "lucide-react";
import { motion } from "framer-motion";

const themes = {
  cyan: {
    primary: "from-cyan-400 to-blue-500",
    secondary: "from-blue-500 to-purple-500",
    accent: "from-purple-500 to-pink-500",
    glow: "bg-cyan-500/20",
    glow2: "bg-purple-500/20",
    text: "text-cyan-400",
    textSecondary: "text-blue-400",
    textAccent: "text-purple-400",
    border: "border-cyan-400",
  },
  emerald: {
    primary: "from-emerald-400 to-teal-500",
    secondary: "from-teal-500 to-green-500",
    accent: "from-green-500 to-lime-500",
    glow: "bg-emerald-500/20",
    glow2: "bg-green-500/20",
    text: "text-emerald-400",
    textSecondary: "text-teal-400",
    textAccent: "text-green-400",
    border: "border-emerald-400",
  },
  rose: {
    primary: "from-rose-400 to-pink-500",
    secondary: "from-pink-500 to-fuchsia-500",
    accent: "from-fuchsia-500 to-purple-500",
    glow: "bg-rose-500/20",
    glow2: "bg-fuchsia-500/20",
    text: "text-rose-400",
    textSecondary: "text-pink-400",
    textAccent: "text-fuchsia-400",
    border: "border-rose-400",
  },
  amber: {
    primary: "from-amber-400 to-orange-500",
    secondary: "from-orange-500 to-red-500",
    accent: "from-red-500 to-pink-500",
    glow: "bg-amber-500/20",
    glow2: "bg-red-500/20",
    text: "text-amber-400",
    textSecondary: "text-orange-400",
    textAccent: "text-red-400",
    border: "border-amber-400",
  },
  violet: {
    primary: "from-violet-400 to-purple-500",
    secondary: "from-purple-500 to-indigo-500",
    accent: "from-indigo-500 to-blue-500",
    glow: "bg-violet-500/20",
    glow2: "bg-indigo-500/20",
    text: "text-violet-400",
    textSecondary: "text-purple-400",
    textAccent: "text-indigo-400",
    border: "border-violet-400",
  },
};

const navItems = [
  { label: "Home", path: "/", icon: "🏠" },
  { label: "About", path: "/about", icon: "👤" },
  { label: "Skills", path: "/skills", icon: "⚡" },
  { label: "Projects", path: "/projects", icon: "💼" },
  { label: "Contact", path: "/contact", icon: "📧" },
];

const Home = () => {
  const [isDark, setIsDark] = useState(true);
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>("cyan");
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const theme = themes[currentTheme];

  return (
    <div
      className={`min-h-screen ${
        isDark
          ? "bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 text-slate-900"
      } transition-colors duration-500 relative overflow-hidden`}
    >
      {/* ENHANCED ANIMATED BACKGROUND */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Main gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-1/4 -left-20 w-96 h-96 ${theme.glow} rounded-full blur-3xl`}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className={`absolute bottom-1/4 -right-20 w-[500px] h-[500px] ${theme.glow2} rounded-full blur-3xl`}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${
            isDark ? "bg-blue-500/10" : "bg-blue-300/20"
          } rounded-full blur-3xl`}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? theme.text : theme.glow
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `
              linear-gradient(${
                isDark ? "rgba(34, 211, 238, 0.03)" : "rgba(34, 211, 238, 0.05)"
              } 1px, transparent 1px),
              linear-gradient(90deg, ${
                isDark ? "rgba(34, 211, 238, 0.03)" : "rgba(34, 211, 238, 0.05)"
              } 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            opacity: isDark ? 0.5 : 0.3,
          }}
        />
      </div>

      {/* SIDEBAR - UNCHANGED */}
      <aside
        className={`fixed left-0 top-0 h-screen w-20 ${
          isDark ? "bg-slate-900/80" : "bg-white/80"
        } backdrop-blur-xl border-r ${
          isDark ? "border-white/10" : "border-slate-200"
        } z-50 flex flex-col items-center py-6 gap-8`}
      >
        {/* Logo */}
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${theme.primary} flex items-center justify-center text-white font-bold text-xl`}
        >
          HW
        </div>

        {/* NAVIGATION (FIXED) */}
        <nav className='flex-1 flex flex-col gap-6'>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `w-12 h-12 rounded-xl flex items-center justify-center transition-all group relative
                ${
                  isActive
                    ? `bg-gradient-to-br ${theme.primary} text-white shadow-lg`
                    : isDark
                    ? "bg-white/5 hover:bg-white/10"
                    : "bg-slate-100 hover:bg-slate-200"
                }`
              }
              title={item.label}
            >
              <span className='text-2xl'>{item.icon}</span>

              {/* Tooltip */}
              <span
                className={`absolute left-full ml-4 px-3 py-1 rounded-lg ${
                  isDark ? "bg-slate-800" : "bg-white"
                } text-sm opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-lg`}
              >
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* THEME CONTROLS */}
        <div className='flex flex-col gap-3'>
          <button
            onClick={() => setIsDark(!isDark)}
            className='w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center'
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className='relative'>
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className='w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center'
            >
              <Palette size={20} />
            </button>

            {showThemeMenu && (
              <div className='absolute left-full ml-4 bottom-0 p-3 rounded-xl bg-slate-900/95 border border-white/10 shadow-2xl w-40'>
                {Object.keys(themes).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setCurrentTheme(key as keyof typeof themes);
                      setShowThemeMenu(false);
                    }}
                    className='w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 capitalize'
                  >
                    {key}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* ENHANCED MAIN CONTENT */}
      <main className='ml-20 min-h-screen flex items-center justify-center px-6 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='w-full max-w-5xl'
        >
          {/* Glass morphism card */}
          <div
            className={`text-center p-8 md:p-16 relative group overflow-hidden rounded-3xl border shadow-2xl
            ${
              isDark
                ? "bg-white/5 backdrop-blur-xl border-white/10"
                : "bg-white/80 backdrop-blur-xl border-slate-200 shadow-slate-300/50"
            }`}
          >
            {/* Animated border glow */}
            <motion.div
              className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl
                ${
                  isDark
                    ? "bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"
                    : "bg-gradient-to-r from-cyan-200/40 via-blue-200/40 to-purple-200/40"
                }
              `}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% auto" }}
            />

            {/* Corner accents */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className={`absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 rounded-tl-xl ${theme.border}/30`}
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className={`absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 rounded-br-xl ${theme.border}/30`}
            />

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className='mb-6 flex justify-center'
            >
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm
                ${
                  isDark
                    ? `bg-gradient-to-r ${theme.primary}/10 border-${
                        theme.border.split("-")[1]
                      }-500/30`
                    : "bg-gradient-to-r from-slate-100 to-slate-200 border-slate-300"
                }`}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`w-2 h-2 rounded-full ${
                    isDark ? theme.text : "bg-green-500"
                  }`}
                />
                <span
                  className={`text-sm font-semibold tracking-wide ${
                    isDark ? theme.text : "text-slate-700"
                  }`}
                >
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2
                className={`text-base md:text-lg mb-4 font-light tracking-[0.2em] uppercase
                ${isDark ? "text-gray-400" : "text-slate-600"}
              `}
              >
                Welcome to my portfolio
              </h2>
            </motion.div>

            {/* Enhanced Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
                <span
                  className={`inline-block ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Hi, I'm{" "}
                </span>
                <br />
                <motion.span
                  className={`inline-block bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent relative`}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% auto",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Hashini Wickramasooriya
                  {/* Text glow effect */}
                  <motion.span
                    className={`absolute inset-0 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent blur-lg opacity-50 -z-10`}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ backgroundSize: "200% auto" }}
                  >
                    Hashini Wickramasooriya
                  </motion.span>
                </motion.span>
              </h1>
            </motion.div>

            {/* Role with enhanced typing effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className='relative inline-block mb-8'
            >
              <div className='flex items-center justify-center gap-3'>
                <motion.div
                  className={`w-1 h-8 md:h-10 rounded-full bg-gradient-to-b ${theme.primary}`}
                  animate={{
                    scaleY: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <p
                  className={`text-xl md:text-2xl lg:text-3xl font-light tracking-wide
                  ${isDark ? "text-gray-200" : "text-slate-700"}
                `}
                >
                  Aspiring QA Engineer & Business Analyst
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`inline-block w-0.5 h-6 md:h-8 ml-2 align-middle ${theme.text}`}
                  />
                </p>
                <motion.div
                  className={`w-1 h-8 md:h-10 rounded-full bg-gradient-to-b ${theme.secondary}`}
                  animate={{
                    scaleY: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.75,
                  }}
                />
              </div>
            </motion.div>

            {/* Enhanced value proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className='max-w-3xl mx-auto mb-12'
            >
              <div
                className={`flex items-start gap-4 p-6 rounded-2xl border backdrop-blur-sm
                ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-slate-100 border-slate-200"
                }`}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className='text-3xl flex-shrink-0 mt-1'
                >
                  🎯
                </motion.div>
                <p
                  className={`leading-relaxed text-base md:text-lg text-left
                  ${isDark ? "text-gray-300" : "text-slate-700"}
                `}
                >
                  I focus on{" "}
                  <span className={`${theme.text} font-semibold`}>
                    software Quality Assurance
                  </span>
                  ,
                  <span className={`${theme.textSecondary} font-semibold`}>
                    {" "}
                    Business analytics
                  </span>
                  , and
                  <span className={`${theme.textAccent} font-semibold`}>
                    {" "}
                    building user-centered systems
                  </span>{" "}
                  by identifying issues early and improving reliability.
                </p>
              </div>
            </motion.div>

            {/* Enhanced action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className='flex flex-col sm:flex-row gap-4 justify-center mb-12'
            >
              <motion.a
                href='/projects'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative px-8 py-4 rounded-xl font-bold overflow-hidden transition-all duration-300 shadow-lg
                  bg-gradient-to-r ${theme.primary} text-white hover:shadow-2xl
                `}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${theme.secondary}`}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className='relative z-10 flex items-center gap-2'>
                  View My Projects
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>

              <motion.a
                href='/contact'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative px-8 py-4 rounded-xl border-2 font-bold overflow-hidden backdrop-blur-sm transition-all duration-300
                  ${
                    isDark
                      ? `border-white/20 text-white hover:border-cyan-400/50`
                      : `border-slate-300 text-slate-700 hover:border-slate-400`
                  }
                `}
              >
                <motion.div
                  className={`absolute inset-0 ${
                    isDark ? "bg-white/5" : "bg-slate-100"
                  }`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span
                  className={`relative z-10 transition-colors duration-300 flex items-center gap-2
                  ${
                    isDark
                      ? `group-hover:${theme.text}`
                      : "group-hover:text-slate-900"
                  }
                `}
                >
                  Contact Me
                  <motion.span
                    className='opacity-0 group-hover:opacity-100'
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    💬
                  </motion.span>
                </span>
              </motion.a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className={`flex flex-wrap justify-center gap-8 pt-8 border-t
                ${isDark ? "border-white/10" : "border-slate-200"}
              `}
            >
              {[
                { label: "Years of Study", value: "3+", icon: "📚" },
                { label: "Focus Areas", value: "QA/BA", icon: "🎯" },
                { label: "Projects", value: "10+", icon: "💼" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className='flex flex-col items-center gap-2 cursor-default'
                >
                  <div className='text-2xl'>{stat.icon}</div>
                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-xs uppercase tracking-wider
                    ${isDark ? "text-gray-400" : "text-slate-600"}
                  `}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className='absolute -bottom-20 left-1/2 -translate-x-1/2'
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`flex flex-col items-center gap-2
                  ${isDark ? "text-gray-500" : "text-slate-400"}
                `}
              >
                <span className='text-xs tracking-[0.3em] uppercase font-semibold'>
                  Scroll
                </span>
                <div
                  className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 relative overflow-hidden
                  ${theme.border}/30
                `}
                >
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`w-1.5 h-1.5 rounded-full ${theme.text} shadow-lg`}
                    style={{
                      boxShadow: isDark ? `0 0 10px ${theme.text}` : "none",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
