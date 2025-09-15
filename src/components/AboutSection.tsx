import { Award, Users, BookOpen, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import HologramCard from './HologramCard';
import AnimatedCounter from './AnimatedCounter';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      value: '95',
      suffix: '%',
      label: 'Placement Rate',
      color: '#00ffff',
    },
    {
      icon: Users,
      value: '50',
      suffix: '+',
      label: 'Industry Partners',
      color: '#ff00ff',
    },
    {
      icon: BookOpen,
      value: '25',
      suffix: '',
      label: 'Research Areas',
      color: '#ffff00',
    },
    {
      icon: Target,
      value: '100',
      suffix: '+',
      label: 'AI Projects',
      color: '#00ff88',
    },
  ];

  const timeline = [
    { year: '1999', event: 'Department established with first batch of 30 students' },
    { year: '2005', event: 'Launched M.Tech program in Computer Science' },
    { year: '2010', event: 'Established AI & Machine Learning Research Lab' },
    { year: '2015', event: 'Introduced PhD program and Cybersecurity specialization' },
    { year: '2020', event: 'Achieved NAAC A+ accreditation and expanded research facilities' },
    { year: '2024', event: 'Launched interdisciplinary programs and industry partnerships' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/20 matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 ai-text"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Our Department
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Leading the future of technology education through cutting-edge research, 
            innovative curriculum, and world-class faculty dedicated to AI and emerging technologies.
          </motion.p>
        </motion.div>

        {/* Enhanced Animated Counters */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {[
            { number: 500, suffix: '+', label: 'AI Students', color: '#00ffff' },
            { number: 25, suffix: '+', label: 'ML Experts', color: '#ff00ff' },
            { number: 15, suffix: '', label: 'Quantum Labs', color: '#ffff00' },
            { number: 25, suffix: '', label: 'Years Innovation', color: '#00ff88' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
            >
              <HologramCard className="text-center neural-card" glowColor={item.color}>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter
                    end={item.number}
                    suffix={item.suffix}
                    className="ai-text"
                  />
                </div>
                <motion.div 
                  className="text-muted-foreground font-medium"
                  animate={{ 
                    color: [
                      'hsl(var(--muted-foreground))',
                      item.color,
                      'hsl(var(--muted-foreground))'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {item.label}
                </motion.div>
              </HologramCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Achievements Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                rotateY: 15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="perspective-1000"
            >
              <HologramCard glowColor={achievement.color}>
                <div className="mb-4">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <achievement.icon 
                      size={48} 
                      style={{ color: achievement.color }}
                    />
                  </motion.div>
                </div>
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter
                    end={parseInt(achievement.value)}
                    suffix={achievement.suffix}
                    className="ai-text"
                  />
                </div>
                <motion.div 
                  className="text-muted-foreground font-medium hologram-text"
                  animate={{
                    textShadow: [
                      `0 0 10px ${achievement.color}40`,
                      `0 0 20px ${achievement.color}80`,
                      `0 0 10px ${achievement.color}40`,
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {achievement.label}
                </motion.div>
              </HologramCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Timeline */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl font-bold text-center mb-12 ai-text"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our AI Evolution Journey
          </motion.h3>
          <div className="relative">
            {/* Enhanced Timeline line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 cyber-border"
              style={{
                background: 'linear-gradient(to bottom, #00ffff, #ff00ff, #ffff00)'
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            />
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? 100 : -100,
                  rotateY: index % 2 === 0 ? 45 : -45
                }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <HologramCard 
                    glowColor={index % 3 === 0 ? '#00ffff' : index % 3 === 1 ? '#ff00ff' : '#ffff00'}
                  >
                    <motion.div 
                      className="text-lg font-bold mb-2 ai-text"
                      animate={{
                        textShadow: [
                          `0 0 10px ${index % 3 === 0 ? '#00ffff' : index % 3 === 1 ? '#ff00ff' : '#ffff00'}40`,
                          `0 0 20px ${index % 3 === 0 ? '#00ffff' : index % 3 === 1 ? '#ff00ff' : '#ffff00'}80`,
                          `0 0 10px ${index % 3 === 0 ? '#00ffff' : index % 3 === 1 ? '#ff00ff' : '#ffff00'}40`,
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {item.year}
                    </motion.div>
                    <p className="text-muted-foreground hologram-text">{item.event}</p>
                  </HologramCard>
                </div>
                
                {/* Enhanced Timeline dot */}
                <motion.div 
                  className="relative flex-shrink-0"
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.div 
                    className="w-6 h-6 rounded-full border-4 border-background neural-card"
                    style={{
                      background: `linear-gradient(45deg, ${
                        index % 3 === 0 ? '#00ffff' : index % 3 === 1 ? '#ff00ff' : '#ffff00'
                      }, ${
                        index % 3 === 0 ? '#0080ff' : index % 3 === 1 ? '#ff0080' : '#ffff80'
                      })`
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 10px ${index % 3 === 0 ? '#00ffff' : index % 3 === 1 ? '#ff00ff' : '#ffff00'}40`,
                        `0 0 20px ${index % 3 === 0 ? '#00ffff' : index % 3 === 1 ? '#ff00ff' : '#ffff00'}80`,
                        `0 0 30px ${index % 3 === 0 ? '#00ffff' : index % 3 === 1 ? '#ff00ff' : '#ffff00'}60`,
                      ],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;