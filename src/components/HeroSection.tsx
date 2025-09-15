import { ArrowRight, Code, Database, Cpu, Brain, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import ParticleBackground from './ParticleBackground';
import AnimatedCounter from './AnimatedCounter';
import FloatingElements from './FloatingElements';

const HeroSection = () => {
  const floatingIcons = [
    { Icon: Code, delay: 0, position: 'top-20 left-20', color: '#00ffff' },
    { Icon: Database, delay: 0.5, position: 'top-40 right-20', color: '#ff00ff' },
    { Icon: Cpu, delay: 1, position: 'bottom-40 left-40', color: '#ffff00' },
    { Icon: Brain, delay: 1.5, position: 'top-60 left-60', color: '#00ff88' },
    { Icon: Zap, delay: 2, position: 'bottom-20 right-40', color: '#ff6600' },
    { Icon: Shield, delay: 2.5, position: 'top-32 right-60', color: '#ff0066' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden matrix-bg">
      {/* 3D Particle Background */}
      <ParticleBackground />
      
      {/* Floating Elements */}
      <FloatingElements />

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
        
        {/* AI Neural Network Overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.circle
                key={i}
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r={Math.random() * 3 + 1}
                fill="url(#neural-gradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: Math.random() * 5,
                  repeat: Infinity,
                }}
              />
            ))}
            <defs>
              <radialGradient id="neural-gradient">
                <stop offset="0%" stopColor="#00ffff" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Enhanced Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} hidden lg:block pointer-events-none`}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0, 0.6, 0.3, 0.6],
            scale: [0.8, 1.2, 1, 1.1],
            rotate: [0, 360],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            delay: delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            animate={{
              filter: [
                `drop-shadow(0 0 10px ${color})`,
                `drop-shadow(0 0 30px ${color})`,
                `drop-shadow(0 0 20px ${color})`,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon size={48} style={{ color }} />
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          >
            <motion.span 
              className="ai-text font-extrabold"
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: 'linear' 
              }}
            >
              Computer Science
            </motion.span>
            <br />
            <motion.span 
              className="text-foreground hologram-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              & Engineering
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.span
              animate={{ 
                textShadow: [
                  '0 0 10px rgba(0, 255, 255, 0.3)',
                  '0 0 20px rgba(0, 255, 255, 0.6)',
                  '0 0 10px rgba(0, 255, 255, 0.3)'
                ] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Shaping the future through innovation, research, and excellence in computer science education.
              Join us in exploring the frontiers of AI and technology.
            </motion.span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              className="perspective-1000"
            >
              <Button 
                size="lg" 
                className="gradient-primary hover:scale-105 transition-all duration-300 
                           px-8 py-4 text-lg font-semibold group cyber-border neural-card"
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Explore Programs
                </motion.span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotateY: -5 }}
              whileTap={{ scale: 0.95 }}
              className="perspective-1000"
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="glass hover:glow-primary px-8 py-4 text-lg font-semibold hologram-text cyber-border"
              >
                Research Areas
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            {[
              { number: 500, suffix: '+', label: 'Students', color: '#00ffff' },
              { number: 25, suffix: '+', label: 'Faculty', color: '#ff00ff' },
              { number: 15, suffix: '+', label: 'Research Labs', color: '#ffff00' },
              { number: 100, suffix: '+', label: 'Publications', color: '#00ff88' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card text-center hover-lift neural-card cyber-border perspective-1000"
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  delay: 2 + index * 0.1,
                  duration: 0.6,
                  ease: 'easeOut'
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: `0 20px 40px ${stat.color}40`
                }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    className="ai-text"
                  />
                </div>
                <motion.div 
                  className="text-muted-foreground font-medium"
                  animate={{ 
                    color: [
                      'hsl(var(--muted-foreground))',
                      stat.color,
                      'hsl(var(--muted-foreground))'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center cyber-border"
          animate={{
            borderColor: [
              'hsla(var(--primary), 0.5)',
              'hsla(var(--primary), 1)',
              'hsla(var(--primary), 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;