import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactMethods = [
    {
      id: "email",
      icon: "📧",
      title: "Email",
      value: "your.email@gmail.com",
      link: "mailto:your.email@gmail.com",
      description: "Send me a message anytime",
      gradient: "from-cyan-500 to-blue-500",
      subtext: "Usually responds within 24 hours"
    },
    {
      id: "linkedin",
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/yourname",
      link: "https://linkedin.com/in/yourname",
      description: "Let's connect professionally",
      gradient: "from-blue-500 to-indigo-500",
      subtext: "Professional network & updates"
    },
    {
      id: "github",
      icon: "💻",
      title: "GitHub",
      value: "github.com/yourname",
      link: "https://github.com/yourname",
      description: "Check out my code",
      gradient: "from-purple-500 to-pink-500",
      subtext: "Projects & contributions"
    },
  ];

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
      {/* Enhanced animated background with multiple layers */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='absolute top-20 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none'
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className='absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none'
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute rounded-full'
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(135deg, rgba(34, 211, 238, ${0.3 + Math.random() * 0.3}), rgba(147, 51, 234, ${0.3 + Math.random() * 0.3}))`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      <SectionTitle title='Contact' subtitle="Let's connect and collaborate" />

      {/* Enhanced intro section with better visual design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='mb-10'
      >
        <GlassCard className='text-center p-10 relative overflow-hidden group'>
          {/* Animated gradient background */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700'
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

          <div className='relative z-10'>
            {/* Icon with enhanced animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className='inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-4xl mb-6 shadow-2xl relative'
            >
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                👋
              </motion.div>
              {/* Pulsing glow */}
              <motion.div
                className='absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 blur-xl'
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

            <motion.p
              className='text-xl text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I'm always open to discussing new projects, opportunities, or just
              having a conversation about{' '}
              <span className='text-cyan-400 font-semibold'>QA</span> and{' '}
              <span className='text-blue-400 font-semibold'>Business Analysis</span>.
            </motion.p>

            {/* Status badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30'
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
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
                    ease: "easeInOut",
                  }}
                />
                <span className='text-green-400 font-bold'>Available for collaboration</span>
              </div>
            </motion.div>
          </div>

          {/* Decorative corners */}
          <div className='absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-400/20 rounded-tl-2xl' />
          <div className='absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-purple-400/20 rounded-br-2xl' />
        </GlassCard>
      </motion.div>

      {/* Enhanced contact methods with improved design */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className='grid gap-6 mb-10'
      >
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.id}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            onMouseEnter={() => setHoveredCard(method.id)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ scale: 1.02, y: -5 }}
            className='block relative'
          >
            <GlassCard className='p-6 md:p-8 group hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden'>
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
                <motion.div
                  className='absolute inset-0 pointer-events-none'
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className='absolute w-1 h-1 bg-cyan-400 rounded-full'
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ 
                        scale: [0, 1, 0], 
                        opacity: [1, 1, 0],
                        y: [-20, -40]
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        ease: "easeOut"
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
                    <h3 className='text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2'>
                      {method.title}
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        animate={hoveredCard === method.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                        className='text-lg'
                      >
                        →
                      </motion.span>
                    </h3>
                  </div>
                  
                  <p className='text-gray-400 text-base mb-3'>
                    {method.description}
                  </p>
                  
                  <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3'>
                    <a
                      href={method.link}
                      target={method.id !== "email" ? "_blank" : undefined}
                      rel={method.id !== "email" ? "noopener noreferrer" : undefined}
                      className='text-cyan-400 font-semibold truncate hover:text-cyan-300 transition-colors flex items-center gap-2 group/link'
                    >
                      {method.value}
                      <motion.span
                        className='opacity-0 group-hover/link:opacity-100'
                        animate={hoveredCard === method.id ? { x: [0, 5, 0] } : {}}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut"
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
                        className='px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 text-sm font-medium transition-all duration-300 flex items-center gap-2'
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
                  
                  <p className='text-gray-500 text-sm mt-2 flex items-center gap-2'>
                    <span>📍</span>
                    {method.subtext}
                  </p>
                </div>

                {/* Enhanced arrow with animation */}
                <motion.div
                  className='text-gray-400 group-hover:text-cyan-400 transition-colors flex-shrink-0'
                  animate={hoveredCard === method.id ? { x: [0, 10, 0] } : { x: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: hoveredCard === method.id ? Infinity : 0,
                    ease: "easeInOut"
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
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced quick response section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className='mb-10'
      >
        <GlassCard className='p-10 text-center bg-gradient-to-br from-white/5 to-white/[0.02] relative overflow-hidden group'>
          {/* Animated background pattern */}
          <div 
            className='absolute inset-0 opacity-[0.02]'
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.5) 1px, transparent 0)`,
              backgroundSize: '30px 30px',
            }}
          />

          <div className='relative z-10'>
            {/* Enhanced icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              className='inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-4xl mb-6 shadow-2xl relative'
            >
              <motion.div
                animate={{
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⚡
              </motion.div>
              {/* Glow effect */}
              <motion.div
                className='absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 blur-2xl'
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            <motion.h3
              className='text-2xl md:text-3xl font-bold text-white mb-4'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Quick Response Time
            </motion.h3>

            <motion.p
              className='text-gray-400 mb-8 text-lg max-w-2xl mx-auto'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              I typically respond to all inquiries within <span className='text-cyan-400 font-bold'>24 hours</span>. 
              Looking forward to hearing from you!
            </motion.p>

            {/* Enhanced social proof indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className='flex flex-wrap justify-center gap-8'
            >
              {[
                { icon: '🟢', label: 'Active', color: 'green' },
                { icon: '🌍', label: 'Available Worldwide', color: 'cyan' },
                { icon: '🕐', label: 'Flexible Schedule', color: 'blue' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className='flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300'
                >
                  <span className='text-xl'>{item.icon}</span>
                  <span className='text-gray-400 font-medium'>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Enhanced download resume button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 1, duration: 0.6 }}
        className='text-center'
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className='group relative inline-flex items-center gap-3 px-10 py-4 rounded-xl border-2 border-white/20 text-white font-bold hover:border-cyan-400/50 hover:bg-white/5 transition-all duration-300 overflow-hidden'
        >
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          />
          <motion.span
            className='text-2xl'
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            📄
          </motion.span>
          <span className='relative z-10 group-hover:text-cyan-400 transition-colors duration-300'>
            Download Resume
          </span>
          <motion.span
            className='relative z-10 group-hover:text-cyan-400 transition-colors duration-300'
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            →
          </motion.span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Contact;