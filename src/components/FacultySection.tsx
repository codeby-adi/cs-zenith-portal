import { useState } from 'react';
import { Mail, ExternalLink, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import faculty1 from '@/assets/faculty-1.jpg';
import faculty2 from '@/assets/faculty-2.jpg';

interface Faculty {
  id: number;
  name: string;
  title: string;
  specialization: string;
  image: string;
  email: string;
  bio: string;
  research: string[];
  publications: number;
  experience: string;
}

const FacultySection = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const facultyMembers: Faculty[] = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      title: 'Professor & Head of Department',
      specialization: 'Artificial Intelligence & Machine Learning',
      image: faculty1,
      email: 'rajesh.kumar@college.edu',
      bio: 'Dr. Rajesh Kumar is a distinguished professor with over 15 years of experience in AI and ML research. He has led numerous industry collaborations and published extensively in top-tier journals.',
      research: ['Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Neural Networks'],
      publications: 75,
      experience: '15+ years',
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      title: 'Associate Professor',
      specialization: 'Cybersecurity & Data Science',
      image: faculty2,
      email: 'priya.sharma@college.edu',
      bio: 'Dr. Priya Sharma specializes in cybersecurity and data science with a focus on developing secure systems and advanced analytics solutions for enterprise applications.',
      research: ['Cybersecurity', 'Data Mining', 'Blockchain', 'Information Security'],
      publications: 45,
      experience: '12+ years',
    },
    // Add more faculty members as needed
  ];

  return (
    <section id="faculty" className="py-20 bg-gradient-to-br from-muted/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-glow gradient-primary bg-clip-text text-transparent">
              Our Faculty
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our world-class faculty members who are leading experts in their fields,
            committed to excellence in teaching and groundbreaking research.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {facultyMembers.map((faculty, index) => (
            <div
              key={faculty.id}
              className="glass-card hover-lift group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedFaculty(faculty)}
            >
              {/* Faculty Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Faculty Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {faculty.name}
                </h3>
                <p className="text-secondary font-medium">
                  {faculty.title}
                </p>
                <p className="text-muted-foreground text-sm">
                  {faculty.specialization}
                </p>

                {/* Quick Stats */}
                <div className="flex justify-between items-center pt-4 border-t border-glass-border/20">
                  <div className="flex items-center space-x-2">
                    <BookOpen size={16} className="text-accent" />
                    <span className="text-sm text-muted-foreground">
                      {faculty.publications} Publications
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award size={16} className="text-accent" />
                    <span className="text-sm text-muted-foreground">
                      {faculty.experience}
                    </span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                  <Button variant="outline" size="sm" className="w-full glass">
                    View Profile
                    <ExternalLink size={14} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Profile Modal */}
        <Dialog open={!!selectedFaculty} onOpenChange={() => setSelectedFaculty(null)}>
          <DialogContent className="glass max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedFaculty && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl gradient-primary bg-clip-text text-transparent">
                    {selectedFaculty.name}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="grid md:grid-cols-3 gap-8 mt-6">
                  {/* Left Column - Image and Quick Info */}
                  <div className="space-y-6">
                    <img
                      src={selectedFaculty.image}
                      alt={selectedFaculty.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Position</h4>
                        <p className="text-muted-foreground">{selectedFaculty.title}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Specialization</h4>
                        <p className="text-muted-foreground">{selectedFaculty.specialization}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Contact</h4>
                        <a
                          href={`mailto:${selectedFaculty.email}`}
                          className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail size={16} />
                          <span>{selectedFaculty.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Detailed Info */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Biography</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedFaculty.bio}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-3">Research Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedFaculty.research.map((area, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Publications</h4>
                        <p className="text-2xl font-bold text-secondary">
                          {selectedFaculty.publications}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Peer-reviewed papers
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Experience</h4>
                        <p className="text-2xl font-bold text-secondary">
                          {selectedFaculty.experience}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Teaching & Research
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FacultySection;