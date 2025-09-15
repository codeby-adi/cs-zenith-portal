import { MapPin, Phone, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Courses', href: '#courses' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  const programs = [
    'B.Tech CSE',
    'M.Tech CSE',
    'PhD CSE',
    'AI Specialization',
    'Cybersecurity',
    'Data Science',
  ];

  const resources = [
    'Academic Calendar',
    'Student Portal',
    'Faculty Portal',
    'Library',
    'Placement Cell',
    'Alumni Network',
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-background via-muted/5 to-background border-t border-glass-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Department Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-glow gradient-primary bg-clip-text text-transparent mb-4">
                CSE Department
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Leading the way in computer science education and research, 
                preparing students for the challenges of tomorrow's digital world.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                <MapPin size={18} className="flex-shrink-0" />
                <span className="text-sm">
                  ABC College of Engineering, Main Building, 3rd Floor, City, State - 123456
                </span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm">+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm">head.cse@college.edu</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-3">Follow us:</p>
              <div className="flex space-x-3">
                {['LinkedIn', 'Twitter', 'Facebook', 'YouTube', 'Instagram'].map((platform) => (
                  <Button
                    key={platform}
                    variant="outline"
                    size="sm"
                    className="glass hover:glow-primary transition-all text-xs"
                  >
                    {platform}
                    <ExternalLink size={12} className="ml-1" />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors
                           hover:translate-x-1 duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <h5 className="text-md font-semibold text-foreground mt-8 mb-4">Programs</h5>
            <div className="space-y-2">
              {programs.map((program) => (
                <a
                  key={program}
                  href="#courses"
                  className="block text-muted-foreground hover:text-secondary transition-colors
                           hover:translate-x-1 duration-300 text-sm"
                >
                  {program}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Resources</h4>
            <div className="space-y-3">
              {resources.map((resource) => (
                <a
                  key={resource}
                  href="#"
                  className="block text-muted-foreground hover:text-accent transition-colors
                           hover:translate-x-1 duration-300 text-sm"
                >
                  {resource}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-8 p-4 glass rounded-lg">
              <h5 className="text-md font-semibold text-foreground mb-3">Stay Updated</h5>
              <p className="text-xs text-muted-foreground mb-3">
                Get the latest news and updates from our department.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-2 py-1 text-xs bg-transparent border border-input rounded focus:outline-none focus:border-primary transition-colors"
                />
                <Button size="sm" className="gradient-primary text-xs px-3">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © 2024 Department of Computer Science & Engineering. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Built with modern web technologies for educational excellence.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex space-x-4 text-xs">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Accessibility
                </a>
              </div>

              {/* Back to Top Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="glass hover:glow-primary transition-all"
              >
                <ArrowUp size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;