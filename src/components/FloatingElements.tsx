import { motion } from 'framer-motion';
import { Code, Database, Cpu, Brain, Zap, Globe, Shield, Rocket } from 'lucide-react';

const icons = [
  { Icon: Code, color: '#00ffff', delay: 0 },
  { Icon: Database, color: '#ff00ff', delay: 0.5 },
  { Icon: Cpu, color: '#ffff00', delay: 1 },
  { Icon: Brain, color: '#00ff88', delay: 1.5 },
  { Icon: Zap, color: '#ff6600', delay: 2 },
  { Icon: Globe, color: '#6600ff', delay: 2.5 },
  { Icon: Shield, color: '#ff0066', delay: 3 },
  { Icon: Rocket, color: '#66ff00', delay: 3.5 },
];

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {icons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${10 + (index % 3) * 30}%`,
            top: `${10 + Math.floor(index / 3) * 25}%`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0, 0.3, 0.6, 0.3, 0],
            scale: [0.8, 1.2, 1, 1.1, 0.9],
            rotate: [0, 360],
            y: [0, -50, 0, -30, 0],
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
                `drop-shadow(0 0 20px ${color})`,
                `drop-shadow(0 0 30px ${color})`,
                `drop-shadow(0 0 20px ${color})`,
                `drop-shadow(0 0 10px ${color})`,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon size={32} style={{ color }} />
          </motion.div>
        </motion.div>
      ))}

      {/* Geometric shapes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-1 h-1 bg-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 3, 1],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Neural network lines */}
      <svg className="absolute inset-0 w-full h-full">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="url(#gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff00ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffff00" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FloatingElements;