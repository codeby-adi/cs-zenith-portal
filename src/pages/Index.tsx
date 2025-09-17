import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FacultySection from '@/components/FacultySection';
import CoursesSection from '@/components/CoursesSection';
import ResearchSection from '@/components/ResearchSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import RobotFollower from '@/components/RobotFollower';
import DynamicNavigation from '@/components/DynamicNavigation';
import AdvancedParticles from '@/components/AdvancedParticles';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'CSE Department - Computer Science & Engineering | Excellence in Technology Education';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Leading Computer Science & Engineering department offering B.Tech, M.Tech, and PhD programs. Excellence in AI, Cybersecurity, Data Science research and education.'
      );
    }

    // Add smooth scrolling behavior
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add click listeners to navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Advanced Particle Background */}
      <AdvancedParticles />
      
      {/* Dynamic Navigation */}
      <DynamicNavigation />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div data-section="home">
          <ScrollReveal direction="fade" duration={1.2}>
            <HeroSection />
          </ScrollReveal>
        </div>
        
        {/* About Department */}
        <div data-section="about">
          <ScrollReveal direction="up" delay={0.2}>
            <AboutSection />
          </ScrollReveal>
        </div>
        
        {/* Faculty Showcase */}
        <div data-section="faculty">
          <ScrollReveal direction="left" delay={0.1}>
            <FacultySection />
          </ScrollReveal>
        </div>
        
        {/* Academic Programs */}
        <div data-section="courses">
          <ScrollReveal direction="right" delay={0.1}>
            <CoursesSection />
          </ScrollReveal>
        </div>
        
        {/* Research Labs */}
        <div data-section="research">
          <ScrollReveal direction="scale" delay={0.2}>
            <ResearchSection />
          </ScrollReveal>
        </div>
        
        {/* Contact Information */}
        <div data-section="contact">
          <ScrollReveal direction="up" delay={0.3}>
            <ContactSection />
          </ScrollReveal>
        </div>
      </main>
      
      {/* Footer */}
      <ScrollReveal direction="fade">
        <Footer />
      </ScrollReveal>
      
      {/* Interactive Robot Follower */}
      <RobotFollower />
    </div>
  );
};

export default Index;
