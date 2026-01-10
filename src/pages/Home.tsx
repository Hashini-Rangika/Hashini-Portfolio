import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

const Home = () => {
  return (
    <section className='min-h-screen flex items-center justify-center px-6 relative overflow-hidden'>
      {/* Enhanced animated background with multiple layers */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Main gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className='absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl'
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className='absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl'
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl'
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-cyan-400/30 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
          className='absolute inset-0 opacity-[0.02]'
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='w-full max-w-5xl relative z-10'
      >
        <GlassCard className='text-center p-8 md:p-16 relative group overflow-hidden'>
          {/* Animated border glow */}
          <motion.div
            className='absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl'
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
            className='absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-cyan-400/30 rounded-tl-xl'
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className='absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-purple-400/30 rounded-br-xl'
          />

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className='mb-6 flex justify-center'
          >
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm'>
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
                className='w-2 h-2 rounded-full bg-cyan-400'
              />
              <span className='text-cyan-400 text-sm font-semibold tracking-wide'>
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
            <h2 className='text-base md:text-lg text-gray-400 mb-4 font-light tracking-[0.2em] uppercase'>
              Welcome to my portfolio
            </h2>
          </motion.div>

          {/* Name with enhanced gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className='text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight'
          >
            <span className='inline-block text-white'>Hi, I'm </span>
            <br />
            <motion.span
              className='inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative'
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
              {/* Text shadow effect */}
              <motion.span
                className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent blur-lg opacity-50'
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% auto", zIndex: -1 }}
              >
                Hashini Wickramasooriya
              </motion.span>
            </motion.span>
          </motion.h1>

          {/* Role with enhanced typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className='relative inline-block mb-8'
          >
            <div className='flex items-center justify-center gap-3'>
              <motion.div
                className='w-1 h-8 md:h-10 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full'
                animate={{
                  scaleY: [1, 0.8, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <p className='text-xl md:text-2xl lg:text-4xl text-gray-200 font-light tracking-wide'>
                Aspiring QA Engineer & Business Analyst
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className='inline-block w-0.5 h-6 md:h-8 lg:h-10 bg-cyan-400 ml-2 align-middle'
                />
              </p>
              <motion.div
                className='w-1 h-8 md:h-10 bg-gradient-to-b from-blue-500 to-purple-400 rounded-full'
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

          {/* Enhanced value proposition with icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className='max-w-3xl mx-auto mb-12'
          >
            <div className='flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm'>
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
              <p className='text-gray-300 leading-relaxed text-base md:text-lg text-left'>
                I focus on{" "}
                <span className='text-cyan-400 font-semibold'>
                  software quality
                </span>
                ,
                <span className='text-blue-400 font-semibold'>
                  {" "}
                  requirement analysis
                </span>
                , and
                <span className='text-purple-400 font-semibold'>
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
              className='group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold overflow-hidden transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'
            >
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400'
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
              className='group relative px-8 py-4 rounded-xl border-2 border-white/20 text-white font-bold overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50'
            >
              <motion.div
                className='absolute inset-0 bg-white/5'
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className='relative z-10 group-hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2'>
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
            className='flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10'
          >
            {[
              { label: "Years of Study", value: "2+", icon: "📚" },
              { label: "Focus Areas", value: "QA/BA", icon: "🎯" },
              { label: "Projects", value: "5+", icon: "💼" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className='flex flex-col items-center gap-2'
              >
                <div className='text-2xl'>{stat.icon}</div>
                <div className='text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text'>
                  {stat.value}
                </div>
                <div className='text-xs text-gray-400 uppercase tracking-wider'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className='absolute -bottom-24 left-1/2 -translate-x-1/2'
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className='flex flex-col items-center gap-2 text-gray-500'
            >
              <span className='text-xs tracking-[0.3em] uppercase font-semibold'>
                Scroll
              </span>
              <div className='w-6 h-10 rounded-full border-2 border-cyan-500/30 flex items-start justify-center p-2 relative overflow-hidden'>
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className='w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50'
                />
              </div>
            </motion.div>
          </motion.div>
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default Home;
