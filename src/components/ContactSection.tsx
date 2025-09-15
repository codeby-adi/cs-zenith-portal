import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'Department of Computer Science & Engineering',
        'Main Building, 3rd Floor',
        'ABC College of Engineering',
        'City, State - 123456'
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+91 12345 67890 (Office)',
        '+91 12345 67891 (Admissions)',
        '+91 12345 67892 (Research)'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'head.cse@college.edu',
        'admissions.cse@college.edu',
        'research.cse@college.edu'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-glow gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our programs, research opportunities, or admissions? 
            We'd love to hear from you and help guide your journey in computer science.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 gradient-secondary bg-clip-text text-transparent">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="John" 
                    className="glass focus:glow-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="glass focus:glow-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="john.doe@example.com" 
                  className="glass focus:glow-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input 
                  type="tel" 
                  placeholder="+91 12345 67890" 
                  className="glass focus:glow-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select className="w-full px-3 py-2 glass rounded-md focus:glow-primary transition-all bg-transparent border border-input">
                  <option value="">Select a topic</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="research">Research Opportunities</option>
                  <option value="faculty">Faculty Information</option>
                  <option value="programs">Program Details</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  className="glass focus:glow-primary transition-all resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full gradient-primary hover:scale-105 transition-all duration-300"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="glass hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <info.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-muted-foreground text-sm"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map Placeholder */}
            <Card className="glass hover-lift animate-fade-in">
              <CardContent className="p-0">
                <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-primary mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Campus Location
                    </h4>
                    <p className="text-muted-foreground">
                      Interactive map will be integrated here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="glass hover-lift animate-fade-in">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Quick Links
                </h4>
                <div className="space-y-3">
                  {[
                    'Admission Guidelines',
                    'Program Brochures',
                    'Faculty Directory',
                    'Research Publications',
                    'Student Resources'
                  ].map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block text-muted-foreground hover:text-primary transition-colors
                               hover:translate-x-2 duration-300"
                    >
                      → {link}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-16 text-center">
          <div className="glass-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
              Stay Connected
            </h3>
            <p className="text-muted-foreground mb-6">
              Follow us on social media and subscribe to our newsletter for the latest updates 
              on programs, research, and events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex space-x-4">
                {['LinkedIn', 'Twitter', 'Facebook', 'YouTube'].map((platform) => (
                  <Button
                    key={platform}
                    variant="outline"
                    size="sm"
                    className="glass hover:glow-primary transition-all"
                  >
                    {platform}
                  </Button>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email for updates"
                  className="glass min-w-64"
                />
                <Button className="gradient-primary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;