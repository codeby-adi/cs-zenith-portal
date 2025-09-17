import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Home, Users, BookOpen, FlaskConical, Mail, Info } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  section: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home, section: 'hero' },
  { id: 'about', label: 'About', icon: Info, section: 'about' },
  { id: 'faculty', label: 'Faculty', icon: Users, section: 'faculty' },
  { id: 'courses', label: 'Courses', icon: BookOpen, section: 'courses' },
  { id: 'research', label: 'Research', icon: FlaskConical, section: 'research' },
  { id: 'contact', label: 'Contact', icon: Mail, section: 'contact' },
];

const DynamicNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('[data-section]');
      let currentSection = 'home';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
          currentSection = section.getAttribute('data-section') || 'home';
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating Navigation */}
      <motion.div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  group relative p-3 rounded-full backdrop-blur-sm border transition-all duration-300
                  ${isActive 
                    ? 'bg-primary/20 border-primary text-primary' 
                    : 'bg-black/10 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20'
                  }
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
                
                {/* Tooltip */}
                <motion.div
                  className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/80 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  {item.label}
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.button
        className="fixed bottom-6 right-6 p-4 bg-primary rounded-full text-white shadow-lg z-40 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              className="absolute bottom-20 right-6 bg-black/80 backdrop-blur-sm rounded-lg p-4 space-y-2"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      flex items-center gap-3 w-full p-3 rounded-lg transition-all
                      ${isActive 
                        ? 'bg-primary/20 text-primary' 
                        : 'text-white/80 hover:bg-white/10'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DynamicNavigation;