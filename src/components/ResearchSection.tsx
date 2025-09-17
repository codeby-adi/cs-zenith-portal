import { useState } from 'react';
import { Brain, Shield, Database, Cpu, Globe, Zap, ExternalLink, Users, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
      highlights: ['Computer Vision', 'Natural Language Processing', 'Robotics', 'Expert Systems'],
      location: 'Block A, Floor 3',
      established: '2018',
      head: 'Dr. Sarah Johnson',
      equipment: ['NVIDIA DGX A100', 'High-performance GPUs', 'Quantum Simulators', 'IoT Sensors'],
      achievements: ['Best AI Research Lab 2023', '50+ Publications', 'Industry Partnerships'],
      ongoingProjects: [
        'Automated Medical Diagnosis using Deep Learning',
        'Natural Language Processing for Indian Languages',
        'Computer Vision for Autonomous Vehicles',
        'AI Ethics and Bias Detection Framework'
      ]
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
      highlights: ['Blockchain Security', 'IoT Security', 'Malware Analysis', 'Incident Response'],
      location: 'Block B, Floor 2',
      established: '2019',
      head: 'Dr. Michael Chen',
      equipment: ['Penetration Testing Tools', 'Network Analyzers', 'Forensic Workstations', 'Blockchain Test Network'],
      achievements: ['Cybersecurity Excellence Award 2024', '30+ Security Audits', 'Government Collaborations'],
      ongoingProjects: [
        'Blockchain-based Identity Management System',
        'IoT Security Framework Development',
        'Advanced Persistent Threat Detection',
        'Quantum Cryptography Research'
      ]
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
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="glass-card hover-lift group animate-fade-in cursor-pointer"
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
              </DialogTrigger>

              {/* Detailed Lab Modal */}
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-card">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold gradient-primary bg-clip-text text-transparent flex items-center">
                    <area.icon size={32} className="mr-4 text-primary" />
                    {area.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-muted-foreground">
                    {area.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-8">
                  {/* Lab Overview */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="glass-card text-center">
                          <div className="text-2xl font-bold text-primary">{area.projects}</div>
                          <div className="text-sm text-muted-foreground">Active Projects</div>
                        </div>
                        <div className="glass-card text-center">
                          <div className="text-2xl font-bold text-secondary">{area.faculty}</div>
                          <div className="text-sm text-muted-foreground">Faculty Members</div>
                        </div>
                        <div className="glass-card text-center">
                          <div className="text-2xl font-bold text-accent">{area.students}</div>
                          <div className="text-sm text-muted-foreground">Research Students</div>
                        </div>
                        <div className="glass-card text-center">
                          <div className="text-2xl font-bold text-primary">{area.established}</div>
                          <div className="text-sm text-muted-foreground">Established</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lab Information */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-3 flex items-center">
                          <MapPin size={20} className="mr-2" />
                          Lab Details
                        </h4>
                        <div className="space-y-2">
                          <p><span className="font-semibold">Location:</span> {area.location}</p>
                          <p><span className="font-semibold">Head:</span> {area.head}</p>
                          <p><span className="font-semibold">Established:</span> {area.established}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-primary mb-3 flex items-center">
                          <Award size={20} className="mr-2" />
                          Achievements
                        </h4>
                        <ul className="space-y-2">
                          {area.achievements?.map((achievement, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-3 flex items-center">
                          <Cpu size={20} className="mr-2" />
                          Equipment & Infrastructure
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {area.equipment?.map((item, idx) => (
                            <Badge key={idx} variant="outline" className="text-left justify-start bg-muted/10">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-primary mb-3">Research Areas</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {area.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="outline" className="bg-primary/5 border-primary/20">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ongoing Projects */}
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                      <BookOpen size={20} className="mr-2" />
                      Ongoing Research Projects
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {area.ongoingProjects?.map((project, idx) => (
                        <div key={idx} className="glass-card">
                          <h5 className="font-semibold text-foreground mb-2">{project}</h5>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar size={14} className="mr-1" />
                            In Progress
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="gradient-primary">
                      <Users className="mr-2" size={16} />
                      Join Research Team
                    </Button>
                    <Button variant="outline" className="glass">
                      <ExternalLink className="mr-2" size={16} />
                      View Publications
                    </Button>
                    <Button variant="outline" className="glass">
                      <Calendar className="mr-2" size={16} />
                      Schedule Visit
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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