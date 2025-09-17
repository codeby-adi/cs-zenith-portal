import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, BookOpen, Award } from 'lucide-react';

interface StatData {
  label: string;
  value: number;
  icon: React.ComponentType<any>;
  color: string;
  trend: number;
}

const RealTimeStats = () => {
  const [stats, setStats] = useState<StatData[]>([
    { label: 'Active Students', value: 1250, icon: Users, color: 'hsl(var(--primary))', trend: 5.2 },
    { label: 'Research Projects', value: 45, icon: BookOpen, color: 'hsl(var(--accent))', trend: 12.8 },
    { label: 'Publications', value: 230, icon: Award, color: '#4ecdc4', trend: 8.4 },
    { label: 'Industry Partners', value: 35, icon: TrendingUp, color: '#ff6b6b', trend: 15.6 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => prev.map(stat => ({
        ...stat,
        value: stat.value + Math.floor(Math.random() * 3) - 1, // Random small changes
        trend: stat.trend + (Math.random() - 0.5) * 0.5
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            className="relative p-4 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, borderColor: stat.color }}
          >
            <div className="flex items-center justify-between mb-2">
              <Icon size={24} style={{ color: stat.color }} />
              <motion.div
                className="flex items-center text-xs"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUp size={12} className="mr-1 text-green-400" />
                <span className="text-green-400">+{stat.trend.toFixed(1)}%</span>
              </motion.div>
            </div>
            
            <motion.div
              key={stat.value}
              className="text-2xl font-bold text-white"
              initial={{ scale: 1.2, color: stat.color }}
              animate={{ scale: 1, color: '#ffffff' }}
              transition={{ duration: 0.3 }}
            >
              {stat.value.toLocaleString()}
            </motion.div>
            
            <div className="text-sm text-gray-400">{stat.label}</div>
            
            {/* Animated background pulse */}
            <motion.div
              className="absolute inset-0 rounded-lg opacity-20"
              style={{ backgroundColor: stat.color }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                delay: index * 0.5
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default RealTimeStats;