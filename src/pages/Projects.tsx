import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

// Project data with QA focus
const projectsData = [
  {
    id: 1,
    title: "TaskManager Web App",
    category: "qa",
    description:
      "Comprehensive QA testing for a task management application with focus on user workflows and data integrity.",
    icon: "📋",
    tech: ["Manual Testing", "Test Cases", "Bug Tracking", "Jira"],
    impact: "Identified 45+ critical bugs",
    achievements: [
      "Created 150+ test cases",
      "Improved app stability by 40%",
      "Reduced user-reported bugs by 60%",
    ],
    link: "https://github.com/Hashini-Rangika/task-manager-web-app",
    githubLink: "#",
  },
  {
    id: 2,
    title: "MediSync",
    category: "qa",
    description:
      "Healthcare system testing with emphasis on data security, HIPAA compliance, and patient management workflows.",
    icon: "🏥",
    tech: ["Healthcare Testing", "Compliance", "Security", "API Testing"],
    impact: "Ensured 100% HIPAA compliance",
    achievements: [
      "Tested 200+ healthcare workflows",
      "Security vulnerability assessment",
      "Performance optimization testing",
    ],
    link: "https://github.com/Hashini-Rangika/MediSync-Updated",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Foodie",
    category: "qa",
    description:
      "End-to-end testing for food delivery platform including payment integration, order tracking, and restaurant management.",
    icon: "🍔",
    tech: ["E2E Testing", "Payment Testing", "Mobile Testing", "Postman"],
    impact: "Tested 80+ API endpoints",
    achievements: [
      "Payment gateway integration testing",
      "Real-time order tracking validation",
      "Cross-platform compatibility testing",
    ],
    link: "https://github.com/Hashini-Rangika/Foodie---updated",
    githubLink: "https://github.com/Hashini-Rangika/Foodie---updated",
  },
  {
    id: 4,
    title: "User Management System",
    category: "ba",
    description:
      "Requirements gathering and analysis for enterprise user management system with role-based access control.",
    icon: "👥",
    tech: [
      "Requirements Analysis",
      "User Stories",
      "Process Mapping",
      "Documentation",
    ],
    impact: "Created 50+ user stories",
    achievements: [
      "Documented 30+ business requirements",
      "Created comprehensive process flows",
      "Stakeholder interview sessions",
    ],
    link: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "Hotel Management Web App",
    category: "qa",
    description:
      "Complete testing suite for hotel booking system including reservation management, payment processing, and reporting.",
    icon: "🏨",
    tech: ["Functional Testing", "SQL", "Test Automation", "Selenium"],
    impact: "100+ test scenarios executed",
    achievements: [
      "Booking workflow optimization",
      "Database query validation",
      "Comprehensive regression testing",
    ],
    link: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<"all" | "qa" | "ba">("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { theme, isDark } = useTheme();

  const filteredProjects = projectsData.filter(
    (project) => filter === "all" || project.category === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className='min-h-screen px-6 py-20 max-w-7xl mx-auto relative'
      ref={ref}
    >
      {/* Enhanced background decoration */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute top-1/4 left-0 w-96 h-96 ${theme.glow1} rounded-full blur-3xl pointer-events-none`}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -120, 0],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute bottom-1/4 right-0 w-96 h-96 ${theme.glow2} rounded-full blur-3xl pointer-events-none`}
      />

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 rounded-full'
          style={{
            left: `${5 + i * 9}%`,
            top: `${10 + (i % 4) * 20}%`,
            background: `linear-gradient(135deg, ${
              isDark ? "rgba(34, 211, 238, 0.3)" : "rgba(34, 211, 238, 0.5)"
            }, ${
              isDark ? "rgba(147, 51, 234, 0.3)" : "rgba(147, 51, 234, 0.5)"
            })`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
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
          Featured{" "}
          <span
            className={`bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
          >
            Projects
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className={`text-lg ${isDark ? "text-gray-400" : "text-slate-600"}`}
        >
          Practical QA & BA work that demonstrates my skills
        </motion.p>
      </div>

      {/* Filter and Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='mb-10'
      >
        <div
          className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-2xl border backdrop-blur-sm ${
            isDark
              ? "bg-white/5 border-white/10"
              : "bg-white/80 border-slate-200"
          }`}
        >
          {/* Left: Stats */}
          <div className='flex flex-wrap items-center gap-3'>
            <motion.div
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border ${
                isDark
                  ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/30"
                  : "bg-gradient-to-r from-cyan-100 to-blue-100 border-cyan-300"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className='text-lg'
              >
                📁
              </motion.div>
              <span className={`${theme.text} font-bold text-lg`}>
                {filteredProjects.length}
              </span>
              <span
                className={`text-sm font-medium ${
                  isDark ? "text-gray-400" : "text-slate-600"
                }`}
              >
                Projects
              </span>
            </motion.div>

            <motion.div
              className={`px-5 py-2.5 rounded-full border text-sm font-medium ${
                isDark
                  ? "bg-white/5 border-white/10 text-gray-400"
                  : "bg-slate-100 border-slate-200 text-slate-600"
              }`}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(34, 211, 238, 0.3)",
              }}
            >
              🎯 QA & BA Focus
            </motion.div>

            <motion.div
              className={`px-5 py-2.5 rounded-full border text-sm font-medium ${
                isDark
                  ? "bg-white/5 border-white/10 text-gray-400"
                  : "bg-slate-100 border-slate-200 text-slate-600"
              }`}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(34, 211, 238, 0.3)",
              }}
            >
              ⚡ Real-World Experience
            </motion.div>
          </div>

          {/* Right: Filter Buttons */}
          <div className='flex gap-2'>
            {["all", "qa", "ba"].map((filterType) => (
              <motion.button
                key={filterType}
                onClick={() => setFilter(filterType as "all" | "qa" | "ba")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  filter === filterType
                    ? `bg-gradient-to-r ${theme.primary} text-white shadow-lg`
                    : isDark
                    ? "bg-white/5 text-gray-400 hover:bg-white/10"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {filterType === "all" ? "All" : filterType.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
        className='grid md:grid-cols-2 gap-8 mb-16'
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
            className='group'
          >
            <div
              className={`h-full p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500 relative overflow-hidden ${
                isDark
                  ? "bg-white/5 border-white/10 hover:border-cyan-500/30 hover:bg-white/8"
                  : "bg-white/90 border-slate-200 hover:border-cyan-300 hover:bg-white"
              }`}
            >
              {/* Hover gradient effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${theme.primary} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${theme.primary} flex items-center justify-center text-4xl mb-6 shadow-lg relative z-10`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.icon}
                {hoveredProject === project.id && (
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${theme.primary} blur-xl`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>

              {/* Category Badge */}
              <div className='mb-4 relative z-10'>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === "qa"
                      ? `bg-gradient-to-r ${theme.primary} text-white`
                      : `bg-gradient-to-r ${theme.secondary} text-white`
                  }`}
                >
                  {project.category === "qa"
                    ? "Quality Assurance"
                    : "Business Analysis"}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`text-2xl font-bold mb-3 relative z-10 ${
                  isDark ? "text-white" : "text-slate-900"
                } group-hover:${theme.text} transition-colors duration-300`}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className={`mb-6 leading-relaxed relative z-10 ${
                  isDark ? "text-gray-400" : "text-slate-600"
                }`}
              >
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className='flex flex-wrap gap-2 mb-6 relative z-10'>
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      isDark
                        ? "bg-white/10 text-gray-300"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Impact */}
              <div
                className={`flex items-center gap-2 mb-6 p-3 rounded-xl relative z-10 ${
                  isDark ? "bg-white/5" : "bg-slate-50"
                }`}
              >
                <span className='text-xl'>📊</span>
                <span className={`${theme.text} font-semibold text-sm`}>
                  {project.impact}
                </span>
              </div>

              {/* Achievements */}
              <div className='mb-6 relative z-10'>
                <h4
                  className={`text-sm font-semibold mb-3 ${
                    isDark ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  Key Achievements:
                </h4>
                <ul className='space-y-2'>
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className='flex items-start gap-2'>
                      <span className={`mt-1 ${theme.text}`}>✓</span>
                      <span
                        className={`text-sm ${
                          isDark ? "text-gray-400" : "text-slate-600"
                        }`}
                      >
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className='flex gap-3 relative z-10'>
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 py-2.5 rounded-xl text-center font-semibold transition-all duration-300 bg-gradient-to-r ${theme.primary} text-white hover:shadow-lg`}
                >
                  View Details
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                    isDark
                      ? "bg-white/10 hover:bg-white/20 text-gray-300"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className='text-center mb-16'
      >
        <div
          className={`p-10 md:p-12 rounded-3xl border backdrop-blur-sm max-w-3xl mx-auto relative overflow-hidden group ${
            isDark
              ? "bg-gradient-to-br from-white/5 via-white/[0.03] to-white/[0.02] border-white/10"
              : "bg-gradient-to-br from-white/80 to-white/60 border-slate-200"
          }`}
        >
          {/* Animated background */}
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

          {/* Corner decorations */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
            className={`absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 rounded-tl-2xl ${theme.border}/30`}
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 1.1, duration: 0.5 }}
            className={`absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 rounded-br-2xl ${theme.borderSecondary}/30`}
          />

          <div className='relative z-10'>
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${theme.primary} text-5xl mb-6 shadow-2xl relative`}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🤝
              </motion.div>
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${theme.primary} blur-2xl`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            <motion.h3
              className='text-3xl md:text-4xl font-bold mb-4'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <span
                className={`bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
              >
                Want to collaborate?
              </span>
            </motion.h3>

            <motion.p
              className={`mb-8 text-lg leading-relaxed max-w-2xl mx-auto ${
                isDark ? "text-gray-400" : "text-slate-600"
              }`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              I'm always interested in new projects and opportunities to apply
              my
              <span className={`${theme.text} font-semibold`}> QA</span> and
              <span className={`${theme.textSecondary} font-semibold`}>
                {" "}
                BA skills
              </span>
              . Let's build something amazing together!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
              className='flex flex-col sm:flex-row gap-4 justify-center items-center'
            >
              <motion.a
                href='/contact'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 overflow-hidden bg-gradient-to-r ${theme.primary} text-white hover:shadow-2xl ${theme.shadow}`}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${theme.secondary}`}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className='relative z-10 flex items-center gap-3'>
                  Get in Touch
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
                href='/skills'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 font-bold overflow-hidden backdrop-blur-sm transition-all duration-300 ${
                  isDark
                    ? "border-white/20 text-white hover:border-cyan-400/50"
                    : "border-slate-300 text-slate-700 hover:border-cyan-400"
                }`}
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
                  className={`relative z-10 transition-colors duration-300 flex items-center gap-3 group-hover:${theme.text}`}
                >
                  View Skills
                  <span className='text-lg'>💼</span>
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Decorative lines */}
          <div
            className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${theme.text}/50 to-transparent`}
          />
          <div
            className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${theme.textSecondary}/50 to-transparent`}
          />
        </div>
      </motion.div>

      {/* Project Impact Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, duration: 0.6 }}
        className='max-w-4xl mx-auto'
      >
        <div
          className={`p-8 rounded-2xl border backdrop-blur-sm ${
            isDark
              ? "bg-white/5 border-white/10"
              : "bg-white/80 border-slate-200"
          }`}
        >
          <div className='flex items-center gap-3 mb-6'>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className='text-2xl'
            >
              📊
            </motion.div>
            <h4
              className={`text-xl font-bold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Overall Project Impact
            </h4>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              { label: "Test Cases", value: "500+", icon: "✅" },
              { label: "Bugs Found", value: "150+", icon: "🐛" },
              { label: "Requirements", value: "200+", icon: "📋" },
              { label: "Documentation", value: "50+", icon: "📄" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-4 rounded-xl border transition-all duration-300 text-center ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:border-cyan-500/30 hover:bg-white/10"
                    : "bg-slate-50 border-slate-200 hover:border-cyan-300 hover:bg-white"
                }`}
              >
                <div className='text-3xl mb-2'>{item.icon}</div>
                <div
                  className={`text-2xl font-bold bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent mb-1`}
                >
                  {item.value}
                </div>
                <div
                  className={`text-xs uppercase tracking-wider ${
                    isDark ? "text-gray-400" : "text-slate-600"
                  }`}
                >
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
