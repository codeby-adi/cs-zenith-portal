import { useState } from 'react';
import { Brain, Shield, Database, Cpu, Globe, Zap, ExternalLink, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import labBg from '@/assets/lab-bg.jpg';

const ResearchSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const researchAreas = [
    {
      icon: Brain,
      title: 'Artificial Intelligence Lab',
      description: 'Cutting-edge research in machine learning, deep learning, and AI applications.',
      image: labBg,
      projects: 12,
      faculty: 8,
      students: 45,
      categories: ['ai', 'ml'],
      highlights: ['Computer Vision', 'Natural Language Processing', 'Robotics', 'Expert Systems']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Research Center',
      description: 'Advanced research in network security, cryptography, and digital forensics.',
      image: labBg,
      projects: 8,
      faculty: 5,
      students: 30,
      categories: ['security', 'networks'],
      highlights: ['Blockchain Security', 'IoT Security', 'Malware Analysis', 'Incident Response']
    },
    {
      icon: Database,
      title: 'Big Data Analytics Lab',
      description: 'Research in big data processing, analytics, and distributed systems.',
      image: labBg,
      projects: 10,
      faculty: 6,
      students: 35,
      categories: ['data', 'systems'],
      highlights: ['Distributed Computing', 'Data Mining', 'Cloud Analytics', 'Real-time Processing']
    },
    {
      icon: Cpu,
      title: 'High Performance Computing',
      description: 'Advanced computing systems, parallel processing, and optimization.',
      image: labBg,
      projects: 6,
      faculty: 4,
      students: 25,
      categories: ['systems', 'hpc'],
      highlights: ['Parallel Algorithms', 'GPU Computing', 'Quantum Computing', 'Performance Optimization']
    },
    {
      icon: Globe,
      title: 'Software Engineering Lab',
      description: 'Research in software development methodologies and tools.',
      image: labBg,
      projects: 9,
      faculty: 7,
      students: 40,
      categories: ['software', 'engineering'],
      highlights: ['Agile Methods', 'DevOps', 'Software Testing', 'Code Quality']
    },
    {
      icon: Zap,
      title: 'IoT & Embedded Systems',
      description: 'Internet of Things, embedded systems, and smart device research.',
      image: labBg,
      projects: 7,
      faculty: 5,
      students: 28,
      categories: ['iot', 'embedded'],
      highlights: ['Smart Cities', 'Wearable Computing', 'Sensor Networks', 'Edge Computing']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Research' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'security', label: 'Security' },
    { id: 'data', label: 'Data Science' },
    { id: 'systems', label: 'Systems' },
    { id: 'software', label: 'Software' },
    { id: 'iot', label: 'IoT' }
  ];

  const filteredAreas = activeFilter === 'all' 
    ? researchAreas 
    : researchAreas.filter(area => area.categories.includes(activeFilter));

  const totalStats = researchAreas.reduce((acc, area) => ({
    projects: acc.projects + area.projects,
    faculty: acc.faculty + area.faculty,
    students: acc.students + area.students
  }), { projects: 0, faculty: 0, students: 0 });

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-muted/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-glow gradient-primary bg-clip-text text-transparent">
              Research & Labs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our research labs are at the forefront of technological innovation, 
            pushing the boundaries of computer science and engineering.
          </p>
          
          {/* Overall Statistics */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass-card text-center">
              <div className="text-3xl font-bold text-glow gradient-primary bg-clip-text text-transparent">
                {totalStats.projects}
              </div>
              <div className="text-muted-foreground">Active Projects</div>
            </div>
            <div className="glass-card text-center">
              <div className="text-3xl font-bold text-glow gradient-secondary bg-clip-text text-transparent">
                {totalStats.faculty}
              </div>
              <div className="text-muted-foreground">Research Faculty</div>
            </div>
            <div className="glass-card text-center">
              <div className="text-3xl font-bold text-glow gradient-accent bg-clip-text text-transparent">
                {totalStats.students}
              </div>
              <div className="text-muted-foreground">Research Students</div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`${
                activeFilter === filter.id 
                  ? "gradient-primary" 
                  : "glass hover:glow-primary"
              } transition-all duration-300`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Research Labs Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredAreas.map((area, index) => (
            <div
              key={index}
              className="glass-card hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Lab Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg">
                    <area.icon size={24} className="text-primary" />
                  </div>
                </div>
              </div>

              {/* Lab Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {area.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-glass-border/20">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{area.projects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-secondary">{area.faculty}</div>
                    <div className="text-xs text-muted-foreground">Faculty</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">{area.students}</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                </div>

                {/* Research Highlights */}
                <div>
                  <h4 className="font-semibold text-primary mb-2 text-sm">Research Areas:</h4>
                  <div className="flex flex-wrap gap-1">
                    {area.highlights.map((highlight, highlightIndex) => (
                      <Badge
                        key={highlightIndex}
                        variant="outline"
                        className="text-xs bg-primary/5 border-primary/20 text-muted-foreground"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full glass group-hover:glow-primary transition-all"
                >
                  <Users size={16} className="mr-2" />
                  Explore Lab
                  <ExternalLink size={14} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Publications & Collaborations */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div className="glass-card animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              Recent Publications
            </h3>
            <div className="space-y-4">
              {[
                'Advanced Deep Learning Techniques for Medical Image Analysis',
                'Blockchain-based Security Framework for IoT Networks',
                'Distributed Computing Solutions for Big Data Processing',
                'AI-Powered Cybersecurity Threat Detection Systems'
              ].map((publication, index) => (
                <div
                  key={index}
                  className="p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors"
                >
                  <p className="text-foreground font-medium">{publication}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Published in IEEE Transactions • 2024
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 gradient-secondary bg-clip-text text-transparent">
              Industry Collaborations
            </h3>
            <div className="space-y-4">
              {[
                { company: 'Google Research', project: 'AI Ethics & Fairness' },
                { company: 'Microsoft Azure', project: 'Cloud Security Solutions' },
                { company: 'IBM Watson', project: 'Natural Language Processing' },
                { company: 'Amazon Web Services', project: 'Scalable ML Infrastructure' }
              ].map((collab, index) => (
                <div
                  key={index}
                  className="p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors"
                >
                  <p className="text-foreground font-medium">{collab.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {collab.project}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;