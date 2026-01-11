import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

// Contact methods data
const CONTACT_METHODS = [
  {
    id: "email",
    icon: "📧",
    title: "Email",
    value: "wr.hashini@gmail.com",
    link: "mailto:wr.hashini@gmail.com",
    description: "Send me a message anytime",
    gradient: "from-cyan-500 to-blue-500",
    subtext: "Usually responds within 24 hours",
  },
  {
    id: "linkedin",
    icon: "💼",
    title: "LinkedIn",
    value: "linkedin.com/in/hashini01",
    link: "https://linkedin.com/in/hashini01",
    description: "Let's connect professionally",
    gradient: "from-blue-500 to-indigo-500",
    subtext: "Professional network & updates",
  },
  {
    id: "github",
    icon: "💻",
    title: "GitHub",
    value: "github.com/Hashini-Rangika",
    link: "https://github.com/Hashini-Rangika",
    description: "Check out my code",
    gradient: "from-purple-500 to-pink-500",
    subtext: "Projects & contributions",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme, isDark } = useTheme();

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Memoized particles for performance
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }).map(() => ({
        w: Math.floor(Math.random() * 6) + 2,
        h: Math.floor(Math.random() * 6) + 2,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: 0.3 + Math.random() * 0.3,
        duration: 4 + Math.random() * 3,
        delay: Math.random() * 2,
      })),
    []
  );

  // Memoized sparkles map
  const sparklesMap = useMemo(() => {
    const map: Record<string, { left: string; top: string }[]> = {};
    CONTACT_METHODS.forEach((m) => {
      map[m.id] = Array.from({ length: 8 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }));
    });
    return map;
  }, []);

  // Handle email copy
  const handleCopyEmail = (e: React.MouseEvent, email: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      className='min-h-screen px-6 py-20 max-w-5xl mx-auto relative'
      ref={ref}
    >
      {/* Enhanced animated background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
        }}
        className={`absolute top-20 -left-20 w-96 h-96 ${theme.glow1} rounded-full blur-3xl pointer-events-none`}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
          delay: 2,
        }}
        className={`absolute bottom-20 -right-20 w-96 h-96 ${theme.glow2} rounded-full blur-3xl pointer-events-none`}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className='absolute rounded-full'
          style={{
            width: p.w,
            height: p.h,
            left: p.left,
            top: p.top,
            background: isDark
              ? `linear-gradient(135deg, rgba(34, 211, 238, 0.3), rgba(147, 51, 234, 0.3))`
              : `linear-gradient(135deg, rgba(34, 211, 238, 0.5), rgba(147, 51, 234, 0.5))`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [p.opacity, 0.8, p.opacity],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: [0.42, 0, 0.58, 1],
          }}
        />
      ))}

      {/* Section Title */}
      <div className='text-center mb-16'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className='text-5xl md:text-6xl font-bold mb-4'
        >
          Get In{" "}
          <span
            className={`bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
          >
            Touch
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className={`text-lg ${isDark ? "text-gray-400" : "text-slate-600"}`}
        >
          Let's connect and collaborate
        </motion.p>
      </div>

      {/* Enhanced intro section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='mb-10'
      >
        <div
          className={`text-center p-10 relative overflow-hidden group rounded-3xl border backdrop-blur-xl transition-all duration-500 ${
            isDark
              ? "bg-white/5 border-white/10"
              : "bg-white/80 border-slate-200"
          }`}
        >
          {/* Animated gradient background */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${theme.primary}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% 200%" }}
          />

          <div className='relative z-10'>
            {/* Icon with enhanced animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${theme.primary} text-4xl mb-6 shadow-2xl relative`}
            >
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                👋
              </motion.div>
              {/* Pulsing glow */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${theme.primary} blur-xl`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                }}
              />
            </motion.div>

            <motion.p
              className={`text-xl leading-relaxed mb-6 max-w-2xl mx-auto ${
                isDark ? "text-gray-300" : "text-slate-700"
              }`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I'm always open to discussing new projects, opportunities, or just
              having a conversation about{" "}
              <span className={`${theme.text} font-semibold`}>QA</span> and{" "}
              <span className={`${theme.textSecondary} font-semibold`}>
                Business Analysis
              </span>
              .
            </motion.p>

            {/* Status badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border ${
                isDark
                  ? "bg-gradient-to-r from-green-500/20 to-cyan-500/20 border-green-500/30"
                  : "bg-gradient-to-r from-green-100 to-cyan-100 border-green-300"
              }`}
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                }}
                className='text-2xl'
              >
                ✨
              </motion.span>
              <div className='flex items-center gap-2'>
                <motion.span
                  className='w-2 h-2 rounded-full bg-green-400'
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                />
                <span
                  className={`font-bold ${
                    isDark ? "text-green-400" : "text-green-600"
                  }`}
                >
                  Available for collaboration
                </span>
              </div>
            </motion.div>
          </div>

          {/* Decorative corners */}
          <div
            className={`absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 rounded-tl-2xl ${theme.border}/20`}
          />
          <div
            className={`absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 rounded-br-2xl ${theme.borderSecondary}/20`}
          />
        </div>
      </motion.div>

      {/* Enhanced contact methods */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className='grid gap-6 mb-10'
      >
        {CONTACT_METHODS.map((method, index) => (
          <motion.div
            key={method.id}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            onMouseEnter={() => setHoveredCard(method.id)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ scale: 1.02, y: -5 }}
            className='block relative'
          >
            <div
              className={`p-6 md:p-8 group transition-all duration-500 relative overflow-hidden rounded-3xl border backdrop-blur-xl ${
                isDark
                  ? "bg-white/5 border-white/10 hover:border-cyan-500/30"
                  : "bg-white/90 border-slate-200 hover:border-cyan-300"
              }`}
            >
              {/* Animated hover gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                initial={false}
                animate={
                  hoveredCard === method.id
                    ? { scale: 1.5, rotate: 10 }
                    : { scale: 1, rotate: 0 }
                }
                transition={{ duration: 0.5 }}
              />

              {/* Sparkle effect on hover */}
              {hoveredCard === method.id && (
                <motion.div className='absolute inset-0 pointer-events-none'>
                  {sparklesMap[method.id]?.map((s, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 rounded-full ${theme.text}`}
                      style={{ left: s.left, top: s.top }}
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [1, 1, 0],
                        y: [-20, -40],
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  ))}
                </motion.div>
              )}

              <div className='relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6'>
                {/* Enhanced icon */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-4xl shadow-2xl flex-shrink-0 relative`}
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {method.icon}
                  {/* Icon glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${method.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                  />
                </motion.div>

                {/* Enhanced content */}
                <div className='flex-grow min-w-0'>
                  <div className='flex items-start justify-between gap-4 mb-2'>
                    <h3
                      className={`text-2xl font-bold transition-colors flex items-center gap-2 ${
                        isDark
                          ? "text-white group-hover:text-cyan-400"
                          : "text-slate-900 group-hover:text-cyan-600"
                      }`}
                    >
                      {method.title}
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        animate={
                          hoveredCard === method.id
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -5 }
                        }
                        className='text-lg'
                      >
                        →
                      </motion.span>
                    </h3>
                  </div>

                  <p
                    className={`text-base mb-3 ${
                      isDark ? "text-gray-400" : "text-slate-600"
                    }`}
                  >
                    {method.description}
                  </p>

                  <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3'>
                    <a
                      href={method.link}
                      target={method.id !== "email" ? "_blank" : undefined}
                      rel={
                        method.id !== "email"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`font-semibold truncate transition-colors flex items-center gap-2 group/link ${
                        isDark
                          ? "text-cyan-400 hover:text-cyan-300"
                          : "text-cyan-600 hover:text-cyan-500"
                      }`}
                    >
                      {method.value}
                      <motion.span
                        className='opacity-0 group-hover/link:opacity-100'
                        animate={
                          hoveredCard === method.id ? { x: [0, 5, 0] } : {}
                        }
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: [0.42, 0, 0.58, 1],
                        }}
                      >
                        🔗
                      </motion.span>
                    </a>

                    {method.id === "email" && (
                      <motion.button
                        onClick={(e) => handleCopyEmail(e, method.value)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                          isDark
                            ? "bg-white/10 hover:bg-white/20 text-gray-300"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                        }`}
                      >
                        {copiedEmail ? (
                          <>
                            <span>✓</span>
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <span>📋</span>
                            <span>Copy</span>
                          </>
                        )}
                      </motion.button>
                    )}
                  </div>

                  <p
                    className={`text-sm mt-2 flex items-center gap-2 ${
                      isDark ? "text-gray-500" : "text-slate-500"
                    }`}
                  >
                    <span>📍</span>
                    {method.subtext}
                  </p>
                </div>

                {/* Enhanced arrow with animation */}
                <motion.div
                  className={`transition-colors flex-shrink-0 ${
                    isDark
                      ? "text-gray-400 group-hover:text-cyan-400"
                      : "text-slate-400 group-hover:text-cyan-600"
                  }`}
                  animate={
                    hoveredCard === method.id ? { x: [0, 10, 0] } : { x: 0 }
                  }
                  transition={{
                    duration: 1.5,
                    repeat: hoveredCard === method.id ? Infinity : 0,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                >
                  <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced quick response section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className='mb-10'
      >
        <div
          className={`p-10 text-center relative overflow-hidden group rounded-3xl border backdrop-blur-xl ${
            isDark
              ? "bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10"
              : "bg-gradient-to-br from-white/80 to-white/60 border-slate-200"
          }`}
        >
          {/* Animated background pattern */}
          <div
            className='absolute inset-0 opacity-[0.02]'
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, ${
                isDark ? "rgba(34, 211, 238, 0.5)" : "rgba(34, 211, 238, 0.3)"
              } 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />

          <div className='relative z-10'>
            {/* Enhanced icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${theme.primary} text-4xl mb-6 shadow-2xl relative`}
            >
              <motion.div
                animate={{
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                ⚡
              </motion.div>
              {/* Glow effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${theme.primary} blur-2xl`}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                }}
              />
            </motion.div>

            <motion.h3
              className={`text-2xl md:text-3xl font-bold mb-4 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Quick Response Time
            </motion.h3>

            <motion.p
              className={`mb-8 text-lg max-w-2xl mx-auto ${
                isDark ? "text-gray-400" : "text-slate-600"
              }`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              I typically respond to all inquiries within{" "}
              <span className={`${theme.text} font-bold`}>24 hours</span>.
              Looking forward to hearing from you!
            </motion.p>

            {/* Enhanced social proof indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3, duration: 0.6 }}
              className='flex flex-wrap justify-center gap-8'
            >
              {[
                { icon: "🟢", label: "Active" },
                { icon: "🌍", label: "Available Worldwide" },
                { icon: "🕐", label: "Flexible Schedule" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:border-cyan-500/30 hover:bg-white/10"
                      : "bg-slate-100 border-slate-200 hover:border-cyan-300 hover:bg-white"
                  }`}
                >
                  <span className='text-xl'>{item.icon}</span>
                  <span
                    className={`font-medium ${
                      isDark ? "text-gray-400" : "text-slate-600"
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced download resume button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
        className='text-center'
      >
        <motion.button
          onClick={() => setShowResumeModal(true)}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className={`group relative inline-flex items-center gap-3 px-10 py-4 rounded-xl border-2 font-bold transition-all duration-300 overflow-hidden ${
            isDark
              ? "border-white/20 text-white hover:border-cyan-400/50 hover:bg-white/5"
              : "border-slate-300 text-slate-700 hover:border-cyan-400 hover:bg-slate-50"
          }`}
        >
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${theme.primary}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          />

          <motion.span
            className='text-2xl'
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📄
          </motion.span>

          <span
            className={`relative z-10 transition-colors ${
              isDark ? "group-hover:text-cyan-400" : "group-hover:text-cyan-600"
            }`}
          >
            View Resume
          </span>

          <motion.span
            className={`relative z-10 transition-colors ${
              isDark ? "group-hover:text-cyan-400" : "group-hover:text-cyan-600"
            }`}
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center px-4'
            onClick={() => setShowResumeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`relative w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl border ${
                isDark
                  ? "bg-slate-900 border-white/10"
                  : "bg-white border-slate-200"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div
                className={`flex items-center justify-between px-6 py-4 border-b ${
                  isDark
                    ? "bg-slate-950 border-white/10"
                    : "bg-slate-100 border-slate-200"
                }`}
              >
                <h3
                  className={`text-lg font-bold flex items-center gap-2 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  📄 Resume – Hashini Wickramasooriya
                </h3>

                <div className='flex items-center gap-3'>
                  <a
                    href='/Hashini_Wickramasooriya_CV.pdf'
                    download
                    className={`px-4 py-2 rounded-lg font-semibold transition bg-gradient-to-r ${theme.primary} text-white hover:shadow-lg`}
                  >
                    Download
                  </a>

                  <button
                    onClick={() => setShowResumeModal(false)}
                    className={`px-4 py-2 rounded-lg transition ${
                      isDark
                        ? "bg-white/10 hover:bg-white/20 text-white"
                        : "bg-slate-200 hover:bg-slate-300 text-slate-700"
                    }`}
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <iframe
                src='/Hashini_Wickramasooriya_CV.pdf'
                title='Resume Preview'
                className='w-full h-full bg-white'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
