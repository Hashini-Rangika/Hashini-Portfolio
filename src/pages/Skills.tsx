import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";
import { qaSkills, baSkills, tools } from "../data/skills";

interface SkillGroupProps {
  title: string;
  items: string[];
  delay: number;
  gradient: string;
  icon: string;
}

const SkillGroup = ({
  title,
  items,
  delay,
  gradient,
  icon,
}: SkillGroupProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <GlassCard className='h-full group hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden'>
        {/* Background gradient effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Animated corner decoration */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: delay + 0.3, duration: 0.5 }}
          className='absolute top-0 right-0 w-32 h-32 opacity-5'
        >
          <div
            className={`w-full h-full bg-gradient-to-br ${gradient} rounded-bl-full`}
          />
        </motion.div>

        <div className='relative z-10'>
          {/* Enhanced icon and title */}
          <div className='flex items-center gap-4 mb-8'>
            <motion.div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-3xl shadow-lg relative`}
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
              {/* Glow effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              />
            </motion.div>

            <div className='flex-1'>
              <h3 className='text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300'>
                {title}
              </h3>
              <motion.div
                className={`h-1 bg-gradient-to-r ${gradient} rounded-full mt-2`}
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: delay + 0.5, duration: 0.8 }}
              />
            </div>
          </div>

          {/* Enhanced skills list with better interaction */}
          <ul className='space-y-3 mb-6'>
            {items.map((skill, index) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{
                  duration: 0.4,
                  delay: delay + 0.1 + index * 0.05,
                }}
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
                className='group/item relative'
              >
                <motion.div
                  className='flex items-center gap-3 text-gray-300 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-default'
                  whileHover={{ x: 5 }}
                >
                  {/* Animated bullet point */}
                  <motion.div className='relative flex-shrink-0'>
                    <motion.div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`}
                      animate={
                        hoveredSkill === index
                          ? {
                              scale: [1, 1.5, 1],
                              rotate: [0, 180, 360],
                            }
                          : {}
                      }
                      transition={{
                        duration: 0.5,
                      }}
                    />
                    {/* Glow effect */}
                    {hoveredSkill === index && (
                      <motion.div
                        className={`absolute inset-0 w-2 h-2 rounded-full bg-gradient-to-r ${gradient} blur-md`}
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{ scale: 3, opacity: 0.5 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>

                  {/* Skill text */}
                  <span className='flex-1 group-hover/item:text-white transition-colors duration-300'>
                    {skill}
                  </span>

                  {/* Skill level indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      hoveredSkill === index
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    className='flex gap-1'
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      />
                    ))}
                  </motion.div>
                </motion.div>

                {/* Progress line */}
                <motion.div
                  className='absolute bottom-0 left-0 right-0 h-px'
                  initial={{ scaleX: 0 }}
                  animate={
                    hoveredSkill === index ? { scaleX: 1 } : { scaleX: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <div className={`h-full bg-gradient-to-r ${gradient}`} />
                </motion.div>
              </motion.li>
            ))}
          </ul>

          {/* Enhanced skill count section */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ delay: delay + 0.5, type: "spring", stiffness: 200 }}
            className='pt-6 border-t border-white/10'
          >
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className='text-xl'
                >
                  ⚡
                </motion.div>
                <span className='text-gray-400 text-sm font-medium'>
                  Total Skills
                </span>
              </div>

              <motion.div
                className='flex items-center gap-2'
                whileHover={{ scale: 1.1 }}
              >
                <motion.span
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${gradient} text-white font-bold text-lg shadow-lg`}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(34, 211, 238, 0)",
                      "0 0 20px 5px rgba(34, 211, 238, 0.3)",
                      "0 0 0 0 rgba(34, 211, 238, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {items.length}
                </motion.span>
              </motion.div>
            </div>

            {/* Visual progress bar */}
            <motion.div className='mt-4 h-2 bg-white/10 rounded-full overflow-hidden'>
              <motion.div
                className={`h-full bg-gradient-to-r ${gradient} relative`}
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: delay + 0.7, duration: 1 }}
              >
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent'
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

const Skills = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const { theme, isDark } = useTheme();

  return (
    <section
      className='min-h-screen px-6 py-20 max-w-6xl mx-auto relative'
      ref={headerRef}
    >
      {/* Enhanced animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='absolute top-20 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none'
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.12, 0.05],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className='absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none'
      />

      {/* Floating skill badges */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10'
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 2) * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className='text-center mb-16'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-5xl md:text-6xl font-bold mb-4'
        >
          My{" "}
          <span
            className={`bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
          >
            Skills
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className={`text-lg ${isDark ? "text-gray-400" : "text-slate-600"}`}
        >
          My technical and analytical strengths in QA & Business Analytics
        </motion.p>
      </div>

      {/* Enhanced skills progress indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className='mb-12 max-w-3xl mx-auto'
      >
        <GlassCard className='p-8 relative overflow-hidden group'>
          {/* Background pattern */}
          <div
            className='absolute inset-0 opacity-[0.02]'
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(34, 211, 238, 0.5) 25%, transparent 25%, transparent 75%, rgba(34, 211, 238, 0.5) 75%), 
                               linear-gradient(45deg, rgba(34, 211, 238, 0.5) 25%, transparent 25%, transparent 75%, rgba(34, 211, 238, 0.5) 75%)`,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 10px 10px",
            }}
          />

          <div className='relative z-10'>
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center gap-3'>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className='text-2xl'
                >
                  🎯
                </motion.div>
                <span className='text-gray-300 font-semibold text-lg'>
                  Skill Proficiency Journey
                </span>
              </div>
              <motion.div
                className='px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm shadow-lg'
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Growing 📈
              </motion.div>
            </div>

            <div className='relative h-3 bg-white/10 rounded-full overflow-hidden'>
              <motion.div
                initial={{ width: 0 }}
                animate={isHeaderInView ? { width: "75%" } : { width: 0 }}
                transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
                className='h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full relative'
              >
                {/* Animated shine effect */}
                <motion.div
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1,
                  }}
                  className='absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent'
                />

                {/* Pulsing particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className='absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full'
                    style={{ left: `${i * 20}%` }}
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>

              {/* Percentage markers */}
              <div className='absolute inset-0 flex justify-between items-center px-2 text-xs text-gray-500 font-mono'>
                {["0%", "25%", "50%", "75%", "100%"].map((mark, i) => (
                  <span key={mark} style={{ opacity: i === 3 ? 1 : 0.3 }}>
                    {mark}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats below progress bar */}
            <div className='mt-4 flex justify-between text-sm text-gray-400'>
              <span>Foundation Built</span>
              <span className='text-cyan-400 font-semibold'>
                Actively Expanding
              </span>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Enhanced skills grid */}
      <div className='grid md:grid-cols-3 gap-6 mb-12'>
        <SkillGroup
          title='QA Skills'
          items={qaSkills}
          delay={0.2}
          gradient='from-cyan-500 to-blue-500'
          icon='🎯'
        />
        <SkillGroup
          title='BA Skills'
          items={baSkills}
          delay={0.4}
          gradient='from-blue-500 to-purple-500'
          icon='📊'
        />
        <SkillGroup
          title='Tools'
          items={tools}
          delay={0.6}
          gradient='from-purple-500 to-pink-500'
          icon='🛠️'
        />
      </div>

      {/* Enhanced call to action with better design */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 1, duration: 0.6 }}
        className='text-center'
      >
        <GlassCard className='p-10 max-w-3xl mx-auto relative overflow-hidden group'>
          {/* Background decoration */}
          <motion.div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

          {/* Floating icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={
              isHeaderInView
                ? { scale: 1, rotate: 0 }
                : { scale: 0, rotate: -180 }
            }
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            className='inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-4xl mb-6 shadow-2xl relative z-10'
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🚀
            </motion.div>
            {/* Glow effect */}
            <motion.div
              className='absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 blur-xl opacity-50'
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.p
            className='text-gray-300 mb-8 leading-relaxed text-lg relative z-10'
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            I'm continuously expanding my skill set and staying updated with the
            latest tools and methodologies in{" "}
            <span className='text-cyan-400 font-semibold'>
              Quality Assurance
            </span>{" "}
            and{" "}
            <span className='text-blue-400 font-semibold'>
              Business Analysis
            </span>
            .
          </motion.p>

          <motion.a
            href='/projects'
            initial={{ opacity: 0, y: 10 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
            }
            transition={{ delay: 1.4, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className='inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 relative z-10 group/button overflow-hidden'
          >
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400'
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className='relative z-10 flex items-center gap-3'>
              See Skills in Action
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

          {/* Decorative lines */}
          <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent' />
          <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent' />
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default Skills;
