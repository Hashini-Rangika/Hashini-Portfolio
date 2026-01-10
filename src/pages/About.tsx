import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
      className='min-h-screen px-6 py-20 max-w-6xl mx-auto relative'
      ref={ref}
    >
      {/* Enhanced background decoration */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className='absolute top-40 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none'
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className='absolute bottom-40 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none'
      />

      {/* Floating decorative elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 bg-cyan-400/20 rounded-full'
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <SectionTitle
        title='About Me'
        subtitle="Who I am and where I'm heading"
      />

      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
        className='space-y-6'
      >
        {/* Enhanced main content card with quote design */}
        <motion.div variants={itemVariants}>
          <GlassCard className='leading-relaxed space-y-6 group hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden'>
            {/* Decorative quote mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ delay: 0.5, duration: 0.8 }}
              className='absolute -top-4 -left-4 text-[200px] text-cyan-400 font-serif leading-none pointer-events-none'
            >
              "
            </motion.div>

            {/* Enhanced highlight bar with animation */}
            <div className='flex items-center gap-4 relative z-10'>
              <motion.div
                className='h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full'
                initial={{ width: 0 }}
                animate={isInView ? { width: 100 } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50'
              />
            </div>

            <motion.p
              variants={itemVariants}
              className='text-lg md:text-xl text-gray-300 relative z-10'
            >
              I am an undergraduate IT student with a strong interest in
              <motion.span
                className='text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-bold px-2'
                whileHover={{ scale: 1.05 }}
                style={{ display: "inline-block" }}
              >
                Quality Assurance and Business Analysis
              </motion.span>
              .
            </motion.p>

            <motion.p
              variants={itemVariants}
              className='text-lg md:text-xl text-gray-300 relative z-10'
            >
              I enjoy understanding systems deeply, analyzing requirements, and
              identifying issues early to improve
              <span className='text-cyan-400 font-semibold'>
                {" "}
                software reliability
              </span>{" "}
              and
              <span className='text-blue-400 font-semibold'>
                {" "}
                user satisfaction
              </span>
              .
            </motion.p>

            <motion.div
              variants={itemVariants}
              className='flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 relative z-10'
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
                className='text-2xl flex-shrink-0'
              >
                🎯
              </motion.div>
              <p className='text-lg md:text-xl text-gray-300'>
                My goal is to grow as a QA / BA professional who ensures
                software quality while aligning technology with real user and
                business needs.
              </p>
            </motion.div>

            {/* Bottom decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView
                  ? { opacity: 0.05, scale: 1 }
                  : { opacity: 0, scale: 0 }
              }
              transition={{ delay: 0.8, duration: 0.8 }}
              className='absolute -bottom-8 -right-8 text-[150px] text-purple-400 font-serif leading-none pointer-events-none rotate-180'
            >
              "
            </motion.div>
          </GlassCard>
        </motion.div>

        {/* Enhanced stats with better visual hierarchy */}
        <motion.div
          variants={itemVariants}
          className='grid md:grid-cols-3 gap-4'
        >
          {[
            {
              value: "2+",
              label: "Years of Study",
              icon: "📚",
              gradient: "from-cyan-400 to-blue-400",
              delay: 0.8,
            },
            {
              value: "QA/BA",
              label: "Focus Areas",
              icon: "🎯",
              gradient: "from-blue-400 to-purple-400",
              delay: 1,
            },
            {
              value: "∞",
              label: "Learning Mindset",
              icon: "🚀",
              gradient: "from-purple-400 to-pink-400",
              delay: 1.2,
            },
          ].map((stat, index) => (
            <GlassCard
              key={stat.label}
              className='text-center p-8 group hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-500 relative overflow-hidden'
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.5, opacity: 0 }
                }
                transition={{
                  delay: stat.delay,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {/* Icon with animation */}
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className='text-4xl mb-4 inline-block'
                >
                  {stat.icon}
                </motion.div>

                {/* Value */}
                <motion.div
                  className={`text-5xl font-bold text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text mb-2`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <div className='text-gray-400 text-sm font-medium tracking-wide'>
                  {stat.label}
                </div>

                {/* Hover effect background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                />
              </motion.div>
            </GlassCard>
          ))}
        </motion.div>

        {/* Enhanced core principles with better visual design */}
        <motion.div variants={itemVariants}>
          <GlassCard className='p-8 md:p-10 relative overflow-hidden'>
            {/* Background pattern */}
            <div
              className='absolute inset-0 opacity-[0.02]'
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.5) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />

            <div className='relative z-10'>
              <div className='flex items-center gap-4 mb-8'>
                <motion.div
                  className='w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl shadow-lg'
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ⚡
                </motion.div>
                <h3 className='text-2xl md:text-3xl font-bold text-white flex items-center gap-3'>
                  <motion.span
                    className='w-3 h-3 rounded-full bg-cyan-400'
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  Core Principles
                </h3>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                {[
                  {
                    title: "Quality First",
                    description:
                      "Committed to delivering software that meets the highest standards of reliability and user satisfaction",
                    icon: "✨",
                    gradient: "from-cyan-500 to-blue-500",
                  },
                  {
                    title: "Detail-Oriented",
                    description:
                      "Meticulous attention to requirements, edge cases, and potential issues before they impact users",
                    icon: "🔍",
                    gradient: "from-blue-500 to-purple-500",
                  },
                  {
                    title: "User-Centered",
                    description:
                      "Always keeping end-users in mind when analyzing requirements and testing functionality",
                    icon: "💡",
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    title: "Continuous Learning",
                    description:
                      "Staying current with industry best practices, tools, and methodologies in QA and BA fields",
                    icon: "📈",
                    gradient: "from-pink-500 to-cyan-500",
                  },
                ].map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }
                    }
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className='p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300 group/card relative overflow-hidden'
                  >
                    {/* Icon in corner */}
                    <motion.div
                      className='absolute -top-2 -right-2 text-6xl opacity-10 group-hover/card:opacity-20 transition-opacity'
                      animate={{
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    >
                      {principle.icon}
                    </motion.div>

                    {/* Icon badge */}
                    <motion.div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${principle.gradient} flex items-center justify-center text-xl mb-4 shadow-lg`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {principle.icon}
                    </motion.div>

                    <h4 className='text-cyan-400 font-bold text-lg mb-3 group-hover/card:text-cyan-300 transition-colors flex items-center gap-2'>
                      {principle.title}
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className='text-sm'
                      >
                        →
                      </motion.span>
                    </h4>
                    <p className='text-gray-400 text-sm leading-relaxed group-hover/card:text-gray-300 transition-colors'>
                      {principle.description}
                    </p>

                    {/* Progress indicator */}
                    <motion.div className='mt-4 h-1 bg-white/10 rounded-full overflow-hidden'>
                      <motion.div
                        className={`h-full bg-gradient-to-r ${principle.gradient}`}
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: "100%" } : { width: "0%" }}
                        transition={{ delay: 1.6 + index * 0.1, duration: 0.8 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* New: Personal approach section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <GlassCard className='p-8 bg-gradient-to-br from-white/5 to-white/[0.02]'>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-6'>
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className='w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center text-3xl shadow-xl'
              >
                💫
              </motion.div>

              <div className='flex-1'>
                <h4 className='text-xl font-bold text-white mb-2'>
                  My Approach
                </h4>
                <p className='text-gray-400 leading-relaxed'>
                  I believe in combining{" "}
                  <span className='text-cyan-400 font-semibold'>
                    technical expertise
                  </span>{" "}
                  with
                  <span className='text-blue-400 font-semibold'>
                    {" "}
                    empathy
                  </span>{" "}
                  and
                  <span className='text-purple-400 font-semibold'>
                    {" "}
                    clear communication
                  </span>{" "}
                  to bridge the gap between technical teams and business
                  stakeholders.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className='px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold cursor-pointer hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300'
              >
                Learn More →
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
