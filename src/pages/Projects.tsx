import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<'all' | 'qa' | 'ba'>('all');

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
      {/* Enhanced background decoration with multiple layers */}
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
        className='absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none'
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
        className='absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none'
      />

      {/* Floating decorative elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 rounded-full'
          style={{
            left: `${5 + i * 9}%`,
            top: `${10 + (i % 4) * 20}%`,
            background: `linear-gradient(135deg, rgba(34, 211, 238, ${0.2 + (i % 3) * 0.1}), rgba(147, 51, 234, ${0.2 + (i % 3) * 0.1}))`,
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

      <SectionTitle
        title='Projects'
        subtitle='Practical work that demonstrates my skills'
      />

      {/* Enhanced project count and filter section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='mb-10'
      >
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm'>
          {/* Left side - Stats */}
          <div className='flex flex-wrap items-center gap-3'>
            <motion.div
              className='flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30'
              whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 0.5)" }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className='text-lg'
              >
                📁
              </motion.div>
              <span className='text-cyan-400 font-bold text-lg'>{projects.length}</span>
              <span className='text-gray-400 text-sm'>Projects</span>
            </motion.div>

            <motion.div
              className='px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium'
              whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              🎯 QA & BA Focus
            </motion.div>

            <motion.div
              className='px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium'
              whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              ⚡ Real-World Experience
            </motion.div>
          </div>

          {/* Right side - View Archive */}
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className='flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold hover:border-cyan-500/50 hover:bg-cyan-500/20 transition-all duration-300 group'
          >
            <span>View Archive</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </motion.div>

      {/* Enhanced projects grid with better spacing */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
        className='grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16'
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className='group'
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced call to action with better visual design */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className='text-center'
      >
        <div className='p-10 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 via-white/[0.03] to-white/[0.02] border border-white/10 backdrop-blur-sm max-w-3xl mx-auto relative overflow-hidden group'>
          {/* Animated background gradient */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700'
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: '200% 200%' }}
          />

          {/* Decorative corner elements */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className='absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-cyan-400/30 rounded-tl-2xl'
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className='absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-purple-400/30 rounded-br-2xl'
          />

          <div className='relative z-10'>
            {/* Icon with enhanced animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              className='inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-5xl mb-6 shadow-2xl relative'
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🤝
              </motion.div>
              {/* Pulsing glow */}
              <motion.div
                className='absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 blur-2xl'
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Title with gradient */}
            <motion.h3
              className='text-3xl md:text-4xl font-bold mb-4'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <span className='text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text'>
                Want to collaborate?
              </span>
            </motion.h3>

            {/* Description */}
            <motion.p
              className='text-gray-400 mb-8 text-lg leading-relaxed max-w-2xl mx-auto'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              I'm always interested in new projects and opportunities to apply my
              <span className='text-cyan-400 font-semibold'> QA</span> and 
              <span className='text-blue-400 font-semibold'> BA skills</span>. 
              Let's build something amazing together!
            </motion.p>

            {/* Enhanced CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className='flex flex-col sm:flex-row gap-4 justify-center items-center'
            >
              <motion.a
                href='/contact'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className='group/button relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 overflow-hidden'
              >
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400'
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className='relative z-10 flex items-center gap-3'>
                  Get in Touch
                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
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
                className='group/button relative inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-bold overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50'
              >
                <motion.div
                  className='absolute inset-0 bg-white/5'
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className='relative z-10 group-hover/button:text-cyan-400 transition-colors duration-300 flex items-center gap-3'>
                  View Skills
                  <span className='text-lg'>💼</span>
                </span>
              </motion.a>
            </motion.div>

            {/* Stats below CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className='mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8'
            >
              {[
                { icon: '⚡', label: 'Fast Turnaround', value: '24h Response' },
                { icon: '🎯', label: 'Quality Focus', value: 'Detail-Oriented' },
                { icon: '🚀', label: 'Ready to Start', value: 'Available Now' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className='flex flex-col items-center gap-2'
                >
                  <div className='text-2xl'>{stat.icon}</div>
                  <div className='text-cyan-400 font-semibold text-sm'>{stat.value}</div>
                  <div className='text-gray-500 text-xs uppercase tracking-wider'>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Decorative lines */}
          <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent' />
          <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent' />
        </div>
      </motion.div>

      {/* Additional section: Project categories or filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className='mt-16 max-w-4xl mx-auto'
      >
        <div className='p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm'>
          <div className='flex items-center gap-3 mb-6'>
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className='text-2xl'
            >
              📊
            </motion.div>
            <h4 className='text-xl font-bold text-white'>Project Impact</h4>
          </div>
          
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              { label: 'Test Cases', value: '100+', icon: '✅' },
              { label: 'Bugs Found', value: '50+', icon: '🐛' },
              { label: 'Requirements', value: '75+', icon: '📋' },
              { label: 'Documentation', value: '20+', icon: '📄' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className='p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300 text-center'
              >
                <div className='text-3xl mb-2'>{item.icon}</div>
                <div className='text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-1'>
                  {item.value}
                </div>
                <div className='text-gray-400 text-xs uppercase tracking-wider'>
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