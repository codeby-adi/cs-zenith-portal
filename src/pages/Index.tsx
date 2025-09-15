import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FacultySection from '@/components/FacultySection';
import CoursesSection from '@/components/CoursesSection';
import ResearchSection from '@/components/ResearchSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Department */}
        <AboutSection />
        
        {/* Faculty Showcase */}
        <FacultySection />
        
        {/* Academic Programs */}
        <CoursesSection />
        
        {/* Research Labs */}
        <ResearchSection />
        
        {/* Contact Information */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
